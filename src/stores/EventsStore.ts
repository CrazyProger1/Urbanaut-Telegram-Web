import { makeAutoObservable } from "mobx";

class EventsStore {
  events = [
    {
      name: "Super Trip",
      description: "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a",
      photo:
        "https://journalistsresource.org/wp-content/uploads/2018/05/Abandoned-buildings.jpg",
      participants: 10,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new EventsStore();
