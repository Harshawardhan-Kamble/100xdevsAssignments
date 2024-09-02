import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: {
    notification: 3,
    messaging: 8,
    jobs: 7,
    network: 10,
  },
});

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const fullnotifications=get(notificationAtom)
    const {messaging,jobs,network,notification}=fullnotifications
    return network+messaging+jobs+notification
  },
});
