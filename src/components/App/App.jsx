import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from '../../redux/auth';

import AppBar from '../AppBar/AppBar';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';
import Loader from '../Loader/Loader';

const HomeView = lazy(() => import('../../views/HomeView/HomeView'));
const RegisterView = lazy(() =>
  import('../../views/RegisterView/RegisterView'),
);
const LoginView = lazy(() => import('../../views/LoginView/LoginView'));
const ContactsView = lazy(() =>
  import('../../views/ContactsView/ContactsView'),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}
