import './App.scss';


import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';



function ContentMain() {

  return (
    <>
    <div className='contentMain'> 
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
  
    </div>
    </>
  );
}

export default ContentMain;