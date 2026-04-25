import * as S from './styles';
import { RECENT_ORDERS, TABLE_COLUMNS } from '../../constants/constants';

export const OrdersTable = () => {
  return (
    <S.TableContainer>
      <S.Title>Recent Orders</S.Title>
      <S.Table>
        <thead>
          <tr>
            {TABLE_COLUMNS.map((column) => (
              <S.Th key={column.id}>{column.label}</S.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RECENT_ORDERS.map((order) => (
            <tr key={order.id}>
              <S.OrderId>{order.id}</S.OrderId>

              <S.Td>
                <S.CustomerInfo>
                  <span>{order.customer}</span>
                  <span>{order.email}</span>
                </S.CustomerInfo>
              </S.Td>

              <S.Td>{order.date}</S.Td>

              <S.Amount>{order.amount}</S.Amount>

              <S.Td>
                <S.StatusBadge $status={order.status}>
                  {order.status}
                </S.StatusBadge>
              </S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};
