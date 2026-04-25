import { Layout } from '../components/Layout/Layout';
import { OrdersTable } from '../components/OrdersTable/OrdersTable';
import { StatCard } from '../components/StatCard/StatCard';
import { STATS_DATA } from '../constants/constants';
import * as S from './styles';

export const App = () => {
  return (
    <Layout>
      {/* Всё, что внутри Layout, попадет в S.Content через props.children */}
      <S.PageTitle>Панель управления</S.PageTitle>
      <S.PageSubtitle>Добро пожаловать в рабочую область.</S.PageSubtitle>
      <S.StatsGrid>
        {STATS_DATA.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </S.StatsGrid>
      <OrdersTable />
    </Layout>
  );
};
