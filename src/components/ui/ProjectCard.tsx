function ProjectCard({ item }: any) {
  return (
    <div className="rounded-[15px] overflow-hidden  md:flex items-center md:h-[310px] lg:h-auto lg:flex-col">
      <img src={item.image} alt="" className="w-full md:w-1/2 lg:w-full" />
      <div className="text-center bg-[#FDF3F0] lg:hover:bg-peach group py-8 px-[1.875rem] md:w-1/2 md:h-full md:flex flex-col items-center justify-center md:px-10 lg:w-full lg:hover:cursor-pointer">
        <h1 className="text-peach lg:group-hover:text-white uppercase font-medium text-xl  tracking-[5px]">
          {item.title}
        </h1>
        <p className="secondary-text mt-4 md:max-w-[277px] lg:group-hover:text-white">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
