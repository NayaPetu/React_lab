import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
  const [sortedField, setSortedField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    if (sortedField === field) {
      setAscending(!ascending);
    } else {
      setSortedField(field);
      setAscending(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortedField) return 0;
    return ascending
      ? a[sortedField] > b[sortedField] ? 1 : -1
      : a[sortedField] < b[sortedField] ? 1 : -1;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} onClick={() => handleSort(key)} style={{ cursor: 'pointer' }}>
              {key} {sortedField === key ? (ascending ? '▲' : '▼') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const list = [
    { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
    { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
    { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
    { id: 4, firstName: 'Daniel', lastName: 'Smith', jobTitle: 'Software Engineer', email: 'daniel.smith@example.com' },
    { id: 5, firstName: 'Emily', lastName: 'Johnson', jobTitle: 'Product Manager', email: 'emily.johnson@example.com' },
    { id: 6, firstName: 'Michael', lastName: 'Brown', jobTitle: 'UX Designer', email: 'michael.brown@example.com' },
    { id: 7, firstName: 'Sophia', lastName: 'Martinez', jobTitle: 'Data Analyst', email: 'sophia.martinez@example.com' },
    { id: 8, firstName: 'Liam', lastName: 'Garcia', jobTitle: 'DevOps Engineer', email: 'liam.garcia@example.com' },
    { id: 9, firstName: 'Olivia', lastName: 'Miller', jobTitle: 'HR Specialist', email: 'olivia.miller@example.com' },
    { id: 10, firstName: 'Ethan', lastName: 'Davis', jobTitle: 'Marketing Coordinator', email: 'ethan.davis@example.com' }
  ];

  return (
    <div className="container mt-4">
      <h2>Sortable Table</h2>
      <Table data={list} />
    </div>
  );
};

export default App;
