import { makeAutoObservable } from "mobx";

class UIStore {
  currentPage: string = "/";
  currentTheme: string = "dark";
  footerHeight: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: string) {
    this.currentPage = page;
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
  }

  setFooterHeight(height: number) {
    this.footerHeight = height;
  }
}

export default new UIStore();
