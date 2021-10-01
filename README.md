# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

El enpoint `api/:input`, recibe como parametro un numero que representa la suma de la altura de dos jugadores que se quiere buscar. 
* Ejemplo: "http://localhost:3000/api/139"
* Respuesta: retorna un arreglo de arreglos con los nombres de los jugadores que cumplen con la condicion 
   `[
  [
    "Brevin Knight",
    "Nate Robinson"
  ],
  [
    "Nate Robinson",
    "Mike Wilks"
  ]
]`
