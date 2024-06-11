import img1 from "../../../assets/jack.jpg";
import img2 from "../../../assets/moina.jpeg";
import img3 from "../../../assets/Rocky.jpeg";
import img4 from "../../../assets/scarb.jpg";

const InspirationSection = () => {
  return (
    <>
      <section className="mt-10 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">Adopt pet,Not Buy them</h2>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50 bg-gray-900 ">
                    <p>
                      Explore the heartwarming stories of pets who found their
                      forever homes. From abandoned strays to beloved family
                      members, these tales of love and resilience will inspire
                      you to make a difference. Read about the journeys of pets
                      and their new families, and see how a little kindness can
                      change lives forever.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={img1}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500  "
                      />
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900 dark:bg-gray-50 ">
                    <p>
                      Discover the powerful bonds formed between adopted pets
                      and their owners. Each story highlights the transformative
                      impact of adoption, showing how pets bring joy,
                      companionship, and unconditional love into their new
                      homes. Let these uplifting experiences motivate you to
                      open your heart and home to a pet in need.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={img2}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 "
                      />
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-900 dark:bg-gray-50 ">
                    <p>
                      Meet the animals who were given a second chance at
                      happiness through adoption. These stories showcase the
                      incredible recovery and growth of pets who were once lost,
                      neglected, or unwanted. Witness the remarkable
                      transformations and the mutual happiness that comes from
                      giving a pet a loving home.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={img3}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 "
                      />
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900 dark:bg-gray-50 ">
                    <p>
                      Join a community of compassionate pet lovers who have made
                      the choice to adopt. Read inspiring testimonials from
                      adopters who share their journeys of bringing a pet into
                      their lives. Learn how the simple act of adopting a pet
                      can create a ripple effect of kindness and compassion,
                      enriching both human and animal lives alike.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={img4}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InspirationSection;
