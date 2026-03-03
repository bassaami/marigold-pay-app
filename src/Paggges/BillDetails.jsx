import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { useContext } from "react"; // Add this
import { AuthContext } from "../ProViderr/AuthenPro";
import { Link } from "react-router";
import { Navigate } from "react-router";

const paymentOptions = [
    { id: 1, title: 'Education', path: '/pay/education', color: 'bg-indigo-50 text-indigo-600', icon: <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 2, title: 'Electricity', path: '/pay/electricity', color: 'bg-yellow-50 text-yellow-600', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 3, title: 'Gas', path: '/pay/gas', color: 'bg-red-50 text-red-600', icon: <path d="M12 2c0 4.5-6 9-6 13a6 6 0 0012 0c0-4-6-8.5-6-13z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 4, title: 'Water', path: '/pay/water', color: 'bg-blue-50 text-blue-600', icon: <path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-4-3.5-4-3.5-2 1.9-4 3.5S5 13 5 15a7 7 0 007 7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 5, title: 'Internet', path: '/pay/internet', color: 'bg-cyan-50 text-cyan-600', icon: <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.59 16.11a6 6 0 016.82 0M12 20h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 6, title: 'Govt Fee', path: '/pay/govt', color: 'bg-emerald-50 text-emerald-600', icon: <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M12 3L2 10h20L12 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 7, title: 'Merchant Pay', path: '/pay/merchant', color: 'bg-pink-50 text-pink-600', icon: <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18m-11 4v4m4-4v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
    { id: 8, title: 'More', path: '/services', color: 'bg-gray-100 text-gray-600', icon: <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /> },
];

const BillDetails = () => {
    const { id } = useParams();
    const allBills = useLoaderData();
const { payBill, balance } = useContext(AuthContext); // Get the function from context

    // Find the specific bill based on the ID from the URL
    const bill = allBills.find((b) => b.id === parseInt(id));

    const [selectedMethod, setSelectedMethod] = useState(null);

    const handlePayment = () => {
        if (!selectedMethod) return;
        if (balance < bill.amount) return alert("Insufficient balance");

        // 1. Call the context function to update global balance
        payBill(bill.id, bill.amount);
        
        // 2. Alert the user
        alert(`Payment of ৳${bill.amount} successful via ${selectedMethod}!`);
        Navigate("/bills"); // Optional: redirect back to list
    };

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
                            className={`p-4 border-2 rounded-xl transition-all flex flex-col items-center gap-2 hover:border-amber-500 ${selectedMethod === method.id ? "border-amber-600 bg-amber-50 scale-105" : "border-gray-100"
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
                        {/* Bill Type Overlay Icon - Condition Added Below */}
                        <div className="absolute bottom-4 right-4 bg-amber-600 p-3 rounded-full text-white shadow-lg">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {
                                    // Find the option where the title matches the bill_type (case-insensitive)
                                    paymentOptions.find(
                                        (opt) => opt.title.toLowerCase() === bill.bill_type.toLowerCase()
                                    )?.icon || (
                                        // Fallback icon if no match is found (More icon)
                                        <path d="M12 5v.01M12 12v.01M12 19v.01" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    )
                                }
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

                        <Link   to="/bills"
                            className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-amber-700 active:scale-95 uppercase text-center "
                            onClick={handlePayment}
                        >
                            Confirm & Pay Bill
                        </Link>
                    </div>
                </div>
                {!selectedMethod && <p className="text-center mt-4 text-amber-700 animate-pulse font-medium">Please select a payment method above to proceed.</p>}
            </section>
        </div>
    );
};

export default BillDetails;