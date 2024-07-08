import React, {useEffect, useState} from 'react';
import { UsersContext } from '../contexts/UsersContext';
import { baseUrl } from '../constants';
import { useNavigate } from "react-router-dom";

const UsersDataProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [allergies, setAllergies] = useState([]);
    const [error, setError] = useState([]);
    const navigate = useNavigate();
  
    const getUsers = async () => {
      const response = await fetch(`${baseUrl}/users`);
      const data = await response.json();
      return data;
    }
  
    const getAllergies = async () => {
      const response = await fetch(`${baseUrl}/allergies`);
      const data = await response.json();
      return data;
    }

    const updateUserAllergies = async (userId, allergies) => {
        try {
            const response = await fetch(`${baseUrl}/updateUserAllergies/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({allergies})
            });
            const jsonData = await response.json();
            alert('Allergies updated successfully');
            navigate('/');
            return jsonData;
        } catch (error) {
            console.log(error, 'error')
            setError(error);
        }
    }

    const verifyAndUpdateUserEmail = async (userId, email, verificationCode) => {
        try {
            const response = await fetch(`${baseUrl}/verifyAndUpdateEmail/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, verificationCode})
            });
            const jsonData = await response.json();
            alert('Email updated successfully');
            navigate('/');
            return jsonData;
        } catch (error) { 
    }
}

    const updateUserEmail = async (userId, email) => {
        try {
            const response = await fetch(`${baseUrl}/updateUserEmail/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            });
            const jsonData = await response.json();
            if (jsonData.verificationCode) {
                verifyAndUpdateUserEmail(userId, email, jsonData.verificationCode)
            }
            return jsonData;
        } catch (error) {
            setError(error);
        }
    }

    const verifyAndUpdateUserPhone = async (userId, phone, verificationCode) => {
        try {
            const response = await fetch(`${baseUrl}/verifyAndUpdatePhone/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({phone, verificationCode})
            });
            const jsonData = await response.json();
            alert('Phone updated successfully');
            navigate('/');
            return jsonData;
        } catch (error) {
            setError(error);
        }
    }

    const updateUserPhone = async (userId, phone) => {
        try {
            const response = await fetch(`${baseUrl}/updateUserPhone/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({phone})
            });
            const jsonData = await response.json();
            if (jsonData.verificationCode) {
                verifyAndUpdateUserPhone(userId, phone, jsonData.verificationCode)
            }
            return jsonData;
        } catch (error) {
            setError(error);
        }
    }

    const createUser = async (userData) => {
        try {
            const response = await fetch(`${baseUrl}/addUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const jsonData = await response.json();
            alert('User added successfully');
            navigate('/');
            return jsonData;
        } catch (error) {
        setError(error);
    }
}
  

  useEffect(() => {
    getUsers().then(data => {
        setUsers(data);
    }).catch(err => setError(err));
    getAllergies().then(data => setAllergies(data)).catch(err => setError(err));
  }, []);

  return (
    <UsersContext.Provider value={{users, allergies, createUser, updateUserEmail, verifyAndUpdateUserEmail, verifyAndUpdateUserPhone, updateUserPhone, updateUserAllergies, error}}>
        {children}
    </UsersContext.Provider>
  )
}

export default UsersDataProvider;