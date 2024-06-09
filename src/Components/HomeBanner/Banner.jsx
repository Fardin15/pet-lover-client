import bannerImg1 from "/bannerimg1.jpg";
import bannerImg2 from "/bannerimg2.jpg";
import bannerImg3 from "/bannerimg3.jpeg";
import bannerImg4 from "/bannerimg4.jpeg";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={bannerImg1} className="w-full h-[450px]" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={bannerImg2} className="w-full h-[450px]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={bannerImg3} className="w-full h-[450px]" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={bannerImg4} className="w-full h-[450px]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
