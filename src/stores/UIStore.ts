import { makeAutoObservable } from "mobx";

class UIStore {
  currentPage: string = "/objects";

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: string) {
    this.currentPage = page;
  }
}

export default new UIStore();
