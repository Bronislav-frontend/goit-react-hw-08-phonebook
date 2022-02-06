import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  restricted = false,
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const shouldRedirect = isLoggedIn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}