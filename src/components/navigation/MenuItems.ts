export const menuItems = [
  'home',
  'about',
  'schedule',
  'speakers',
  'registration',
  'venue',
  'FAQ',
  'contact',
] as const;

export type MenuItem = typeof menuItems[number];