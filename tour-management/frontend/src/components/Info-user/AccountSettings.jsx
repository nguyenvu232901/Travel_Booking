import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const AccountSettings = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await axios.get(`/api/users/${user._id}`); // Assuming the user ID is stored in `user._id`
                setUserInfo(res.data.data);
            } catch (err) {
                console.error("Failed to fetch user info", err);
            }
        };

        fetchUserInfo();
    }, [user]);

    if (!userInfo) return <div>Loading...</div>;

    return (
        <div className="account-settings">
            <h2>Account Settings</h2>
            <div>
                <strong>Username:</strong> {userInfo.username}
            </div>
            <div>
                <strong>Email:</strong> {userInfo.email}
            </div>
            {/* Add more fields as needed */}
        </div>
    );
};

export default AccountSettings;
