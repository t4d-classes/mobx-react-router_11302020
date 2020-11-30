import { Link, Route, useRouteMatch } from 'react-router-dom'; 
import { EmployeeList } from '../components/EmployeeList';
import { EmployeeDetails } from '../components/EmployeeDetails';

const Dashboard = () => {

  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to={url + '/employees'}>Employees</Link></li>
      </ul>

      <div>
        <Route path={path + '/employees'} component={EmployeeList} />
        <Route path={path + '/employees/:employeeId'} component={EmployeeDetails} />
      </div>
    </div>
  );
};

export default Dashboard;