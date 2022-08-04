import * as React from 'react';

import Laptop1 from '../../assets/images/Laptop-1.jpg';
import Laptop10 from '../../assets/images/Laptop-10.jpg';
import Laptop11 from '../../assets/images/Laptop-11.jpg';
import Laptop2 from '../../assets/images/Laptop-2.jpg';
import Laptop3 from '../../assets/images/Laptop-3.jpg';
import Laptop4 from '../../assets/images/Laptop-4.png';
import Laptop5 from '../../assets/images/Laptop-5.jpg';
import Laptop6 from '../../assets/images/Laptop-6.jpg';
import Laptop7 from '../../assets/images/Laptop-7.jpg';
import Laptop8 from '../../assets/images/Laptop-8.jpg';
import Laptop9 from '../../assets/images/Laptop-9.jpg';

class IntroduceLaptop extends React.Component {
  render() {
    return (
      <div>
        <h4 className="font-weight-bold">
          Máy tính xách tay (laptop) - Phục vụ công việc, học tập, giải trí
        </h4>
        <br />
        <p className="text-justify">
          Năm 2019, thị trường máy tính xách tay trở nên khó khăn hơn vì sự phát triển về cấu hình
          và các công nghệ trên các thiết bị di động khác, đặc biệt là điện thoại thông minh. Nhưng
          không vì thế mà máy tính xách tay (hay còn gọi là laptop) bị lãng quên, công việc văn
          phòng hiện giờ vẫn ưu tiên máy tính xách tay hơn các thiết bị khác. Trong bối cảnh này,
          các hãng máy tính, hãng công nghệ đã tung ra nhiều sản phẩm tối ưu đáp ứng đa dạng người
          dùng hơn. Hiện nay, xu hướng sử dụng thiết bị điện tử thường tập trung vào dòng sản phẩm
          có mức giá hợp lý, sở hữu thiết kế siêu di động, mỏng nhẹ, thời lượng pin tốt, chế độ ưu
          đãi và bảo hành.
        </p>
        <br />
        <p className="text-justify">
          Giờ đây, những chiếc laptop 2 trong 1 có thể xoay, gập và tách rời, trở thành máy tính
          bảng hoặc sử dụng máy tính xách tay như thông thường, đáp ứng nhu cầu học tập và giải trí.
          Ngoài ra, màn hình cảm ứng giúp thao tác người dùng giống hệt như trên máy tính bảng. Bên
          cạnh đó, người sử dụng có thể chọn những chiếc ultrabook, có cấu hình mạnh hơn, mỏng hơn,
          độ phân giải lớn, nhỏ gọn có khả năng di động cao, phù hợp với doanh nhân.
        </p>
        <br />
        <table border="0" className="table table-bordered">
          <tbody>
            <tr>
              <td />
              <td className="text-center">
                <p>
                  <strong>Laptop</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Màn hình</strong>
                </p>
              </td>
              <td className="text-center">
                <p>13 inch, 14 inch, 15 inch</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Chip xử lý</strong>
                </p>
              </td>
              <td className="text-center">
                <p>
                  <span>
                    <strong>Intel, AMD</strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Dung lượng Ram</strong>
                </p>
              </td>
              <td className="text-center">
                <p>4GB, 8GB, 12GB, 16GB, 64GB</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Ổ cứng&nbsp;</strong>
                </p>
              </td>
              <td className="text-center">
                <p>
                  <span>
                    <strong>SSD, HDD</strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Card đồ hoạ</strong>
                </p>
              </td>
              <td className="text-center">
                <p>
                  <span>
                    <strong>NIVIDIA, AMD</strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Độ phân giải</strong>
                </p>
              </td>
              <td className="text-center">
                <p>HD, Full HD, 2K, 4K</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <strong>Tần số quét</strong>
                </p>
              </td>
              <td className="text-center">
                <p>90Hz, 120Hz, 144Hz, 165Hz, 240Hz</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 className="font-weight-bold">Tại sao nên chọn mua laptop</h4>
        <br />
        <p>-&nbsp;Có hệ điều hành tối ưu, kèm theo là cấu hình cao để xử lý mọi công việc.</p>
        <br />
        <p>
          -&nbsp;Có bàn phím, chuột và các cú pháp hỗ trợ cho công việc tốt hơn các thiết bị khác,
          có thể bao gồm cảm ứng.
        </p>
        <br />
        <p>-&nbsp;Đầy đủ chức năng của một máy tính bàn và khả năng di động cao.</p>
        <br />
        <p>-&nbsp;Thời lương pin cao.</p>
        <br />
        <p>-&nbsp;Lưu trữ dữ liệu nhiều hơn.</p>
        <br />
        <p>-&nbsp;Dễ dàng sửa chữa, nâng cấp.</p>
        <br />
        <h4 className="font-weight-bold">Lợi ích khi sử dụng laptop</h4>
        <br />
        <p className="text-justify">
          So với các sản phẩm điện tử hiện đại và tiện lợi khác, laptop nằm ở trong phân khúc giá
          cao hơn. Tuy nhiên chúng vẫn thu hút được đông đảo người dùng lựa chọn để đồng hành trong
          công việc và cuộc sống bởi chúng có những lợi ích nổi bật như sau:
        </p>
        <br />
        <img src={Laptop1} width="100%" height="100%" />
        <br />
        <br />
        <p>
          -&nbsp;Laptop được trang bị hệ điều hành tối ưu, kèm theo đó là cấu hình đa dạng, ở nhiều
          mức độ khác nhau giúp người dùng có thể xử lý mọi công việc.
        </p>
        <br />
        <p>
          -&nbsp;Laptop được trang bị bàn phím, chuột và các cú pháp tiện dụng mang lại sự thuận lợi
          giúp công việc được hoàn thiện một cách tốt hơn so với các thiết bị khác. Một số dòng
          laptop cao cấp có kèm theo màn cảm ứng tiện nghi.
        </p>
        <br />
        <p>-&nbsp;Laptop có đầy đủ các chức năng của một máy tính bàn và tính di động cao.</p>
        <br />
        <p>
          -&nbsp;Dung lượng pin lớn mang đến sự tiện lợi. Đặc biệt là đối với người thường xuyên
          phải ra ngoài làm việc..
        </p>
        <br />
        <p>-&nbsp;Khả năng lưu trữ dữ liệu trên laptop nhiều hơn.</p>
        <br />
        <p>-&nbsp;Sửa chữa và nâng cấp đơn giản, nhanh chóng.</p>
        <br />
        <h4 className="font-weight-bold">Các loại laptop phổ biến</h4>
        <br />
        <h6 className="font-weight-bold">Máy tính xách tay thông thường</h6>
        <br />
        <p className="text-justify">
          Máy tính xách tay thông thường là dòng sản phẩm được trang bị đầy đủ các tính năng để có
          thể thực hiện được các tác vụ cơ bản, nhẹ nhàng như lướt web, kiểm tra email hoặc là xử lý
          các công việc văn phòng khác.
        </p>
        <br />
        <p className="text-justify">
          Do dòng máy tính này có cấu hình khá cơ bản và trang bị bình dân nhất nên giá cả của chúng
          khá phải chăng. Mọi đối tượng khách hàng đều có thể sở hữu chúng.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop 2 in 1</h6>
        <br />
        <p className="text-justify">
          Laptop 2 trong 1 là dòng laptop mang trên mình tính năng của cả máy tính xách tay và cả
          máy tính bảng. Những chiếc laptop này có khả năng chuyển đổi một cách linh hoạt giữa máy
          tính bảng và laptop chỉ bằng một thao tác là xoay bàn phím 360 độ quanh bản lề hoặc là rút
          khỏi khe cắm để tách rời màn hình.
        </p>
        <br />
        <img src={Laptop2} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Laptop 2 in 1 thường có thiết kế khá nhỏ gọn và tinh tế bạn có thể dễ dàng mang theo trong
          mọi hành trình. Tuy nhiên giá thành của chúng cao hơn so với dòng laptop thông thường.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop Workstation</h6>
        <br />
        <p className="text-justify">
          Laptop workstation là dòng laptop được thiết kế để thực hiện những công việc đòi hỏi cấu
          hình mạnh mẽ như render ảnh/video, 3D, CAD hoặc là phân tích dữ liệu và chỉnh sửa video.
        </p>
        <br />
        <p className="text-justify">
          Laptop workstation của các hãng khác nhau sẽ có những đặc điểm khác nhau riêng biệt. Tuy
          nhiên chúng mang trên mình những điểm chung như: nhiều lõi xử lý, trang bị ổ cứng SSD,
          card đồ hoạ rời và GPU tốt hơn,... Bên cạnh giá thành cao hơn thì thiết kế của dòng sản
          phẩm này khá to và nặng.
        </p>
        <br />
        <h4 className="font-weight-bold">Phân loại laptop theo hệ điều hành</h4>
        <br />
        <h6 className="font-weight-bold">Laptop Windows</h6>
        <br />
        <p className="text-justify">
          Thông tin chung : Ở hệ điều hành này, có khá nhiều mẫu để lựa chọn, từ phân khúc phổ thông
          tới cao cấp. Trong top 10 máy tính xách tay bán chạy nhất có hai thương hiệu lớn là Dell
          và Asus, sau đó đến HP và Lenovo cho chất lượng âm thanh tốt hoặc bền bỉ với máy trạm. Máy
          tính xách tay chạy hệ điều hành Windows hỗ trợ cho công việc và giải trí khá tốt, vì người
          dùng đã quen với hệ điều hành này từ hàng chục năm nay. Windows 10 cho phép tối ưu hóa
          trong việc xử lý, tìm kiếm, khởi động nhanh, ứng dụng universal dùng chung cho cả Windows
          Phone.
        </p>
        <br />
        <p className="text-justify">
          Thương hiệu: Dell, Asus, Acer, Hp, Samsung, Lenovo... Bạn có thể mua laptop của các thương
          hiệu này tại CellphoneS.
        </p>
        <br />
        <img src={Laptop3} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Laptop Macbook OS</h6>
        <br />
        <p className="text-justify">
          Thông tin chung : “Ông hoàng” máy tính xách tay trong nhiều năm qua được nhiều người ưa
          chuộng chính là Apple. Họ đã vươn lên vị trí số 1 trong lòng người tiêu dùng bởi tính bền
          bỉ, hoàn thiện về phần cứng và hệ điều hành, thiết kế mỏng nhẹ, sang trọng. Bên cạnh đó
          công nghệ trên máy tính xách tay của Apple dẫn đầu các hãng khác, về bàn phím, chuột, chất
          lượng âm thanh, các cổng kết nối, độ phân giải màn hình. Hệ điều hành Mac OS phải nói là
          rất tuyệt, cho hiệu năng xử lý cao, ổn định, mượt mà, đặc biệt là tính bảo mật thông tin.
          Hỗ trợ tất cả công việc về văn phòng, thiết kế, lập trình. Các sản phẩm tiêu biểu của
          Apple gồm: Macbook 2016, Macbook 2017, Macbook Pro 2016, Macbook Pro 2017, Macbook Air
          2016, Macbook Air 2017.
        </p>
        <br />
        <img src={Laptop4} width="100%" height="100%" />
        <br />
        <br />
        <h6 className="font-weight-bold">Laptop Chrome OS</h6>
        <br />
        <p className="text-justify">
          Thông tin chung : Ở thị trường này, máy tính xách tay Samsung đạt được nhiều thành công về
          bước đi đầu trong việc thiết kế chiếc máy tính xách tay chạy hệ điều hành mới. Một chiếc
          ultrabook có thiết kế cao cấp, chạy hệ điều hành Chrome OS, hỗ trợ các ứng dụng có sẵn cơ
          bản do Google xây dựng, không lo mất dữ liệu với Google Drive. Bên cạnh đó, Chromebook có
          giá hợp lý hơn các dòng máy tính xách tay khác.
        </p>
        <br />
        <img src={Laptop5} width="100%" height="100%" />
        <br />
        <br />
        <h4 className="font-weight-bold">Phân loại laptop theo nhu cầu</h4>
        <br />
        <p className="text-justify">
          Ngoài phân loại theo hệ điều hành thì laptop còn được phân loại theo nhu cầu sử dụng của
          người dùng. Từ đó mọi người đều có thể dễ dàng lựa chọn cho mình sản phẩm phù hợp giúp mọi
          công việc được vô cùng suôn sẻ.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop sinh viên, văn phòng</h6>
        <br />
        <p className="text-justify">
          Đây là dòng laptop được trang bị cấu hình ở mức trung bình với các thông số như: CPU Core
          i3 (Intel) hoặc là Ryzen 3 (AMD) trở lên. Bên cạnh đó độ phân giải màn hình của dòng này
          cũng ở mức tối thiểu như HD hoặc là Full HD hoặc cao cấp hơn là màn hình Retina, 2K hoặc
          là 4K,... Ngoài ra, các công nghệ âm thanh chưa được chú trọng đầu tư nhưng cũng đủ để đáp
          ứng được nhu cầu giải trí của người dùng.
        </p>
        <br />
        <img src={Laptop6} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Với dòng laptop sinh viên, văn phòng này, người dùng có thể sử dụng để thoải mái lướt web,
          nghe nhạc, xem phim hoặc là thao tác trên các ứng dụng văn phòng cơ bản (như Word,
          Powerpoint hay là Excel...) vẫn đảm bảo được độ mượt mà và nhanh nhạy.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop đồ họa</h6>
        <br />
        <p className="text-justify">
          Đây là dòng laptop được trang bị cấu hình vô cùng mạnh mẽ cùng với đó là card đồ hoạ rời
          kết hợp với màn hình có độ phân giải cao để xử lý mọi tác vụ mượt mà, chuẩn xác nhất.
        </p>
        <br />
        <p className="text-justify">
          Cấu hình của laptop đồ hoạ cơ bản là CPU từ core i5 trở lên, RAM 8GB trở lên, ổ cứng kép
          SSD + HDD và card đồ hoạ rời. Bên cạnh đó là màn hình Full HD giúp người dùng có thể quan
          sát màu sắc được chuẩn hơn.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop gaming</h6>
        <br />
        <p className="text-justify">
          Laptop gaming là loại laptop được thiết kế chuyên biệt để phục vụ cho việc chơi game nặng
          và các trò chơi điện tử. Loại laptop này đòi hỏi phải có cấu hình mạnh mẽ để xử lý về đồ
          họa mà các game thủ đang cần. Cấu trúc của dòng máy tính xách tay gaming được thiết kế và
          hoàn thiện từ nhà sản xuất đã được sáng tạo với chất lượng vượt trội. Thêm vào đó dòng
          laptop này luôn được áp dụng các công nghệ mới nhất với những nâng cấp mạnh nhất về phần
          cứng.
        </p>
        <br />
        <p className="text-justify">
          Máy nổi bật với thiết kế hầm hố, đồ sộ thể hiện sự mạnh mẽ. Bên cạnh đó là RAM và ổ cứng
          dung lượng cao. Màn hình kích thước lớn, độ phân giải cực chất lượng và hệ thống tản nhiệt
          thông minh. Từ đó mang tới cho các game thủ những trải nghiệm bất tận.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop doanh nhân</h6>
        <br />
        <p className="text-justify">
          Laptop doanh nhân là dòng sản phẩm được thiết kế dành cho công việc với các đặc trưng như:
          độ bền cao, thời lượng pin lớn, tập trung vào sự đơn giản, dễ dàng sử dụng, nhiều cổng kết
          nối và đặc biệt là khả năng di động cao.
        </p>
        <br />
        <p className="text-justify">
          Các sản phẩm thuộc dòng laptop doanh nhân cũng khá được đầu tư vào cấu hình để mang tới sự
          mạnh mẽ giúp mọi công việc được xử lý nhanh gọn và mượt mà. Thông thường, chúng được trang
          bị vi xử lý core i5 trở lên, RAM 8G và ổ cứng SSD 512GB. Đặc biệt nữa là độ bảo mật cao
          mang đến sự an toàn cho thông tin và dữ liệu được lưu trữ ở bên trong.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop mỏng nhẹ</h6>
        <br />
        <p className="text-justify">
          Nhắc tới dòng laptop mỏng nhẹ thì chắc hẳn ai cũng hình dung được đây là loại laptop sở
          hữu thiết kế nhỏ gọn, tinh tế. Chính vẻ bề ngoài này đã mang đến sức hút mạnh mẽ đối với
          người dùng hiện nay.
        </p>
        <br />
        <img src={Laptop7} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Ngoài ra, dòng laptop mỏng nhẹ này rất đa dạng và phong phú với các cấu hình khác nhau để
          đáp ứng được tối đa nhu cầu sử dụng của người dùng. Tuy nhiên, chúng vẫn đảm bảo được hiệu
          năng ổn định để mọi tác vụ được xử lý mượt mà và nhanh chóng.
        </p>
        <br />
        <h4 className="font-weight-bold">Các tiêu chí chọn mua laptop chất lượng vượt trội</h4>
        <br />
        <p className="text-justify">
          Với sự đa dạng và phong phú về các loại laptop trên thị trường nên đôi khi người dùng khá
          khó để có thể lựa chọn được sản phẩm phù hợp, đáp ứng tối đa nhu cầu sử dụng. Chính vì vậy
          các tiêu chí chọn mua laptop chất lượng vượt trội dưới đây sẽ giúp bạn nhanh chóng có được
          lựa chọn tốt nhất cho mình.
        </p>
        <br />
        <h6 className="font-weight-bold">Thương hiệu</h6>
        <br />
        <p className="text-justify">
          Có lẽ thương hiệu là yếu tố đầu tiên mà người dùng thường để ý khi có nhu cầu mua laptop.
          Trên thị trường laptop hiện nay nổi bật với những cái tên như: Dell, Asus, Lenovo,
          Macbook, Acer,... vô cùng đa dạng.
        </p>
        <br />
        <img src={Laptop8} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Mỗi thương hiệu sẽ có những ưu, nhược điểm khác nhau nhưng đều thể hiện được sự vượt trội
          của mình ở một dòng sản phẩm nhất định. Từ đó mang tới cho khách hàng nhưng sự lựa chọn đa
          dạng và phù hợp nhất với nhu cầu sử dụng của mình.
        </p>
        <h6 className="font-weight-bold">Thiết kế</h6>
        <br />
        <p className="text-justify">
          Thiết kế của laptop cũng ảnh hưởng khá nhiều tới việc lựa chọn sản phẩm của người dùng.
          Thông thường những chiếc laptop chuyên dụng như gaming hoặc đồ hoạ có thiết kế khá nặng
          nề, hầm hồ để có thể chứa đựng được những linh kiện chất lượng.
        </p>
        <br />
        <p className="text-justify">
          Còn với những chiếc laptop sở hữu thiết mỏng nhẹ, thời trang thường dành cho học sinh,
          sinh viên hoặc những nhân viên văn phòng với những tác vụ nhẹ nhàng.
        </p>
        <br />
        <h6 className="font-weight-bold">Tính năng</h6>
        <br />
        <p className="text-justify">
          Với dòng laptop được thiết kế chuyên biệt như laptop gaming, đồ hoạ hoặc là các dòng
          laptop cao cấp sẽ có các tính năng riêng biệt như bảo mật vân tay, màn hình gập, màn hình
          cảm ứng, camera, âm thanh,...
        </p>
        <br />
        <p className="text-justify">
          Nếu bạn có nhu cầu sử dụng các tính năng này thì hãy cân nhắc lựa chọn cho mình chiếc
          laptop sao cho phù hợp nhất.
        </p>
        <br />
        <h6 className="font-weight-bold">Cấu hình</h6>
        <br />
        <p className="text-justify">
          Cấu hình của máy tính là yếu tố rất quan trọng ảnh hưởng tới khả năng xử lý của laptop.
          Mỗi một công việc, một nhu cầu sử dụng khác nhau sẽ đòi hỏi một cấu hình tương ứng để có
          thể xử lý tốt các công việc. Chính vì thế vậy bạn hãy tham khảo kỹ các yếu tố về cấu hình
          như: vi xử lý CPU, RAM, ổ cứng, card đồ hoạ trước khi lựa chọn nhé.
        </p>
        <br />
        <p className="text-justify">
          Nếu bạn chỉ dùng để xử lý các tác vụ văn phòng nhẹ nhàng hoặc sử dụng để lướt web, nghe
          nhạc hay xem phim thì chỉ cần những chiếc laptop có cấu hình bình thường. Tuy nhiên nếu
          công việc của bạn cần phải sử dụng các ứng dụng nặng như đồ hoạ, lập trình,... thì cần đầu
          tư chiếc laptop có cấu hình khoẻ, vi xử lý core i5 trở lên, card đồ hoạ rời, RAM từ
          8GB,... để xử lý mọi tác vụ mượt mà nhé.
        </p>
        <br />
        <h6 className="font-weight-bold">Màn hình</h6>
        <br />
        <p className="text-justify">
          Màn hình là thiết bị mà bạn tiếp xúc thường xuyên khi sử dụng laptop do đó nên công nghệ
          màn hình cũng rất quan trọng và ảnh hưởng trực tiếp tới trải nghiệm sử dụng của bạn.
        </p>
        <br />
        <p className="text-justify">
          Đối với những người làm thiết kế đồ hoạ, màn hình cần được sử dụng công nghệ mới để mang
          lại chất lượng tốt nhất và màu sắc chân thực. Từ đó giảm thiểu tối đa tình trạng nhòe nét
          với những góc độ khác nhau. Thậm chí chúng còn góp phần giảm thiểu tình trạng mỏi mắt đối
          với những người có tần suất sử dụng liên tục trong nhiều giờ liền.
        </p>
        <br />
        <h6 className="font-weight-bold">Cổng kết nối</h6>
        <br />
        <p className="text-justify">
          Hiện tại, một số dòng laptop được thiết kế mỏng nhẹ, chạy theo xu hướng sẽ lược bỏ một số
          cổng kết nối. Chính vì vậy, tuỳ thuộc vào công việc của bạn có đòi hỏi phải kết nối với
          các thiết bị ngoại vi hoặc chia sẻ màn hình, dữ liệu hay không để các bạn có thể lựa chọn
          thiết kế mỏng nhẹ, nhỏ gọn.
        </p>
        <br />
        <h6 className="font-weight-bold">Thời lượng pin</h6>
        <br />
        <p className="text-justify">
          Nếu bạn đang mua một máy tính xách tay có thiết kế hơi cồng kềnh thì bạn sẽ chỉ sử dụng
          trên bàn gần ổ cắm điện nên bạn không phải lo lắng về thời lượng pin. Tuy nhiên, nếu bạn
          là người hay phải làm việc bên ngoài, hay phải di chuyển thì dung lượng pin ít nhất được 7
          giờ bền bỉ hoặc 8 giờ trở lên là lý tưởng.
        </p>
        <br />
        <p className="text-justify">
          Để xác định được thời lượng pin dự kiến của máy tính xách tay bạn hãy tham khảo các thông
          tin của bên thứ 3 hoặc những người đã từng sử dụng. Đây chắc chắn sẽ là thông tin chính
          xác và hữu ích cho bạn.
        </p>
        <br />
        <h6 className="font-weight-bold">Bàn phím và toochpad</h6>
        <br />
        <p className="text-justify">
          Bàn phím và touchpad cũng là yếu tố ảnh hưởng tới quyết định chọn mua laptop của bạn. Nếu
          bạn định làm việc nhiều trên máy tính thì hãy lựa chọn loại bàn phím có độ nảy tốt, hành
          trình phím ngắn để mang lại cảm giác tốt hơn khi sử dụng.
        </p>
        <br />
        <p className="text-justify">
          Ngoài ra, một bàn di chuột tốt sẽ giúp thao tác với con trỏ nhanh và phản hồi nhất quán
          với các cử chỉ cảm ứng đa điểm như là chụm để thu phóng. Đặc biệt, nếu bạn đang tìm kiếm
          chiếc laptop cho doanh nhân, hãy cân nhắc nub giữa các phím G và H để bạn có thể dễ dàng
          điều hướng xung quanh màn hình.
        </p>
        <br />
        <h6 className="font-weight-bold">Phân khúc giá</h6>
        <br />
        <p className="text-justify">
          Hiện tại laptop trên thị trường đang được bán với rất nhiều mức giá khác nhau. Bạn có thể
          sở hữu một chiếc laptop mới chỉ với giá hơn 5 triệu đồng. Tuy nhiên những trang bị và tính
          năng trên máy thường giới hạn và chỉ giải quyết được các công việc nhẹ nhàng.
        </p>
        <br />
        <p className="text-justify">
          Trong trường hợp bạn có thể chi tiêu nhiều hơn, bạn sẽ nhận được một hệ thống chất lượng
          tốt hơn, hiệu suất mạnh hơn và màn hình hiển thị sống động hơn. Từ đó, trải nghiệm mang
          lại sẽ ấn tượng hơn.
        </p>
        <br />
        <h4 className="font-weight-bold">Phân loại laptop theo thương hiệu</h4>
        <br />
        <h6 className="font-weight-bold">Macbook</h6>
        <br />
        <p className="text-justify">
          Apple là gã khổng lồ công nghệ không chỉ mang đến cho người dùng những mẫu laptop chất
          lượng cao cấp mà dịch vụ khách hàng của thương hiệu khiến người dùng cảm thấy vô cùng ấn
          tượng.
        </p>
        <br />
        <img src={Laptop9} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Macbook hiện tại có các dòng máy phổ biến là: Macbook Air và Macbook Pro. Tất cả đều được
          thiết kế sang trọng, tinh tế, độ bền cao. Đặc biệt là hiệu năng vô cùng mạnh mẽ giúp mọi
          công việc đều được xử lý nhanh chóng, mượt mà.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop Dell</h6>
        <br />
        <p className="text-justify">
          Dell là cái tên khá quen thuộc trên thị trường laptop hiện nay với các sản phẩm vô cùng
          phong phú và đa dạng đáp ứng được tối đa nhu cầu sử dụng của người dùng. Bên cạnh đó, giá
          thành của chúng vô cùng phải chăng cùng độ bền bỉ vượt trội đã thu hút được đông đảo người
          dùng lựa chọn.
        </p>
        <br />
        <p className="text-justify">
          Dell luôn không ngừng nghiên cứu phát triển và cải tiến để nâng cấp sản phẩm lên tầm cao
          mới. Và đây là thương hiệu laptop tốt nhất được người tiêu dùng bình chọn.
        </p>
        <br />
        <h6 className="font-weight-bold">Laptop Asus</h6>
        <br />
        <p className="text-justify">
          Là thương hiệu cũng không kém phần nổi bật laptop Asus gây ấn tượng với người dùng nhờ
          thiết kế trẻ trung, sang trọng, cấu hình ổn định và đủ các phân khúc khác nhau.
        </p>
        <br />
        <img src={Laptop10} width="100%" height="100%" />
        <br />
        <br />
        <p className="text-justify">
          Ngoài ra, các linh kiện trang bị trên máy như màn hình, bàn phím... đều được đánh giá cao
          về độ chất lượng cũng như tuổi thọ bền bỉ. Người dùng sẽ không cần quá lo lắng về vấn đề
          hư linh kiện khi sử dụng được một thời gian đâu.
        </p>
        <br />
        <div>
          <h6 className="font-weight-bold">Microsoft Surface</h6>
          <br />
          <p className="text-justify">
            Microsoft Surface là thương hiệu nổi tiếng với các dòng laptop 2 in 1 độc đáo và vô cùng
            ấn tượng. Tất cả các sản phẩm đều được trang bị màn hình cảm ứng đa điểm với độ mượt mà
            và trải nghiệm vuốt chạm cực nhạy.
          </p>
          <br />
          <p className="text-justify">
            Ngoài ra, với khả năng chuyển đổi linh hoạt từ máy tính sang máy tính bảng giúp mang tới
            sự tiện lợi vượt trội cho người dùng. Đây cũng chính là điểm khác biệt nổi bật hơn hẳn
            của Microsoft Surface so với những chiếc laptop có khả năng cảm ứng khác trên thị
            trường.
          </p>
          <br />
          <h6 className="font-weight-bold">LG Gram</h6>
          <br />
          <p className="text-justify">
            LG Gram là thương hiệu laptop tới từ Hàn Quốc nổi bật với thiết kế gọn nhẹ, màn hình
            chất lượng, hiệu suất tốt, pin cực trâu và rất nhiều tính năng nổi bật.
          </p>
          <br />
          <p className="text-justify">
            Tuy đây không phải là thương hiệu chuyên về laptop nhưng với danh tiếng của mình, LG hứa
            hẹn sẽ mang tới cho khách hàng những chiếc laptop chất lượng nhất và trải nghiệm ấn
            tượng nhất.
          </p>
          <br />
          <h6 className="font-weight-bold">Laptop HP</h6>
          <br />
          <p className="text-justify">
            HP có lẽ là một trong những thương hiệu laptop uy tín, chất lượng và được đông đảo khách
            hàng tin tưởng sử dụng ở thời điểm hiện tại. Các sản phẩm laptop HP cung cấp cho người
            dùng phần cứng máy như CPU, RAM, card màn hình chất lượng và độ bền bỉ cao. Đặc biệt pin
            rất tốt, tuổi thọ cao và có thể sử dụng trong một thời gian dài.
          </p>
          <br />
          <h6 className="font-weight-bold">Laptop Acer</h6>
          <br />
          <p className="text-justify">
            Acer là thương hiệu laptop được đến từ Đài Loan. Các sản phẩm laptop của thương hiệu
            cũng vô cùng phong phú và đa dạng trải khắp các phân khúc khác nhau mang đến cho người
            dùng thêm nhiều sự lựa chọn.
          </p>
          <br />
          <p className="text-justify">
            Ngoài ra, giá thành của Acer khá rẻ cùng với đó là chế độ bảo hành tối ưu. Do đó, mọi
            đối tượng khách hàng đều có thể sở hữu và sử dụng.
          </p>
        </div>
        <br />
        <h6 className="font-weight-bold">Kinh nghiệm bảo quản máy tính xách tay bền lâu hơn</h6>
        <br />
        <p className="text-justify">
          Là thiết bị điện tử nên độ bền và tuổi thọ của máy tính cũng một phần phụ thuộc vào cách
          sử dụng và bảo quản của người dùng. Để laptop được mượt mà và có thể sử dụng lâu bạn hãy
          tham khảo ngay những lưu ý dưới đây:
        </p>
        <br />
        <p>
          -&nbsp;Để laptop đúng chỗ: Laptop nên được để ở bề mặt phẳng, rộng và thoáng đãng, không
          nên để laptop gần nơi có nước hay lửa. Không nên đặt máy tính lên đùi hay là lên đệm, chăn
          màn, hoặc là ghế, salon,… bởi vì nó ảnh hưởng tới khả năng tản nhiệt và dễ gây ra hiện
          tượng cháy, nổ.
        </p>
        <br />
        <p>
          -&nbsp;Sử dụng túi xách chuyên dụng để bảo vệ: Sóc hoặc va đập là nguyên nhân chính dẫn
          tới tình trạng hỏng hóc phần cứng trên máy. Do đó, khi mang laptop di chuyển bạn nên đựng
          trong túi xách chuyên dụng hoặc bỏ trong túi chống sốc trước khi bỏ vào trong balo nhé.
        </p>
        <br />
        <img src={Laptop11} width="100%" height="100%" />
        <br />
        <br />
        <p>
          -&nbsp;Đối với màn hình: Không nên tác động mạnh vào màn hình máy laptop. Đặc biệt là khi
          bạn vệ sinh màn hình. Cần dùng loại vải mềm mại, mỏng và khô nước. Bởi vì chúng có thể gây
          xước hoặc là chập mạch điện.
        </p>
        <br />
        <p>
          -&nbsp;Đối với pin: Khi pin còn khoảng 10% thì người dùng mới nên cắm sạc. Nếu pin laptop
          còn đầy hoặc còn một nửa đã cắm sạc thì pin laptop thì sẽ dễ bị chai. Đặc biệt không nên
          để laptop bị sập nguồn.
        </p>
        <br />
        <p>
          -&nbsp;Đối với bàn phím: Nên đánh máy tính nhẹ nhàng và vệ sinh thường xuyên bằng máy hút
          bụi mini USB. Bên cạnh đó, hãy dùng bàn phím thường xuyên để tránh phím bị đơ, chết.
        </p>
        <br />
        <p>
          -&nbsp;Đối với những phần: Trong quá trình sử dụng có nhiều link chứa các mã độc có thể
          khiến cho laptop của bạn bị nhiễm virus. Do vậy hãy kiểm tra độ an toàn của các link trước
          khi nhấp vào nhé.
        </p>
        <br />
        <h6 className="font-weight-bold">Mua laptop chính hãng ở đâu uy tín</h6>
        <br />
        <p>
          Lựa chọn được một địa điểm uy tín để bạn yên tâm mua sắm và điều thường khiến chúng ta đau
          đầu bởi có quá nhiều cửa hàng mọc lên nhưng nấm nhưng không phải nơi nào cũng đảm bảo rằng
          hàng chính hãng.
        </p>
        <br />
        <p>
          Nếu bạn chưa chọn được cho mình một nơi để yên tâm mua sắm laptop. Đến với CellphoneS để
          được hưởng nhiều quyền lợi tốt nhất. Cellphones là hệ thống cửa hàng chuyên cung cấp các
          sản phẩm công nghệ, phụ kiện, sim số đẹp, máy tính để bàn chính hãng hàng đầu Việt Nam.
        </p>
      </div>
    );
  }
}

export default IntroduceLaptop;
