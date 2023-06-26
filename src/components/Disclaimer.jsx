import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
            Huzinah's Portfolio is provided for informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this site.
            </p>
            <ul className="lh-lg">

              <li>
              In no event will Huzinah be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this site.
              </li>
              <li>
              By using Huzinah's Portfolio, you agree to indemnify and hold harmless Huzinah from any claims, damages, or other expenses arising out of your use of this site.
              </li>
              <li>
              We reserve the right to update or modify these terms and policies at any time without prior notice. Your continued use of [Your Name]'s Developer Portfolio after any changes to the terms and policies constitute your acceptance of the new terms and policies.
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
