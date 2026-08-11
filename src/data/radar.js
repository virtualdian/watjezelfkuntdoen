// De inhoud van de radar. Eén bestand voor nu; als er straks per item een eigen
// pagina met verhaal moet komen, splitsen we dit op in losse markdown-bestanden.
//
// Velden per item:
//   segment, ring, titel, tekst  — verplicht
//   waarom                       — optioneel, langere onderbouwing in het detail
//   links                        — optioneel, [{ tekst, url }]
//   bronNodig                    — optioneel, item wacht nog op onderbouwing

export const rings = [
  {
    id: 'vandaag',
    naam: 'Doe dit vandaag',
    kort: 'Vandaag',
    uitleg:
      'Hier begin je. Het kost je geen cent en je hoeft er niets voor te kopen.',
  },
  {
    id: 'vervang',
    naam: 'Vervang bij je volgende aankoop',
    kort: 'Vervang',
    uitleg: 'Je staat toch al in dat schap. Pak dan het andere.',
  },
  {
    id: 'investeer',
    naam: 'Investeer één keer',
    kort: 'Investeer',
    uitleg:
      'Hier gaat geld of een zaterdag in zitten. Daarna doet het jarenlang zijn werk zonder dat je er nog naar omkijkt.',
  },
  {
    id: 'laat',
    naam: 'Neem afscheid van',
    kort: 'Afscheid',
    uitleg: 'De schors van de boom. Wat ik niet meer koop, en waarom niet.',
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
    waarom:
      'Milieu Centraal rekent het door: van zes keer per week vlees naar één keer scheelt ongeveer 330 kg CO₂ per persoon per jaar. Dat is minder dan het isoleren van een slecht geïsoleerd huis oplevert, wat mij oprecht verbaasde toen ik het opzocht. Maar het is wel de knop waar je niets voor hoeft aan te schaffen en waar je niemands toestemming voor nodig hebt, en dat maakt hem in de praktijk vaak de eerste die je omzet.\n\nDit is tegelijk de meest beladen. Daarom geen preek en geen percentage dat ik niet hard kan maken: voor vlees is land, veevoer, water en mest nodig, en die keten is vele malen zwaarder dan die van wat direct uit de grond komt. Een dier eet nu eenmaal jarenlang plantaardig voedsel voordat het zelf voedsel wordt, en het grootste deel van die energie gaat onderweg verloren.\n\nWat ik zelf het prettigst vind aan dit item: het is de enige op deze radar waar je geen aankoop, geen klus en geen abonnement voor nodig hebt. Je maakt de keuze gewoon opnieuw bij de volgende maaltijd. Eén dag per week minder is al iets, en niemand ziet het als je het een keer niet volhoudt.',
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
      'Bij mij is alles in de koelkast biologisch. Niet omdat ik er persoonlijk gezonder van word, maar omdat vraag het aanbod verandert.',
    waarom:
      'Dit is het duidelijkste voorbeeld van waarom "wat ik doe maakt toch niets uit" niet klopt. Een boer die overweegt om te schakelen kijkt naar één ding: is er genoeg afzet? Elke kar met biologische boodschappen is een stem in die afweging. Je verandert er de wereld niet mee, maar je verandert wel wat er volgend seizoen gezaaid wordt. Dat is precies het soort effect dat je zelf nooit terugziet, en dat wel bestaat.',
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
      'Ik zit bij Ekomenu, niet bij HelloFresh. Lokaal, biologisch, met de seizoenen mee. En precies afgemeten: vier avonden voor twee personen, en er gaat nooit iets weg.',
    links: [{ tekst: 'Ekomenu', url: 'https://www.ekomenu.nl/' }],
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
    titel: 'Vlees met drie sterren Beter Leven',
    tekst:
      'Lukt biologisch of wild niet, kies dan in elk geval drie sterren. Dat is de hoogste trede van het keurmerk van de Dierenbescherming, en het scheelt het dier een heel leven.',
    waarom:
      'Het Beter Leven keurmerk werkt met één, twee of drie sterren. Bij één ster gaat het om een bescheiden verbetering ten opzichte van de standaard, bij drie sterren om buitenleven, veel meer ruimte en langzamer groeiende rassen. Het gat tussen één en drie sterren is dus groot, en veel groter dan de meeste mensen denken als ze in de supermarkt naar dat logo kijken.\n\nDe reden dat dit hier staat en niet hoger: één ster is te makkelijk te halen om echt iets te betekenen. Als je toch de moeite neemt om op een keurmerk te letten, doe het dan meteen goed.',
    links: [
      { tekst: 'Beter Leven keurmerk', url: 'https://beterleven.dierenbescherming.nl/' },
    ],
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Let op Fairtrade en Rainforest Alliance',
    tekst:
      'Bij koffie, thee, cacao en bananen zeggen deze twee keurmerken echt iets over de boer aan het begin van de keten. Ze staan op meer producten dan je denkt, ook bij de gewone supermarkt.',
    waarom:
      'Fairtrade gaat vooral over de prijs: er geldt een minimumprijs plus een premie voor de coöperatie, zodat een boer niet volledig is overgeleverd aan de wereldmarkt. Rainforest Alliance, dat in 2018 samenging met UTZ, richt zich sterker op de manier van telen: ontbossing, bodem, water en arbeidsomstandigheden.\n\nGeen van beide is perfect en er is terechte kritiek op allebei. Maar het alternatief is een product zonder enige controle op wat er aan het begin van de keten gebeurt, en dat is aantoonbaar slechter. Zie het als een ondergrens, niet als een garantie.',
    links: [
      { tekst: 'Fairtrade Nederland', url: 'https://www.fairtradenederland.nl/' },
      { tekst: 'Rainforest Alliance', url: 'https://www.rainforest-alliance.org/nl/' },
    ],
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Biologische en fairtrade koffie',
    tekst:
      'Ik drink Simon Lévelt, maar er zijn er meer. Koffie is het product waar je het vaakst per dag een keuze in maakt.',
    links: [{ tekst: 'Simon Lévelt', url: 'https://www.simonlevelt.nl/' }],
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Biologische thee',
    tekst: 'Clipper staat bij mij in de kast.',
    links: [{ tekst: 'Clipper', url: 'https://www.clipper-teas.com/' }],
  },
  {
    segment: 'eten',
    ring: 'vervang',
    titel: 'Maak je eigen havermelk',
    tekst:
      'Ik doe dat met een Milky. Scheelt pakken, scheelt transport, en het smaakt beter dan je denkt.',
    links: [{ tekst: 'Milky Plant', url: 'https://milkyplant.com/' }],
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
    titel: 'Appelsientje en Dubbelfriss',
    tekst:
      'Riedel, de maker van Appelsientje, Dubbelfriss en Coolbest, voegt een vleugje melk toe aan het sap. Daarmee telt het als zuiveldrank, en zuiveldranken zijn vrijgesteld van de belasting op frisdrank. Ik zie de flesjes bovendien massaal terug als ik mijn buurt schoonmaak.',
    waarom:
      'Dit is het duidelijkste voorbeeld dat ik ken van een bedrijf dat de regel volgt en de bedoeling ervan compleet negeert. Nederland heft belasting op frisdrank om suikerhoudende dranken duurder te maken. Zuiveldranken zijn daarvan uitgezonderd. Riedel voegt 0,02% melkvet toe, in de vorm van melkpermeaat, een restproduct van bijvoorbeeld kwark. Genoeg om als zuiveldrank te gelden, veel te weinig om er iets van te proeven. De staatssecretaris heeft bevestigd dat het mag onder de huidige wet en heeft aangekondigd naar die uitzondering te gaan kijken.\n\nEn er zit een tweede staart aan. Precies dezelfde uitzondering bestaat bij statiegeld: plastic flessen met zuiveldrank vallen buiten de statiegeldregeling. Dat is geen theoretisch probleem. Uit de evaluatie van de statiegeldregeling blijkt dat flessen zonder statiegeld ongeveer twintig procent van alle plastic flessen zijn, en dat ze juist daarom relatief vaak in het zwerfafval terechtkomen. Dat is precies wat ik zie als ik met een grijper door de buurt loop. Vanaf 2029 zouden sommige zuiveldranken alsnog onder statiegeld moeten vallen.',
    links: [
      {
        tekst: 'Radar over het melkvet in Dubbelfriss en Appelsientje',
        url: 'https://radar.avrotros.nl/artikel/waarom-zit-er-ineens-melkvet-in-mijn-dubbelfriss-of-appelsientje-60489',
      },
      {
        tekst: 'CE Delft, evaluatie van de statiegeldregeling',
        url: 'https://ce.nl/wp-content/uploads/2025/04/CE_Delft_240379_Evaluatie_statiegeld_Def-1.pdf',
      },
    ],
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
      'Bij mij verdwijnen ze in de badkamer. Je hebt ze toch al in huis, dus waarom zou je er nieuwe bij kopen.',
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Maak je eigen aanmaakblokjes',
    tekst:
      'Eierdozen, pluis uit de droger of geschaafd hout, en oud kaarsvet. Drie dingen die je normaal weggooit, en samen zijn ze één bruikbaar nieuw product. Vet smelten, in de eierdoos gieten met het pluis erin, laten stollen, in stukjes knippen.',
    waarom:
      'Dit is het kleinste item op de radar en tegelijk mijn favoriete. Niet omdat aanmaakblokjes de wereld redden, maar omdat het laat zien hoe restproducten werken: alle drie deze dingen zijn afval, tot je ze bij elkaar legt. De eierdoos is de vorm en het brandt, het pluis of het houtschaafsel vat vlam, en het kaarsvet zorgt dat het lang genoeg blijft branden om het hout mee te krijgen.\n\nWie dat één keer zelf doet, gaat daarna anders naar zijn afvalbak kijken. Dat is het echte effect: niet de blokjes, maar dat je begint te zien welke dingen bij elkaar horen. Praktisch: smelt het vet au bain-marie en niet rechtstreeks in de pan, en gebruik pluis van katoenen was, niet van polyester.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Vaatwasblokjes van everdrop',
    tekst: 'Zelfde vaat, minder troep.',
    links: [{ tekst: 'everdrop', url: 'https://www.everdrop.nl/' }],
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Handzeep en afwasmiddel',
    tekst: 'Marcel’s Green Soap of Ecover. Overal te krijgen.',
    links: [
      { tekst: 'Marcel’s Green Soap', url: 'https://www.marcelsgreensoap.com/' },
      { tekst: 'Ecover', url: 'https://www.ecover.com/' },
    ],
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Was op 30 graden',
    tekst:
      'Je was wordt er net zo schoon van. Het grootste deel van de energie van een wasmachine gaat niet naar draaien, maar naar het opwarmen van het water.',
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'De droger alleen voor handdoeken',
    tekst:
      'De rest hangt gewoon aan een rek. Een droger is een van de grootste stroomvreters in huis, en de lucht buiten is gratis.',
  },
  {
    segment: 'huishouden',
    ring: 'vandaag',
    titel: 'Hergebruik het water uit je droger',
    tekst:
      'Er zit geen kalk in, dus je planten zijn er blij mee en je strijkijzer hoef je nooit meer te ontkalken. Twee keer gratis, uit een bakje dat de meeste mensen in de gootsteen kieperen.',
    waarom:
      'Condenswater uit een droger is zacht water: het is verdampt en weer neergeslagen, dus de kalk blijft achter. Precies daarom is het ideaal voor een strijkijzer, waar kalkaanslag normaal het probleem is.\n\nEén eerlijke kanttekening: helemaal schoon is het niet. Er komen vezels en restjes wasmiddel in mee. Voor je kamerplanten, de border en het strijkijzer is dat geen enkel bezwaar. Ik zou het alleen niet over eetbare planten gieten, dan pak ik gewoon de regenton.',
  },
  {
    segment: 'huishouden',
    ring: 'vervang',
    titel: 'Keukenrol met halve vellen',
    tekst:
      'Zo’n rol met een perforatie halverwege scheelt enorm, want je pakt bijna nooit een heel vel als je maar iets kleins hoeft af te vegen. Zelfde prijs, zelfde schap, en je rol gaat twee keer zo lang mee.',
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
    tekst: 'Ik gebruik The Good Roll. Bamboe groeit nu eenmaal wat sneller dan een boom.',
    links: [{ tekst: 'The Good Roll', url: 'https://www.thegoodroll.com/' }],
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
      'Ik heb de eerste zes maanden wasbare luiers gebruikt. Eerlijk: niet altijd een pretje. Maar het scheelt een berg.',
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
      'Ik zit bij Vandebron, Greenchoice is vergelijkbaar. Nederlandse wind en zon, in plaats van grijze stroom met een buitenlands certificaat eroverheen.',
    waarom:
      'Bijna elk energiebedrijf verkoopt tegenwoordig "groene stroom", en dat betekent lang niet altijd hetzelfde. Groen zijn gebeurt namelijk op papier: bij duurzame opwek horen certificaten, en die certificaten kun je los van de stroom zelf verhandelen. Een leverancier kan dus gewoon grijze stroom inkopen en er certificaten van bijvoorbeeld een oude Noorse waterkrachtcentrale bij kopen. Op je factuur staat dan honderd procent groen, terwijl er geen windmolen extra voor is gaan draaien.\n\nDat wordt weleens sjoemelstroom genoemd. Waar het je om te doen is, is stroom uit Nederlandse wind en zon, het liefst van een leverancier die zelf opwek inkoopt bij producenten die je kunt aanwijzen. Dan gaat jouw geld daadwerkelijk naar de opwek waar je voor betaalt. Je kunt dit bij je eigen leverancier gewoon navragen, en het antwoord is verrassend vaak ontwijkend.',
    links: [
      { tekst: 'Vandebron', url: 'https://www.vandebron.nl/' },
      { tekst: 'Greenchoice', url: 'https://www.greenchoice.nl/' },
    ],
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
    waarom:
      'De volgorde is hier belangrijker dan de aanschaf zelf, en daar gaat het vaak mis. Een warmtepomp haalt warmte van buiten naar binnen, en hoe kleiner het verschil tussen die twee temperaturen, hoe minder stroom dat kost. In een slecht geïsoleerd huis moet het water heet zijn om het warm te krijgen, en dan werkt zo\'n pomp precies in zijn zwaarste stand. Isoleer dus eerst, verlaag daarna je aanvoertemperatuur, en zet de pomp er als laatste in.\n\nDat is ook waarom vloerverwarming en warmtepompen zo vaak in één adem genoemd worden. Niet omdat vloerverwarming op zichzelf zuiniger is dan radiatoren, dat is een hardnekkig misverstand, maar omdat je met een groot oppervlak toe kunt met veel lager verwarmingswater. Datzelfde bereik je ook met grotere radiatoren, wat een stuk goedkoper is dan je vloer eruit slopen.',
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
    ring: 'vandaag',
    titel: 'Gooi je koffiedik in de tuin',
    tekst:
      'Het gaat bij mij gewoon de border in. Ik heb er zelfs een keer oesterzwammen op gekweekt. Koffiedik is geen afval, het is materiaal waar nog van alles mee kan.',
    waarom:
      'Koffiedik is het restant van iets dat de halve wereld over is gevlogen, en bij de meeste mensen gaat het na één kop rechtstreeks de bak in. Terwijl het gewoon organisch materiaal is dat de bodem voedt. Strooi het uit over de border of gooi het bij je compost.\n\nEn er kan meer mee. Oesterzwammen groeien er prima op: je hebt alleen verse koffiedik, wat zwambroed en een donkere plek nodig. Ik heb het een keer gedaan en dat werkte verrassend goed. Het is ook het soort project waar kinderen niet meer van weg te slaan zijn, want je ziet er binnen twee weken iets gebeuren.',
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
      'Ik bestel bij Sprinklr. Koop je bespoten planten, dan nemen bijen en hommels die pesticiden gewoon mee terug naar hun nest.',
    waarom:
      'Dit is het item waarvan de meeste mensen niet weten dat het bestaat. Je koopt een plant speciaal om iets te doen voor de bijen, en levert vervolgens gif af bij het nest. De plant is dan letterlijk een val: hij trekt precies de beestjes aan die je wilde helpen.\n\nHet venijnige zit hem in bestrijdingsmiddelen die door de hele plant worden opgenomen in plaats van erop te blijven liggen. Afspoelen helpt dan niet, en de stof zit ook in de nectar en het stuifmeel. Bij een biologische kwekerij speelt dat niet. Let bij het kopen op het SKAL-keurmerk, want "milieuvriendelijk" op een kaartje zegt op zichzelf niets.',
    links: [{ tekst: 'Sprinklr', url: 'https://sprinklr.co/' }],
  },
  {
    segment: 'tuin',
    ring: 'vervang',
    titel: 'Potgrond zonder turf',
    tekst:
      'Bijna niemand weet dit: voor turf wordt veen afgegraven. Koop biologische potgrond of biologische compost.',
    waarom:
      'Veen is een van de grootste koolstofvoorraden die er zijn, en het is duizenden jaren oud. Zodra het wordt afgegraven en droogvalt, komt die koolstof vrij. Je kunt het niet terugleggen: veen groeit ongeveer een millimeter per jaar. Dat je dat in een zak van een paar euro bij het tuincentrum meeneemt om er een bak stiefmoedjes in te zetten, is een van de gekkere dingen in dit rijtje.',
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
      'Bij mij op het schuurtje en op de overkapping. Houdt water vast, koelt, en is beter voor de biodiversiteit. Drie dingen tegelijk.',
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
    waarom:
      'In veel oudere wijken zit het regenwater in hetzelfde riool als het toiletwater. Bij een flinke bui kan de zuivering die hoeveelheid niet aan, en dan slaat het stelsel over: het teveel loopt ongezuiverd de sloot of de gracht in. Al dat schone water van jouw dak zorgt er dus voor dat er vuil water in het oppervlaktewater terechtkomt.\n\nDaar komt bij dat de grond eronder juist uitdroogt. Regenwater dat je laat wegstromen, komt niet meer in het grondwater terecht, terwijl dat precies is wat je in een droge zomer nodig hebt, voor je tuin én tegen verzakking van je huis. Een regenton, een grindkoffer of gewoon een pijp die op een verlaagd stukje tuin uitkomt lost dit al voor een groot deel op. Veel gemeenten geven er subsidie voor.',
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
      'Ik heb de robotstofzuiger en de wasmachine zelf gerepareerd. Je kunt echt veel meer repareren dan je denkt. Kom je er niet uit, dan is er bijna overal een Repair Café.',
    links: [{ tekst: 'Repair Café', url: 'https://www.repaircafe.org/' }],
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Neem je eigen tassen mee',
    tekst:
      'Zonde om er bij de kassa telkens een nieuwe te kopen. Leg er standaard eentje in je auto of onder de kinderwagen, dan grijp je nooit mis.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Ga naar de bibliotheek',
    tekst:
      'Een boek dat je één keer leest hoef je niet te bezitten. Voor een paar tientjes per jaar heb je de hele collectie, inclusief de tijdschriften waar je anders een abonnement op zou nemen.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Vraag herinneringen in plaats van cadeaus',
    tekst:
      'Met verjaardagen en feestdagen vraag ik geen spullen meer, maar iets om samen te doen. Dat is het enige cadeau waar je een jaar later nog iets aan hebt.',
    waarom:
      'Feestdagen en verjaardagen zijn de momenten waarop de meeste onnodige spullen een huis binnenkomen. Niet omdat iemand ze nodig heeft, maar omdat er iets gegeven moest worden. Een groot deel daarvan staat binnen een jaar in de kast of op Marktplaats.\n\nHet ongemakkelijke is dat je het moet uitspreken, want anders koopt iedereen gewoon door. Zeg het gerust ruim van tevoren. In mijn ervaring zijn mensen vooral opgelucht: het scheelt hun ook een middag dwalen door een winkelstraat.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Doe minimaal vier jaar met je telefoon',
    tekst:
      'Bij elektronica zit de impact vooral in de productie, niet in het stroomverbruik. Langer gebruiken is dus verreweg het belangrijkst.',
    waarom:
      'Een telefoon kost het grootste deel van zijn voetafdruk voordat jij hem voor het eerst aanzet: mijnbouw, chips, transport. Wat hij daarna aan stroom gebruikt is klein in vergelijking. Elk jaar dat je hem langer gebruikt, verdeel je diezelfde productiekosten over meer tijd. Twee jaar langer doen met hetzelfde toestel is daarmee effectiever dan wat je aan het gebruik ervan kunt optimaliseren.',
  },
  {
    segment: 'spullen',
    ring: 'vandaag',
    titel: 'Acht nieuwe kledingstukken per jaar',
    tekst:
      'Dat is wat ik met mijn gezin heb afgesproken. De rest komt van Vinted of de tweedehandswinkel. Er is genoeg kleding voor de komende zes generaties.',
    links: [{ tekst: 'Vinted', url: 'https://www.vinted.nl/' }],
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
      'Mijn borden en kopjes komen daarvandaan. Er is echt al genoeg van, dus waarom zou je het nieuw kopen.',
  },
  {
    segment: 'spullen',
    ring: 'vervang',
    titel: 'Houten speelgoed',
    tekst:
      'Hout is een natuurproduct, gaat generaties mee en is aan het eind gewoon hout. Plastic speelgoed is meestal binnen een jaar stuk en daarna voor altijd afval.',
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
    titel: 'Temu, AliExpress en dat soort goedkope troepsites',
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
      'Je spaargeld staat niet stil op een plank. Het wordt belegd, en waarin dat gebeurt verschilt enorm per bank. De Eerlijke Bankwijzer rekent het voor je uit.',
    waarom:
      'De Eerlijke Bankwijzer beoordeelt Nederlandse banken op onder andere mensenrechten, wapens, olie en gas, biodiversiteit en dierenwelzijn. In de beoordeling van maart 2026 staat Triodos bovenaan met een 9,4, gevolgd door ASN met een 8,6. ING en ABN AMRO blijven op een 6 staan. Rabobank zakte het hardst, van een 7 naar een 5, en staat daarmee onderaan.\n\nWat me daarbij het meest opvalt: het gemiddelde van alle banken samen ging omlaag, van afgerond een 7 in 2023 naar een 6 nu. Banken worden dus niet vanzelf beter, ook niet nu iedereen het over verduurzaming heeft. Dat is precies waarom het uitmaakt waar jij je geld neerzet, want dat is het enige signaal dat een bank echt voelt.',
    links: [
      {
        tekst: 'Eerlijke Bankwijzer: hoe scoort jouw bank?',
        url: 'https://eerlijkegeldwijzer.nl/bankwijzer/hoe-scoort-jouw-bank/',
      },
    ],
  },
  {
    segment: 'geld',
    ring: 'vandaag',
    titel: 'Koop minder, en win tijd',
    tekst:
      'Minder kopen betekent meer sparen en sneller aflossen, en dat betekent uiteindelijk vrije tijd. Tijd is het meest schaarse goed dat je hebt. Dit is geen offer, dit is winst.',
    waarom:
      'Dit is wat mij betreft de kern van deze hele radar. Bijna alles hierboven wordt gebracht als iets wat je inlevert: minder vlees, minder vliegen, minder kopen. Maar de rekening klopt andersom. Elke aankoop die je niet doet, is geld dat je niet hoeft te verdienen, en dus tijd die je niet hoeft te werken. De meeste mensen ruilen hun uren in voor spullen die ze binnen een jaar niet meer zien staan. Dat is de duurste ruil die er bestaat.',
    links: [{ tekst: 'Intentioneel leven, Ernst-Jan Pfauth', url: 'https://pfauth.com/intentioneel-leven/' }],
  },
  {
    segment: 'geld',
    ring: 'vandaag',
    titel: 'Vraag subsidie aan',
    tekst:
      'Voor isolatie, een warmtepomp en zonneboilers is er de ISDE via RVO. En veel gemeenten hebben een eigen potje voor een groen dak, een regenton of het weghalen van tegels. Dat scheelt zomaar honderden euro’s, en bijna niemand kijkt het na.',
    links: [{ tekst: 'ISDE bij RVO', url: 'https://www.rvo.nl/subsidies-financiering/isde' }],
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Stap over naar een duurzame bank',
    tekst:
      'Triodos of ASN. Die staan met een 9,4 en een 8,6 bovenaan bij de Eerlijke Bankwijzer, terwijl de grootbanken op een 5 of een 6 blijven steken. Eén formulier, en het werkt door in alles wat de bank met jouw geld doet.',
    links: [
      { tekst: 'Triodos', url: 'https://www.triodos.nl/' },
      { tekst: 'ASN Bank', url: 'https://www.asnbank.nl/' },
    ],
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
    waarom:
      'Hier zit een scheve verhouding waar bijna niemand bij stilstaat. Je kunt jaren zorgvuldig je wc-blokjes uitzoeken, terwijl er ondertussen tonnen aan pensioengeld namens jou belegd worden in dingen waar je nooit naar gekeken hebt. Eén brief of één telefoontje naar je pensioenfonds weegt in euro’s zwaarder dan alles wat je in je badkamer kunt veranderen. Dat is geen reden om die badkamer te laten zitten, wel een reden om hier een keer naar te kijken.',
  },
  {
    segment: 'geld',
    ring: 'vervang',
    titel: 'Kijk ook naar je verzekeraar',
    tekst:
      'Ook je premie wordt belegd. De Eerlijke Verzekeringswijzer beoordeelt verzekeraars op klimaat, natuur, dierenwelzijn, mensenrechten en wapens. Achmea en a.s.r. staan bovenaan. Ik zit zelf bij Univé, en dat kan dus beter.',
    links: [
      { tekst: 'Eerlijke Verzekeringswijzer', url: 'https://eerlijkegeldwijzer.nl/verzekeringswijzer/' },
    ],
  },

  // ------------------------------------------------------------- vervoer
  {
    segment: 'vervoer',
    ring: 'vandaag',
    titel: 'Fiets naar je werk',
    tekst:
      'Ook als het geen klein stukje is. Bij mij is het tussen de acht en dertien kilometer, en dat gaat prima.',
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
    waarom:
      'Mijn bezwaar tegen dat vinkje is niet dat bomen planten slecht is. Het is dat de compensatie op het moment van boeken al klaar is, terwijl de uitstoot van vandaag is en de opname van die boom over dertig jaar. En dat is nog los van de vraag of dat bos er over dertig jaar nog staat.\n\nHet grootste probleem is wat het met je hoofd doet. Zodra je hebt afgerekend, voelt de vlucht schuldenvrij, en daarmee verdwijnt precies de vraag die je jezelf zou moeten stellen: moest ik eigenlijk wel. Ga je in plaats daarvan zelf met een schep het land op, of steun je een voedselbos in je eigen omgeving, dan zie je hoe traag en hoe klein zo\'n hectare groeit. Dat maakt de vraag of je die volgende vlucht echt nodig hebt vanzelf een stuk scherper.',
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
      'Eerlijk is eerlijk: ook ik vlieg heel soms. De laatste keer is nu drie jaar geleden. Vraag jezelf echt af of het met het vliegtuig moet. Binnen vijfhonderd kilometer rond Amsterdam kun je bijna overal met de trein komen.',
  },

  // -------------------------------------------------------------- buiten
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Doe vrijwilligerswerk',
    tekst:
      'De gemiddelde Nederlander zit ’s avonds naar een praatprogramma te kijken waar hij alleen maar ongelukkiger van wordt. Zet het uit en ga een avond iets doen waar iemand anders wat aan heeft. Je slaapt er beter van.',
    waarom:
      'Dit is het enige item op de radar dat niet gaat over minder verbruiken, maar over meer opleveren. Alle andere items maken je voetafdruk kleiner; deze maakt iets groter. En het werkt bovendien tegen precies het gevoel waar deze site over gaat: machteloosheid verdwijnt niet door nog een documentaire te kijken, maar door je handen vuil te maken tussen mensen die hetzelfde doen.',
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Ga helpen in een voedselbos',
    tekst:
      'Gisteravond stond ik er nog met gieters. Vrijwilligerswerk is het enige wat direct meer oplevert dan je zelf verbruikt.',
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Ruim je eigen buurt op',
    tekst:
      'Ik ben Supporter van Schoon. Zie ik afval liggen, dan raap ik het op. Ligt er te veel, dan meld ik het bij de gemeente. Het kost je tien seconden per keer.',
    links: [
      { tekst: 'Supporter van Schoon', url: 'https://www.supportervanschoon.nl/' },
    ],
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Lees erover',
    tekst:
      'Over klimaatverandering, over systeemverandering, en over hoe je zelf beter kunt leven. Drie die ik aanraad: Omarm de chaos van Jan Rotmans, Intentioneel leven van Ernst-Jan Pfauth, en De insectencrisis van Oliver Milman.',
    links: [
      { tekst: 'Jan Rotmans', url: 'https://www.janrotmans.nl/' },
      { tekst: 'Intentioneel leven', url: 'https://pfauth.com/intentioneel-leven/' },
      { tekst: 'De insectencrisis', url: 'https://www.atlascontact.nl/boek/de-insectencrisis/' },
    ],
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Praat erover',
    tekst:
      'Begin erover bij de koffie, op een verjaardag, aan tafel. Niet om iemand te overtuigen, gewoon om te vertellen wat je zelf doet.',
    waarom:
      'Dit is misschien wel het belangrijkste item op deze hele radar, en het kost je helemaal niets. Zolang niemand erover begint, denkt iedereen dat hij de enige is die er wakker van ligt. Zodra je het uitspreekt blijkt steeds weer dat de halve tafel zich net zo goed zorgen maakt, en dat ze het alleen nooit hardop zeggen.\n\nEn het loopt twee kanten op. Ik heb zelf de helft van wat op deze radar staat van anderen geleerd, gewoon doordat iemand terloops vertelde wat hij deed. Als jij vertelt dat je je bank hebt verruild, weet de volgende dat het kan. Dat is de enige manier waarop dit soort keuzes zich verspreidt.',
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Word lid van een partij die het serieus neemt',
    tekst:
      'Stemmen is één avond in de vier jaar. Lidmaatschap telt het hele jaar door, want het bepaalt mede welke kant een partij op beweegt. Ik zit bij de Partij voor de Dieren.',
  },
  {
    segment: 'buiten',
    ring: 'vandaag',
    titel: 'Deze site',
    tekst:
      'Het gaat er niet om dat jij één wc-blokje laat staan. Het gaat erom dat je laat zien dat het kan. Daarom staat dit hier.',
  },
];
