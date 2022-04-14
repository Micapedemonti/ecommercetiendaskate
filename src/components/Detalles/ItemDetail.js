
const ItemDetail =({id, Price, name, description, img}) => { 
    return (
      <section>

          <h2>{name}</h2>
          <picture>
              <img src= {img}/>
          </picture>
          <p> {description}</p>
          <p>${Price}</p>
          <footer>
          </footer>
      </section>
     
     
    )
}
export default ItemDetail