import { Box, Button, Flex, Text } from '@chakra-ui/react';
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
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <Flex
        justifyContent={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
      >
        <img
          src="https://img.icons8.com/laces/64/null/user.png"
          alt="avatar"
          width="40"
          height="40"
        />
        <Text variant="userName">
          Hello,
          {userIn.name}
        </Text>
      </Flex>
      <Button variant="logOutButton" onClick={onLogOut}>
        Log Out
      </Button>
    </Box>
  );
};
