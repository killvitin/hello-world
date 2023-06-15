import './style.css';
import {useState} from 'react'

function UserCard({name,imagem}){

const [email, setEmail] = useState ('');
const [texto, setTexto] = useState ('');
const [data, setData] = useState ([]);

const handleClick = () =>{
    setData (prev => [...prev,texto,email])
}

const handleEmail = (event) => setEmail(event.target.value)
const handleTexto = (event) => setTexto(event.target.value)


const handleComent = (event) =>{
    event.preventDefault(
)
    console.log(email,texto)
}

    return(
       <div className='user-card'>
        <img src={imagem}/>
        <strong>{name}</strong>
        <h3>o que voçe achou dessa imagem?</h3>
        <form onSubmit={handleComent}>
            <input
             type='texto'
             placeholder='nome'
             value={email}
             onChange={handleEmail}
             />
            <input 
            type='texto'
            placeholder='comentario'
            value={texto}
            onChange={handleTexto}
            />
            <button onClick={handleClick}>Add</button>
            <div className='comentarios'>
              <ul>
                {
                    data.map((item,index)=>(
                        <li key={index}>
                            {item}</li>
                    ))
                }
              </ul>
            </div>
            
        </form>
       </div>
    )
}
export default UserCard