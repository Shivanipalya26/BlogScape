import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../styles/template/Layout";
import * as T from "../../styles/typography/index";
import * as B from '../../styles/button/index'

const navigationList = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blogs", path: "/blogs" },
  { title: "Write Blog", path: "/write-blog" },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 py-10">
      <Layout>
        <div className="relative">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-0">
            {isVisible && (
              <B.Button rounded="full" 
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </B.Button>
            )}
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <T.H5 className="font-medium tracking-wider">BLOGSCAPE</T.H5>
              </div>

              <T.P className="mx-auto mt-6 max-w-md leading-relaxed text-gray-500 lg:text-left">
                Thoughts, trends, and inspiration — crafted for you.
              </T.P>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              {navigationList.map((item) => (
                <li key={item.title}>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to={item.path}
                  >
                    <T.P>{item.title}</T.P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <T.P className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2025. All rights reserved.
          </T.P>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
