import React from "react";
import Layout from "../../styles/template/Layout";
import { BlockQuote } from "../../styles/typography";
import Card from "../../components/Card";
import { LinkButton } from "../../styles/button";

const cardData = [
  {
    title: "Informative Articles",
    icon: "📖",
    description:
      "Read high-quality, well-researched articles written by experts and passionate writers.",
  },
  {
    title: "Latest Trends",
    icon: "🌍",
    description:
      "Stay ahead of the curve with insights into emerging trends across industries.",
  },
  {
    title: "Share Your Voice",
    icon: "✎",
    description:
      "Become a contributor and share your knowledge with a wide audience.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20 transition-colors duration-300"
    >
      <Layout>
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-4xl font-medium mb-6">About BlogScape</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-teal-600">BlogScape</span> is
            more than just a blogging platform—it’s a space for ideas,
            knowledge, and meaningful discussions. We provide a platform for
            writers, thinkers, and industry experts to share their insights,
            experiences, and expertise with a global audience.
          </p>

          <div className="m-8 ml-0 ">
            <BlockQuote>
              "In a world of information, your story can make the difference"
            </BlockQuote>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our blog covers a wide range of topics, including technology,
            business, personal development, and more. Whether you're looking for
            the latest industry trends, expert advice, or thought-provoking
            discussions, BlogScape has something for you.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <LinkButton to='/' className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
              Explore more
            </LinkButton>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default AboutPage;
