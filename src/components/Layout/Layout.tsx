import React from 'react';
import * as S from './styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <Sidebar />

      <S.MainContainer>
        <Header />
        <S.Content>{children}</S.Content>
      </S.MainContainer>
    </S.LayoutWrapper>
  );
};
