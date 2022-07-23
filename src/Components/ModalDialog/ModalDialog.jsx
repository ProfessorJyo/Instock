import './ModalDialog.scss';

import ReactModal from 'react-modal';

const ModalDialog = (props) => {
    
    return (
        <ReactModal
            className={'modal-dialog'}
            overlayClassName={'modal-dialog__overlay'}
            isOpen={props.showModalDialog}
            contentLabel={props.content}>
                {props.content}
                <button onClick={props.onCancel}>Cancel</button>
                <button onClick={props.onDelete}>Delete</button>
        </ReactModal>
    )
}

export default ModalDialog