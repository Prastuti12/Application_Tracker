import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Status1 from "../../assets/images/status-1.png";
import Status2 from "../../assets/images/status-2.png";
import Status3 from "../../assets/images/status-3.png";
import Status4 from "../../assets/images/status-4.png";
import Status5 from "../../assets/images/status-5.png";
import Status6 from "../../assets/images/status-6.png";

function detailPage({ data }) {
  const [newdata, setNewData] = useState({});
  const { id } = useParams();
  const status = ["PR", "IOR", "AR", "FOR", "BOM", "AP"];

  const getData = async () => {
    const matchedApplication = data.find((item) => item.applicationId === id);
    const matchedStatus = data.find((item) => item.applicationStatus === status);
    
    if (matchedApplication) {
      setNewData(matchedApplication);
    }
  switch (matchedStatus) {
    case value:
      
      break;
  
    default:
      break;
  }
  };

  useEffect(() => {
    // Runs on component mount
    getData();
  }, [id]);

  return (
    <div>
      <div className="px-5 py-5">
        <div className="mb-5 mt-1 card-box">
          <div className="card-body">
            <div className="stepper-wrapper">
              <div className="stepper-item completed">
                <img className="statusImg first-img" src={Status1} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <p className="status-text">Portal Register</p>
              </div>
              <div className="stepper-item completed">
                <img className="statusImg" src={Status2} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <p className="status-text">Initiation Of Testing</p>
              </div>
              <div className="stepper-item">
                <img className="statusImg" src={Status3} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
                <p className="status-text">AIR Registeration</p>
              </div>
              <div className="stepper-item">
                <img className="statusImg" src={Status4} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
                <p className="status-text">Foreign OEM Registration</p>
              </div>
              <div className="stepper-item">
                <img className="statusImg" src={Status5} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
                <p className="status-text">BOM Registration</p>
              </div>
              <div className="stepper-item">
                <img className="statusImg" src={Status6} alt="" />
                <div className="step-counter">
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
                <p className="status-text">Application Payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow ">
          <div className="card-head bg-dark">
            <h5 className="text-center text-light my-3"> <Link className="back-arrow" to={"/"}><i class="fa-solid fa-arrow-left "></i></Link> Application Detail</h5>
          </div>
          <div className="card-body">
            <div className="col-md-12 mt-2 mb-3">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8">
                  <button className="btn btn-primary option-btn report-btn">
                    Download Report{" "}
                    <i className="fa-solid fa-file-arrow-down mx-1"></i>
                  </button>
                  <button className="btn btn-primary mx-1 option-btn certificate-btn">
                    {" "}
                    Download Certificate{" "}
                    <i className="fa-solid fa-circle-down mx-1"></i>
                  </button>
                  <button className="btn btn-primary option-btn test-btn">
                    Download Test Report{" "}
                    <i className="fa-solid fa-circle-down mx-1"></i>
                  </button>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                  <div
                    className="progress mt-2"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-75"> </div>
                  </div>

                  <p className="progress-text">Status Of Progress - 75%</p>
                </div>
              </div>
            </div>
            <table className="table table-striped table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Application number</th>
                  <th scope="col">Application Category</th>
                  <th scope="col">Product Name</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(newdata).length > 0 && (
                  <tr>
                    <th scope="row">1</th>
                    <td>{newdata.applicationNo}</td>
                    <td>{newdata.applicationCategory}</td>
                    <td>{newdata.applicationName}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailPage;
