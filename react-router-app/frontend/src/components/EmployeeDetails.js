import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { authAxios } from '../services/authAxios';

export const EmployeeDetails = () => {

  const params = useParams();
  const [ employee, setEmployee ] = useState({});

  useEffect(() => {

    authAxios.get(
      '/api/employees/' + encodeURIComponent(params.employeeId),
    ).then(response => {
      setEmployee(response.data);
    });

  }, [ params.employeeId ]);

  return (
    <ul>
      <li>First Name: {employee.firstName}</li>
      <li>Last Name: {employee.lastName}</li>
      <li>Address: {employee.address}</li>
      <li>City: {employee.city}</li>
      <li>Postal Code: {employee.postalCode}</li>
    </ul>
  );

};