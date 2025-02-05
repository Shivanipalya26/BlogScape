import { ArrowForwardIcon } from '../../styles/icons';
import Layout from '../../styles/template/Layout';
import * as T from '../../styles/typography';

const faqs = [
  {
    question: 'What is this blog about?',
    answer: 'This blog covers a wide range of topics, including technology, lifestyle, and personal development, providing valuable insights and engaging content.',
  },
  {
    question: 'How often is new content published?',
    answer: 'We strive to publish new articles weekly, ensuring fresh and insightful content for our readers.',
  },
  {
    question: 'Can I contribute to the blog?',
    answer: "Yes! We welcome guest contributions. If you're interested, please visit our 'Write for Us' page for guidelines and submission details.",
  },
  {
    question: 'How can I stay updated with new posts?',
    answer: 'You can subscribe to our newsletter or follow us on social media to get notifications about our latest articles.',
  },
  {
    question: 'How can I contact the blog team?',
    answer: 'You can reach out to us through our contact page or email us directly for any inquiries or collaborations.',
  },
];

const FaqSection = () => {
  return (
    <section className="py-10">
      <Layout>
        <div className="flex flex-col gap-8">
          <T.H2 className="text-center">Frequently Asked Questions</T.H2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group [&_summary::-webkit-details-marker]:hidden"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <T.H5 className="">{faq.question}</T.H5>
                  <ArrowForwardIcon className="size-5 shrink-0 transition duration-300 group-open:rotate-90" />
                </summary>
                <T.P className="ml-4">{faq.answer}</T.P>
              </details>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default FaqSection;
