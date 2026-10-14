# ColorFly Studio

ColorFly Studio es un generador de paletas aleatorias en formatos HEX y HSL. Permite elegir una paleta de 6, 8 o 9 colores y bloquear los colores elegidos para conservarlos mientras se generan otros. Las paletas aparecen automáticamente al abrir la página.

## Tecnologías y decisiones técnicas

ColorFly Studio está desarrollado con HTML, CSS y JavaScript, sin frameworks. HTML organiza los controles y el espacio donde se muestran las tarjetas; CSS define el diseño, la distribución y la animación de entrada. JavaScript genera cada color y permite mostrarlo en formato HSL o HEX. También gestiona los controles y el bloqueo: al generar una paleta nueva, conserva los colores bloqueados y reemplaza los demás.

## Uso

1. Abrir la demo publicada: (https://226563.github.io/Generador-de-paletas/).
2. Elegir una cantidad: 6, 8 o 9 colores.
3. Elegir el formato del código: HEX o HSL.
4. Pulsar Generar paleta para cambiar los colores.
5. Pulsar Bloquear en los colores que quieras conservar y volver a generar para cambiar los demás.

## Captura de la aplicación

![ColorFly Studio mostrando una paleta de seis colores en formato HEX, con controles para generar y bloquear colores](./capturas/Captura%20de%20pantalla%202026-10-14%20115457.png)

## Uso de herramientas de IA

Se utilizó GitHub Copilot en VS Code como apoyo durante el desarrollo. La herramienta ayudó a identificar y corregir problemas, mejorar la organización visual y la accesibilidad, implementar y revisar funciones del generador, y redactar esta documentación. Las propuestas se revisaron y se probaron en la aplicación.

Algunos prompts utilizados fueron:

- «Necesito que el footer quede siempre abajo».
- «Ayúdame a hacer el README».
