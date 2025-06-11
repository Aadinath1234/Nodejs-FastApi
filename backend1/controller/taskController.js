import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
  try {
    const { userId, title, description, effort, dueDate } = req.body;
    if (!userId || !title || effort == null || !dueDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const task = new Task({ userId, title, description, effort, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: 'UserId required' });

    const tasks = await Task.find({ userId }).sort({ dueDate: 1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updates = req.body;

    const task = await Task.findByIdAndUpdate(taskId, updates, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByIdAndDelete(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
