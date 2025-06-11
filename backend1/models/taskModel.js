import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  effort: { type: Number, required: true },
  dueDate: { type: Date, required: true },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
