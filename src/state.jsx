import { create } from 'zustand';

// const useStore = create(() => ({ paw: true, snout: true, fur: true }));
// const paw = useStore.getState().paw; // non-reactive
// const paw = useStore((state) => state.paw); // reactive
// // eslint-disable-next-line no-console
// const unsub1 = useStore.subscribe(console.log);
// useStore.setState({ paw: false });
// unsub1(); // unsubscribe

const useStore = create((set) => ({
  global: 0,
  increase: () => set((state) => ({ global: state.global + 1 })),
  removeAll: () => set({ global: 0 }),
}));

export default useStore;
