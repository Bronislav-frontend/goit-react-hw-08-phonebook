import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)
  
  return (
    <>
      <span>
        {' '}
        Greetings, 
        <span className={s.greetings}> {name}</span>{' '}
      </span>
      <button 
      type="button" 
      onClick={() => dispatch(authOperations.logOut())}
      className = {s.button}
      >
        Log out
      </button>
    </>
  );
}