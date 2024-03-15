import './Title.css'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function Title1(props: Props){
    return(
        <div className='Título'>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Title1;