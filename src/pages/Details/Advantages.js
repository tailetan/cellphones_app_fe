import Image1 from "../../assets/images/DUMT_ZV0.png";
import Image2 from "../../assets/images/Citi.png";
import Image3 from "../../assets/images/logo-primary.55e9c8c.png";
import Image4 from "../../assets/images/logo_150x37-01.png";
import Image5 from "../../assets/images/photo_2022-06-22_14-38-16.jpg";

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="a-box">
        <p>ƯU ĐÃI THÊM</p>
      </div>
      <div className="a-content">
        <ul>
          <li className="m-b-2">
            <a>
              Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)
            </a>
          </li>
          <li className="d-flex align-items-center m-b-2">
            <img src={Image1} alt="Logo 1" width="40" />
            <span className="m-l-4">
              Giảm thêm 5% tối đa 1 triệu khi thanh toán qua Kredivo
            </span>
          </li>
          <li className="d-flex align-items-center m-b-2">
            <img src={Image2} alt="Logo 2" width="40" />
            <span className="m-l-4">
              Mở thẻ tín dụng Citibank - Nhận e-voucher tới 2 triệu
            </span>
          </li>
          <li className="d-flex align-items-center m-b-2">
            <img src={Image5} alt="Logo 5" width="40" />
            <span className="m-l-4">
              Mở thẻ tín dụng TPBank EVO - Nhận ưu đãi đến 6.6 triệu
            </span>
          </li>
          <li className="d-flex align-items-center m-b-2">
            <img src={Image3} alt="Logo 3" width="40" />
            <span className="m-l-4">
              Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở
              lên khi thanh toán qua VNPAY tại cửa hàng
            </span>
          </li>
          <li className="d-flex align-items-center m-b-2">
            <img src={Image4} alt="Logo 4" width="40" />
            <span className="m-l-4">
              Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn
              hàng từ 10 triệu
            </span>
          </li>
          <li className="m-b-2">
            <span>
              Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt
              nhất
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
