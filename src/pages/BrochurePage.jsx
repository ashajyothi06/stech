import React, { useState, useEffect } from "react";

const BrochurePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [message, setMessage] = useState("");

  // Clean up object URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMessage("");

    if (!file) {
      setSelectedFile(null);
      setPreviewUrl("");
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("Please upload a PDF file only.");
      setSelectedFile(null);
      setPreviewUrl("");
      return;
    }

    // Create a local URL for this file (no upload to server)
    const url = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(url);
    setMessage("Brochure loaded locally. This is not saved on server.");
  };

  return (
    <div className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Brochure Preview
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Choose a brochure PDF from your system and preview it here.
            {/* You can add a small note */}
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.08)] p-5 sm:p-7 mb-10 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Select Brochure PDF
          </h2>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-4 md:space-y-0">
            {/* File input (styled) */}
            <label className="flex-1">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-[#c0372f] transition">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {selectedFile ? selectedFile.name : "Choose brochure PDF"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted format: .pdf (preview only, not uploaded)
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                  Browse
                </span>
              </div>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* Clear button (optional) */}
            {previewUrl && (
              <button
                onClick={() => {
                  if (previewUrl) URL.revokeObjectURL(previewUrl);
                  setPreviewUrl("");
                  setSelectedFile(null);
                  setMessage("");
                }}
                className="w-full md:w-auto inline-flex justify-center items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition"
              >
                Clear
              </button>
            )}
          </div>

          {message && (
            <p className="mt-3 text-sm text-gray-700">
              {message}
            </p>
          )}
        </div>

        {/* Preview Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Brochure Preview
          </h2>

          {previewUrl ? (
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-gray-100 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600">
                  This brochure is loaded from your local system (not stored on server).
                </p>
              </div>

              <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="Brochure Preview"
                  src={previewUrl}
                  className="w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center text-gray-500 text-sm">
              No brochure selected yet. Choose a PDF file to preview it here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
