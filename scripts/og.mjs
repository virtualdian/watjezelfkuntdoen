// Maakt het deelplaatje (public/og.png) uit dezelfde radardata als de site.
// Draaien met: npm run og
//
// Het resultaat wordt meegecommit, zodat de publicatie op GitHub geen extra
// stap nodig heeft.

import sharp from 'sharp';
import { buildRadar, CX, CY, RADII } from '../src/lib/layout.js';

const B = 1200;
const H = 630;

const kleur = {
  room: '#fbf9f3',
  inkt: '#16261c',
  bos: '#26402f',
  bosMid: '#3e6b4a',
  ring1: '#eef4e4',
  ring2: '#dfe9cd',
  ring3: '#c6d9b0',
  ring4: '#bfae94',
  schors: '#5b4a35',
};

const ringVulling = {
  vandaag: kleur.ring1,
  vervang: kleur.ring2,
  investeer: kleur.ring3,
  laat: kleur.ring4,
};

const { blips, segmentVormen, nerven, totaal } = buildRadar();

// De schijf staat rechts, op ongeveer tweederde van de hoogte in beeld.
const diameter = 660;
const schaal = diameter / (RADII[4] * 2);
const midX = 900;
const midY = 315;

const wiggen = segmentVormen
  .flatMap((seg) =>
    seg.wiggen.map(
      (w) => `<path d="${w.pad}" fill="${ringVulling[w.ringId]}"/>`
    )
  )
  .join('');

const houtnerf = nerven
  .map(
    (n) =>
      `<circle cx="${CX}" cy="${CY}" r="${n.r}" fill="none" stroke="${kleur.inkt}" stroke-opacity="${n.opacity}" stroke-width="1"/>`
  )
  .join('');

const ringlijnen = RADII.map(
  (r) =>
    `<circle cx="${CX}" cy="${CY}" r="${r}" fill="none" stroke="${kleur.inkt}" stroke-opacity="0.28" stroke-width="1.5"/>`
).join('');

const stralen = segmentVormen
  .map(
    (seg) =>
      `<path d="${seg.lijn}" stroke="${kleur.inkt}" stroke-opacity="0.22" stroke-width="1.5" fill="none"/>`
  )
  .join('');

// Zonder nummers: op deze afmeting worden dat toch vlekjes.
const stippen = blips
  .map((b) => {
    const isSchors = b.ring === 'laat';
    return `<circle cx="${b.x}" cy="${b.y}" r="9" fill="${
      isSchors ? kleur.room : kleur.bos
    }" stroke="${isSchors ? kleur.schors : kleur.room}" stroke-width="2"/>`;
  })
  .join('');

const serif = "Georgia, 'Times New Roman', 'Iowan Old Style', serif";
const sans = "Helvetica, Arial, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <defs>
    <radialGradient id="kern" cx="50%" cy="45%">
      <stop offset="0%" stop-color="#33513C"/>
      <stop offset="100%" stop-color="#1B2E22"/>
    </radialGradient>
    <clipPath id="schijf">
      <circle cx="${CX}" cy="${CY}" r="${RADII[4]}"/>
    </clipPath>
  </defs>

  <rect width="${B}" height="${H}" fill="${kleur.room}"/>

  <g transform="translate(${midX} ${midY}) scale(${schaal}) translate(${-CX} ${-CY})">
    ${wiggen}
    <g clip-path="url(#schijf)">${houtnerf}</g>
    ${ringlijnen}
    ${stralen}
    <circle cx="${CX}" cy="${CY}" r="${RADII[0]}" fill="url(#kern)"/>
    ${stippen}
  </g>

  <text x="80" y="212" font-family="${sans}" font-size="21" font-weight="bold" letter-spacing="4" fill="${kleur.bosMid}">EEN PRIV&#201; DUURZAAMHEIDSRADAR</text>
  <text x="76" y="300" font-family="${serif}" font-size="76" font-weight="bold" fill="${kleur.inkt}">Wat je zelf</text>
  <text x="76" y="378" font-family="${serif}" font-size="76" font-weight="bold" fill="${kleur.inkt}">kunt doen</text>
  <text x="80" y="440" font-family="${sans}" font-size="26" fill="#5c6f60">${totaal} dingen die ik thuis doe</text>
  <text x="80" y="476" font-family="${sans}" font-size="26" fill="#5c6f60">om duurzamer te leven.</text>
  <text x="80" y="548" font-family="${sans}" font-size="23" font-weight="bold" fill="${kleur.bos}">watjezelfkuntdoen.nl</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);

console.log(`Deelplaatje gemaakt: ${B}x${H}, ${totaal} items.`);
