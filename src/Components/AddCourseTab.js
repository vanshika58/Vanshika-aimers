import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Course Info" {...a11yProps(0)} />
          <Tab label="Video" {...a11yProps(1)} />
          <Tab label="Study Material" {...a11yProps(2)} />
          <Tab label="Cerificate" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Course Thumbnail</Form.Label>
    <Form.Control type="file" size="lg" />
    <Form.Text className="text-muted">
     maximum combined size 50mb only.
    </Form.Text>
  </Form.Group>
      
      <Button variant="primary " className='p-3'  size="lg" type="submit">
       Next    <MDBIcon icon='arrow-right' /> 
      </Button>
    </Form>
           </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
        <Form className='p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title of Material</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>No of pages</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /> 
      </Form.Group>
     
      <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Upload study Material</Form.Label>
    <Form.Control type="file" size="lg" />
    <Form.Text className="text-muted">
     maximum combined size 50mb only.
    </Form.Text>
  </Form.Group>
  <Button variant="outline-primary " className='p-3' style={{margin:'3%'}} size="lg" type="submit">
      previous
      </Button>
      <Button variant="primary " className='p-3'  size="lg" type="submit">
       Next    <MDBIcon icon='arrow-right' /> 
      </Button>
    </Form>
           </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div>
        <Form className='p-3'>
      <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label className='p-3'>Upload Cerificate</Form.Label>
    <Form.Control type="file" size="lg" />
    <Form.Text className="text-muted">
     maximum combined size 50mb only.
    </Form.Text>
  </Form.Group>
  <Button variant="outline-primary " className='p-3'  size="lg" type="submit">
      previous
      </Button>
      <Button variant="primary " className='p-3' style={{margin:'3%'}}  size="lg" type="submit"> <Link to='/coursefinal'>Done</Link>
      Done  <MDBIcon icon='arrow-right' /> 
      </Button>
    </Form>
           </div>
      </TabPanel>
    </Box>
  );
}