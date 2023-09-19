import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/amostras');
    }

    return (
        <div>
            <h1>Página dashboard</h1>
            <Link to="/entrar">Login</Link>

            <button onClick={handleClick}>Amostras</button>
        </div>
    );
}