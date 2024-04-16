# Injección de dependecias en TS

## Introducción

Este ejercicio tiene como objetivo practicar el concepto de inyección de dependencias en TypeScript. La inyección de dependencias es una técnica de diseño de software en la que las dependencias de un objeto se pasan como argumentos externos en lugar de ser creadas internamente. Esto permite una mayor flexibilidad y facilita la creación de pruebas unitarias y el intercambio de implementaciones.

## Descripción de ejercicio

En este ejercicio, se proporcionan varias clases que representan diferentes aspectos de un sistema de gestión de libros. Las clases incluyen:

- Book: Representa un libro con un título.
- FormatBook: Representa un tipo de formato del libro.
- Paper: Representa el formatos de libro en papel.
- Electronic: Representa el formato del libro en digital.
- ReadBookFormat: Representa un libro para leer, que incluye un formato de libro y un número de páginas.
- Ebook: Representa un libro electrónico.
- Parchment: Representa un libro en pergamino.

Recuerda que solo se proporciona la estructura de las clases y que deberás completar la implementación de las clases para que el programa funcione correctamente.

## Objetivo

La tarea consiste en completar la implementación de los diferentes tipos de formato que nos podemos encontrar de libros.

A través de este ejercicio podemos revisar como deberemos hacer la injección de las dependecias necessarias para que nuestra lógica programatica funcione.

## Introducciones de funcionamiento

### Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:

```bash
pnpm install
```

### Ejecución

Para ejecutar el proyecto, ejecute el siguiente comando:

```bash
node app.js
```

