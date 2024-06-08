const MyAddedPets = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mb-10">My Added Pets</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Pet Name</th>
              <th>Category</th>
              <th>Image</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Pluto</td>
              <td>Cat</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Xy2JCtt/pluto.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button>Update</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
              <td>
                <button>Adopted</button>
              </td>

              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedPets;
