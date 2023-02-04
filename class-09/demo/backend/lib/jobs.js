'use strict'

const axios = require('axios');

function getJobs(req, res, next) {
  const url = `https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true`;

  // Old way before Refactoring
  // try {
  //   let response = await axios.get(url);
  //   let formattedJobData = response.data.jobs.map(jobObj => new Job(jobObj))
  //   res.status(200).send(formattedJobData);
  // }
  // catch (err) {
  //   next(err);
  // }

  // New Way Refactored
  axios.get(url)
    .then(data => {
      let formattedJobData = data.data.jobs.map(jobObj => new Job(jobObj))
      res.status(200).send(formattedJobData);
    })
    .catch(error => next(error));

  // Even More Refactored
  // axios.get(url)
  //   .then(data => formattedJobData = data.data.jobs.map(jobObj => new Job(jobObj)))
  //   .then(formattedJobData => res.status(200).send(formattedJobData))
  //   .catch(error => next(error));
}

class Job {
  constructor(obj) {
    this.name = obj.title;
    this.description = obj.content;
    this.departments = this.getNames(obj.departments);
    this.offices = this.getNames(obj.offices);
    this.location = obj.location.name;
    this.url = obj.absolute_url;
  }

  getNames(arr) {
    return arr.map(obj => obj.name);
  }
}

module.exports = getJobs;