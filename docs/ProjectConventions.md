# Project Guidelines & Setup Document

## Naming Convention

### React Components
Use **PascalCase** for component filenames.
* `LoginPage.jsx`
* `HackathonCard.jsx`
* `AdminDashboard.jsx`

### Hooks
Use camelCase with a `use` prefix.
* `useAuth.js`
* `useDebounce.js`

### Redux Files
Use camelCase with descriptive suffixes.
* `authSlice.js`
* `hackathonApi.js`

### Backend Files
Use dot notation to separate the domain and layer.
* `auth.controller.js`
* `auth.service.js`
* `auth.routes.js`
* `auth.model.js`

---

## Git Commit & Branching Conventions

### Git Commit Convention
Every commit must follow the semantic formatting:
* `feat: add login page`
* `fix: resolve jwt middleware bug`
* `style: improve dashboard spacing`
* `refactor: simplify auth service`
* `docs: update tdd`

### Branch Naming
Use a `type/feature-name` pattern:
* `feature/auth`
* `feature/layout`
* `feature/hackathon`
* `feature/submission`
* `feature/judging`

---

## Frontend Setup

### Create & Initialize Frontend
```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install

Install Required Packages
Bash

# Routing & State Management
npm install react-router-dom @reduxjs/toolkit react-redux

# HTTP Client
npm install axios

# UI Components & Styling
npm install bootstrap react-bootstrap framer-motion react-icons

# Forms & Validation
npm install react-hook-form yup @hookform/resolvers

# Notifications & Charts
npm install react-toastify chart.js react-chartjs-2

Backend Setup
Initialize Backend
Bash

mkdir backend
cd backend
npm init -y

Install Dependencies
Bash

# Core & Database
npm install express mongoose dotenv cors cookie-parser

# Security
npm install bcryptjs jsonwebtoken helmet express-rate-limit

# Utilities, Validation & Logging
npm install morgan express-validator multer cloudinary

# Dev Dependencies
npm install -D nodemon

Backend Scripts

Update your backend package.json with the following scripts:
JSON

{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}

Environment Configuration

Create a backend/.env file and populate it with your environment secrets:
Code snippet

PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=super_secret_key
JWT_EXPIRE=7d

Initial Directory Structure Blueprint

Run these commands in their respective root directories to spin up the skeleton structure:
Frontend Scaffold
Bash

mkdir -p src/app \
         src/assets/images \
         src/assets/icons \
         src/components/common \
         src/components/layout \
         src/components/cards \
         src/components/forms \
         src/components/tables \
         src/components/charts \
         src/features/auth \
         src/layouts \
         src/pages/public \
         src/pages/admin \
         src/pages/judge \
         src/pages/participant \
         src/routes \
         src/hooks \
         src/utils \
         src/constants \
         src/styles

Backend Scaffold
Bash

mkdir -p src/config \
         src/controllers \
         src/services \
         src/routes \
         src/models \
         src/middleware \
         src/validators \
         src/utils \
         src/constants \
         src/uploads