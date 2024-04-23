import React from 'react';

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Terms and Conditions</h1>
        <hr className="mb-6" />

        <div className="text-gray-700 space-y-4">
          <div>
            <h2 className="font-bold text-lg">Account Registration:</h2>
            <p>Users must create an account with the rental service, providing accurate and up-to-date information. This includes personal details, contact information, and possibly a form of identification. The user is responsible for maintaining the confidentiality of their account credentials.</p>
          </div>

          <div>
            <h2 className="font-bold text-lg">User Responsibility:</h2>
            <p>Users must comply with all relevant government laws and regulations related to vehicle operation and rental. This includes possessing a valid driver's license, adhering to traffic laws, and any other legal requirements.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Cancellation Policy (Penalties for Late Cancellation):</h2>
            <p>Users must adhere to the stated cancellation policy.
Late cancellations may result in penalties or fees, which are outlined in the terms.
The rental service may retain a portion of the payment if a booking is canceled without sufficient notice.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Insurance Coverage:</h2>
            <p>The rental service may offer insurance coverage for the rented vehicle.
Users are encouraged to review and understand the coverage details, including any deductibles or limitations.
Additional insurance options may be available for purchase.</p>
          </div>

          <div>
            <h2 className="font-bold text-lg">Safety Guides (Behavior):</h2>
            <p>Users are expected to operate the rented vehicle safely and responsibly.This includes following traffic laws, wearing seat belts, and not driving under the influence of drugs or alcohol.Any reckless or irresponsible behavior may result in penalties or termination of the rental agreement.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Booking Payments (We Will Ask Money):</h2>
            <p>Users agree to pay the specified rental fees, which may include a deposit or full payment at the time of booking.Payment methods, due dates, and refund policies are outlined clearly.Failure to make timely payments may result in the cancellation of the booking.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Data Privacy:</h2>
            <p>The rental service collects and stores user data for the purpose of the rental transaction.
User data is handled in accordance with privacy laws and the rental service's privacy policy.
Users' personal information is kept confidential and is not shared with third parties without consent, except as required by law.</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">9. Property Rights (Seeing That It Is the Original Owner's Car):
</h2>
            <p>TUsers acknowledge that the rented vehicle is the property of the rental service.
Users agree not to modify or alter the vehicle in any way without permission.
Any damage to the vehicle beyond normal wear and tear may result in repair costs charged to the user.</p>
          </div>

          

          <div>
            <h2 className="font-bold text-lg">10. Modification of Terms:</h2>
            <p>The rental service reserves the right to modify the terms and conditions at any time. Users will be notified of any changes, and continued use of the service implies acceptance of the updated terms. Users may have the option to terminate the agreement if they do not agree to the modified terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
