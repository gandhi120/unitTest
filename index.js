function multiply(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("error occured");
      } else {
        console.log("check90");

        resolve("chocolate");
      }
    }, 100);
  });
}

module.exports = multiply;
