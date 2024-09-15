import useLocalStorage from "../hooks/useLocalStorage";
import { providerFactory } from "../lib/providerFactory";
import { Keys } from "../types";

const [KeysProvider, useKeys] = providerFactory(() => {
  const [keys, setKeys] = useLocalStorage<Keys | null>("kingdom_keys", null);

  return {
    keys,
    setKeys,
  };
});

export { KeysProvider, useKeys };
