import * as React from 'react';

function ContentAuthenticate() {
  return (
    <div>
      <p>
        Từ ngày 01/10/2021, <span className="font-weight-bold text-red">CellphoneS</span> sẽ chính
        thức áp dụng chính sách Smember 2.0 với nhiều ưu đãi hấp dẫn, cụ thể như sau:
      </p>
      <br />
      <table
        border="1"
        style={{
          width: '100%',
          border: '1px solid rgb(51, 51, 51)'
        }}>
        <tbody>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">HẠNG THÀNH VIÊN</p>
            </td>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">SNEW</p>
            </td>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">SMEM</p>
            </td>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">SVIP</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">DOANH SỐ TÍCH LŨY</p>
            </td>
            <td className="authenticate-table-data">
              <p>&gt;=3.000.000 Đ</p>
            </td>
            <td className="authenticate-table-data">
              <p>&gt;=15.000.000 Đ</p>
            </td>
            <td className="authenticate-table-data">
              <p>&gt;=50.000.000 Đ</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">GIẢM GIÁ MÁY</p>
            </td>
            <td className="authenticate-table-data">
              <p>0%</p>
            </td>
            <td className="authenticate-table-data">
              <p>0.5%</p>
            </td>
            <td className="authenticate-table-data">
              <p>1%</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">GIẢM GIÁ PHỤ KIỆN 1</p>
            </td>
            <td className="authenticate-table-data">
              <p>2%</p>
            </td>
            <td className="authenticate-table-data">
              <p>3%</p>
            </td>
            <td className="authenticate-table-data">
              <p>5%</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">GIẢM GIÁ PHỤ KIỆN 2</p>
            </td>
            <td className="authenticate-table-data">
              <p>1%</p>
            </td>
            <td className="authenticate-table-data">
              <p>2%</p>
            </td>
            <td className="authenticate-table-data">
              <p>3%</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">ƯU ĐÃI THU CŨ LÊN ĐỜI</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 200K</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 300K</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 500K</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">ƯU ĐÃI SỬA CHỮA ĐIỆN THOẠI VUI</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 100K</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 200K</p>
            </td>
            <td className="authenticate-table-data">
              <p>5% tối đa 300K</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">VOUCHER SINH NHẬT</p>
            </td>
            <td className="authenticate-table-data">
              <p>50.000 Đ</p>
            </td>
            <td className="authenticate-table-data">
              <p>200.000 Đ</p>
            </td>
            <td className="authenticate-table-data">
              <p>500.000 Đ</p>
            </td>
          </tr>
          <tr>
            <td className="authenticate-table-data">
              <p className="font-weight-bold">CHÍNH SÁCH ĐẶT HÀNG</p>
            </td>
            <td className="authenticate-table-data" />
            <td colSpan="2" className="authenticate-table-data">
              <p>Có thể lên đơn cọc không cần đặt cọc trước</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>Trong đó:</p>
      <br />
      <p>Giảm giá phụ kiện:</p>
      <br />
      <p>
        -&nbsp;PK1: Phụ kiện loa - tai nghe dưới 1 triệu, sạc dự phòng, củ cáp, bao da, ốp lưng,
        balo - túi xách
      </p>
      <br />
      <p>-&nbsp;PK2: PCác phụ kiện còn lại</p>
      <br />
      <p>
        <i>
          (*) Giá trị hoá đơn sau khi đã trừ các KM, CT giảm giá khác, không áp dụng với nhóm sản
          phẩm dịch vụ (BHMR, sim, thẻ, thu hộ,...)
        </i>
      </p>
      <br />
      <p>
        <i>
          Code <span className="font-weight-bold">SINH NHẬT</span> sẽ được áp dụng đối với hóa đơn
          mua hàng có giá trị <span className="font-weight-bold">GẤP ĐÔI</span> giá trị của code
          khuyến mãi.
        </i>
      </p>
      <br />
      <h6 className="font-weight-bold">Các lưu ý :</h6>
      <br />
      <p>
        -&nbsp;Trên 1 phiếu mua hàng, khách hàng được lựa chọn hình thức khuyến mãi cao nhất (code
        giảm giá hoặc Smember)
      </p>
      <br />
      <p>
        -&nbsp;Để tham gia làm thành viên Smember, quý khách hàng chỉ cần mua hàng và chiết khấu
        tương ứng với số tiền tích luỹ theo bảng trên .{' '}
      </p>
      <br />
      <p>
        -&nbsp;Khi mua hàng, quý khách vui lòng đăng ký email, ngày sinh nhật với nhân viên
        CellphoneS để được đảm bảo quyền lợi.
      </p>
      <br />
      <p>
        -&nbsp;Các khách hàng Smember sẽ được tặng mã mua hàng vào ngày sinh nhật (áp dụng 1 lần/năm
        và có hạn sử dụng 1 tháng theo cấp ưu đãi trên), ngoài ra, tùy theo từng chương trình khuyến
        mại cho thành viên, Smember sẽ nhận được mã giảm giá{' '}
        <u>
          <i>(áp dụng cho điện thoại - máy tính bảng - phụ kiện)</i>
        </u>
        &nbsp; qua tin nhắn SMS.
      </p>
      <br />
      <p>
        -&nbsp;Ưu đãi giảm giá dịch vụ sửa chữa, áp dụng trên toàn hệ thống CellphoneS &
        Dienthoaivui trên Toàn quốc
      </p>
      <br />
      <p>
        -&nbsp;Điểm doanh thu tích luỹ của khách hàng trước ngày 1/10/2021 sẽ được duy trì đến ngày
        30/9/2022.
      </p>
      <br />
      <p>
        -&nbsp;Từ 1/10/2022 (tức 1 năm sau khi triển khai), hạng thành viên sẽ được tính bằng doanh
        thu tích luỹ trong 12 tháng gần nhất (thay vì tích luỹ trọn đời)
      </p>
      <br />
      <h5 className="font-weight-bold">QUY ĐỊNH SỬ DỤNG</h5>
      <br />
      <p>-&nbsp;Vui lòng cung cấp thông tin số điện thoại để được hưởng ưu đãi.</p>
      <br />
      <p>-&nbsp;Ưu đãi chỉ có hiệu lực đối với các hóa đơn bán lẻ.</p>
      <br />
      <p>
        -&nbsp;Các ưu đãi của thành viên có thể không được áp dụng cộng dồn với các ưu đãi tuỳ theo
        các chương trình cụ thể.
      </p>
      <br />
      <p>-&nbsp;Điểm thành viên KHÔNG ĐƯỢC chuyển nhượng, cộng dồn quy đổi thành tiền mặt.</p>
    </div>
  );
}

export default ContentAuthenticate;
