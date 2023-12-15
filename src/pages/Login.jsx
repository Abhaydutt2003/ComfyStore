import { useDispatch } from "react-redux";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link,useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/useSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginGuest = async()=>{
    const data = {
      identifier: 'test@test.com',
      password: 'secret',
    };
    try{
      const resp = await customFetch.post('/auth/local',data);
      dispatch(loginUser(resp.data));
      toast.success('welcome guest user');
      navigate('/');
    }catch(error){
      console.log(error);
      toast.error('Please try again');
    }
  }
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
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          name="password"
        ></FormInput>
        <div className="mt-4">
          <SubmitBtn text="login"></SubmitBtn>
        </div>
        <button type = "button" className="btn btn-secondary btn-block" onClick={loginGuest}>Guest?</button>
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
