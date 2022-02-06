import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginView.module.css'

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
   name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setPassword('');
  };

  return (
    <div className={s.section}>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>Sign in</button>
      </form>
    </div>
  );
}
