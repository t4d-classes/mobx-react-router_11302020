import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../hooks/useQueryParams';

const About = () => {

  const history = useHistory();

  const navigateHome = () => {
    history.push('/');
  };

  const queryParams = useQueryParams();

  return (
    <>
      <div>
        About us...
      </div>
      <div>
        {queryParams.get('sortOrder')}
      </div>
      <button type="button" onClick={navigateHome}>Go Home</button>
    </>
  );
};

export default About;