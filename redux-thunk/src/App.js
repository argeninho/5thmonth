import React from "react";
import { Provider } from "react-redux";
import UserComponent from "./components/UserComponent";
import store from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserComponent />
      </div>
    </Provider>
  );
}

export default App;
