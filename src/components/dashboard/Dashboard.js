import React, { useEffect, useState } from 'react'
import { getClientesApi } from '../../api/getClientes'
import Cliente from '../cliente/Cliente';

const Dashboard = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(()=> {
    getClientesApi().then( clientes => setClientes(clientes));
  }, [])
  return (
    <>
      <h3 className="mt-5 text-center">Clientes</h3>
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">last name</th>
            <th scope="col">city</th>
            <th scope="col">adress</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map( cliente => <Cliente key={cliente.id} {...cliente}/>)
          }
        </tbody>
      </table>
    </>

  )
}

export default Dashboard
