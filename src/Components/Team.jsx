import React from 'react';

const Team = () => {
  const team = [
    {
      teamName: "Nikhil Kumar",
      memberImg: "https://via.placeholder.com/150", // Add an image URL
      description : "lorem ipsum dolor sit amet, consectet"
    },
    {
        teamName: "Nikhil Kumar",
        memberImg: "https://via.placeholder.com/150", // Add an image URL
        description : "lorem ipsum dolor sit amet, consectet"
      },
  
  ];

  return (
    <section id="team" className="w-full min-h-[20vh] pt-10 flex flex-col gap-2 bg-black py-10">
      <h1 className="text-[5vw] text-yellow-500 text-center">Our Team</h1>
      {/* <div className="w-full flex flex-wrap justify-center gap-6"> */}
        {team.map((item, index) => (
          <div key={index} className="relative w-[80%] mx-auto bg-white md:w-[90%] xl:w-[70%] px-2 overflow-x-hidden">
            <h1 className="px-2 text-[10vw] font-semibold text-black md:text-[4vw] capitalize">{item.teamName}</h1>
            <div className='absolute h-full w-[100%] bg-white-200 z-10 top-0 right-[-99%] bg-yellow-400'></div>
          </div>
        ))}
      {/* </div> */}
    </section>
  );
};

export default Team;
