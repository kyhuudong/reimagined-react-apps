import React, { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";
import NotFound from "./common/NotFound";
import Header from "./common/Header";
import productApi from "api/productAPI";
import SignIn from "features/auth/SignIn";
import firebase from 'firebase';

const Photo = React.lazy(() => import("./features/Photo"));


// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);


export default function App() {

  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // user logs out, handle something here
        console.log('User is not logged in');
        return;
      }
      const token = await user.getIdToken();

      try {
        console.log('Logged in user: ', user.displayName);
        console.log("Token : ", token)
      } catch (error) {
        console.log('Failed to login ', error.message);
        // show toast error
      }
    });

    return () => unregisterAuthObserver();
  }, []);



  useEffect(() => {
    const fetchProductList = async () => {
      const params = {
        _page: 1,
        _limit: 10
      }
      const response = await productApi.getAll(params);

      console.log(response);

    }


    fetchProductList();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
