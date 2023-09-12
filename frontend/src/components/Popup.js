import React from "react";

export function Popup({ isOpen, name, onClose, children }) {

  React.useEffect(() => {

    if (!isOpen) {
      return
    }

    const closeByEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);

  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`} onClick={handleOverlay}>
      <div className="popup__container">
        {children}
        <button type="button" onClick={onClose} className="popup__button-close" aria-label="Закрыть окно"></button>
      </div>
    </div>
  )
};