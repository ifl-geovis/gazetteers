import { normalizePRNG } from './normalizePRNG';

it('the entries of PRNG were correctly pre-processed', () => {
  const inputValue = [
    {
      id_prng: '238511',
      hauptname: 'Gdańsk',
      objekttyp: 'część wsi',
      objektklasse: 'miejscowość',
      superobjekt: 'Wąpiersk',
      verwaltungsfunktion: null,
      genitiv: '-ka',
      adjektiv: null,
      kommentar: null,
      quelle:
        'Wykaz urzędowych nazw miejscowości w Polsce, t. I - III GUS (1980 - 1982)./Rozporządzenie Ministra Administracji i Cyfryzacji z dnia 13 grudnia 2012 r., Dz. U. z 2013 r., poz. 200',
      unterscheidungselement: 'Gdańsk',
      allg_element: null,
      ipa_aussprache: null,
      pol_aussprache: null,
      lat: "53°18'12''",
      lon: "19°54'19''",
      kart_koord_y: '604617,89',
      kart_koord_x: '560311,3',
      aenderungsdatum: '31.05.2016',
      darstellungsart: 'Punkt centralny',
      externes_system: 'TERYT',
      id_externes_system: '1044488',
      id_iip: '00000000-0000-0000-0000-000000238511',
      kartenmassstab: null,
      namensstatus: 'urzędowa',
      weitere_namen: null,
      sprachcode_weitere_namen: null,
      sprache_weitere_namen: null,
      romaniserte_form_weitere_namen: null,
      historischer_name: null,
      sicherer_name: null,
      kommentar_weiterer_name: null,
      kommentar_historischer_name: null,
      kommentar_sicherer_name: null,
      exonym_fremd: null,
      exonym_geschrieben: null,
      exonym_sprache: null,
      exonym_romanisiert: null,
      endonym_fremd: null,
      endonym_geschrieben: null,
      endonym_sprache: null,
      endonym_romanisiert: null,
      staat: 'Polska',
      wojewodschaft: 'warmińsko-mazurskie',
      powiat: 'działdowski',
      gmina: 'Lidzbark-obszar wiejski',
      id_territ_gliederung: '2803045',
      erfassungsdatum: '14.08.2013',
      loeschdatum: null,
      namespace: 'PL.PZGiK.204.PRNG',
      lat_normalisiert: '53.303333333333',
      lon_normalisiert: '19.905277777778',
    },
    {
      superobjekt: null,
      verwaltungsfunktion: 'siedziba wojewody',
      genitiv: '-ka',
      adjektiv: 'gdański',
    },
  ];
  const expectedValue = normalizePRNG(inputValue);
  expect(expectedValue).toEqual([
    {
      id: '238511',
      name: 'Gdańsk',
      type: 'część wsi',
      objektklasse: 'miejscowość',
      superobjekt: 'Wąpiersk',
      verwaltungsfunktion: null,
      genitiv: '-ka',
      adjektiv: null,
      kommentar: null,
      quelle:
        'Wykaz urzędowych nazw miejscowości w Polsce, t. I - III GUS (1980 - 1982)./Rozporządzenie Ministra Administracji i Cyfryzacji z dnia 13 grudnia 2012 r., Dz. U. z 2013 r., poz. 200',
      unterscheidungselement: 'Gdańsk',
      allg_element: null,
      ipa_aussprache: null,
      pol_aussprache: null,
      geograph_lat: "53°18'12''",
      geograph_lng: "19°54'19''",
      kart_koord_y: '604617,89',
      kart_koord_x: '560311,3',
      aenderungsdatum: '31.05.2016',
      darstellungsart: 'Punkt centralny',
      externes_system: 'TERYT',
      id_externes_system: '1044488',
      id_iip: '00000000-0000-0000-0000-000000238511',
      kartenmassstab: null,
      namensstatus: 'urzędowa',
      weitere_namen: null,
      sprachcode_weitere_namen: null,
      sprache_weitere_namen: null,
      romaniserte_form_weitere_namen: null,
      historischer_name: null,
      sicherer_name: null,
      kommentar_weiterer_name: null,
      kommentar_historischer_name: null,
      kommentar_sicherer_name: null,
      exonym_fremd: null,
      exonym_geschrieben: null,
      exonym_sprache: null,
      exonym_romanisiert: null,
      endonym_fremd: null,
      endonym_geschrieben: null,
      endonym_sprache: null,
      endonym_romanisiert: null,
      staat: 'Polska',
      wojewodschaft: 'warmińsko-mazurskie',
      powiat: 'działdowski',
      gmina: 'Lidzbark-obszar wiejski',
      id_territ_gliederung: '2803045',
      erfassungsdatum: '14.08.2013',
      loeschdatum: null,
      namespace: 'PL.PZGiK.204.PRNG',
      lat: '53.303333333333',
      lng: '19.905277777778',
    },
  ]);
});