const div = (n1, n2) => {
  const promise = new Promise((resolve, reject) => {
    if (n2 === 0) reject(new Error("Can't divide with 0"));

    const result = n1/n2;

    resolve(result);
  })

  return promise;
}

div(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));