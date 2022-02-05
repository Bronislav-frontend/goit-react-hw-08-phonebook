// import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from '../AppBar/AppBar'
import HomeView from '../../views/HomeView'
import RegisterView from '../../views/RegisterView'
import LoginView from '../../views/LoginView'
import ContactsView from '../../views/ContactsView/ContactsView';

// const HomeView = lazy(() =>
//   import('../../views/HomeView' /* webpackChunkName: "home-view"*/),
// );
// const RegisterView = lazy(() =>
//   import('../../views/RegisterView' /* webpackChunkName: "register-view"*/),
// );
// const LoginView = lazy(() =>
//   import('../../views/LoginView' /* webpackChunkName: "login-view"*/),
// );
// const ContactsView = lazy(() =>
//   import('../../views/ContactsView' /* webpackChunkName: "contacts-view"*/),
// );

export default function App() {

  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
}
