import React from "react";

function Team() {
  return (
    <section>
      <div className="container ">
        <h1 className="text-center my-5">OUR TEAM</h1>
        <div className="nft__team">
          <div className="nft__teammembers border">
            <img src="/Assets/b.png" alt="" />
            <h1>Founder</h1>
            <h4>munim</h4>
            <i className="bi bi-instagram" />
          </div>
          <div className="nft__teammembers border">
            <img src="/Assets/c.png" alt="" />
            <h1>Founder</h1>
            <h4>saud</h4>
            <i className="bi bi-twitter" />
          </div>
          <div className="nft__teammembers border">
            <img src="/Assets/a.png" alt="" />
            <h1>Founder</h1>
            <h4>ghazi</h4>
            <i className="bi bi-discord" />
          </div>
          <div className="nft__teammembers border">
            <img src="/Assets/b.png" alt="" />
            <h1>Founder</h1>
            <h4>haider</h4>
            <i className="bi bi-instagram" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
