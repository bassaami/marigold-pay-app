import React from 'react';
import { Link } from 'react-router';

// Import your PNG assets
import fbIcon from '../assets/fb.png';
import instaIcon from '../assets/instagram.png'
import twitterIcon from '../assets/twitter.png';

const FullFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', src: fbIcon, url: 'https://facebook.com' },
    { name: 'Instagram', src: instaIcon, url: 'https://instagram.com' },
    { name: 'Twitter', src: twitterIcon, url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 1. Brand & Socials */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-yellow-500 mb-4 block">
              Marigold Pay
            </Link>
            <p className="text-sm max-w-sm mb-6 leading-relaxed">
              Empowering your financial journey with modern tools, secure vaults, and 
              instant borderless payments. Grow your wealth with Marigold.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={social.src} alt={social.name} className="w-5 h-5 object-contain invert" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/accounts" className="hover:text-yellow-500 transition">Personal Accounts</Link></li>
              <li><Link to="/business" className="hover:text-yellow-500 transition">Business Pro</Link></li>
              <li><Link to="/savings" className="hover:text-yellow-500 transition">Savings Vaults</Link></li>
              <li><Link to="/crypto" className="hover:text-yellow-500 transition">Crypto Bridge</Link></li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-yellow-500 transition">Careers</Link></li>
              <li><Link to="/security" className="hover:text-yellow-500 transition">Security Center</Link></li>
              <li><Link to="/press" className="hover:text-yellow-500 transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/help" className="hover:text-yellow-500 transition">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact Support</Link></li>
              <li><Link to="/fees" className="hover:text-yellow-500 transition">Fee Schedule</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-slate-800 w-full mb-8"></div>

        {/* Legal & Compliance Section */}
        <div className="text-[11px] leading-loose text-slate-500 uppercase tracking-widest">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-slate-300">Cookie Settings</Link>
            <Link to="/disclosure" className="hover:text-slate-300">FDIC Disclosure</Link>
          </div>
          
          <p className="normal-case tracking-normal mb-4 max-w-4xl">
            Marigold Pay is a financial technology company, not a bank. Banking services are provided by 
            Partner Bank, N.A.; Member FDIC. The Marigold Pay Visa® Debit Card is issued by Partner Bank 
            pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
          </p>
          
          <p className="normal-case tracking-normal">
            © {currentYear} Marigold Pay Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FullFooter;