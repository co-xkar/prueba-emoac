# Mi Proyecto: Frontend y Backend con Vite, React, TypeScript y Docker Compose

¡Bienvenido a **Mi Proyecto**! Este repositorio alberga una aplicación full-stack compuesta por un **frontend** construido con **Vite**, **React** y **TypeScript**, y un **backend** (especificaciones del backend pueden variar). Ambos servicios están dockerizados y orquestados usando **Docker Compose**, lo que facilita su despliegue y gestión en diferentes entornos.

## Índice

1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Prerrequisitos](#prerrequisitos)
5. [Instalación y Configuración](#instalación-y-configuración)
   - [1. Clonar el Repositorio](#1-clonar-el-repositorio)
6. [Uso de Docker Compose](#uso-de-docker-compose)
   - [1. Construir y Levantar los Servicios](#1-construir-y-levantar-los-servicios)
   - [2. Acceder a la Aplicación](#2-acceder-a-la-aplicación)
   - [3. Detener y Eliminar los Contenedores](#3-detener-y-eliminar-los-contenedores)
7. [Desarrollo Local](#desarrollo-local)
8. [Solución de Problemas](#solución-de-problemas)
9. [Buenas Prácticas](#buenas-prácticas)
10. [Contribuciones](#contribuciones)
11. [Licencia](#licencia)
12. [Contacto](#contacto)

---

## Características

- **Frontend:**
  - Construido con **Vite**, **React** y **TypeScript**.
  - Variables de entorno gestionadas con **dotenv**.
  - Dockerizado para despliegue consistente.
  
- **Backend:**
  - Construido con NestJs.
  - Dockerizado para despliegue consistente.
  
- **Orquestación:**
  - **Docker Compose** para gestionar múltiples contenedores.
  - Redes personalizadas para comunicación interna entre servicios.
  
## Tecnologías Utilizadas

- **Frontend:**
  - [Vite](https://vitejs.dev/)
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [pnpm](https://pnpm.io/)
  
- **Backend:**
  - [pnpm](https://pnpm.io/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [NestJs](https://nestjs.com/)
  
- **Contenedores:**
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)
  - [Nginx](https://nginx.org/)
  
## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/co-xkar/prueba-emoac.git
cd prueba-emoac
```

### 2. Configurar Variables de Entorno

El proyecto utiliza archivos `.env` para gestionar variables de entorno en el frontend. Las variables ya vienen incluidas.

#### Frontend

**Archivo:** `emoac-nodo-front/.env`

```env
VITE_BACK_URL=http://localhost:3000
VITE_GET_NODOS_PATH=/nodes
VITE_NODE_ENV=development
```

### 1. Construir y Levantar los Servicios

En la raíz del proyecto, ejecuta el siguiente comando para construir las imágenes y levantar los servicios en segundo plano:

```bash
docker-compose up --build -d
```

**Explicación de las Opciones:**

- `--build`: Fuerza la reconstrucción de las imágenes, asegurando que cualquier cambio en el código o en el `Dockerfile` se refleje en los contenedores.
- `-d`: Ejecuta los contenedores en segundo plano (modo "detached").

### 2. Acceder a la Aplicación

- **Frontend:** Abre tu navegador y navega a [http://localhost:80](http://localhost:80). Deberías ver tu aplicación frontend en funcionamiento.
- **Backend:** Accede a [http://localhost:3000](http://localhost:3000).

### 3. Detener y Eliminar los Contenedores

Para detener los servicios y eliminar los contenedores, redes y volúmenes creados por Docker Compose, ejecuta:

```bash
docker-compose down
```
---

## Contacto

Si tienes alguna pregunta o necesitas más información, no dudes en contactarme:

- **Nombre:** Carlos F. Osorio Calmels
- **Correo Electrónico:** carlosf.osorioc@gmail.com
- **LinkedIn:** [Tu Perfil de LinkedIn](https://www.linkedin.com/in/carlosfosorioc)

---