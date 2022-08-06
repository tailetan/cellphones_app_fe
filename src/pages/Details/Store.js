import Image1 from "../../assets/images/download.png";
import Image2 from "../../assets/images/download (1).png";

export default function Store() {
  return (
    <div className="store">
      <h5 className="font-weight-bold">Thông tin sản phẩm</h5>
      <br />
      <ul>
        <li className="d-flex">
          <img src={Image1} alt="Image 1" width="20px" height="20px" />
          <p className="m-l-2 flex-grow-1">
            Máy, Sách hướng dẫn, Bút cảm ứng, Cây lấy sim, Cáp Type C
          </p>
        </li>
        <li className="d-flex">
          <img src={Image2} alt="Image 2" width="20px" height="20px" />
          <p className="m-l-2 flex-grow-1">
            Bảo hành chính hãng 12 tháng tại trung tâm bảo hành ủy quyền, 1 đổi
            1 trong 30 ngày nếu có lỗi phần cứng từ NSX{" "}
            <span className="text-red font-weight-semi">(xem chi tiết)</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
