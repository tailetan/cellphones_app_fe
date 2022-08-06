import "./hero.css";

import Advertisement from "../Advertisement/Advertisement.js";
import Menu from "../../Menu/Menu.js";
import MenuData from "../../../../assets/data/menu.json";
import Swiper from "../Swiper/Swiper.js";

function Hero() {
  const menuData = MenuData.menu;

  return (
    <div className="hero">
      <div className="hero__box-left">
        <div className="box-list-menu">
          <Menu menu={menuData} />
        </div>
      </div>
      <div className="hero__box-center">
        <Swiper />
      </div>
      <div className="hero__box-right">
        <Advertisement />
      </div>
    </div>
  );
}

export default Hero;
