import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const isLoading = useNavigation().state == "loading";
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <section className=" align-element py-20">
          <Outlet></Outlet>
        </section>
      )}
    </>
  );
};

export default HomeLayout;
