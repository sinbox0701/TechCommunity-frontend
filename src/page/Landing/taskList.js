import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Box, ButtonBase} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [select,setSelect] = React.useState(0);

  const [tasks,setTasks] = React.useState([]);

  const perfNum = (window.location.href.split("=?")[1]);
  const category = ["[공연기획] 기술 적용 검토", "[계획수립] 기술 적용 확정", "[제작회의] 기술 활용형태 협의", "[연출제작] 기술 연출제작", "[연출설치]"];

  const handleClickOpen = (event,t) => {
    console.log(t)
    setSelect(t.TNum);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setTasks(data);
      })
  },[]);

  return (
      <Box>
        <Box style={{ height: 84, marginLeft:20, display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
            <Typography style={{  fontSize:20,  
                                fontWeight: 'bold',
                                fontStretch: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 'normal',
                                letterSpacing: 0,
                                color: "#6a6d74", 
                height: 84, marginLeft:20, display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                진척률 : 
            </Typography>
            <Typography style={{fontFamily: 'NotoSansCJKkr',   
                                fontSize:20,  
                                fontWeight: 'bold',
                                fontStretch: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 'normal',
                                letterSpacing: 0,
                                color: "#0068ff", 
                height: 84, marginLeft:10, display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                0%
            </Typography>
        </Box>
        
        
        <Box style={{ margin:20, display: 'flex', flexDirection: 'row', alignItems:"flex-start", justifyContent:"flex-start"}}>
            {
                category.map( (c,i) => 
                <Box style={{margin:8, backgroundColor: '#f7f8fa',width:312,display: 'flex',flexDirection: 'column', alignItems: 'center',marginLeft:20}}>
                    <Box style={{ width:312, display: 'flex',alignItems:"flex-start", justifyContent:"flex-start"}}>
                        <Typography style={{fontFamily: 'NotoSansCJKkr', 
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            fontStretch: 'normal',
                                            fontStyle: 'normal',
                                            lineHeight: 'normal',
                                            letterSpacing: 'normal',
                                            color: '#6a6d74',
                                    marginTop:16, marginBottom:16, marginLeft:16}}>
                            {c}
                        </Typography>
                    </Box>
                    <Box style={{ width:300, display: 'flex',flexDirection: 'column', alignItems: 'center'}}> 
                        {
                            tasks.map( (t,index) => 
                                {
                                    if (t.Dbool === true){
                                        if (t.category === i+1){
                                            return (
                                                <Box style={{backgroundColor: '#ffffff', width:280, height:88, marginBottom:12,
                                                            borderRadius: 5,
                                                            border: "solid 1px #cacfdb",
                                                            backgroundColor: "#ffffff",
                                                            boxShadow: "0 5px 16px -5px #a4a9b3",
                                                    }}>
                                                    <ButtonBase style={{ width:280, height:44, justifyContent:"flex-start"
                                                                }}
                                                            key={index} onClick={(event) => handleClickOpen(event,t)}>
                                                        <Typography style={{ marginLeft:12, fontSize:14}}>
                                                            {t.TName}
                                                        </Typography>
                                                    </ButtonBase>
                                                    {
                                                        select === t.TNum && 
                                                        <Dialog style={{marginTop:"5%", height: '100%',maxHeight: '200vh'}}
                                                            open={open} onClose={handleClose} TransitionComponent={Transition}>
                                                            <AppBar elevation={0} className={classes.appBar}>
                                                            <Toolbar>
                                                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                                                <CloseIcon />
                                                                </IconButton>
                                                                <Typography variant="h6" className={classes.title}>
                                                                Sound
                                                                </Typography>
                                                            </Toolbar>
                                                            </AppBar>
                                                            <List>
                                                            <ListItem button>
                                                                <ListItemText primary="Phone ringtone" secondary="Titania" />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem button>
                                                                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                                                            </ListItem>
                                                            </List>
                                                        </Dialog>
                                                    }
                                                    
                                                    

                                                    <Divider style={{marginLeft:10, width:260 ,border: "solid 0.1px #e3e7f0", }}/>
                                                    
                                                    <Box style={{ width:280, height:44,
                                                                display: 'flex',flexDirection: 'row', alignItems: 'center'
                                                                }}>
                                                        <ButtonBase style={{backgroundColor:"#f7f8fa",width:96,height:28, marginLeft: 10,
                                                                          borderRadius: 14
                                                                    }}>
                                                            공연 연출팀
                                                        </ButtonBase>
                                                        
                                                        <ButtonBase style={{marginLeft:112}}>
                                                            마감일
                                                        </ButtonBase>
                                                            
                                                    </Box>
                                                </Box>
                                            )
                                        }
                                        
                                    }
                                }
                            )
                        }
                    </Box>          
                </Box>  
                )
            }
        </Box>
    </Box>
    );
}