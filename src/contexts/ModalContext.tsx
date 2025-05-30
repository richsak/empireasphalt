"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
  isEstimateModalOpen: boolean;
  openEstimateModal: () => void;
  closeEstimateModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const openEstimateModal = () => setIsEstimateModalOpen(true);
  const closeEstimateModal = () => setIsEstimateModalOpen(false);

  return (
    <ModalContext.Provider value={{ isEstimateModalOpen, openEstimateModal, closeEstimateModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};