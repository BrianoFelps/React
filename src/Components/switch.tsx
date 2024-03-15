import './switch.css'

interface Props {
    onClick: () => void;
}

function Switch(props: Props){
    return(
        <div className='switch' onClick={props.onClick}>
            <button>
            </button>
            <span>
            </span>
        </div>
    )
}

export default Switch