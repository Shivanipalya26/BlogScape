import { useState } from 'react';
import Layout from '../../styles/template/Layout';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../styles/button';
import * as T from '../../styles/typography';
import { LogoIcon } from '../../styles/icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationList = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Write Blog', path: '/write-blog' },
  ];

  return (
    <header className="bg-gray-100">
      <Layout>
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <LogoIcon className="text-gray-600" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
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
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <LinkButton to="/login">Login</LinkButton>

              <div className="hidden sm:flex">
                <LinkButton to="/register" variant="secondary">
                  Register
                </LinkButton>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav aria-label="Global" className="md:hidden">
            <ul className="flex flex-col items-center gap-6 text-sm">
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
          </nav>
        )}
      </Layout>
    </header>
  );
};

export default Navbar;
