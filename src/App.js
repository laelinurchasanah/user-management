import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import PostUser from './components/PostUser';
import EditPost from './components/EditPost';
import CommentUser from './components/CommentUser';
import Breadcrumb from './components/Breadcrumb';
import './index.css'

function App() {
  return (
    
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">User List</Link></li>
          <li><Link to="/post">Post User</Link></li>
        </ul>
      </nav> */}

      <Breadcrumb />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:user_id" element={<UserDetail />} />
        <Route path="/post" element={<PostUser />} />
        <Route path="/user/:user_id/edit-post/:post_id" element={<EditPost />} />
        <Route path="/comment" element={<CommentUser />} />
      </Routes>
    </Router>
  );
}

export default App;
