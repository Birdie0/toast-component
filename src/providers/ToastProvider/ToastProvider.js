import { createContext, useEffect, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ variant, message }) {
    setToasts([...toasts, { id: Date.now(), variant, message }]);
  }

  function dropToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dropToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
