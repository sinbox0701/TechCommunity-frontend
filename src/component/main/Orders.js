import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
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
                  <Typography style={{  fontFamily: 'NotoSansCJKkr',
                                  fontSize: 20,
                                  fontWeight: 550,
                                  fontStretch: 'normal',
                                  fontStyle: 'normal',
                                  lineHeight: 'normal',
                                  letterSpacing: 'normal',
                                  color: '#232426',
            marginLeft:20}}
            >나의 업무</Typography>
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