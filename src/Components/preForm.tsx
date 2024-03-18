import './Form.css'
import Button from './Button';
import MyInput from './MyInput';
import { ChangeEvent, ReactNode } from 'react';

interface Props {
    Action?: string;

    onSubmit: () => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;

    inputValue: string;

    children?: ReactNode;
}

function PreForm(props: Props){
    return(
        <div className='Form'>

            <MyInput
            type='Text'
            placeholder='Olá mundo! (Digite seu nome)'
            onChange={props.onInputChange}
            value={props.inputValue}
            >
            </MyInput>

            <br/>

            <Button onClick={props.onSubmit}>
                <h1>Adicionar item</h1>
            </Button>

        </div>
    )
}

export default PreForm;