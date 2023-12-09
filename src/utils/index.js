export const co = (p) => {
  return new Promise((resolve) => {
    p.then((res) => {
      resolve([null, res]);
    }).catch((err) => {
      resolve([err, null]);
    });
  });
};
