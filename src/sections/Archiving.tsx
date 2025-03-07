function Archiving() {
  return (
    <section
      id="archiving"
      className="flex flex-col items-center justify-start bg-black gap-y-10 py-10 scroll-mt-20"
    >
      <div className="flex flex-col gap-y-5 relative">
        <div>
          <h2 className="text-3xl font-black text-white">ARCHIVING</h2>
          <hr className="w-40 border-solid border-1 border-white-400" />
        </div>
        <a
          href="#archiving"
          className="absolute -left-10 top-1.5 cursor-pointer"
        >
          <img className="flex w-7" src="/icon/linkGray.svg" />
        </a>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-7 px-5">
        <div className="flex flex-col w-1/3 bg-white rounded-lg p-3 gap-y-1">
          <div className="flex gap-x-3 items-center w-full justify-left">
            <img
              className="flex w-13"
              src="/icon/github.svg"
              alt="github 이미지"
            />
            <h2 className="flex text-3xl font-bold">Github</h2>
          </div>
          <a className="flex">url</a>
          <div className="flex text-sm">소스 코드 저장소</div>
        </div>
        <div className="flex flex-col w-1/3 bg-white rounded-lg p-3 gap-y-1">
          <div className="flex gap-x-3 items-center w-full justify-left">
            <img
              className="flex w-13"
              src="/icon/github.svg"
              alt="github 이미지"
            />
            <h2 className="flex text-3xl font-bold">Github</h2>
          </div>
          <a className="flex">url</a>
          <div className="flex text-sm">소스 코드 저장소</div>
        </div>
      </div>
    </section>
  );
}

export default Archiving;
