import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Overview from './Components/Overview';
import MessageGroup from './Components/MessageGroup';
import MessagePersonal from './Components/MessagePersonal';
import MessageList from './Components/MessageList';
import MessageBatch from './Components/MessageBatch';
import MessageBlank from './Components/MessageBlank';
import LearnMain from './Components/LearnMain';
import AssignmentMain from './Components/AssignmentMain';
import TestQuiz from './Components/TestQuiz';
import LearnContinue from './Components/LearnContinue';
import LearnCourse from './Components/LearnCourse';
import LearnTab from './Components/LearnTab';
import AssignmentDone from './Components/AssignmentDone';
import AssignmentTab from './Components/AssignmentTab';
import AssignmentDoneTab from './Components/AssignmentDoneTab';
import InstructorDashboard from './Components/InstructorDashboard';
import Courses from './Components/Courses';
import AddCourse from './Components/CourseOption';
import CourseContinue from './Components/CourseContinue';
import CourseOption from './Components/CourseOption';
import AddCourse1 from './Components/AddCourse1';
import CourseFinal from './Components/CourseFinal';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="overview" element={<Overview/>}/>
        <Route path="messagegroup" element={<MessageGroup/>}/>
        <Route path='messagepersonal' element={<MessagePersonal/>}/>
        <Route path='messagelist' element={<MessageList/>}/>
        <Route path='messagebatch' element={<MessageBatch/>}/>
        <Route path="messageblank" element={<MessageBlank/>}/>
         <Route path='learnmain' element={<LearnMain/>}/>
         <Route path='learncontinue' element={<LearnContinue/>}/>
         <Route path='learncourse' element={<LearnCourse/>}/>
         <Route path='learntab' element={<LearnTab/>}/>
        <Route path='assignmentmain' element={<AssignmentMain/>}/>
        <Route path='assignmentdone' element={<AssignmentDone/>}/>
        <Route path='assignmenttab' element={<AssignmentTab/>}/>
        <Route path='assignmentdonetab' element={<AssignmentDoneTab/>}/>

        <Route path='testquiz' element={<TestQuiz/>}/>
        <Route path='instructordashboard' element={<InstructorDashboard/>}/>
        <Route path='courses' element={<Courses/>}/>
       
        <Route path='coursecontinue' element={<CourseContinue/>}/>
        <Route path='courseoption' element={<CourseOption/>}/>
        <Route path='addcourse1' element={<AddCourse1/>}/>
        <Route path='coursefinal' element={<CourseFinal/>}/>
      </Routes>
    </div>
  );
}