import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, reset } from "./features/countSlice";
import { login, logout } from "./features/authSlice";
export const App = () => {
  const dispatch = useDispatch();
  const { auth, count } = useSelector((state) => state);
  return (
    <>
      <div>
        <h1>count:{count.value}</h1>
        <div>
          <button onClick={() => dispatch(add(1))}>add</button>
          <button onClick={() => dispatch(sub(1))}>sub</button>
          <button onClick={() => dispatch(reset())}>react</button>
        </div>
      </div>
      <div>
        <h1>auth:{auth.loggedIn.toString()}</h1>
        <div>
          <button onClick={() => dispatch(login())}>add</button>
          <button onClick={() => dispatch(logout())}>sub</button>
          <button onClick={() => console.log(count.value)}>console</button>
        </div>
      </div>
    </>
  );
};
export default App;
