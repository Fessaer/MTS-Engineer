import React, {useState} from 'react';

const initialState = {
  data: [],
};

export const Context = React.createContext();

const Store = ({children}) => {
  const [inState, inSetState, textInput, onChangeText, getText, setText] =
    useState(initialState);

  return (
    <Context.Provider
      value={[inState, inSetState, textInput, onChangeText, getText, setText]}>
      {children}
    </Context.Provider>
  );
};
export default Store;
