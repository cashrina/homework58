import React from 'react';

interface ShowProps extends React.PropsWithChildren {
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<ShowProps> = ({show,
                                        title,
                                        onClose,
                                        children}) => {
    return (
        <>
            <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
                <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-tiytle fs-5">{title}</h1>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>

    );};

export default Modal;