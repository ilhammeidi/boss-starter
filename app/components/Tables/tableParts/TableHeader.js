import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

function TableHeader(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    columnData,
    checkcell,
    onRequestSort
  } = props;

  const createSortHandler = (event, property) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {checkcell && (
          <TableCell padding="checkbox" width="80">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {columnData.map(column => (
          <TableCell
            padding="normal"
            key={column.id}
            align={column.numeric ? 'right' : 'left'}
            sortDirection={orderBy === column.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={column.numeric ? 'bottom-end' : 'bottom-start'}
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={order}
                onClick={(e) => createSortHandler(e, column.id)}
              >
                {column.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columnData: PropTypes.array.isRequired,
  checkcell: PropTypes.bool,
};

TableHeader.defaultProps = {
  onSelectAllClick: () => {},
  checkcell: false
};

export default TableHeader;
