const pagination = (page) => {
  if (page === 1) return 0;

  page = page - 1;
  const byTen = page * 10;
  const byTwo = byTen * 2;

  return byTwo;
}

module.exports = pagination;
