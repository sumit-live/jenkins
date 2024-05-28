import Card from './Card';

const ProfessionalExperience = () => {
  return (
    <Card title="Professional Experience">
      <div className="flex flex-wrap -mx-2" id='Projects'>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="IOT Data Engineer at Preflet (Remote, Lisbon, Portugal)">
            <p>January 2023 - August 2023</p>
            <p>Building data pipelines for data streaming from smart devices and designing analytics for IoT data</p>
            <p>Tech Stack: Flask, FastAPI, Platform IO, Arduino, TensorFlow, Scikit-learn, Plotly, Docker, Django, SQL, NoSQL</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="Assistant Software Engineer at Tata Consultancy Services (Noida, India)">
            <p>May 2021 - January 2023</p>
            <p>Developing micro-frameworks for posing and getting data from various financial and inventory applications</p>
            <p>Tech Stack: Flask, FastAPI, Vanilla JavaScript</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="Technical Assistant Research at Shri Krishna AYUSH University (Kurukshetra, Haryana, India)">
            <p>October 2020 - May 2021</p>
            <p>Analyzing biomedical data for heart and muscle data to detect diabetes mellitus</p>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default ProfessionalExperience;
