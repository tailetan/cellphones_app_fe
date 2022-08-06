import "./brand.css";
import BoxTitle from "../../BoxTitle/BoxTitle.js";
import AppleBrand from "../../../../assets/images/banner-sis-apple-homepage.png";
import SamsungBrand from "../../../../assets/images/banner-sis-samsung-homepage.png";
import AsusBrand from "../../../../assets/images/banner-sis-asus-homepage.png";
import XiaomiBrand from "../../../../assets/images/banner-sis-xiaomi-homepage.png";

function Brand() {
  const imageArray = [
    {
      image: AppleBrand,
      alt: "Apple",
    },
    {
      image: SamsungBrand,
      alt: "Samsung",
    },
    {
      image: AsusBrand,
      alt: "ASUS",
    },
    {
      image: XiaomiBrand,
      alt: "Xiaomi",
    },
  ];

  return (
    <div>
      <BoxTitle title="CHUYÊN TRANG THƯƠNG HIỆU" items={[]} />
      <div className="w-full d-flex flex-wrap p-t-4">
        {imageArray.map((item, index) => (
          <div key={index} className="box-image-layout">
            <img src={item.image} alt={item.alt} width="100%" height="100%" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
