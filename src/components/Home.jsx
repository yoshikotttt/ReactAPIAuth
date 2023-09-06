// eslint-disable-next-line no-unused-vars
import React from "react";
import ProtectedRouteTest from "./ProtectedRouteTest";
import Logout from "./Logout";

const Home = () => {
  return (
    <>
    
      <div>Home</div>
      <ProtectedRouteTest/>
      <br />
      <br />
      <Logout/>
    </>
  );
};

export default Home;
