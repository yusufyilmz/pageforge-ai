"use client";

import type React from "react";
import { type ReactNode, createContext, useContext, useState } from "react";

import { Toaster } from ".";

interface Toast {
  id: string;
  variant: "success" | "danger";
  message: ReactNode;
  action?: ReactNode;
}

interface ToastContextProps {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const ToastProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  // Use the same Toast interface type for the state
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const newToast: Toast = {
      id: Math.random().toString(36).substring(7),
      ...toast,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
      <Toaster toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = "ToastProvider";
export { ToastProvider };
