import './switch.css'

const toggleMode = () => {
    const html = document.documentElement;
    html.classList.toggle("light")
  }

function Switch(){
    return(
        <div className='switch' onClick={toggleMode}>
            <button>
            </button>
            <span>
            </span>
        </div>
    )
}

export default Switch