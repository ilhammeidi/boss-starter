import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import TableCell from '@material-ui/core/TableCell';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import css from 'boss-styles/Table.scss';

const styles = {
  datepicker: {
    '& button': {
      top: 0
    }
  }
};

function TimePickerCell(props) {
  const {
    edited,
    cellData,
    theme,
    classes,
    updateRow,
    branch
  } = props;

  const [event] = useState({
    target: {
      name: cellData.type,
      value: cellData.value
    }
  });

  const handleTimeChange = useCallback(date => {
    event.target.value = date;
    updateRow(event, branch);
  }, [event, updateRow, branch]);

  return (
    <TableCell className={classes.datepicker}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <TimePicker
          name={cellData.type}
          className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
          mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
          placeholder="08:00 AM"
          value={event.target.value}
          disabled={!edited}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Icon>access_time</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleTimeChange}
        />
      </MuiPickersUtilsProvider>
    </TableCell>
  );
}

TimePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TimePickerCell);
