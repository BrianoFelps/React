import './Title.css'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    id?: string;
}

function Title1(props: Props){
    return(
        <div className='Título' id={props.id}>
            {props.children}
        </div>
    )
}

export default Title1;