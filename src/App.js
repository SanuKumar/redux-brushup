import { useSelector, useDispatch } from "react-redux";
import { userAction } from "./index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userList);

  return (
    <div>
      Users
      <div>
        <button onClick={() => dispatch(userAction())}>Get Users</button>
      </div>
      <ol>
        {userData.length && userData.map((u) => <li key={u.id}>{u.name}</li>)}
      </ol>
    </div>
  );
}

export default App;
