import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default HomeLayout;
