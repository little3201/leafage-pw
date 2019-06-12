import axios from "@/api";

export const getUserInfo = userId => {
  return axios
		.request({
        url: "/user/1",
        method: "GET"
    })
};
export const sign = ({ username, password }) => {
	const params = {
    grant_type: "password",
    username: username,
    password: password,
    client_id: username,
    client_secret: password
	}
	const resp = axios
	  .request({
	    url: "/oauth/token",
	    method: "POST",
	    params
	  })
  return resp;
};