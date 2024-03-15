import './Form.css'
import Button from './Button';
import MyInput from './MyInput';

interface Props {
    Action?: string;
    onSubmit: () => void;
}

function PreForm(props: Props){
    return(
        <div className='Form'>
            <MyInput type='Text' placeholder='Olá mundo! (Digite seu nome)'></MyInput> 
            <br/>
            <Button onClick={props.onSubmit}>
                <h1>Adicionar item</h1>
            </Button>
        </div>
    )
}

export default PreForm;