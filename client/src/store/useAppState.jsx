import { create } from 'zustand'



const useAppState = create((set) => ({
    pos: true,
    setPosFalse: () => set(() => ({ pos: false })),
    setPosTrue: () => set(() => ({ pos: true }))
}
)
);


export default useAppState;
