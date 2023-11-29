import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import UserForm from "./components/UserForm";
import UserListPage from "./components/UserListPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
        <UserListPage />
      </div>
    </Provider>
  );
}

export default App;
