
// components/InternshipAd.tsx
import type { NextPage } from 'next';
import Swal from 'sweetalert2'; // Importing SweetAlert2

const InternshipAd: NextPage = () => {
  const handleApplyNow = () => {
    Swal.fire({
      icon: 'info',
      title: 'Coming Soon!',
      text: 'Our internship program is coming soon!',
      confirmButtonText: 'Got It!',
      confirmButtonColor: '#facc15', // Matches your brand color
      background: '#111827', // Matches your background color
      color: '#ffffff', // Text color
    });
  };

  return (
    <section className="bg-[#111827] py-16 px-6 font-sans text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4">
          Apply For Our Paid Internship?
        </h2>
       <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
  We are offerring free training with paid internship for 3 months on:
  <div >
    🌐 Digital marketing, 
  <br/>🌐 Social media management
  <br/>🌐 Content creation
  <br/>🌐 Video Editing
  </div>
  
</p>
        <button
          onClick={handleApplyNow}
          className="bg-[#facc15] text-[#111827] font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#eab308] transition-colors duration-300 text-lg"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default InternshipAd;