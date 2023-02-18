import { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ variant, message }) {
    setToasts([...toasts, { id: Date.now(), variant, message }]);
  }

  function dropToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, dropToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
