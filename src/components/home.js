
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
  render() {
    return(
      <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12}>
            <img
              src="https://avatars0.githubusercontent.com/u/37154083?s=460&v=4"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Mechanical and Electrical Engineer | Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | Ruby | Rails | SQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/marc-freiman-56b043157/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/freimanmarc" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
