import './advertisement.css';

import Advertisement1 from '../../../../assets/images/S21_FE.png';
import Advertisement2 from '../../../../assets/images/Right_banner_1.png';
import Advertisement3 from '../../../../assets/images/Right_banner_AW.png';

function Advertisement() {
  const advertisementArray = [Advertisement1, Advertisement2, Advertisement3];

  return (
    <div className="advertisement">
      {advertisementArray.map((item, index) => (
        <a className="a-banner" key={index}>
          <img src={item} alt={`Advertisement${index}`} width="100%" height="100%" />
        </a>
      ))}
    </div>
  );
}

export default Advertisement;
