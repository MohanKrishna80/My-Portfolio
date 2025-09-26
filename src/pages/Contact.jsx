export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Contact
      </h2>

      <div className="max-w-md mx-auto space-y-6 text-center text-lg text-gray-800">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:mohankrishnamohankrishna28@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mohankrishnamohankrishna28@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold">Mobile:</span>{" "}
          <a href="tel:+919553391580" className="text-blue-600 hover:underline">
            +91 95533 91580
          </a>
        </p>

        <p>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>

        <p>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/MohanKrishna80"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github
          </a>
        </p>
      </div>
    </section>
  );
}
