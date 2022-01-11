export const isLoggedIn = () => {
  if (typeof localStorage === "undefined") {
    return;
  }
  const token = localStorage.getItem("token");
  return token && token.length > 10;
};
export const getAuthToken = () => {
  if (typeof localStorage === "undefined") {
    return;
  }
  return localStorage.getItem("token");
};

export const setAuthToken = (token) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  return localStorage.setItem("token", token);
};

export const clearLogin = () => {
  if (typeof localStorage === "undefined") {
    return;
  }
  return localStorage.clear();
};

export const getUser = () => {
  if (typeof localStorage === "undefined") {
    return;
  }

  let user = {};
  try {
    user = localStorage.getItem("user");
    user = JSON.parse(user);
  } catch (e) {
    user = {};
  }
  return user;
};
export const setUser = (userData) => {
  if (typeof localStorage === "undefined") {
    return;
  }

  let user = "";
  if (userData) {
    user = JSON.stringify(userData);
  }
  return localStorage.setItem("user", user);
};

export const setPaymentReference = (p_id) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem("p_id", p_id);
};

export const getPaymentReference = (p_id) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  return localStorage.getItem("p_id");
};

export const htmlToString = (str) => {
  return str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
};
