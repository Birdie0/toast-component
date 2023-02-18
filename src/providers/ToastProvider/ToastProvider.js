import { createContext, useCallback, useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ variant, message }) {
    setToasts([...toasts, { id: Date.now(), variant, message }]);
  }

  function dropToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const handleEscape = useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dropToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
