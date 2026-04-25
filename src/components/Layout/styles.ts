import styled from 'styled-components';
import type { ThemeType } from '../../styles/theme';

export const LayoutWrapper = styled.div<{ theme: ThemeType }>`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* Это заставит контент плавно подстраиваться под ширину сайдбара */
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
`;

export const Content = styled.main<{ theme: ThemeType }>`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(6)};
  overflow-y: auto;
`;
