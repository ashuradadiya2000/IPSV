import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HorizontalLayout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';

const Logout = React.lazy(() => import('./pages/Auth/Logout'));
const Login = React.lazy(() => import('./pages/Auth/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CreateWorkspace = React.lazy(() => import('./pages/CreateWorkspace/CreateWorkspace'));
const WatchDetails = React.lazy(() => import('./pages/WatchDetails/WatchDetails'));
const PublicLayout = React.lazy(() => import('./layout/PublicLayout'))
const Annotation = React.lazy(() => import('./pages/Annotation/Annotation'))
const ViewAllWorkspace = React.lazy(() => import('./pages/Dashboard/ViewAll'));
const Register = React.lazy(() => import('./pages/Auth/Register'));

const UsersRegistration = React.lazy(() => import('./pages/Admin/UsersRegistration/UsersRegistration'));
const AdminDashboard = React.lazy(() => import('./pages/Admin/AdminDashboard'));
const ManageUsers = React.lazy(() => import('./pages/Admin/ManageUsers/ManageUsers'));

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/Default.scss';
import { useSelector } from 'react-redux';



function App() {
  const { authenticated } = useSelector((state) => state.auth)

  return (

    <Router>
      <Routes>
        <Route path="create" element={<CreateWorkspace />} />
        <Route path='/auth' element={<PublicLayout />}>
          <Route path="logout" element={<Logout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to='/auth/login' />} />
        </Route>
        <Route path='/' element={<HorizontalLayout />}>
          <Route path="/" element={!authenticated ? <Navigate to='/auth/login' /> : <Navigate to='/admin/dashboard' />} />
          <Route path="ipsdashboard" element={<Dashboard />} />
          <Route path="view-all-workspace" element={<ViewAllWorkspace />} />
          <Route path="create-workspace" element={<CreateWorkspace />} />
          <Route path="watchdetails/:id" element={<WatchDetails />} />
          <Route path="annotation" element={<Annotation />} />
          <Route path="*" element={<Navigate to='/ipsdashboard' />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users-registration" element={<UsersRegistration />} />
          <Route path="manage-user" element={<ManageUsers />} />
          <Route path="*" element={<Navigate to='/admin/dashboard' />} />
        </Route>
      </Routes>
    </Router>


  )
}

export default App
