import React from 'react';

const Policies: React.FC = () => {
  return (
    <section id="policies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* We use max-w-3xl to make the text easier to read */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Website Policies
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Last Updated: April 02, 2025
          </p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you agree to these Website Policies. 
                If you do not agree, please refrain from using the site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Modification of Policies</h3>
              <p>
                We reserve the right to update these policies at any time without prior notice. 
                Continued use of the website implies acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
              <p>
                All content on this website, including text, images, and service descriptions, 
                is the intellectual property of Patil and Company. Unauthorized use or 
                reproduction is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
              <p>
                Patil and Company shall not be liable for any indirect or consequential 
                damages arising from the use of this website or our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p>
                We respect your privacy and are committed to protecting any personal 
                information shared through inquiries on this site.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 ml-4">Information Collection</h4>
              <p className="ml-4">
                We may collect personal data such as names, email addresses, and phone 
                numbers provided voluntarily by users for communication purposes.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 ml-4">Use of Information</h4>
              <p className="ml-4">
                Collected data will only be used to respond to inquiries or provide 
                requested services and will not be shared with third parties without consent.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 ml-4">Data Protection</h4>
              <p className="ml-4">
                We implement reasonable security measures to safeguard your information 
                against unauthorized access or breaches.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 ml-4">Removal Requests</h4>
              <p className="ml-4">
                Users may contact us to request deletion of their personal data at any time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Use of Third-Party Logos</h3>
              <p>
                The logos displayed on this website are used solely to identify 
                companies we have worked with and showcase completed projects. 
                Their presence does not imply endorsement, sponsorship, or affiliation 
                by the respective trademark owners. All logos remain the intellectual 
                property of their respective owners, and if a trademark owner requests 
                removal, we will comply promptly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Governing Law</h3>
              <p>
                These Website Policies are governed by Indian law. Any disputes arising 
                from these terms shall be subject to Khalapur jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;