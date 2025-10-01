export default function Projects() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">ShowFlix</h3>
          <p className="mb-4">
            A responsive movie streaming app built with React and Tailwind.
            Users can browse trending titles, search movies, and view detailed
            info with a Netflix-like UI.
          </p>
          <a
            href="https://show-flix-black.vercel.app/"
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">My-Business</h3>
          <p className="mb-4">
            Real-time business dashboard built with React and Tailwind for
            managing and displaying business data.
          </p>
          <a
            href="https://my-business-app-sandy.vercel.app/"
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">E-commerce Site</h3>
          <p className="mb-4">
            A responsive online store built with React and Tailwind, featuring
            product listings and a modern UI.
          </p>
          <a
            href="https://smart-bazaar-inky.vercel.app/"
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
