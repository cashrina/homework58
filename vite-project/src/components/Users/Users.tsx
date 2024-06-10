import React, {useState} from 'react';
import {User} from '../../types.ts'
import UserItem from './UserItem.tsx';
import Modal from "../Modal/Modal.tsx";

interface UserProps {
    userItem: User[];
}

const Users: React.FC<UserProps> = ({userItem}) => {
    const[showModal, setShowModal] = useState(false);
    const cart = (
        <div onClick={() => setShowModal(true)}>
            {userItem.map((user) => (
                <UserItem key={user.id} userItem={user} userImg={user.img} />
            ))}
        </div>
    );
    return (
        <div className="row mb-3">
            <h4 className="fs-2 mb-5">Users</h4>
            {cart}
            <Modal show={showModal}
                   title="Some kinda modal title"
                   onClose={() => setShowModal(false)}>

                <div className="modal-body">This is modal content</div>
                <div className="modal-footer">

                    <button className="btn btn-danger" onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>

    );
};

export default Users;