import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import themePallete from 'ba-api/themePalette';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import tableStyles from 'ba-styles/Table.scss';
import pink from '@material-ui/core/colors/pink';
import { PapperBlock } from 'ba-components';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 5800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
];

const chartTheme = createMuiTheme(themePallete.orangeTheme);
const color = ({
  main: chartTheme.palette.primary.main,
  maindark: chartTheme.palette.primary.dark,
  secondary: chartTheme.palette.secondary.main,
  third: pink[500],
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function StrippedTable(props) {
  const { classes } = props;

  return (
    <div>
      <PapperBlock title="Chart Analytics" desc="">
        <div className={props.classes.chartFluid}>
          <ResponsiveContainer>
            <ComposedChart
              width={800}
              height={450}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <XAxis dataKey="name" tickLine={false} />
              <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <CartesianAxis vertical={false} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fillOpacity="0.8" fill={color.main} stroke="none" />
              <Bar dataKey="pv" barSize={60} fillOpacity="0.8" fill={color.secondary} />
              <Line type="monotone" dataKey="uv" strokeWidth={4} stroke={color.third} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </PapperBlock>
      <PapperBlock title="Table Analytics" desc="">
        <Table className={classNames(classes.table, tableStyles.stripped)}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n =>
              ([
                <TableRow key={n.id}>
                  <TableCell>{n.name}</TableCell>
                  <TableCell align="right">{n.calories}</TableCell>
                  <TableCell align="right">{n.fat}</TableCell>
                  <TableCell align="right">{n.carbs}</TableCell>
                  <TableCell align="right">{n.protein}</TableCell>
                </TableRow>
              ])
            )}
          </TableBody>
        </Table>
      </PapperBlock>
    </div>
  );
}

StrippedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrippedTable);
