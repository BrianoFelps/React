import { ReactNode } from "react";
import "./Button.css";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

function Button(props: Props){
    return(
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button