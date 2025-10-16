# Database Setup Guide

This project uses Drizzle ORM with Neon PostgreSQL database.

## Setup Steps

### 1. Create a Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy your connection string

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
DATABASE_URL=your_neon_connection_string_here
```

### 3. Push Schema to Database

Run the following command to create the tables in your database:

```bash
pnpm db:push
```

This will create the `waitlist` table with the following structure:
- `id` (UUID, primary key)
- `email` (text, unique, required)
- `name` (text, optional)
- `created_at` (timestamp with timezone)

## Available Database Commands

- `pnpm db:generate` - Generate migration files from schema
- `pnpm db:migrate` - Run migrations
- `pnpm db:push` - Push schema changes directly to database (recommended for development)
- `pnpm db:studio` - Open Drizzle Studio to view and edit your database

## Schema Location

The database schema is defined in `lib/db/schema.ts`

## Usage in Code

```typescript
import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"

// Insert a new record
await db.insert(waitlist).values({
  email: "user@example.com",
  name: "John Doe"
})

// Query records
const allUsers = await db.select().from(waitlist)
```
