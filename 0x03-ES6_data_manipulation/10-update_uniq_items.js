function updateUniqueItems(map, product, quantity) {
    if (!(map instanceof Map)) {
      throw new Error('The first argument must be a Map instance.');
    }
    
    map.forEach((value, key) => {
      if (key === product) {
        if (quantity === 1) {
          map.set(key, quantity * 100);
        } else {
          map.set(key, quantity);
        }
      }
    });
  }
  
  export default updateUniqueItems;
  