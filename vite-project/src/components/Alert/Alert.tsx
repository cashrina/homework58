import React from "react";

interface AlertProps extends React.PropsWithChildren{
    type: string;
    onDismiss?: React.MouseEventHandler;
}
const Alert: React.FC<AlertProps> = ({type, onDismiss, children}) => {

    return (
            <div className={`alert alert-${type} d-flex align-items-center`} >
                {children}
                {onDismiss ? <button className="border-0 bg-transparent ms-auto" style={{cursor: "pointer"}} onClick={onDismiss}>X</button> : null}
            </div>
    );};

export default Alert;