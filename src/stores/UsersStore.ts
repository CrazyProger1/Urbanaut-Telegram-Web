import { makeAutoObservable } from "mobx";

class UsersStore {
    users = [

    ];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new UsersStore();
