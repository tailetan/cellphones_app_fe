import BannerImage from "../../../../assets/images/Special_banner_Desktop.png";

function Banner() {
  return (
    <img
      src={BannerImage}
      alt="Banner"
      width="100%"
      height="100%"
      className="m-b-3"
    />
  );
}

export default Banner;
