import React, { useEffect, useState, useCallback } from 'react';

let toastId = 0;
const listeners = new Set();

export function toast(message, type = 'success') {
  const id = ++toastId;
  listeners.forEach(fn => fn({ id, message, type }));
  return id;
}

export function dismissToast(id) {
  listeners.forEach(fn => fn({ id, dismiss: true }));
}

const ToastContainer = () => {
  const [items, setItems] = useState([]);

  const add = useCallback((item) => {
    if (item.dismiss) {
      setItems(prev => prev.filter(t => t.id !== item.id));
      return;
    }
    setItems(prev => [...prev, { ...item, leaving: false }]);
    setTimeout(() => {
      setItems(prev => prev.map(t => t.id === item.id ? { ...t, leaving: true } : t));
      setTimeout(() => setItems(prev => prev.filter(t => t.id !== item.id)), 300);
    }, 4000);
  }, []);

  useEffect(() => {
    listeners.add(add);
    return () => listeners.delete(add);
  }, [add]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      {items.map(item => (
        <div
          key={item.id}
          className={`pointer-events-auto max-w-sm px-5 py-4 rounded-2xl shadow-lg border backdrop-blur-md transition-all duration-300 ${
            item.leaving ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          } ${
            item.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/40 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
              : 'bg-red-50 dark:bg-red-900/40 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-body-md text-sm">{item.message}</p>
            <button
              onClick={() => dismissToast(item.id)}
              className="opacity-60 hover:opacity-100 transition-opacity shrink-0"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
