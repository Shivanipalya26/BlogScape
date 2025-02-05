import { Link } from 'react-router-dom';
import Layout from '../../styles/template/Layout';

const HomeHeroSection = () => {
  return (
    <section className="h-[93vh] bg-[#ede8e8]">
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className=" flex flex-col md:flex-row justify-between items-center ">
            <div className="flex-1 flex flex-col w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Where
                <span className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] ">
                  {' '}
                  Curiosity{' '}
                </span>
                Meets Insight – Your Ultimate Knowledge Hub
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
                <Link
                  to="/about"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="overflow-hidden flex flex-1 justify-center">
              <img
                src={'/images/blogImg.jpg'}
                alt="computer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HomeHeroSection;
