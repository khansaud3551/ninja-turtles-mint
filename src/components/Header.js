import React from "react";
import { Link } from "react-scroll";
import ButtonSecondary from "../components/ButtonPrimary";
// import MusicPlayer from "../../../Components/MusicPlayer";
import ScIcon from "../components/ScIcon";

function Header() {
  return (
    <div className="landing__header">
      <div className="container header__container">
        <div className="header__content">
          <p>
            STARLIGHTxSOCIETY (SXS) is a collection of 5,000 unique NFTs
            inspired by Anime, Hip-Hop, and Streetwear Cultures
          </p>
          <div className="header__buttons" data-aos="fade-down">
            <ButtonSecondary
              link="https://discord.gg/sxs"
              text="Join Discord"
              btnIcon="/assets/icons/akar-icons_discord-fill.png"
            />
            <ButtonSecondary
              link="https://twitter.com/StarlightNFT"
              text="Follow Twitter"
              btnIcon="/assets/icons/akar-icons_twitter-fill.png"
            />
          </div>
        </div>
      </div>
      <div
        className="continue__to__bottom"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <p>CONTINUE</p>
        <Link to="aboutComponent" spy={true} smooth={true}>
          <ScIcon iconSrc="/Assets/icons/arrow-down.png" />
        </Link>
      </div>
      <div
        className="music__player__header"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        {/* <MusicPlayer /> */}
      </div>
    </div>
  );
}

export default Header;
