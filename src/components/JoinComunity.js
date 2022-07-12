import React from "react";
import "../css/joincomunity.css";

function JoinComunity() {
  return (
    <section>
      <div className=" container">
        <h1 className="my-5 text-center">JOIN THE COMMUNITY</h1>
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <p className="content__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              enim saepe voluptate, sunt dolore explicabo totam voluptas, quae
              magnam voluptatibus eaque? Error, deleniti nobis? Culpa nemo ipsam
              a totam perspiciatis! ci enim saepe voluptate, sunt dolore
              explicabo totam voluptas, quae magnam voluptatibus eaque? Error,
              deleniti nobis? a totam perspiciatis!
            </p>
            <p>
              totam perspiciatis! ci enim saepe voluptate, sunt dolore explicabo
              totam voluptas, quae magnam voluptatibus eaque? Error, deleniti
              nobis? Culpa nemo ipsam a totam perspiciatis!
            </p>
            <div className="d-flex gap-3 mt-4 mt-md-5">
              <button className="btn__1">
                <i className="bi bi-discord " />
                JOIN OUR DISCORD
              </button>
              <button className="btn__2">
                <i className="bi bi-twitter " /> FOLLOW US
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="outer__div78">
              <img src="/Assets/a.png" alt="" className="w-100 img__1" />
              <img src="/Assets/b.png" alt="" className="img__2" />
              <img src="/Assets/c.png" alt="" className="img__3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinComunity;
