import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogs";
import { Layout } from "../../components";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/blog")}
          className="flex gap-2 text-black px-4 py-2 rounded-lg mb-4 hover:opacity-50 transition-opacity duration-200"
        >
          <svg
            className="rotate-180 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="22"
            viewBox="0 0 29 22"
            fill="none"
          >
            <path
              d="M0.183105 10.7668L28.0001 10.7668M28.0001 10.7668C24.4113 10.6706 17.2336 8.38278 17.2336 0.000354097M28.0001 10.7668C24.4113 10.7347 17.2336 12.8432 17.2336 21.5332"
              stroke="black"
              strokeWidth="3.37175"
            />
          </svg>
          Go back
        </button>
        <img className="w-full h-auto mb-6" src={post.image} alt={post.title} />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div
          className="text-lg mb-4 space-y-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
