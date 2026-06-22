# my-ai

A full-stack AI productivity platform with a React + Vite frontend and an Express backend. The app lets authenticated users generate AI-written articles and blog titles, create and publish images, remove image backgrounds/objects, review resumes, and browse a community feed.

## Key Features

- User authentication with Clerk
- AI article generation
- AI blog title generation
- AI image generation (production via Clipdrop + Cloudinary)
- Background removal for images
- Object removal from images
- PDF resume review and feedback
- User dashboard for saved creations
- Community feed for public creations
- Like / unlike creations

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, React Router, Clerk, React Markdown
- Backend: Express 5, Clerk Express, OpenAI-compatible Gemini API, Axios, Multer, Cloudinary, Neon DB
- Deployment: Vercel config present for both `client/` and `server/`

## Repository Structure

- `client/` - React frontend
- `server/` - Express backend API
- `client/package.json` - frontend dependencies and scripts
- `server/package.json` - backend dependencies and scripts

## Client Pages

- `/` - marketing/home page
- `/ai` - main authenticated workspace
- `/ai/write-article` - article generation
- `/ai/blog-titles` - blog title generation
- `/ai/generate-images` - image generation
- `/ai/remove-background` - background removal
- `/ai/remove-object` - remove objects from images
- `/ai/review-resume` - resume review
- `/ai/community` - public creations feed

## API Endpoints

### AI routes

- `POST /api/ai/generate-article`
- `POST /api/ai/generate-blog-title`
- `POST /api/ai/generate-image`
- `POST /api/ai/remove-image-background`
- `POST /api/ai/remove-image-object`
- `POST /api/ai/resume-review`

### User routes

- `GET /api/user/get-user-creations`
- `GET /api/user/get-published-creations`
- `POST /api/user/toggle-like-creations`

> All backend routes are protected by Clerk authentication and require a valid bearer token from the client.

## Environment Variables

### Client

- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk publishable key for frontend auth
- `VITE_BASE_URL` - backend API base URL (for example `http://localhost:3000`)

### Server

- `DATABASE_URL` - Neon/PostgreSQL connection string
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `GEMINI_API_KEY` - Google Gemini/OpenAI-compatible API key
- `CLIPDROP_API_KEY` - Clipdrop image generation API key
- `PORT` - optional server port

> Note: Clerk server-side configuration variables are also required for `@clerk/express` to authenticate requests correctly.

## Local Development

1. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

2. Create `.env` files in `client/` and `server/` with the required variables.

3. Start the backend server

```bash
cd server
npm run server
```

4. Start the frontend

```bash
cd ../client
npm run dev
```

5. Open the client app in your browser at the Vite local URL.

## Build and Production

- Frontend: `npm run build` in `client/`
- Backend: `npm start` in `server/`

## Notes

- In development, the image generation endpoint returns a placeholder image URL instead of calling Clipdrop.
- `server/configs/db.js` uses Neon to connect to the database.
- `server/configs/cloudinary.js` initializes Cloudinary using environment variables.
- The server stores user creations in a `creations` table and uses Clerk private metadata for plan and usage tracking.

## Deployment

- `client/vercel.json` is configured for the frontend deployment.
- `server/vercel.json` is configured for a Vercel Node deployment.
- Ensure environment variables are set in your deployment platform before publishing.

## Additional Improvements

- Add database migrations or schema creation scripts for the `creations` table
- Harden auth middleware to validate Clerk session and plan usage
- Add server-side validation for multipart form uploads and payload sizes
- Add a README to both `client/` and `server/` if desired for subproject-specific instructions
