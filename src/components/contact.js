import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marc Freiman</h2>
            <img id="marc" src={process.env.PUBLIC_URL + '/marc.jpg'} alt="avatar"/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              <h5>Bio</h5>
              I'm a passionate learner from Mexico City, in college I majored in Mechanical and Electrical Engineering, and upon graduating I enrolled into a Web Devolpment bootcamp in Miami.
              Currently I'm polishing my skills in web development as well as learning new technologies like SQL and Pyton.
              I'm available for hire, and don't worry, I don't need visa sponsorship.
            </p>
          </Cell>
          <Cell col={6}>Half page</Cell>
        </Grid>

      </div>
    )
  }
}
export default Contact;
