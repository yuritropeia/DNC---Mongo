# 📌 Projeto: Banco de Dados com MongoDB e CommonJS

## 📝 Descrição  
Este projeto demonstra a implementação de um banco de dados **MongoDB** utilizando **Node.js** com **CommonJS**. Ele inclui operações básicas de **CRUD (Create, Read, Update, Delete)**, facilitando o gerenciamento de dados em uma aplicação backend.

---

## 🚀 Tecnologias Utilizadas  
- **Node.js** (com CommonJS)  
- **MongoDB** (Banco de Dados NoSQL)  
- **Mongoose** (ODM para interagir com o MongoDB)  
- **Express.js** (Framework para criação de APIs)  

---

## 📂 Estrutura do Projeto  
`
📁 meu-projeto-mongodb │── 📂 src │ ├── 📄 db.js 
`
# Conexão com MongoDB 
`
│ ├── 📄 model.js # Definição do modelo Mongoose │ ├── 📄 controller.js # Funções CRUD │ ├── 📄 server.js # Servidor Express │── 📄 .env # Configuração de variáveis de ambiente │── 📄 .gitignore # Arquivos ignorados pelo Git │── 📄 package.json # Dependências do projeto │── 📄 README.md # Documentação do projeto
`

---

## 🔧 Instalação e Configuração  

1️⃣ **Clone o repositório**  
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2️⃣ Instale as dependências
```
npm install
```

3️⃣ Configure as variáveis de ambiente
Crie um arquivo .env e adicione:
```
MONGO_URI=mongodb://localhost:27017/meuBancoDeDados
PORT=3000
```

4️⃣ Inicie o servidor
```
node src/server.js
```

O servidor estará rodando em http://localhost:3000/. 🎉

📌 Funcionalidades
✅ Conectar ao MongoDB usando Mongoose
✅ Criar um modelo de dados
✅ Implementar operações CRUD (Create, Read, Update, Delete)
✅ Criar uma API REST com Express.js
