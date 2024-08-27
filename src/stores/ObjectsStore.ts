import { makeAutoObservable } from "mobx";

class UIStore {
  objects = [
    {
      name: "Test",
      description: "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a",
      photo: "https://journalistsresource.org/wp-content/uploads/2018/05/Abandoned-buildings.jpg",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UIStore();
