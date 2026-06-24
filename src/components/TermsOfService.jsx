import React, { useEffect } from 'react';
import { FaArrowLeft, FaFileContract } from 'react-icons/fa';

const TermsOfService = ({ onBack }) => {
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
            <FaFileContract />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Terms of Service</h1>
            <p className="text-gray-500 text-sm mt-1">Last Updated: June 2026</p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-50/50 prose max-w-none text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing our website or booking services with Elite Stewarding Private Limited, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Service Provision & Bookings</h2>
            <p>
              Our cleaning and stewarding services are subject to scheduling availability and written quotation approval. We reserve the right to decline booking requests that do not align with our health and safety requirements or operating capacities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Client Responsibilities</h2>
            <p>To ensure high standards and safe operations, clients are required to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide safe access to the service site during scheduled times.</li>
              <li>Provide access to essential facilities such as electricity and water.</li>
              <li>Disclose any hazards, faulty equipment, or specific material limitations in the work area prior to commencement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Payments & Cancellation</h2>
            <p>
              Payment terms are as specified in your service contract or proposal. Late payments may incur interest charges. Cancellations or rescheduling requests must be submitted at least 24 to 48 hours prior to the scheduled service time to avoid a cancellation fee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website—including images, text, logos, designs, and graphics—is the intellectual property of Elite Stewarding Private Limited and is protected by applicable copyright and trademark laws. Unauthorized reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Elite Stewarding Private Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or execution of our services, even if we have been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Singapore, and you irrevocably submit to the exclusive jurisdiction of the courts in Singapore.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to revise these terms at any time without notice. By using this website or our services, you agree to be bound by the then-current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">9. Contact Us</h2>
            <p>
              If you have any questions or require clarification on these Terms, you can contact us at:
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

export default TermsOfService;
