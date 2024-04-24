import { Outlet } from "react-router-dom";
import Heading from "../Heading/Heading";

const Root = () => {
  return (
    <div>
      <Heading></Heading>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
