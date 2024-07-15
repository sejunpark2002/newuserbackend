
import userSchema from "../schema/schema.js";

export const getAllUserInfo = async (req, res) => {
  console.log('Get All User - Backend');
  
  try {
    const result = await userSchema.find();
    res.json({message: 'Succesfully added', statusCode: 200, result})
  } catch (err) {
    res.json({error: err});
  }
}

export const addUser =  async(req, res) => {
  const newUser = new userSchema(req.body);
  await newUser.save();
  
  res.json({ message: 'Succesfully added', statusCode: 200 })
}

export const deleteUser = async(req, res) => {
  const {id} = req.query;
  console.log(id)
  await userSchema.findOneAndDelete({ id })
  res.json ({message:'Deleted!', statusCode: 200})
}

export const updateUser = async(req, res) => {
  const {id,name,email,phone,imageUrl,imagePath,timeCreated} = req.body;
  await userSchema.findOneAndUpdate({id},{name,email,phone,imageUrl,imagePath,timeCreated})
  res.json({ message: 'Succesfully upated', statusCode: 200 })
}

