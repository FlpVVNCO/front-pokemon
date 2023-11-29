# Proyecto PokeApi para Defontana

Proyecto desarrollado con React + Tailwind + NextUI + FramerMotion.
El objetivo era realizar un buscador de pokemones con autocompletado, que también paginara los pokemones y mostrara los detalles de cada uno.
La aplicación funciona de la siguente manera: 

1. Entra al link: [Visitar la aplicación desplegada](https://frontend-pokemon-flp.vercel.app/)
2. Navega por las páginas.
3. Pincha una tarjeta para ver los detalles del pokemon.
4. Utiliza el buscador para generar una busqueda por un pokemon en especifíco, cuando escribas se desplegara el autocompletado.

La aplicación es responsive en todos los dispositivos.

## Comenzando a desplegar 🚀

Estas instrucciones te ayudarán a clonar y configurar el proyecto en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Necesitarás una cuenta de [GitHub](https://github.com/) para clonar el repositorio.

### Instalación 🔧

1. Clona este repositorio a tu máquina local:

   ```
    git clone https://github.com/FlpVVNCO/front-pokemon/
   ```
   
2. Ve al directorio del proyecto:

   ```
    cd front-pokemon
   ```
3. Instala las dependencias utilizando npm:

   ```
    npm install
   ```

4. Inicia el servidor de desarrollo:

   ```
    npm run dev
   ```

_El proyecto se ejecutará en `http://localhost:5173`. Puedes acceder a él desde tu navegador._

## Dependencias y Tecnologías

A continuación, se enumeran las principales dependencias utilizadas en este proyecto:

- [React.js](https://react.dev/): React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

- [TailwindCSS](https://tailwindcss.com/): Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.

- [NextUI](https://nextui.org/): Un completo sistema de autenticación para aplicaciones web.

- [FramerMotion](https://www.framer.com/): Framer Motion es un marco de trabajo de código abierto que proporciona funciones destinadas a crear elementos y componentes con eventos complejos, así como animaciones, transiciones y otros efectos relacionados.

- [React Icons](https://react-icons.github.io/react-icons/): Una biblioteca que proporciona iconos populares de fuentes como Font Awesome y más.

- [Vite](https://es.vitejs.dev/): Vite es un servidor de desarrollo local con plantillas de react.

## Historias de usuario

- Historia de Usuario 1: Explorar y Filtrar Pokemons<br>
Como usuario interesado en explorar la lista completa de Pokémons, quiero poder ver una tabla paginada que se conecte a la API de Pokémons (https://pokeapi.co/api/v2/pokemon) y me permita filtrar Pokémons por su nombre. Además, deseo que el filtro de texto tenga autocompletado para facilitar la búsqueda.

- Historia de Usuario 2: Detalles de Pokémon Seleccionado<br>
Como usuario interesado en obtener información detallada sobre un Pokémon, quiero poder seleccionar un Pokémon de la tabla y ver sus detalles en un contenedor a la derecha.

- Historia de Usuario 3: Versión Mobile del Sitio (Responsive)<br>
Como usuario que accede desde dispositivos móviles, quiero poder explorar el sitio de manera cómoda y amigable en mi dispositivo, por lo que necesito que el sitio sea responsive.

- Historia de Usuario 4: Tabla Resumen de Pokémon por Letra<br>
Como usuario, quiero poder ver una tabla resumen que indique la cantidad de Pokémons que comienzan con cada letra del abecedario, para obtener una visión general de la distribución alfabética.

## Comentarios

- Alguna duda/error que se presente pueden contactarme a mi correo: felipevivanco05@gmail.com

