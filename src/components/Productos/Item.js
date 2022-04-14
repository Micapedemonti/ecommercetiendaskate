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
        <Link to={`detail/${id}`}>Ver detalle</Link> 
        {/* <Counter initial= {0} stock ={10} onAdd={handleOnAdd}/> */}
         </footer>
        </article>
    )
    }

export default Item
         
       