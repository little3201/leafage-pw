import axios from "@/api";
import { Message } from "iview";

export function sign(username, password) {
  axios
    .request({
      url: "/oauth/token",
      method: "POST",
      params: {
        grant_type: "password",
        username: username,
        password: password,
        client_id: username,
        client_secret: password
      }
    })
    // handle success
    .then(response => {
      Message.success(response.data);
      this.$router.push({
        name: "main"
      });
    })
    // handle error
    .catch(error => {
      Message.error(error.message);
    });
}
