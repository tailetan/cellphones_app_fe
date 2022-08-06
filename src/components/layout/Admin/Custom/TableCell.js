import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    paddingTop: "12px",
    paddingBottom: "12px",
    fontWeight: 500,
  },
}));

export default StyledTableCell;
