import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
const Cliente = (props) => {
  const {id, activo, adress, city, last_name, name } = props;
  const { modalState, setModalState } = useContext(ModalContext);

  const openModal = () => {
    setModalState(true)
  }
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{last_name}</td>
    <td>{city}</td>
    <td>{adress}</td>
    {/* <td>{activo?'true':'false'}</td> */}
    <td> 
      <Link className="btn btn-success mr-1" to={`/modal/${id}`} onClick={openModal}>
       <i className="fa fa-edit"></i>
      </Link>
    </td>
  </tr>
  )
}

export default Cliente
