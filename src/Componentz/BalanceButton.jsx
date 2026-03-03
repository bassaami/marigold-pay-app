import {    use,    useEffect,    useState,     } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../ProViderr/AuthenPro';

const BalanceButton = () => {

    // 1. Get balance from Context instead of local state
    const { usser, balance } = use(AuthContext); 
    const [displayValue, setDisplayValue] = useState('Check Balance');
    const [isShowing, setIsShowing] = useState(false);
    const navigate = useNavigate();

    // 2. Keep displayValue in sync if balance changes while it's showing
    useEffect(() => {
        if (isShowing) {
            setDisplayValue(`৳${balance.toLocaleString()}`);
        }
    }, [balance, isShowing]);

    const handleClick = () => {
        if (!usser) {
            navigate('/authen/login');
            return;
        }

        if (!isShowing) {
            setIsShowing(true);
            // Update display to show current balance
            setDisplayValue(`$${balance.toLocaleString()}`);

            // Revert after 5 seconds
            setTimeout(() => {
                setIsShowing(false);
                setDisplayValue('Check Balance');
            }, 5000);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handleClick}
                className={`
          transition-all duration-300 ease-in-out font-medium rounded-lg
          /* Responsive sizing */
          px-3 py-1.5 text-xs     /* Phone */
          md:px-5 md:py-2 md:text-sm /* Tablet/PC */
          /* Visual Style */
          ${isShowing
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'}
        `}
            >
                {displayValue}
            </button>

            {/* Optional: Secret "Spend" button just to test your logic */}
            
        </div>
    );
};

export default BalanceButton;