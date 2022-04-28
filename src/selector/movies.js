export const saveToLocalStorage = (state) => {
    // const serializeState = JSON.stringify(state)
    // console.log('save', serializeState)
    // localStorage.setItem('persistantState', serializeState)
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
      } catch (e) {
        console.warn(e);
      }
}

export const loadFromLocalStorage = () => {
    // const serializeState = localStorage.getItem('persistantState') || []
    // console.log('load', serializeState)
    // return JSON.parse(serializeState)
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
      } catch (e) {
        console.warn(e);
        return undefined;
      }
}