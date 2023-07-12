import React from 'react';

export default function PrivacyAndTerms() {

  return (
    <div className='w-[79%] fixed right-0 h-[815px] rounded-xl py-4 mt-3 bg-white px-6'>
        <div className='text-2xl font-semibold text-[#1B53F5] mb-8'>Privacy Policy</div>
      <div className='mb-8'>
        <p className='text-lg leading-relaxed mb-4'>
          Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you through our app.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          We only collect personal information that is relevant to the purpose of our app. This information allows us to provide you with a customized and efficient experience.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          We do not share any personal information with third parties except as required by law or to protect our app. We may use your personal information to send you promotional information about our app, but you may opt out of these communications at any time.
        </p>
      </div>
      <div className='text-2xl font-semibold text-[#1B53F5] mb-8'>Terms of Service</div>
      <div>
        <p className='text-lg leading-relaxed mb-4'>
          These terms and conditions govern your use of our app. By using our app, you accept these terms and conditions in full.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          You must not use our app in any way that causes, or may cause, damage to the app or impairment of its availability or accessibility.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          We reserve the right to modify or terminate the app or your access to it at any time. We are not liable for any damages arising from the modification or termination of the app.
        </p>
        <p className='text-lg leading-relaxed'>
          These terms and conditions are governed by and construed in accordance with the laws of [your state/country], and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [your state/country].
        </p>
      </div>
    </div>
  );
}