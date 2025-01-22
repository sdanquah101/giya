export const menuItems = [
  'home',
  'about',
  'schedule',
  'speakers',
  'registration',
  'venue',
  'faq',
  'contact',
] as const;

export type MenuItem = typeof menuItems[number];