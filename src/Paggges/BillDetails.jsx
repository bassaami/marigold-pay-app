import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const { id } = useParams();
  const allBills = useLoaderData();
  
  // Find the specific bill based on the ID from the URL
  const bill = allBills.find((b) => b.id === parseInt(id));

  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 'bkash', name: 'bKash', logo: 'https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg' },
    { id: 'nagad', name: 'Nagad', logo: 'https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg' },
    { id: 'rocket', name: 'Rocket', logo: 'https://www.vhv.rs/dpng/d/540-5407001_dutch-bangla-bank-rocket-logo-png-transparent-png.png' },
    { id: 'visa', name: 'VISA', logo: 'https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg' },
    { id: 'mastercard', name: 'MasterCard', logo: 'https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg' },
    { id: 'citybank', name: 'City Bank', logo: 'https://seeklogo.com/images/T/the-city-bank-ltd-logo-66C6656708-seeklogo.com.png' },
  ];

  if (!bill) return <div className="p-10 text-center">Bill not found!</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
      {/* Row 1: Payment Methods */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Select Payment Method</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`p-4 border-2 rounded-xl transition-all flex flex-col items-center gap-2 hover:border-amber-500 ${
                selectedMethod === method.id ? "border-amber-600 bg-amber-50 scale-105" : "border-gray-100"
              }`}
            >
              <img src={method.logo} alt={method.name} className="h-10 w-full object-contain" />
              <span className="text-xs font-semibold">{method.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Row 2: Bill Info (Activated after selection) */}
      <section className={`transition-opacity duration-500 ${selectedMethod ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-600">
          
          {/* Left Column: Icons */}
          <div className="relative flex items-center justify-center bg-gray-50 rounded-2xl p-10">
            <img 
              src={bill.icon} 
              alt="Org Logo" 
              className="w-48 h-48 object-contain"
            />
            {/* Bill Type Overlay Icon */}
            <div className="absolute bottom-4 right-4 bg-amber-600 p-3 rounded-full text-white shadow-lg">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{bill.bill_type} Bill</span>
              <h1 className="text-4xl font-extrabold text-gray-900">{bill.organization}</h1>
            </div>
            
            <div className="space-y-2 border-y py-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Billing Amount:</span>
                <span className="text-2xl font-bold text-gray-800">৳{bill.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Due Date:</span>
                <span className="font-medium text-red-500">{new Date(bill["due-date"]).toDateString()}</span>
              </div>
            </div>

            <button 
              className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-amber-700 transition-transform active:scale-95 uppercase tracking-wider"
              onClick={() => alert(`Payment of ৳${bill.amount} successful via ${selectedMethod}!`)}
            >
              Confirm & Pay Bill
            </button>
          </div>
        </div>
        {!selectedMethod && <p className="text-center mt-4 text-amber-700 animate-pulse font-medium">Please select a payment method above to proceed.</p>}
      </section>
    </div>
  );
};

export default BillDetails;