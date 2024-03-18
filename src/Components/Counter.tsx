import './Counter.css';

interface Props {
    countValue: number;
}

function Counter (props: Props){
    return(
        <div className='Counter'>
            <p>Total de itens: {props.countValue}</p>
        </div>
    )
}

export default Counter;