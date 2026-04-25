import { Bell, ChevronDown, Search } from 'lucide-react';
import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.SearchWrapper>
        <Search size={18} />
        <input type="text" placeholder="Search here..." />
      </S.SearchWrapper>

      <S.UserActions>
        <S.IconButton>
          <Bell size={20} />
          {/* Можно добавить красный индикатор уведомлений */}
        </S.IconButton>

        <S.UserProfile>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lol"
            alt="User"
          />
          <ChevronDown size={16} />
        </S.UserProfile>
      </S.UserActions>
    </S.HeaderContainer>
  );
};
