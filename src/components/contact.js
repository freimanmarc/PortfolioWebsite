import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marc Isaac Freiman</h2>
            <img id="marc" src={process.env.PUBLIC_URL + '/marc.jpg'} alt="avatar"/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              <h5>Bio</h5>
              I'm a passionate learner from Mexico City, in college I majored in Mechanical and Electrical Engineering, and upon graduating I enrolled into a Web Devolpment bootcamp in Miami.
              Currently I'm polishing my skills in web development as well as learning new technologies like SQL and Pyton.
              I'm available for hire, and don't worry, I don't need visa sponsorship.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +1(786)657-1844
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    marcfreiman@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    Marc Freiman

                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
