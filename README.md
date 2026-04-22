# 📌 Portfólio FRONT-END (SENAI) — Projetos e Exercícios

> Repositório com projetos, exercícios e práticas desenvolvidos durante o curso de Programação no SENAI, como parte da minha preparação para atuar como **Aprendiz de T.I** na **Brasal Refrigerantes**.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Em%20evolu%C3%A7%C3%A3o-blue.svg)](#)

---

## 🚀 Demonstração

- 🔗 Acesse: [Link do projeto](#) (este repositório reúne vários projetos; a execução é local)

---

## 📖 Sobre o Projeto

Este repositório é um **portfólio de estudos** com materiais desenvolvidos em aula e fora dela, cobrindo desde os fundamentos de Web (HTML/CSS/JS) até projetos com **React** e aplicações **PHP + MySQL**.

Objetivo:

> Consolidar lógica de programação, estruturação de páginas, consumo de APIs, organização de código e fundamentos de back-end com banco de dados — aplicando na prática o que foi estudado no SENAI.

---

## ⭐ Projetos em Destaque

- 🍩 **Divino Donuts**: site multi-páginas com HTML/CSS/JS (cadastro, login, carrinho e fluxo de compra)  
  Pasta: `./Divino_Donuts`
- 🧀 **Projeto Final (Front-End)**: páginas de home/produtos/login/cadastro/carrinho com scripts e estilos dedicados  
  Pasta: `./Projeto Final`
- ⚛️ **React (Vite e CRA)**: exercícios e apps (componentização, páginas, estados, estrutura de projeto)  
  Pasta: `./React`
- 🐘 **PHP + MySQL (CRUDs)**: projetos como **Carro**, **Livros** e **comida** com conexão e scripts de banco  
  Pastas: `./Carro`, `./Livros`, `./Back_End/*`
- 🧩 **Aulas de JavaScript**: lógica, DOM, arrays, POO, promises e JSON  
  Pasta: `./JavaScript`

---

## 🛠️ Tecnologias Utilizadas

**Presentes neste repositório**

- 🌐 HTML5 / CSS3 / JavaScript
- ⚛️ React (Vite e Create React App)
- 🟩 Node.js (ambiente para rodar projetos React/Vite)
- 🐘 PHP
- 🐬 MySQL
- 🎨 Bootstrap (em projetos específicos)

**Tecnologias estudadas (referências úteis)**

- `https://nodejs.org/`
- `https://laravel.com/` (referência; não há um projeto Laravel neste repositório)
- `https://react.dev/`
- `https://www.mysql.com/`

---

## ⚙️ Instalação

Como este repositório contém **vários projetos**, escolha o tipo de projeto:

### 1) Projetos HTML/CSS/JS (estáticos)

- Abra o arquivo `index.html` do projeto no navegador  
  Exemplos: `./Divino_Donuts/Páginas/home.html`, `./Projeto Final/Páginas/home.html`

### 2) Projetos React (Vite)

```bash
# Entre em um projeto React (ex.: onePage)
cd "React/onePage"

# Instale as dependências
npm install

# Execute
npm run dev
```

### 3) Projetos React (Create React App)

```bash
# Entre no projeto
cd "React/ficha-de-jogo"

# Instale as dependências
npm install

# Execute
npm start
```

### 4) Projetos PHP + MySQL

- Use um servidor local (ex.: Apache via XAMPP/WAMP/Laragon)
- Coloque a pasta do projeto na pasta pública do servidor
- Importe o banco usando os arquivos `.sql` existentes (quando houver)

---

## 🔑 Configuração

### Banco de Dados (PHP)

Alguns projetos utilizam arquivo de configuração em PHP, por exemplo:

```php
define("Servidor","localhost");
define("Usuario","root");
define("Senha","");
define("Banco","concessionaria");
```

Arquivos SQL (exemplos):

- `./Carro/carros.sql`
- `./Livros/livros.sql`
- `./Back_End/Livros/loja_livros.sql`
- `./Back_End/comida/comida.sql`

---

## 📂 Estrutura de Pastas

```bash
FRONT-END/
 ├── Back_End/              # Projetos em PHP (inclui exercícios e apps)
 ├── Carro/                 # CRUD PHP + MySQL (carros)
 ├── Livros/                # CRUD PHP + MySQL (livros)
 ├── Divino_Donuts/         # Site front-end completo
 ├── Projeto Final/         # Projeto final front-end (páginas + scripts + estilos)
 ├── JavaScript/            # Aulas e exercícios de JS (DOM, POO, JSON, etc.)
 ├── React/                 # Projetos React (Vite e CRA)
 ├── bootstrap/             # Projetos com Bootstrap e integrações
 ├── Fluxograma/            # PDFs e materiais de estudo
 └── LICENSE
```

---

## 📌 Funcionalidades

- ✔️ Sites multi-páginas com navegação e layout responsivo (projetos em HTML/CSS)
- ✔️ Interações com JavaScript (DOM, formulários, validação, carrinho, etc.)
- ✔️ Consumo de APIs em exercícios e projetos específicos
- ✔️ Apps React com componentização e organização por pastas
- ✔️ CRUD com PHP + MySQL (cadastro, listagem, edição e remoção)

---

## 🧪 Testes

Projetos React (quando disponível):

```bash
cd "React/ficha-de-jogo"
npm test
```

---

## 📈 Melhorias Futuras

- 🔹 Publicar demos (GitHub Pages/Deploy) para os projetos front-end
- 🔹 Padronizar estrutura e scripts de execução por projeto
- 🔹 Melhorar organização e documentação interna de cada pasta/projeto

---

## 🤝 Contribuição

Contribuições são bem-vindas!

```bash
# Crie uma branch
git checkout -b minha-feature

# Commit
git commit -m "feat: minha nova feature"

# Push
git push origin minha-feature
```

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Feito por **Helen** (SENAI — Brasal Refrigerantes)

- LinkedIn: `https://linkedin.com/in/seu-perfil`
- GitHub: `https://github.com/seu-usuario`

---

## 📎 Materiais (Apoio)

- [git.pdf](https://github.com/user-attachments/files/17466458/git.pdf)
- [github.pdf](https://github.com/user-attachments/files/17466457/github.pdf)
- [historiadainternet.pdf](https://github.com/user-attachments/files/17466455/historiadainternet.pdf)
- [metodologiasageis.pdf](https://github.com/user-attachments/files/17466454/metodologiasageis.pdf)
