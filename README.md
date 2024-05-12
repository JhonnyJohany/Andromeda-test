# ANDROMEDA TEST

## Usuarios

1. Usuario para ingresar a la aplicación:

- username: andromeda password: test

  o

- username: admin password: test

  o

- username: prueba password: 12345

## Carpetas

- **backend:** Directorio del servidor (backend)

- **database:** Directorio Docker de Base de Datos

- **frontend:** Directorio de Angular

## Clonar el Proyecto

git remote add origin https://github.com/JhonnyJohany/Andromeda-test.git

### Base de Datos

1. Navega al directorio del proyecto:

   ```bash
   cd database
   ```

2. Ejecuta el script de construcción:

   ```bash
   ./build.sh
   ```

3. Ejecuta el script para iniciar el contenedor de la base de datos:

   ```bash
   ./run.sh
   ```

**NOTA:**
Es necesario tener docker instalado en el sistema antes de ejecutar estos comandos

## Frontend

### Paso 1: Instalar Node Js v.20.11.1 o superior

https://nodejs.org/en/download

### Paso 2: Instalación del Angular version 16.2.4

```bash
npm install -g @angular/cli@16.2.4
```

## Paso 3: Compilar el proyecto de Angular

1. Navegue hasta la carpeta raíz del proyecto en la terminal:

   ```bash
   cd frontend/andromeda-test
   ```

2. Ejecute el siguiente comando para instalar las dependencias del proyecto de Angular:

- Instalar las librerias que requiere el proyecto:

  ```bash
  npm install
  ```

- Ejecuta el siguiente comando para levantar el proyecto de Angular:

  ```bash
  ng serve
  ```

## Backend

1. Navegue hasta la carpeta raíz del proyecto en la terminal:

   ```bash
   cd backend
   ```

2. Ejecute el siguiente comando para instalar las dependencias del proyecto de nodejs:

- Instalar las librerias que requiere el proyecto:

  ```bash
  npm install
  ```

3. Ejecute el siguiente comando para ejecutar el en modo desarrollo proyecto de nodejs:

   ```bash
    npm run dev
   ```

   o el siguiente en modo produccion

   ```bash
    npm run start
   ```
