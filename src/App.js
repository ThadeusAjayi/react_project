import React, { Component } from 'react';
import Projects from './Component/Projects'
import AddProject from './Component/AddProject'

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects : []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        title: 'Business website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects= {this.state.projects}/>
      </div>
    );
  }
}

export default App;
