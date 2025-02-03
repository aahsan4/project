import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Mario</h1>
          <p className="text-xl text-gray-600">Making healthcare more accessible and affordable</p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p className="mb-6">
            Mario is dedicated to helping people find the most affordable options for their medications.
            We believe that everyone deserves access to the medications they need at prices they can afford.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to bring transparency to medication pricing and help patients make informed
            decisions about their healthcare spending.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Search for your medication</li>
            <li>Compare prices across different pharmacies</li>
            <li>See both insurance and out-of-pocket costs</li>
            <li>Find the best deal for your needs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you. Contact our support team at
            support@maio.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default About