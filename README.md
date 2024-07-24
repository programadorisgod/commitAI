CommitAI es un proyecto que busca que los desarrolladores dejen de preocuparse tanto por qué mensaje de commit escribir. Las respuestas de CommitAI se basan en Conventional Commits. De esta forma, usamos la IA para ayudarnos: le proporcionamos un contexto de lo que acabamos de realizar y ella se encarga de generar el mensaje de commit por nosotros.

CommitAI utiliza un modelo de Ollama 3 que se ejecuta de manera local, por lo que la velocidad de respuesta depende de los recursos del ordenador en el que se ejecute. La ventaja de esta implementación es que no tiene costo alguno y es accesible para todos.

Ejemplos:

![Screenshot_2024-07-24-17-36-17_1600x900](https://github.com/user-attachments/assets/5b653cd7-ffa9-48ed-bede-7a69bc3ef3c8)

https://github.com/user-attachments/assets/0f649402-d6b7-44d8-bcac-584991a1d84f


# Pasos para correr el proyecto 

## Requisitos Previos
Node.js 
npm o pnpm

## Instalar ollama 
Para ello debes instalar ollama según el sistema operativo que utilices, aquí tienes la página oficial para descargarlo:
https://ollama.com/download

## Crear el Modelfile
En este paso creamos el Modelfile, para usar el modelo de acuerdo a lo que necesitamos, es decir, cómo queremos que actue, qué modelo de respuestas hacer. Para ello estando en la carpeta del proyecto, ejecutaremos el siguiente comando:

ollama create commit -f ./Modelfile 

## Instalar las dependencias 
```bash
npm install
```
o
```bash
pnpm install
```
Por ultimo, para ejecutar el proyecto, simplemente debemos ejecutar el siguiente comando:
```bash
npm run dev
```
o
```bash
pnpm run dev
```
