import * as React from 'react';

import Box from '@mui/material/Box';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function AuthenticateForm() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeValue = () => {
    setValue(1);
  };

  return (
    <div>
      <Tabs
        value={value}
        className="authenticate-tab"
        onChange={handleChange}
        aria-label="basic tabs example"
        centered>
        <Tab label="Quên mật khẩu" {...a11yProps(0)} />
        <Tab label="Đăng nhập" {...a11yProps(1)} />
        <Tab label="Đăng ký" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="p-y-4 d-flex justify-content-center">
          <ForgotPassword changeToLoginForm={changeValue} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="p-y-4 d-flex justify-content-center">
          <LoginForm />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="p-y-4 d-flex justify-content-center">
          <RegisterForm changeToLoginForm={changeValue} />
        </div>
      </TabPanel>
    </div>
  );
}

export default AuthenticateForm;
