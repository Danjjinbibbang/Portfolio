function Info() {
  return (
    <section
      id="info"
      className="flex flex-col items-center justify-center h-[60vh] bg-black gap-y-6 py-10"
    >
      <h2 className="text-white text-3xl font-bold">
        한단비
        <br />
        프론트 엔드 개발자 포트폴리오
      </h2>
      <hr className="w-10 border-solid border-2 border-white" />
      <h4 className="text-white text-l">
        안녕하세요. <br /> 본질에 집중하는 프론트 엔드 개발자 <br />{" "}
        한단비입니다.
      </h4>
      <a
        href="#aboutme"
        className="text-white border-none border-1 rounded-3xl py-3 px-7 hover:bg-blue-800 bg-blue-600 cursor-pointer"
      >
        더 알아보기 ↓
      </a>
    </section>
  );
}
export default Info;
