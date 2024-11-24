# API completa com NODEJS + TypeScript e MongoDB - Passo a Passo

- passo 01 - Instalar o NodeJS
- passo 02 - Instalar o Insominia
- passo 04 - criar pasta do projeto e iniciar o projeto   
```
npm init -y
```
- passo 05 - instalar o typescript
```
npm install typescript --save-dev
```
- passo 06 - configurar o typescript dentro do projeto
```
npx tsc --init
```
- passo 07 - criar pasta src
```
/src
```
- passo 08 - criar os arquivo dentro da pasta src
```
/src/server.ts
/src/routes.ts
```
- passo 09 - instalar o fastify para criar apis
```
npm install fastify @fastify/cors
```
- passo 10 - instalar a lib para rodar typescript
```
npm install tsx
```
- passo 11 - configurar o server.ts
- passo 12 - atualizar o tsconfig
```
"lib": ["ES2015"]
``` 
- passo 13 - instalar as tipagens do node
```
npm install @types/node --save-dev
```
- passo 14 - configuracao para rodar aplicacao no package.json "scripts"
```
"dev": "tsx watch src/server.ts"
```
- passo 15 - criar as rotas e importar no server

- passo 16 - criar e configurar o banco de dados mongo db atlas


- passo 17 - instalar o prisma para conexao com o banco de dados 

- passo 18 - instalar o prisma
```
npm install prisma --save-dev
```
- passo 19 - instalar o prisma cliente
```
npm install @prisma/client
```
- passo 20 - iniciar o prisma 
```
npx prisma init
```
- passo 21 - gerar o banco de dados 
```
npx prisma generate
```

- passo 22 - testar se o prisma conectou com o banco 
```
npx prisma studio
```

37:04