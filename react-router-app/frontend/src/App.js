import { NavLink, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

const activePage = {
  textDecoration: 'underline'
};

function App() {
  return (
    <Layout>
      <Header>
        <h1>App Tool</h1>
      </Header>
      <Menu>
        <ul>
          <li><NavLink to="/" exact activeStyle={activePage}>Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={activePage}>About</NavLink></li>
        </ul>
      </Menu>
      <Content>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Content>
      <Sidebar>
        Sidebar
      </Sidebar>
      <Footer>
        <small>
          &copy; {new Date().getFullYear()} A Cool Company, Inc.
        </small>
      </Footer>
    </Layout>
  );
}

export default App;
