import './Item.css';
import {Link} from 'react-router-dom'


const Item =({id, name, img, Price}) => {

    return(
        <article className='CardItem'>
            <header className='HeaderItem'>
            </header>
         <picture>
             <img src ={img} alt ={name}/>
         </picture>
         <section className='seccionProducts'>
         <h3>{name}</h3>
         <p>{Price} </p>
         </section>
    <footer>
        {/* <Link to={`productos/:${id}`}>Ver detalle</Link> */}
         <button>Ver detalle</button>
         </footer>
        </article>
    )
}

export default Item
         
       