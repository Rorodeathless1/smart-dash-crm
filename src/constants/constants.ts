import {
  Activity,
  DollarSign,
  ShoppingBag,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  isUp: boolean;
  iconColor: string;
}

interface OrderItem {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Cancelled' | 'Shipped';
}

export interface TableColumn {
  id: string;
  label: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: 'sales',
    label: 'Всего продаж',
    value: '$128,430',
    icon: DollarSign,
    trend: '+12% за месяц',
    isUp: true,
    iconColor: '#6C5DD3',
  },
  {
    id: 'customers',
    label: 'Активные клиенты',
    value: '4,320',
    icon: Users,
    trend: '+5% за неделю',
    isUp: true,
    iconColor: '#FFCE73',
  },
  {
    id: 'orders',
    label: 'Новые заказы',
    value: '156',
    icon: ShoppingBag,
    trend: '-2% со вчера',
    isUp: false,
    iconColor: '#7FBA7A',
  },
  {
    id: 'activity',
    label: 'Активность',
    value: '89%',
    icon: Activity,
    trend: '+10% за месяц',
    isUp: true,
    iconColor: '#FF82AC',
  },
];

export const RECENT_ORDERS: OrderItem[] = [
  {
    id: '#1254',
    customer: 'Alexander Suvorov',
    email: 'alex.s@example.com',
    date: '25 Апр, 2026',
    amount: '$450.00',
    status: 'Paid',
  },
  {
    id: '#1255',
    customer: 'Elena Ivanova',
    email: 'e.ivanova@company.com',
    date: '24 Апр, 2026',
    amount: '$1,200.00',
    status: 'Pending',
  },
  {
    id: '#1256',
    customer: 'Michael Brown',
    email: 'm.brown@dev.io',
    date: '24 Апр, 2026',
    amount: '$850.00',
    status: 'Shipped',
  },
  {
    id: '#1257',
    customer: 'Anna Smith',
    email: 'anna.smith@design.com',
    date: '23 Апр, 2026',
    amount: '$230.00',
    status: 'Cancelled',
  },
];

export const TABLE_COLUMNS: TableColumn[] = [
  { id: 'id', label: 'Order ID' },
  { id: 'customer', label: 'Customer' },
  { id: 'date', label: 'Date' },
  { id: 'amount', label: 'Amount' },
  { id: 'status', label: 'Status' },
];
