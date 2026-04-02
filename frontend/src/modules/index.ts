import type { ModuleDefinition } from '../types/module';

/**
 * Central registry of all demo modules.
 * Add a new entry here and a matching route in App.tsx to register a module.
 */
export const modules: ModuleDefinition[] = [
  {
    id: 'screenshot-gallery',
    name: 'Screenshot Gallery',
    description: 'Browse game screenshots in 480px, 720px, and 1080px. Demonstrates a fullstack image pipeline using a custom Copilot prompt and image-conversion skill.',
    path: '/screenshot-gallery',
    icon: '🖼️',
  },
];
