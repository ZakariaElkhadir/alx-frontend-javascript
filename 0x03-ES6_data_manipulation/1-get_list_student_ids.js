function getListStudenIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }

  return arg.map((item) => item.id);
}
export default getListStudenIds;
