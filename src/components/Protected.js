import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ children }) => {
  const user = "vr30304075@gmail.com"

  return children;
};

export default Protected;
