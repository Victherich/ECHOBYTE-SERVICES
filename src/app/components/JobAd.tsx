
// components/JobAd.tsx
import type { NextPage } from 'next';
import Swal from 'sweetalert2'; 

const JobAd: NextPage = () => {
  const handleApplyNow = () => {
    // Updated SweetAlert message to reflect a job opportunity instead of an internship
    Swal.fire({
      icon: 'info',
      title: 'Coming Soon!',
      text: 'Our job opportunities are coming soon!', 
      confirmButtonText: 'Got It!',
      confirmButtonColor: '#facc15', // Matches your brand color
      background: '#111827', // Matches your background color
      color: '#ffffff', // Text color
    });
  };

  return (
    // Component name and content updated to reflect "Job" instead of "Internship"
    <section className="bg-[#111827] py-16 px-6 font-sans text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Updated heading to mention "Job" */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4">
          Apply For our Jobs?
        </h2>
        {/* Updated paragraph text to reference a job without specifying a role, 
            while retaining the expertise areas. */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Apply for our Social Media manager, content creator and digital marketer job, 
     
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

export default JobAd;