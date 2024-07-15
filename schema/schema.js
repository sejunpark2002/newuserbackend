import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: { type: String, required: [true, 'Please add id field'] },
  name: { type: String, required: [true, 'Please add id field'] },
  email: { type: String, required: [true, 'Please add id field'] },
  phone: { type: String, required: [true, 'Please add id field'] },
  imageUrl: { type: String, required: [true, 'Please add id field'] },
  imagePath:{ type: String, required: [true, 'Please add id field'] },
  timeCreated:{ type: Number, required: [true, 'Please add id field'] }
})

export default mongoose.model('Users', userSchema);