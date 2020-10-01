import { extendObservable, observable } from "mobx";

/*
UserStore
*/

class UserStore {
  constructor() {
    extendObservable(this, {
      isLoading: false,
      isLoggedIn: false,
      username: "",
      token: null,
      donationAmount: "",
      organization: "",
      date: "",
      time: "",
      connectedWithFB: false,
    });
  }
}

export default new UserStore();
