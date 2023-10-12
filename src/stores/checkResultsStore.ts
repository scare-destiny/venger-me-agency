// src/stores/checkResultsStore.ts
import { atom } from 'nanostores';

export const checkResultsStore = atom([]);

export function updateCheckResults(newResults) {
  checkResultsStore.set(newResults);
}
