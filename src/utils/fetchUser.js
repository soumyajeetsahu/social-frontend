export const fetchUser = () => {
  const useInfo = localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

    return useInfo;
};
