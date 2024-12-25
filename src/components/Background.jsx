const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[20%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Linkifies.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] font-semibold text-zinc-900">
          Linky.
        </h1>
      </div>
    </>
  );
};

export default Background;
