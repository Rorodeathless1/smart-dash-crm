import styled from 'styled-components';
import type { ThemeType } from '../styles/theme';

// 1. Главный контейнер на весь экран
export const Layout = styled.div<{ theme: ThemeType }>`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

// 2. Будущий сайдбар
export const SidebarPlaceholder = styled.aside<{ theme: ThemeType }>`
  width: 280px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

// 3. Область для основного контента
export const MainContent = styled.main<{ theme: ThemeType }>`
  flex: 1; /* Занимает всё оставшееся место справа */
  padding: ${({ theme }) => theme.spacing(4)};
  overflow-y: auto; /* Если контента много, будет скролл только тут */
`;
