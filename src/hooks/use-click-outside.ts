import { RefObject, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
type Handler = (e: Event) => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refObject: RefObject<T>,
  handler: Handler
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = refObject?.current;
      if (!el || el.contains(e.target as Node)) return;

      handler(e);
    };

    // use mousedown or touchstart instead of click event
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    /* upon unmounting, removes the event listeners. */
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, refObject]);
};
