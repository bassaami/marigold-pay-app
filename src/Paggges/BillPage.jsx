import { use } from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";
import { AuthContext } from "../ProViderr/AuthenPro";


const BillPage = () => {
    const bills = useLoaderData();
    const { paidBillIds } = use(AuthContext); // Get the list of paid IDs

    console.log(paidBillIds);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Pending Bills</h1>

                {/* Responsive Single Column Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {bills.map((bill) =>  (
                        <div
                            key={bill.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Left Side: Icon & Info */}
                            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left w-full">
                                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                    <img
                                        src={bill.icon}
                                        alt={bill.organization}
                                        className="w-16 h-16 object-contain rounded-lg p-1 border border-gray-100"
                                    />
                                </div>

                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-tight">
                                        {bill.organization}
                                    </h2>
                                    <p className="text-sm text-gray-500 capitalize">{bill.bill_type} Bill</p>
                                    <p className="text-xs text-red-500 mt-1 font-medium">
                                        Due: {new Date(bill["due-date"]).toLocaleDateString('en-GB')}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Amount & Action */}
                            <div className="mt-6 sm:mt-0 flex flex-row sm:flex-col items-center sm:items-end w-full sm:w-auto justify-between border-t sm:border-t-0 pt-4 sm:pt-0">
                                <div className="text-2xl font-bold text-gray-900 mr-4 sm:mr-0">
                                    ৳{bill.amount}
                                </div>
                                {/* // Inside BillPage.jsx map function: */}
                                <Link   to={`/bill-details/${bill.id}`}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-200 shadow-sm active:scale-95"
                                >
                                    Pay
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {bills.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No pending bills found.</p>
                )}
            </div>
        </div>
    );
};

export default BillPage;