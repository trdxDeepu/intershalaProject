/* eslint-disable react/prop-types */


const UserCard = ({user }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={user.image}
            alt={`User ${user.id}`}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {user.name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            ₹{user.price}
          </a>
          <p className="mt-2 text-gray-500">{user.description}</p>
          <div className="mt-4 flex items-center">
            <img
              src={user.image}
              className="h-8 w-8 object-cover rounded-full"
              alt={`User ${user.id}`}
            />
            <div className="ml-2">
              <div className="text-sm font-medium text-gray-900">{user.rating}</div>
              <div className="text-xs font-medium text-gray-600">({user.reviews} reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
