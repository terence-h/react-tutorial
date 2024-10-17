import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state synchronized with localStorage.
 *
 * @param key - The key under which the value is stored in localStorage.
 * @param initialValue - The initial value to use if the key does not exist in localStorage.
 * @returns A stateful value and a function to update it.
 */
export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
    // Function to retrieve the stored value from localStorage
    const readValue = (): T => {
        if (typeof window === 'undefined') {
            // If window is undefined (e.g., during SSR), return the initial value
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            // If the item exists, parse and return it; otherwise, return the initial value
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    // Initialize the state with the value from localStorage or the initial value
    const [storedValue, setStoredValue] = useState<T>(readValue);

    // Update localStorage whenever the state changes
    useEffect(() => {
        if (typeof window === 'undefined') {
            console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`);
            return;
        }

        try {
            const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    // Optionally, listen for changes to localStorage from other tabs/windows
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key && event.storageArea === window.localStorage) {
                setStoredValue(event.newValue ? (JSON.parse(event.newValue) as T) : initialValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, initialValue]);

    return [storedValue, setStoredValue];
}
