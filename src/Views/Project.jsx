import { useState } from "react";
export default function Project({projects}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="h-screen p-4  text-[var(--text-color)] flex items-center flex-col md:justify-center">
            <div className="text-head font-bold ">PROJECTS</div>
                <div className="m-4 shadow-lg rounded w-full h-full flex flex-col  p-5 md:h-2/3">
                    <div className="w-full flex font-bold text-3xl underline  md:h-1/6 items-center pl-3 pt-3 text-lg">{projects[currentIndex].title}</div>
                    <div className="w-full whitespace-pre-line flex h-2/5  mt-2 md:h-3/6 pl-3 text-lg">
                        {projects[currentIndex].description}
                    </div>
                    <div className="flex w-full  p-4 text-lg  md:h-1/6 text-2xl ">
                        <a target="blank" className="hover:underline md:mr-5" href={projects[currentIndex].link}><span className="p-5">Try site{">"} </span></a>
                        {projects[currentIndex].code ? 
                        (<a target="_blank" className="hover:underline" href={projects[currentIndex].code}> <span className="p-5 ">code {">"}</span></a>) : 
                        (<span>No code for this project.</span> )}
                    </div>
                    <div className="w-full text-lg flex justify-between border-t md:h-1/6">
                        <button
                            onClick={() =>
                                currentIndex > 0
                                ? setCurrentIndex(currentIndex - 1)
                                : setCurrentIndex(projects.length - 1)
                            }
                            className="w-1/2   p-5 border-b border-r  hover:underline cursor-pointer"
                            >
                            {"<"}back
                            </button>
                            <button
                            onClick={() =>
                                currentIndex < projects.length - 1
                                ? setCurrentIndex(currentIndex + 1)
                                : setCurrentIndex(0)
                            }
                            className=" w-1/2 p-5 border-b hover:underline cursor-pointer" 
                            >
                            next{">"}
                        </button>
                    </div>
            </div>
        </div>
    );
}