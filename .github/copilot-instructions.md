# Workspace Instructions for Chat App

This workspace is a React + Vite single-page application with Firebase Auth and Firestore integration.

## Project overview
- Frontend only: no backend server code in this repository.
- Uses React 19, Vite, React Router v7, Firebase, and React Toastify.
- Source lives under `src/`.
- Styling is plain CSS imported per component.
- No TypeScript is used in this codebase.

## Key files and folders
- `src/main.jsx` — app bootstrap and rendering.
- `src/App.jsx` — routes and auth listener.
- `src/pages/` — page-level views (`Login`, `Chat`, `ProfileUpdate`).
- `src/components/` — reusable UI components.
- `src/context/AppContext.jsx` — shared state and Firebase user/chat logic.
- `src/config/firebase.js` — Firebase initialization, auth helpers, Firestore access.
- `src/lib/upload.js` — upload helper logic.
- `src/assets/` — static assets and asset helpers.

## Development commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server.
- `npm run build` — build production bundle.
- `npm run lint` — run ESLint over the repository.
- `npm run preview` — preview a production build.

## Coding conventions
- Keep components as functional React components.
- Prefer hooks and context for shared state.
- Keep Firebase data operations in `src/config/firebase.js` or `src/context/AppContext.jsx` where they already exist.
- Use CSS files alongside components for styling.
- Avoid introducing TypeScript, new server-side frameworks, or non-Vite build systems unless the project is explicitly converted.

## Firebase and security
- Firebase config is initialized in `src/config/firebase.js`.
- This project depends on Firebase Auth and Firestore.
- Do not add secrets or private environment values directly into source code in a way that breaks safety.

## When editing
- If behavior changes are needed, update the relevant page under `src/pages/`.
- If UI should be reused, add or modify components under `src/components/`.
- Use `AppContext.jsx` for app-level user/chat state and navigation side effects.

## What to avoid
- Do not migrate the project to a backend API or add unrelated backend services.
- Do not introduce TypeScript or new build tooling unless requested.
- Do not remove the existing Vite/React Router structure.

## Example prompts
- "Refactor `src/pages/ProfileUpdate/ProfileUpdate.jsx` to use a single controlled form state object instead of multiple state variables."
- "Add loading state handling for Firebase login in `src/pages/Login/Login.jsx`."
- "Create a reusable `AvatarPicker` component under `src/components` and use it in the profile page."

## Suggested next customization
- Add `.github/instructions/page.instructions.md` for page-specific guidance if different pages need separate conventions.
- Add `.github/prompts/login-workflow.prompt.md` for common tasks like improving auth flows or Firebase error handling.
