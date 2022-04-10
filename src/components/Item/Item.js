import './Item.css';


const Item =({name, img, Price}) => {

    return(
        <section className='seccionProducts'>

         <picture>
             <img src ={img} alt ={name}/>
         </picture>
         <h3>{name}</h3>
         <p>{Price} </p>
         <button>Ver detalle</button>
        </section>
    )
}
export default Item