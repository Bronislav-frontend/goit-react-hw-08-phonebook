import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu'


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ?  <UserMenu /> : <AuthMenu />} 
    </header>
  );
}