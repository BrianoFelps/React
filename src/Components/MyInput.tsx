import "./MyInput.css"

interface Props{
    BgColor?: string;
    placeholder?: string;
    type: string;
}


function MyInput(props: Props) {
    return(
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        style={{background:`${props.BgColor}`}}
        />
    )
}

export default MyInput