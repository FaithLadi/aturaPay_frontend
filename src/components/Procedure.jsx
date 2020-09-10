import React from "react";


const Procedure = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">
          Send money with AturaPAY by following these steps
        </h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-one</h3>
              <p className="text-muted mb-0">
                Make sure we support the country you'd like to send money to
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-two</h3>
              <p className="text-muted mb-0">
                Download the AturaPay app from the Google Play Store or the App
                store
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-three</h3>
              <p className="text-muted mb-0">
                Create your AturaPay account for free (your recipient doesn't
                need one)
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-4</h3>
              <p className="text-muted mb-0">
                Gather all of the details for your transfer, like how much you'd
                like to send and your recipient's information
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-five</h3>
              <p className="text-muted mb-0">
                Send your transfer and your recipient is sure to receive the
                fund in his/her country’s currency.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 className="h4 mb-2">Step-six</h3>
              <p className="text-muted mb-0">
                We'll take care of the rest, plus we'll let you and your
                recipient know when the funds are delivered
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Procedure;
