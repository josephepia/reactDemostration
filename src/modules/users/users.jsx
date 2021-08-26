import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { signUp } from "../../state/slices/auth/auth.slice";


const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])

    const clickMe = ()=>{
        dispatch(signUp({
            "email": "emailone@gmail.com",
            "password": "12345678",
            "username": "emailone"
        }))
    }

    return (<>
        <button onClick={clickMe}>clickme</button>
        <h4>componente de users</h4>
    </>)
}

export default Users;