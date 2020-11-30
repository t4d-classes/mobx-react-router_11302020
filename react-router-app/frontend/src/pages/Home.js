import { LoginForm } from '../components/LoginForm';

const Home = () => {

  const login = (user) => {

    if (!window.__app__) {
      window.__app__ = {};
    }

    window.__app__.userAccessToken = user.accessToken;
    window.localStorage.userRefreshToken = user.refreshToken;
  };

  return (
    <div>
      <h2>Welcome Home!</h2>

      <LoginForm onLogin={login} />
    </div>
  );
};

export default Home;