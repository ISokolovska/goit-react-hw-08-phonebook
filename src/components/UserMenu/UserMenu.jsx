import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;
  return (
    <div>
      {/* <img>{avatar}</img> */}
      <p>
        Hello,
        {/* {name} */}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
