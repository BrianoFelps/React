// Modo de chamar o css no React
import { ChangeEvent, useState } from "react";
import "./MyInput.css"

// As interfaces funcionam como objetos, de modo a receber atributos com valores, mas 
// dessa vez não específicos, para dinamizar a tag desejada chamando-a na função da tag.
interface Props{
    // A interrogação tira a obrigatoriedade do atributo ser definido, que é o padrão.
    type: string;

    value?: string;

    BgColor?: string;

    placeholder?: string;

    // identifica se o input recebeu alterações e depois guarda no newItem
    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}

// O atributo props é usado para chamar a interface Props, de modo a não ter que 
// chamá-la referenciando, mas diretamente pelo atributo definido.
function MyInput(props: Props) {
    return(
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        style={{background:`${props.BgColor}`}}
        onChange={props.onChange}
        value={props.value}
        />
    )
}

// O nome de exportação é definido, para posteriormente chamar a tag/function.
export default MyInput