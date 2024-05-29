import Card from './Card';

const Education = () => {
  return (
    <Card title="Education">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="Deakin University, Burwood, Melbourne, Australia">
            <p id='Education'>Masters of Data Science (July 2023 - Present)</p>
            <p>Courses: Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Databases, Data Analytics</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card title="University Institute of Engineering and Technology, Kurukshetra University, Kurukshetra, India">
            <p>Bachelor of Technology - Electronics and Communications (July 2016 - May 2020)</p>
            <p>GPA: 6.81</p>
            <p>Courses: Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases, Micro-controllers and Micro-processors</p>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default Education;
