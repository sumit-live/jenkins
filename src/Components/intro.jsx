import Card from './Card';

const Introduction = () => {
  return (
    <div className="pt-20"> {/* Add padding to the top */}
      <Card title="Welcome to Sumit Saini's Portfolio">
        <p id='Introduction' className="text-lg mb-4 text-justify">
          Hello! I'm Sumit, a passionate and dedicated Data Scientist currently pursuing my Masters of Data Science at Deakin University, Burwood, Melbourne, Australia. With a strong background in Electronics and Communications Engineering and extensive experience in data analysis, machine learning, and software development, I strive to solve complex problems and drive innovation through technology.
        </p>
      </Card>
    </div>
  );
};

export default Introduction;
