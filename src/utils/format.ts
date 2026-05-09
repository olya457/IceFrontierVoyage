import type {Coordinate} from '../types';

export const formatCoordinate = (coordinate: Coordinate) =>
  `${Math.abs(coordinate.latitude).toFixed(1)}°${coordinate.latitude < 0 ? 'S' : 'N'}, ${Math.abs(coordinate.longitude).toFixed(1)}°${coordinate.longitude < 0 ? 'W' : 'E'}`;
