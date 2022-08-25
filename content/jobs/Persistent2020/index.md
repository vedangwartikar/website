---
date: '2020-11-18'
title: 'Software Engineer'
company: 'Persistent'
location: 'Pune, MH'
range: 'Nov 2020 - Jul 2022'
url: 'https://www.persistent.com/'
---

- Linux on Power (LoP) Team:
    - Working on a MVP that acts as a management and analytics dashboard for open-source packages available on IBM's ppc64le architecture. Building it using Python, FastAPI, Uvicorn webserver, Elasticsearch and ReactJS for UI.
    - Part of the core developement team of BulkSearch tool which validates the currency (availability) of open-source packages on IBM’s POWER8 machines and is configured to install/build/test packages from a variety of languages, and has reduced the team’s manual effort by over 80%
    - The primary goal of this tool is to introduce an application-level parallelism between Intel's x86 and IBM's ppc64le architectures
    - Enhanced the tool by automating the handling of massive CSV/Excel-based data by employing different data preprocessing and validation techniques
    - Found an efficient way of automating the setting up of a production-ready Drupal Webserver on POWER using Dockerfiles, Docker containers and shell scripts and incorporated the Drupal logic into existing BulkSearch tool
    - Researched databases - MySQL, MariaDB, SQLite and PostgreSQL for finding optimal database for integration with Drupal webserver on IBM POWER
    - Reviewing code and Publishing build scripts @ [ppc64le/build-scripts](https://github.com/ppc64le/build-scripts) for Open Source packages to run on IBM's POWER8 system
    - Mentored and onboarded 8 new graduate joinees, assisted them during techinical doubts/errors and helped them by sharing suitable training materials
- L&D Department (POC Project):
    - Built a Drone Surveillance System that detects the presence of a crowd from the proximity of pedestrians
    - A Keras RetinaNet model is trained on a custom dataset and a video can be fed for real-time crowd detection
    - The video feed is broken down into frames and the RetinaNet model is applied over individual frame for detecting distinct datapoints
    - The ML model interacts with an Angular-based UI with the help of Flask API endpoints
