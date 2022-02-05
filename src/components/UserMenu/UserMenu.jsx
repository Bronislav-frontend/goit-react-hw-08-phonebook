import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)
  
  return (
    <>
      <span> Hello, {name} </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
}