import * as React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function BoxTitle({ title, items }) {
  let chipArray = [];
  if (items.length > 0) {
    chipArray = items.map((item, index) => <Chip key={index} label={item.label} />);
  }

  return (
    <div className="d-flex align-center">
      <a className="flex-1">
        <p className="font-32 font-weight-bold text-hover-underline">{title}</p>
      </a>
      <div>
        <Stack direction="row" spacing={1}>
          {chipArray}
        </Stack>
      </div>
    </div>
  );
}

BoxTitle.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default BoxTitle;
