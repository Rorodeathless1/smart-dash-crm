import React from 'react';
import * as S from './styles';
import { TrendingDown, TrendingUp, type LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  isUp: boolean;
  iconColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  trend,
  isUp,
  iconColor,
}) => {
  return (
    <S.Card>
      <S.IconWrapper $color={iconColor}>
        <Icon size={24} />
      </S.IconWrapper>
      <S.Info>
        <S.Label>{label}</S.Label>
        <S.Value>{value}</S.Value>
      </S.Info>
      <S.Trend $isUp={isUp}>
        {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        {trend}
      </S.Trend>
    </S.Card>
  );
};
