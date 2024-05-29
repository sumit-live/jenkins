### Project Description and Technologies Used

#### Project Description
This project is a portfolio website for Sumit Saini, showcasing his educational background, professional experience, projects, internships, and participation. The portfolio provides a comprehensive overview of Sumit's skills and achievements, and serves as an online resume for potential employers or collaborators.

```
project url: https://github.com/sumit-live/jenkins
```
#### Technologies Used
The project utilizes a range of modern web development technologies and tools to ensure a robust, performant, and maintainable codebase:

1. **React**: A JavaScript library for building user interfaces, used to create the dynamic components of the portfolio.
2. **Tailwind CSS**: A utility-first CSS framework used for styling the components, ensuring a responsive and aesthetically pleasing design.
3. **Bootstrap & React-Bootstrap**: Provides additional styling and components to enhance the UI/UX.
4. **Vite**: A fast build tool and development server used to bundle the project, ensuring quick iteration and hot-reloading during development.
5. **Jest**: A JavaScript testing framework used to write and run unit tests, ensuring the components work as expected.
6. **Testing Library**: Provides utilities to test React components in a way that resembles how they are used by the end-users.
7. **ESLint**: A static code analysis tool for identifying problematic patterns found in JavaScript code, ensuring code quality and consistency.
8. **Babel**: A JavaScript compiler that allows using next-generation JavaScript features and syntax today.
9. **PostCSS & Autoprefixer**: Tools for transforming CSS with JavaScript plugins, ensuring cross-browser compatibility.
10. **SonarQube**: A platform for continuous inspection of code quality, used to detect bugs, code smells, and security vulnerabilities.
11. **Docker**: Used to create an isolated environment (agent) for running the application and its dependencies, ensuring consistency across different environments.

### Project Structure with Tests

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Education.js
│   │   ├── ProfessionalExperience.js
│   │   ├── Projects.js
│   │   ├── Internships.js
│   │   ├── Card.test.js
│   │   ├── Education.test.js
│   │   ├── ProfessionalExperience.test.js
│   │   ├── Projects.test.js
│   │   └── Internships.test.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tests/

├── package.json
├── tailwind.config.js
├── jest.config.cjs
└── ... (other config files)
```


### Sample Unit Test Setup
The project is set up to use Jest and Testing Library for unit tests. Below is an example of a test file structure and content for the Card component.

#### `tests/education.test.js`

```
// tests/Education.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Education from '../src/components/Education';

describe('Education Component', () => {
  it('renders the education section with both cards', () => {
    const { getByText } = render(<Education />);

    expect(getByText('Education')).toBeInTheDocument();
    expect(getByText('Deakin University, Burwood, Melbourne, Australia')).toBeInTheDocument();
    expect(getByText('Masters of Data Science (July 2023 - Present)')).toBeInTheDocument();
    expect(getByText('Courses: Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Databases, Data Analytics')).toBeInTheDocument();
    expect(getByText('University Institute of Engineering and Technology, Kurukshetra University, Kurukshetra, India')).toBeInTheDocument();
    expect(getByText('Bachelor of Technology - Electronics and Communications (July 2016 - May 2020)')).toBeInTheDocument();
    expect(getByText('GPA: 6.81')).toBeInTheDocument();
    expect(getByText('Courses: Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases, Micro-controllers and Micro-processors')).toBeInTheDocument();
  });
});
```

### Running the Project
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Run Tests**:
   ```bash
   npm test
   ```

### setting up the Jenkins

A `Dockerfile` can be created to set up a jenkins agent to run the pipeline as below:

   ```docker
# Use the official Jenkins agent image as a base image
FROM jenkins/agent:latest

# Switch to the root user to install necessary packages
USER root

# install node js
RUN apt-get update && apt-get install node npm
   ```

building the image as 

   ```bash
   docker build -t sn4ppy/agent-node .
   ```

publish it to docker hub:

   ```bash
   docker push sn4ppy/agent-node:latest
   ```
   
 in jenkins **Mange Jenkins -> node -> cloud -> setup docker as shown below**
 ![cd747ae34648882d20d5c85b31d8dbf7.png](:/3d7200a8023f4b80a86de060d0f5b12f)
 
 ---
 
 
 ![a238b6a1c2c8cf410c084adc6e8b71a6.png](:/0d6f5c3e0d444e5f836077b7ec8a0d2f)
### Setting Up SonarQube
SonarQube can be used to continuously inspect code quality. You can run SonarQube locally using Docker or integrate it into your CI/CD pipeline. Below is a basic setup for running SonarQube using Docker:

1. **Pull the SonarQube Docker Image**:
   ```bash
   docker pull sonarqube
   ```

2. **Run SonarQube**:
   ```bash
   docker run -d --name sonarqube -p 9000:9000 sonarqube
   ```

3. **Configure SonarQube**:
   - Open your browser and go to `http://localhost:9000`
   - Follow the setup instructions to configure your project.

### pipeline screenshot

![10232eabf865f531b6126fe0ee881ebf.png](:/425cb892f4f14eb296ef72d289d67573)

### brief description of each stage of Jenkins pipeline:

1. **Agent Definition**:
   - The pipeline specifies an agent with the label `docker-test-1`, indicating that the job will run on a node matching this label.

2. **Stages**:
   - **Build**:
     - **Description**: This stage handles the initial setup and building of the React application.
     - **Steps**:
       - `echo 'pull docker image to host react-app'`: Outputs a message indicating the Docker image pull for the React application host.
       - `sh 'npm install'`: Runs `npm install` to install the necessary Node.js dependencies for the React app.
       - `echo 'Build the React app'`: Outputs a message indicating the React app build process.

   - **Unit and Integration Tests**:
     - **Description**: This stage is responsible for running the unit and integration tests.
     - **Steps**:
       - `echo 'Running unit tests with JUnit.'`: Outputs a message indicating that unit tests are being run using JUnit.
       - `sh 'npm run test'`: Executes the tests defined in the React application using `npm run test`.

   - **Deploy to Staging**:
     - **Description**: This stage handles the deployment of the application to the staging environment.
     - **Steps**:
       - `echo 'Deploying the application github actions.'`: Outputs a message indicating that the application is being deployed, presumably using GitHub Actions.

3. **Post Actions**:
   - **Always**:
     - **Description**: This block defines actions that should always run at the end of the pipeline, regardless of its success or failure.
     - **Steps**:
       - `emailext attachLog: true, body: "${currentBuild.result}: ${BUILD_URL}", compressLog: false, subject: "Build Notification: ${JOB_NAME}-Build# ${BUILD_NUMBER} ${currentBuild.result}", to: 'sumitsaini341@gmail.com'`: Sends an email notification with the build log attached. The email includes the build result, build URL, job name, and build number. The email is sent to `sumitsaini341@gmail.com`.

### SonarQube analysis report
![c8e08e310e8f3701700ccf8cc5b7800a.png](:/377d50b5df494958af8437f92720b601)
