import {images} from '../assets/images';
import type {Station, StationCategory} from '../types';

export const stationCategories: StationCategory[] = [
  'Research Bases',
  'Historic Stations',
  'Remote Ice Stations',
  'Coastal Stations',
];

export const stations: Station[] = [
  {
    id: 'mcmurdo',
    title: 'McMurdo Station',
    category: 'Research Bases',
    country: 'United States',
    stationType: 'Research Base',
    coordinate: {latitude: -77.8419, longitude: 166.6863},
    location: 'Ross Island',
    shortDescription:
      'The largest research station in Antarctica and a major logistics hub.',
    longDescription:
      'McMurdo Station is one of the most important research and logistics centers in Antarctica. Located on Ross Island, it supports scientific operations, field expeditions, transport, and supply movement across the region. In the app, this station should feel large, functional, and powerful, more like an Antarctic city than a small outpost.',
    image: images.stations.mcmurdo,
  },
  {
    id: 'rothera',
    title: 'Rothera Research Station',
    category: 'Research Bases',
    country: 'United Kingdom',
    stationType: 'Research Base',
    coordinate: {latitude: -67.5682, longitude: -68.127},
    location: 'Adelaide Island',
    shortDescription: 'A major British research station on Adelaide Island.',
    longDescription:
      'Rothera Research Station is a key British Antarctic research base located on Adelaide Island. It supports marine science, climate research, aircraft operations, and field activity across the Antarctic Peninsula region. Visually, this station works well with strong red building accents, snowfields, and a dramatic coastal setting.',
    image: images.stations.rothera,
  },
  {
    id: 'princess-elisabeth',
    title: 'Princess Elisabeth Antarctica',
    category: 'Research Bases',
    country: 'Belgium',
    stationType: 'Research Base',
    coordinate: {latitude: -71.9499, longitude: 23.347},
    location: 'Queen Maud Land',
    shortDescription:
      'A modern Antarctic research station with a distinctive futuristic design.',
    longDescription:
      'Princess Elisabeth Antarctica is one of the most visually distinctive research stations on the continent. Its modern form, isolated setting, and clean architectural profile make it ideal for a premium station card. In the app, this station should feel advanced, minimal, and almost sci-fi, while still grounded in polar research.',
    image: images.stations.princessElisabeth,
  },
  {
    id: 'casey',
    title: 'Casey Station',
    category: 'Research Bases',
    country: 'Australia',
    stationType: 'Research Base',
    coordinate: {latitude: -66.2828, longitude: 110.5276},
    location: 'Windmill Islands',
    shortDescription: 'An Australian research station in East Antarctica.',
    longDescription:
      'Casey Station is an Australian Antarctic research base located in the Windmill Islands area. It supports science, logistics, and field operations in East Antarctica. The station’s colorful buildings and coastal setting make it useful for UI cards that need contrast against the dark blue icy interface.',
    image: images.stations.casey,
  },
  {
    id: 'dumont-durville',
    title: 'Dumont d’Urville Station',
    category: 'Research Bases',
    country: 'France',
    stationType: 'Research Base',
    coordinate: {latitude: -66.6631, longitude: 140.0019},
    location: 'Adélie Land',
    shortDescription:
      'A French Antarctic research station in Adélie Land.',
    longDescription:
      'Dumont d’Urville Station is a French research base located along the coast of East Antarctica. It supports scientific work in a harsh coastal environment, where ice, rock, wind, and sea conditions shape daily operations. Its coastal location makes it visually different from deep inland bases.',
    image: images.stations.dumontDurville,
  },
  {
    id: 'port-lockroy',
    title: 'Port Lockroy',
    category: 'Historic Stations',
    country: 'United Kingdom',
    stationType: 'Historic Station',
    coordinate: {latitude: -64.8253, longitude: -63.4944},
    location: 'Goudier Island',
    shortDescription:
      'A historic Antarctic site known for its preserved base and visitor heritage role.',
    longDescription:
      'Port Lockroy is one of the most recognizable historic Antarctic sites. Located on Goudier Island, it has a strong heritage identity and is often associated with early Antarctic operations and visitor experiences. In the app, this station should feel atmospheric, compact, and historically meaningful.',
    image: images.stations.portLockroy,
  },
  {
    id: 'vernadsky',
    title: 'Vernadsky Research Base',
    category: 'Historic Stations',
    country: 'Ukraine',
    stationType: 'Historic Station',
    coordinate: {latitude: -65.2458, longitude: -64.2578},
    location: 'Argentine Islands',
    shortDescription:
      'A Ukrainian Antarctic research base with strong historical roots.',
    longDescription:
      'Vernadsky Research Base is one of the most recognizable Antarctic stations for Ukrainian users. Located in the Argentine Islands, it combines active research, polar history, and a unique emotional identity. In the app, this station should be visually important and should use a strong image card with snow, rocks, water, and station structures.',
    image: images.stations.vernadsky,
  },
  {
    id: 'mawson',
    title: 'Mawson Station',
    category: 'Historic Stations',
    country: 'Australia',
    stationType: 'Historic Station',
    coordinate: {latitude: -67.6033, longitude: 62.8738},
    location: 'Mac. Robertson Land',
    shortDescription: 'One of Australia’s oldest Antarctic stations.',
    longDescription:
      'Mawson Station has a strong place in Australian Antarctic history. Its remote setting and long operational background make it a strong fit for the Historic Stations category. In the UI, it should feel rugged, practical, and connected to long-term human presence on the continent.',
    image: images.stations.mawson,
  },
  {
    id: 'scott-base',
    title: 'Scott Base',
    category: 'Historic Stations',
    country: 'New Zealand',
    stationType: 'Historic Station',
    coordinate: {latitude: -77.8494, longitude: 166.7681},
    location: 'Ross Island',
    shortDescription:
      'A New Zealand Antarctic station with historic exploration connections.',
    longDescription:
      'Scott Base is an important New Zealand Antarctic station located on Ross Island. Its name and location connect it strongly with Antarctic exploration heritage. The station’s distinctive green buildings can create a memorable visual contrast inside the app’s blue and white palette.',
    image: images.stations.scottBase,
  },
  {
    id: 'esperanza',
    title: 'Esperanza Base',
    category: 'Historic Stations',
    country: 'Argentina',
    stationType: 'Historic Station',
    coordinate: {latitude: -63.3974, longitude: -56.9973},
    location: 'Hope Bay',
    shortDescription:
      'An Argentine Antarctic base with a unique human settlement history.',
    longDescription:
      'Esperanza Base is one of the most distinctive Antarctic stations because of its long-term settlement and community identity. It is located at Hope Bay and has a strong visual presence with colorful buildings against snow and rock. In the app, it works well as a heritage-focused station with a warmer human story.',
    image: images.stations.esperanza,
  },
  {
    id: 'south-pole',
    title: 'Amundsen-Scott South Pole Station',
    category: 'Remote Ice Stations',
    country: 'United States',
    stationType: 'Remote Ice Station',
    coordinate: {latitude: -90, longitude: 0},
    location: 'Geographic South Pole',
    shortDescription:
      'A remote research station located at the geographic South Pole.',
    longDescription:
      'Amundsen-Scott South Pole Station is one of the most extreme research locations on Earth. It sits on the high Antarctic plateau at the geographic South Pole. In the app, this station should feel clean, isolated, and almost unreal, with vast white space and minimal visual noise.',
    image: images.stations.southPole,
  },
  {
    id: 'concordia',
    title: 'Concordia Station',
    category: 'Remote Ice Stations',
    country: 'France / Italy',
    stationType: 'Remote Ice Station',
    coordinate: {latitude: -75.1, longitude: 123.3333},
    location: 'Dome C',
    shortDescription: 'A remote inland station on the Antarctic plateau.',
    longDescription:
      'Concordia Station is located at Dome C, one of the most isolated station environments in Antarctica. Its remote inland position makes it ideal for the Remote Ice Stations category. Visually, it should communicate silence, distance, extreme cold, and scientific endurance.',
    image: images.stations.concordia,
  },
  {
    id: 'kohnen',
    title: 'Kohnen Station',
    category: 'Remote Ice Stations',
    country: 'Germany',
    stationType: 'Remote Ice Station',
    coordinate: {latitude: -75.0017, longitude: 0.0667},
    location: 'Dronning Maud Land',
    shortDescription:
      'A remote German summer station on the Antarctic ice sheet.',
    longDescription:
      'Kohnen Station is a remote research site located in Dronning Maud Land. Its isolation and smaller scale make it different from large coastal bases. In the app, it should feel like a precise scientific outpost placed inside a massive frozen landscape.',
    image: images.stations.kohnen,
  },
  {
    id: 'halley',
    title: 'Halley Research Station',
    category: 'Remote Ice Stations',
    country: 'United Kingdom',
    stationType: 'Remote Ice Station',
    coordinate: {latitude: -75.605, longitude: -26.657},
    location: 'Brunt Ice Shelf',
    shortDescription:
      'A British station designed for extreme ice shelf conditions.',
    longDescription:
      'Halley Research Station is known for its distinctive modular design and challenging ice shelf environment. It is a strong visual station for the app because it looks futuristic, engineered, and remote. The UI card should emphasize blue shadows, modular architecture, and the feeling of a station built to survive moving ice.',
    image: images.stations.halley,
  },
  {
    id: 'palmer',
    title: 'Palmer Station',
    category: 'Coastal Stations',
    country: 'United States',
    stationType: 'Coastal Station',
    coordinate: {latitude: -64.7742, longitude: -64.0533},
    location: 'Anvers Island',
    shortDescription: 'A coastal research station on Anvers Island.',
    longDescription:
      'Palmer Station is located near the Antarctic Peninsula and has a strong marine research identity. Its coastal setting makes it visually rich, combining station buildings, icy water, rock, and snow. In the app, this station should feel accessible, scenic, and connected to the ocean environment.',
    image: images.stations.palmer,
  },
  {
    id: 'neumayer',
    title: 'Neumayer Station III',
    category: 'Coastal Stations',
    country: 'Germany',
    stationType: 'Coastal Station',
    coordinate: {latitude: -70.6667, longitude: -8.2667},
    location: 'Ekström Ice Shelf',
    shortDescription:
      'A modern German station on the Ekström Ice Shelf.',
    longDescription:
      'Neumayer Station III is a German Antarctic station located on the Ekström Ice Shelf. It has a clean modern appearance and works well as a premium visual card. Although isolated, its ice shelf setting connects it visually to coastal Antarctic operations and logistics.',
    image: images.stations.neumayer,
  },
  {
    id: 'davis',
    title: 'Davis Station',
    category: 'Coastal Stations',
    country: 'Australia',
    stationType: 'Coastal Station',
    coordinate: {latitude: -68.5766, longitude: 77.9674},
    location: 'Princess Elizabeth Land',
    shortDescription:
      'An Australian coastal research station in East Antarctica.',
    longDescription:
      'Davis Station is located in a coastal region of East Antarctica and supports scientific activity in a visually varied environment. Its combination of sea ice, station buildings, and rocky terrain makes it useful for map previews and station cards with more texture than pure ice plateau scenes.',
    image: images.stations.davis,
  },
  {
    id: 'syowa',
    title: 'Syowa Station',
    category: 'Coastal Stations',
    country: 'Japan',
    stationType: 'Coastal Station',
    coordinate: {latitude: -69.0064, longitude: 39.59},
    location: 'East Ongul Island',
    shortDescription:
      'A Japanese Antarctic station located on East Ongul Island.',
    longDescription:
      'Syowa Station is a Japanese research base located on a coastal island in East Antarctica. Its setting gives the app another strong island-based station option. The station card should use cold coastal scenery, compact buildings, and a clean scientific atmosphere.',
    image: images.stations.syowa,
  },
  {
    id: 'marambio',
    title: 'Marambio Base',
    category: 'Coastal Stations',
    country: 'Argentina',
    stationType: 'Coastal Station',
    coordinate: {latitude: -64.24, longitude: -56.625},
    location: 'Seymour Island',
    shortDescription:
      'An Argentine Antarctic base located on Seymour Island.',
    longDescription:
      'Marambio Base is located on Seymour Island and plays an important logistics role in the Antarctic Peninsula region. Its island setting and aviation connection make it useful for the app’s map and travel context. Visually, it can combine snow, station buildings, runway-like space, and cold coastal distance.',
    image: images.stations.marambio,
  },
];

export const getStationById = (id: string) =>
  stations.find(station => station.id === id);
