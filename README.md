# ColorFly Studio

ColorFly Studio es un generador de paletas aleatorias en formatos HEX y RGBA. Permite elegir una paleta de 6, 8 o 9 colores y bloquear los colores elegidos para conservarlos mientras se generan otros. Cada tarjeta muestra el código del formato seleccionado y el valor HSL del color.

## Tecnologías y decisiones técnicas

ColorFly Studio está desarrollado con HTML, CSS y JavaScript, sin frameworks. HTML organiza los controles y el espacio donde se muestran las tarjetas; CSS define el diseño, la distribución flexible y la animación de entrada. JavaScript genera cada color en HSL, calcula su valor HEX y obtiene RGBA a partir de ese HEX. También gestiona los controles y el bloqueo: al generar una paleta nueva, conserva los colores bloqueados y reemplaza los demás.

## Uso

1. Abrir la [demo publicada](https://226563.github.io/Generador-de-paletas/).
2. Elegir una cantidad: 6, 8 o 9 colores.
3. Elegir el formato del código: HEX o RGBA. Las tarjetas también muestran HSL.
4. Pulsar Generar paleta.
5. Pulsar Bloquear en los colores que quieras conservar y volver a generar para cambiar los demás.

## Captura de la aplicación

![ColorFly Studio mostrando una paleta en formato RGBA y controles para bloquear colores](./capturas/Captura%20de%20pantalla%202026-10-12%20192512.png)
