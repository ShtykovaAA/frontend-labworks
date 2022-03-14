import {useLocation} from "react-router-dom";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import classes from "./ResumeCreator.module.css";

var _ = require('lodash');

const mappedStateInfo = {
  position: "Позиция",
  education: "Образование",
  description: "Опыт работы",
  skills: "Навыки",
  contact: "Связаться"
}
const stateKeys = _.keys(mappedStateInfo)

const generateTimeline = (resumeInfo) => {
  return (
    <div className={classes.timeline}>
      <Timeline position="alternate">
        {stateKeys.map(elem => {
          return (<TimelineItem key={elem} >
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '40px', px: 2 }}>
              <Typography variant="h6" component="span">
                {mappedStateInfo[elem]}
              </Typography>
              <Typography>{resumeInfo[elem]}</Typography></TimelineContent>
          </TimelineItem>)
        })}
      </Timeline>
    </div>
  )
}

const generateText = (resumeInfo) => {
  return (
    stateKeys.map(elem => {
      return (
        <div key={elem} className={classes.text}>
          <Typography variant="h6" component="span" >
            {mappedStateInfo[elem]}
          </Typography>
          <Typography paragraph={true}>{resumeInfo[elem]}</Typography>
        </div>
      )
    })
  )
}

const getMainForm = (resumeInfo) => {
  if (resumeInfo.style === "timeline"){
    return(
      generateTimeline(resumeInfo)
    )
  }
  return(
    generateText(resumeInfo)
  )
}
function ResumeCreator(){
  const resumeInfo = useLocation().state
  const backgroundColor = resumeInfo.theme
  const textColor = backgroundColor === "white"
    ? "black"
    : "#d3d0d0"

  return (
    <div className={classes.mainBlock} style={{
      backgroundColor: backgroundColor, color: textColor
    }}>
      <div style={{
        backgroundColor: backgroundColor, color: textColor
      }}>
        <h1 style={{color: textColor}}>{resumeInfo.name}</h1>
        {getMainForm(resumeInfo)}
      </div>
      {console.log(resumeInfo)}
    </div>
  )
}

export default ResumeCreator;