import React from "react";
import Image from "next/image";
import { FileText } from "lucide-react";
import Cancelation from "../../../../public/assets/cancelation.webp";
const CancellationPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto py-3 px-1">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative w-full md:w-1/3 h-[200px] md:h-auto">
            <Image
              src={Cancelation} // Replace with your actual image path
              alt="Cancellation Policy Document"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold font-cursive text-gray-800">
                Cancelation Policy
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Free cancelation before your tour within 10 hours before the
              pickup, in case if there is no show before 10 hours, there is no
              money will be refunded
            </p>

            {/* Additional Policy Details Box */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">
                Important Notes:
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0" />
                  Cancellations must be made at least 10 hours before pickup
                  time
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0" />
                  No refunds for no-shows or late cancellations
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0" />
                  Contact our support team for assistance with cancellations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
