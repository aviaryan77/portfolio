import { createContext, useContext } from 'react';

export type ViewMode = 'book' | 'scroll';

export interface BookCtx {
  mode: ViewMode;
  /** Jump to a chapter anchor such as "work" or "contact". */
  goTo: (anchor: string) => void;
  openProject: (id: string) => void;
  /** Printed page number of an anchor in the current layout. */
  pageNumberOf: (anchor: string) => number | null;
}

export const BookContext = createContext<BookCtx>({
  mode: 'book',
  goTo: () => {},
  openProject: () => {},
  pageNumberOf: () => null,
});

export const useBook = () => useContext(BookContext);
