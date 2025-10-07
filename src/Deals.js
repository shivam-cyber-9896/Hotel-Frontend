import React from 'react';
import './Deals.css';

const offers = [
  {
    title: "First time's a charm",
    description: 'Earn 3,000 bonus points for your first booking in our app. New members get exclusive welcome benefits.',
    price: 'From INR 4,865.00 / night',
    discount: null,
    link: '/booking',
  },
  {
    title: 'Plan & Save - Early Bird',
    description: 'Book 30 days in advance and pay upfront to save up to 25%. Non-refundable rate with best price guarantee.',
    price: 'From INR 4,240.25 / night',
    discount: '-25%',
    link: '/booking',
  },
  {
    title: 'Members Only Rate',
    description: 'Radisson Rewards members save up to 15% more on stays worldwide. Join free and start saving today!',
    price: 'From INR 4,135.25 / night',
    discount: '-15%',
    link: '/lang',
  },
  {
    title: 'Weekend Getaway Special',
    description: 'Book Friday to Sunday and get complimentary breakfast and late checkout. Perfect for weekend travelers.',
    price: 'From INR 5,299.00 / night',
    discount: '-10%',
    link: '/booking',
  },
  {
    title: 'Extended Stay Discount',
    description: 'Stay 5 nights or more and save 20%. Ideal for business travelers and long vacations.',
    price: 'From INR 3,892.00 / night',
    discount: '-20%',
    link: '/booking',
  },
  {
    title: 'More brands. More stays. More points.',
    description: 'Earn up to 10,000 bonus points with multiple stays across Radisson properties. Redeem for free nights!',
    price: 'Reward yourself',
    discount: null,
    link: '/lang',
  },
];

const Deals = () => {
  return (
    <section
      id="deals"
      className="bg-[#f6f6f6] py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Discover Great Hotel Deals
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-16">
        Whether you’re planning ahead for a weekend getaway or looking for last-minute
        business deals, you'll find the best offers for Radisson Chandigarh Zirakpur here.
        Enjoy special rates and extra perks to make your stay more affordable and memorable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between deal-card-transition"
          >
            {offer.discount && (
              <div className="text-white bg-red-500 rounded-full w-fit px-4 py-1 text-sm font-semibold mb-4">
                {offer.discount}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-700 mb-4">{offer.description}</p>
            <p className="font-medium text-black mb-6">{offer.price}</p>
            <div className="flex gap-4">
              <a
                href={offer.link}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm"
              >
                Book now
              </a>
              <a
                href={offer.link}
                className="text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
              >
                See more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
