import Card from './Card';

const Projects = () => {
  return (
    <Card title="Projects">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="Satellite Image Segmentation using Watershed Transform">
            <p>Technologies: Python, SKImage, Scikit-learn, Docker, Matplotlib</p>
            <p>Description: Segmentation of 3-band Geo-Spatial images from INSAT-3 and developing a hybrid image segmentation model based on Geo-Spatial bands with an accuracy level of 99.98%</p>
            <p>Duration: January 2020 - October 2020</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="Phishing Detection System using Machine Learning">
            <p>Technologies: Python, Scikit-learn, Flask, Requests, WhoIS</p>
            <p>Description: Research-oriented, open-source phishing websites detection using URL feature analysis</p>
            <p>Duration: January 2019 - December 2019</p>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
