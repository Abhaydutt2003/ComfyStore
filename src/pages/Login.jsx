import {FormInput} from '../components';
import {Form,Link} from 'react-router-dom';
import SubmitBtn from '../components/SubmitBtn';
const Login = ()=>{
    return (
        <section>
            <Form>
                <h4>Login</h4>
                <FormInput label = 'email' type = 'email' name = 'identifier' defaultValue='example@example.com'></FormInput>
                <FormInput label = 'Password' type = 'password' name = 'password' defaultValue= 'secret'></FormInput>
                <div>
                    <SubmitBtn text = 'login'></SubmitBtn>
                </div>
                <p>Not a member yet ???
                    <Link to = '/register'>register</Link>
                </p>
            </Form>
        </section>
    );
}

export default Login;