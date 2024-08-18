"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./context/store";
import Navbar from "./pages/navBar";
import Footer from "./pages/footer";


export default function ParentProvider({
    children
}) {
    return (
        <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
        </Provider>
    )
}