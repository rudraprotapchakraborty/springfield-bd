export interface ProjectGalleryImage {
  url: string;
  type: 'building' | 'location' | 'floor_plan';
}

export interface Project {
  title: string;
  slug: string;
  address: string;
  image: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  gallery: ProjectGalleryImage[];
}

export const projects: Project[] = [
  { 
    title: 'SPRING GRAZINIA', 
    slug: 'spring-grazinia',
    address: 'Plot # 189, Satarkul Road, Uttor Badda, Dhaka', 
    image: '/Spring Grazinia.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Grazinia.jpg', type: 'building' },
      { url: '/Spring Grazinia carousel 2.jpg', type: 'building' }
    ]
  },
  { 
    title: 'SPRING BEGONIA', 
    slug: 'spring-begonia',
    address: 'at Plot 29,29A Tipu Sultan Road, Wari, Dhaka', 
    image: '/Spring Begonia.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Begonia.jpg', type: 'building' },
      { url: '/Spring Begonia carousel 2.jpg', type: 'location' },
      { url: '/Spring Begonia carousel 3.jpg', type: 'floor_plan' },
      { url: '/Spring Begonia carousel 4.jpg', type: 'floor_plan' },
      { url: '/Spring Begonia carousel 5.jpg', type: 'floor_plan' }
    ]
  },
  { 
    title: 'SPRING EKATUNA', 
    slug: 'spring-ekatuna',
    address: 'At Mirpur-10, Dhaka', 
    image: '/Spring Ekatuna.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Ekatuna.jpg', type: 'building' },
      { url: '/Spring Ekatuna 2.jpg', type: 'floor_plan' },
      { url: '/Spring Ekatuna 3.jpg', type: 'floor_plan' },
      { url: '/Spring Ekatuna 4.jpg', type: 'floor_plan' }
    ]
  },
  { 
    title: 'SPRING CHOWDHURY DREAMS', 
    slug: 'spring-chowdhury-dreams',
    address: 'at Gulshan-1, Dhaka', 
    image: '/Spring Chowdhury Dreams.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Chowdhury Dreams.jpg', type: 'building' },
      { url: '/Spring Chowdhury Dreams 2.jpg', type: 'location' },
      { url: '/Spring Chowdhury Dreams 3.jpg', type: 'floor_plan' },
      { url: '/Spring Chowdhury Dreams 4.jpg', type: 'floor_plan' }
    ]
  },
  { 
    title: 'SPRING SHAMSUDDIN COMPLEX', 
    slug: 'spring-shamsuddin-complex',
    address: '1316/a Kazi Para (Main Road), Begum Rokeya Sarani, Dhaka', 
    image: '/Spring Shamsuddin Complex.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Shamsuddin Complex.jpg', type: 'building' },
      { url: '/Spring Shamsuddin Complex 2.jpg', type: 'building' },
      { url: '/Spring Shamsuddin Complex 3.jpg', type: 'building' },
    ]
  },
  { 
    title: 'SPRING RAHMAT MANZIL', 
    slug: 'spring-rahmat-manzil',
    address: '116, Bankers - Row, Behind PM Office, West Nakhalpara, Dhaka', 
    image: '/Spring Rahmat Manzil.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Rahmat Manzil.jpg', type: 'building' },
      { url: '/Spring Rahmat Manzil 2.jpg', type: 'building' },
      { url: '/Spring Rahmat Manzil 3.jpg', type: 'building' },
      { url: '/Spring Rahmat Manzil 4.jpg', type: 'building' },
      { url: '/Spring Rahmat Manzil 5.jpg', type: 'building' },
      { url: '/Spring Rahmat Manzil 6.jpg', type: 'building' },
    ]
  },
  { 
    title: 'SPRING MCB TOWER', 
    slug: 'spring-mcb-tower',
    address: '43, Bhojohori Saha Street, Wari, Dhaka', 
    image: '/Spring MCB Tower.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Mcb Tower.jpg', type: 'building' },
      { url: '/Spring Mcb Tower 2.jpg', type: 'floor_plan' },
      { url: '/Spring Mcb Tower 3.jpg', type: 'floor_plan' },
      
    ]
  },
  { 
    title: 'ZOHURA SPRING GARDEN', 
    slug: 'zohura-spring-garden',
    address: 'R # 5 & 7, Plot # 5/U, 4/B, 5/T, 4/C, 5/S, 4/D, Ahmed a', 
    image: '/Zohura Spring Garden.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Zohura Spring Garden.jpg', type: 'building' },
      { url: '/Zohura Spring Garden 2.jpg', type: 'building' },
      { url: '/Zohura Spring Garden 3.jpg', type: 'building' },
      { url: '/Zohura Spring Garden 4.jpg', type: 'building' }
    ]
  },
  { 
    title: 'SPRING MAHMUDA HAQUE', 
    slug: 'spring-mahmuda-haque',
    address: 'Khilgaon, Dhaka', 
    image: '/Spring Mahmuda Haque.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Mahmuda Haque.jpg', type: 'building' },
    ]
  },
  { 
    title: 'SPRING MEHER GARDEN', 
    slug: 'spring-meher-garden',
    address: 'H # 27/2, R # 11, Kallayanpur , Mirpur ,Dhaka', 
    image: '/Spring Meher Garden.jpg',
    status: 'ongoing',
    gallery: [
      { url: '/Spring Meher Garden.jpg', type: 'building' },
    ]
  },
  { 
    title: 'SPRING DAROGABARI', 
    slug: 'spring-darogabari',
    address: 'at Middle Badda, Dhaka', 
    image: '/Spring Darogabari.jpg',
    status: 'completed',
    gallery: [{ url: '/Spring Darogabari.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING ADELINA', 
    slug: 'spring-adelina',
    address: 'Baitul Aman Housing Society, Mohammadpur, Dhaka', 
    image: '/Spring Adelina.jpg',
    status: 'completed',
    gallery: [{ url: '/Spring Adelina.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING ZANIPOLO', 
    slug: 'spring-zanipolo',
    address: 'at Sector-4, Uttara, Dhaka', 
    image: '/Zanipolo.jpg',
    status: 'completed',
    gallery: [{ url: '/Zanipolo.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING RAHMAT-E-TUBA COMPLEX', 
    slug: 'spring-rahmat-e-tuba-complex',
    address: 'at Mirpur, Dhaka', 
    image: '/spring rahmat-e-tuba complex.jpg',
    status: 'completed',
    gallery: [{ url: '/spring rahmat-e-tuba complex.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING FLORENZA', 
    slug: 'spring-florenza',
    address: 'at Sector-10, Uttara, Dhaka', 
    image: '/Florenza.jpg',
    status: 'completed',
    gallery: [{ url: '/Florenza.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING RAJBARI', 
    slug: 'spring-rajbari',
    address: 'Section-11, Mirpur, Dhaka', 
    image: '/Rajbari.jpg',
    status: 'completed',
    gallery: [{ url: '/Rajbari.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING ROJALIA', 
    slug: 'spring-rojalia',
    address: 'at Mirpur DOHS, Dhaka', 
    image: '/Rojalia.jpg',
    status: 'completed',
    gallery: [{ url: '/Rojalia.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING QUEENS PARK', 
    slug: 'spring-queens-park',
    address: 'at Dhanmondi, Dhaka', 
    image: '/Queens Park.jpg',
    status: 'completed',
    gallery: [{ url: '/Queens Park.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING SPARK', 
    slug: 'spring-spark',
    address: 'at Block-J, Baridhara, Dhaka', 
    image: '/Spring Spark-1.jpg',
    status: 'completed',
    gallery: [{ url: '/Spring Spark-1.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING SHAMS', 
    slug: 'spring-shams',
    address: 'at Middle Badda, Dhaka', 
    image: '/Spring Shams.jpg',
    status: 'completed',
    gallery: [{ url: '/Spring Shams.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING HITASHI', 
    slug: 'spring-hitashi',
    address: 'at Middle Badda, Dhaka', 
    image: '/Spring Hitashi.jpg',
    status: 'completed',
    gallery: [{ url: '/Spring Hitashi.jpg', type: 'building' }]
  },
  { 
    title: 'SPRING DEW', 
    slug: 'spring-dew',
    address: 'Mohakhali DOHS, Dhaka.', 
    image: '/Dew-2.jpg',
    status: 'completed',
    gallery: [{ url: '/Dew-2.jpg', type: 'building' }]
  }
];
