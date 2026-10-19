import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export const THEME_KEY = 'aa-theme';
const THEME_COLOR: Record<Theme, string> = { dark: '#0E1512', light: '#ECE9E0' };

/** Runs in <head> before first paint so a saved theme never flashes. */
export const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t==='light'){document.documentElement.setAttribute('data-theme','light');var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content','${THEME_COLOR.light}');}}catch(e){}})();`;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const root = document.documentElement;
    if (next === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', THEME_COLOR[next]);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }, [theme]);

  return { theme, toggle };
};
