import { useNavigation } from "react-router-dom"
const SubmitBtn = ({text})=>{
    const isLoading = useNavigation().state === 'submitting';
    return (
        <button disabled = {isLoading}>
            {isLoading?(
                <>
                <span className='loading loading-spinner'></span>
                sending...
                </>
            ):(
                text||'submit'
            )}
        </button>
    );
}

export default SubmitBtn;