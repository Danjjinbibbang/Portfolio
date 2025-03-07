import { projects } from "../data/projects";

function Project() {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center flex-grow bg-gray-100 gap-y-10 py-10 box-border scroll-mt-20"
    >
      <div className="flex flex-col gap-y-2 relative">
        <div>
          <h2 className="text-3xl font-black">PROJECTS</h2>
          <hr className="w-40 border-solid border-0.5 border-gray-400" />
        </div>
        <a href="#project" className="absolute -left-10 top-1.5 cursor-pointer">
          <img className="flex w-7" src="/icon/linkGray.svg" />
        </a>
      </div>
      <div className="flex gap-x-3">
        <span>주요 프로젝트만 보기</span>
        <input type="checkbox" className="w-5" />
      </div>
      <div className="flex flex-wrap w-full justify-center p-10 box-border gap-10 h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg w-1/3 p-6 shadow-lg"
          >
            <div className="flex bg-gray-500 rounded-lg px-3 w-1/2">
              {project.title}
            </div>
            <div className="flex py-1 text-gray-500">{project.date}</div>
            <hr className="flex py-1 border-gray-400" />
            <div className="flex flex-col items-start gap-y-2">
              <h5>{project.content}</h5>
              <ul className="flex flex-col gap-y-1">
                {project.detail.map((details, idx) => (
                  <li key={idx}>{details}</li>
                ))}
              </ul>
              <div className="flex p-1 border-l-5 py-1 px-3 border-primary">
                {project.url}
              </div>
              <div className="flex bg-yellow-100 border-1 border-yellow-200 p-1 rounded-lg">
                {project.skills}
              </div>
              <button className="border-1 border-gray-300 px-2 rounded-lg text-sm font-semibold mt-1">
                README
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Project;
