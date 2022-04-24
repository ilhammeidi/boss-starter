import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import css from 'boss-styles/Table.scss';

const styles = {
  datepicker: {
    '& button': {
      top: 0
    }
  }
};

function DatePickerCell(props) {
  const {
    edited,
    cellData,
    theme,
    classes,
    branch,
    updateRow
  } = props;

  const [state] = useState({
    event: {
      target: {
        name: cellData.type, // eslint-disable-line
        value: cellData.value, // eslint-disable-line
      }
    }
  });

  const handleDateChange = useCallback(date => {
    const { event } = state;
    event.target.value = date;
    updateRow(event, branch);
  }, [updateRow, branch]);

  const { event } = state;
  return (
    <TableCell textalign="center" className={classes.datepicker}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          clearable
          name={cellData.type}
          className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
          format="DD/MM/YYYY"
          placeholder="10/10/2018"
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          value={event.target.value}
          disabled={!edited}
          onChange={handleDateChange}
          animateYearScrolling={false}
        />
      </MuiPickersUtilsProvider>
    </TableCell>
  );
}

DatePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DatePickerCell);
