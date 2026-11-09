import { useCallback, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = useCallback((content) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return { isOpen, modalContent, openModal, closeModal };
}
