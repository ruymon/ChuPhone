import {useContext} from "react";
import {PlayStoreContext} from "../contexts/PlayStoreContext";

export function usePlayStore() {
  const ctx = useContext(PlayStoreContext);

  return ctx;
}
