const div = (n1, n2) => {
  if (n2 === 0) throw new Error("Can't be done");

  const result = n1 / n2;

  return result;
}

try {
  const result = div(2, 0)
  console.log(result);
} catch (error) {
  console.log(error); 
}