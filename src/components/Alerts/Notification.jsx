import React, { useEffect } from "react";
import "./Notification.css";
import btn_success from "../../assets/img/btn-success.png";
import btn_close from "../../assets/img/btn-close-error.png";

// import img
import close_error from "../../assets/img/btn-close-error.png";
import close_success from "../../assets/img/btn-close-success.png"
import icon_warning from "../../assets/img/btn-close-error.png";

function Notification({
  alertSuccess,
  alertError,
  alertInfo,
  handleCloseError,
  handleCloseSuccess,
  errorsPwd = {},
  errorsUserName = {},
  errorsMsgUserAccount = {},
  checkInput,
  progressValueChanged,
  handleCloseInfo,
  loginsucess,
}) {
  const fieldsWithErrorsUserAccount = Object.keys(errorsMsgUserAccount).filter(
    (key) => errorsMsgUserAccount[key]
  );
  useEffect(() => {
    // if (alertSuccess)
    //   setTimeout(() => {
    //     handleCloseSuccess();
    //   }, 3000);
  }, [alertSuccess]);
console.log('here', errorsPwd, errorsUserName);
  return (
    <>
      {(alertError || checkInput) && (
        <div
          className={`alert-item ${
            alertError && "display-alert-error-item"
          }`}
        >
          <p className="title-alert-item">
            {/* <img src={icon_warning} className="warning-item" alt="" /> */}
            {alertError && "Error"}
          </p>
          {errorsPwd.length > 0 && (<p>check password</p>)}
          {errorsUserName.length > 0 && (<p>check username</p>)}

          <img
            src={close_error}
            title="Fermé"
            alt="Bouton Fermer"
            className="btn-close"
            onClick={handleCloseError}
          />
        </div>
      )}

    {alertInfo && (
        <div
          className={`alert-item ${
            alertInfo && "display-alert-info-item"
          }`}
        >
          <p className="title-alert-item">{alertInfo && "Info"}</p>

          <img
            src={btn_close}
            title="Fermé"
            alt="Bouton Fermer"
            className="btn-close"
            onClick={handleCloseInfo}
          />
        </div>
      )}

    {alertSuccess && (
        <div
          className={`alert-item ${
            alertSuccess && "display-alert-success-item"
          }`}
          style={progressValueChanged ? { top: 0, background: "#c8ffd2" } : {}}
        >
          <p className="title-alert-item">
            <img
              src={btn_success}
              title="Fermé"
              alt="Bouton Fermer"
              width="30"
              className="success-item"
            />
            {alertSuccess && progressValueChanged
              ? "Succès"
              : alertSuccess
              ? "Félicitation"
              : ""}
          </p>
          {loginsucess && (
            <p>
              Vous étes connectez
              <br />
            </p>
          )}

          <img
            src={close_success}
            title="Fermé"
            alt="Bouton Fermer"
            className="btn-close"
            onClick={handleCloseSuccess}
          />
        </div>
      )}
    </>
  );
}

export default Notification;
