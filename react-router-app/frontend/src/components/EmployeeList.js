import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { authAxios } from '../services/authAxios';

export const EmployeeList = () => {

  const [ employees, setEmployees ] = useState([]);

  useEffect(() => {

    authAxios.get('/api/employees').then(response => {
      setEmployees(response.data);
    });

  }, []);

  return (
    <ul>
      {employees.map(emp => <li key={emp.employeeId}>
        <Link to={"/dashboard/employees/" + emp.employeeId}>
          {emp.firstName} {emp.lastName}
        </Link>
      </li>)}
    </ul>
  )

};