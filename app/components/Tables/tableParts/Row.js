import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/BorderColor';
import DoneIcon from '@material-ui/icons/Done';
import css from 'boss-styles/Table.scss';
import EditableCell from './EditableCell';
import SelectableCell from './SelectableCell';
import ToggleCell from './ToggleCell';
import DatePickerCell from './DatePickerCell';
import TimePickerCell from './TimePickerCell';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
});

function Row(props) {
  const {
    classes,
    anchor,
    item,
    removeRow,
    updateRow,
    editRow,
    finishEditRow,
    branch
  } = props;

  const eventDel = useCallback(() => {
    removeRow(item, branch);
  }, [removeRow, item, branch]);

  const eventEdit = useCallback(() => {
    editRow(item, branch);
  }, [editRow, item, branch]);

  const eventDone = useCallback(() => {
    finishEditRow(item, branch);
  }, [finishEditRow, item, branch]);

  const renderCell = dataArray => dataArray.map((itemCell, index) => {
    if (itemCell.name !== 'action' && !itemCell.hidden) {
      const inputType = anchor[index].type;
      switch (inputType) {
        case 'selection':
          return (
            <SelectableCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              options={anchor[index].options}
              branch={branch}
            />
          );
        case 'toggle':
          return (
            <ToggleCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        case 'date':
          return (
            <DatePickerCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        case 'time':
          return (
            <TimePickerCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              branch={branch}
            />
          );
        default:
          return (
            <EditableCell
              updateRow={(event) => updateRow(event, branch)}
              cellData={{
                type: itemCell.name,
                value: item[itemCell.name],
                id: item.id,
              }}
              edited={item.edited}
              key={index.toString()}
              inputType={inputType}
              branch={branch}
            />
          );
      }
    }
    return false;
  });
  return (
    <tr className={item.edited ? css.editing : ''}>
      {renderCell(anchor)}
      <TableCell padding="none">
        <IconButton
          onClick={() => eventEdit(this)}
          className={classNames((item.edited ? css.hideAction : ''), classes.button)}
          aria-label="Edit"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => eventDone(this)}
          color="secondary"
          className={classNames((!item.edited ? css.hideAction : ''), classes.button)}
          aria-label="Done"
        >
          <DoneIcon />
        </IconButton>
        <IconButton
          onClick={() => eventDel(this)}
          className={classes.button}
          aria-label="Delete"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </tr>
  );
}

Row.propTypes = {
  classes: PropTypes.object.isRequired,
  anchor: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired
};

export default withStyles(styles)(Row);
