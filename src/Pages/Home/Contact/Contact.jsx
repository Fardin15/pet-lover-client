const Contact = () => {
  return (
    <section className="px-9 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between items-center">
        <div>
          <div className="flex justify-start items-center gap-5 mb-4">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src="/petlover.jpg"
              alt=""
            />
            <h1 className="font-semibold text-3xl">Pet Lover</h1>
          </div>
          <p className="font-normal text-base mb-3">
            we are giving our services to you since from 2014,and we achieved
            the trust from your with this service. Thanks all of your to keeping
            faith on us.
          </p>
          <div className="flex justify-between items-center gap-3">
            <img
              className="h-[40px] w-[40px]"
              src="https://i.postimg.cc/L818DTHj/facebook-2.png"
              alt=""
            />
            <img
              className="h-[40px] w-[40px]"
              src="https://i.postimg.cc/rwfCMq68/business.png"
              alt=""
            />
            <img
              className="h-[40px] w-[40px]"
              src="https://i.postimg.cc/50DWGc9g/twitter.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="font-medium text-3xl mb-6">Contact :</h1>
          <p className="font-normal text-base mb-3 flex justify-start items-center gap-3">
            <span>
              <img
                className="h-[30px] w-[30px]"
                src="https://i.postimg.cc/jSQDHcqC/telephone-symbol-button.png"
                alt=""
              />
            </span>{" "}
            Phone : +1 (514) 7939-357
          </p>
          <p className="font-normal text-base mb-3 flex justify-start items-center gap-3">
            <span>
              <img
                className="h-[30px] w-[30px]"
                src="https://i.postimg.cc/GhYw9hdx/email.png"
                alt=""
              />
            </span>{" "}
            Email :{" "}
            <a className="underline text-blue-500" href="">
              petlover@gmail.com
            </a>
          </p>
          <p className="font-normal text-base mb-3 flex justify-start items-center gap-3">
            <span>
              <img
                className="h-[30px] w-[30px]"
                src="https://i.postimg.cc/DfGn4ccG/map.png"
                alt=""
              />
            </span>{" "}
            Location :
          </p>
          <p className="mr-5 font-normal text-base">
            6890 Blvd, The Bronx, NY 1058 New York, USA
          </p>
        </div>
        <div>
          <h1 className="font-medium text-3xl mb-6">Helpful Resources</h1>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Create Account
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Contact Us
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Terms of Use
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Privacy Centre
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">Blogs</p>
        </div>
        <div>
          <h1 className="font-medium text-3xl mb-6">Job Seekers</h1>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Create Account
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Browse Jobs
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">Upload CV</p>
          <p className="font-normal text-base mb-3 cursor-pointer">
            Company Profile
          </p>
          <p className="font-normal text-base mb-3 cursor-pointer">FAQ</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
