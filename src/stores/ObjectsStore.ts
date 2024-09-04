import { makeAutoObservable } from "mobx";

class ObjectsStore {
  objects = [
    {
      id: 1,
      name: "Abandoned Factory",
      description: "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a",
      photo:
        "https://journalistsresource.org/wp-content/uploads/2018/05/Abandoned-buildings.jpg",
      rating: 1.2,
    },
    {
      id: 2,
      name: "Abandoned Building",
      description:
        "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
        "https://c8.alamy.com/comp/HH0NF9/abandoned-building-exterior-HH0NF9.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Some Military Facility",
      description:
        "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
        "https://t4.ftcdn.net/jpg/04/74/75/25/360_F_474752545_MpPpL8uMkCviZKBswbLbdRcgo6PXMwwt.jpg",

      rating: 5,
    },
    {
      id: 3,
      name: "Some Military Facility",
      description:
          "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
          "https://the-cradle-media.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/05/ain-al-asad-e1684847368461.jpg",

      rating: 5,
    },
    {
      id: 3,
      name: "Some Military Facility",
      description:
          "lorem ipsum asdkjkad kjalskdkl jaskljd k;lask;dkla;skd l;a dsasda dasdasd asdasdasdas ad",
      photo:
          "https://hips.hearstapps.com/popularmechanics/assets/cm/15/06/768x516/54cfccf3521fd_-_bases-12-xln.jpg",

      rating: 5,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ObjectsStore();
