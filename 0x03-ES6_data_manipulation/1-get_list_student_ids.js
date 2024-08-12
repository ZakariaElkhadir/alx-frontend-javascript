function getListStudenIds(arg) {
  // Check if arg is an array
  if (!Array.isArray(arg)) {
    return [];
  }
  // Check if all elements in the array are objects
  return arg.map((item) => item.id);
}
export default getListStudenIds;
