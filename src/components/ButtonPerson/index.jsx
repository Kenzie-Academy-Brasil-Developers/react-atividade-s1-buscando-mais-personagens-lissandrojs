import './style.css'
const Button =({Children,onClick})=>{
   return (
        <div>
            <button className="btn--click" onClick={onClick} children={Children}></button>

        </div>
    )
}

export default Button