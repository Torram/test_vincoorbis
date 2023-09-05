# Prueba Técnica Vinco Orbis

## Liberías utilizadas

- NextJS
- React
- React DOM
- Chart.js
- React-chartjs-2
- Bootstrap

### Información

Proyecto creado con create-next-app. La información visualizada es obtenida de la API [POKE API](https://pokeapi.co). La información es guardada en el localStorage del navegador.

Busqué hacer una interfaz similar a un pokedex de Pókemon para representar la información. La estructura de la página está dividida en 2 partes, la parte izquierda es el buscador, constituido por un campo de búsqueda y una lista de resultados, scrolleable, de tamaño fijo. La parte de la derecha es la relacionada a las colecciones y a la gráfica.

Intenté hacer que toda la página fuera responsive. Procuré que no hubiera errores ni warnings pendientes de corregir.

En cuanto a la estructura de los directorios, busqué acomodarlos de una forma facilmente ubicables.

### Instrucciones

1. Inicialmente la página mostrará espacios en blanco, para empezar a usarla, hay que crear una colección nueva, dando click al boton verde con el signo **+**, esto generará un elemento a la lista de colecciones.
2. Ahora damos click al elemento recién creado, y nos mostrará una nueva sección, en la que se muestra la lista de pokemons de la colección actual.
3. Ya que tenemos abierta la colección, podemos buscar un pokemon por nombre, procurando que esté bien escrito. Los resultados mostrarán todas las variantes del pokemon buscado.
4. Cada ficha de resultados de la búsqueda, tiene un campo para escribir la cantidad que queremos agregar, junto al botón para agregar el pokemon a la colección. Debemos colocar un número válido.
5. Los pokemons agregados a la colección, aparecen en la lista. Podemos editar la cantidad de cada pokemon en la lista. Si reducimos la cantidad a menos de **1** el pokemon debe desaparecer de la colección.
6. En la parte superior podemos ver un botón con una flecha, que nos permite regresar a la lista de colecciones, y un botón rojo con una **X** que nos permite eliminar la colección completa.
7. Si volvemos a la lista de colecciones, en la parte inferior podemos ver la gráfica que muestra el aumulado de cantidad de pokemons por cada tipo.

### Problemas durante el desarrollo

Inicialmente consideré utilizar el Context de React, o Redux, pero al final me pareció que estaría sobrado, así que pasé las funciones de control del state por props.

Trabajé en un equipo diferente a mi estación de trabajo normal, por lo que tuve algunos problemas para ajustar medidas en la pantalla, pero al final conseguí lo que esperaba.

Tuve problemas con la gráfica, sobre todo con lo de mostrar las leyendas y cantidades de los datos de la gráfica.
