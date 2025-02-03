import React, { useState } from 'react';
import costplusdrugs from "../data/costplusdrugs.json";
import states from "../data/states.json";
import doses from "../data/doses.json";

function Home() {
  const [location, setLocation] = useState('');
  const [medication, setMedication] = useState(null); // Store full medication object
  const [dose, setDose] = useState('');
  const [type, setType] = useState('');
  const [showPricing, setShowPricing] = useState(false); // Hide pricing initially

  // Handle medication selection
  const handleMedicationChange = (e) => {
    const selectedMedName = e.target.value;
    const selectedMed = costplusdrugs.find((med) => med.name === selectedMedName);
    setMedication(selectedMed || null);
  };

  // Check if all selections are made before allowing comparison
  const isCompareEnabled = location && medication && dose && type;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Medication</h1>
        <p className="text-xl text-gray-600">Compare prices and save on your prescriptions</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Location Dropdown */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Location</option>
            {states.map((st) => (
              <option key={st.name} value={st.name}>
                {st.code}
              </option>
            ))}
          </select>

          {/* Medication Dropdown */}
          <select
            value={medication ? medication.name : ""}
            onChange={handleMedicationChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Medication</option>
            {costplusdrugs.map((med) => (
              <option key={med.name} value={med.name}>
                {med.name}
              </option>
            ))}
          </select>

          {/* Dose Dropdown */}
          <select
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Dose</option>
            {doses.map((d) => (
              <option key={d.dose} value={d.dose}>
                {d.dose}
              </option>
            ))}
          </select>

          {/* Type Dropdown */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            {costplusdrugs.map((cpd) => (
              <option key={cpd.type} value={cpd.type}>
                {cpd.type}
              </option>
            ))}
          </select>
        </div>

        {/* Compare Button */}
        <button
          onClick={() => setShowPricing(true)}
          disabled={!isCompareEnabled} // Disable button if all fields aren't selected
          className={`w-full py-3 px-4 text-white font-semibold rounded-md shadow-md ${
            isCompareEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Compare Prices
        </button>

        {/* Pricing Cards (Shown only when compare button is clicked) */}
        {showPricing && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Out of Pocket</h3>
              <p className="text-3xl font-bold text-blue-600">
                {medication ? `${medication.mrp}` : "--"}
              </p>
              <p className="text-gray-600">No insurance required</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">With Insurance</h3>
              <p className="text-3xl font-bold text-green-600">
                {medication ? `${medication.marioprice}` : "--"}
              </p>
              <p className="text-gray-600">Copay</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
