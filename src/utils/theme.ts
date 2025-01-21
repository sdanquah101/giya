export const theme = {
  colors: {
    // Main colors
    primary: '#006B7D',    // Teal
    secondary: '#FFFFFF',   // White
    accent: '#00A1B8',     // Bright teal
    dark: '#004150',       // Deep teal
    light: '#F8F9FA',      // Light gray
    // Complementary colors
    complement: {
      primary: '#004B59',   // Darker teal
      secondary: '#F0F9FB', // Very light teal
      accent: '#E8F6F8',    // Light teal
      dark: '#002A33',      // Very dark teal
      light: '#FFFFFF'      // White
    }
  }
} as const;

export type ThemeColors = keyof typeof theme.colors;