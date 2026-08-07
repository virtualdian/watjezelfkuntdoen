// Rekent de radar uit: waar komt elke blip te staan, en welke paden hebben we
// nodig voor de ringen, de segmentscheidingen en de gebogen labels.

import { items, rings, segmenten } from '../data/radar.js';

export const CX = 450;
export const CY = 450;
export const RADII = [130, 200, 270, 340, 410];
export const R_LABEL = 428;
export const SIZE = 900;

const SPAN = 360 / segmenten.length;
const PAD_DEG = 3;
const PAD_RAD = 7;
const MIN_SPACING = 31;

const rad = (deg) => ((deg - 90) * Math.PI) / 180;
const pt = (r, deg) => [CX + r * Math.cos(rad(deg)), CY + r * Math.sin(rad(deg))];
const f = (n) => Math.round(n * 100) / 100;

// Deterministische ruis, zodat de houtnerf er elke build hetzelfde uitziet.
function noise(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function arcPath(r, fromDeg, toDeg) {
  const [x0, y0] = pt(r, fromDeg);
  const [x1, y1] = pt(r, toDeg);
  const sweep = toDeg > fromDeg ? 1 : 0;
  return `M ${f(x0)} ${f(y0)} A ${f(r)} ${f(r)} 0 0 ${sweep} ${f(x1)} ${f(y1)}`;
}

function wedgePath(rIn, rOut, fromDeg, toDeg) {
  const [ax, ay] = pt(rIn, fromDeg);
  const [bx, by] = pt(rOut, fromDeg);
  const [cx2, cy2] = pt(rOut, toDeg);
  const [dx, dy] = pt(rIn, toDeg);
  return [
    `M ${f(ax)} ${f(ay)}`,
    `L ${f(bx)} ${f(by)}`,
    `A ${f(rOut)} ${f(rOut)} 0 0 1 ${f(cx2)} ${f(cy2)}`,
    `L ${f(dx)} ${f(dy)}`,
    `A ${f(rIn)} ${f(rIn)} 0 0 0 ${f(ax)} ${f(ay)}`,
    'Z',
  ].join(' ');
}

export function buildRadar() {
  const segIndex = new Map(segmenten.map((s, i) => [s.id, i]));
  const ringIndex = new Map(rings.map((r, i) => [r.id, i]));

  // Nummeren in de volgorde waarin ze in de data staan.
  const genummerd = items.map((item, i) => ({ ...item, nr: i + 1 }));

  // Groeperen per cel: segment × ring.
  const cellen = new Map();
  for (const item of genummerd) {
    const key = `${item.segment}|${item.ring}`;
    if (!cellen.has(key)) cellen.set(key, []);
    cellen.get(key).push(item);
  }

  const blips = [];
  for (const [key, groep] of cellen) {
    const [segId, ringId] = key.split('|');
    const si = segIndex.get(segId);
    const ri = ringIndex.get(ringId);
    if (si === undefined || ri === undefined) continue;

    const a0 = si * SPAN + PAD_DEG;
    const a1 = (si + 1) * SPAN - PAD_DEG;
    const rIn = RADII[ri] + PAD_RAD;
    const rOut = RADII[ri + 1] - PAD_RAD;
    const rMid = (rIn + rOut) / 2;

    const arcLen = ((a1 - a0) * Math.PI * rMid) / 180;
    const maxBands = Math.max(1, Math.floor((rOut - rIn) / 23));
    const bands = Math.min(
      maxBands,
      Math.max(1, Math.ceil((groep.length * MIN_SPACING) / arcLen))
    );

    // Round robin over de banden, zodat ze gelijkmatig vullen.
    const perBand = Array.from({ length: bands }, () => []);
    groep.forEach((item, i) => perBand[i % bands].push(item));

    perBand.forEach((bandItems, b) => {
      const r = rIn + ((rOut - rIn) * (b + 0.5)) / bands;
      bandItems.forEach((item, k) => {
        const deg = a0 + ((a1 - a0) * (k + 0.5)) / bandItems.length;
        const jitter = (noise(item.nr) - 0.5) * 2;
        const [x, y] = pt(r + jitter, deg);
        blips.push({ ...item, x: f(x), y: f(y) });
      });
    });
  }

  blips.sort((a, b) => a.nr - b.nr);

  // Segmenten: scheidslijn, label-pad en de wiggen per ring.
  const segmentVormen = segmenten.map((seg, i) => {
    const a0 = i * SPAN;
    const a1 = (i + 1) * SPAN;
    const mid = (a0 + a1) / 2;
    const [lx, ly] = pt(RADII[0], a0);
    const [lx2, ly2] = pt(RADII[4], a0);

    // In de onderste helft draaien we de boog om, anders staat de tekst op z'n kop.
    const onder = mid > 90 && mid < 270;
    const labelPad = onder
      ? arcPath(R_LABEL - 26, a1 - PAD_DEG, a0 + PAD_DEG)
      : arcPath(R_LABEL, a0 + PAD_DEG, a1 - PAD_DEG);

    return {
      ...seg,
      index: i,
      lijn: `M ${f(lx)} ${f(ly)} L ${f(lx2)} ${f(ly2)}`,
      labelPad,
      wiggen: rings.map((ring, ri) => ({
        ringId: ring.id,
        pad: wedgePath(RADII[ri], RADII[ri + 1], a0, a1),
      })),
    };
  });

  // Houtnerf: veel dunne cirkels met wat variatie in straal en dekking.
  const nerven = [];
  for (let i = 0; i < 64; i++) {
    const t = i / 63;
    const r = RADII[0] + 6 + t * (RADII[4] - RADII[0] - 12) + (noise(i + 7) - 0.5) * 6;
    nerven.push({ r: f(r), opacity: f(0.05 + noise(i + 31) * 0.09) });
  }

  const telling = rings.map((ring) => ({
    ...ring,
    aantal: genummerd.filter((i) => i.ring === ring.id).length,
  }));

  const perSegment = segmenten.map((seg) => ({
    ...seg,
    items: genummerd.filter((i) => i.segment === seg.id),
    ringen: rings
      .map((ring) => ({
        ...ring,
        items: genummerd.filter((i) => i.segment === seg.id && i.ring === ring.id),
      }))
      .filter((r) => r.items.length),
  }));

  return { blips, segmentVormen, nerven, telling, perSegment, totaal: genummerd.length };
}
