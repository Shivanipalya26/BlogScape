import Layout from "../../styles/template/Layout";
import blogImg from "../../styles/assets/blogImg.jpg";

const HomePage = () => {
  return (
    <section>
      <Layout>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-2/3 px-6 md:px-18 pt-16 md:pt-26 pb-16 md:pb-28">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Where Curiosity Meets Insight – Your Ultimate Knowledge Hub
            </h1>
            <p className="text-lg md:text-1xl font-mono text-gray-500 leading-relaxed mb-6 pt-2">
              Stay informed and inspired with articles that cater to your
              curiosity. Explore everything from industry trends to personal
              growth, all written with you in mind. Our content is designed to
              be informative and actionable.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg shadow-md hover:shadow-2xl cursor-pointer transition duration-300">
                Start Exploring
              </button>
              <a
                href="#about"
                className="text-teal-600 font-semibold hover:underline"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden flex justify-center">
            <img
              src={blogImg}
              alt="computer"
              className="w-full max-w-[80vh] h-auto p-4 md:p-10 pr-0  "
            />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomePage;
