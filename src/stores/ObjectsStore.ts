import { makeAutoObservable } from "mobx";

class UIStore {
  objects = [
    {
      name: "test",
      description: "TEST",
      photo: "test",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UIStore();
