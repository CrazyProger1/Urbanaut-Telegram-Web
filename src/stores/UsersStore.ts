import { makeAutoObservable } from "mobx";

class UsersStore {
  friends = [
    {
      name: "superuser",
      photo: new URL("/photo.jpg", import.meta.url).href,
    },
    {
      name: "topuser",
      photo: new URL("/photo.jpg", import.meta.url).href,
    },
    {
      name: "thirduser",
      photo: new URL("/photo.jpg", import.meta.url).href,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UsersStore();
