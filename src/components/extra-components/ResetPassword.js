import React, { useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { app } from "../../firebaseConfig"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import '../styles.css';




const ResetPassword = () => {
  let auth = getAuth(app);

  const handleChange = (event) => {
    let newInput = { [event.target.name]: event.target.value }
    setData({ ...data, ...newInput });
  }
  const [data, setData] = useState({});

  /*   const resetPassword = (event, email) => {
      event.preventDefault();
      sendPasswordResetEmail(auth, email)
        .then((response) => {
          showAlert(response.message, 'success')
        })
        .catch((error) => {
          showAlert(error.message, 'danger')
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } */
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form onSubmit={(e) => {
                /*  handleSubmit(e) */
              }}>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => {
                      handleChange(e)
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <button className="btn btn-secondary btn-login text-uppercase fw-bold" type="submit">
                 Reset
                </button>
              </form>

              <a href="/home" className='link-secondary'><GoArrowLeft className='icon-backarrow' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword