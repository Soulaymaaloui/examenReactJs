import { useState } from "react";
import "./CarList.css";

export default function CarList() {
  const [cars, setCars] = useState([
    { id: 1, code: "1", model: "Fiat" },
    { id: 2, code: "2", model: "Renault" },
    { id: 3, code: "3", model: "BMW" },
  ]);
  const [newCode, setNewCode] = useState("");
  const [newModel, setNewModel] = useState("");
  const [editId, setEditId] = useState(null);
  const [editCode, setEditCode] = useState("");
  const [editModel, setEditModel] = useState("");

  const addCar = () => {
    if (newCode.trim() && newModel.trim()) {
      setCars([
        ...cars,
        { id: cars.length + 1, code: newCode, model: newModel },
      ]);
      setNewCode("");
      setNewModel("");
    }
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const startEdit = (id, code, model) => {
    setEditId(id);
    setEditCode(code);
    setEditModel(model);
  };

  const updateCar = () => {
    setCars(
      cars.map((car) =>
        car.id === editId
          ? { id: editId, code: editCode, model: editModel }
          : car
      )
    );
    setEditId(null);
    setEditCode("");
    setEditModel("");
  };

  return (
    <div className="container">
      <h2>List of Cars</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Model</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.code}</td>
              <td>{car.model}</td>
              <td>
                <button
                  onClick={() => startEdit(car.id, car.code, car.model)}
                  className="button edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCar(car.id)}
                  className="button delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setEditId(null)} className="button add">
        Add Car
      </button>

      {editId !== null ? (
        <div className="update-container">
          <h3 className="update-title">Update Car</h3>
          <input
            type="text"
            value={editCode}
            onChange={(e) => setEditCode(e.target.value)}
            className="input"
            placeholder="Enter code"
          />
          <input
            type="text"
            value={editModel}
            onChange={(e) => setEditModel(e.target.value)}
            className="input"
            placeholder="Enter Model"
          />
          <button onClick={updateCar} className="button update">
            Update Car
          </button>
        </div>
      ) : (
        <div className="update-container">
          <h3 className="update-title">Add New Car</h3>
          <input
            type="text"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            className="input"
            placeholder="Enter code"
          />
          <input
            type="text"
            value={newModel}
            onChange={(e) => setNewModel(e.target.value)}
            className="input"
            placeholder="Enter Model"
          />
          <button onClick={addCar} className="button add">
            Add New Car
          </button>
        </div>
      )}

      <button className="button add">List Of Cars</button>
    </div>
  );
}