import * as React from 'react';

import DienThoai1 from '../../assets/images/dien-thoai-1.jpg';
import DienThoai10 from '../../assets/images/dien-thoai-10.jpg';
import DienThoai11 from '../../assets/images/dien-thoai-11.jpg';
import DienThoai12 from '../../assets/images/dien-thoai-12.jpg';
import DienThoai13 from '../../assets/images/dien-thoai-13.jpg';
import DienThoai3 from '../../assets/images/dien-thoai-3.jpg';
import DienThoai5 from '../../assets/images/dien-thoai-5.jpg';
import DienThoai6 from '../../assets/images/dien-thoai-6.jpg';
import DienThoai7 from '../../assets/images/dien-thoai-7.jpg';
import DienThoai8 from '../../assets/images/dien-thoai-8.jpg';
import DienThoai9 from '../../assets/images/dien-thoai-9.jpg';

class IntroducePhone extends React.Component {
  render() {
    return (
      <div>
        <h4 className="font-weight-bold">
          Điện thoại di động – Vật “bất li thân” ở thời đại công nghệ
        </h4>
        <br />
        <p className="text-justify">
          Khi khoa học kỹ thuật liên tục được cải tiến và công nghệ phát triển không ngừng thì đó
          cũng là lúc chiếc điện thoại di động trở nên quan trọng hơn bao giờ hết. Thật vậy, chúng
          ta có thể làm được rất nhiều việc: gọi điện, nhắn tin, gửi mail, soạn tài liệu (Word,
          Excel), chụp ảnh – quay video, xem phim hay chơi game với thiết bị có kích thước chỉ bằng
          một bàn tay.
        </p>
        <br />
        <p className="text-justify">
          Chính vì vậy, thị trường di động luôn chứng kiến sự cạnh tranh vô cùng khốc liệt giữa các
          nhà sản xuất. Họ sẵn sàng đầu tư nghiên cứu để liên tục cho ra đời những chiếc điện thoại
          mới nhất chất lượng, từ giá rẻ, tầm trung, cận cao cấp cho đến cao cấp để đáp ứng tối đa
          nhu cầu của mọi đối tượng người dùng.
        </p>
        <br />
        <table align="center" border="0" className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">RAM</p>
                </p>
              </td>
              <td>
                <p>2GB - 12GB</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Bộ nhớ trong</p>
                </p>
              </td>
              <td>
                <p>32GB - 1TB</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Kích thước màn hình</p>
                </p>
              </td>
              <td>
                <p>4.7 inch - 7.6 inch</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Tần số quét</p>
                </p>
              </td>
              <td>
                <p>60Hz - 144Hz</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Camera sau</p>
                </p>
              </td>
              <td>
                <p>1 camera - 4 camera</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Pin</p>
                </p>
              </td>
              <td>
                <p>2.406mAh - 6.000mAh</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Hệ điều hành</p>
                </p>
              </td>
              <td>
                <p>iOS, Android</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <p className="font-weight-bold">Giá bán</p>
                </p>
              </td>
              <td>
                <p>2.000.000đ - Trên 20.000.000đ</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 className="font-weight-bold">Có mấy loại điện thoại di động?</h4>
        <br />
        <p className="text-justify">
          Xét về mục đích sử dụng, và thiết kế thì điện thoại di động sẽ được chia làm 4 loại chính:
        </p>
        <br />
        <h6 className="font-weight-bold">Điện thoại thông minh</h6>
        <br />
        <p className="text-justitfy">
          Điện thoại thông minh hay là smartphone, những mẫu điện thoại này được trang bị nhiều tính
          năng tân tiến về các điện toán và khả năng kết nối. Ngoài tính năng nghe – gọi cơ bản thì
          loại điện thoại này còn nhiều tính năng hiện đại khác như đọc báo, chơi game, lướt web và
          lên mạng xã hội.
        </p>
        <br />
        <p className="text-justify">
          Những điện thoại thuộc phân khúc này thường sở hữu màn hình lớn, camera độ phân giải cao
          và trang bị nhiều tính năng sinh trắc học như mở khóa gương mặt, vân tay,..
        </p>
        <br />
        <img src={DienThoai1} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Điện thoại phổ thông</h6>
        <br />
        <p className="text-justify">
          Điện thoại phổ thông là những mẫu điện thoại tập trung vào các chức năng nghe – gọi là
          chính. Do đó mẫu điện thoại này sở hữu thiết kế vô cùng nhỏ gọn với hệ thống phím bấm lớn
          và viên pin sử dụng lâu ngày. Một số hiện thoại phổ thông ngày nay cũng được trang bị khả
          năng kết nối mạng, lên mạng xã hội.
        </p>
        <br />
        <h6 className="font-weight-bold">Điện thoại chơi game</h6>
        <br />
        <p className="text-justify">
          Điện thoại chơi game là một điện thoại thông minh nhưng được thiết kế tối ưu hơn cho việc
          chơi game như tần số quét màn hình lớn, cấu hình máy khủng cùng hệ thống tản nhiệt được
          nâng cấp. Ngoài ra, điện thoại chơi game thường được hãng trang bị thêm các phụ kiện hỗ
          trợ quá trình chơi game hiệu quả hơn như tản nhiệt, tay cầm chơi game.
        </p>
        <br />
        <img src={DienThoai3} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Điện thoại chụp ảnh</h6>
        <br />
        <p className="text-justify">
          Tương tự điện thoại chơi game, điện thoại chụp ảnh là một điện thoại thông minh với phần
          camera được tối ưu. Hầu hết các điện thoại thông minh ngày nay đều được trang bị hệ thống
          camera chất lượng với khả năng chụp góc rộng, lấy nét quang học, chụp thiếu sáng,.. và
          chúng đều có thể là một chiếc điện thoại chụp ảnh chất lượng.
        </p>
        <br />
        <h4 className="font-weight-bold">Tại sao nên mua điện thoại thông minh?</h4>
        <br />
        <p>-&nbsp; Được trang bị nhiều công nghệ hiện đại.</p>
        <br />
        <p>-&nbsp; Hỗ trợ tốt cho việc liên lạc, làm việc lẫn giải trí.</p>
        <br />
        <p>
          -&nbsp; Không chỉ là thiết bị di động mà còn có thể đóng vai trò như một món đồ trang sức.
        </p>
        <br />
        <p>-&nbsp; Dễ dàng kết nối với cộng đồng và thế giới.</p>
        <br />
        <p>
          -&nbsp; Khả năng lưu giữ những khoảnh khắc đáng nhớ trong cuộc sống theo nhiều hình thức.
        </p>
        <br />
        <h4 className="font-weight-bold">Phân loại điện thoại smartphone theo tầm giá</h4>
        <br />
        <p className="text-justify">
          Dựa vào giá bán, ta có thể chia điện thoại thông minh làm 4 loại chính như sau:
        </p>
        <br />
        <h6 className="font-weight-bold">Điện thoại giá rẻ</h6>
        <br />
        <p>
          -&nbsp; <i>Thông tin chung:&nbsp;</i>Là những thiết bị được bán với mức giá bình dân, phù
          hợp với đối tượng người dùng có điều kiện tài chính hạn chế.
        </p>
        <br />
        <p>
          -&nbsp; <i>Đặc điểm:&nbsp;</i>Cấu hình tuy không mạnh mẽ nhưng vẫn đáp ứng tốt những nhu
          cầu hàng ngày (RAM 2 – 3 GB, chip Qualcomm 4xx hoặc Mediatek 6xxx), có thể được phát hành
          với nhiều phiên bản màu sắc thời trang, kích thước nhỏ gọn mang lại trải nghiệm cầm nắm dễ
          chịu…
        </p>
        <br />
        <p>
          -&nbsp; <i>Thương hiệu tiêu biểu:&nbsp;</i>Xiaomi Redmi Note 10 Pro hay điện thoại Realme
          8 vừa ra mắt.
        </p>
        <br />
        <img src={DienThoai11} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Điện thoại tầm trung</h6>
        <br />
        <p>
          -&nbsp; <i>Thông tin chung:&nbsp;</i>Bước nâng cấp so với dòng smartphone giá rẻ, có ngoại
          hình bắt mắt hơn và được nâng cấp về một số yếu tố.
        </p>
        <br />
        <p>
          -&nbsp; <i>Đặc điểm:&nbsp;</i>Thiết kế kim loại sang trọng, màn hình lớn, viền mỏng có độ
          phân giải Full HD, tích hợp chip Snapdragon đời 6xx hoặc Helio P, RAM 3 – 4 GB cho hiệu
          suất giải trí tốt hơn. Ngoài ra, chúng còn sở hữu camera kép có khả năng chụp ảnh xóa
          phông, cảm biến vân tay, công nghệ mở khóa bằng gương mặt hay hỗ trợ cả AI (trí tuệ nhân
          tạo)...
        </p>
        <br />
        <p>
          -&nbsp; <i>Thương hiệu tiêu biểu:&nbsp;</i>Samsung Galaxy A52 hay Xiaomi Mi 11 Lite 5G
          đang được bán độc quyền tại CellphoneS.
        </p>
        <br />
        <img src={DienThoai12} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Điện thoại cận cao cấp</h6>
        <br />
        <p>
          -&nbsp; <i>Thông tin chung:&nbsp;</i>Những sản phẩm nằm ở trên phân khúc tầm trung, được
          trang bị những thông số và công nghệ rất gần với nhóm cao cấp.
        </p>
        <br />
        <p>
          -&nbsp; <i>Đặc điểm:&nbsp;</i>Thiết kế quyến rũ với kim loại + kính, sử dụng chip
          Snapdragon 6xx tiên tiến hơn dòng smartphone tầm trung, RAM từ 4 – 6 GB, màn hình Full HD
          tràn viền kích thước lớn, tích hợp tiêu chuẩn chống nước, được trang bị viên pin dung
          lượng lớn cùng công nghệ sạc nhanh, camera kép độ phân giải cao đi kèm nhiều tính năng hữu
          ích…
        </p>
        <br />
        <p>
          -&nbsp; <i>Thương hiệu tiêu biểu:&nbsp;</i>Samsung Galaxy A…
        </p>
        <br />
        <h6 className="font-weight-bold">Điện thoại cao cấp</h6>
        <br />
        <p>
          -&nbsp; <i>Thông tin chung:&nbsp;</i>Những smartphone thuộc nhóm này đều có vẻ ngoài tuyệt
          đẹp, được trang bị phần cứng cực mạnh, phiên bản phần mềm mới nhất và nhiều công nghệ,
          tính năng hiện đại.
        </p>
        <br />
        <p>
          -&nbsp; <i>Đặc điểm:&nbsp;</i>Hoàn thiện tinh xảo từ chất liệu kim loại, kính và có thể là
          cả gốm, màn hình tràn cạnh độ phân giải 2K, màn hình cong về 2 cạnh bên, tích hợp chip
          Snapdragon đời mới nhất (8xx) hay Apple A-series, có khả năng chống nước, cảm biến nhận
          diện gương mặt 3D, camera kép hỗ trợ zoom quang học, tạo biểu tượng cảm xúc bằng chính
          gương mặt người dùng…
        </p>
        <br />
        <p>
          -&nbsp; <i>Thương hiệu tiêu biểu:&nbsp;</i>SXiaomi Mi 11 5G, Samsung Galaxy S21 Ultra 5G,
          iPhone 12...
        </p>
        <br />
        <img src={DienThoai13} width="100%" height="100%" />
        <br />
        <br />
        <h4 className="font-weight-bold">Các tiêu chí để lựa chọn điện thoại giá rẻ chất lượng</h4>
        <br />
        <p className="text-justify">
          Có rất nhiều yếu tố khác nhau để quyết định một mẫu smartphone có phải tốt nhất hay không.
          Hãy cùng điểm nhanh qua một số tiêu chí sau đây:
        </p>
        <br />
        <h6 className="font-weight-bold">Thiết kế</h6>
        <br />
        <p className="text-justify">
          Thiết kế bên ngoài ảnh hưởng rất lớn đến quyết định chọn mua của người dùng. Vì ngày nay,
          các sản phẩm điện thoại không chỉ đơn thuần là một thiết bị liên lạc, giải trí mà nó còn
          đóng vai trò là một phụ kiện trang trí, thể hiện phần nào tính cách của người dùng. Đây
          cũng là một lý do khiến các mẫu smartphone ngày càng trở nên mỏng hơn, nhiều màu sắc hơn.
          Hay thiết kế pin rời kém sang đã biến mất, thay vào đó là pin liền nguyên khối sang trọng.
        </p>
        <br />
        <h6 className="font-weight-bold">Màn hình</h6>
        <br />
        <p className="text-justify">
          Kích thước màn hình cũng sẽ ảnh hưởng đến tiêu chí chọn mua của người tiêu dùng. Bởi một
          số người dùng thiết thích bị nhỏ gọn nhưng số khác lại yêu thích các thiết bị màn hình
          lớn. Ngày nay các mẫu điện thoại mới ra mắt đang sở hữu kích thước màn hình ngày càng lớn
          do đa phần người dùng thích những chiếc điện thoại có màn hình càng lớn càng tốt.
        </p>
        <br />
        <img src={DienThoai5} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Hệ điều hành</h6>
        <br />
        <p className="text-justify">
          Sẽ có nhiều người dùng lựa chọn hệ điều hành đầu tiên trước khi chọn mua mẫu điện thoại
          nào đó. Hiện nay một số hệ điều hành có trên điện thoại di động phải kể đến như iOS,
          Android, BlackBerry OS hay Windows Phone. Mỗi hệ điều hành sẽ được xây dựng và phát triển
          trên các nền tảng khác nhau nên sẽ có những ưu và nhược điểm khác nhau.
        </p>
        <br />
        <h6 className="font-weight-bold">- Hệ điều hành Android:</h6>
        <br />
        <p className="text-justify">
          Đây là hệ điều hành mở được Google phát triển trên nền tảng Linux và là hệ điều hành được
          sử dụng phổ biến nhất. Do được sử dụng phổ biến bởi nhiều thương hiệu nên các thiết bị
          chạy hệ điều hành Android cũng sở hữu mức giá khá đa dạng, từ điện thoại giá rẻ, tầm
          trung, cận cao cấp đến cao cấp bạn đều có thể tìm được sản phẩm chạy trên hệ điều hành
          này.
        </p>
        <br />
        <p className="text-justify">
          Ngoài ra, do là hệ điều hành mở nên người dùng có thể tùy biến giao diện một cách dễ dàng
          theo sở thích cá nhân. Nhưng đây cũng là một điểm yếu của hệ điều hành Android này khi độ
          an toàn, tính bảo mật chưa cao.
        </p>
        <br />
        <img src={DienThoai6} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">- Hệ điều hành iOS:</h6>
        <br />
        <p className="text-justify">
          iOS là hệ điều hành với tính bảo mật cao do được phát triển trên một nền tảng đóng. Mỗi
          một phiên bản iOS đều được kiểm thử rất kỹ càng trước khi đưa ra thị trường. Nếu phát hiện
          lỗ hổng mới sẽ được update nhanh chóng.
        </p>
        <br />
        <p className="text-justify">
          Nhược điểm của hệ điều hành là người dùng sẽ không được tùy biến giao diện, bàn phím theo
          phong cách của bản thân.
        </p>
        <br />
        <h6 className="font-weight-bold">- Hệ điều hành BlackBerry OS:</h6>
        <br />
        <p className="text-justify">
          Hệ điều hành BlackBerry OS có tính bảo mật cao dùng giao diện sử dụng bắt mắt. Tuy nhiên
          kho ứng dụng trên hệ điều hành này chưa thực sự phong phú.
        </p>
        <br />
        <h6 className="font-weight-bold">Cấu hình</h6>
        <br />
        <p className="text-justify">
          Con chip CPU + GPU sẽ quyết định đến tốc độ đa nhiệm và hoạt động của máy. Dung lượng RAM
          càng lớn, khả năng đa nhiệm của máy càng mượt. Và hầu hết các sản phẩm điện thoại hiện nay
          đều được trang bị dung lượng ram từ 3GB trở nên. Với các dòng sản phẩm cao cấp, có thể lên
          đến 6-8GB RAM.
        </p>
        <br />
        <h6 className="font-weight-bold">Bộ nhớ trong</h6>
        <br />
        <p className="text-justify">
          Bộ nhớ là không gian lưu trữ hình ảnh, ứng dụng. Do đó người dùng sẽ ưu tiên một thiết bị
          sở hữu dung lượng bộ nhớ lớn hoặc có hỗ trợ thẻ nhớ mở rộng. Ngày nay, hầu hết các thiết
          bị smartphone đều sở hữu dung lượng bộ nhớ trong lớn tủ 64GB.
        </p>
        <br />
        <h6 className="font-weight-bold">Camera</h6>
        <br />
        <p className="text-justify">
          Nếu người dùng yêu thích quay phim, chụp ảnh hoặc sử dụng điện thoại phục vụ công việc
          tương tự thì camera là nhân tố rất quan trọng. Lúc này, ngoài thông số camera thì còn sẽ
          quan tâm nhiều tính năng khác như hỗ trợ chụp ảnh góc rộng, khả năng lấy nét,...
        </p>
        <br />
        <img src={DienThoai7} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Dung lượng pin</h6>
        <br />
        <p className="text-justify">
          Một điện thoại pin càng lớn, càng được người dùng yêu thích. Vì chỉ số dung lượng càng lớn
          (mAH) đồng nghĩa điện thoại có thể sử dụng càng lâu. Ngoài ra, người dùng sẽ còn quan tâm
          đến tính năng sạc nhanh của máy để lựa chọn sản phẩm khi mua.
        </p>
        <br />
        <h6 className="font-weight-bold">Tính năng đặc biệt</h6>
        <br />
        <p className="text-justify">
          Ngoài những thông số trên thì quyết định tiêu dùng của điện thoại còn ảnh hưởng bởi một số
          tính năng đặc biệt của sản phẩm. Như một số điện thoại sẽ hỗ trợ vân tay mặt lưng, như số
          khác sẽ trang bị vân tay trong màn hình.
        </p>
        <br />
        <h6 className="font-weight-bold">Giá thành</h6>
        <br />
        <p className="text-justify">
          Giá bán là một trong những yếu tố quan trọng nhất để quyết định người dùng có chọn mua một
          sản phẩm nào đó hay không. Với mỗi người dùng sẽ có những phân khúc lựa chọn khác nhau:
        </p>
        <br />
        <p className="text-justify">
          -&nbsp;Học sinh, sinh viên: Đối tượng này đặc điểm là khả năng tài chính còn phụ thuộc gia
          đình do đó sản phẩm hướng tới đa số là điện thoại phân khúc giá rẻ 3-4 triệu đồng.
        </p>
        <br />
        <p className="text-justify">
          -&nbsp;Nhân viên văn phòng, công – nhân viên chức: Đây là nhóm người dùng đã có khả năng
          tự chủ tài chính nên tiêu chí chọn mua smartphone cũng cao hơn như thiết kế đẹp, camera
          chụp tốt,... và các sản phẩm chọn mua đa số thuộc phân khúc cận cao cấp: từ 8 – 10 triệu
          đồng.
        </p>
        <br />
        <p className="text-justify">
          -&nbsp;Tín đồ công nghệ: Đây là phân khúc người yêu công nghệ, thường mong muốn sở hữu một
          mẫu điện thoại mạnh nhất, tốt nhất.
        </p>
        <br />
        <h4 className="font-weight-bold">TOP 5 hãng điện thoại bán chạy nhất hiện nay</h4>
        <br />
        <p className="text-justify">
          Thị trường smartphone khá nhộn nhịp với nhiều sản phẩm đến từ nhiều thương hiệu khác nhau.
          Nhưng bán chạy nhất trên thị trường là 5 thương hiệu smartphone sau:
        </p>
        <br />
        <h6 className="font-weight-bold">Apple</h6>
        <br />
        <p className="text-justify">
          Điện thoại iPhone với hầu hết sản phẩm nằm trong phân khúc cao cấp, do đó sản phẩm điện
          thoại iPhone với hiệu năng mạnh. Năm 2020, Apple đứng thứ 3 thế giới (chiếm tới 14% thị
          phần) với hơn 36 triệu thiết bị bán ra.
        </p>
        <br />
        <p className="text-justify">Một số sản phẩm nổi bật: iPhone 11, iPhone 12, iPhone Xr,..</p>
        <br />
        <img src={DienThoai8} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Samsung</h6>
        <br />
        <p className="text-justify">
          Là mẫu điện thoại bán chạy thứ 2 thế giới trong năm 2020, Samsung chiếm tới 20% thị trường
          smartphone khi bán ra hơn 54 triệu máy. Các sản phẩm điện thoại Samsung khá đa dạng phân
          khúc từ flagship cao cấp (dòng Samsung S, Samsung Note), tầm trung (Samsung A) và một số
          sản phẩm phân khúc giá rẻ khác.
        </p>
        <br />
        <p className="text-justify">
          Một số sản phẩm nổi bật: Samsung Note 20, Samsung S21, Samsung A52,...
        </p>
        <br />
        <img src={DienThoai9} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Xiaomi</h6>
        <br />
        <p className="text-justify">
          Xiaomi là thương hiệu điện thoại Trung Quốc, hãng điện thoại này chiếm tới 10% thị phần
          điện thoại di động trên toàn thế giới với hơn 26 triệu máy bán ra trong năm 2020 và dừng
          chân ở vị trí thứ 4 trong 5 thương hiệu smartphone bán chạy toàn cầu.
        </p>
        <br />
        <p className="text-justify">
          Các sản phẩm Xiaomi nổi bật với dung lượng pin siêu cao, hiệu năng khủng. Một số sản phẩm
          nổi bật như: Xiaomi Mi 11 Lite 5G, Xiaomi Redmi Note 10, Xiaomi Mi 10T Pro,..
        </p>
        <br />
        <h6 className="font-weight-bold">Oppo</h6>
        <br />
        <p className="text-justify">
          Là thương hiệu đứng thứ 5 trong danh sách, điện thoại OPPO có doanh số bán lên đến hơn 24
          triệu máy, chiếm 9% thị phần. Các sản phẩm điện thoại OPPO với thiết kế sang trọng, camera
          chất lượng cùng giá bán phải chăng.
        </p>
        <br />
        <p className="text-justify">
          Một số điện thoại OPPO nổi bật: OPPO Reno5, OPPO A93, OPPO A15,…
        </p>
        <br />
        <img src={DienThoai10} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Realme</h6>
        <br />
        <p className="text-justify">
          Điện thoại Realme đang có sự tăng trưởng vượt bậc trong những năm gần đây. Sản phẩm điện
          thoại Realme tập trung chủ yếu ở phân khúc giá rẻ và tầm trung.
        </p>
        <br />
        <p className="text-justify">
          Một số sản phẩm nổi bật: Realme 6, Realme 8 Pro, Realme C15,…
        </p>
        <br />
        <h4 className="font-weight-bold">
          Mua smartphone giá rẻ tại cửa hàng điện thoại CellphoneS
        </h4>
        <br />
        <ul className="text-justify">
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>
              Tại hệ thống cửa hàng điện thoại CellphoneS tất cả các sản phẩm đều có xuất xứ rõ ràng
              và hóa đơn đầy đủ
            </p>
          </li>
          <br />
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>Bảo hành chính hãng 12 tháng, 1 đổi 1 trong 30 ngày đầu tiên</p>
          </li>
          <br />
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>
              Giá bán hấp dẫn trên thị trường. Nhiều chương trình khuyến mãi hấp dẫn. Chương trình
              thu cũ đổi mới, lên đời điện thoại
            </p>
          </li>
          <br />
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>
              Nhiều dịch vụ tiện ích: trả góp 0% qua thẻ tính dụng với hơn 20 ngân hàng. Thanh toán
              online, thanh toán bằng thẻ, giao hàng và thu tiền tại nhà miễn phí trên toàn quốc.
            </p>
          </li>
          <br />
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>
              Đội ngũ nhân viên tư vấn offline và chăm sóc khách hàng online luôn sẵn sàng giải đáp
              mọi thắc mắc, đáp ứng tối đa nhu cầu của người dùng.
            </p>
          </li>
          <br />
          <li
            style={{
              lineHeight: '18px',
              listStyleType: 'circle',
              marginBottom: '8px',
              marginLeft: '30px'
            }}>
            <p>
              Ngoài ra, CellphoneS còn kinh doanh các dòng máy tính bảng giá rẻ cho đến cao cấp với
              mức giá hấp dẫn nhất thị trường.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default IntroducePhone;
