import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props: { Component: any }) => {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    let logedIn = localStorage.getItem("name");
    if (!logedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
