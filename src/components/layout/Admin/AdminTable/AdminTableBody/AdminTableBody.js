import * as React from "react";

import AdminBillBody from "../AdminBillBody/AdminBillBody.js";
import AdminProductBody from "../AdminProductBody/AdminProductBody.js";
import AdminUsersBody from "../AdminUsersBody/AdminUsersBody.js";
import PropTypes from "prop-types";
import StyledTableRow from "../../Custom/TableRow.js";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function AdminTableBody(props) {
  const { order, orderBy, page, rowsPerPage, rows } = props;

  const [pathName] = React.useState(useLocation().pathname);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const editItem = (data) => {
    props.editItem(data);
  };

  return (
    <TableBody>
      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
       rows.slice().sort(getComparator(order, orderBy)) */}
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <StyledTableRow role="checkbox" tabIndex={-1} key={row.id}>
              {pathName === "/admin/products" && (
                <AdminProductBody
                  row={row}
                  index={index}
                  labelId={labelId}
                  editItem={editItem}
                />
              )}
              {pathName === "/admin/bills" && (
                <AdminBillBody row={row} index={index} labelId={labelId} />
              )}
              {pathName === "/admin/users" && (
                <AdminUsersBody row={row} index={index} labelId={labelId} />
              )}
            </StyledTableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 55 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}

export default AdminTableBody;

AdminTableBody.propTypes = {
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  editItem: PropTypes.func.isRequired,
};
