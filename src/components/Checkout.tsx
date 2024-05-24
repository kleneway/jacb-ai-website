import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('');

  const handleCheckout = () => {
    console.log({
      email,
      cardNumber,
      expiry,
      cvc,
      nameOnCard,
      country,
      zip,
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white">
      <div className="w-full">
        <div className="w-full h-11 bg-[#009cde] rounded-md shadow-lg flex items-center justify-center">
          <span className="text-lg font-bold text-white">Pay with PayPal</span>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-solid border-gray-300 w-1/3"></div>
          <span className="mx-4 text-lg text-gray-500">Or pay with card</span>
          <div className="border-t border-solid border-gray-300 w-1/3"></div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-bold text-gray-600">Email</label>
          <div className="mt-2">
            <input
              type="email"
              className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-bold text-gray-600">Card Details</label>
          <div className="mt-2 w-full h-10 px-3 border border-gray-300 rounded-t-md shadow-sm flex items-center justify-between">
            <input
              type="text"
              className="w-full h-10 px-3 border-none"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
            />
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div className="w-full h-10 px-3 border border-gray-300 rounded-b-md shadow-sm flex items-center justify-between mt-2">
            <input
              type="text"
              className="w-1/2 h-10 px-3 border-none"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM / YY"
            />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <input
              type="text"
              className="w-1/2 h-10 px-3 border-none"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="CVC"
            />
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-bold text-gray-600">Name on card</label>
          <div className="mt-2">
            <input
              type="text"
              className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-bold text-gray-600">Country or region</label>
          <div className="mt-2">
            <input
              type="text"
              className="w-full h-10 px-3 border border-gray-300 rounded-t-md shadow-sm"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="w-full h-10 px-3 border border-gray-300 rounded-b-md shadow-sm mt-2">
            <input
              type="text"
              className="w-full h-10 px-3 border-none"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="ZIP"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className="w-full h-12 bg-[#171e6c] rounded-md shadow-lg text-lg font-bold text-white"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;