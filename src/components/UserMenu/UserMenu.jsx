// import { Button } from '@chakra-ui/react';
import { UserMenuItem, UserMenuWrapper, UserText } from 'components/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { logOut } from 'redux/users/operations';
import { Button } from '../ContactsForm/Styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userIn = useSelector(getUser);
  const isUserLoggedIn = Boolean(userIn);

  console.log(isUserLoggedIn);
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
        <Button onClick={onLogOut}>Log Out</Button>
      </UserMenuItem>
    </UserMenuWrapper>
  );
};
