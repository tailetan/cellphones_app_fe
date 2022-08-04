import * as React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa';

import AdminNoData from '../../components/layout/Admin/AdminNoData/AdminNoData.js';
import BoxProduct from '../../components/layout/BoxProduct/BoxProduct.js';
import CardProduct from '../../components/layout/CardProduct/CardProduct.js';
import { Chip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import IntroduceAccessory from './IntroduceAccessory.js';
import IntroduceLaptop from './IntroduceLaptop.js';
import IntroducePhone from './IntroducePhone.js';
import IntroduceTablet from './IntroduceTablet.js';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import { brandList } from '../../assets/data/phone_brand.js';

function Phone(props) {
  return (
    <>
      <div className="d-flex flex-wrap align-items-center">
        {props.search === '' &&
          brandList.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '5px 10px',
                margin: '0 10px 10px 0',
                border: '1px solid #e5e7eb',
                borderRadius: '10px'
              }}
              onClick={() => props.handleBrand(item.name)}>
              <img src={item.logo} alt={item.name} style={{ height: '15px', maxWidth: 'none' }} />
            </div>
          ))}
      </div>
      <div className="m-t-4">
        {props.data.length > 0 && (
          <>
            <h5 className="font-weight-bold">Sắp xếp theo</h5>
            <div className="d-flex flex-wrap m-t-4">
              <Chip
                label="Giá Cao - Thấp"
                icon={<FaSortAmountDown />}
                sx={{
                  backgroundColor: '#f3f4f6',
                  color: 'black.main',
                  fontWeight: 700,
                  borderRadius: '10px',
                  border: `2px solid ${props.sort === 'desc' ? '#ff0000' : '#e5e7eb'}`,
                  fontSize: '12px'
                }}
                onClick={() => props.handleSort('desc')}
              />
              <Chip
                label="Giá Thấp - Cao"
                icon={<FaSortAmountDownAlt />}
                sx={{
                  backgroundColor: '#f3f4f6',
                  color: 'black.main',
                  fontWeight: 700,
                  borderRadius: '10px',
                  border: `2px solid ${props.sort === 'asc' ? '#ff0000' : '#e5e7eb'}`,
                  fontSize: '12px',
                  marginLeft: '10px'
                }}
                onClick={() => props.handleSort('asc')}
              />
            </div>
          </>
        )}
        {props.loading && (
          <div className="m-y-4 my-5 d-flex flex-column align-items-center justify-content-center">
            <CircularProgress color="red" />
            <h6 className="font-weight-bold m-t-3">Đang tải dữ liệu, vui lòng đợi</h6>
          </div>
        )}
        {!props.loading && (
          <>
            {props.data.length > 0 ? (
              <div className="w-full d-flex flex-wrap p-t-4">
                {props.data.map((item, index) => (
                  <BoxProduct key={index}>
                    <CardProduct item={item} />
                  </BoxProduct>
                ))}
              </div>
            ) : (
              <div className="m-b-4">
                <AdminNoData isAdmin="false" />
              </div>
            )}
          </>
        )}

        {!props.loading && props.data.length > 0 && (
          <div className="d-flex justify-content-center m-y-3">
            <div>
              <Pagination
                count={parseInt(props.total_page)}
                page={parseInt(props.page)}
                onChange={props.onChangePage}
                variant="outlined"
                color="red"
                shape="rounded"
              />
            </div>
          </div>
        )}
      </div>
      {props.search === '' && (
        <Row>
          <Col xs={8}>
            <div
              style={{
                boxShadow:
                  'rgb(60 64 67 / 10%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px',
                borderRadius: '1rem',
                padding: '12px'
              }}>
              {props.display_cate === 'Điện Thoại' && <IntroducePhone />}
              {props.display_cate === 'Laptop' && <IntroduceLaptop />}
              {props.display_cate === 'Tablet' && <IntroduceTablet />}
              {props.display_cate === 'Phụ kiện' && <IntroduceAccessory />}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

Phone.propTypes = {
  data: PropTypes.any,
  page: PropTypes.any,
  total_page: PropTypes.any,
  sort: PropTypes.any,
  loading: PropTypes.any,
  search: PropTypes.any,
  display_cate: PropTypes.any,
  onChangePage: PropTypes.func,
  handleBrand: PropTypes.func,
  handleSort: PropTypes.func
};

export default Phone;
