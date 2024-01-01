const Intro = () => {
  return (
    <section className="mb-20 mt-10">
      <div className="container m-auto items-center flex pt-20 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-5xl">Hello, I'm ...</h1>
          <span className="text-2xl tracking-wide">Frontend Developer</span>

          <p className="tracking-wide leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit totam saepe eos accusamus laudantium voluptatum!
          </p>

          <button
            type="button"
            className="shadow-md shadow-slate-600 w-fit rounded-full text-[15px] p-3 bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Download resume
          </button>
        </div>
        <div className="relative">
          <div
            className={`relative w-[300px] h-[200px] rounded-[50%] after:absolute after:bg-contain after:border-2 after:border-blue-500 after:w-[300px] after:h-[300px] after:-top-5 after:left-15  after:rounded-full after:-z-10 after:shadow-zinc-50 after:shadow-md after: `}
          >
            <img
              className=" w-[250px] absolute top-0 rounded-full h-[250px]"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
