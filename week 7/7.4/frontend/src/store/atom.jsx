import axios from "axios";
import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector(
    {
      get:(async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        notification: 0,
        messaging: 0,
        jobs: 0,
        network: 0,
      };
    }
  })}),
});

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const fullnotifications = get(notificationAtom);
    const { messaging, jobs, network, notification } = fullnotifications;
    return network + messaging + jobs + notification;
  },
});
