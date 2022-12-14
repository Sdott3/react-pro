import React from "react";
import JAM from "../../images/JAM.png";

function Projects() {

    const projects = [ 
        {
            title: "JAM",
            description:"Group Website built to allow users to find concerts in their area. ",
            link:"https://anushar20201.github.io/JAM/",
        },
        {
            title: "Things Wanted",
            description:"",
            image: "",
            link:"https://shielded-mountain-23922.herokuapp.com/",
        },
        {
            title: "Horiseon",
            description:"Basic website built with HTML & CSS.",
            image: "",
            link:"https://sdott3.github.io/Horiseon/",
        },
        {
            title: "Wandrlust",
            description:"RHave you ever had to put together an itinerary to travel to a place you’ve never been before? Do you feel like you need a vacation? This application connects user with other travelers, help create your itinerary, and plan your flight all for free. You can also share your experience to help other travelers.",
            image: "",
            link:"https://github.com/wagnergabe/Wandrlust",
        }
    ];

    return (

        
        <section id="projects" className="text-black-400 bg-blue-300 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Project
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Here are a few projects I've worked on.
                </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;