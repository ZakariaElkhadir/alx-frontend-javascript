export default function getResponseFromAPI() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Success!')
      } else {
        reject(new Error('Failed!'));
      }
    }, 1000);
  });
}