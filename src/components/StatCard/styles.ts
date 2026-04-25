import styled from 'styled-components';
import type { ThemeType } from '../../styles/theme';

export const Card = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $color }) => `${$color}20`};
  color: ${({ $color }) => $color};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #808191;
  font-size: 14px;
  font-weight: 500;
`;

export const Value = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-top: 4px;
`;

export const Trend = styled.span<{ $isUp: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $isUp }) => ($isUp ? '#4CAF50' : '#FF5252')};
  display: flex;
  align-items: center;
  gap: 4px;
`;
