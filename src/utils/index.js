export const isEmpty = (obj) => {
  if (obj == null) return true;
  if (typeof obj !== "object") return false;

  return (
    Object.keys(obj).length === 0 &&
    Object.getOwnPropertySymbols(obj).length === 0
  );
};
