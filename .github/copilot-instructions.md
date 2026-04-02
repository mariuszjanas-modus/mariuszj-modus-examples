# Project Guidelines

## Code Style

### Naming Conventions
- **Always use camelCase** for all variables and private fields
- Examples:
  - ✅ `const userName = "John";`
  - ✅ `private userService: UserService;`
  - ❌ `const user_name = "John";`
  - ❌ `private user_service: UserService;`

### Documentation Requirements
- **Every function and method must have a comment** explaining its purpose
- Include parameter descriptions and return values when relevant
- Example:
  ```typescript
  /**
   * Fetches user data from the API by user ID
   * @param userId - The unique identifier of the user
   * @returns Promise containing user data
   */
  async function getUserById(userId: string): Promise<User> {
    // implementation
  }
  ```

## Architecture

This is a fullstack TypeScript monorepo:
- **Backend**: Express.js API (port 3000) in `backend/`
- **Frontend**: Vite + React (port 3001) in `frontend/`
- **Shared**: Common types in `shared/types/`

## Build and Test

```bash
# Install all dependencies
npm install

# Run both frontend and backend in development
npm run dev

# Build for production
npm run build
```

## Domain Rules

These rules encode project-specific conventions. Follow them when adding new features, endpoints, or components.

### Screenshot API Shape

- The screenshots endpoint always returns `{ screenshots: string[] }` — an array of filenames, not objects
- New endpoints that return screenshot data must follow the same shape
- Never add per-item metadata to the API response without updating the controller type

### Directory and Naming Conventions

- Screenshot assets live in `shared/resources/screenshots/` with exactly three size subfolders: `480/`, `720/`, and `1080/`
- Never create additional size subfolders without also updating the `ImageSize` type in `frontend/src/components/Gallery.tsx`
- All screenshot filenames follow the pattern `screenshot-NN.png` where `NN` is a zero-padded two-digit number (e.g., `screenshot-04.png`, `screenshot-12.png`)
- A filename must exist in all three size folders or none — partial sets are a bug

### Frontend Gallery Rules

- The gallery always uses the `480/` images as thumbnails — never fetch the full-size image for the initial grid view
- The `ImageSize` type (`480 | 720 | 1080`) is the source of truth for any code that constructs image URLs
- Do not hardcode size strings in JSX — derive them from the `imageSizes` array
