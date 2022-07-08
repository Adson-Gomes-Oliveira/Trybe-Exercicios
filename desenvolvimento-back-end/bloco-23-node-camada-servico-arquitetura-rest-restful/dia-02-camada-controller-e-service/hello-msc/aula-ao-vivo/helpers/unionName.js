const unionName = (data) => {
  const fullname = {
    ...data,
    fullname: `${data.first_name} ${data.last_name}`
  }

  return fullname;
}

module.exports = { unionName }
