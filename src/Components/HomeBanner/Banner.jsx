import bannerImg from "/bannerforpetlover.jpg";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url("${bannerImg}")` }}
      className="h-[400px] bg-center bg-no-repeat mt-10"
    ></div>
  );
};

export default Banner;
