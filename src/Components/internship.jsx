import Card from './Card';

const Internships = () => {
  return (
    <Card title="Internships and Participation">
      <div className="flex flex-wrap -mx-2" id='Internships'>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
          <Card title="Technology Job Simulation at Deloitte (Forage)">
            <p>November 2023</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
          <Card title="Customer Appreciation at Walgreens, Tata Consultancy Services">
            <p>November 2022</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
          <Card title="First Place at College Level in SIH 2020">
            <p>September 2019</p>
          </Card>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
          <Card title="Data Analyst Internship at Haier India Pvt. Ltd.">
            <p>June 2019 - July 2019</p>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default Internships;
