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
};
