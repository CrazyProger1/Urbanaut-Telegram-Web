import { makeAutoObservable } from "mobx";

class UIStore {
  objects = [
    {
      name: "Abandoned Factory",
      description: "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a",
      photo:
        "https://journalistsresource.org/wp-content/uploads/2018/05/Abandoned-buildings.jpg",
    },
    {
      name: "Abandoned Building",
      description:
        "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
        "https://c8.alamy.com/comp/HH0NF9/abandoned-building-exterior-HH0NF9.jpg",
    },
    {
      name: "Some Military Facility",
      description:
        "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
        "https://t4.ftcdn.net/jpg/04/74/75/25/360_F_474752545_MpPpL8uMkCviZKBswbLbdRcgo6PXMwwt.jpg",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UIStore();
