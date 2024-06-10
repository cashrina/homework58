import React from 'react';
import {User} from '../../types.ts'

interface UserItemProps {
    userItem: User;
    userImg: string;
}

const UserItem: React.FC<UserItemProps> = ({userItem, userImg}) => {
    return (
        <div className="card mb-3 border-primary shadow-lg" style={{cursor: 'pointer'}}>
            <div className="card-body d-flex align-items-center flex-wrap">
                <img src={userImg} alt="/" className="img-fluid me-4" style={{maxWidth: '80px', maxHeight: '80px'}}/>
                <div className="ms-4">
                    <h5 className="card-title text-primary">{userItem.name}</h5>
                    <p className="card-text small text-secondary">{userItem.email}</p>
                    <p className="card-text">{userItem.active}</p>
                    <p className="card-text">{userItem.role}</p>
                </div>
            </div>
        </div>
    );
};
export default UserItem;