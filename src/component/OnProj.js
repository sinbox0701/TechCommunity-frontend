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
    width: 250,
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
  new:{
      width:"100%",
      height:"100%",
  },
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },

  cardHead:{
      height: "60%"
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
    <Title>진행중인 공연</Title>
    <div className={classes.items}>

    <Card className={classes.root}>
        <CardHeader
            className={classes.cardHead}
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="기억극장"
            subheader="콘서트"
        />
        <Divider/>
        <CardContent className={classes.progress}>
            <Typography color="primary">{`${15}%`}</Typography>
            <LinearProgress variant="determinate" value={15} />
        </CardContent>
        </Card>

        <Card className={classes.root}>
        <CardHeader
            className={classes.cardHead}
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="플라잉"
            subheader="뮤지컬"
        />
        <Divider/>
        <CardContent className={classes.progress}>
            <Typography color="primary">{`${completed}%`}</Typography>
            <LinearProgress variant="determinate" value={completed} />
        </CardContent>
        </Card>

        <Card className={classes.root}>
            <ButtonBase className={classes.new}>
                <AddIcon />
                새로운 공연
            </ButtonBase>
        </Card>

    </div>

    </div>
  );
}