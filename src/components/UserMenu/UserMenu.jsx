import { Button } from '@chakra-ui/react';
import { UserMenuItem, UserMenuWrapper, UserText } from 'styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { logOut } from 'redux/users/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userIn = useSelector(getUser);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <UserMenuItem>
        <img
          src="https://img.icons8.com/laces/64/null/user.png"
          alt="avatar"
          width="40"
          height="40"
        />
        <UserText>
          Hello,
          {userIn.name}
        </UserText>
      </UserMenuItem>
      <UserMenuItem>
        <Button
          variant="primary"
          _active={{ background: 'hoverBtn' }}
          _hover={{ background: 'hoverBtn' }}
          onClick={onLogOut}
        >
          Log Out
        </Button>
      </UserMenuItem>
    </UserMenuWrapper>
  );
};
