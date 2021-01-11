import React from 'react';

import {Button,ButtonBase, Box, Typography} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default function taskInfo(props) {
  const classes = styles();

  return (
    <div className={classes.root}>
        <Box style={{minWidth:148, minHeight:232}}>
          <Box style={{ display:"flex", flexDirection:'row', alignItems:'center', justifyItems:'center', 
            borderRadius: 3, width:60, height:24, marginLeft:20, marginTop:16 }}>
            <ListOutlinedIcon style={{ color:'#6a6d74', width:20,height:20, marginLeft:3}}/>
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
              개요
            </Typography>
          </Box>
        </Box>
        <Box style={{width:572, minHeight:232}}>
          <Box style={{ display:"flex", flexDirection:'column', width:652, minHeight:176, marginTop:20 }}>
            <Box style={{ display:"flex",flexDirection:'row', width:612, minHeight:44,marginBottom:20}}>
              <Typography style={{  width: 40,
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
                주관
              </Typography>
              <Box style={{ flexDirection:'row', width:430, minHeight:44,marginLeft:20}}>
                <ButtonBase style={{backgroundColor:"#f7f8fa",width:102,height:28, marginLeft: 10,
                                  borderRadius: 5 ,  border: 'solid 1px #e3e7f0',
                }}>
                  <PersonAddTwoToneIcon style={{color:'#6a6d74', width:16, height:16, marginLeft: 3}}/>
                  <Typography style={{  width: 70,
                                        marginLeft: 3,
                                        fontFamily: 'NotoSansCJKkr',
                                        fontSize: 12,
                                        fontWeight: 550,
                                        fontStretch: 'normal',
                                        fontStyle: 'normal',
                                        lineHeight: 'normal',
                                        letterSpacing: 'normal',
                                        color: '#6a6d74',
                  }}>
                    공연 연출팀
                  </Typography>
                </ButtonBase>
              </Box>
            </Box>
            <Box style={{ display:"flex",flexDirection:'row', width:612, minHeight:44,marginBottom:20}}>
              <Typography style={{  
                                    width: 40,
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
                목표
              </Typography>
              <Box style={{ flexDirection:'row', width:430, minHeight:44,marginLeft:30,marginBottom:20}}>
                <Typography style={{    display: 'inline-block',
                                        width: 430,
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
                  {props.obj}
                </Typography>
              </Box>
            </Box>

            <Box style={{ display:"flex",flexDirection:'row', width:612, minHeight:44,marginBottom:20}}>
              <Typography style={{  width: 40,
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
                마감일
              </Typography>
              <Box style={{ flexDirection:'row', width:430, minHeight:44,marginLeft:20}}>
                <ButtonBase style={{backgroundColor:"#f7f8fa",width:102,height:28, marginLeft: 10,
                                  borderRadius: 5,  border: 'solid 1px #e3e7f0',
                }}>
                  <DateRangeOutlinedIcon style={{color:'#6a6d74', width:16, height:16, marginLeft: 3}}/>
                  <Typography style={{  width: 70,
                                        marginLeft: 3,
                                        fontFamily: 'NotoSansCJKkr',
                                        fontSize: 12,
                                        fontWeight: 550,
                                        fontStretch: 'normal',
                                        fontStyle: 'normal',
                                        lineHeight: 'normal',
                                        letterSpacing: 'normal',
                                        color: '#6a6d74',
                  }}>
                    날짜 선택
                  </Typography>
                </ButtonBase>
              </Box>
            </Box>
            <Box style={{ display:"flex",flexDirection:'row', width:612, minHeight:44,marginBottom:20}}>
              <Typography style={{  width: 40,
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
                참여
              </Typography>
              <Box style={{ flexDirection:'row', width:430, minHeight:44,marginLeft:30}}>
                <ButtonBase style={{backgroundColor:"#f7f8fa",width:28,height:28,
                                  borderRadius: 5, border: 'solid 1px #e3e7f0',
                }}>
                  <PersonAddTwoToneIcon style={{color:'#6a6d74', width:16, height:16}}/>
                </ButtonBase>
              </Box>
            </Box>
          </Box>
        </Box>

    </div>
  );
}