import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#ffeee6',
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);


export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <Box sx={{ width: '100%' }}>

      <Box sx={{ bgcolor: '#ccc0b8', textAlign:'center' }}>     
      <div style={{ bgcolor:'#ccc0b8', textAlign: "center" }}>
    <br />
    <h1>강사소개</h1>
    <hr></hr>    </div> 
        <StyledTabs value={value} 
                    onChange={handleChange} 
                    centered  
                    aria-label="styled tabs example">

          <StyledTab label="퍼스널트레이닝" {...a11yProps(0)}/>
          <StyledTab label="필라테스" {...a11yProps(1)}/>
          <StyledTab label="요가" {...a11yProps(2)}/>
          <StyledTab label="스피닝" {...a11yProps(3)}/>
        </StyledTabs>

        <Box sx={{ p: 4 }} />
 
      </Box>     

    <div style={{ textAlign: "center" }}>

      <TabPanel value={value} index={0}  >
      <img
          className="teachers"
          src=
          "https://ifh.cc/g/mW4kqk.jpg"
          alt="1"
        /> 

<img
          className="teachers"
          src=
          "https://ifh.cc/g/HjfW8j.jpg"
          alt="2"
        /> 
<img
          className="teachers"
          src=
          "https://ifh.cc/g/Mt0aHc.jpg"
          alt="3"
        /> 
                           <img
                className="teachers"
                src=
                "https://ifh.cc/g/lVzwAl.jpg"
                alt="2"
              /> 

      </TabPanel>
      <TabPanel value={value} index={1} >
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/cHtwzV.jpg"
                alt="1"
              /> 
      
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/j14j38.jpg"
                alt="2"
              /> 
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/mSJnc8.jpg"
                alt="3"
              /> 
                    <img
                className="teachers"
                src=
                "https://ifh.cc/g/Z8ZZQq.jpg"
                alt="2"
              /> 
      </TabPanel>

      <TabPanel value={value} index={2}>
       <img
                className="teachers"
                src=
                "https://ifh.cc/g/f6SNlp.jpg"
                alt="1"
              /> 
      
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/57jVOd.jpg"
                alt="2"
              /> 
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/xRWD84.jpg"
                alt="3"
              /> 
                    <img
                className="teachers"
                src=
                "https://ifh.cc/g/afHKMb.jpg"
                alt="3"
              />

      </TabPanel>   
      <TabPanel value={value} index={3}>
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/N7Cg20.jpg"
                alt="1"
              /> 
      
      <img
                className="teachers"
                src=
                "https://ifh.cc/g/ZSpaDr.jpg"
                alt="2"
              /> 

      </TabPanel>      </div>
  </Box>

  );
}