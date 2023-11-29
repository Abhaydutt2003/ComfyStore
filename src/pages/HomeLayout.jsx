import {Outlet } from "react-router-dom";
import {Header} from '../components'

const HomeLayout = () => {
  return (
    <>
    <Header></Header>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <section className=" align-element py-20">
      <Outlet></Outlet>
      </section>
    </>
  );
};

export default HomeLayout;
