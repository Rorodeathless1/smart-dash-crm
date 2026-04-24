export type ThemeType = typeof darkTheme;

export const darkTheme = {
  colors: {
    // Основные фоновые цвета
    background: '#111317', // Темный фон всего приложения
    surface: '#1a1c22', // Цвет карточек и панелей

    // Акценты (тот самый мятный/бирюзовый из Фигмы)
    primary: '#705cf6',
    secondary: '#808191', // Серый для второстепенного текста

    // Текст
    textMain: '#ffffff',
    textSecondary: '#b2b3bd',

    // Вспомогательные
    border: '#2a2d34',
    error: '#ff5f5f',
    success: '#4ade80',

    transparent: 'transparent',
  },

  // Удобная сетка (8px base). spacing(2) даст 16px.
  spacing: (val: number) => `${val * 4}px`,

  // Радиусы скругления
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '24px',
  },
};
