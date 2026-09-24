
# Next Blog Starter

---

## Features
- TypeScript + Express.js setup
- Modular project structure
- Environment configuration with `dotenv`
- Ready to extend with blog modules (Posts, Users, etc.)

---

## Installation

Clone the repository

Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```

Setup environment variables:

.env

Run the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev
```

---

## Folder Structure

```
Prisma-Blog/
│── node_modules/          # Dependencies
│── src/
│   ├── app.ts             # Express app configuration
│   ├── server.ts          # Server entry point
│   ├── config/            # Environment & configuration files
│   └── modules/           # Application modules (posts, users, etc.)
│── package.json           # Project metadata & scripts
│── pnpm-lock.yaml         # Lockfile (pnpm)
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation
```

---

## Scripts

```bash
# Run in development mode
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start
```

---

* Connect a Node.js app with Prisma ORM
* Build modular APIs
* Manage environment variables
* Structure scalable backend projects
