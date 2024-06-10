import React, {useState} from 'react';
import {User} from '../../types.ts'
import UserItem from './UserItem.tsx';
import Modal from "../Modal/Modal.tsx";
import Alert from "../Alert/Alert.tsx";

interface UserProps {
    userItem: User[];
}

const Users: React.FC<UserProps> = ({userItem}) => {
    const[showModal, setShowModal] = useState(false);
    const[showAlert, setShowAlert] = useState(true);

    const cart = (
        <div onClick={() => setShowModal(true)}>
            {userItem.map((user) => (
                <UserItem key={user.id} userItem={user} userImg={user.img} />
            ))}
        </div>
    );

    const closeAlert = () => {
        setShowAlert(false);
    };

    const alert = (
        <>{showAlert ? (
            <Alert type="warning" onDismiss={closeAlert}>
                This is a warning alert
            </Alert>
        ) : null} </>
    );

    return (
        <div className="mb-3 col-12">
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
            {alert}
            <Alert type="success">This is a success type alert</Alert>
        </div>

    );
};

export default Users;