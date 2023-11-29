import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-3"
      >
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <FormInput
          label="email"
          type="email"
          name="identifier"
          defaultValue="example@example.com"
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="secret"
        ></FormInput>
        <div className="mt-4">
          <SubmitBtn text="login"></SubmitBtn>
        </div>
        <p>
          Not a member yet ???
          <Link
            to="/register"
            className=" ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
