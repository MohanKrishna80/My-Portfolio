export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Contact
      </h2>

      <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-8 text-center space-y-6">
        <p className="text-lg text-gray-700">
          I'd love to connect! Feel free to reach out to me through any of the platforms below.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold text-gray-800">📧 Email:</span>{" "}
            <a
              href="mailto:mohankrishnamohankrishna28@gmail.com"
              className="text-blue-600 hover:underline"
            >
              mohankrishnamohankrishna28@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">📱 Mobile:</span>{" "}
            <a
              href="tel:+919553391580"
              className="text-blue-600 hover:underline"
            >
              +91 95533 91580
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">💼 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>

          <p>
            <span className="font-semibold text-gray-800">👨‍💻 GitHub:</span>{" "}
            <a
              href="https://github.com/MohanKrishna80"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/MohanKrishna80
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
