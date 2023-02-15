# Habilitar/Deshabilitar Controles en Formularios Reactivos de Angular

Esta es una aplicación básica de ejemplo con un formulario para mostrar las diferentes posibilidades a la hora de habilitar y deshabilitar controles en los formularios reactivos de Angular. Esta aplicación es usada como base para los ejemplos mostrados en este [video](https://youtu.be/_KKErXkKOcs).

El repositorio esta divido en 3 ramas, master con el estado inicial de la aplicación y las 2 ramas para cada uno de los ejemplos principales mostrados.

## Ramas (Branches)

- [Estado inicial](https://github.com/ako-tech/disabled-in-reactive-forms)
- [Usando valueChanges](https://github.com/ako-tech/disabled-in-reactive-forms/tree/with-valuechanges)
- [Usando Directivas Personalizadas](https://github.com/ako-tech/disabled-in-reactive-forms/tree/with-directives)

## Observaciones

Esta aplicación está única y exclusivamente creada para mostrar la funcionalidad de habilitación/deshabilitación lo más claramente posible. Debido a esto, partes del código han podido ser simplificadas u omitidas y por tanto no son ni pretenden ser ejemplos de buenas práticas.

## Comandos

El proyecto está realizado sobre la v15.1 de Angular.

Para levantar un servidor de desarrollo usar el comando `ng serve`. Este estará disponible en `http://localhost:4200/`.

Para compilar la aplicación usar el comando `ng build`. Pudiendo usar la opcion `--prod` para compilar la versión de producción. Los archivos de la aplicación estarán disponibles en la carpeta `dist/`.
