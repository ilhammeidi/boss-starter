import React, { useReducer, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import { cryptoData } from 'boss-api/chart/chartMiniData';
import { BarChart, Bar } from 'recharts';
import PapperBlock from '../PapperBlock/PapperBlock';
import EnhancedTableToolbar from './tableParts/TableToolbar';
import EnhancedTableHead from './tableParts/TableHeader';
import styles from './tableStyle-jss';

function TradingTable(props) {
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'SET_ORDER':
        return { ...state, order: payload };
      case 'SET_ORDERBY':
        return { ...state, orderBy: payload };
      case 'SET_SELECTED':
        return { ...state, selected: payload };
      case 'SET_DATA':
        return { ...state, data: payload };
      case 'SET_PAGE':
        return { ...state, page: payload };
      case 'SET_ROWSPERPAGE':
        return { ...state, rowsPerpage: payload };
      case 'SET_FILTERTEXT':
        return { ...state, filterText: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, props);

  const {
    order,
    orderBy,
    data,
    page,
    rowsPerPage,
    defaultPerPage,
    filterText,
    columnData
  } = state;

  const { classes } = props;

  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: data.sort((a, b) => (a.market < b.market ? -1 : 1)) });
  }, []);

  const handleRequestSort = useCallback((event, property) => {
    const orderByAlias = property;
    let orderLet = 'desc';
    if (orderBy === property && order === 'desc') {
      orderLet = 'asc';
    }

    const dataAlias = orderLet === 'desc'
      ? data.sort((a, b) => (b[orderByAlias] < a[orderByAlias] ? -1 : 1))
      : data.sort((a, b) => (a[orderByAlias] < b[orderByAlias] ? -1 : 1));

    dispatch({ type: 'SET_DATA', payload: dataAlias });
    dispatch({ type: 'SET_ORDER', payload: orderLet });
    dispatch({ type: 'SET_ORDERBY', payload: orderByAlias });
  }, [order, orderBy, data]);

  const handleChangePage = useCallback((event, selectedPage) => {
    dispatch({ type: 'SET_PAGE', payload: selectedPage });
  }, []);

  const handleChangeRowsPerPage = useCallback(event => {
    dispatch({ type: 'SET_ROWSPERPAGE', payload: event.target.value });
    dispatch({ type: 'SET_PAGE', payload: 0 });
  }, []);

  const handleUserInput = useCallback((value) => {
    // Show all item first
    if (value !== '') {
      dispatch({ type: 'SET_ROWSPERPAGE', payload: data.length });
    } else {
      dispatch({ type: 'SET_ROWSPERPAGE', payload: defaultPerPage });
    }
    dispatch({ type: 'SET_FILTERTEXT', payload: value.toLowerCase() });
  }, [data, defaultPerPage]);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));
  const getCondition = (pos, val) => {
    if (pos === 'up') {
      return (
        <span className={classes.up}>
          <TrendingUp />
          &nbsp;
          {val}
          %
        </span>
      );
    }
    if (pos === 'down') {
      return (
        <span className={classes.down}>
          <TrendingDown />
          &nbsp;
          {val}
          %
        </span>
      );
    }
    return (
      <span className={classes.flat}>
        <TrendingFlat />
        &nbsp;0%
      </span>
    );
  };
  const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => {
    if (itemCell.id === 'market') {
      return (
        <TableCell padding="normal" align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>
          <div className={classes.flex}>
            <Avatar alt={dataArray.name} src={dataArray.logo} className={classes.avatar} />
            <div>
              <Typography variant="subtitle1">{dataArray[itemCell.id]}</Typography>
              <Typography variant="caption">{dataArray.name}</Typography>
            </div>
          </div>
        </TableCell>
      );
    }
    if (itemCell.id === 'change') {
      return (
        <TableCell padding="normal" align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>
          { getCondition(dataArray.position, dataArray[itemCell.id]) }
        </TableCell>
      );
    }
    if (itemCell.id === 'stats') {
      return (
        <TableCell padding="normal" align={itemCell.numeric ? 'right' : 'left'} key={index.toString()} className={classes.chartTable}>
          <BarChart width={100} height={40} data={cryptoData}>
            <Bar isAnimationActive={false} dataKey={dataArray.stats} />
          </BarChart>
        </TableCell>
      );
    }
    return (
      <TableCell padding="normal" align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>{dataArray[itemCell.id]}</TableCell>
    );
  });
  return (
    <PapperBlock noMargin title="Marketplace" icon="ion-ios-basket-outline" whiteBg desc="Explore more than 10 crytocurrency markets.">
      <div className={classes.rootTable}>
        <EnhancedTableToolbar
          numSelected={0}
          filterText={filterText}
          onUserInput={(event) => handleUserInput(event)}
          title="USD Market"
          placeholder="Search Coin"
        />
        <div className={classes.tableWrapper}>
          <Table padding="normal" className={classNames(classes.table, classes.stripped, classes.hover)}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              columnData={columnData}
              numSelected={0}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
                if (n.name.toLowerCase().indexOf(filterText) === -1) {
                  return false;
                }
                return (
                  <TableRow
                    tabIndex={-1}
                    key={n.id}
                  >
                    {renderCell(n, columnData)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </PapperBlock>
  );
}

TradingTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TradingTable);
