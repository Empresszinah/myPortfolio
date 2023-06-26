import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
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
              Terms &amp; Policy
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
            By accessing and using Huzinah Portfolio, you agree to be bound by these terms of use. All content on this site is owned or licensed by Huzinah and is protected by copyright and other intellectual property laws.
            </p>
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Terms of Use
            </h3>
            <p>
            You may view, download, and print content from this site for your personal, non-commercial use only. You may not copy, distribute, modify, transmit, reuse, or sell any content from this site without the written permission of Huzinah
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part I – Information Huzinah collects and controls
            </h5>
            <p>
            Huzinah is committed to protecting your privacy. We collect personal information such as your name and email address only when you voluntarily provide it to us. We use this information to respond to your inquiries and to provide you with information about our services.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part II – Information that Huzinah processes on your behalf
            </h5>
            <p>
            We do not share your personal information with third parties unless required by law or to protect our rights or property. We may use cookies to improve your experience on our site, but we do not use cookies to collect personal information.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Part III – General
            </h5>
            <p>
            Huzinah is committed to making our site accessible to all users. We have designed our site to comply with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. We provide alternative text for all images and ensure that our site can be navigated using a keyboard.

            If you experience any issues with our site's accessibility, please contact us at hello@huzinah.com and we will work to address the issue promptly.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
            Code of Conduct
            </h3>
            <p>
            We expect all users of Huzinah's Portfolio to behave in a respectful and professional manner. We do not tolerate harassment, discrimination, or any other form of inappropriate behavior.

            If you witness or experience any inappropriate behavior on our site, please contact us at hello@huzinah.com . We reserve the right to remove any content or user that violates our code of conduct.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
