import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {useSelector} from 'react-redux';


function App() {
  // pulls the isAuthenticated state out of the state object 
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
    <Header />
    {!isAuthenticated && <Auth />}
    {isAuthenticated && <UserProfile />}
    <Counter />
    </Fragment>
  );
}

export default App;
