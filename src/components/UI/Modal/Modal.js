import React from 'react';

const Modal = ({closeModal, modal, username}) => {
    return ( 
    
            <div style={{'display':'block'}} className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{username.toUpperCase()}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {modal.message}
                </div>
                <div className="modal-footer">
                    <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        
    );
}
 
export default Modal;