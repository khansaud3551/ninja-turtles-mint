import React from "react";
import "../css/roadmap.css";

function RoadMap() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-3">ROADMAP 1.0</h1>
        <p className="text-center">
          Please Join Our Discord For A Details Roadmap
        </p>

        <div className="roadmap__start">
          <h1 className="roadmap__text">THE BEGINING</h1>

          <div className="roadmap__start row">
            <div className="roadmap__left col-5"></div>
            <div className="roadmap__mid col-2 ">
              <div className="mid__line">
                <div className="mid__circle">25%</div>
              </div>
            </div>
            <div className="roadmap__right col-5">
              <h1>SELL OUT</h1>
              lorum ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quisquam.
            </div>
          </div>

          <div className="roadmap__start row">
            <div className="roadmap__left col-5">
              <h1>SELL OUT</h1>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
            </div>
            <div className="roadmap__mid col-2 ">
              <div className="mid__line1">
                <div className="mid__circle">50%</div>
              </div>
            </div>
            <div className="roadmap__right col-5"></div>
          </div>

          <div className="roadmap__start row">
            <div className="roadmap__left col-5">
              <img className="" src="assets/no-bg1.png" alt="" />
            </div>
            <div className="roadmap__mid2 col-2 ">
              <div className="mid__line1">
                <div className="mid__circle">75%</div>
              </div>
            </div>
            <div className="roadmap__right col-5">
              <h1>SELL OUT</h1>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <p>consectetur adipisicing elit.</p>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam. lorum ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates, quisquam. lorum ipsum dolor sit
                amet consectetur adipisicing elit. Voluptates, quisquam. lorum
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                quisquam.
              </p>
            </div>
          </div>

          <div className="roadmap__start row">
            <div className="roadmap__left col-5">
              <h1>SELL OUT</h1>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
              <p>consectetur adipisicing elit.</p>
              <p>
                lorum ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quisquam.
              </p>
            </div>
            <div className="roadmap__mid2 col-2 ">
              <div className="mid__line1 border__radbot">
                <div className="mid__circle ">100%</div>
              </div>
            </div>
            <div className="roadmap__right col-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
