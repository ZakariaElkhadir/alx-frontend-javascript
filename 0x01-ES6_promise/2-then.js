function handleResponseFromAPI(promise){
    return Promise((resolve, reject) => {
        promise.then(() => {
            resolve({ status: 200, body: 'success' });
        }).catch(() => {
            reject(new Error());
        });
        console.log('Got a response from the API');
    });
}