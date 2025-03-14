/// <reference types="vite/client" />

declare module '@/lib/utils' {
  import { ClassValue } from 'clsx';
  export function cn(...inputs: ClassValue[]): string;
}