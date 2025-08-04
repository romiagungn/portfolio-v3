export const applyTheme = (theme: 'light' | 'dark' | 'system') => {
  const root = window.document.documentElement;

  const setClass = (mode: 'light' | 'dark') => {
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
  };

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setClass(systemTheme);
  } else {
    setClass(theme);
  }
};
