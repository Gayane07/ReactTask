import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constants';

const useUserData = ({id}) => {
const [userData, setUserData] = useState({});

const getUserData = async (id) => {
    const response = await fetch(`${baseUrl}/users/${id}`);
    const data = await response.json();
    return data;
}
useEffect(() => {
    getUserData(id).then(data => setUserData(data)).catch(err => console.log(err));
}, [id]);

console.log(userData, 'userData')

  return userData;
}

export default useUserData;