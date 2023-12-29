import React from 'react'
import { Link } from 'react-router-dom'


function home({data}) {

  return (
    <div className='px-5 py-5'>
        <h1></h1>
        <div className="card shadow ">
        <div className="card-head bg-dark">
                <h1 className='text-center text-light my-3'>Application & Progress Report</h1>
        </div>
            <div className="card-body home-card-body">
            <table className="table table-striped table-bordered text-center table-responsive first-table ">
            <thead className='table-dark'>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Application number</th>
                <th scope="col">Application Category</th>
                <th scope="col">Models</th>
                <th scope="col">Estimated time</th>
                <th scope="col">Actual time</th>
                </tr>
            </thead>
            <tbody>
            {data.map((data, index)=>(
                     <tr>
                     <th scope="row">{index+1}</th>
                    <td><Link to={`/detail/${data.applicationId}`}>{data.applicationNo}</Link></td>
                    <td>{data.applicationCategory}</td>
                    <td>{data.applicationModel}</td>
                    <td>{data.applicationEst}</td>
                    <td>{data.applicationAct}</td>
                     </tr>
                ))}
         

            </tbody>
        </table>
            </div>
        </div>
    </div>
  )
}

export default home
