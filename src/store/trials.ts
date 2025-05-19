import { atom } from 'nanostores';

export interface Trial {
  id: string;
  title: string;
  description: string;
  slug: string;
}

// Lista dostępnych prób magicznych
export const trialsData: Trial[] = [
  {
    id: 'anti-spam',
    title: 'Anti-Spam Charm',
    description: 'Wykrywa, czy wiadomość jest spamem.',
    slug: 'anti-spam'
  },
  {
    id: 'sentimentus-revealo',
    title: 'Sentimentus Revealo',
    description: 'Klasyfikuje sentyment jako pozytywny, neutralny lub negatywny.',
    slug: 'sentiment'
  },
  {
    id: 'promptus-quadratum',
    title: 'Promptus Quadratum',
    description: 'Sprawdza, czy Twój prompt zawiera wszystkie cztery wymagane elementy.',
    slug: 'prompt-elements'
  }
];

// Store dla aktualnych wyników
export const resultStore = atom<any>(null);

// Store dla stanu ładowania
export const loadingStore = atom<boolean>(false);

// Store dla błędów
export const errorStore = atom<string | null>(null);

// Funkcja resetująca stan
export function resetState() {
  resultStore.set(null);
  loadingStore.set(false);
  errorStore.set(null);
}
