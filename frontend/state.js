import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  userID:"",
});

export const setUserId = (id) => {
  setGlobalState('userID', id);
};

export const clearUserId = () => {
    setGlobalState('userID', "null");
}

export { useGlobalState };