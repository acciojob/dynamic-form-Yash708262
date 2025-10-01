import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([]);

  // Add new field
  const addField = () => {
    const newField = { id: Date.now(), value: "" }; // unique id
    setFields([...fields, newField]);
  };

  // Update field value
  const updateField = (id, newValue) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, value: newValue } : field
    ));
  };

  // Delete field
  const deleteField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <button className="add" onClick={addField}>Add field</button>

      {fields.length === 0 ? (
        <p>No fields in the form</p>
      ) : (
        fields.map(field => (
          <div key={field.id}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => updateField(field.id, e.target.value)}
            />
            <button
              className="delete"
              onClick={() => deleteField(field.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
