function AboutMe() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-[60vh] bg-white-300 gap-y-10 py-10">
        <div className="flex flex-col gap-y-2 relative">
          <div>
            <h2 className="text-3xl font-black">ABOUT ME</h2>
            <hr className="w-40 border-solid border-0.5 border-gray-400" />
          </div>
          <button className="absolute -left-10 top-1.5 cursor-pointer">
            <img className="flex w-7" src="../public/icon/linkGray.svg" />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-10 px-10">
          <div className="flex w-3/7 gap-x-5 items-first">
            <img src="../public/icon/user.png" className="flex w-7 h-7" />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">이름</div>
              <div className="flex text-sm">한단비</div>
            </div>
          </div>
          <div className="flex w-3/7 gap-x-5 items-first">
            <img src="../public/icon/calendar.png" className="flex w-7 h-7" />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">생년월일</div>
              <div className="flex text-sm">01.09.17</div>
            </div>
          </div>
          <div className="flex w-3/7 gap-x-5 items-first">
            <img
              src="../public/icon/location-pin.png"
              className="flex w-7 h-7"
            />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">위치</div>
              <div className="flex text-sm">서울특별시 광진구</div>
            </div>
          </div>
          <div className="flex w-3/7 gap-x-5 items-first">
            <img src="../public/icon/phone.png" className="flex w-7 h-7" />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">연락처</div>
              <div className="flex text-sm">010-9348-2184</div>
            </div>
          </div>
          <div className="flex w-3/7 gap-x-5 items-first">
            <img src="../public/icon/email.png" className="flex w-7 h-7" />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">이메일</div>
              <div className="flex text-sm">hyjmex@gmail.com</div>
            </div>
          </div>
          <div className="flex w-3/7 gap-x-5 items-first">
            <img src="../public/icon/graduate.png" className="flex w-7 h-7" />
            <div className="flex flex-col gap-y-3 text-center">
              <div className="flex font-semibold">학력</div>
              <div className="flex text-sm">
                명지대학교
                <br />
                컴퓨터공학과
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
