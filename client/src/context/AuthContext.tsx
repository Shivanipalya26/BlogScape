import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/user/me',
          {
            withCredentials: true,
          }
        );

        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/v1/auth/logout',
        {},
        {
          withCredentials: true,
        }
      );

      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
