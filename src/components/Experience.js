import { MdOutlineDoubleArrow } from 'react-icons/md'
function Experience() {
  const experiences = [
    {
      company: "Citi",
      position: "Technology Analyst",
      duration: "July 2021 - Present",
      description: [
        "Designed UI screens and integrated them with APIs to develop a seamless user experience",
        "Implemented complex application flows to ensure optimal functionality of the application",
        "Customized Ag-grid to meet specific user requirements and used Server-Side Row Model (SSRM) for optimal performance",
        "Utilized Angular framework to develop robust, scalable, and efficient applications."
      ]
    },
    {
      company: "Veritas",
      position: "Summer Intern",
      duration: "Jan 2021 - June 2021",
      description: [
        "Generated reports to analyze test results during the automation of test suites for Veritas Netbackup Java GUI using Robot Framework in Python",
        "Successfully captured screenshots of the GUI at the point of failure of the test suite to identify root causes and resolve issues quickly",
        "Reduced the time and effort required for manual testing, leading to increased efficiency and productivity."
      ]
    },
    {
      company: "Mastercard",
      position: "Summer Intern",
      duration: "May 2020",
      description: [
        "Developed an online test web application using Angular framework",
        "Added features such as a timer, flagging system, and navigation options to enhance user experience",
        "Enabled examiners to add questions to the test, making it a complete end-to-end solution for conducting online tests."
      ],
    },
  ];

  return (
    <section name="experience" className="my-64 mx-auto px-8 md:px-20 lg:px-24 max-w-5xl">
      <h3 className="text-4xl w-full mb-6 text-gray-300 font-bold">Experience</h3>

      {experiences.map(e => (
        <div key={e.company} className="w-full flex flex-col mb-4 p-4 bg-[#112A50] rounded-lg">
          <div className="w-full flex flex-col sm:flex-row justify-between">
            <p className="text-my-text"> 
              <span className="text-md font-light">{e.position} </span> 
              <span className="text-lg font-bold">@{e.company} </span>
            </p>
            <p className="text-gray-300 italic text-sm">{e.duration}</p>
          </div>
          <div className="w-full my-1">
            <ul>
            { e.description.map(point => (
              <li key={point}
                className="text-gray-400 my-2">
                  <MdOutlineDoubleArrow className='inline pb-1 text-white' />
                  {point}
              </li>
            ))}
            </ul>
          </div>
        </div>
      ))}


    </section>
  );
}

export default Experience;
