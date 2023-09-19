import { useEffect, useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let nome = prompt('Seu nome');
        if(nome == 'leandro') {
            alert(`Seu nome é ${nome}`);
        } else {
            alert( `seu nome não é ${nome}`);
        }
    }, []);

    const handleLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (

        <div>
            <form>

                <label>
                    <span>Email:</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <button onClick={handleLogin}>
                    Entrar
                </button>

            </form>
        </div>

    );
}