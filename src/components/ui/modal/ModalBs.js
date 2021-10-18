import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getClienteApiById } from '../../../api/getClientes';
import { ModalContext } from '../../../context/ModalContext';

const ModalBs = ({history}) => {
  const { id } = useParams();
  const { modalState, setModalState } = useContext(ModalContext);
  const [clienteModal, setClienteModal] = useState({});

  useEffect(() => {
    getClienteApiById(id).then(cliente => setClienteModal(cliente));
  }, [])
  // 


  const closeModal = () => {
    setModalState(false)
        history.push('/');
       // history.replace('/');
  }
  return (
    <>
      {(modalState && id) && <div className="modal fondo-negro" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cliente</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Name:{clienteModal?.name}</p>
              <p>Lastname:{clienteModal?.last_name}</p>
              <p>City: {clienteModal?.city}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>}
    </>

  )
}

export default ModalBs
// style={{marginRight: spacing + 'em'}}

