import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Defines the shape of the DarkMode context.
 */
interface DarkModeContextProps {
    isDarkMode?: boolean;
    toggleDarkMode: () => void;
}

/**
 * Creates a Context for dark mode with default values.
 */
const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

/**
 * Custom hook to access the DarkModeContext.
 * 
 * @returns {DarkModeContextProps} The dark mode state and toggle function.
 * @throws Will throw an error if used outside of DarkModeProvider.
 */
export const useDarkMode = (): DarkModeContextProps => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

/**
 * Props for the DarkModeProvider component.
 */
interface DarkModeProviderProps {
    children: ReactNode;
}

/**
 * Provider component that manages and provides dark mode state to its children.
 * 
 * @param {DarkModeProviderProps} props - The children components.
 * @returns {JSX.Element} The provider wrapping its children.
 */
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    // const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    //     // Initialize state from localStorage if available
    //     if (typeof window !== 'undefined') {
    //         const savedTheme = localStorage.getItem('theme');
    //         return savedTheme === 'dark';
    //     }
    //     return false;
    // });
    const [isDarkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    /**
     * Effect to add or remove the 'dark' class from the document body based on isDarkMode.
     */
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    /**
     * Effect to synchronize the dark mode state with localStorage on mount.
     */
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark');
        } else {
            setDarkMode(false);
            document.body.classList.remove('dark');
        }
    }, []);

    /**
     * Toggles the dark mode state and updates localStorage accordingly.
     */
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            if (newMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            return newMode;
        });
    };
    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {isDarkMode !== undefined && children}
        </DarkModeContext.Provider>
    );
};