import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'

function App() {
 const IsAuth = useSelector(state => state.auth.isLogin) 

  return (
    <Fragment>
      <Header></Header>
      {IsAuth ?  <UserProfile/> : <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
