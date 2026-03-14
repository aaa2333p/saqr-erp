# Deployment Guide for SAQR ERP

This document provides steps for deploying the SAQR ERP application on Railway (backend) and Vercel (frontend), as well as running it locally with Docker Compose.

---

## Table of Contents

- [Railway — Backend Deployment](#railway--backend-deployment)
- [Vercel — Frontend Deployment](#vercel--frontend-deployment)
- [Docker Compose — Local Development](#docker-compose--local-development)
- [Environment Variables Reference](#environment-variables-reference)

---

## Railway — Backend Deployment

The `railway.json` file at the repository root configures Railway to build and run the Node.js backend.

### Steps

1. **Sign Up / Log In** to [Railway](https://railway.app/).
2. Click **New Project** → **Deploy from GitHub Repo**.
3. Authorize Railway to access your GitHub repositories and select `aaa2333p/saqr-erp`.
4. Railway will auto-detect the `railway.json` configuration, which runs:
   - **Build command:** `cd backend && npm install`
   - **Start command:** `cd backend && npm start`
5. Add a **MongoDB** service: In your Railway project, click **New** → **Database** → **MongoDB**.
6. Set the following **environment variables** in the Railway dashboard (Settings → Variables):

   | Variable       | Description                          | Example value                              |
   | -------------- | ------------------------------------ | ------------------------------------------ |
   | `MONGODB_URI`  | MongoDB connection string            | `mongodb+srv://user:pass@host/saqr-erp`    |
   | `JWT_SECRET`   | Secret key for signing JWT tokens    | `a-long-random-secret-string`              |
   | `PORT`         | Port the server listens on           | `3000` (Railway sets this automatically)   |
   | `NODE_ENV`     | Runtime environment                  | `production`                               |

7. Click **Deploy**. Railway will build and start your backend. The public URL will be shown in the project dashboard.

> **Tip:** Railway automatically injects a `MONGODB_URL` variable when you add a MongoDB service. Rename or copy it to `MONGODB_URI` to match the backend configuration.

---

## Vercel — Frontend Deployment

The `vercel.json` file at the repository root configures Vercel to build the React frontend.

### Steps

1. **Sign Up / Log In** to [Vercel](https://vercel.com/).
2. Click **Add New** → **Project**.
3. Import the `aaa2333p/saqr-erp` repository from GitHub.
4. In the **Configure Project** screen:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)
5. Set the following **environment variables** under the Environment Variables section:

   | Variable              | Description                       | Example value                         |
   | --------------------- | --------------------------------- | ------------------------------------- |
   | `REACT_APP_API_URL`   | URL of the deployed backend API   | `https://your-backend.up.railway.app` |

6. Click **Deploy**. Vercel will build the React app and publish it on a `.vercel.app` domain.

> **Note:** Set `REACT_APP_API_URL` to the public URL of your Railway backend deployment so the frontend can communicate with the API.

---

## Docker Compose — Local Development

The `docker-compose.yml` at the repository root starts MongoDB, the backend, and the frontend together for local development.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aaa2333p/saqr-erp.git
   cd saqr-erp
   ```

2. **Create environment files** by copying the examples:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

   Edit the files and fill in your values (see [Environment Variables Reference](#environment-variables-reference)).

3. **Start all services:**

   ```bash
   docker compose up --build
   ```

4. Access the services:

   | Service  | URL                        |
   | -------- | -------------------------- |
   | Backend  | http://localhost:3000      |
   | Frontend | http://localhost:3001      |
   | MongoDB  | mongodb://localhost:27017  |

5. **Stop all services:**

   ```bash
   docker compose down
   ```

   To remove volumes (database data) as well:

   ```bash
   docker compose down -v
   ```

---

## Environment Variables Reference

### Backend (`backend/.env`)

| Variable       | Required | Default                                 | Description                        |
| -------------- | -------- | --------------------------------------- | ---------------------------------- |
| `MONGODB_URI`  | Yes      | `mongodb://localhost:27017/saqr-erp`    | MongoDB connection string          |
| `JWT_SECRET`   | Yes      | —                                       | Secret key for signing JWT tokens  |
| `PORT`         | No       | `3000`                                  | Port the server listens on         |
| `NODE_ENV`     | No       | `development`                           | Runtime environment                |

### Frontend (`frontend/.env`)

| Variable              | Required | Default                    | Description                       |
| --------------------- | -------- | -------------------------- | --------------------------------- |
| `REACT_APP_API_URL`   | Yes      | `http://localhost:3000`    | URL of the backend API            |

---

> **Security reminder:** Never commit `.env` files containing real secrets to version control. Use `.env.example` files with placeholder values instead.

### Last Updated: 2026-03-14 (UTC)
