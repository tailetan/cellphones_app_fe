import './admintable.css';

import * as React from 'react';

import { Box, CircularProgress, Paper, Stack, Table, TableContainer } from '@mui/material';

import AdminNoData from '../AdminNoData/AdminNoData.js';
import AdminProductForm from '../AdminProductForm/AdminProductForm';
import AdminTableBody from './AdminTableBody/AdminTableBody.js';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EnhancedTableHead from './AdminTableHeading/AdminTableHeading.js';
import EnhancedTableToolbar from './AdminTableToolbar/AdminTableToolbar.js';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function EnhancedTable(props) {
  const { rows, heading } = props;

  const skeleton = useSelector((state) => state.admin.skeleton);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(15);
  const [productItemData, setProductItemData] = React.useState({});

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const [modalShow, setModalShow] = React.useState(false);

  const editItem = (data) => {
    setProductItemData(data[0]);
    setModalShow(true);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Header className="bg-red text-white">
          <h5 className="font-weight-bold">Chỉnh sửa sản phẩm</h5>
          <CloseRoundedIcon
            onClick={() => setModalShow(false)}
            className="text-white cursor-pointer"
          />
        </Modal.Header>
        <Modal.Body className="p-0 modal-body-custom">
          <AdminProductForm
            productItemData={productItemData}
            setModal={() => setModalShow(false)}
          />
        </Modal.Body>
      </Modal>
      <Paper sx={{ width: '100%', mb: 2 }} elevation={0}>
        {!skeleton ? (
          <>
            {rows.length > 0 ? (
              <>
                <EnhancedTableToolbar productItemData={productItemData} />
                <TableContainer>
                  <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                    <EnhancedTableHead
                      order={order}
                      orderBy={orderBy}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                      headCells={heading}
                    />
                    <AdminTableBody
                      rows={rows}
                      order={order}
                      orderBy={orderBy}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      editItem={editItem}
                    />
                  </Table>
                </TableContainer>
              </>
            ) : (
              <AdminNoData isAdmin="true" />
            )}
          </>
        ) : (
          <Stack
            sx={{ height: '50vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress sx={{ color: 'red.main' }} />
            <h5 className="m-t-4 font-weight-bold">Dữ liệu đang được tải ...</h5>
          </Stack>
        )}
      </Paper>
    </Box>
  );
}

EnhancedTable.propTypes = {
  rows: PropTypes.array.isRequired,
  heading: PropTypes.array.isRequired
};
