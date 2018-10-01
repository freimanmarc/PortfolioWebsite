import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component{
  render(){
    return(
      <div>
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
            <h4 stylle={{collor: 'gray'}}>Mechanical and Electrical Engineer & Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3300 NE 188th St, Aventura, Florida</p>
            <h5>Phone</h5>
            <p>+1(786)657-1844</p>
            <h5>eMail</h5>
            <p>marcfreiman@gmail.com</p>
          </Cell>
          <Cell className='resume-right-col' col={8}>Right Side</Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
