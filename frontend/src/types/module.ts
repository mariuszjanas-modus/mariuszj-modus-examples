/**
 * Describes a demo module registered in the application
 */
export interface ModuleDefinition {
  /** Unique kebab-case identifier */
  id: string;
  /** Human-readable display name shown on the Home page card */
  name: string;
  /** Short description shown on the Home page card */
  description: string;
  /** React Router path the module is mounted at */
  path: string;
  /** Optional emoji or short icon string shown on the card */
  icon?: string;
}
