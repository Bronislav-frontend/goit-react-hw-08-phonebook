import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { authSelectors } from "../../redux/auth";

export default function PrivateRoute({
    children, 
    redirectTo = "/contacts",
    ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}