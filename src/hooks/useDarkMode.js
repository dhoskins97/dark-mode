import React, { useState , useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(darkModeEnabled, false);
    const 

    useEffect( () => {
        darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    })




};