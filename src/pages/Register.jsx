import {SubmitBtn,FormInput} from '../components';
import {Form, Link} from 'react-router-dom';

const Register = ()=>{
    return (
        <section>
            <FormInput label = 'username' name = 'usename' type = 'text' defaultValue='' ></FormInput>
            <FormInput label = 'email' name = 'email'  type = 'text' defaultValue=''></FormInput>
            <div className=' mt-4'>
            <SubmitBtn text = 'REGISTER'></SubmitBtn>
            </div>
            <p>
                Already a member??
                <Link to ='/login'>login</Link>
            </p>
        </section>
    );
}

export default Register;