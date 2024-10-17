import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface LocalStorageContextType {
    getItem: <T>(key: string) => T | null;
    setItem: <T>(key: string, value: T) => void;
    removeItem: (key: string) => void;
}

export const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

export const useLocalStorage = () => {
    const context = useContext(LocalStorageContext);
    if (!context) {
        throw new Error('useLocalStorage must be used within a LocalStorageProvider');
    }
    return context;
};

export const LocalStorageProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    const [storageState, setStorageState] = useState<{ [key: string]: unknown }>({});

    useEffect(() => {
        const initialState: { [key: string]: unknown } = {};
        Object.keys(localStorage).forEach((key) => {
            try {
                initialState[key] = JSON.parse(localStorage.getItem(key) as string);
            } catch {
                initialState[key] = localStorage.getItem(key);
            }
        });
        setStorageState(initialState);
    }, []);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key) {
                try {
                    const newValue = event.newValue ? JSON.parse(event.newValue) : null;
                    setStorageState((prevState) => ({
                        ...prevState,
                        [event.key!]: newValue,
                    }));
                } catch {
                    setStorageState((prevState) => ({
                        ...prevState,
                        [event.key!]: event.newValue,
                    }));
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const getItem = <T,>(key: string): T | null => {
        return storageState[key] as T | null;
    };

    const setItem = <T,>(key: string, value: T): void => {
        try {
            const valueToStore = JSON.stringify(value);
            localStorage.setItem(key, valueToStore);
            setStorageState((prevState) => ({
                ...prevState,
                [key]: value,
            }));
        } catch (e) {
            console.error(`Error setting localStorage key "${key}":`, e);
        }
    };

    const removeItem = (key: string): void => {
        localStorage.removeItem(key);
        setStorageState((prevState) => {
            const newState = { ...prevState };
            delete newState[key];
            return newState;
        });
    };

    return (
        <LocalStorageContext.Provider value={{ getItem, setItem, removeItem }}>
            {children}
        </LocalStorageContext.Provider>
    );
};