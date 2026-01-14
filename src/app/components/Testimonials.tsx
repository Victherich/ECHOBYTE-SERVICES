// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// const Cerens = '/Cerens.jpeg';
// const Kingsley = '/Kingsley.jpeg';
// const Blessing = '/Blessing.jpg';

// // Define the shape of a testimonial
// type Testimonial = {
//   name: string;
//   email: string;
//   country: string;
//   message: string;
//   image: string;
// };

// // Static testimonials array
// const testimonials: Testimonial[] = [
//   {
//     name: 'Cerens Anong',
//     email: 'Anongcerens4@gmail.com',
//     country: 'UAE',
//     message: 'Their services has inspired and enlightened my life! Highly recommended!',
//     image: Cerens,
//   },
//   {
//     name: 'Kingsley Gbedzeker',
//     email: 'Kgbedzeker1@gmail.com',
//     country: 'Ghana',
//     message: 'Amazing experience! Best courses and teachings.',
//     image: Kingsley,
//   },
//   {
//     name: 'Blessing Okereke',
//     email: 'bblife4kc@yahoo.com',
//     country: 'Netherlands',
//     message: 'Absolutely the best service, keep it up guys.',
//     image: Blessing,
//   },
// ];

// // Styled components
// const ContainerWrap = styled.div`
//   width: 100%;
//   margin-top: 50px;
// `;

// const TestimonialsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
//   padding: 20px;
// `;

// const TestimonialCard = styled.div<{ $bgImage: string }>`
//   position: relative;
//   width: 100%;
//   height: 300px;
//   border-radius: 15px;
//   overflow: hidden;
//   color: white;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   text-align: center;
//   padding: 20px;
//   background: url(${(props) => props.$bgImage}) center/cover no-repeat;
//   background-position: top;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     // background: rgba(0, 0, 0, 0.4);
//   }
// `;

// const TestimonialContent = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 90%;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 8px;
//   border-radius: 8px;
// `;

// const Name = styled.h4`
//   margin-top: 8px;
// `;

// const Email = styled.p`
//   font-size: 0.75rem;
//   opacity: 0.8;
// `;

// const Message = styled.p`
//   font-size: 0.85rem;
//   font-style: italic;
//   margin-bottom: 10px;
// `;

// const Heading = styled.h1`
//   text-align: center;
//   color: white;
//   font-weight: 700;
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// // Component
// const Testimonials: React.FC = () => {
//   return (
//     <ContainerWrap>
//       <Heading>What Our Real Clients Say:</Heading>
//       <TestimonialsContainer>
//         {testimonials.map((client, index) => (
//           <TestimonialCard key={index} $bgImage={client.image}>
//             <TestimonialContent>
//               <Message>&quot;{client.message}&quot;</Message>
//               <Name>{client.name}</Name>
//               <Email>{client.email}</Email>
//               <Email>{client.country}</Email>
//             </TestimonialContent>
//           </TestimonialCard>
//         ))}
//       </TestimonialsContainer>
//     </ContainerWrap>
//   );
// };

// export default Testimonials;


'use client'

import React from 'react'
const Cerens = '/Cerens.jpeg'
const Kingsley = '/Kingsley.jpeg'
const Blessing = '/Blessing.jpg'

// Testimonial type
type Testimonial = {
  name: string
  email: string
  country: string
  message: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Cerens Anong',
    email: 'Anongcerens4@gmail.com',
    country: 'UAE',
    message: 'Their services has inspired and enlightened my life! Highly recommended!',
    image: Cerens,
  },
  {
    name: 'Kingsley Gbedzeker',
    email: 'Kgbedzeker1@gmail.com',
    country: 'Ghana',
    message: 'Amazing experience! Best courses and teachings.',
    image: Kingsley,
  },
  {
    name: 'Blessing Okereke',
    email: 'bblife4kc@yahoo.com',
    country: 'Netherlands',
    message: 'Absolutely the best service, keep it up guys.',
    image: Blessing,
  },
]

const Testimonials: React.FC = () => {
  return (
    <div className="w-full mt-12 px-4 py-8">
      <h1 className="text-center text-white font-bold text-4xl mb-8">
        What Our Clients Say:
      </h1>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] rounded-xl overflow-hidden flex items-end justify-center text-white bg-cover bg-top shadow-lg"
            style={{ backgroundImage: `url(${client.image})` }}
          >
            <div className="relative z-10 w-[90%] bg-black/50 p-4 rounded-md text-center">
             <p className="text-sm italic mb-2">&quot;{client.message}&quot;</p>

              <h4 className="text-md font-semibold">{client.name}</h4>
              <p className="text-xs opacity-80">{client.email}</p>
              <p className="text-xs opacity-80">{client.country}</p>
            </div>

            {/* Optional overlay (for future use) */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

