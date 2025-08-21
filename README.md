## ShopSphere-E-commercial-Platform

Full‑stack application with a Next.js 15 frontend (App Router, React 19, Tailwind v4) and an Express 5 + MongoDB backend. The backend provides authentication (JWT via httpOnly cookie), product catalog APIs, and a contact form endpoint. The frontend implements pages for browsing products, viewing product details, registering, logging in, and adding products for sellers.

### Tech Stack
- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- Backend: Express 5, Mongoose 8, JWT (httpOnly cookies), Helmet, CORS
- Database: MongoDB (Atlas or local)

---

## Quick Start

### 1) Prerequisites
- Node.js 18+ and npm
- A MongoDB connection string (MongoDB Atlas or local)

### 2) Environment variables
Create a `.env` file inside `backend/` with:

```
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/ShopSphere-E-commercial-Platform
JWT_SECRET=replace-with-a-strong-random-secret
COOKIE_NAME=auth_token
NODE_ENV=development
```

### 3) Install dependencies

```bash
# at repo root (frontend)
npm install

# backend
cd backend
npm install
```

### 4) Run locally

Run backend first (port 4000 by default):

```bash
cd backend
node index.js
```

In a new terminal, run the Next.js dev server (port 3000):

```bash
cd ..
npm run dev
```

Open `http://localhost:3000`.

---

## Project Structure

```
ShopSphere-E-commercial-Platform/
  backend/
    index.js                # Express app entry
    middleware/auth.js      # Cookie-based JWT parsing and guards
    models/                 # Mongoose models: User, Product, Contact
    routes/                 # Auth, products, contacts APIs
    package.json
  src/app/                  # Next.js App Router
    providers/AuthProvider.tsx   # Client auth state from /api/auth/me
    products/               # Products listing, detail, and add product page
    login/, register/       # Auth pages
    ...components           # UI components
  package.json              # Frontend scripts
  README.md
```

---

## Scripts

Frontend (run from repo root):

```bash
npm run dev      # next dev (turbopack)
npm run build    # next build
npm run start    # next start
npm run lint     # next lint
```

Backend (run from backend/):

```bash
node index.js    # start API server
```

---

## Backend API

Base URL: `http://localhost:4000`

### Auth (`/api/auth`)
- `POST /api/auth/register` — body: `{ email, password, name? }`
- `POST /api/auth/login` — body: `{ email, password }` — sets httpOnly cookie `${COOKIE_NAME}`
- `POST /api/auth/logout` — clears cookie
- `GET /api/auth/me` — returns current token payload `{ sub, email, role }` if authenticated
- `POST /api/auth/role` — update role; self can become `seller`, admin can change any user; body: `{ email?, role }`

### Products (`/api/products`)
- `GET /api/products` — query params: `q, page, pageSize, sort(newest|price_asc|price_desc), minPrice, maxPrice, category, brand`
- `GET /api/products/:id`
- `POST /api/products` — auth required, role `seller` or `admin`; body includes `title, description, price, images?, stock?, featured?, category?, brand?`
- `PUT /api/products/:id` — owner or `admin`
- `DELETE /api/products/:id` — owner or `admin`

### Contacts (`/api/contacts`)
- `POST /api/contacts` — public; `{ name, email, subject, message, phone?, country? }`
- `GET /api/contacts` — admin only
- `PATCH /api/contacts/:id` — admin only; `{ status }` where `status ∈ {new, resolved}`

---

## Frontend Usage

- Authentication uses backend cookies. The client reads session via `AuthProvider` calling `/api/auth/me`.
- Pages:
  - `/products` — list, search, filter, paginate; featured carousel
  - `/products/[id]` — details page
  - `/products/add` — create product (requires `seller` or `admin`)
  - `/login`, `/register`

To enable creating products as a new user, register, login, then hit the “Become seller” action on the Add Product page (sends `POST /api/auth/role` with `role: seller`).

---

## Configuration Notes

- CORS is restricted to `http://localhost:3000` by default; adjust in `backend/index.js` if needed.
- JWT secret and MongoDB URI must be set in `backend/.env`.
- Cookie name can be customized via `COOKIE_NAME`.

---

## Deployment

- Backend: deploy `backend/` to your Node host (set env vars, run `node index.js`).
- Frontend: run `npm run build` at repo root and deploy `.next` output on your platform (e.g., Vercel). Point the frontend to the backend base URL or expose the backend at `https://your-domain` with proper CORS and `secure` cookies.

---

## License

MIT (or your choice). Update this section if different.

