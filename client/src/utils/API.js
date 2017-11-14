import axios from "axios";

export default {
  // Gets all custs
  getCusts: function() {
    return axios.get("/api/custs");
  },
  // Gets the custs with the given id
  getCust: function(id) {
    return axios.get("/api/custs/" + id);
  },
  // Deletes the cust with the given id
  deleteCust: function(id) {
    return axios.delete("/api/custs/" + id);
  },
  // Saves a cust to the database
  saveCust: function(custData) {
    return axios.post("/api/custs", custData);
  }
  // Gets all Accounts
  getAccounts: function() {
    return axios.get("/api/accounts");
  },
  // Gets the Account with the given id
  getAccount: function(id) {
    return axios.get("/api/accounts/" + id);
  },
  // Deletes the Account with the given id
  deleteAccount: function(id) {
    return axios.delete("/api/accounts/" + id);
  },
  // Saves a Account to the database
  saveAccount: function(AccountData) {
    return axios.post("/api/accounts", AccountData);
  }
    // // Saves a Account to the database from a different PORT
    // saveAccount: function(AccountData) {
    // return axios.post(":3001/api/accounts", AccountData);
    // }

};
