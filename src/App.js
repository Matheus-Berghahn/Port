import './App.scss';


import Section1 from './Section1';
import Section2 from './Section2';
import Section2a from './Section2a';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';



function ContentMain() {

  return (
    <>
    <div className='contentMain'> 
      <Section1 />
      <Section2 />
      <Section2a />
      <Section3 />
      <Section4 />
      <Section5 />

    </div>
    </>
  );
}

export default ContentMain;