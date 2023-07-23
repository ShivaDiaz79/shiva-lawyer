// pages/UsersPage.js

import { useEffect, useState } from 'react';
import { firestore } from '../firebase';



const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const collectionRef = firestore.collection('users');
        const snapshot = await collectionRef.get();
        const usersData = snapshot.docs.map((doc) => doc.data());
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
