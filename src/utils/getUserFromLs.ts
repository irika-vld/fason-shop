export const getUserFromLS = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};
