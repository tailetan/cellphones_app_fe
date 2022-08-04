import PromotionImage from '../../assets/images/promotion.svg';

export default function Promotion() {
  return (
    <div className="promotion">
      <div className="p-title-layout">
        <p className="d-flex align-items-center text-red font-weight-bold">
          <img src={PromotionImage} alt="Promotion" />
          &nbsp;Khuyến Mãi
        </p>
      </div>
      <div className="p-content-layout">
        <ul>
          <li>
            <a style={{ fontSize: '14px' }}>
              Giảm thêm 4.000.000đ khi thu cũ đổi mới&nbsp;
              <span className="text-red font-weight-bold">(xem chi tiết)</span>
            </a>
          </li>
          <li>
            <a style={{ fontSize: '14px', margin: '8px 0' }}>
              Dịch vụ phòng chờ hạng thương gia tại sân bay&nbsp;
              <span className="text-red font-weight-bold">(xem chi tiết)</span>
            </a>
          </li>
          <li>
            <a style={{ fontSize: '14px' }}>
              Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy
              Play)&nbsp;<span className="text-red font-weight-bold">(xem chi tiết)</span>
            </a>
          </li>
        </ul>
        <br />
        <div className="p-content-layout-2">
          <p>
            Hotsale từ ngày&nbsp;<span className="text-red">22/07 - 25/07&nbsp;</span>: Giảm giá chỉ
            còn
            <span>
              <span className="text-red">&nbsp;24.490.000đ</span>&nbsp;
            </span>
            (Số lượng có hạn, và không áp dụng cùng chương trình khác)
          </p>
          <p>
            <span>Ngày cuối hotsale</span>
            <span>&nbsp;</span>chỉ áp dụng thanh toán online 100% hoặc thanh toán trực tiếp tại cửa
            hàng.
          </p>
        </div>
      </div>
    </div>
  );
}
