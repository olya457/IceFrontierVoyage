import type {ImageSourcePropType} from 'react-native';

export type SavedKind = 'tour' | 'station' | 'prep';

export type Difficulty = 'Moderate' | 'Advanced' | 'Extreme';

export type TourCategory =
  | 'Classic Peninsula'
  | 'Deep Expedition'
  | 'Wildlife & Islands'
  | 'Fly & Cruise';

export type StationCategory =
  | 'Research Bases'
  | 'Historic Stations'
  | 'Remote Ice Stations'
  | 'Coastal Stations';

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type ExpeditionRoute = {
  id: string;
  title: string;
  category: TourCategory;
  startingPoint: string;
  mainArea: string;
  coordinate: Coordinate;
  duration: string;
  difficulty: Difficulty;
  season: string;
  shortDescription: string;
  longDescription: string;
  image: ImageSourcePropType;
};

export type Station = {
  id: string;
  title: string;
  category: StationCategory;
  country: string;
  stationType: string;
  coordinate: Coordinate;
  location: string;
  shortDescription: string;
  longDescription: string;
  image: ImageSourcePropType;
};

export type PrepArticle = {
  id: string;
  title: string;
  subtitle: string;
  longText: string;
};

export type SavedState = {
  tour: string[];
  station: string[];
  prep: string[];
};
