import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/global.provider';

import { changeThemeMode } from '../../context/actions/app.action'

export const useDarkMode = () => {
    const { appState: {mode}, appDispatch } = useContext(GlobalContext);
    const [theme, setTheme] = useState("light" );

    const setMode = mode => {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
      changeThemeMode(mode)(appDispatch)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    return [theme, themeToggler]
};
