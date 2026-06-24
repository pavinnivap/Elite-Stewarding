import React, { useEffect } from 'react';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-secondary font-semibold mb-8 group transition-colors cursor-pointer"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Page Header */}
        <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-2xl">
            <FaShieldAlt />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Privacy Policy</h1>
            <p className="text-gray-500 text-sm mt-1">Last Updated: June 2026</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-50/50 prose max-w-none text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
            <p>
              Welcome to Elite Stewarding Private Limited ("we," "our," "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our kitchen cleaning and stewarding services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Information We Collect</h2>
            <p>We may collect personal identification information from you in a variety of ways, including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Contact Information:</strong> Name, business name, email address, phone number, and physical service location.</li>
              <li><strong>Usage Data:</strong> Technical details such as your IP address, browser type, and interaction behavior with our website.</li>
              <li><strong>Service Inquiry Details:</strong> Specific preferences and requirements you input through our contact form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To provide, operate, and maintain our premium cleaning services.</li>
              <li>To improve, personalize, and expand our website and customer service quality.</li>
              <li>To respond to your inquiries, send quotes, and coordinate service schedules.</li>
              <li>To comply with regulatory obligations and prevent fraudulent actions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Information Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to third parties. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no transmission over the internet or storage method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Cookies</h2>
            <p>
              Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Your Rights</h2>
            <p>
              Depending on your location, you may have rights under local privacy regulations (such as Singapore's PDPA) to access, update, correct, or request deletion of your personal data. To exercise these rights, please contact us at the email listed below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mt-4 border border-gray-100">
              <p className="font-bold text-primary">Elite Stewarding Private Limited</p>
              <p>Email: <a href="mailto:elitestewarding.services@gmail.com" className="text-secondary hover:underline">elitestewarding.services@gmail.com</a></p>
              <p>Address: 513B Yishun Street 51, #12-371, Saraca Breeze @ Yishun, Singapore 762513</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
