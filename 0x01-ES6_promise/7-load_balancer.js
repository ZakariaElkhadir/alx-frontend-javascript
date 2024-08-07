/**
 * Function that implements a load balancer for downloading files from China and the US.
 * @param {Promise} chinaDownload - The promise representing the download from China.
 * @param {Promise} USDownload - The promise representing the download from the US.
 * @returns {Promise} - A promise that resolves or rejects with the result of the fastest download.
 */
function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
export default loadBalancer;
