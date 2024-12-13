import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallBack() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to '/' when the component mounts
    navigate('/');
  }, [navigate]);

  return <div>Redirecting...</div>; // Optional content during redirect
}
