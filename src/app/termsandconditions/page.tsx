import { NextPage } from 'next';
import Head from 'next/head';
import TermsAndConditionsDigitalProducts from '../components/Termsandconditionsdigitalproducts';
import TermsAndConditionsServices from '../components/TermsAndConditionsServices';
import TermsAndConditionsInternshipEmployment from '../components/TermsAndConditionsInternshipEmployment';


const TermsAndConditions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | ECHOBYTE CONCEPT</title>
      </Head>
        <section className="bg-[#111827] text-white min-h-screen py-16 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#facc15] mb-8">
          Terms and Conditions
        </h1>
        <TermsAndConditionsServices/>
<TermsAndConditionsDigitalProducts/>
<TermsAndConditionsInternshipEmployment/>
      </section>
      

    
    </>
  );
};

export default TermsAndConditions;

