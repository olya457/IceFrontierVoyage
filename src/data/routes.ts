import {images} from '../assets/images';
import type {ExpeditionRoute, TourCategory} from '../types';

export const tourCategories: TourCategory[] = [
  'Classic Peninsula',
  'Deep Expedition',
  'Wildlife & Islands',
  'Fly & Cruise',
];

export const expeditionRoutes: ExpeditionRoute[] = [
  {
    id: 'ushuaia-peninsula',
    title: 'Ushuaia to Antarctic Peninsula',
    category: 'Classic Peninsula',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Antarctic Peninsula',
    coordinate: {latitude: -64.825, longitude: -63.5},
    duration: '10-12 days',
    difficulty: 'Moderate',
    season: 'Nov - Mar',
    shortDescription:
      'A classic first-time Antarctic route from South America to the Antarctic Peninsula.',
    longDescription:
      'This route is one of the most popular ways to reach Antarctica. Travelers usually depart from Ushuaia, cross the Drake Passage, and arrive near the Antarctic Peninsula. The journey focuses on dramatic icebergs, glacier-lined bays, remote landing areas, expedition cruising, and the feeling of entering one of the most isolated regions on Earth.',
    image: images.routes.ushuaiaPeninsula,
  },
  {
    id: 'drake-passage',
    title: 'Drake Passage Crossing',
    category: 'Classic Peninsula',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Drake Passage',
    coordinate: {latitude: -57.5, longitude: -65},
    duration: '9-11 days',
    difficulty: 'Moderate',
    season: 'Nov - Mar',
    shortDescription:
      'A route built around the legendary sea crossing between South America and Antarctica.',
    longDescription:
      'The Drake Passage Crossing is a defining part of many Antarctic journeys. This route highlights the transition from the southern tip of South America to the cold waters surrounding Antarctica. It is ideal for users who want a realistic expedition experience where the ocean crossing is part of the adventure, not just transport.',
    image: images.routes.drakePassage,
  },
  {
    id: 'south-shetland-islands-route',
    title: 'South Shetland Islands Route',
    category: 'Classic Peninsula',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'South Shetland Islands',
    coordinate: {latitude: -62, longitude: -58},
    duration: '10-12 days',
    difficulty: 'Moderate',
    season: 'Nov - Mar',
    shortDescription:
      'A scenic route through islands, icy coastlines, and expedition landing areas.',
    longDescription:
      'This route focuses on the South Shetland Islands, a gateway region near the Antarctic Peninsula. It offers a strong mix of polar landscapes, island scenery, icy channels, and remote coastal views. In the app, this route works well as a visually rich option with island pins, ship paths, and station-related stops.',
    image: images.routes.southShetlandIslandsRoute,
  },
  {
    id: 'lemaire-channel',
    title: 'Lemaire Channel Passage',
    category: 'Classic Peninsula',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Lemaire Channel',
    coordinate: {latitude: -65.0833, longitude: -63.9667},
    duration: '11-13 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A narrow icy channel route known for dramatic Antarctic scenery.',
    longDescription:
      'The Lemaire Channel Passage is a highly visual route through one of the most cinematic areas near the Antarctic Peninsula. Tall ice walls, reflective waters, and narrow passages create a strong expedition atmosphere. It is perfect for a premium travel app because the route can be presented with powerful imagery and a clear visual identity.',
    image: images.routes.lemaireChannel,
  },
  {
    id: 'antarctic-peninsula-explorer',
    title: 'Antarctic Peninsula Explorer',
    category: 'Classic Peninsula',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Antarctic Peninsula',
    coordinate: {latitude: -64.5, longitude: -62.5},
    duration: '11-14 days',
    difficulty: 'Moderate',
    season: 'Nov - Mar',
    shortDescription:
      'A broad route designed to explore several key areas of the Antarctic Peninsula.',
    longDescription:
      'This route gives users a wider view of the Antarctic Peninsula, combining bays, glaciers, ice formations, and possible landing zones. It is a flexible route where the exact path depends on weather and ice conditions. In the app, it can be shown as a premium core Antarctica experience.',
    image: images.routes.antarcticPeninsulaExplorer,
  },
  {
    id: 'weddell-sea',
    title: 'Weddell Sea Expedition',
    category: 'Deep Expedition',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Weddell Sea',
    coordinate: {latitude: -73, longitude: -45},
    duration: '12-15 days',
    difficulty: 'Advanced',
    season: 'Jan - Mar',
    shortDescription:
      'A remote expedition route into one of Antarctica’s most dramatic ice regions.',
    longDescription:
      'The Weddell Sea Expedition focuses on vast ice formations, remote navigation, and powerful polar landscapes. Ice conditions can shape the route, giving it a more authentic expedition feeling. This is a strong option for travelers who want a deeper, colder, and more adventurous Antarctic experience.',
    image: images.routes.weddellSea,
  },
  {
    id: 'ross-sea',
    title: 'Ross Sea Discovery',
    category: 'Deep Expedition',
    startingPoint: 'Christchurch, New Zealand',
    mainArea: 'Ross Sea',
    coordinate: {latitude: -76, longitude: 170},
    duration: '25-30 days',
    difficulty: 'Extreme',
    season: 'Jan - Feb',
    shortDescription:
      'A rare long-distance expedition into one of Antarctica’s most remote sea regions.',
    longDescription:
      'Ross Sea Discovery is a demanding route for experienced expedition travelers. It is connected with remote ice shelves, vast polar waters, and historic Antarctic exploration areas. This route should feel premium, rare, and difficult, the kind of journey users save because it feels almost mythical.',
    image: images.routes.rossSea,
  },
  {
    id: 'bellingshausen-sea',
    title: 'Bellingshausen Sea Route',
    category: 'Deep Expedition',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Bellingshausen Sea',
    coordinate: {latitude: -70, longitude: -85},
    duration: '16-20 days',
    difficulty: 'Advanced',
    season: 'Jan - Mar',
    shortDescription:
      'A remote route along lesser-visited Antarctic waters.',
    longDescription:
      'The Bellingshausen Sea Route is designed for users interested in remote Antarctic waters beyond the most common routes. It offers a colder, quieter, and more isolated travel mood. In the app, this route should be presented with dark blue ocean visuals, heavy ice, and a strong sense of distance.',
    image: images.routes.bellingshausenSea,
  },
  {
    id: 'east-antarctica',
    title: 'East Antarctica Voyage',
    category: 'Deep Expedition',
    startingPoint: 'Hobart, Australia',
    mainArea: 'East Antarctica',
    coordinate: {latitude: -66, longitude: 110},
    duration: '20-28 days',
    difficulty: 'Extreme',
    season: 'Dec - Feb',
    shortDescription:
      'A long expedition toward the vast and remote side of East Antarctica.',
    longDescription:
      'East Antarctica Voyage represents a more ambitious expedition path. It covers distant polar waters, ice shelves, and remote coastal regions. This route is ideal for the app’s deep expedition category because it feels less common, more challenging, and visually massive.',
    image: images.routes.eastAntarctica,
  },
  {
    id: 'antarctic-circle',
    title: 'Antarctic Circle Deep Route',
    category: 'Deep Expedition',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Antarctic Circle',
    coordinate: {latitude: -66.56, longitude: -65},
    duration: '13-16 days',
    difficulty: 'Advanced',
    season: 'Jan - Mar',
    shortDescription:
      'A deeper route that travels beyond the Antarctic Circle.',
    longDescription:
      'This route takes users farther south than standard peninsula trips. Crossing the Antarctic Circle gives the journey a stronger milestone feeling. It works well as a premium achievement-style route in the app, with a map line showing the symbolic movement into deeper polar territory.',
    image: images.routes.antarcticCircle,
  },
  {
    id: 'falklands-south-georgia-antarctica',
    title: 'Falklands, South Georgia & Antarctica',
    category: 'Wildlife & Islands',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Falkland Islands, South Georgia, Antarctic Peninsula',
    coordinate: {latitude: -54.5, longitude: -36},
    duration: '18-22 days',
    difficulty: 'Advanced',
    season: 'Nov - Mar',
    shortDescription:
      'A long route combining islands, Southern Ocean crossings, and Antarctic landscapes.',
    longDescription:
      'This extended expedition links several major southern regions into one journey. It is ideal for users who want more than a standard Antarctic Peninsula route. The route combines island landscapes, remote ocean travel, dramatic coastlines, and the final approach toward Antarctica.',
    image: images.routes.falklandsSouthGeorgiaAntarctica,
  },
  {
    id: 'south-georgia',
    title: 'South Georgia Explorer',
    category: 'Wildlife & Islands',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'South Georgia',
    coordinate: {latitude: -54.4296, longitude: -36.5879},
    duration: '15-20 days',
    difficulty: 'Advanced',
    season: 'Nov - Mar',
    shortDescription:
      'A remote island-focused route through one of the Southern Ocean’s most dramatic regions.',
    longDescription:
      'South Georgia Explorer focuses on a rugged island environment far from ordinary travel routes. It offers strong visual variety: mountains, cold shores, expedition landings, and ocean navigation. In the app, this route should feel wild, cinematic, and more isolated than classic peninsula routes.',
    image: images.routes.southGeorgia,
  },
  {
    id: 'elephant-island',
    title: 'Elephant Island Route',
    category: 'Wildlife & Islands',
    startingPoint: 'Ushuaia, Argentina',
    mainArea: 'Elephant Island',
    coordinate: {latitude: -61.15, longitude: -55.1333},
    duration: '12-15 days',
    difficulty: 'Advanced',
    season: 'Dec - Mar',
    shortDescription:
      'A route toward a remote island with strong expedition history.',
    longDescription:
      'Elephant Island Route highlights one of the most atmospheric island areas near Antarctica. The route should be presented as rugged, cold, and historically charged. It is a strong addition to the Wildlife & Island category because it gives users a specific destination with a memorable identity.',
    image: images.routes.elephantIsland,
  },
  {
    id: 'king-george-island-route',
    title: 'King George Island Route',
    category: 'Wildlife & Islands',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'King George Island',
    coordinate: {latitude: -62.0167, longitude: -58.2667},
    duration: '7-10 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A route focused on one of the most accessible islands near the Antarctic Peninsula.',
    longDescription:
      'King George Island is often connected with Antarctic access, stations, and fly-cruise logistics. In the app, this route can connect tours and polar stations together. It is useful for users who want to understand how air access, island stops, and expedition cruising can combine.',
    image: images.routes.kingGeorgeIslandRoute,
  },
  {
    id: 'sub-antarctic-islands',
    title: 'Sub-Antarctic Islands Journey',
    category: 'Wildlife & Islands',
    startingPoint: 'Hobart, Australia',
    mainArea: 'Sub-Antarctic Islands',
    coordinate: {latitude: -52.5, longitude: 169},
    duration: '15-22 days',
    difficulty: 'Advanced',
    season: 'Dec - Feb',
    shortDescription:
      'A journey through remote islands before reaching colder Antarctic waters.',
    longDescription:
      'This route focuses on remote island environments south of Australia and New Zealand. It works well as a route category for users interested in wild landscapes, isolated coastlines, and long Southern Ocean travel. Visually, it should use dramatic cliffs, cold ocean, ship decks, and moody blue tones.',
    image: images.routes.subAntarcticIslands,
  },
  {
    id: 'punta-arenas-fly-cruise',
    title: 'Punta Arenas Fly-Cruise',
    category: 'Fly & Cruise',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'King George Island / Antarctic Peninsula',
    coordinate: {latitude: -62.0167, longitude: -58.2667},
    duration: '7-9 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A faster Antarctic route that combines air travel and expedition cruising.',
    longDescription:
      'This route begins in Punta Arenas and uses air access toward the South Shetland Islands before continuing by expedition ship. It is a strong option for users who want to reduce time at sea while still experiencing Antarctic landscapes, ice, and guided expedition travel.',
    image: images.routes.puntaArenasFlyCruise,
  },
  {
    id: 'king-george-air-cruise',
    title: 'King George Island Air-Cruise',
    category: 'Fly & Cruise',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'King George Island',
    coordinate: {latitude: -62.1908, longitude: -58.9867},
    duration: '6-8 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'An air-supported route beginning near one of Antarctica’s key island access points.',
    longDescription:
      'The King George Island Air-Cruise route is built around reaching Antarctica by air and joining a ship-based expedition from the island region. In the app, it should be shown as a compact but premium travel option with aircraft, station, and ship visuals.',
    image: images.routes.kingGeorgeAirCruise,
  },
  {
    id: 'antarctic-express-fly',
    title: 'Antarctic Express Fly Route',
    category: 'Fly & Cruise',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'Antarctic Peninsula',
    coordinate: {latitude: -64.5, longitude: -62.5},
    duration: '6-8 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A shorter route designed for users who want a focused Antarctic experience.',
    longDescription:
      'Antarctic Express Fly Route is ideal for users who want the feeling of Antarctica without a longer expedition schedule. The route combines fast access, compact planning, and key peninsula highlights. It should be presented as efficient, premium, and visually strong.',
    image: images.routes.antarcticExpressFly,
  },
  {
    id: 'fly-to-peninsula',
    title: 'Fly to Peninsula Cruise',
    category: 'Fly & Cruise',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'Antarctic Peninsula',
    coordinate: {latitude: -64.825, longitude: -63.5},
    duration: '8-10 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A fly-and-cruise route focused on the Antarctic Peninsula.',
    longDescription:
      'This route uses air travel to shorten the journey before continuing through Antarctic waters by expedition ship. It is a balanced option between comfort and adventure. The route should visually combine aircraft access, icy coastlines, ship decks, and dramatic blue-white polar scenery.',
    image: images.routes.flyToPeninsula,
  },
  {
    id: 'south-shetlands-fly-cruise',
    title: 'South Shetlands Fly-Cruise',
    category: 'Fly & Cruise',
    startingPoint: 'Punta Arenas, Chile',
    mainArea: 'South Shetland Islands',
    coordinate: {latitude: -62, longitude: -58},
    duration: '7-9 days',
    difficulty: 'Moderate',
    season: 'Dec - Mar',
    shortDescription:
      'A fly-cruise route through the islands near the Antarctic Peninsula.',
    longDescription:
      'South Shetlands Fly-Cruise focuses on the island gateway to Antarctica. It gives users a route that feels accessible but still fully polar. In the app, this route can connect well with station pins, island points, and ship-based exploration cards.',
    image: images.routes.southShetlandsFlyCruise,
  },
];

export const getRouteById = (id: string) =>
  expeditionRoutes.find(route => route.id === id);
