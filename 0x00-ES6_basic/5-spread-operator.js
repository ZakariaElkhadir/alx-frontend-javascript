export default function concatArrays(array1, array2, string) {
  const strArray = [...array1, ...array2, ...string];
  return strArray;
}
