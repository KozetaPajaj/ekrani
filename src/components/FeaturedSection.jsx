import { Link } from "react-router-dom";

function FeaturedSection({ title, items, type }) {
  return (
    <div className="w-full pt-8">
      <div className="container mx-auto text-left px-8 py-4 flex justify-between items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold uppercase">
          {title}
        </h2>
        <Link
          to={`/${type}`}
          className="border border-[#d10000] text-[#d10000] py-2 px-4 "
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-8">
        {items.slice(0, 6).map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id} className="block">
            <div className="w-full">
              <img
                src={item.imageURL}
                alt={item.title}
                className="w-full h-[225px] object-cover rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
