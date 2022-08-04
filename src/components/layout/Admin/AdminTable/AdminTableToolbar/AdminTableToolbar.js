import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AdminProductForm from '../../AdminProductForm/AdminProductForm.js';
import AdminUserForm from '../../AdminUserForm/AdminUserForm';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Modal } from 'react-bootstrap';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { setAddNavigation } from '../../../../../redux/action.js';
import { useLocation } from 'react-router-dom';

function EnhancedTableToolbar() {
  const dispatch = useDispatch();

  const [pathName] = React.useState(useLocation().pathname);

  const navigation_add = useSelector((state) => state.admin.navigation_add);

  const [modalShow, setModalShow] = React.useState(false);

  const toggleDrawer = () => {
    dispatch(setAddNavigation(!navigation_add));
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}>
      <Typography
        sx={{ flex: '1 1 100%', fontWeight: 700 }}
        variant="h6"
        id="tableTitle"
        component="div">
        {pathName === '/admin/products' && 'SẢN PHẨM'}
        {pathName === '/admin/bills' && 'HÓA ĐƠN'}
        {pathName === '/admin/users' && 'USERS'}
      </Typography>
      {pathName === '/admin/users' && (
        <div>
          <Tooltip title="Thêm user">
            <IconButton onClick={() => setModalShow(true)}>
              <AddCircleRoundedIcon color="red" />
            </IconButton>
          </Tooltip>
          <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="md">
            <Modal.Header className="bg-red text-white">
              <h5 className="font-weight-bold">Thêm user</h5>
              <CloseRoundedIcon
                onClick={() => setModalShow(false)}
                className="text-white cursor-pointer"
              />
            </Modal.Header>
            <Modal.Body className="p-0 bg-grey">
              <AdminUserForm />
            </Modal.Body>
          </Modal>
        </div>
      )}

      {pathName === '/admin/products' && (
        <div>
          <Tooltip title="Thêm sản phẩm">
            <IconButton onClick={toggleDrawer}>
              <AddCircleRoundedIcon color="red" />
            </IconButton>
          </Tooltip>
          <Drawer
            variant="temporary"
            anchor="right"
            open={navigation_add}
            PaperProps={{
              sx: { width: 600 }
            }}
            onClose={toggleDrawer}>
            <AppBar className="admin-product-header-form" position="sticky" color="red">
              <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                  <h5 className="text-white font-weight-bold">Thêm sản phẩm mới</h5>
                </Box>
                <IconButton color="white" component="span" onClick={toggleDrawer}>
                  <CloseRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <AdminProductForm />
          </Drawer>
        </div>
      )}
    </Toolbar>
  );
}

export default EnhancedTableToolbar;
