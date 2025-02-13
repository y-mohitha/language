import React, { useState } from 'react';
import { Upload, Languages, FileText, BookOpen, Stethoscope, Scale, Building2 } from 'lucide-react';

// Supported languages
const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'kn', name: 'Kannada' },
  { code: 'bn', name: 'Bengali' }
];

// Domain options
const domains = [
  { id: 'academic', name: 'Academic', icon: BookOpen },
  { id: 'medical', name: 'Healthcare', icon: Stethoscope },
  { id: 'legal', name: 'Legal', icon: Scale },
  { id: 'government', name: 'Government', icon: Building2 }
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [selectedDomain, setSelectedDomain] = useState('academic');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleTranslate = () => {
    // Placeholder for translation logic
    setTranslatedText(`Translated text will appear here (${selectedLanguage})`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Languages className="w-10 h-10 text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">
              English to Indian Language Translator
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accurate translations with cultural nuances for multiple Indian languages
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Language Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Target Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Domain Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Domain
              </label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {domains.map((domain) => (
                  <option key={domain.id} value={domain.id}>
                    {domain.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Document (Optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept=".txt,.doc,.docx,.pdf"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX or TXT up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Text Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or Enter Text
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter English text to translate..."
            />
          </div>

          {/* Translate Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleTranslate}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Translate
            </button>
          </div>

          {/* Translation Output */}
          {translatedText && (
            <div className="border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Translation</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-800">{translatedText}</p>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-white p-6 rounded-lg shadow-sm">
              <domain.icon className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{domain.name}</h3>
              <p className="text-gray-600 text-sm">
                Specialized translations for {domain.name.toLowerCase()} content with field-specific terminology.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;