import {Platform} from 'react-native';

export const colors = {
  bgTop: '#061c33',
  bgBottom: '#064884',
  panel: '#0d477f',
  panelDeep: '#082f56',
  panelSoft: 'rgba(13, 71, 127, 0.84)',
  line: '#1f73ad',
  lineSoft: 'rgba(80, 190, 255, 0.28)',
  text: '#f4fbff',
  muted: '#a7d9ee',
  dim: '#75b9d8',
  cyan: '#4fc3f7',
  cyanDeep: '#0b93d1',
  yellow: '#ffc232',
  red: '#ff4638',
  dark: '#05213d',
  navy: '#04192e',
  white: '#ffffff',
};

export const gradients = {
  app: [colors.bgTop, '#073461', colors.bgBottom],
  card: ['#0d4a86', '#0a3d72'],
  hero: ['rgba(4, 25, 46, 0.12)', 'rgba(4, 25, 46, 0.86)'],
  button: ['#57c7fb', '#45b8ee'],
};

export const radii = {
  panel: 18,
  card: 14,
  chip: 22,
  button: 16,
};

export const tabBarGap = Platform.OS === 'ios' ? 20 : 30;
export const androidEdge = Platform.OS === 'android' ? 30 : 0;
export const tabBarHeight = 76;
export const tabBarSpace = tabBarHeight + tabBarGap + 132;
