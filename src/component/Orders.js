import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, pstate, proj, deadline) {
  return { id, name, pstate, proj, deadline};
}

const rows = [
  createData(0, '업무명 1', '진행중', '기억극장', '~4/13'),
  createData(1, '업무명 2', '진행 예정', '기억극장', ''),
  createData(2, '업무명 3', '지연', '플라잉', '~3/16'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  Table:{
    backgroundColor:"#fbfcfe"
  },
  row : {
    width: "90%",
    margin : "dense",
    backgroundColor:"#ffffff"
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>나의 업무</Title>
      <Table className={classes.Table}>
        <TableHead>
          <TableRow>
            <TableCell>업무</TableCell>
            <TableCell>상태</TableCell>
            <TableCell>프로젝트</TableCell>
            <TableCell>마감일</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.row} key={row.id}>
              <TableCell width="50%">{row.name}</TableCell>
              <TableCell width="15%">{row.pstate}</TableCell>
              <TableCell width="15%">{row.proj}</TableCell>
              <TableCell width="20%">{row.deadline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}