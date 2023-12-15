import { SubmitBtn, FormInput } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className=" h-screen grid place-items-center">
      <Form
        onSubmit={() => console.log("register submit")}
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-3"
      >
        <h4 className="text-center text-3xl font-bold">REGISTER</h4>
        <FormInput
          label="username"
          name="username"
          type="text"
          defaultValue=""
        ></FormInput>
        <FormInput
          label="email"
          name="email"
          type="text"
          defaultValue=""
        ></FormInput>
        <FormInput label="password" name="password" type="password"></FormInput>
        <div className=" mt-4">
          <SubmitBtn text="REGISTER"></SubmitBtn>
        </div>
        <p>
          Already a member??
          <Link to="/login" className=" ml-2 link link-hover link-primary">
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
