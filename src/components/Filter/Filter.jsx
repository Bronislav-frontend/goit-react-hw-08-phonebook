import { useSelector, useDispatch } from 'react-redux';
import {getFilter} from '../../redux/contacts/contacts-selectors'
import {filter} from '../../redux/contacts/contacts-actions'
import s from './Filter.module.css'


export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(filter(e.target.value))}
      />
    </label>
  );}