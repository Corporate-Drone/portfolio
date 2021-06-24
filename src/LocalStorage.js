export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null || serializedState === false) {
        return false;
      } else if (serializedState === true) {
          return true;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};
  
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };
