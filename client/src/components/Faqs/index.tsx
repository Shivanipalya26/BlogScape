import { ArrowForwardIcon } from '../../styles/icons';
import Layout from '../../styles/template/Layout';
import * as T from '../../styles/typography';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
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
