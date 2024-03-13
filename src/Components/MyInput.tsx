// Modo de chamar o css no React
import "./MyInput.css"

// As interfaces funcionam como objetos, de modo a receber atributos com valores, mas 
// dessa vez não específicos, para dinamizar a tag desejada chamando-a na função da tag.
interface Props{
    // A interrogação tira a obrigatoriedade do atributo ser definido, que é o padrão.
    BgColor?: string;
    placeholder?: string;
    type: string;
}

// O atributo props é usado para chamar a interface Props, de modo a não ter que 
// chamá-la referenciando, mas diretamente pelo atributo definido.
function MyInput(props: Props) {
    return(
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        style={{background:`${props.BgColor}`}}
        />
    )
}

// O nome de exportação é definido, para posteriormente chamar a tag/function.
export default MyInput