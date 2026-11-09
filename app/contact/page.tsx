export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out to me for collaborations, inquiries, or just to connect!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <ul className="space-y-3 text-gray-800">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@henriquegregorio.dev" className="text-blue-600 hover:underline">
              contact@henriquegregorio.dev
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/henriquegregorio
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/hgregori"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/hgregori
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

