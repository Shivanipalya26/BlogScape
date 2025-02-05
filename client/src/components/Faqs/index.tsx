import React, { FC, useRef, useState } from 'react';

interface Faq {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: Faq;
  idx: number;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [answerH, setAnswerH] = useState<string>('0px');
  const { faqsList, idx } = props;

  const handleOpenAnswer = (): void => {
    if (answerElRef.current) {
      const childEl = answerElRef.current.firstElementChild as HTMLElement;
      if (childEl) {
        const answerElH: number = childEl.offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
      }
    }
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: FC = () => {
  const faqsList: Faq[] = [
    {
      q: 'What is this blog about?',
      a: 'This blog covers a wide range of topics, including technology, lifestyle, and personal development, providing valuable insights and engaging content.',
    },
    {
      q: 'How often is new content published?',
      a: 'We strive to publish new articles weekly, ensuring fresh and insightful content for our readers.',
    },
    {
      q: 'Can I contribute to the blog?',
      a: "Yes! We welcome guest contributions. If you're interested, please visit our 'Write for Us' page for guidelines and submission details.",
    },
    {
      q: 'How can I stay updated with new posts?',
      a: 'You can subscribe to our newsletter or follow us on social media to get notifications about our latest articles.',
    },
    {
      q: 'How can I contact the blog team?',
      a: 'You can reach out to us through our contact page or email us directly for any inquiries or collaborations.',
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
