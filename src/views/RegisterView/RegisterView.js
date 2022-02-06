import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css'

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setPassword('');
  };

  return (
    <div className={s.section}>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button type="submit" className={s.button}>Зарегистрироваться</button>
      </form>
    </div>
  );
}
