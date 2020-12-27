const UserValidation = (val) => {
  const error = {};

  if (!val.name || val.name === "") {
    error.name = "Name Is Required!";
  }
  if (!val.age || val.age === "") {
    error.age = "Age Is Required!";
  }
  if (!val.address || val.address === "") {
    error.address = "Address Is Required!";
  }

  return error;
};
export default UserValidation;
