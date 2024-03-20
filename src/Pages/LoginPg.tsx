import './LoginPg.css';
import Switch from '../Components/switch';
import Button from '../Components/Button';
import MyInput from '../Components/MyInput';
import Title1 from '../Components/Title';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPg(){
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[loginFail, setLoginFail] = useState(false);

    const navigate = useNavigate();

    // ChangeEvent: ChangeEvent é um tipo genérico fornecido pelo TypeScript que representa um evento de mudança (change) em um elemento de formulário HTML. No caso específico do código fornecido, ChangeEvent<HTMLInputElement> significa que estamos lidando com um evento de mudança em um elemento de input HTML (<input>).
    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setUser(e.target.value);
    }

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const handleOnClick = () =>{
        if (user === 'Briano' && password === "brian") {
            navigate("/CriadorDeListas");
        } else {
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuário ou senha incorreto(s)!");
            setLoginFail(false);
        }
    }

    return(
        <div className='ContainerL'>
            <Title1>
                <h1>
                    Faça seu login
                </h1>
            </Title1>

            <MyInput type='text' placeholder='Nome' onChange={handleUserOnChange} value={loginFail ? "" : user}/>

            <MyInput type='password' placeholder='Senha' onChange={handlePasswordOnChange} value={loginFail ? "" : password}/>

            <Button onClick={handleOnClick}>
                <h1>Login</h1>
            </Button>

            <Switch/>
        </div>
    )
}

export default LoginPg;