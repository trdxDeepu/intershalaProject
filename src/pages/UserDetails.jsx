import React from 'react'


function UserDetails() {
    const { id } = useParams();
    const { userData } = useUserContext();
    const user = userData.find(user => user.id === id);
  
    return (
      <div>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add more user details here */}
      </div>
    );
  }

export default UserDetails