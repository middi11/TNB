import './App.css';
import Layout from './hocs/Layout';
import Login from './container/Login';
import Home from './container/Home';
import Dashboard from './container/Dashboard';
import Report from './container/Report';
import Test from './container/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/component.css'
import './container/container.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
