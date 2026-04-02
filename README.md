# Screenshot App Demo - Mariusz

This repository is a small fullstack TypeScript demo for managing and browsing game screenshots.

The backend exposes screenshot metadata and serves image files from the shared assets directory. The frontend renders a screenshot gallery that shows 480px thumbnails and lets the user open 480px, 720px, or 1080px variants in a new tab.

## What The Demo Does

- Stores shared screenshot assets in `shared/resources/screenshots`
- Serves screenshot file names from the Express API
- Serves generated image files through a static backend route
- Renders a React gallery using the 480px images as thumbnails
- Lets users open 480px, 720px, or 1080px versions of each screenshot

## How It Works

### Backend

The backend lives in `backend/` and runs on port `3000`.

- `GET /api/screenshots` returns the available `.png` screenshot file names
- `GET /api/screenshots/files/:size/:file` is served from the shared screenshots directory via Express static hosting

### Frontend

The frontend lives in `frontend/` and runs on port `3001`.

- The app loads screenshot file names from the backend
- The gallery always displays the `480` folder images as thumbnails
- Hovering a thumbnail reveals links for `480px`, `720px`, and `1080px`
- Clicking a size link opens that image variant in a new tab

### Shared Assets

The screenshot pipeline stores generated images in:

- `shared/resources/screenshots/480`
- `shared/resources/screenshots/720`
- `shared/resources/screenshots/1080`

The project uses consistent file names such as `screenshot-09.png` across all three folders.

## Project Structure

```text
.
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── shared
│   ├── resources
│   │   └── screenshots
│   └── types
└── .github
    ├── copilot-instructions.md      ← workspace instructions + domain rules
    ├── agents
    │   └── screenshot-reviewer.agent.md
    ├── instructions
    │   └── react-components.instructions.md
    ├── prompts
    │   ├── gallery-status.prompt.md
    │   └── screenshot-resizer.prompt.md
    └── skills
        └── image-conversion
            ├── SKILL.md
            └── convert_image.py
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Python 3 for the screenshot conversion workflow

### Install Dependencies

```bash
npm install
```

### Run In Development

```bash
npm run dev
```

This starts:

- the Express backend on port `3000`
- the Vite frontend on port `3001`

You can also run each workspace separately:

```bash
npm run dev:backend
npm run dev:frontend
```

### Build

```bash
npm run build
```

Or build each workspace independently:

```bash
npm run build:backend
npm run build:frontend
```

## Agent Skills And Custom Prompts

This repository is also a demo of GitHub Copilot customization inside a workspace.

### Workspace Instructions

The file `.github/copilot-instructions.md` provides always-on guidance for Copilot in this repo. It defines:

- code style expectations such as camelCase naming
- documentation expectations for functions and methods
- the monorepo architecture and default run commands
- domain rules: the required API response shape, screenshot directory conventions, and filename patterns

These instructions help the agent stay aligned with the project without repeating the same guidance in every prompt. The domain rules section is particularly useful for demonstrating that workspace instructions can encode business logic, not just style.

### Custom Prompt

The file `.github/prompts/screenshot-resizer.prompt.md` defines a reusable prompt named `Screenshot Resizer`.

That prompt tells the agent to:

- look for new source images placed directly in `shared/resources/screenshots`
- ignore images already stored inside the `480`, `720`, and `1080` subfolders
- convert each new image into three PNG sizes
- assign the next sequential screenshot number
- delete the original file only after all three outputs exist
- return a short processing summary

This turns a repetitive asset-preparation task into a reusable slash-command workflow.

### Agent Skill

The custom prompt relies on the `image-conversion` skill in `.github/skills/image-conversion`.

That skill packages:

- a `SKILL.md` file describing when and how to use it
- a reusable Python script, `convert_image.py`, built on Pillow

The skill gives the agent a concrete implementation path for converting and resizing images instead of leaving that logic ambiguous.

### How The Prompt And Skill Work Together

The intended workflow is:

1. Add one or more new images to `shared/resources/screenshots`
2. Invoke the `Screenshot Resizer` prompt in Copilot Chat
3. The prompt instructs the agent to load the `image-conversion` skill
4. The skill supplies the conversion script and expected options
5. The agent generates `480`, `720`, and `1080` PNG outputs and removes the original only after verification

This is the primary example of using a custom prompt to orchestrate a task and a skill to provide the reusable implementation details.

### File-Scoped Instruction

The file `.github/instructions/react-components.instructions.md` uses `applyTo: "frontend/src/components/**"` to automatically attach React-specific guidance whenever Copilot works on a component file. It enforces:

- functional components and JSDoc with `@param`/`@returns`
- use of the `ImageSize` type and `imageSizes` array constant
- semantic HTML for gallery cards (`article`, `figure`)
- accessibility requirements: descriptive alt text, `rel="noreferrer"`, `loading="lazy"`

This demonstrates how file-scoped instructions can apply different rules to different parts of the same codebase.

### Gallery Status Prompt

The file `.github/prompts/gallery-status.prompt.md` defines a second reusable prompt named `Gallery Status`.

This prompt is intentionally read-only — it scans the screenshot directories and reports image counts per size folder, any filenames missing from a folder, and the next available screenshot number. It shows that prompts are useful for auditing and reporting tasks, not just write operations.

### Screenshot Reviewer Agent

The file `.github/agents/screenshot-reviewer.agent.md` defines a custom agent restricted to `tools: [read, search]`.

This agent reviews the gallery for accessibility and consistency issues: alt text quality, lazy loading, anchor safety, semantic HTML, and cross-folder filename consistency. Because it has no write tools, it physically cannot modify files — it can only read and report. This demonstrates tool restriction as a safety boundary in custom agents.

## Screenshot Asset Workflow

For manual processing, the conversion script can also be run directly:

```bash
python3 .github/skills/image-conversion/convert_image.py \
  -i shared/resources/screenshots/example.jpg \
  -o shared/resources/screenshots/480/screenshot-10.png \
  --width 480
```

Repeat that for the `720` and `1080` outputs, then delete the original file after confirming all generated files exist.

## Tech Stack

- TypeScript
- Express.js
- React
- Vite
- Python + Pillow for screenshot processing
