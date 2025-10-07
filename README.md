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
CREATE DATABASE trips_db;

\c trips_db;

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    photo TEXT,
    title VARCHAR(100),
    place VARCHAR(100),
    country VARCHAR(100),
    main_attractions TEXT,
    local_experience TEXT,
    start_date VARCHAR(10),
    end_date VARCHAR(10),
    is_favorite BOOLEAN DEFAULT FALSE
);

INSERT INTO trips (photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite) VALUES
('paris.jpg', 'Aventura em Paris', 'Paris', 'FR', 'Torre Eiffel (especialmente a noite), o museu do Louvre, a majestosa Catedral de Notre-Dame (mesmo apos o incendio, sua imponencia permanece) e passeios romanticos pelo Rio Sena.', 'Perambular sem rumo em Saint-Germain-des-Pres, cheirar o croissant fresco das boulangeries e fazer um piquenique improvisado com vinho e queijos nos gramados perto da Torre foi realmente surreal. O charme esta no ritmo elegante dos parisienses.', '15/07/2021', '25/07/2021', false),
('ipanema.jpg', 'Vibes Cariocas', 'Ipanema', 'BR', 'A propria Praia de Ipanema (e seu famoso Posto 9), assistir ao por do sol no Arpoador e visitar a Lagoa Rodrigo de Freitas para um fim de tarde relaxante.', 'Tomar uma agua de coco gelada na areia, ouvir o samba de roda vindo de algum quiosque e aproveitar a energia despreocupada e vibrante dos cariocas me deixaram tao tranquila que esqueci completamente dos meus problemas. As feiras de rua e os bares de boteco completaram o clima.', '10/01/2021', '20/01/2021', true),
('kyoto.jpg', 'Explorando Kyoto', 'Kyoto', 'JP', 'O majestoso Kinkaku-ji (Pavilhao Dourado), a caminhada hipnotizante pelo Bosque de Bambu de Arashiyama e a area de Fushimi Inari-taisha com seus milhares de portoes torii.', 'Participar de uma tradicional cerimonia do cha, perambular pelas ruas historicas de Gion (o bairro das geishas) e me deliciar com o kaiseki, a culinaria tradicional da corte e algo que eu faria novamente. A experiencia e de total reverencia e paz.', '05/11/2022', '18/11/2022', false),
('machupicchu.jpg', 'Misterios Incas', 'Machu Picchu', 'PE', 'A propria cidadela inca de Machu Picchu, as montanhas adjacentes Huayna Picchu e Montanha Machu Picchu (para vistas panoramicas), e o Templo do Sol e o Intihuatana Stone (relogios solares).', 'A sensacao indescritivel de ver a ruina surgir entre as nuvens ao nascer do sol. E um momento quase espiritual, de contemplacao silenciosa e profunda conexao com uma historia milenar. Respirar o ar puro dos Andes me fez sentir o misterio no ar.', '22/03/2022', '30/03/2022', false),
('santorini.jpg', 'Charme Grego', 'Santorini', 'GR', 'O iconico por do sol de Oia, as vilas brancas de Fira e Imerovigli aninhadas na encosta da caldeira e as praias de areia vulcanica (como a Red Beach).', 'Perder-se nas ruelas labirinticas, descobrindo terracos escondidos e igrejas de cupula azul. Desfrutar da culinaria local, como tomatinis e fava, com um copo de vinho Assyrtiko da ilha. E um paraiso fotografico de paz e contemplacao, minha segunda casa!', '01/09/2023', '08/09/2023', true),
('newyork.jpg', 'Aventura na Big Apple', 'Nova York', 'US', 'O espetaculo luminoso da Times Square, um passeio tranquilo pelo Central Park, a beleza da arquitetura no Rockefeller Center e a travessia historica da Ponte do Brooklyn.', 'Sentir o pulso da cidade no metro apressado, comer um street food classico, como um cachorro-quente de rua, e passar horas explorando as galerias de arte e as lojas vintage de Lower Manhattan ou a energia hipster do Brooklyn. Whats Up, NY city!', '12/05/2023', '20/05/2023', false),
('barcelona.jpg', 'Cores da Catalunha', 'Barcelona', 'ES', 'A arquitetura fantastica da Sagrada Familia, o colorido e as vistas do Parque Guell, a agitacao da avenida La Rambla e o charme do antigo Bairro Gotico.', 'Passar a noite no bairro de El Born, provando uma variedade de tapas em pequenos bares com uma taca de cava ou sangria. O melhor e o almoco tardio seguido pela siesta e a energia que explode novamente a noite. Me senti como en casa.', '02/08/2024', '11/08/2024', true),
('islandia.jpg', 'Terra do Gelo e Fogo', 'Islandia', 'IS', 'O circuito do Circulo Dourado (com a cascata Gullfoss e o geiser Strokkur), a Lagoa Azul (Blue Lagoon) e, claro, a busca pela espetacular Aurora Boreal.', 'A experiencia e de imersao total na natureza intocada. Dirigir por paisagens lunares, tomar um banho relaxante nas piscinas geotermicas e sentir a forca dos elementos. A hospitalidade dos islandeses, em contraste com a paisagem selvagem, e reconfortante.', '18/02/2024', '26/02/2024', false),
('roma.jpg', 'Historia Romana', 'Roma', 'IT', 'O imponente Coliseu, o historico Forum Romano e o Monte Palatino, e jogar a moeda na barroca Fontana di Trevi.', 'Viver o dolce far niente em um cafe da praca. A melhor parte e jantar em uma trattoria simples no bairro de Trastevere, comendo um autentico Cacio e Pepe e ouvindo o barulho alegre dos locais. Caminhar por ruas estreitas e descobrir ruinas a cada esquina.', '10/10/2025', '17/10/2025', false),
('bangkok.jpg', 'Encantos Tailandeses', 'Bangkok', 'TH', 'Os templos dourados do Grande Palacio e o Wat Arun, os barcos longos nos canais (khlongs) e o mercado flutuante de Damnoen Saduak.', 'O Street Food e o coracao da experiencia: provar Pad Thai e Mango Sticky Rice fresquinhos no calor da noite foram as minhas melhores decisoes. Alem de andar em um tuk-tuk pelo transito caotico e negociar nos mercados noturnos como o Asiatique The Riverfront e claro. E uma cidade de energia infinita e sabores exoticos.', '05/04/2025', '15/04/2025', true);
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
├── 📄 package.json               # Configurações e dependências do projeto
├── 📄 server.js                  # Arquivo principal do servidor
├── 📄 .env                       # Variáveis de ambiente (não versionado)
├── 📄 .gitignore                 # Arquivos ignorados pelo Git
├── 📄 README.md                  # Documentação do projeto
├── 📂 src/                       # Código fonte da aplicação
│   ├── 📂 config/                # Configurações
│   │   ├── 📄 database.js        # Conexão com PostgreSQL
│   │   └── 📄 upload.js          # Configuração do Multer
│   ├── 📂 controllers/           # Controladores (lógica de negócio)
│   │   └── 📄 tripController.js
│   ├── 📂 models/                # Modelos (interação com banco)
│   │   └── 📄 tripModel.js
│   ├── 📂 routes/                # Definição das rotas
│   │   └── 📄 tripRoutes.js
│   └── 📂 database/              # Scripts de banco de dados
│       ├── 📄 schema.sql         # Criação de tabelas e dados
│       └── 📄 add_favorites.sql  # Script para adicionar favoritos
└── 📂 uploads/                   # Pasta para arquivos enviados
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

## 👨‍💻 Autora

**Alejandra Barros** - [4yob](https://github.com/4yob)
