import { create } from "zustand";

type StateAction = {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  modals?: {
    CRUID?: boolean;
  };
};

const initialState: StateAction = {
  openModal: () => {},
  closeModal: () => {},
  modals: {
    CRUID: false,
  },
};

const modalsStore = create<StateAction>((set) => ({
  ...initialState,
  openModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: true } }));
  },
  closeModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: false } }));
  },
}));

export default modalsStore;
