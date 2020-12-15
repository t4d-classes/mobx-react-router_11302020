import { NavLink, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';

import Home from './pages/Home';
import CalcTool from './pages/CalcTool';
import ColorTool from './pages/ColorTool';
import CarTool from './pages/CarTool';

const activeStyle = {
  fontWeight: 'bold',
};

export default function App() {
  return (
    <Layout>
      <Header>
        <h1>The Tool App</h1>
      </Header>
      <Menu>
        <ul>
          <li><NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink></li>
          <li><NavLink to="/calctool" activeStyle={activeStyle}>Calc Tool</NavLink></li>
          <li><NavLink to="/colortool" activeStyle={activeStyle}>Color Tool</NavLink></li>
          <li><NavLink to="/cartool" activeStyle={activeStyle}>Car Tool</NavLink></li>
        </ul>
      </Menu>
      <Content>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calctool">
            <CalcTool />
          </Route>
          <Route path="/colortool">
            <ColorTool />
          </Route>
          <Route path="/cartool">
            <CarTool />
          </Route>
        </Switch>
      </Content>
      <Sidebar>
        sidebar
      </Sidebar>
      <Footer>
        <small>&copy;{new Date().getFullYear()} A Cool Company, Inc.</small>
      </Footer>
    </Layout>
  );
}
