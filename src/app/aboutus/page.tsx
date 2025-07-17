
import { NextPage } from 'next';
import Image from 'next/image';

const AboutUs: NextPage = () => {
  return (
    <section className="bg-[#111827] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/echobyte-bg-hero.jpg)' }}>
        <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-4">Welcome to Echobyte Concept 🚀</h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            We empower individuals, businesses, and organizations with innovative digital solutions and powerful tech products. 💡✨
          </p>
        </div>
      </div>

      {/* About Us Content */}
      <div className="px-6 md:px-12 py-16 max-w-5xl mx-auto space-y-10 text-gray-200">
        <h2 className="text-3xl font-bold text-[#facc15]">Who We Are 👋</h2>
        <p>
          <strong>Echobyte Concept</strong> is a creative digital agency with a passion for building cutting-edge solutions that transform ideas into real-world success. From sleek websites 🖥️ and intuitive mobile apps 📱 to curated digital products 🎓 and revenue-generating platforms 💰 — we do it all.
        </p>

        <Image
          src="/staff.jpg"
          alt="Devices Showcasing Echobyte's Work"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg mx-auto"
        />

        <h2 className="text-3xl font-bold text-[#facc15]">Our Mission 🎯</h2>
        <p>
          To provide accessible, affordable, and high-impact digital tools and services that help our clients stand out in today’s fast-evolving digital world.
        </p>

        <h2 className="text-3xl font-bold text-[#facc15]">What We Do 💼</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Web Development:</strong> We craft modern, responsive websites and web applications tailored to your brand.</li>
          <li><strong>Mobile App Development:</strong> Beautiful, user-friendly apps that solve real problems on the go.</li>
          <li><strong>Digital Products Store:</strong> A growing library of eBooks, templates, courses, and tools.</li>
          <li><strong>Affiliate Program:</strong> Make money by referring others. No investment, no hassle!</li>
          <li><strong>Portfolio Builder:</strong> Ditch your old CV and launch a sleek personal portfolio site instead.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#facc15]">Why Choose Us? 💡</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>🔧 Fast, reliable, and scalable solutions</li>
          <li>🎨 Visually appealing UI/UX</li>
          <li>🧠 Expert team with years of experience</li>
          <li>📈 Built with your growth in mind</li>
          <li>🤝 Affordable and client-focused approach</li>
        </ul>

        <Image
          src="/team.jpeg"
          alt="Team Collaboration"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg mx-auto"
        />

        <h2 className="text-3xl font-bold text-[#facc15]">Let's Build Something Amazing Together! 🛠️</h2>
        <p>
          Whether you're a startup founder, freelancer, small business owner, or simply someone with a vision, <strong>Echobyte Concept</strong> is here to support your journey into the digital frontier.
        </p>

        <p className="text-center mt-10">
          🌐 Visit our <a href="/services" className="text-[#facc15] underline">Services</a> page to get started.
        </p>

        <p className="text-center mt-6 font-semibold text-gray-400">
          💌 Contact us: <a href="mailto:echobyteconcept@gmail.com" className="underline text-[#facc15]">echobyteconcept@gmail.com</a> | 📞 +234 706 348 0314
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
