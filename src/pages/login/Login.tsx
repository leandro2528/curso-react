import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    }
   

    return (
        <div>
           Página Login

           <button onClick={handleClick}>Dashboard</button>
          
        </div>
    );
}


