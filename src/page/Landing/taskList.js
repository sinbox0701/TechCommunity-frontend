import React from 'react';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme, } from '@material-ui/core/styles';
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
import Slide from '@material-ui/core/Slide';
import {Input, InputBase, Box, ButtonBase, Drawer, Grid, TextField, InputLabel, FormControl} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import ReplayIcon from '@material-ui/icons/Replay';
import TaskInfo from '../../component/task/TaskInfo';


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box style={{marginLeft:20,paddingTop:18,width:"auto",height:20}}>
                <Typography align='left' style={{
                                    fontFamily: 'NotoSansCJKkr',
                                    fontSize: 14,
                                    fontWeight: 550,
                                    fontStretch: 'normal',
                                    fontStyle: 'normal',
                                    lineHeight: 'normal',
                                    letterSpacing: -0.83,
                                    color:'#232426',
                }}>
                    {children}
                </Typography>
            </Box>
        )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    drawer: {
        backgroundColor:"#fbfcfe",
        flexGrow: 1,
        width:1080,
        overflowY:"auto"
      },
      paper: {
        border:"solid 1px",
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
      tab: {
        minHeight:32,
        height:32,
      },
      indicator: {
        background:"#0068ff",
        color:"#0068ff"
      },

      logtab: {
        marginLeft:10,
        marginRight:10,
        height:48,
        minWidth:70,
      },
      logindicator: {
        background:"#0068ff",
        color:"#0068ff"
      },
      list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        listDividerFullWidth: {
            margin: `5px 0 0 ${theme.spacing(2)}px`,
        },
        listDividerInset: {
            margin: `5px 0 0 ${theme.spacing(9)}px`,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
}));




;


export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);

  const [select,setSelect] = React.useState(0);
  const [selectCont, setSelsectCont] = React.useState(-1);

  const [oldCont, setOldcont] = React.useState("");
  const [newCont, setNewcont] = React.useState("");
  
  const [cnumlist, setCNumlist] = React.useState([]);

  const [tasks,setTasks] = React.useState([]);
  const [tname,setTName] = React.useState([]);

  const [contents,setContents] = React.useState([]);
  const [comments,setComments] = React.useState([]);
  const [logs,setLogs] = React.useState([]);

  const [clist,setClist] = React.useState([]);
  const [tlist,setTlist] = React.useState([]);
  const [cclist,setCclist] = React.useState([]);
  const [klist, setKlist] = React.useState([]);

  const [fileUploadState, setFileUploadState]=React.useState("");

  const inputReference = React.useRef()
  
  const [title, setTitle] =  React.useState("");
  const [file, setFile] =  React.useState(null);
  const [desc, setDesc] =  React.useState("");

  const [inputs,setInputs] = React.useState({
      text:""
  });
  const {text} = inputs;
  const [state, setState] = React.useState(false);
  const [textfeild, setTextfeild] = React.useState(
    {
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:"",
    }
  );
   const [status, setStatus] = React.useState([]);
  const handleStatus = (event) => {
      console.log(event.target)
      setStatus({
          ...state,
          [event.target.name]: event.target.value
      });
      console.log(status)
  };
   const handleSubmit = (e) =>{
      e.preventDefault();
       const post = {
           status:status
    };
    console.log(post);
     fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}/${select}/mod`,{
         method:"PUT",
         data: post,
          headers: {
             'Content-Type': 'application/json',
             Authorization: `JWT ${localStorage.getItem('token')}`
          },
        }
        ).then(res => res.json).then(data => console.log(data));
  };

  const perfNum = (window.location.href.split("=?")[1]);
  const category = ["[공연기획] 기술 적용 검토", "[계획수립] 기술 적용 확정", "[제작회의] 기술 활용형태 협의", "[연출제작] 기술 연출제작", "[연출설치]"];

  const [value, setValue] = React.useState(-1);
  const [logvalue, setLogValue] = React.useState(0);


  const fileUploadAction = (e,s) => {
      inputReference.current.click();       
      setSelsectCont(s)
  }

  const fileUploadInputChange = (e,s) => {
      console.log(e.target.files[0])
      setFileUploadState(e.target.value);
      setFile(e.target.files[0])
  }
  const onChange = (e) =>{
      const {name,value} = e.target;
      setInputs({
          ...inputs,
          [name]:value
      });
  };
  const onSubmit = (e) =>{
      e.preventDefault();
       const post = {
           text:text
    };
    fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}/${select}/com`,{
         method: "POST",
         headers:{
             'content-type' : 'application/json',
             Authorization: `JWT ${localStorage.getItem('token')}`
         },
         body: JSON.stringify(post)
     }).then(res => res.json).then(data => console.log(data)).then(() => window.location.reload());
  };
  const handleEditClick = (event, sc, v) => {
    setSelsectCont(sc);
    setOldcont(v);
    setNewcont(v);
    setEditOpen(true);
    console.log(sc);
    console.log(v)
  };

  const handleSaveClick = () => {
    if(window.confirm("저장을 완료하시겠습니까?")) {
        console.log(newCont)
        const formData = new FormData();
        formData.append("tcontent", newCont);

        submitForm("text", formData, (msg) => console.log(msg));
        console.log(`${oldCont}에서 ${newCont}로 변경하였습니다.`)

        window.location.reload()
    }
  };

  const handleCancelClick = () => {
    if(window.confirm("수정을 취소하시겠습니까?")) {
        setSelsectCont(-1);
        //update part
        setNewcont("")
        setEditOpen(false);
    }
  };

  const handleLogChange = (event, newValue) => {
    setLogValue(newValue);
  };

  const handleEditChangeinput = (event) => {
    setNewcont(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (event,t) => {
    console.log(t)
    setSelect(t.TNum);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = (contentType, data, setResponse) => {
    axios({
    url: `http://127.0.0.1:8000/Tech/catask/${perfNum}/${select}/${selectCont}`,
    method: 'PUT',
    data: data,
    headers: {
        'Content-Type': contentType,
        Authorization: `JWT ${localStorage.getItem('token')}`
    }
    }).then((response) => {
    setResponse(response.data);
    setFile(null)
    }).catch((error) => {
    setResponse("error");
    }).then(() => window.location.reload())
  }

  function uploadWithFormData(){
    console.log(file)
    const formData = new FormData();
    formData.append("tcontent", "");
    formData.append("fcontent", file);
    formData.append("SCNum", selectCont);
    
    submitForm("/media/files", formData, (msg) => console.log(msg));
  }

  const toggleDrawer = (s) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(s);
    if(s === false){
        setSelect(0)
        setContents([]);
    }
    setValue(-1)
    setOpen(s);
  };

  React.useEffect(()=>{
    if(editOpen==false){
        console.log(newCont)
    }
  },[editOpen]);

  React.useEffect(()=>{
    if(file!=null){
      uploadWithFormData()
    }
  },[file]);

  React.useEffect(()=>{
    const TN = [];
    fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}`,{
         method:"GET",
         headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setTasks(data);
          data.map( d => {
            if(d.Dbool === 1){
                TN.push(d)
            }
        })
    })
    console.log(TN)
    setTName(TN)
    const temp=[]
    if(select !== 0){
        if(select !== 3){
            console.log('ok')
            fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}/${select}`,{
         method:"GET",
         headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setContents(data);
            })
        }
    }
    //console.log(`calc(${window.innerHeight - 30} +px)`)
  },[]);



  React.useEffect(()=>{
    const tn = [];
    console.log(tname)
  },[tname]);

  React.useEffect(()=>{
    console.log(open)
    toggleDrawer(open)
  },[open]);

  React.useEffect(()=>{
    const temp=[]
    if(select !== 0){
        if(select !== 3){
            fetch(`http://127.0.0.1:8000/Tech/catask/${perfNum}/${select}`,{
         method:"GET",
         headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setContents(data);
                data.map(d =>{
                    temp.push(d.status)
                })

            })
            console.log(temp)
            //console.log(status)
        }
    }
    setStatus(temp)
      console.log(status)
  },[select]);

  React.useEffect(()=>{
    const cl = [];
    const cnum  = [];
    const tl = [];
    const cc = [];
    const com =[];
    const log = []

    if(contents !== []){
        console.log(contents)
        contents.map( c =>{
        if(c.Dbool === 0){
            cc.push(c);
            cl.push(c.DetName);
            cnum.push(c.DetNum);
        }
        else{
            if(c.Dbool === undefined){
                tl.push(c)
            }
        }
        if(c.text !== undefined){
            com.push(c);
        }
        if(c.mod !== undefined){
            log.push(c);
        }
        });
    }

    const unqcl = Array.from(new Set(cl));
    const unqcnum = Array.from(new Set(cnum));

    console.log(cc);
    setCclist(cc);
    console.log(unqcl);
    setClist(unqcl);
    console.log(unqcnum);
    setCNumlist(unqcnum);

    console.log(com);
    setComments(com);
    console.log(tl);
    setTlist(tl);
    console.log(log);
    setLogs(log);

  },[contents]);


  React.useEffect(()=>{
    const k = []
    const text = []
    cclist.map( (cc) => {
        tlist.map( (tt) => {
            if(cc.DetNum == cnumlist[value]){
                if( tt.SCNum == cc.SCNum ) {
                    text.push(tt.tcontent)
                    k.push(tt)
                }
            }
        })
    })

    console.log("k",k)
    setTextfeild({
        0: text[0],
        1: text[1],
        2: text[2],
        3: text[3],
        4: text[4],
        5: text[5],
        6: text[6],
        7: text[7],
        8: text[8],
        9: text[9],
        10: text[10],
    })

    console.log(textfeild)
    setKlist(k)
  },[value]);


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
                                    if (t.Dbool === 1){
                                        if (t.category === i+1){
                                            return (
                                                <Box style={{backgroundColor: '#ffffff', width:280, height:88, marginBottom:12,
                                                            borderRadius: 5,
                                                            border: "solid 1px #cacfdb",
                                                            boxShadow: "0 5px 16px -5px #a4a9b3",
                                                    }}>
                                                    <ButtonBase style={{ width:280, height:44, justifyContent:"flex-start"
                                                                }}
                                                            key={index} onClick={(event) => { handleClickOpen(event,t)}}>
                                                        <Typography style={{ marginLeft:12, fontSize:14}}>
                                                            {t.TName}
                                                        </Typography>
                                                    </ButtonBase>

                                                    { select === t.TNum && 
                                                        <Drawer variant="temporary" anchor={"right"} open={open} onClose={toggleDrawer(false)}
                                                        elevation={5}
                                                        PaperProps={{ style: { position: "absolute", overflow:"hidden"}}}
                                                        BackdropProps={{ style: { position: "absolute"}}}
                                                        style={{height:'calc(100% - 64px)', top:65, overflow:"visible"}}
                                                        disableBackdropClick
                                                        disableEscapeKeyDown
                                                        >
                                                            <Box className={classes.drawer}>
                                                                <Grid container>
                                                                    <Grid item xs={12}>
                                                                        <Box style={{ zIndex:300, position:"absolute", borderBottom:'solid 1px #e3e7f0',backgroundColor: '#ffffff',
                                                                            maxWidth:1080, maxHeight:56, overflow:"hidden"}}>
                                                                                <Box style={{ position:'static',display:"flex", flexDirection:'row', alignItems:'center', justifyItems:'center', width:1080, height:56}}>
                                                                                         <form className={classes.formControl} onSubmit={handleSubmit}>
                                                                                            <Select
                                                                                              value={status[t.id]}
                                                                                              name={t.id}
                                                                                              onChange={handleStatus}
                                                                                              displayEmpty
                                                                                              className={classes.selectEmpty}
                                                                                              inputProps={{ 'aria-label': 'Without label' }}
                                                                                              style={{ display:"flex", flexDirection:'row', alignItems:'center', borderRadius: 3, width:79, height:24, marginLeft:16, fontSize:12, backgroundColor:'#f7f8fa' }}
                                                                                            >
                                                                                              <MenuItem value={0}>
                                                                                                <em>진행 예정</em>
                                                                                              </MenuItem>
                                                                                              <MenuItem value={1}>진행중</MenuItem>
                                                                                              <MenuItem value={2}>완료</MenuItem>
                                                                                            </Select>

                                                                                          </form>

                
                                                                                    <Typography style={{marginLeft:10, width:760, color: '#232426'}}>{t.TName}</Typography>

                                                                                    <ButtonBase style={{ display:"flex", flexDirection:'row', alignItems:'center', justifyItems:'center', borderRadius: 3, backgroundColor: '#f7f8fa', width:112, height:32, marginLeft:16 }}>
                                                                                        <SendTwoToneIcon aria-label="send" style={{marginLeft:6,width:14,height:14}}/> 
                                                                                        <Typography align='center' style={{
                                                                                                                marginLeft: 1,
                                                                                                                width:112, 
                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                fontSize: 14,
                                                                                                                fontWeight: 500,
                                                                                                                fontStretch: 'normal',
                                                                                                                fontStyle: 'normal',
                                                                                                                lineHeight: 1.67,
                                                                                                                letterSpacing: 'normal',
                                                                                                                color: '#6a6d74',
                                                                                            }}>
                                                                                            알림 보내기
                                                                                        </Typography>
                                                                                    </ButtonBase>
                                                                                    <IconButton aria-label="exit" style={ {marginLeft:20,width:30,height:30}} onClick={toggleDrawer(false)} >
                                                                                        <CloseIcon style={{ width:30,height:30}}/>
                                                                                    </IconButton>
                                                                                </Box>
                                                                        </Box>
                                                                    </Grid>

                                                                    <Grid item xs={8}>
                                                                        <Box style={{ borderBottom:'solid 1px #e3e7f0', 
                                                                            borderRight:'solid 1px #e3e7f0', 
                                                                            backgroundColor: '#ffffff'
                                                                            , minHeight:192, marginTop:56}}>
                                                                             <TaskInfo obj={t}/>
                                                                        </Box>
                                                                        <Box style={{ display: 'flex',flexDirection: 'row', alignItems: 'start',justifyContent: 'flex-start',overflow:"auto"}}>
                                                                            <Box  style={{
                                                                                    display: 'flex',flexDirection: 'column', 
                                                                                    borderBottom:'solid 1px #e3e7f0', 
                                                                                    backgroundColor: '#fbfcfe',
                                                                                    maxWidth:148,minHeight:192}}>

                                                                                <Box style={{ display:"flex", flexDirection:'row', alignItems:'center', justifyItems:'center', 
                                                                                    borderRadius: 3, width:60, height:24, marginLeft:20, marginTop:16, marginBottom:16 }}>
                                                                                    <DescriptionOutlinedIcon style={{ color:'#6a6d74', width:20,height:20, marginLeft:3}}/>
                                                                                    <Typography align='center' style={{
                                                                                                        marginLeft: 1,
                                                                                                        width:30, 
                                                                                                        fontFamily: 'NotoSansCJKkr',
                                                                                                        fontSize: 14,
                                                                                                        fontWeight: 550,
                                                                                                        fontStretch: 'normal',
                                                                                                        fontStyle: 'normal',
                                                                                                        lineHeight: 1.67,
                                                                                                        letterSpacing: 'normal',
                                                                                                        color:'#6a6d74',
                                                                                    }}>
                                                                                    업무
                                                                                    </Typography>
                                                                                </Box>
                                                                                <ButtonBase style={{ flexDirection:'row', alignItems:'center', justifyItems:'center', width:148, height:36}}
                                                                                >
                                                                                    <ExpandMoreIcon style={{marginLeft:6,marginRight:6, color:'#6a6d74',width:20,height:20}}/>
                                                                                    <Typography align='left' style={{
                                                                                                width:116,
                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                fontSize: 12,
                                                                                                fontWeight: 550,
                                                                                                fontStretch: 'normal',
                                                                                                fontStyle: 'normal',
                                                                                                letterSpacing: -0.03,
                                                                                                color:'#232426',
                                                                                    }}>
                                                                                    공연 연출팀
                                                                                    </Typography>
                                                                                </ButtonBase>
                                                                                <Box style={{width:148, minHeight:36}}>
                                                                                    <Tabs
                                                                                        orientation="vertical"
                                                                                        variant="scrollable"
                                                                                        value={value}
                                                                                        classes={{
                                                                                            indicator: classes.indicator,
                                                                                        }}
                                                                                        onChange={handleChange}
                                                                                    >
                                                                                        {
                                                                                            clist.map( (c,i) => {
                                                                                                return(
                                                                                                    <Tab label={c} {...a11yProps(i)} 
                                                                                                    className={classes.tab}/>
                                                                                                );
                                                                                            }
                                                                                            )
                                                                                        }
                                                                                    </Tabs>
                                                                                </Box>
                                                                            </Box>
                                                                            <Box style={{ borderBottom:'solid 1px #e3e7f0',
                                                                            borderLeft:'solid 1px #e3e7f0',
                                                                            borderRight:'solid 1px #e3e7f0', backgroundColor: '#ffffff'
                                                                                    , maxWidth:572,minHeight:800, overflow:"hidden"}}>
                                                                                <Box style={{  display:"flex",flexDirection:'column', width:572, minHeight:56,}}>
                                                                                    <Box style={{marginLeft:20,paddingTop:28,width:"auto",height:80}}>
                                                                                        <Typography align='left' style={{
                                                                                                            fontFamily: 'NotoSansCJKkr',
                                                                                                            fontSize: 16,
                                                                                                            fontWeight: 600,
                                                                                                            fontStretch: 'normal',
                                                                                                            fontStyle: 'normal',
                                                                                                            lineHeight: 'normal',
                                                                                                            letterSpacing: -0.83,
                                                                                                            color:'#232426',
                                                                                        }}>
                                                                                        {clist[value]}
                                                                                        </Typography>
                                                                                    </Box>
                                                                                </Box>
                                                                                {
                                                                                    klist.map((k,i) => {
                                                                                        return(
                                                                                        
                                                                                            <Box style={{ display:"flex",flexDirection:'row', marginLeft:20,width:552, minHeight:44,marginBottom:5}}>
                                                                                                <Typography style={{  width: 100,
                                                                                                                        height: 18,
                                                                                                                        fontFamily: 'NotoSansCJKkr',
                                                                                                                        fontSize: 12,
                                                                                                                        fontWeight: 550,
                                                                                                                        fontStretch: 'normal',
                                                                                                                        fontStyle: 'normal',
                                                                                                                        lineHeight: 1.5,
                                                                                                                        letterSpacing: 'normal',
                                                                                                                        color: '#232426',
                                                                                                }}>
                                                                                                    {k.SCName}
                                                                                                </Typography>

                                                                                                <Box style={{ display:"flex", flexDirection:'row', width:430, minHeight:44,marginLeft:30}}>
                                                                                                    {
                                                                                                    editOpen && (k.id==selectCont)?
                                                                                                    <div>
                                                                                                    <InputBase style={{ 
                                                                                                            paddingLeft:6,
                                                                                                            paddingTop:6,
                                                                                                            display:"block",

                                                                                                            borderRadius: 3,
                                                                                                            border: 'solid 1px #e3e7f0',
                                                                                                            backgroundColor: '#fbfcfe',
                                                                                                            maxWidth:346,minWidth:346,
                                                                                                            
                                                                                                            width:30, 
                                                                                                            fontFamily: 'NotoSansCJKkr',
                                                                                                            fontSize: 12,
                                                                                                            fontWeight: 500,
                                                                                                            fontStretch: 'normal',
                                                                                                            fontStyle: 'normal',
                                                                                                            lineHeight: 1.67,
                                                                                                            letterSpacing: 'normal',
                                                                                                            color:'#232426',
                                                                                                            }}
                                                                                                            value={newCont}
                                                                                                            onChange={handleEditChangeinput}
                                                                                                            placeholder={oldCont}
                                                                                                            multiline
                                                                                                            autoFocus
                                                                                                    />

                                                                                                    <Box style={{display:"flex", float:"right", flexDirection:"row", 
                                                                                                        marginTop:7,marginLeft:7,width:84,height:36}}
                                                                                                        visibility={k.filetype?"hidden":"visible"}>
                                                                                                        <ButtonBase style={{display:"flex", flexDirection:'row',
                                                                                                                        backgroundColor:"#fbfcfe",width:36,height:20,
                                                                                                                        borderRadius: 5, border: 'solid 1px #e3e7f0',}}
                                                                                                                        onClick={handleSaveClick}
                                                                                                        >
                                                                                                            <CheckCircleTwoToneIcon style={{color: "#289374", marginLeft:1, marginRight:-1,width:12,height:12}}/>
                                                                                                            <Typography style={{width:30, 
                                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                                fontSize: 8,
                                                                                                                                fontWeight: 500,
                                                                                                                                fontStretch: 'normal',
                                                                                                                                fontStyle: 'normal',
                                                                                                                                lineHeight: 1.67,
                                                                                                                                letterSpacing: 'normal',
                                                                                                                                color:'#6a6d74',
                                                                                                            }}>
                                                                                                                저장
                                                                                                            </Typography>
                                                                                                        </ButtonBase>

                                                                                                        <ButtonBase style={{display:"flex", flexDirection:'row',
                                                                                                                        backgroundColor:"#fbfcfe",width:36,height:20,
                                                                                                                        marginLeft:8,
                                                                                                                        borderRadius: 5, border: 'solid 1px #e3e7f0',}}
                                                                                                                        onClick={handleCancelClick}
                                                                                                                        >
                                                                                                            <CancelTwoToneIcon style={{color: "#dc0c31", marginLeft:1, marginRight:-1,width:12,height:12}}/>
                                                                                                            <Typography style={{width:30, 
                                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                                fontSize: 8,
                                                                                                                                fontWeight: 500,
                                                                                                                                fontStretch: 'normal',
                                                                                                                                fontStyle: 'normal',
                                                                                                                                lineHeight: 1.67,
                                                                                                                                letterSpacing: 'normal',
                                                                                                                                color:'#6a6d74',
                                                                                                            }}>
                                                                                                                취소
                                                                                                            </Typography>
                                                                                                        </ButtonBase>
                                                                                                    </Box>
                                                                                                    </div>
                                                                                                    :
                                                                                                    <Typography style={{ 
                                                                                                            paddingLeft:6,
                                                                                                            paddingTop:6,
                                                                                                            display:"block",

                                                                                                            borderRadius: 3,
                                                                                                            border: 'solid 1px #e3e7f0',
                                                                                                            backgroundColor: '#ffffff',
                                                                                                            maxWidth:346,minWidth:346,minHeight:36, height:36,

                                                                                                            width:30, 
                                                                                                            fontFamily: 'NotoSansCJKkr',
                                                                                                            fontSize: 12,
                                                                                                            fontWeight: 500,
                                                                                                            fontStretch: 'normal',
                                                                                                            fontStyle: 'normal',
                                                                                                            lineHeight: 1.67,
                                                                                                            letterSpacing: 'normal',
                                                                                                            color:'#232426'}}
                                                                                                            value={textfeild[i]} onChange={handleEditChangeinput}
                                                                                                    >
                                                                                                        {textfeild[i]}
                                                                                                    </Typography>
                                                                                                    }
                                                                                                    {
                                                                                                    
                                                                                                    editOpen?
                                                                                                    (k.id==selectCont)?
                                                                                                    ""
                                                                                                    :"" :
                                                                                                    k.filetype?
                                                                                                    <Box style={{marginLeft:10,width:36,height:36}}
                                                                                                        visibility={k.filetype?"visible":"hidden"}>
                                                                                                        <input hidden style = {{ display:"none", backgroundColor:"#f7f8fa",width:36,height:36,
                                                                                                                        borderRadius: 5, border: 'solid 1px #e3e7f0',}} 
                                                                                                                        id="contained-button-file" type="file"
                                                                                                                        ref={inputReference} onChange={(e)=>{ fileUploadInputChange(e, k.id) } }
                                                                                                                        />
                                                                                                        <ButtonBase style={{backgroundColor:"#f7f8fa",width:36,height:36,
                                                                                                                        borderRadius: 5, border: 'solid 1px #e3e7f0',}}
                                                                                                                        onClick={(e) => {fileUploadAction(e,k.id)}}>
                                                                                                                                
                                                                                                            <AttachFileSharpIcon style={{color: "#6a6d74"}}/>
                                                                                                        </ButtonBase>
                                                                                                    </Box>
                                                                                                    :<Box style={{marginLeft:10,width:36,height:36}}
                                                                                                        visibility={k.filetype?"hidden":"visible"}>
                                                                                                        <ButtonBase style={{display:"flex", flexDirection:'column',
                                                                                                                        backgroundColor:"#ffffff",width:36,height:36,
                                                                                                                        borderRadius: 5, border: 'solid 1px #e3e7f0',}}
                                                                                                                        onClick={ e => handleEditClick(e,k.id,textfeild[i])}
                                                                                                                        >
                                                                                                            <EditTwoToneIcon style={{color: "#6a6d74", marginTop:4, width:16,height:16}}/>
                                                                                                            <Typography style={{width:30, 
                                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                                fontSize: 8,
                                                                                                                                fontWeight: 500,
                                                                                                                                fontStretch: 'normal',
                                                                                                                                fontStyle: 'normal',
                                                                                                                                lineHeight: 1.67,
                                                                                                                                letterSpacing: 'normal',
                                                                                                                                color:'#6a6d74',
                                                                                                            }}>
                                                                                                                수정
                                                                                                            </Typography>
                                                                                                        </ButtonBase>
                                                                                                    </Box>    
                                                                                                    }
                                                                                                    
                                                                                                </Box>
                                                                                            </Box>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                {
                                                                                    value==-1?"":
                                                                                        <Box style={{  width:652, height:32}}>
                                                                                        <ButtonBase style={{ display:"flex", flexDirection:'row', alignItems:'center', justifyItems:'center', borderRadius: 3, backgroundColor: '#f7f8fa', width:93, height:32, marginLeft:16 }}>
                                                                                            <AddSharpIcon aria-label="add" style={{marginLeft:6,width:14,height:14}}/> 
                                                                                            <Typography align='center' style={{
                                                                                                                marginLeft: 1,
                                                                                                                width:112, 
                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                fontSize: 14,
                                                                                                                fontWeight: 500,
                                                                                                                fontStretch: 'normal',
                                                                                                                fontStyle: 'normal',
                                                                                                                lineHeight: 1.67,
                                                                                                                letterSpacing: 'normal',
                                                                                                                color: '#6a6d74',
                                                                                            }}>
                                                                                            항목 추가
                                                                                            </Typography>
                                                                                        </ButtonBase>

                                                                                        </Box>
                                                                                        
                                                                                }
                                                                                
                                                                            </Box>
                                                                            
                                                                        </Box>
                                                                    </Grid>
                                                                    
                                                                    <Grid item xs={4}>
                                                                        <Box style={{position:"absolute", borderBottom:'solid 1px #e3e7f0', 
                                                                            borderRight:'solid 1px #e3e7f0', backgroundColor: '#ffffff'
                                                                            ,minHeight:48, width:354, marginTop:58}}>
                                                                            
                                                                            <Tabs
                                                                                value={logvalue}
                                                                                onChange={handleLogChange}
                                                                                classes={{
                                                                                    indicator:classes.logindicator
                                                                                }}
                                                                            >
                                                                                <Tab label="회의실" className={classes.logtab}/>
                                                                                <Tab label="변경이력" className={classes.logtab}/>
                                                                            </Tabs>

                                                                        </Box>
                                                                        <Box style={{  height:'auto'}}>

                                                                        </Box>
                                                                        <Box style={{
                                                                            backgroundColor: '#fbfcfe',
                                                                            borderTop:'solid 1px #e3e7f0',
                                                                            borderBottom:'solid 1px #e3e7f0',
                                                                            position: 'absolute', width:354, minHeight: window.innerHeight - 270 , maxHeight:  window.innerHeight - 270,overflowY:"auto",right:19, bottom:100}}>
                                                                            {
                                                                                logvalue==0?
                                                                                comments.map(cm =>{
                                                                                        return(
                                                                                            <Box>
                                                                                                <List>
                                                                                                      <Divider component="li" />
                                                                                                      <li>
                                                                                                        <Typography
                                                                                                          className={classes.dividerFullWidth}
                                                                                                          color="textSecondary"
                                                                                                          display="block"
                                                                                                          variant="caption"
                                                                                                        >
                                                                                                          {cm.username}
                                                                                                        </Typography>
                                                                                                      </li>
                                                                                                      <ListItem>
                                                                                                        <ListItemText primary={cm.text} secondary={cm.create} />
                                                                                                      </ListItem>
                                                                                                </List>
                                                                                            </Box>
                                                                                        );
                                                                                        })
                                                                                :
                                                                                logvalue==1?
                                                                                logs.map(lo =>{
                                                                                    return (
                                                                                        <Box>
                                                                                                <List>
                                                                                                      <Divider component="li" />
                                                                                                      <li>
                                                                                                        <Typography
                                                                                                          className={classes.dividerFullWidth}
                                                                                                          color="textSecondary"
                                                                                                          display="block"
                                                                                                          variant="caption"
                                                                                                        >
                                                                                                          {lo.username}
                                                                                                        </Typography>
                                                                                                      </li>
                                                                                                      <ListItem>
                                                                                                        <ListItemText primary={lo.mod} secondary={lo.date} />
                                                                                                      </ListItem>
                                                                                                </List>
                                                                                            </Box>

                                                                                    );
                                                                                })
                                                                                :
                                                                                <Box>None</Box>
                                                                            }
                                                                        
                                                                        </Box>
                                                                        <form onSubmit={onSubmit}>
                                                                        <Box style={{  backgroundColor: '#ffffff',
                                                                            borderTop:'solid 1px #e3e7f0', 
                                                                            borderBottom:'solid 1px #e3e7f0', 
                                                                            position: 'absolute', width:354, height:100, right:19, bottom:0}}>
                                                                             <InputBase
                                                                                className={classes.margin}
                                                                                type='text'
                                                                                name='text'
                                                                                value={text}
                                                                                inputProps={{ 'aria-label': 'naked' }}
                                                                                onChange={onChange}
                                                                             />
                                                                                <ButtonBase type='submit' style={{
                                                                                                        borderTop:'solid 1px #e3e7f0', 
                                                                                                        borderBottom:'solid 1px #e3e7f0', 
                                                                                                        position: 'absolute', width:44, height:36, right:0, marginTop:32,marginRight:12,
                                                                                                        bordeRadius: 3,
                                                                                                        backgroundColor: '#a4a9b3',}}>
                                                                                    <Typography align="center"  style={{    width: 44,
                                                                                                                fontFamily: 'NotoSansCJKkr',
                                                                                                                fontSize: 14,
                                                                                                                fontWeight: 550,
                                                                                                                fontStretch: 'normal',
                                                                                                                fontStyle: 'normal',
                                                                                                                lineHeight: 'normal',
                                                                                                                letterSpacing: 'normal',
                                                                                                                color: '#ffffff',
                                                                                    }}>
                                                                                        전송
                                                                                    </Typography>
                                                                                </ButtonBase>
                                                                        </Box>
                                                                        </form>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Drawer>
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
