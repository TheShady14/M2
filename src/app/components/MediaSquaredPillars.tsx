import React from "react";

const MediaSquaredPillars = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mall Locations */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <img
                  src="/icons/mall-locations.svg"
                  alt="Mall Locations"
                  className="w-24 h-24 object-contain filter hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mall Locations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access premium mall spaces across multiple locations with our
              comprehensive network. We provide malls with enhanced revenue
              streams and operational efficiencies through our streamlined
              booking platform, maximizing the potential of every available
              kiosk space.
            </p>
          </div>

          {/* Activations */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <img
                  src="/icons/activations.svg"
                  alt="Activations"
                  className="w-24 h-24 object-contain filter hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Activations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Launch dynamic marketing campaigns and brand activations with
              flexible terms and premium positioning. Our platform empowers
              businesses to boost brand visibility and customer engagement
              without the hefty price tag of traditional retail leases.
            </p>
          </div>

          {/* Stats */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <img
                  src="/icons/stats.svg"
                  alt="Stats"
                  className="w-24 h-24 object-contain filter hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Stats</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gain powerful insights with detailed analytics and performance
              metrics. Track campaign effectiveness, measure ROI, and make
              data-driven decisions to optimize your mall kiosk investments and
              prove marketing success.
            </p>
          </div>

          {/* Brand Mark */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                <img
                  src="/icons/brand-mark.svg"
                  alt="Brand Mark"
                  className="w-24 h-24 object-contain filter hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Brand Mark
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Establish powerful brand presence in high-traffic mall
              environments. Our platform helps agencies and businesses create
              memorable brand experiences through strategic placement and
              consistent messaging across multiple premium locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSquaredPillars;
