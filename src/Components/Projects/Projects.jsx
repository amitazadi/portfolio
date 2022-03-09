import React, { useState, useCallback, useEffect } from "react";
import Card from "./Card";
import data from "./Carddata";
import { Element } from "react-scroll";
import axios from "axios";

import "./projects.css";
import "../Aboutme/aboutme.css";

const API = "https://api.github.com";

const Projects = () => {
  const username = "amitazadi";
  const specfic = [];
  const length = 6;

  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  // const dummyProjectsArr = new Array(length + specfic.length).fill(dummyProject);

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, specficReposAPI]);

  // , length, specfic, specficReposAPI

  useEffect(() => {
    fetchRepos();
  }, []);

  // useEffect(() => {
  //   fetchRepos();
  // }, [fetchRepos]);

  console.log(projectsArray);

  return (
    <Element name="projects" className="projects-body">
      <div className="aboutme-heading">
        <div className="aboutme-heading1">Projects</div>
      </div>
      <div className="card-body">
        {data.map((element, i) => (
          <Card title={element.title} content={element.content} technologies={element.technologies} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
