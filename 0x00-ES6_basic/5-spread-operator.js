export default function concatArrays(array1, array2, string) {
  const strArray = string.split('');
  const combinedArray = array1.concat(array2, strArray);
  return combinedArray;
}
