# Listar nodos: Frontend y Backend con Vite, React, TypeScript, NestJs y Docker Compose

¡Bienvenido a **Listar nodos**! Este repositorio alberga una aplicación full-stack compuesta por un **frontend** construido con **Vite**, **React** y **TypeScript**, y un **backend** construido con **NestJs** y **TypeScript**. Ambos servicios están dockerizados y orquestados usando **Docker Compose**, lo que facilita su despliegue y gestión en diferentes entornos.

## Características

- **Frontend:**
  - Construido con **Vite**, **React** y **TypeScript**.
  - Variables de entorno gestionadas con **dotenv**.
  - Dockerizado para despliegue consistente.
  
- **Backend:**
  - Construido con **NestJs** y **TypeScript**.
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
  - [NestJs](https://nestjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [pnpm](https://pnpm.io/)
  
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

### Clonar el Repositorio

```bash
git clone https://github.com/co-xkar/prueba-emoac.git
cd prueba-emoac
```

### Configurar Variables de Entorno

El proyecto utiliza archivos `.env` para gestionar variables de entorno en el frontend. Las variables ya vienen incluidas.

#### Frontend

**Archivo:** `emoac-nodo-front/.env`

```env
VITE_BACK_URL=http://localhost:3000
VITE_GET_NODOS_PATH=/nodes
VITE_NODE_ENV=development
```

### Construir y Levantar los Servicios

En la raíz del proyecto, ejecuta el siguiente comando para construir las imágenes y levantar los servicios en segundo plano:

```bash
docker-compose up --build -d
```

### Acceder a la Aplicación

- **Frontend:** Abre tu navegador y navega a [http://localhost:80](http://localhost:80). Deberías ver tu aplicación frontend en funcionamiento.
- **Backend:** Accede a [http://localhost:3000](http://localhost:3000).

### Detener y Eliminar los Contenedores

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