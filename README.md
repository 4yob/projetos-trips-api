# 🌍 Trips API - Sistema de Gerenciamento de Viagens

Uma API RESTful completa para gerenciamento de viagens, permitindo criar, visualizar, editar, excluir e favoritar experiências de viagem com upload de fotos.

## ✨ Funcionalidades

- 🗂️ **CRUD Completo** - Criar, listar, visualizar, atualizar e excluir viagens
- 📸 **Upload de Fotos** - Sistema de upload e gerenciamento de imagens
- ⭐ **Sistema de Favoritos** - Marcar/desmarcar viagens como favoritas
- 🔍 **Filtros** - Buscar apenas viagens favoritas
- 🎯 **Toggle Favoritos** - Alternar status de favorito com um clique
- 📊 **Estrutura Completa** - Informações detalhadas sobre cada viagem

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **pg** - Driver PostgreSQL para Node.js

### Upload e Arquivos
- **Multer** - Middleware para upload de arquivos
- **Path** - Manipulação de caminhos de arquivos

### Desenvolvimento
- **Nodemon** - Auto-reload durante desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente
- **CORS** - Configuração de Cross-Origin Resource Sharing

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (v14 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/4yob/projetos-trips-api.git
cd projetos-trips-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DB_USER=seu_usuario_postgres
DB_HOST=localhost
DB_NAME=trips_db
DB_PASSWORD=sua_senha
DB_PORT=5432
PORT=3000
```

### 4. Configure o banco de dados
Execute o script SQL para criar o banco e as tabelas:
```bash
# Acesse o PostgreSQL
psql -U seu_usuario -d postgres

# Execute o script de criação
\i src/database/schema.sql

# Para adicionar favoritos em tabela existente (opcional)
\i src/database/add_favorites.sql
```

### 5. Execute a aplicação

#### Desenvolvimento (com auto-reload)
```bash
npm run dev
```

#### Produção
```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
projetos-trips-api/
├── 📄 package.json          # Configurações e dependências do projeto
├── 📄 server.js            # Arquivo principal do servidor
├── 📄 .env                 # Variáveis de ambiente (não versionado)
├── 📄 .gitignore          # Arquivos ignorados pelo Git
├── 📄 README.md           # Documentação do projeto
├── 📂 src/                # Código fonte da aplicação
│   ├── 📂 config/         # Configurações
│   │   ├── 📄 database.js # Conexão com PostgreSQL
│   │   └── 📄 upload.js   # Configuração do Multer
│   ├── 📂 controllers/    # Controladores (lógica de negócio)
│   │   └── 📄 tripController.js
│   ├── 📂 models/         # Modelos (interação com banco)
│   │   └── 📄 tripModel.js
│   ├── 📂 routes/         # Definição das rotas
│   │   └── 📄 tripRoutes.js
│   └── 📂 database/       # Scripts de banco de dados
│       ├── 📄 schema.sql       # Criação de tabelas e dados
│       └── 📄 add_favorites.sql # Script para adicionar favoritos
└── 📂 uploads/            # Pasta para arquivos enviados
    └── 📸 (imagens das viagens)
```

## 🎯 Endpoints da API

### Base URL
```
http://localhost:3000/api
```

### 📋 Viagens

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| `GET` | `/trips` | Listar todas as viagens | ❌ |
| `GET` | `/trips/:id` | Buscar viagem por ID | ❌ |
| `POST` | `/trips` | Criar nova viagem | ❌ |
| `PUT` | `/trips/:id` | Atualizar viagem | ❌ |
| `DELETE` | `/trips/:id` | Excluir viagem | ❌ |

### ⭐ Favoritos

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| `GET` | `/trips/favorites` | Listar viagens favoritas | ❌ |
| `PATCH` | `/trips/:id/togglefavorite` | Alternar status de favorito | ❌ |
| `PATCH` | `/trips/:id/setfavorite` | Definir como favorito/não favorito | ❌ |

## 📚 Exemplos de Uso

### 1. 📋 Listar todas as viagens
```http
GET /api/trips
```

**Resposta:**
```json
[
  {
    "id": 1,
    "photo": "paris.jpg",
    "title": "Aventura em Paris",
    "place": "Paris",
    "country": "FR",
    "main_attractions": "Torre Eiffel, Louvre, Notre-Dame",
    "local_experience": "Passeios românticos pelo Rio Sena",
    "start_date": "15/07/2021",
    "end_date": "25/07/2021",
    "is_favorite": true
  }
]
```

### 2. ➕ Criar nova viagem
```http
POST /api/trips
Content-Type: multipart/form-data
```

**Body (form-data):**
```
title: "Aventura em Tokyo"
place: "Tokyo"
country: "JP"
main_attractions: "Tokyo Tower, Senso-ji, Shibuya"
local_experience: "Comer sushi no mercado de Tsukiji"
start_date: "01/12/2024"
end_date: "10/12/2024"
is_favorite: true
photo: [arquivo de imagem]
```

**Resposta (201 Created):**
```json
{
  "id": 11,
  "photo": "1728234567890-tokyo.jpg",
  "title": "Aventura em Tokyo",
  "place": "Tokyo",
  "country": "JP",
  "main_attractions": "Tokyo Tower, Senso-ji, Shibuya",
  "local_experience": "Comer sushi no mercado de Tsukiji",
  "start_date": "01/12/2024",
  "end_date": "10/12/2024",
  "is_favorite": true
}
```

### 3. ✏️ Atualizar viagem
```http
PUT /api/trips/1
Content-Type: multipart/form-data
```

**Body (form-data):**
```
title: "Aventura em Paris - Atualizada"
place: "Paris"
country: "FR"
main_attractions: "Torre Eiffel, Louvre, Notre-Dame, Champs-Élysées"
local_experience: "Passeios românticos e visita aos museus"
start_date: "15/07/2021"
end_date: "30/07/2021"
is_favorite: true
photo: [nova foto - opcional]
```

### 4. ⭐ Gerenciar Favoritos

#### Alternar status de favorito
```http
PATCH /api/trips/1/togglefavorite
```

#### Definir como favorito
```http
PATCH /api/trips/1/setfavorite
Content-Type: application/json

{
  "is_favorite": true
}
```

#### Listar apenas favoritas
```http
GET /api/trips/favorites
```

### 5. 🗑️ Excluir viagem
```http
DELETE /api/trips/1
```

**Resposta:**
```json
{
  "message": "Viagem deletada com sucesso."
}
```

## 🗃️ Estrutura do Banco de Dados

### Tabela: `trips`

| Campo | Tipo | Descrição | Obrigatório |
|-------|------|-----------|-------------|
| `id` | SERIAL | Identificador único (PK) | ✅ |
| `photo` | TEXT | Nome do arquivo da foto | ❌ |
| `title` | VARCHAR(100) | Título da viagem | ✅ |
| `place` | VARCHAR(100) | Local da viagem | ✅ |
| `country` | VARCHAR(100) | País da viagem | ✅ |
| `main_attractions` | TEXT | Principais atrações | ❌ |
| `local_experience` | TEXT | Experiências locais | ❌ |
| `start_date` | VARCHAR(10) | Data de início (DD/MM/AAAA) | ✅ |
| `end_date` | VARCHAR(10) | Data de fim (DD/MM/AAAA) | ✅ |
| `is_favorite` | BOOLEAN | Status de favorito (padrão: false) | ❌ |

## 🎨 Recursos Especiais

### 📸 Upload de Fotos
- Suporte a imagens (JPG, PNG, GIF)
- Renomeação automática para evitar conflitos
- Exclusão automática da foto anterior ao atualizar
- Pasta de uploads servida estaticamente

### ⭐ Sistema de Favoritos
- **Toggle**: Alterna automaticamente entre favorito/não favorito
- **Set**: Define um status específico
- **Filter**: Lista apenas viagens favoritas

### 🔄 Substituição de Fotos
Ao atualizar uma viagem com nova foto:
1. A nova foto é salva
2. A foto anterior é automaticamente excluída
3. O banco é atualizado com o novo nome do arquivo

## 🐛 Tratamento de Erros

A API retorna erros padronizados:

```json
{
  "message": "Descrição do erro",
  "error": "Detalhes técnicos (em desenvolvimento)"
}
```

### Códigos de Status HTTP
- `200` - Sucesso
- `201` - Criado com sucesso
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 👨‍💻 Autor

**4yob** - [GitHub](https://github.com/4yob)