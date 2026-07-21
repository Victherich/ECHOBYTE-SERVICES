

// 'use client'

// import React from 'react'
// const Cerens = '/Cerens.jpeg'
// const Kingsley = '/Kingsley.jpeg'
// const Blessing = '/Blessing.jpg'

// // Testimonial type
// type Testimonial = {
//   name: string
//   email: string
//   country: string
//   message: string
//   image: string
// }

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
// ]

// const Testimonials: React.FC = () => {
//   return (
//     <div className="w-full px-4 py-20" style={{background:"#e4ecf3"}}>
//        <h2 className="text-gray-900 text-4xl font-bold text-center mb-16 tracking-tight">
//         What Our Clients Say:
//       </h2>

//       <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
//         {testimonials.map((client, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[300px] rounded-xl overflow-hidden flex items-end justify-center text-white bg-cover bg-top shadow-lg"
//             style={{ backgroundImage: `url(${client.image})` }}
//           >
//             <div className="relative z-10 w-[90%] bg-black/50 p-4 rounded-md text-center">
//              <p className="text-sm italic mb-2">&quot;{client.message}&quot;</p>

//               <h4 className="text-md font-semibold">{client.name}</h4>
//               <p className="text-xs opacity-80">{client.email}</p>
//               <p className="text-xs opacity-80">{client.country}</p>
//             </div>

//             {/* Optional overlay (for future use) */}
//             {/* <div className="absolute inset-0 bg-black/40"></div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Testimonials




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
    <section className="w-full text-gray-900 px-[10px] py-[70px]" style={{ background: "#e4ecf3" }}>
      <h2 className="text-gray-900 text-2xl sm:text-3xl font-extrabold text-center mb-[10px] tracking-tight">
        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
      </h2>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[10px]">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="relative w-full h-[280px] rounded-2xl overflow-hidden flex items-end justify-center text-white bg-cover bg-top shadow-xl border border-white/60 transition-transform duration-300 hover:scale-[1.01]"
            style={{ backgroundImage: `url(${client.image})` }}
          >
            {/* Gradient Overlay for Modern Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent"></div>

            <div className="relative z-10 w-full p-[10px] text-center flex flex-col justify-between">
              <p className="text-xs sm:text-sm italic font-medium mb-[10px] text-gray-100">&quot;{client.message}&quot;</p>

              <div>
                <h4 className="text-sm font-bold text-white">{client.name}</h4>
                <p className="text-[11px] text-blue-200 font-medium">{client.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials