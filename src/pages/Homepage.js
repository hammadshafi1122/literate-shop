import React, { useEffect } from "react";
import { Header } from "components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      saja
    </>
  );
};

export { Homepage };
