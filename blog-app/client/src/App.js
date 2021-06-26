import "./App.css";

import { useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
