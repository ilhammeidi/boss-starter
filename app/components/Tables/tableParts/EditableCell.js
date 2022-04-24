import React, { useCallback } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import css from 'boss-styles/Table.scss';

const styles = {};

function EditableCell(props) {
  const {
    cellData,
    edited,
    inputType,
    theme,
    updateRow,
    branch
  } = props;

  const handleUpdate = useCallback((event) => {
    event.persist();
    updateRow(event, branch);
  }, [updateRow, branch]);

  switch (inputType) {
    case 'text':
      return (
        <TableCell padding="normal">
          <TextField
            placeholder={cellData.type}
            name={cellData.type}
            className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
            id={cellData.id.toString()}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            disabled={!edited}
            margin="none"
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </TableCell>
      );
    case 'number':
      return (
        <TableCell padding="none">
          <TextField
            id={cellData.id.toString()}
            name={cellData.type}
            className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="none"
            disabled={!edited}
          />
        </TableCell>
      );
    default:
      return (
        <TableCell padding="normal">
          <TextField
            placeholder={cellData.type}
            name={cellData.type}
            className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
            id={cellData.id.toString()}
            value={cellData.value}
            onChange={(event) => handleUpdate(event)}
            disabled={!edited}
            margin="none"
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </TableCell>
      );
  }
}

EditableCell.propTypes = {
  inputType: PropTypes.string.isRequired,
  cellData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(EditableCell);
