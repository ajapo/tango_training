import axios from "axios";

class Users {
  static async all() {
    const resp = await axios.get("/user.json");
    return resp.data;
  }
}

export default Users;
