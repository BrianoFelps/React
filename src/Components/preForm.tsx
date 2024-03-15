import './Form.css'
import Button from './Button';
import MyInput from './MyInput';

interface Props {
    Action: string;
}

const message = () => {
    const text = 'oi';
    alert(text);
}

function PreForm(props: Props){
    return(
        <form action={props.Action}>
            <MyInput type='Text' placeholder='Olá mundo! (Digite seu nome)'></MyInput> <br />
            <Button onClick = {message}>
                <h1>Ok</h1>
            </Button>
        </form>
    )
}

export default PreForm;