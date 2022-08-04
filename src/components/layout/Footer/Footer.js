import './footer.css';

import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <footer>
      <div className="container p-y-4 font-weight-medium">
        <Grid container spacing={2}>
          <Grid item xs={3} sm={3} md={3}>
            <ul>
              <li className="m-b-3">
                <p className="font-weight-bold m-b-2">Tìm cửa hàng</p>
                <p>
                  <a className="font-12">Tìm cửa hàng gần nhất</a>
                </p>
                <p>
                  <a className="font-12">Mua hàng từ xa</a>
                </p>
                <p>
                  <p className="font-12 text-red">
                    Gặp trực tiếp cửa hàng gần nhât (Zalo hoặc gọi điện)
                  </p>
                </p>
              </li>
              <li>
                <p className="font-weight-bold">Phương thức thanh toán</p>
                <ul className="d-flex flex-wrap">
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-alepay" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-zalopay" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-vnpay" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-moca" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-onepay" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-kredivo" />
                    </a>
                  </li>
                  <li className="m-t-2 p-l-0 p-r-2">
                    <a>
                      <em className="border rounded icon-cps-mpos" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <ul>
              <li className="m-b-4">
                <p className="font-12">
                  Gọi mua hàng:&nbsp;
                  <a className="font-weight-bold">0969004098</a>
                  &nbsp; (8h00 - 22h00)
                </p>
                <p className="font-12">
                  Gọi khiếu nại:&nbsp; <a className="font-weight-bold">0798881049</a>&nbsp;(8h00 -
                  21h30)
                </p>
                <p className="font-12">
                  Gọi bảo hành:&nbsp;
                  <a className="font-weight-bold">0798881049</a>&nbsp;(8h00 - 21h00)
                </p>
              </li>
              <li>
                <p className="font-weight-bold">Đối tác dịch vụ bảo hành</p>
                <p className="font-12 m-b-2">Điện Thoại - Máy tính</p>
                <a>
                  <em className="icon-dtv" />
                </a>
                <p className="m-t-3 m-b-2">
                  <strong>Trung tâm bảo hành uỷ quyền Apple </strong>
                </p>
                <a>
                  <em className="icon-dtv-asp" />
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <ul>
              <li>
                <p className="text-red font-12 font-weight-bold">Mua hàng và thanh toán Online</p>
              </li>
              <li>
                <a className="font-12">Mua hàng trả góp Online</a>
              </li>
              <li>
                <a className="font-12">Trả thông tin đơn hàng</a>
              </li>
              <li>
                <a className="font-12">Tra điểm Smember</a>
              </li>
              <li>
                <a className="font-12">Tra thông tin bảo hành</a>
              </li>
              <li>
                <a className="font-12">Tra cứu hoá đơn VAT điện tử</a>
              </li>
              <li>
                <a className="font-12">Trung tâm bảo hành chính hãng</a>
              </li>
              <li>
                <a className="font-12">Quy định về việc sao lưu dữ liệu</a>
              </li>
              <li>
                <a className="font-12">Dịch vụ bảo hành điện thoại</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <ul>
              <li>
                <a className="font-12">Quy chế hoạt động</a>
              </li>
              <li>
                <a className="font-12">Chính sách bảo hành</a>
              </li>
              <li>
                <a className="font-12">Liên hệ hợp tác kinh doanh</a>
              </li>
              <li>
                <a className="font-12">Đơn doanh nghiệp</a>
              </li>
              <li>
                <a className="text-red font-12">Ưu đãi từ đối tác</a>
              </li>
              <li>
                <a className="text-red font-12">Tuyển dụng</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
      <div className="footer__box-information">
        <div className="container">
          <Grid container spacing={2} className="m-t-4">
            <Grid item md={12}>
              <p style={{ float: 'left', width: '30%', textAlign: 'justify' }} className="font-10">
                <a>Điện thoại giá rẻ</a>
                &nbsp;-&nbsp;
                <a>Máy tính bảng giá rẻ</a>
                &nbsp;-&nbsp;
                <a>Samsung Galaxy S22 Ultra</a>
                <br />
                <a>Điện thoại iPhone 13</a>
                &nbsp;-&nbsp;
                <a>Điện thoại iPhone 12</a>
                &nbsp;-&nbsp;
                <a>Điện thoại iPhone 11</a>
                <br />
                <a>Điện thoại iPhone 8 Plus</a>
                &nbsp;-&nbsp;
                <a>Điện thoại iPhone 7 Plus</a>
                &nbsp;-&nbsp;
                <a>Điện thoại iPhone 6</a>
              </p>
              <p
                style={{ float: 'left', width: '30%', textAlign: 'justify', paddingLeft: '2%' }}
                className="font-10">
                <a>Điện thoại iPhone</a>
                &nbsp;-&nbsp;
                <a>Điện thoại Samsung</a>
                &nbsp;-&nbsp;
                <a>Điện thoại Xiaomi</a>
                <br />
                <a>Điện thoại OPPO</a>
                &nbsp;-&nbsp;
                <a>Điện thoại Vivo</a>
                &nbsp;-&nbsp;
                <a>Điện thoại Nokia</a>
                <br />
                <a>Samsung Galaxy Tab S8 Ultra</a>
                &nbsp;-&nbsp;
                <a>Xiaomi Redmi Note 11 Pro Plus</a>
              </p>
              <p
                style={{ float: 'left', width: '30%', textAlign: 'justify', paddingLeft: '2%' }}
                className="font-10">
                <a>Laptop</a>
                <strong>&nbsp;</strong>-&nbsp;
                <a>Laptop HP</a>&nbsp;- <a>Laptop Dell</a>&nbsp;-&nbsp;
                <a>Laptop Acer</a>&nbsp;-&nbsp;
                <a>Laptop Asus</a>
                <br />
                <a>Máy tính để bàn</a>
                &nbsp;-&nbsp;<a>Màn hình máy tính</a>
                &nbsp;-&nbsp;
                <a>Surface</a>
                &nbsp;-&nbsp;
                <a>Laptop Lenovo</a>
                <br />
                <a>Apple Watch Series 7</a>
                &nbsp;-&nbsp;<a>Camera</a>
                &nbsp;-&nbsp;
                <a>Camera hành trình</a>
              </p>
            </Grid>
            <Grid item md={12}>
              <p className="m-b-1 font-10 line-height-2 text-black-50 m-x-6">
                Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH
                &amp; ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang,
                Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
              </p>
              <div className="m-b-1 d-flex justify-center align-center">
                <a className="icon-cps-tb" />
                <a className="dmca-badge">
                  <img
                    src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
