export default function Experience() {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-gray-100 min-h-screen font-sans">
      <h2 className="text-6xl font-extrabold text-left mb-8 text-gray-800">Experience</h2>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {/* Example Experience 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0 w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-400">
            {/* Company Logo or Initials */}
            AC
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Acme Corp</h3>
            <span className="block text-sm text-gray-500 mb-2">Frontend Developer • Jan 2022 - Present</span>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Developed and maintained scalable React applications for client projects.</li>
              <li>Collaborated with UI/UX designers to implement modern interfaces.</li>
              <li>Improved performance and reduced loading times of key pages by 30%.</li>
            </ul>
          </div>
        </div>
        {/* Example Experience 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0 w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-400">
            {/* Company Logo or Initials */}
            BD
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">BetaDev Studio</h3>
            <span className="block text-sm text-gray-500 mb-2">Full Stack Engineer • Jun 2020 - Dec 2021</span>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Designed RESTful APIs and integrated backend services with frontend apps.</li>
              <li>Implemented authentication, authorization, and file upload systems.</li>
              <li>Optimized database queries, improving response times for high-traffic endpoints.</li>
            </ul>
          </div>
        </div>
        {/* Example Experience 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0 w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-400">
            {/* Company Logo or Initials */}
            UN
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">University Labs</h3>
            <span className="block text-sm text-gray-500 mb-2">Research Intern • Sep 2019 - May 2020</span>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Built data visualization dashboards with D3.js and React.</li>
              <li>Worked on proof-of-concept AI pipelines and presented findings.</li>
              <li>Co-authored a paper published in a peer-reviewed journal.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
