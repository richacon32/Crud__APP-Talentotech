# Índice

1. [Introducción](#introducción)
2. [Estructura de la CRUD](#estructura-de-la-crud)
3. [Visualización](#visualización)
4. [Tecnologías Empleadas](#tecnologías-empleadas)
5. [Despliegue](#despliegue)

## Introducción

En el desarrollo de aplicaciones web, una CRUD (Create, Read, Update, Delete) APP es fundamental para la gestión eficiente de datos. Este proyecto se centra en una aplicación CRUD destinada al registro de usuarios, proporcionando una herramienta esencial para almacenar, visualizar, y gestionar información relevante como el nombre, la fecha, y la hora de registro.

La importancia de esta aplicación radica en su capacidad para manejar datos de manera estructurada y segura, permitiendo a los administradores y usuarios finales acceder a información actualizada y precisa en tiempo real. Mediante la implementación de esta CRUD APP, se facilita el control de usuarios registrados, lo cual es crucial para cualquier sistema que requiera autenticación y seguimiento de actividades, desde plataformas de aprendizaje en línea hasta sistemas de reservas y gestión de eventos.

## Estructura de la CRUD

La aplicación de Registro de Ingreso de Personal sigue una estructura clara y organizada para gestionar eficientemente los registros de usuarios. A continuación se describe cada componente de la estructura de la CRUD:

**Formulario de Entrada:**

**Nombre Completo:** Un campo de texto donde el usuario ingresa su nombre completo.
**Fecha:** Un campo que muestra la fecha actual, permitiendo seleccionar o modificar la fecha de registro.
**Hora:** Un campo que muestra la hora actual, permitiendo seleccionar o modificar la hora de registro.
**Botón "Agregar":** Un botón verde que permite agregar el registro ingresado a la tabla de registros.
**Tabla de Registros:** Tabla donde se encuentra la información de los usuarios registrados.
**Encabezados de la Tabla:**
**Nombre Completo:** Muestra el nombre completo del usuario registrado.
**Fecha:** Muestra la fecha del registro.
**Hora:** Muestra la hora del registro.
**Acciones:** Contiene botones para realizar acciones sobre cada registro (editar, eliminar).
**Botón "Eliminar Registros del Día"**: Un botón que permite eliminar todos los registros del día actual, facilitando la gestión y limpieza de la base de datos de registros diarios.
**Mensaje de Estado:** Un mensaje en rojo que indica cuando no hay registros del día, proporcionando feedback visual al usuario.

Esta estructura asegura que la aplicación sea intuitiva y fácil de usar, permitiendo a los usuarios ingresar, visualizar y gestionar los registros de ingreso de personal de manera eficiente.

## Visualización

La aplicación de Registro de Ingreso de Personal ha sido diseñada con un enfoque en la usabilidad y la estética, asegurando una experiencia de usuario agradable y eficiente. A continuación se describen los principales aspectos visuales de la aplicación:

**Diseño Responsivo**
La interfaz de la aplicación es completamente responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos. Esto garantiza que los usuarios puedan acceder y utilizar la aplicación desde cualquier dispositivo, ya sea un ordenador de escritorio, una tableta o un teléfono móvil, sin comprometer la funcionalidad ni la apariencia.

**Paleta de Colores**
La aplicación utiliza una paleta de colores suaves y profesionales que incluyen:

* Blanco para el fondo, proporcionando una base limpia y clara.
* Verde Menta para el botón "Agregar", resaltando la acción principal de la interfaz.
* Azul Claro para los encabezados y filas de la tabla, diferenciando claramente las secciones de datos.
* Gris Claro para el botón "Eliminar Registros del Día", destacando su función sin llamar demasiado la atención.
* Rojo para los mensajes de estado, como "No hay registros del día", para alertar al usuario de manera efectiva.

**Ubicación de Imágenes**
Una imagen ilustrativa se encuentra en la parte superior izquierda de la aplicación, añadiendo un elemento visual atractivo sin distraer del contenido principal.

**Título**
El título principal "REGISTRO DE INGRESO DE PERSONAL" está ubicado en la parte superior central, con una fuente grande y en negrita, asegurando que sea fácilmente visible y comprensible.

**Tablas y Texto**
* Formulario de Entrada: Los campos de entrada para "Nombre Completo", "Fecha" y "Hora" están alineados horizontalmente, con el botón "Agregar" a la derecha, creando un flujo de entrada de datos intuitivo.
* Tabla de Registros: La tabla de registros está organizada con columnas claramente etiquetadas para "Nombre Completo", "Fecha", "Hora" y "Acciones". Cada registro se presenta en una fila, con botones de acción accesibles.
* Botón de Eliminación: El botón "Eliminar Registros del Día" está situado debajo de la tabla, ofreciendo una opción de gestión clara y accesible.
* Mensaje de Estado: El mensaje en rojo "No hay registros del día" se encuentra justo debajo de la tabla, proporcionando feedback inmediato sobre la ausencia de registros.

**Tipografía**
La aplicación utiliza una tipografía sans-serif moderna y legible, adecuada para interfaces de usuario y lectura en pantalla. El título y los encabezados de la tabla están en negrita para mayor énfasis, mientras que el texto del cuerpo y los campos de entrada mantienen una apariencia clara y profesional.

Esta combinación de diseño responsivo, colores armónicos, disposición lógica de imágenes, títulos y tablas, junto con una tipografía legible, crea una interfaz de usuario que es tanto funcional como estéticamente agradable.

A continuación se presenta una imagen de la representación de la CRUD-APP:

![image](https://github.com/user-attachments/assets/6b4e8b30-dcc9-4f8c-9b3c-dded679842ed)


## Tecnologías Empleadas

La aplicación de Registro de Ingreso de Personal ha sido desarrollada utilizando una combinación de tecnologías y herramientas modernas para garantizar una interfaz de usuario atractiva y funcional, así como un desarrollo eficiente. A continuación se detallan las principales tecnologías y herramientas empleadas:

**HTML5:** Utilizado para la estructuración del contenido, buscando el estándar que incorpora las últimas tendencias de maquetación. Proporciona la base semántica para todos los elementos de la aplicación. ![HTML5](https://img.shields.io/badge/HTML5-000000?style=flat-square&logo=html5&logoColor=E34F26)


**CSS3:** Utilizado para agregar estilos y diseño visual a la aplicación. Con CSS3 se puede hacer que la aplicación se vea bien en cualquier dispositivo, ya sea una computadora, tableta o teléfono móvil, ajustando automáticamente el diseño para diferentes tamaños de pantalla. ![CSS3](https://img.shields.io/badge/CSS3-000000?style=flat-square&logo=css3&logoColor=1572B6)


**JavaScript:** Añadido para la interactividad y funcionalidades dinámicas que facilitan la interacción del usuario. JavaScript se utiliza para manejar eventos como la adición de registros, la eliminación de registros y la actualización dinámica de la tabla. ![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=flat-square&logo=javascript&logoColor=F7DF1E)


Herramientas de Desarrollo:

**Visual Studio Code:** El entorno de desarrollo integrado (IDE) utilizado para escribir y organizar el código. ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-000000?style=flat-square&logo=visual-studio-code&logoColor=007ACC)

**Git:** Utilizado para el control de versiones, permitiendo un seguimiento preciso de los cambios en el código y facilitando la colaboración entre desarrolladores. ![Git](https://img.shields.io/badge/Git-000000?style=flat-square&logo=git&logoColor=F05032)


Estas tecnologías y herramientas han sido seleccionadas por su capacidad para crear aplicaciones web modernas, eficientes y de fácil mantenimiento, garantizando una experiencia de usuario óptima y una base sólida para futuras mejoras y escalabilidad.

## Despliegue

La CRUD APP es una aplicación web que permite realizar operaciones básicas de creación, lectura, actualización y eliminación de datos. Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

Clonar el Repositorio: Descarga una copia local del repositorio usando git clone <URL del repositorio>.

Instalar Dependencias: Navega al directorio del proyecto y ejecuta npm install (o el comando equivalente si usas otro gestor de paquetes) para instalar las dependencias necesarias.

Configuración del Entorno: Asegúrate de tener un archivo .env configurado con las variables de entorno requeridas, como las credenciales de la base de datos y otras configuraciones específicas.

Compilación: Si estás usando herramientas de construcción, ejecuta npm run build para compilar el código fuente y generar los archivos listos para producción.

Despliegue en un Servidor: Sube los archivos generados al servidor de tu elección. Puedes usar servicios como Heroku, Vercel, Netlify, o cualquier otro proveedor que soporte la tecnología de tu aplicación.

Iniciar el Servidor: Configura el servidor para que apunte al archivo de inicio de tu aplicación. Asegúrate de que todos los servicios y puertos necesarios estén configurados y funcionando correctamente.

Verificación: Accede a la URL de tu aplicación desplegada y verifica que todas las funcionalidades (crear, leer, actualizar, eliminar) estén operativas.
