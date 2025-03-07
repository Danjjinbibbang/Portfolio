function Career() {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center flex-grow py-10 bg-gray-100 gap-y-10"
    >
      <div className="flex flex-col gap-y-2 relative items-center">
        <div>
          <h2 className="text-3xl font-black">CAREER</h2>
          <hr className="w-30 border-solid border-0.5 border-gray-400" />
        </div>
        <a href="#career" className="absolute -left-10 top-1.5 cursor-pointer">
          <img className="flex w-7" src="/icon/linkGray.svg" />
        </a>
      </div>
      <div className="flex w-full justify-center gap-x-10">
        <div className="flex border-r-2 border-gray-300 w-1/5">
          <div className="flex border-1 border-gray-300 rounded-full h-50 w-50 items-center justify-center bg-white">
            <img className="w-45 H-20" src="/icon/FAS_logo.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h4 className="flex text-xl font-bold">(주) 에프에이솔루션</h4>
          <div className="flex text-md text-gray-400 font-lg">
            2024.08 - (재직중)
          </div>
          <div className="flex">
            "대한민국 금융기관 Digital Transformation의 역사를 함께 한
            에프에이솔루션"
          </div>
          <ul className="flex">
            <li className="px-3 py-1 bg-black rounded-lg text-white">
              Uipath 개발
            </li>
          </ul>
          <div className="flex p-1 border-l-5 py-1 px-3 border-primary">
            페퍼저축은행, 대한세무법인 유지보수 및 고객 대응
          </div>
        </div>
      </div>
    </section>
  );
}
export default Career;
