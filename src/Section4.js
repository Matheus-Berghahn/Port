
import "./Section4.scss";

function Section4() {
  return (
    <div id="ancor_anima" className="section4 max-width">
      <h2>Animações</h2>
      <div className="all_box">
        <div className="align_box"><iframe className="box2 anima1" src={`${process.env.PUBLIC_URL}/anima_bradesco.html`} title="bradesco"></iframe>  </div>

          <div className="align_box">
            <iframe className="box anima2" src={`${process.env.PUBLIC_URL}/anima_bmg.html`} title="bmg"></iframe>
            <iframe className="box anima3" src={`${process.env.PUBLIC_URL}/anima_ssg.html`} title="ssg"></iframe>
          </div>

          <div className="align_box">
            <iframe className="box anima3" src={`${process.env.PUBLIC_URL}/anima_nissan.html`} title="nissan"></iframe>
            <iframe className="box anima4" src={`${process.env.PUBLIC_URL}/anima_subway.html`} title="subway"></iframe>
          </div>
        
          <div className="align_box" >
            <iframe className="box2 anima6" src={`${process.env.PUBLIC_URL}/anima_cap.html`} title="cap"></iframe>
          </div>
        
      </div>
  
    </div>
  );
}

export default Section4;
