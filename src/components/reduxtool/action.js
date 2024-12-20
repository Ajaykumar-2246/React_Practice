import { counterActions } from "./reducer";

export const firstThunk = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("http://localhost:4000/advancedapi/userget", {
        method: "GET",
      });
      let result = await res.json();
      console.log(result);
      dispatch(counterActions.userData({ data: result.message }));
    } catch (err) {
      console.log("error is", err);
    }
  };
};

export const loginAction = (userDetails) => {
  return async (dispatch) => {
    try {
      let res = await fetch("http://localhost:4000/advancedapi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      let result = await res.json();
      if (result.message === "Login Successful") {
        localStorage.setItem("token", "Bearer " + result.token);
        dispatch(counterActions.logUser(true));
        localStorage.setItem("loggedIn", true);
        alert("login ")
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      console.log("Error occurred during login:", err);
    }
  };
};
