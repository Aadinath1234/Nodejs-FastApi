// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Task = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     effort: "",
//     dueDate: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [loading, setLoading] = useState(false);

//   const api = axios.create({
//     baseURL: "http://localhost:5000/api", // Node.js backend1
//     headers: {
//       Authorization: `Bearer ${user?.token}`,
//     },
//   });

//   useEffect(() => {
//     if (!user?.token) {
//       navigate("/");
//     } else {
//       fetchTasks();
//     }
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const res = await api.get("/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.error("Failed to fetch tasks", err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { title, effort, dueDate } = formData;

//     if (!title || isNaN(effort) || new Date(dueDate) < new Date()) {
//       alert("Please enter a valid title, numeric effort, and future due date");
//       return;
//     }

//     try {
//       setLoading(true);
//       if (editId) {
//         await api.put(`/tasks/${editId}`, formData);
//       } else {
//         await api.post("/tasks", { ...formData, userId: user._id });
//       }
//       setFormData({ title: "", description: "", effort: "", dueDate: "" });
//       setEditId(null);
//       fetchTasks();
//     } catch (err) {
//       alert("Task submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/tasks/${id}`);
//       fetchTasks();
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   const handleEdit = (task) => {
//     setFormData({
//       title: task.title,
//       description: task.description,
//       effort: task.effort,
//       dueDate: task.dueDate.split("T")[0],
//     });
//     setEditId(task._id);
//   };

//   const handleExport = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/export/excel?user_id=${user._id}`,
//         { responseType: "blob" }
//       );
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "tasks.xlsx");
//       document.body.appendChild(link);
//       link.click();
//     } catch (err) {
//       alert("Export failed");
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Manage Tasks</h2>

//       <form onSubmit={handleSubmit} className="space-y-4 mb-6">
//         <input
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Task Title"
//           required
//           className="input w-full"
//         />
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="textarea w-full"
//         />
//         <input
//           name="effort"
//           type="number"
//           value={formData.effort}
//           onChange={handleChange}
//           placeholder="Effort in days"
//           required
//           className="input w-full"
//         />
//         <input
//           name="dueDate"
//           type="date"
//           value={formData.dueDate}
//           onChange={handleChange}
//           required
//           className="input w-full"
//         />
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? "Saving..." : editId ? "Update Task" : "Create Task"}
//         </button>
//       </form>

//       <div className="mb-4 text-right">
//         <button onClick={handleExport} className="btn btn-secondary">
//           Export to Excel
//         </button>
//       </div>

//       <div>
//         {tasks.map((task) => (
//           <div
//             key={task._id}
//             className="border p-4 rounded mb-2 flex justify-between items-center"
//           >
//             <div>
//               <h3 className="font-bold">{task.title}</h3>
//               <p>{task.description}</p>
//               <p>
//                 <strong>Effort:</strong> {task.effort} day(s)
//               </p>
//               <p>
//                 <strong>Due:</strong>{" "}
//                 {new Date(task.dueDate).toLocaleDateString()}
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <button onClick={() => handleEdit(task)} className="btn btn-sm">
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(task._id)}
//                 className="btn btn-sm btn-error"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Task;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    effort: '',
    dueDate: '',
  });
  const [editId, setEditId] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Node.js backend1
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

  useEffect(() => {
    if (!user?.token) {
      navigate('/');
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      // Pass userId as query param so backend filters tasks for this user
      const res = await api.get('/tasks', { params: { userId: user._id } });
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, effort, dueDate } = formData;

    if (!title || isNaN(effort) || new Date(dueDate) < new Date()) {
      alert('Please enter a valid title, numeric effort, and future due date');
      return;
    }

    try {
      setLoading(true);
      if (editId) {
        await api.put(`/tasks/${editId}`, formData);
      } else {
        // Include userId on create
        await api.post('/tasks', { ...formData, userId: user._id });
      }
      setFormData({ title: '', description: '', effort: '', dueDate: '' });
      setEditId(null);
      fetchTasks();
    } catch (err) {
      alert('Task submission failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      description: task.description,
      effort: task.effort,
      dueDate: task.dueDate.split('T')[0],
    });
    setEditId(task._id);
  };

  const handleExport = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/export/excel?user_id=${user._id}`, // Django/FastAPI backend
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tasks.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      alert('Export failed');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Tasks</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          className="input w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea w-full"
        />
        <input
          name="effort"
          type="number"
          value={formData.effort}
          onChange={handleChange}
          placeholder="Effort in days"
          required
          className="input w-full"
        />
        <input
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : editId ? 'Update Task' : 'Create Task'}
        </button>
      </form>

      <div className="mb-4 text-right">
        <button onClick={handleExport} className="btn btn-secondary">
          Export to Excel
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border p-4 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>
                <strong>Effort:</strong> {task.effort} day(s)
              </p>
              <p>
                <strong>Due:</strong>{' '}
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(task)} className="btn btn-sm">
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
