import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import AuthReducer from "./store/reducers/Auth";
import UsersReducer from "./store/reducers/AllUsers";
import NavContainer from "./navigation/NavContainer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
});

const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/open-sans-regular.ttf"),
    "open-sans-bold": require("./assets/fonts/open-sans-bold.ttf"),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <>
      {fontLoaded} ?
      <Provider store={store}>
        <NavContainer />
      </Provider> :
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
