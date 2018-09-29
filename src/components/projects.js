import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0 }
    }
toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', textAlign: 'center'}}>
        <CardTitle style={{color: 'black', heigh: '176px', background: 'url(https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png) center / cover'}}>Farmers Market</CardTitle>
        <CardText>Farmers Market connects with the USDA's API and tells you where's your nearest farmers market and details their produce. </CardText>
        <CardActions border>
          <Button
            colored href='https://github.com/freimanmarc/Farmers-Market'>GitHub
          </Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}} >
          <IconButton name='share'/>
        </CardMenu>
    </Card>
    )
  } else if(this.state.activeTab === 1){
    return(
      <div><h1>This is Rails</h1></div>
    )
  }
}


  render(){
    return(
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
          <Tab>React</Tab>
          <Tab>Rails</Tab>
        </Tabs>

          <Grid className='projects-grid'>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
