import { createGlobalStyle } from 'styled-components';
import type { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
/* 1. Сброс стандартных стилей (CSS Reset) */

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. Базовые настройки страницы */
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.textMain};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* 3. Сброс для ссылок и списков */
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* 4. Настройка скроллбара (чтобы был аккуратным и темным) */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 10px;
  }
`;
