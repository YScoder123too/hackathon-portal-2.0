import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css';
import Logo from './Logo';
import { logout } from '../../features/auth/authSlice';

const dashboardPathByRole = {
  admin: '/admin/dashboard',
  judge: '/judge/dashboard',
  participant: '/participant/dashboard',
};

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const dashboardPath = user?.role ? dashboardPathByRole[user.role] : '/';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <Logo size={40} />
          <div className="navbar-brand-text">
            <span className="brand-name">CODWAYS</span>
            <span className="brand-tagline">Hackathon Portal</span>
          </div>
        </Link>

        <ul className="navbar-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="#hackathons">Hackathons</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {isAuthenticated ? (
          <div className="navbar-user">
            <span className="navbar-user-name">Hi, {user?.name || 'there'}</span>
            <Link to={dashboardPath} className="btn-dashboard">Dashboard</Link>
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="navbar-auth">
            <Link to="/login"><button className="btn-login">Login</button></Link>
            <Link to="/signup"><button className="btn-signup">Sign Up</button></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;