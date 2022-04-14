const ItemDetail =({id, Price, description, img}) => { 
    return (
      <section>

          <h2>{description}</h2>
          <picture>
              <img src= {img}/>
          </picture>
          <p>Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante. </p>
          <p>${Price}</p>
      </section>
    )
}
export default ItemDetail