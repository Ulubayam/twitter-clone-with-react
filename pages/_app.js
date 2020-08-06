import React, { useState, useEffect, useLayoutEffect } from "react";

import "../styles/app.css";
import StoreContext from "../store";

export default function myApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const theme = localStorage.getItem("THEME") || "light";
    setTheme(theme);
  }, []);

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    if (!theme) return;
    const $html = document.querySelector("html");
    $html.classList.remove("light");
    $html.classList.remove("dim");
    $html.classList.remove("dark");
    $html.classList.add(theme);
  }, [theme]);
  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
