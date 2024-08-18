"use client"
import React from "react";
import Products from "./Products";
import { Provider } from "react-redux";
import store from "./context/store";
import Navbar from "./pages/navBar";


export default function Home() {

  return (
      <Provider store={store}>
    
      <main className="flex min-h-screen flex-col  items-center justify-between ">
        <Products />
      </main>
      </Provider>
  );
}
