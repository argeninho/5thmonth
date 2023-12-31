import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PostList from "./components/PostList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Posts App</h1>
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
