function Skills() {
  return (
    <section className="flex flex-col items-center justify-center h-4/5 bg-yellow-300 gap-y-6 py-10">
      <div className="flex flex-col gap-y-2 relative">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl font-black">SKILLS</h2>
          <hr className="w-25 border-solid border-0.5 border-gray-400" />
        </div>
        <button className="absolute -left-10 top-1.5 cursor-pointer">
          <img className="flex w-7" src="../public/icon/linkGray.svg" />
        </button>
      </div>
      <div className="flex flex-col bg-yellow-50 w-4/5 h-3/4 rounded-xl px-10 py-10 gap-y-3">
        <div className="flex flex-wrap gap-x-10 w-full">
          <div className="flex gap-x-3 w-30">
            <img src="../../public/icon/language.png" className="w-10 h-10" />
            <div className="font-semibold">Language</div>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              TypeScript
            </li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              JavaScript
            </li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">Python</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">Java</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">c</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">c++</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">html</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">css</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-x-10 w-full">
          <div className="flex gap-x-3 w-30">
            <img src="../../public/icon/language.png" className="w-10 h-10" />
            <div className="font-semibold">Frontend</div>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              React.js
            </li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">Recoil</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              React-Hook-Form
            </li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              Tailwind CSS
            </li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              Styled Component
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-x-10 w-full">
          <div className="flex gap-x-3 w-30">
            <img src="../../public/icon/language.png" className="w-10 h-10" />
            <div className="font-semibold">Backend</div>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            <li className="px-3 py-1 bg-black rounded-lg text-white">MySQL</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              SpringBoot
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-x-10 w-full">
          <div className="flex gap-x-3 w-30">
            <img src="../../public/icon/language.png" className="w-10 h-10" />
            <div className="font-semibold">DevOps</div>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 items-first">
            <li className="px-3 py-1 bg-black rounded-lg text-white">Vite</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">Docker</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">Vite</li>
            <li className="px-3 py-1 bg-black rounded-lg text-white">AWS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
