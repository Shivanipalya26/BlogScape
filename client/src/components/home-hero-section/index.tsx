import Layout from '../../styles/template/Layout';
import * as T from '../../styles/typography';
import * as B from '../../styles/button';

const HomeHeroSection = () => {
  return (
    <section className="h-full md:h-[93vh] bg-[#eae3dd]">
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className=" flex flex-col md:flex-row justify-between items-center w-full h-full overflow-hidden">
            <div className="flex-1 flex flex-col gap-4 w-full ">
              <T.H2 className="text-4xl md:text-5xl font-bold text-gray-800 ">
                Where
                <span className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] ">
                  {' '}
                  Curiosity{' '}
                </span>
                Meets Insight – Your Ultimate Knowledge Hub
              </T.H2>
              <T.P className='tracking-wider text-slate-600'>
                Stay informed and inspired with articles that cater to your
                curiosity. Explore everything from industry trends to personal
                growth. Our content is designed to
                be informative and actionable.
              </T.P>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <B.Button>Start Exploring</B.Button>
                <B.LinkButton
                  variant="secondary"
                  to="/about"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Learn More About Us
                </B.LinkButton>
              </div>
            </div>

            <div className=" flex flex-1 justify-center h-full">
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
