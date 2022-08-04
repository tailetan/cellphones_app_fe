import ComputerTagData from '../../../../assets/data/computer-tag.json';
import ComputerData from '../../../../assets/data/computer.json';
import BoxTitle from '../../BoxTitle/BoxTitle.js';
import CardProduct from '../../CardProduct/CardProduct.js';
import BoxProduct from '../../BoxProduct/BoxProduct.js';

function Computer() {
  const computerTag = ComputerTagData.computer;
  const computer = ComputerData.computer;

  return (
    <div>
      <BoxTitle title="MÀN HÌNH, MÁY TÍNH ĐỂ BÀN" items={computerTag} />
      <div className="w-full d-flex flex-wrap p-t-4">
        {computer.map((item, index) => (
          <BoxProduct key={index}>
            <CardProduct item={item} />
          </BoxProduct>
        ))}
      </div>
    </div>
  );
}

export default Computer;
