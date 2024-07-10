import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, excerpt, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 h-full pb-6">
        <Link to={link} className="text-primary underline">Read more</Link>
      </div>
    </div>
  );
};

export default BlogCard;
