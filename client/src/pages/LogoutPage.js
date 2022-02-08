import React, { useContext, useEffect } from "react";

import { LoggedUserContext } from "../App";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentLoggedInUser("null");
    localStorage.removeItem("loggedUserId");
    navigate("/");
  }, []);

  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(LoggedUserContext);

  return <div></div>;
}

export default LogoutPage;
