import { use, useState } from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";
import { AuthContext } from "../ProViderr/AuthenPro";

const BillPage = () => {
    const bills = useLoaderData();
    const { paidBillIds } = use(AuthContext); 
    // 1. Add state for the filter
    const [filter, setFilter] = useState("All")
    // 2. Derive unique bill types for the dropdown (optional but recommended)
    const billTypes = ["All", ...new Set(bills.map(bill => bill.bill_type))];
    // 3. Filter the bills based on selection
    const filteredBills = filter === "All" 
        ? bills 
        : bills.filter(bill => bill.bill_type === filter);

    let btnn = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-200 shadow-sm active:scale-95";

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Pending Bills</h1>
{/* 4. Filter Dropdown UI */}
                <div className="flex justify-end mb-6">
                    <div className="flex items-center gap-2">
                        <label htmlFor="billFilter" className="text-sm font-medium text-gray-600">Filter by Type:</label>
                        <select 
                            id="billFilter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm outline-none"
                        >
                            {billTypes.map(type => (
                                <option key={type} value={type} className="capitalize">
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {/* 5. Map over filteredBills instead of bills */}
                    {filteredBills.map(({ id, icon, organization, bill_type, amount, "due-date": dueDate }) => {
                        const isPaid = paidBillIds.includes(id);

                        return (
                            <div
                                key={id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Left Side: Icon & Info */}
                                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left w-full">
                                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                        <img
                                            src={icon}
                                            alt={organization}
                                            className="w-16 h-16 object-contain rounded-lg p-1 border border-gray-100"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-tight">
                                            {organization}
                                        </h2>
                                        <p className="text-sm text-gray-500 capitalize">{bill_type} Bill</p>

                                        {isPaid ? (
                                            <span className="text-green-600 font-bold">Transaction Complete</span>
                                        ) : (
                                            <p className="text-red-500 font-medium">
                                                Due: {new Date(dueDate).toLocaleDateString('en-GB')}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Amount & Action */}
                                <div className="mt-6 sm:mt-0 flex flex-row sm:flex-col items-center sm:items-end w-full sm:w-auto justify-between border-t sm:border-t-0 pt-4 sm:pt-0">
                                    <div className="text-2xl font-bold text-gray-900 mr-4 sm:mr-0">
                                        ৳{amount}
                                    </div>
                                    {isPaid ? (
                                        <button disabled className="bg-gray-400 text-white font-semibold py-2 px-8 rounded-lg cursor-not-allowed">
                                            ✔ Paid
                                        </button>
                                    ) : (
                                        <Link to={`/bill-details/${id}`} className={btnn}>
                                            Pay
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {bills.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No pending bills found.</p>
                )}
            </div>
        </div>
    );
};

export default BillPage;