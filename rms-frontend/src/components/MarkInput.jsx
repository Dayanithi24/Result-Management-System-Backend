import React, { useState } from 'react';

function MarkInput() {
  const [marks, setMarks] = useState([{ subject: '', mark: '' }]); // State to store marks

  // Function to handle adding a new input box
  const addInput = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setMarks([...marks, { subject: '', mark: '' }]);
  };

  // Function to handle removing an input box
  const removeInput = (index) => {
    const updatedMarks = marks.filter((_, i) => i !== index);
    setMarks(updatedMarks);
  };

  // Function to handle input change for subject name
  const handleSubjectChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].subject = event.target.value;
    setMarks(updatedMarks);
  };

  // Function to handle input change for mark
  const handleMarkChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].mark = event.target.value;
    setMarks(updatedMarks);
  };

  return (
    <div>
      {/* Render input boxes for each mark */}
      {marks.map((mark, index) => (
        <div key={index} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Subject"
            name='cname'
            value={mark.subject}
            onChange={(event) => handleSubjectChange(index, event)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Grade"
            name='grade'
            value={mark.mark}
            onChange={(event) => handleMarkChange(index, event)}
          />
          <div className="input-group-append">
            {/* Button to remove input box */}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => removeInput(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {/* Button to add new input box */}
      <button className="btn btn-primary" onClick={addInput}>
        Add Mark
      </button>
    </div>
  );
}

export default MarkInput;
