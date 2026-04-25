import styled from 'styled-components';
import type { ThemeType } from '../../styles/theme';

export const TableContainer = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(6)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 32px;
  overflow-x: auto;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Th = styled.th<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Td = styled.td<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border + '40'};
`;

// Специальная ячейка для ID
export const OrderId = styled(Td)`
  color: #6c5dd3;
  font-weight: 500;
`;

// Специальная ячейка для суммы
export const Amount = styled(Td)`
  font-weight: 600;
`;

// Контейнер для имени и почты клиента
export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span:first-child {
    color: #fff;
    font-weight: 500;
  }

  span:last-child {
    font-size: 12px;
    color: #808191;
  }
`;

export const StatusBadge = styled.span<{ $status: string }>`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;

  background-color: ${({ $status }) => {
    switch ($status) {
      case 'Paid':
        return '#4CAF5020';
      case 'Pending':
        return '#FFCE7320';
      case 'Cancelled':
        return '#FF525220';
      default:
        return '#6C5DD320';
    }
  }};

  color: ${({ $status }) => {
    switch ($status) {
      case 'Paid':
        return '#4CAF50';
      case 'Pending':
        return '#FFCE73';
      case 'Cancelled':
        return '#FF5252';
      default:
        return '#6C5DD3';
    }
  }};
`;
