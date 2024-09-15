import useLocalStorage from "../hooks/useLocalstorage";
import { providerFactory } from "../lib/providerFactory";

const [KeysProvider, useKeys] = providerFactory(() => {
  const [keys, setKeys] = useLocalStorage<string | null>("kingdom_keys", null);

  return {
    keys,
    setKeys,
  };
});

export { KeysProvider, useKeys };
