import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import TaskCreate from './pages/TaskCreate';
import TaskDetail from './pages/TaskDetail';
import Reports from './pages/Reports';
import TeamManagement from './pages/TeamManagement';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/management",
    element:<Management/>
  },
  {
    path:"/taskcreate",
    element:<TaskCreate/>
  },
  {
    path:"/taskdetail",
    element:<TaskDetail/>
  },
  {
    path:"/reports",
    element:<Reports/>
  },
  {
    path:"/teamManage",
    element:<TeamManagement/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

