import { createContext, useContext, useState } from 'react';
import { Snackbar } from 'react-native-paper';

const SnackContext = createContext({
  hide: () => null,
  show: (message) => null,
  visible: false,
  message: "",
});

export function useSnack() {
  return useContext(SnackContext);
}

export function SnackProvider(props) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const show = (message) => {
    setMessage(message);
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    setMessage("");
  };

  return (
    <SnackContext.Provider
      value={{
        visible,
        message,
        show,
        hide,
      }}
    >
      {props.children}
      {visible && (
        <Snackbar visible={visible} onDismiss={hide}>
          {message}
        </Snackbar>
      )}
    </SnackContext.Provider>
  )
}
