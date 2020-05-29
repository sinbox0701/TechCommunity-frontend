import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import Title from './Title';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    items: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(2),
        },
      },
  
    root: {
    width: 280,
    height: 132,
    boxShadow: '0 3px 8px -2px #cacfdb',
    border: 'solid 1px #e3e7f0',
    backgroundColor: '#ffffff',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },

  cardHead:{
      height: 122,
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [completed, setCompleted] = React.useState(74);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Typography style={{  fontFamily: 'NotoSansCJKkr',
                                  fontSize: 20,
                                  fontWeight: 550,
                                  fontStretch: 'normal',
                                  fontStyle: 'normal',
                                  lineHeight: 'normal',
                                  letterSpacing: 'normal',
                                  color: '#232426',
            marginLeft:20}}
            >종료된 공연</Typography>
    <div className={classes.items}>

    <Card className={classes.root}>
        <CardHeader
            className={classes.cardHead}
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="여수엑스포"
            subheader="외부행사"
        />
        </Card>
    </div>

    </div>
  );
}