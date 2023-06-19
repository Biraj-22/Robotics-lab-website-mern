import React from "react";
import Footer from "../footer/footer";

function Contact() {
  return (
    <>
      <div id="contact-page">
        <h1>Contact Us</h1>
      </div>
      <form id="contact-form">
        <input
          name="name"
          className="feedback-input"
          placeholder="Name"
          type="text"
          required
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" id="contact-button" value="SUBMIT" />
      </form>

      <section class="process">
        <div class="process-row">
          <h1>Travelling to Bristol</h1>
        </div>
        <div class="process-row">
          <div class="process-content">
            <div class="progress-bar">
              <div class="c1"></div>
              <div class="c2"></div>
              <div class="c3"></div>
            </div>
            <div class="process-row">
              <div class="box1">
                <h2>By Car</h2>
                <p>
                  Please enter the Frenchay Campus through the North Entrance
                  and follow the red signs. The Frenchay Campus is easily
                  accessible from Junction 1 of the M32. The M32 joins the M4 at
                  Junction 19. For Satellite Navigation purposes use BS34 8QZ.
                </p>
              </div>
              <div class="box2">
                <h2>Car Parking</h2>
                <p>
                  Parking for BRL visitors is available at the front of T Block.
                  Please ensure arrangements have been made with your host for a
                  parking pass to be available for collection from the Bristol
                  Robotics Laboratory reception. Alternatively, please request a
                  Car Parking Permit by email prior to your visit.
                </p>
              </div>
              <div class="box3">
                <h2>Open Days</h2>
                <p>
                  Unfortunately we are unable to offer tours of Bristol Robotics
                  Laboratory to the public. However the laboratory is sometimes
                  accessible as part of the guided tours offered during open
                  days for the University of the West of England (UWE).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
