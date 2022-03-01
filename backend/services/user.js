import User from "../models/user.js";

const isChanges = async (user, password) => {


  
  let changes = false;
  const userData = await User.findOne({
    name: user.name,
    email: user.email,
    password: password,
    role: user.role,
  });
  return userData ? (changes = true) : changes;
};

export default { isChanges };
