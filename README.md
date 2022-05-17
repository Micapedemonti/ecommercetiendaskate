## UFO SKATESHOP
## Tienda de skate

Ufo skateshop es un ecommerce creado a partir del curso de React Js. La funcion de este proyecto es poder visualizar los productos a traves de sus categorias y comprar un producto finalizando con una orden de compra.
## Que necesitas para acceder a mi proyecto:
## Ejecutar en la consola los siguientes comandos:
git clone  https://github.com/Micapedemonti/ecommercetiendaskate
npm install 
npm start

## Tecnologia que use para realizar mi proyecto:
- HTML
- CSS
- JAVASCRIPT
- REACT JS
- BOOTSTRAP
- 
## Mis componentes:
## Navbar
> Es el menu de navegacion donde vamos a enontrar distints tipos de categorias de los productos y podremos acceder al producto segun la categoria que clickeemos a traves de una funcion llamada getCategories.
## ItemCount
> Es el contador en donde podremos agregar o quitar productos de a uno, para esto tenemos dos funciones increment y decrement. 
## ItemList 
>Este componente se encarga de de recorrer los productos, recibirlos mediante props, y ser llamados en el componente ItemListContainer.
## Item
>Este componente nos mostrara a traves de una tarjeta los productos que estan disponible en la pagina recibiendo por props el nombre, la imagen y su precio.
## ItemDetailContainer
> Este componente cumple la funcion de mostrarnos el detalle del producto seleccionado cuando el usuario hace click en el boton ver detalle.
## ItemDetail
> Aqui encontraremos la descripcion del producto elegido por el usuario donde vamos a llamar al contador y podemos añadir cuantos productos haya disponible al carrito.
## CartWidget: 
> Muestra el icon del carrito de compra asi como tambien mostrara cuantos productos tenemos agregados para comprar.
## Cart
>En este componente encontraremos los productos que añadimos al carrito, donde tambien tendremos la posibilidad de eliminar el producto asi como tambien vaciar el carrito o generar la orden de compra.
## Context
>En este componente encontraremos todas las funciones a la que son llamadas en el componente Cart para cumplir sus respectivas funciones.
>clearCart: Vacia el carrito si asi lo deseamos.
>removeItem: Eliminamos el producto que queremos.
>getQuantity: nos muestra la cantidad de productos que tenemos dentro del carrito.
>setTotal: nos indica el total de nuestra compra.
## Formulario
>Aqui encontraremos el formulario de compra donde tendremos que llenar nuestros datos y al darle click en generar orden nos indicara el numero de compra-


![video-to-gif-converter](https://user-images.githubusercontent.com/95888535/168922793-9fcbb211-bc99-416b-9b32-08903caceabe.gif)

