import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./App.css";

const empty = { id: null, name: "", email: "", role: "Developer", status: "Active" };

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Bhanu", email: "bhanu@gmail.com", role: "Developer", status: "Active" },
    { id: 2, name: "Deva", email: "deva@gmail.com", role: "Designer", status: "Inactive" },
  ]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(empty);

  const openAdd = () => {
    setForm(empty);
    setShow(true);
  };

  const openEdit = (user) => {
    setForm(user);
    setShow(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)));
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setShow(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 page-header">
        <h3>
          <i className="bi bi-people-fill me-2"></i>User CRUD
        </h3>
        <button className="btn btn-primary" onClick={openAdd}>
          <i className="bi bi-plus-lg me-1"></i>Add User
        </button>
      </div>

      <div className="table-card">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar">{u.name.charAt(0).toUpperCase()}</div>
                    <div>
                      <div className="fw-semibold">{u.name}</div>
                      <div className="user-email">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="role-text">{u.role}</span>
                </td>
                <td>
                  <span className={u.status === "Active" ? "badge-active" : "badge-inactive"}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-action me-2"
                    onClick={() => openEdit(u)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-action"
                    onClick={() => handleDelete(u.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{form.id ? "Edit User" : "Add User"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control mb-3"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <select
              className="form-select mb-3"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option>Developer</option>
              <option>Designer</option>
              <option>Tester</option>
              <option>Manager</option>
            </select>
            <select
              className="form-select mb-3"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button className="btn btn-success w-100">
              <i className={`bi ${form.id ? "bi-check-lg" : "bi-save"} me-1`}></i>
              {form.id ? "Update" : "Save"}
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;