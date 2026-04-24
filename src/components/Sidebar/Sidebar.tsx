import {
  BarChart3,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';
import * as S from './styles';
import { useState } from 'react';

const menuItems = [
  { id: 'dash', label: 'Панель управления', icon: LayoutDashboard },
  { id: 'users', label: 'Клиенты', icon: Users },
  { id: 'orders', label: 'Заказы', icon: ShoppingCart },
  { id: 'stats', label: 'Аналитика', icon: BarChart3 },
  { id: 'settings', label: 'Настройки', icon: Settings },
];

export const Sidebar = () => {
  const [activeId, setActiveId] = useState('dash');

  return (
    <S.SidebarContainer>
      <S.Logo>
        {/* Иконка в логотипе */}
        <LayoutDashboard size={28} />
        <span>SmartDash</span>
      </S.Logo>

      <nav>
        <S.NavList>
          {menuItems.map((item) => (
            <S.NavItem
              key={item.id}
              $active={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            >
              <item.icon />
              <span>{item.label}</span>
            </S.NavItem>
          ))}
        </S.NavList>
      </nav>
      <S.NavList style={{ marginTop: 'auto' }}>
        <S.NavItem>
          <LogOut />
          <span>Выйти</span>
        </S.NavItem>
      </S.NavList>
    </S.SidebarContainer>
  );
};
