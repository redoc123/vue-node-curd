import Repository from "./BaseRpository.js";

const resource = "/user";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getById(id) {
    return Repository.get(`${resource}/${id}`);
  },

  createP(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
