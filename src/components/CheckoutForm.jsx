import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

const CheckoutForm =  ()=>{
    return(
        <Form method = "POST" className="flex flex-col gap-y-4">
            <h4 className="font-medium text-xl"> Shipping Information</h4>
            <FormInput label = "first name" name = "name" type = "text"></FormInput>
            <FormInput label = 'address' name = "address" type = "text"></FormInput>
            <div className="my-4">
                <SubmitBtn text = "Place your order"/>
            </div>
        </Form>
    );
}
export default CheckoutForm;