import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = () => {
  const IsAuth = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch()

  const logoutHandler = event => {
    event.preventDefault();
    dispatch(authActions.logOut());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {IsAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>}
    </header>
  );
};

export default Header;
