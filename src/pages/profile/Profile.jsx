import React from 'react';
import viteLogo from '../../assets/vite.svg';

const Profile = () => {
  const user = {
    name: 'Javlonbek Jalilov',
    email: 'javlonbek@example.com',
    bio: 'Computer Science student at TKXIU. Passionate about AI and Web Development.',
    avatar: viteLogo, 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="mt-4 text-gray-600">{user.bio}</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
