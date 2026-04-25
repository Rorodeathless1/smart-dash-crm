import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PageSubtitle = styled.p`
  color: #808191;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;
