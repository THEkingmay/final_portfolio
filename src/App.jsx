import Project from "./Views/Project"
import About from "./Views/About"
import ProjectData from "./Data/Project"

export default function App(){
  return (
    <div className="md:flex justify-center items-center">
      <div className="md:w-1/2"><About /></div>
      <div className="md:w-1/2"><Project projects={ProjectData} /></div>
    </div>
  )
}