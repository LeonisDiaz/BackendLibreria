# ParcialCrudLibreria

API REST para gestionar el inventario de libros de una libreria, construida con Node.js, Express y MongoDB (Mongoose).

## Caracteristicas

- CRUD completo de libros.
- Validacion basica de campos con `express-validator`.
- Persistencia en MongoDB Atlas mediante Mongoose.
- Respuestas JSON con mensajes de exito y error.

## Tecnologias

- Node.js
- Express
- MongoDB + Mongoose
- express-validator
- Nodemon

## Estructura del proyecto

```text
BackendLibreria/
|- controllers/
|- database/
|- middlewares/
|- model/
|- routes/
|- index.js
|- package.json
|- .env
```

## Requisitos previos

- Node.js 18 o superior (recomendado).
- Una cadena de conexion valida a MongoDB Atlas.

## Instalacion

1. Instala dependencias:

```bash
npm install
```

2. Crea un archivo `.env` en la raiz del proyecto con:

```env
PORT=3000
db_CONN=mongodb+srv://usuario:password@cluster.mongodb.net/nombre_db
```

## Ejecucion

Modo desarrollo:

```bash
npm run dev
```

Modo inicio (usa nodemon segun `package.json`):

```bash
npm start
```

Si todo va bien, veras en consola:

- `Connected to MongoDB Atlas`
- `Server is running on port <PORT>`

## Endpoints

Base URL local:

`http://localhost:3000`

### 1) Obtener todos los libros

- Metodo: `GET`
- Ruta: `/lists`

### 2) Crear un libro

- Metodo: `POST`
- Ruta: `/lists`
- Body JSON minimo:

```json
{
  "titulo": "Cien anos de soledad",
  "autor": "Gabriel Garcia Marquez",
  "apublicacion": "1967",
  "editorial": "Sudamericana",
  "categoria": "Novela",
  "sede": "Central"
}
```

### 3) Obtener detalle de un libro

- Metodo: `GET`
- Ruta: `/lists/:id`

### 4) Actualizar un libro

- Metodo: `PUT`
- Ruta: `/lists/:id`
- Body JSON con los campos a actualizar.

### 5) Eliminar un libro

- Metodo: `DELETE`
- Ruta: `/lists/:id`

## Modelo de datos (Libro)

Campos principales:

- `titulo` (string, obligatorio, unico)
- `autor` (string, obligatorio)
- `apublicacion` (string, opcional)
- `editorial` (string, opcional)
- `categoria` (string, opcional)
- `sede` (string, opcional)
- `createdAt` y `updatedAt` (timestamps automáticos)

## Notas

- En el `POST /lists` se valida que `titulo` y `autor` no esten vacios.
- Si intentas crear o actualizar con un `titulo` ya existente, la API responde con error.
- El proyecto ignora `node_modules` y `.env` en Git mediante `.gitignore`.
