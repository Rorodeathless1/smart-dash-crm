import styled from 'styled-components';
import type { ThemeType } from '../../styles/theme';

export const HeaderContainer = styled.header<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(6)}`};
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 70px;
`;

export const SearchWrapper = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  border-radius: 10px;
  width: 400px;
  gap: 12px;

  input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textMain};
    outline: none;
    width: 100%;
    font-size: 14px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const UserActions = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const IconButton = styled.button<{ theme: ThemeType }>`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const UserProfile = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.background};
  }

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
