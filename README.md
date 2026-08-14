# Prime Estate API

Backend for the [Prime Estate](../Front-end/Projetos/2025-01-01-prime-estate) frontend.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/api/properties` | List properties (`query`, `purpose`, `type`, `priceMin`, `priceMax`) |
| `GET` | `/api/properties/:id` | Property by id |
| `GET` | `/api/places` | States + cities (`limit`, `state`) |

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

API runs on `http://localhost:3333` by default.
