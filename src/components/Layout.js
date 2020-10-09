import React, { Children } from "react";
import Header from "./Header";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      {Children}
    </React.Fragment>
  );
}
