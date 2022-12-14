import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { logOut } from 'redux/users/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const avatar = defaultAvatar;
  const userIn = useSelector(getUser);
  const isUserLoggedIn = Boolean(userIn);

  console.log(isUserLoggedIn);
  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {/* <img>{avatar}</img> */}

      <p>
        Hello,
        {userIn.name}
      </p>

      <button type="click" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
};
