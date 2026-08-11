import products from "./products";
let firstAttempt = true;

export function fetchProducts(type = "success") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (type) {
        case "success":
          resolve(products);

          break;

        case "error":
          //  reject(new Error("Internal Server Error"));

          setTimeout(() => {
            if (type === "error" && firstAttempt) {
              firstAttempt = false;
              reject(new Error("Internal Server Error"));
            } else {
              firstAttempt = true;
              resolve(products);
            }
          }, 2000);

          break;

        case "timeout":
          reject(new Error("Request Timeout"));

          break;

        case "empty":
          resolve([]);

          break;

        default:
          resolve(products);
      }
    }, 2000);
  });
}
