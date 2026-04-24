import { Sidebar } from '../components/Sidebar/Sidebar';
import * as S from './styles';

export const App = () => {
  return (
    <S.Layout>
      <Sidebar />

      <S.MainContent>
        <h1>SmartDash CRM</h1>
        <p>Добро пожаловать в рабочую область.</p>
      </S.MainContent>
    </S.Layout>
  );
};
