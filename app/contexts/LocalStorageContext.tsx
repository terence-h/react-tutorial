import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocalStorageContextProps<T> {
    storedValue: T | null;
    setValue: (value: T) => void;
    removeValue: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LocalStorageContext = createContext<LocalStorageContextProps<any> | undefined>(undefined);

interface LocalStorageProviderProps<T> {
    storageKey: string;
    children: ReactNode;
    initialValue: T | null;
}

const isLocalStorageAvailable = (): boolean => {
    try {
        const testKey = '__test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        console.warn('LocalStorage is not available:', error);
        return false;
    }
};

export const LocalStorageProvider = <T,>({
    storageKey,
    children,
    initialValue,
}: LocalStorageProviderProps<T>) => {
    const [storedValue, setStoredValue] = useState<T | null>(initialValue);

    useEffect(() => {
        if (isLocalStorageAvailable()) {
            try {
                const item = window.localStorage.getItem(storageKey);
                if (item) {
                    setStoredValue(JSON.parse(item));
                } else {
                    setStoredValue(initialValue);
                }
            } catch (error) {
                console.error(`Error reading localStorage key "${storageKey}":`, error);
                setStoredValue(initialValue);
            }
        } else {
            setStoredValue(initialValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageKey]);

    useEffect(() => {
        if (isLocalStorageAvailable()) {
            try {
                if (storedValue === null) {
                    window.localStorage.removeItem(storageKey);
                } else {
                    window.localStorage.setItem(storageKey, JSON.stringify(storedValue));
                }
            } catch (error) {
                console.error(`Error setting localStorage key "${storageKey}":`, error);
            }
        }
    }, [storageKey, storedValue]);

    useEffect(() => {
        if (!isLocalStorageAvailable()) return;

        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === storageKey) {
                try {
                    const newValue = event.newValue ? JSON.parse(event.newValue) : null;
                    setStoredValue(newValue);
                } catch (error) {
                    console.error(`Error parsing localStorage key "${storageKey}" on storage event:`, error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [storageKey]);

    const setValue = (value: T) => {
        setStoredValue(value);
    };

    const removeValue = () => {
        setStoredValue(null);
    };

    return (
        <LocalStorageContext.Provider value={{ storedValue, setValue, removeValue }}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = <T,>(): LocalStorageContextProps<T> => {
    const context = useContext(LocalStorageContext);
    if (!context) {
        throw new Error('useLocalStorage must be used within a LocalStorageProvider');
    }
    return context;
};