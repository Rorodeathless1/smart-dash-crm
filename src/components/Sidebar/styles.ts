import styled from 'styled-components';
import type { ThemeType } from '../../styles/theme';

export const SidebarContainer = styled.aside<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  padding: ${({ theme }) => theme.spacing(6)} 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &:hover {
    width: 280px;
    align-items: flex-start;
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(4)}`};
  }
`;

export const Logo = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  ${SidebarContainer}:hover & {
    justify-content: flex-start;
    padding-left: ${({ theme }) => theme.spacing(2)};
  }

  span {
    font-size: 22px;
    font-weight: 700;
    white-space: nowrap;
    display: none;

    ${SidebarContainer}:hover & {
      display: block;
      animation: fadeIn 0.3s forwards;
    }
  }

  svg {
    flex-shrink: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NavList = styled.ul<{ theme: ThemeType }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрируем иконки в списке */
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
  margin: 0;

  ${SidebarContainer}:hover & {
    align-items: flex-start;
  }
`;

export const NavItem = styled.li<{ theme: ThemeType; $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.textMain : theme.colors.textSecondary};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'transparent'};

  ${SidebarContainer}:hover & {
    width: 100%;
    height: 48px;
    justify-content: flex-start;
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
    gap: 12px;
  }

  &:hover {
    ${({ $active, theme }) =>
      !$active &&
      `
      background-color: ${theme.colors.primary}20; 
      color: ${theme.colors.primary};
    `};
  }

  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  span {
    font-weight: 500;
    white-space: nowrap;
    display: none;

    ${SidebarContainer}:hover & {
      display: block;
    }
  }
`;
