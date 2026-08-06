// De inhoud van de radar. Eén bestand voor nu; als er straks per item een eigen
// pagina met verhaal moet komen, splitsen we dit op in losse markdown-bestanden.

export const rings = [
  {
    id: 'vandaag',
    naam: 'Doe dit vandaag',
    kort: 'Vandaag',
    uitleg:
      'Kost je niets. Geen aankoop, geen klus, alleen een andere handeling. Hier begin je.',
  },
  {
    id: 'vervang',
    naam: 'Vervang bij je volgende aankoop',
    kort: 'Vervang',
    uitleg:
      'Je koopt het toch al. Dezelfde moeite, alleen een andere keuze in het schap.',
  },
  {
    id: 'investeer',
    naam: 'Investeer één keer',
    kort: 'Investeer',
    uitleg:
      'Kost geld of een zaterdag. Daarna staat het er, en doet het jarenlang zijn werk.',
  },
  {
    id: 'laat',
    naam: 'Laat staan',
    kort: 'Laat staan',
    uitleg:
      'De schors. Wat wij bewust niet doen of niet kopen, en waarom.',
  },
];

export const segmenten = [
  { id: 'eten', naam: 'Boodschappen & eten' },
  { id: 'huishouden', naam: 'Huishouden' },
  { id: 'energie', naam: 'Energie & warmte' },
  { id: 'tuin', naam: 'Tuin & groen' },
  { id: 'spullen', naam: 'Spullen & kopen' },
  { id: 'geld', naam: 'Geld' },
  { id: 'vervoer', naam: 'Vervoer & reizen' },
  { id: 'buiten', naam: 'Buiten je huishouden' },
];

export const items = [
  // ---------------------------------------------------------------- eten
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Eet met de seizoenen mee',
    tekst:
      'Koop wat er nú groeit, en koop het zo dicht mogelijk bij huis. Dan hoeft er niets voor je ingevlogen te worden, en je steunt de boer om de hoek.',
  },
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Fors minder vlees',
    tekst:
      'De bio-industrie is verrot en de uitstoot is enorm. Je hoeft niet van de ene op de andere dag vegetariër te worden. Begin met minder.',
  },
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Ook minder kaas, melk en boter',
    tekst:
      'Zuivel wordt bijna altijd vergeten in dit rijtje, terwijl vooral kaas een forse voetafdruk heeft.',
  },
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Koop alleen wat je echt nodig hebt',
    tekst:
      'Weggooien is de meest zinloze uitstoot die er bestaat. Er is al energie, water en land in gegaan voordat het bij jou in de bak belandt.',
  },
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Maak iets van je restjes',
    tekst:
      'Een blender en een beetje lef brengen je een heel eind. Smoothie, eigen pesto, muhammara, ingelegde ui. Hoe meer je zelf maakt, hoe minder je weggooit.',
  },
  {
    segment: 'eten',
    ring: 'vandaag',
    titel: 'Ga een keer minder uit eten',
    tekst:
      'Het bezwaar tegen biologisch is altijd de prijs. Sla één restaurantavond over en je eet er een hele week beter van, thuis.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Koop biologisch',
    tekst:
      'Bij ons is alles in de koelkast biologisch. Niet omdat wij er persoonlijk gezonder van worden, maar omdat vraag het aanbod verandert. Meer vraag betekent meer boeren die de omslag durven maken.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Biologisch hoeft niet duur te zijn',
    tekst:
      'Een Albert Heijn Premium-abonnement of gewoon de Lidl. Beide hebben prima biologisch. Het idee dat het onbetaalbaar is, klopt niet meer.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Een maaltijdbox die het wél snapt',
    tekst:
      'Wij zitten bij Ekomenu, niet bij HelloFresh of Marley Spoon. Lokaal, biologisch, met de seizoenen mee. En precies afgemeten: vier avonden voor twee personen, en er gaat nooit iets weg.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Eet je vlees, dan wild of 100% biologisch',
    tekst:
      'Zo steun je precies de boeren die de transitie wél maken, in plaats van het systeem dat je wilt veranderen.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Biologische en fairtrade koffie',
    tekst:
      'Wij drinken Simon Lévelt, maar er zijn er meer. Koffie is het product waar je het vaakst per dag een keuze in maakt.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Biologische thee',
    tekst: 'Clipper staat bij ons in de kast.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Maak je eigen havermelk',
    tekst:
      'Wij doen dat met een Milky. Scheelt pakken, scheelt transport, en het smaakt beter dan je denkt.',
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Eet peulvruchten',
    tekst:
      'Niet als "vervanger", gewoon als eten. Goedkoop, houdbaar, en het groeit hier prima.',
  },
  {
    segment: 'eten',
    ring: 'laat',
    titel: 'Flesjes water',
    tekst:
      'Kraanwater is in Nederland gewoon goed. Er is geen enkele reden om er plastic omheen te kopen en het vervolgens door het land te rijden.',
  },
  {
    segment: 'eten',
    ring: 'laat',
    titel: 'Drankjes die de statiegeldregeling ontwijken',
    tekst:
      'Zit er een klein beetje zuivel in een drankje, dan valt het buiten de statiegeldregeling. Handig voor de fabrikant, zonde van het plastic.',
    bronNodig: true,
  },

  // ---------------------------------------------------------- huishouden
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Scheid je afval',
    tekst: 'Plastic, gft, papier en karton. Wat dan nog overblijft is rest.',
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Geen plastic zak in de gft-bak',
    tekst:
      'Dit doen oprecht heel veel mensen, en het verpest de hele lading. Er bestaan composteerbare groene zakjes die gewoon mee de bak in mogen.',
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Broodzakjes zijn pedaalemmerzakjes',
    tekst:
      'Bij ons verdwijnen ze in de badkamer. Je hebt ze toch al in huis, dus waarom zou je er nieuwe bij kopen.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Vaatwasblokjes van everdrop',
    tekst: 'Zelfde vaat, minder troep.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Handzeep en afwasmiddel',
    tekst: 'Marcel’s Green Soap of Ecover. Overal te krijgen.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Tandpasta op houtskoolbasis',
    tekst:
      'Alles wat je in je mond stopt spoel je daarna gewoon het riool in. Dat is een goede reden om te kijken wat erin zit.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Een milieuvriendelijke wc-reiniger',
    tekst: 'Er is genoeg dat werkt zonder dat het de waterzuivering laat zweten.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Zelfgemaakt wasmiddel van Marseillezeep',
    tekst:
      'Kost een half uur, gaat maanden mee, en er gaat een stuk minder het riool in.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Wc-papier van bamboe',
    tekst: 'Wij gebruiken The Good Roll. Bamboe groeit nu eenmaal wat sneller dan een boom.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Snijplanken van houtvezel',
    tekst:
      'Op een plastic snijplank snijd je met elke haal microplastic los. In je eten.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Wegwerpluiers in de eco-variant',
    tekst:
      'Zonder parfum en chemische toevoegingen. Het gaat allemaal rechtstreeks de verbrandingsoven in.',
  },
  {
    segment: 'huishouden',
    ring: 'investeer',
    titel: 'Wasbare luiers',
    tekst:
      'Wij hebben de eerste zes maanden wasbare luiers gebruikt. Eerlijk: niet altijd een pretje. Maar het scheelt een berg.',
  },
  {
    segment: 'huishouden',
    ring: 'laat',
    titel: 'Wc-blokjes',
    tekst:
      'Die Glorix-dingen zitten vol met troep, en je spoelt het per definitie allemaal door.',
  },

  // ------------------------------------------------------------- energie
  {
    segment: 'energie',
    ring: 'vandaag',
    titel: 'Zet de thermostaat een tandje lager',
    tekst:
      'Achttien of negentien graden kan altijd, zeker in de winter. Dit is de goedkoopste maatregel die bestaat: hij kost nul euro.',
  },
  {
    segment: 'energie',
    ring: 'vervang',
    titel: 'Kruip onder een wollen kleed',
    tekst:
      'Nederland heeft een overschot aan wol, en toch is alles tegenwoordig polyester. Wol is een natuurproduct dat gewoon beter werkt. Dat is achterlijk en makkelijk op te lossen.',
  },
  {
    segment: 'energie',
    ring: 'vervang',
    titel: 'Een stroomcontract dat écht groen is',
    tekst:
      'Wij zitten bij Vandebron, Greenchoice is vergelijkbaar. Nederlandse wind en zon, in plaats van grijze stroom met een buitenlands certificaat eroverheen.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Zonnepanelen',
    tekst: 'Je eigen dak, je eigen stroom.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Spouwmuurisolatie',
    tekst: 'Verwarmen is verreweg de grootste energiepost in een Nederlands huis.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Dakisolatie',
    tekst: 'Warmte gaat omhoog. Daar zit dus je grootste lek.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Vloerisolatie',
    tekst: 'Merk je meteen aan je voeten, en aan de rekening.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Een warmtepomp',
    tekst:
      'Hybride of volledig, allebei helpt. Hoe beter je huis geïsoleerd is en hoe lager je aanvoertemperatuur, hoe meer je eruit haalt.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Kook op inductie',
    tekst: 'Sneller, schoner, en je hoeft er geen gas meer voor het huis in te halen.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Een slimme thermostaat',
    tekst:
      'Eentje die je met een app bedient. Als je vergeten bent hem lager te zetten voor je wegging, doe je dat alsnog vanaf het strand.',
  },
  {
    segment: 'energie',
    ring: 'investeer',
    titel: 'Tochtstrips',
    tekst: 'De goedkoopste isolatie die er is, en bijna niemand doet het.',
  },

  // ---------------------------------------------------------------- tuin
  {
    segment: 'tuin',
    ring: 'vandaag',
    titel: 'Haal de tegels eruit',
    tekst:
      'Elke tegel die je vervangt door groen vangt water op, koelt af en geeft iets te eten aan de beestjes.',
  },
  {
    segment: 'tuin',
    ring: 'vervang',
    titel: 'Kies inheemse bloemen en planten',
    tekst:
      'Wat hier hoort, voedt wat hier leeft. Dat is het hele idee achter biodiversiteit in je eigen tuin.',
  },
  {
    segment: 'tuin',
    ring: 'vervang',
    titel: 'Koop biologische planten',
    tekst:
      'Wij bestellen bij Sprinklr. Koop je bespoten planten, dan nemen bijen en hommels die pesticiden gewoon mee terug naar hun nest.',
  },
  {
    segment: 'tuin',
    ring: 'vervang',
    titel: 'Potgrond zonder turf',
    tekst:
      'Bijna niemand weet dit: voor turf wordt veen afgegraven. Koop biologische potgrond of biologische compost.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Een wormenhotel',
    tekst: 'Je eigen compostfabriek. Wat er niet in kan, gaat alsnog in de groene bak.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Regentonnen',
    tekst: 'Gratis water, en het gaat niet naar het riool.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Een groen dak',
    tekst:
      'Bij ons op het schuurtje en op de overkapping. Houdt water vast, koelt, en is beter voor de biodiversiteit. Drie dingen tegelijk.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Verbouw je eigen groente',
    tekst:
      'Courgette, pompoen, komkommer, tomaat, paprika, aubergine. Een stukje zelfvoorzienend, en je weet honderd procent zeker dat het onbespoten is.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Zet een kruidenbak neer',
    tekst:
      'Munt, verbena, rozemarijn, tijm. Het makkelijkste begin dat er is, en je koopt nooit meer een plastic bakje basilicum.',
  },
  {
    segment: 'tuin',
    ring: 'investeer',
    titel: 'Koppel je regenpijp af van het riool',
    tekst: 'Regenwater hoort de grond in, niet de zuivering.',
  },
  {
    segment: 'tuin',
    ring: 'laat',
    titel: 'Hortensia’s',
    tekst:
      'Mooi, dat wel. Maar ze geven geen nectar, dus de beestjes hebben er helemaal niets aan.',
  },

  // ------------------------------------------------------------- spullen
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Geef weg en leen uit',
    tekst:
      'En leen zelf ook, in plaats van kopen. De boormachine van je buurman staat 99,9% van de tijd stil.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Repareer je spullen',
    tekst:
      'Wij hebben de robotstofzuiger en de wasmachine zelf gerepareerd. Je kunt echt veel meer repareren dan je denkt.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Doe minimaal vier jaar met je telefoon',
    tekst:
      'Bij elektronica zit de impact vooral in de productie, niet in het stroomverbruik. Langer gebruiken is dus verreweg het belangrijkst.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Acht nieuwe kledingstukken per jaar',
    tekst:
      'Dat is wat wij met elkaar hebben afgesproken. De rest komt van Vinted of de tweedehandswinkel. Er is genoeg kleding voor de komende zes generaties.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Lever je statiegeld in',
    tekst: 'Koop je toch een flesje of blikje: bewaren en netjes inleveren.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Hergebruik',
    tekst:
      'Kijk eens wat we met elkaar allemaal nieuw kopen. Er is al zóveel gemaakt.',
  },
  {
    segment: 'spullen',
    ring: 'vervang',
    titel: 'Servies van de kringloop',
    tekst:
      'Onze borden en kopjes komen daarvandaan. Er is echt al genoeg van, dus waarom zou je het nieuw kopen.',
  },
  {
    segment: 'spullen',
    ring: 'vervang',
    titel: 'Dual sim in plaats van twee telefoons',
    tekst:
      'Geen apart toestel van de zaak naast je eigen toestel. Een bewuste keuze, en je merkt er verder niets van.',
  },
  {
    segment: 'spullen',
    ring: 'laat',
    titel: 'Temu, AliExpress en die hele hoek',
    tekst:
      'Je unlockt daar punten door spelletjes te spelen zodat je nóg meer kunt kopen. We zijn koopziek geworden. Daar moeten we vanaf.',
  },
  {
    segment: 'spullen',
    ring: 'laat',
    titel: 'Een printer in huis',
    tekst:
      'Print bij de copyshop. Zo maak je het jezelf net moeilijk genoeg, en dan print je meestal gewoon niet.',
  },

  // ---------------------------------------------------------------- geld
  {
    segment: 'geld',
    ring: 'vandaag',
    titel: 'Weet wat er met je spaargeld gebeurt',
    tekst:
      'Je spaargeld staat niet stil op een plank. Het wordt belegd, en waarin dat gebeurt verschilt enorm per bank. De Eerlijke Bankwijzer laat het je zien.',
    bronNodig: true,
  },
  {
    segment: 'geld',
    ring: 'vandaag',
    titel: 'Koop minder, en win tijd',
    tekst:
      'Minder kopen betekent meer sparen en sneller aflossen, en dat betekent uiteindelijk vrije tijd. Tijd is het meest schaarse goed dat je hebt. Dit is geen offer, dit is winst.',
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Stap over naar een duurzame bank',
    tekst: 'Triodos of ASN. Eén formulier, en het werkt door in alles wat de bank doet.',
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Beleg duurzaam',
    tekst: 'Als je belegt, bepaal je mee waar het geld naartoe gaat.',
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Kies een duurzaam pensioenfonds',
    tekst:
      'Als je die keuze hebt tenminste. Je pensioenpot is waarschijnlijk het grootste bedrag dat er ooit namens jou belegd wordt.',
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Kijk ook naar je verzekeraar',
    tekst:
      'Ook je premie wordt belegd. De Eerlijke Verzekeringswijzer beoordeelt verzekeraars op klimaat, natuur, dierenwelzijn, mensenrechten en wapens. Achmea en a.s.r. staan bovenaan. Wij zitten zelf bij Univé, en dat kan dus beter.',
  },

  // ------------------------------------------------------------- vervoer
  {
    segment: 'vervoer',
    ring: 'vandaag',
    titel: 'Fiets naar je werk',
    tekst:
      'Ook als het geen klein stukje is. Bij ons is het tussen de acht en dertien kilometer, en dat gaat prima.',
  },
  {
    segment: 'vervoer',
    ring: 'vandaag',
    titel: 'Carpool',
    tekst: 'Dezelfde rit, de helft van de auto’s.',
  },
  {
    segment: 'vervoer',
    ring: 'vandaag',
    titel: 'Compenseer lokaal, niet met een knopje',
    tekst:
      'Een vinkje bij het boeken is de makkelijke weg, en dan blijft het hangen. Steun liever een Nederlands voedselbos of ga naar een boomplantdag. Dan zie je waar het heen gaat.',
  },
  {
    segment: 'vervoer',
    ring: 'vervang',
    titel: 'Rijd elektrisch',
    tekst: 'En als je toch een auto hebt staan, dan liever deze.',
  },
  {
    segment: 'vervoer',
    ring: 'vervang',
    titel: 'Laad op je eigen zon',
    tekst: 'Panelen op het dak, auto op de oprit. Die twee horen bij elkaar.',
  },
  {
    segment: 'vervoer',
    ring: 'laat',
    titel: 'Vliegen',
    tekst:
      'Eerlijk is eerlijk: ook wij vliegen heel soms. De laatste keer is nu drie jaar geleden. Vraag jezelf echt af of het met het vliegtuig moet. Binnen vijfhonderd kilometer rond Amsterdam kun je bijna overal met de trein komen.',
  },

  // -------------------------------------------------------------- buiten
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Ga helpen in een voedselbos',
    tekst:
      'Gisteravond stonden we er nog met gieters. Vrijwilligerswerk is het enige wat direct meer oplevert dan je zelf verbruikt.',
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Deze site',
    tekst:
      'Het gaat er niet om dat jij één wc-blokje laat staan. Het gaat erom dat je laat zien dat het kan. Daarom staat dit hier.',
  },
];
