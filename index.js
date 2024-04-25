import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

//express app
const app = express();
const port = 5500;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public'))); //maybe fix this? don't need to put in public folder

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;
db.on('error', console.error.bind(console.log, 'MongoDB connection error:'));

//define task schema
const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    dueDate: { type: Date, default: null },
    status: { type: String, enum: ['To Do', 'In Progress', 'Completed'], default: 'To Do' },
  });
const Task = mongoose.model('Task', taskSchema);

//routes
app.get("/", (req, res) => {
    // console.log(__dirname + "/front.html");
    res.sendFile(__dirname + "/front.html");
});

app.post("/tasks", async (req, res) => {
    try {
        const { name, description, dueDate, status } = req.body;
        const task = new Task({ name, description, dueDate, status});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.put('/', async (req, res) => {
    try {
        const taskId = req.params.id;
        const { name, description, dueDate, status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, {
            name, 
            description,
            dueDate,
            status
        }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/', async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})