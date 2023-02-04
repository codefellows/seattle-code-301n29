import React from "react";
import axios from "axios";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount = async () => {
    const url = 'http://localhost:3001/jobs';
    const jobs = await axios.get(url);
    this.setState({ jobs: jobs.data });
  }

  render(){
    return(
      <>
        {this.state.jobs.length > 0 && this.state.jobs.map((job, idx) =>
          <Job key={idx} job={job}/>
        )}
      </>

    )
  }
}

class Job extends React.Component{
  render(){
    return(
      <div >
            <h3>Vault Tec</h3>
            <h2><a href={this.props.job.url}>{this.props.job.name}</a></h2>
            <p>{this.props.job.description}</p>
            <p>{this.props.job.location}</p>
          </div>
    )
  }
}

export default Main