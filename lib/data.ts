import { ServiceCategory, Testimonial } from "@/lib/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "laser",
    name: "Laser Treatments",
    description: "Advanced laser treatments for various skin concerns",
    services: [
      {
        id: "laser-rejuvenation",
        name: "Laser Skin Rejuvenation",
        slug: "laser-skin-rejuvenation",
        description: "Advanced laser technology that stimulates collagen production and reduces signs of aging.",
        fullDescription: "Our laser skin rejuvenation treatment uses cutting-edge technology to target multiple layers of your skin, stimulating collagen production and cell renewal. This non-invasive procedure effectively reduces fine lines, wrinkles, and other signs of aging while improving overall skin texture and tone.",
        duration: "60 min",
        price: "$250",
        image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
        categoryId: "laser"
      },
      {
        id: "laser-hair-removal",
        name: "Laser Hair Removal",
        slug: "laser-hair-removal",
        description: "Permanent reduction of unwanted hair using advanced laser technology.",
        fullDescription: "Our laser hair removal treatment uses selective photothermolysis to target hair follicles without damaging surrounding skin. The treatment is effective for all skin types and provides long-lasting results with minimal discomfort.",
        duration: "30-60 min",
        price: "$150-$350",
        image: "https://images.pexels.com/photos/7446929/pexels-photo-7446929.jpeg",
        categoryId: "laser"
      },
      {
        id: "fractional-laser",
        name: "Fractional Laser Resurfacing",
        slug: "fractional-laser-resurfacing",
        description: "Precision treatment for scars, deep wrinkles, and skin texture concerns.",
        fullDescription: "Fractional laser resurfacing creates thousands of microscopic treatment zones in your skin, triggering the body's natural healing process to replace damaged skin with new, healthy tissue. This advanced treatment is highly effective for acne scars, deep wrinkles, and improving overall skin texture.",
        duration: "45-90 min",
        price: "$350",
        image: "https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg",
        categoryId: "laser"
      }
    ]
  },
  {
    id: "facials",
    name: "Premium Facials",
    description: "Luxury facial treatments for all skin types",
    services: [
      {
        id: "luxury-facial",
        name: "Luxury Facial",
        slug: "luxury-facial",
        description: "Comprehensive facial treatment that cleanses, exfoliates, and nourishes for glowing skin.",
        fullDescription: "Our signature luxury facial begins with a thorough skin analysis, followed by deep cleansing, gentle exfoliation, and steam treatment. A specialized mask and premium serums are applied based on your skin's needs, ending with a relaxing facial massage and hydration treatment.",
        duration: "75 min",
        price: "$195",
        image: "https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg",
        categoryId: "facials"
      },
      {
        id: "hydrafacial",
        name: "HydraFacial",
        slug: "hydrafacial",
        description: "Multi-step treatment that cleanses, exfoliates, and hydrates with specialized serums.",
        fullDescription: "The HydraFacial uses patented technology to cleanse, extract, and hydrate your skin. This multi-step treatment includes a gentle acid peel, painless extractions, and infusion of antioxidants and hyaluronic acid. The result is clear, more beautiful skin with no discomfort or downtime.",
        duration: "45 min",
        price: "$225",
        image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg",
        categoryId: "facials"
      },
      {
        id: "microdermabrasion",
        name: "Microdermabrasion",
        slug: "microdermabrasion",
        description: "Exfoliation technique that removes the outermost layer of dead skin cells.",
        fullDescription: "Our microdermabrasion treatment uses diamond-tip technology to gently exfoliate and remove the outermost layer of dry, dead skin cells. This stimulates circulation and encourages the production of new, healthy skin cells, resulting in a fresher, more youthful appearance.",
        duration: "45 min",
        price: "$150",
        image: "https://images.pexels.com/photos/3997967/pexels-photo-3997967.jpeg",
        categoryId: "facials"
      }
    ]
  },
  {
    id: "dark-spots",
    name: "Dark Spot & Pigmentation Treatments",
    description: "Specialized treatments for hyperpigmentation and uneven skin tone",
    services: [
      {
        id: "dark-spot-reduction",
        name: "Dark Spot Reduction",
        slug: "dark-spot-reduction",
        description: "Targeted treatments to fade hyperpigmentation and even skin tone for a radiant complexion.",
        fullDescription: "Our dark spot reduction treatment combines advanced peels, targeted serums, and light therapy to break down melanin clusters and fade hyperpigmentation. This comprehensive approach addresses sun damage, melasma, post-inflammatory hyperpigmentation, and age spots for a more even, radiant complexion.",
        duration: "45 min",
        price: "$180",
        image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
        categoryId: "dark-spots"
      },
      {
        id: "chemical-peel",
        name: "Chemical Peel Treatment",
        slug: "chemical-peel-treatment",
        description: "Exfoliating treatment that improves skin texture and reduces pigmentation.",
        fullDescription: "Our chemical peel treatments use specialized formulations of acids to remove damaged outer layers of skin, revealing the smoother, less wrinkled skin underneath. We offer various strengths tailored to your specific skin concerns, particularly effective for treating hyperpigmentation and uneven skin tone.",
        duration: "45 min",
        price: "$165",
        image: "https://images.pexels.com/photos/7446937/pexels-photo-7446937.jpeg",
        categoryId: "dark-spots"
      },
      {
        id: "ipl-treatment",
        name: "IPL Photofacial",
        slug: "ipl-photofacial",
        description: "Light-based treatment that targets pigmentation, sun damage, and redness.",
        fullDescription: "Intense Pulsed Light (IPL) therapy delivers high-intensity pulses of broad-spectrum light that target pigmentation and vascular lesions without damaging surrounding tissue. This non-invasive treatment effectively reduces sun spots, age spots, freckles, and redness for a more even complexion.",
        duration: "30 min",
        price: "$250",
        image: "https://images.pexels.com/photos/3998022/pexels-photo-3998022.jpeg",
        categoryId: "dark-spots"
      }
    ]
  },
  {
    id: "skin-care",
    name: "Advanced Skin Care",
    description: "Specialized treatments for specific skin concerns",
    services: [
      {
        id: "microneedling",
        name: "Microneedling with PRP",
        slug: "microneedling-with-prp",
        description: "Collagen induction therapy enhanced with platelet-rich plasma for skin rejuvenation.",
        fullDescription: "This advanced treatment combines microneedling with your body's own platelet-rich plasma (PRP) to dramatically enhance results. The microneedling creates controlled micro-injuries to stimulate collagen, while PRP derived from your blood contains growth factors that accelerate healing and tissue regeneration for remarkable improvement in skin texture, scars, and overall appearance.",
        duration: "90 min",
        price: "$450",
        image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg",
        categoryId: "skin-care"
      },
      {
        id: "led-therapy",
        name: "LED Light Therapy",
        slug: "led-light-therapy",
        description: "Non-invasive treatment using specific wavelengths of light to target various skin concerns.",
        fullDescription: "Our LED light therapy uses specific wavelengths of light to penetrate the skin at varying depths. Red light stimulates collagen production, blue light targets acne-causing bacteria, and near-infrared light reduces inflammation and promotes healing. This painless, non-invasive treatment is excellent for acne, aging skin, and overall skin health.",
        duration: "30 min",
        price: "$95",
        image: "https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg",
        categoryId: "skin-care"
      },
      {
        id: "oxygen-facial",
        name: "Oxygen Infusion Facial",
        slug: "oxygen-infusion-facial",
        description: "Rejuvenating treatment that delivers oxygen and nutrients deep into the skin.",
        fullDescription: "Our oxygen infusion facial uses pressurized oxygen to deliver specialized serums containing vitamins, minerals, and antioxidants deep into the skin. This treatment instantly hydrates, plumps fine lines, and gives your skin a youthful glow with no downtime. It's perfect before special events or as part of your regular skincare regimen.",
        duration: "60 min",
        price: "$175",
        image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg",
        categoryId: "skin-care"
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The laser treatment completely transformed my skin. The staff was professional and made me feel comfortable throughout the procedure.",
    author: "Emma Johnson",
    role: "Laser Treatment Client",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: "2",
    quote: "I've struggled with dark spots for years. After just three sessions, I saw a dramatic improvement. I'm finally confident in my skin again!",
    author: "Michael Chen",
    role: "Dark Spot Reduction Client",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: "3",
    quote: "The luxury facial was truly an indulgent experience. My skin has never looked better, and the relaxing atmosphere made it all the more enjoyable.",
    author: "Sophia Rodriguez",
    role: "Facial Treatment Client",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: "4",
    quote: "As someone with sensitive skin, I was nervous about trying a chemical peel. The team took extra care to ensure I was comfortable, and the results were amazing!",
    author: "James Wilson",
    role: "Chemical Peel Client",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4
  },
  {
    id: "5",
    quote: "The microneedling with PRP treatment has dramatically improved my acne scars. After years of feeling self-conscious, I finally feel confident in my skin.",
    author: "Aisha Patel",
    role: "Microneedling Client",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];