# 💻 Desafio — Minimal Mangá API

O objetivo do desafio é criar uma Minimal API simples

## 🧰 Ferramentas utilizadas

- **[Fastify](https://www.npmjs.com/package/fastify)**
- **[Typescript](https://www.npmjs.com/package/typescript)**

## 📡 Endpoints da API

- _Listar todos os mangás: http://localhost:3333/mangas_
- _Buscar mangá específico por ID: http://localhost:3333/mangas/:id_

## 🔹 Listar todos os mangás

### **GET /mangas**

Exemplo de resposta

```json
[
  { "id": 1, "titulo": "Naruto", "autor": "Masashi Kishimoto" },
  { "id": 2, "titulo": "One Piece", "autor": "Eiichiro Oda" },
  { "id": 3, "titulo": "Death Note", "autor": "Tsugumi Ohba" }
]
```

### **GET /mangas/:id**

Exemplo de resposta

```json
[{ "id": 3, "titulo": "Death Note", "autor": "Tsugumi Ohba" }]
```

## 💾 Instalação

```bash
  # Clonar repositório
  git clone https://github.com/Jef-RS/desafios.git

  # Entrar na pasta
  cd 5-minimal-api-mangas

  # Instalar todas as dependências
  npm install

  # Rodar projeto
  npm run start:dev
```
