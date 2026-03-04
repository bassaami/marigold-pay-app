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

// 1. Check if this specific bill ID is in the paid array
const isPaid = paidBillIds.includes(bill.id);
// ----------------------------------------------------------------------------______________

    {bills.map(({ id, icon, organization, bill_type, amount, "due-date": dueDate }) => {
    // Check if this specific ID is in the paid list
    const isPaid = paidBillIds.includes(id);

    return (
        <div key={id} className={`...`}>
            {/* Left Side: Icon & Info */}
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img
                        src={icon} // Clean! No "bill." prefix
                        alt={organization} // Clean!
                        className="..."
                    />
                </div>

                <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">
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
            <div className="...">
                <div className="text-2xl font-bold">৳{amount}</div>
                {isPaid ? (
                    <button disabled className="...">✔ Paid</button>
                ) : (
                    <Link to={`/bill-details/${id}`} className="...">Pay</Link>
                )}
            </div>
        </div>
    );
})}