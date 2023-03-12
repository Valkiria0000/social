import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let renderEntrireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
    />
  );
};
renderEntrireTree(store.getState());
store.subscribe(renderEntrireTree);
