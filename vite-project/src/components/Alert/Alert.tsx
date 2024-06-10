import React from "react";

interface AlertProps extends React.PropsWithChildren{
    type: string;
    onDismiss?: React.MouseEventHandler;
}
const Alert: React.FC<AlertProps> = ({type, onDismiss, children}) => {

    return (
            <div className={`alert alert-${type}`}>
                {children}
                {onDismiss ? <button>X</button> : null}
            </div>
    );};

export default Alert;