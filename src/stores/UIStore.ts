import { makeAutoObservable } from "mobx";

class UIStore {
  currentPage: string = "/";
  currentTheme: string = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: string) {
    this.currentPage = page;
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
  }
}

export default new UIStore();
