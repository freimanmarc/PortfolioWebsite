import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Work from './work';
import Education from './education';

class Resume extends Component{
  render(){
    return(
      <div className='resume'>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={process.env.PUBLIC_URL + '/marc.jpg'}
                alt='avatar'
                style={{height: '200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>Marc Freiman</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h4 stylle={{color: 'gray'}}>Mechanical and Electrical Engineer & Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3300 NE 188th St, Aventura, Florida</p>
            <h5>Phone</h5>
            <p>+1(786)657-1844</p>
            <h5>eMail</h5>
            <p>marcfreiman@gmail.com</p>
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Work Experience</h2>
              <Work
                startYear={2017}
                endYear={2018}
                companyName='Chemlogis S.A. de C.V.'
                  />
                <h6>Analyst</h6>
                <p>*Coordination between sales and engineering departments for the customization of production wings for outsourced production runs, as in accordance to client specification. </p>
                <p>*Production control for mixes of formulated dyes, pigments and fluids. </p>
                <p>*New business development.
              </p>
              <Work
                startYear={2016}
                endYear={2017}
                companyName='Grupo Industrial ARDA S.A. de C.V.'
                  />
              <h6>Project Manager</h6>
                <p>*Renovation and relocation of soft PVC hose extrusion factory, improved average output per extrusion line from 10 meters/minute to over 12 meters/minute. </p>
                <p>*Redesign factory layout to improve material flow, and reduce waste by speeding up the machine’s ignition stage and better filters for recycled materials. </p>
                <p>*Raw materials inventory.
              </p>
              <br/>
              <h2>Education</h2>
              <Education
                startYear={2018}
                endYear={2018}
                schoolName='Wyncode Academy'
                schoolDescription="Full Stack Web-Development"
                />
              <h6>Languages & Frameworks</h6>
              <p>HTML & CSS, JavaScript, Ruby, React, Rails and React on Rails. SQL(Basic).</p>
                <Education
                  startYear={2014}
                  endYear={2018}
                  schoolName='Universidad Iberoamericana'
                  schoolDescription='Mechanical and Electrical Engineering 8.1/10 (3.00 GPA).'
                  />
                <p>
                  *Fluid and Material Mechanics. <br />
                  *Thermodynamics (Turbo-machinery & Thermal-machinery). <br />
                  *Electrical circuits, generation, transmission and distribution.
                  </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
