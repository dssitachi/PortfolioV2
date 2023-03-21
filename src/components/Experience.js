import { useState } from 'react';

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const jobExperience = [
    {
      jobTitle: 'Web Developer',
      companyName: 'ABC Company',
      employmentDates: '2019 - Present',
      jobDescription: 'Developed and maintained web applications using React and Node.js.',
    },
    {
      jobTitle: 'Software Engineer',
      companyName: 'XYZ Corporation',
      employmentDates: '2016 - 2019',
      jobDescription: 'Contributed to the development of a large-scale enterprise software system using Java and Spring Framework.',
    },
    // Add more job experience objects here...
  ];

  return (
    <section className="my-64 mx-auto px-8 md:px-20 lg:px-24 max-w-5xl">
        <h3 className="text-4xl w-full mb-6 text-gray-300 font-bold">Experience</h3>
      <div className="flex mb-4">
        {jobExperience.map((job, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-200'
            } py-2 px-4 rounded-l-lg`}
            onClick={() => setActiveTab(index)}
          >
            {job.jobTitle}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {jobExperience[activeTab].jobTitle}
        </h2>
        <h3 className="text-md font-semibold mb-2">
          {jobExperience[activeTab].companyName}
        </h3>
        <p className="text-sm mb-2">
          {jobExperience[activeTab].employmentDates}
        </p>
        <p className="text-sm">{jobExperience[activeTab].jobDescription}</p>
      </div>
    </section>
  );
}

export default Experience;
