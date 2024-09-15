import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store the current value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from secure local storage by key
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item: any = secureLocalStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return initialValue;
    }
  });

  // Function to set the value in both state and secure local storage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to secure local storage
      secureLocalStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key “${key}”: ", error);
    }
  };

  // Effect to update secure local storage when key or value changes
  useEffect(() => {
    if (window) {
      secureLocalStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
