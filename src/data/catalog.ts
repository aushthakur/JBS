export interface Product {
  id: string;
  designation: string;
  outsideDiameter?: number;
  boreDiameter?: number;
  width?: number;
  dynamicLoadRating?: number; // kN
  staticLoadRating?: number; // kN
  limitingSpeed?: number; // r/min
  referenceSpeed?: number; // r/min
  weight?: number; // kg
  brand: string;
  type: string;
  shortDescription?: string;
  applications?: string[];
  features?: string[];
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl?: string;
  editorialText?: string;
  children?: Category[];
  products?: Product[];
}

export const catalogData: Category = {
  id: 'catalog',
  name: 'Catalog',
  slug: 'products',
  description: 'Comprehensive industrial bearing, sealing, and power transmission catalog',
  children: [
    {
      id: 'bearings',
      name: 'Bearings',
      slug: 'bearings',
      description: 'Bearings engineered for every application. High-precision rotation with minimal friction.',
      imageUrl: '/images/products/spherical-roller-4k.jpg',
      editorialText: 'Bearings have enabled the growth of industries, revolutionized transport, and enhanced overall quality of human life. Since the start in 1974, our focus has remained the same: creating an everyday life with less friction. To do this, we have developed bearings suitable for a wide variety of applications and conditions.',
      children: [
        {
          id: 'rolling-bearings',
          name: 'Rolling Bearings',
          slug: 'rolling-bearings',
          description: 'Support and guide rotating or oscillating machine elements with high precision and low friction.',
          imageUrl: '/images/products/spherical-roller-4k.jpg',
          editorialText: 'Rolling bearings support and guide rotating or oscillating machine elements – such as shafts, axles or wheels – and transfer loads between machine components. They provide high precision and low friction, enabling high rotational speeds while reducing noise, heat, energy consumption and wear.',
          children: [
            {
              id: 'ball-bearings',
              name: 'Ball Bearings',
              slug: 'ball-bearings',
              description: 'Versatile low friction, high-speed capabilities across radial and axial configurations.',
              imageUrl: '/images/products/ball-bearing-4k.jpg',
              children: [
                {
                  id: 'deep-groove-ball-bearings',
                  name: 'Deep Groove Ball Bearings',
                  slug: 'deep-groove-ball-bearings',
                  description: 'The most widely used bearing type, exceptionally versatile and capable of high speeds.',
                  imageUrl: '/images/products/spherical-roller-4k.jpg',
                  products: [
                    { id: '6004-2RSH', designation: '6004-2RSH', outsideDiameter: 42, boreDiameter: 20, width: 12, dynamicLoadRating: 9.95, staticLoadRating: 5.0, limitingSpeed: 11000, weight: 0.069, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Single row deep groove ball bearing with contact seals on both sides.' },
                    { id: '6204', designation: '6204', outsideDiameter: 47, boreDiameter: 20, width: 14, dynamicLoadRating: 13.5, staticLoadRating: 6.55, limitingSpeed: 20000, weight: 0.11, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Open single row deep groove ball bearing for high speed industrial shafts.' },
                    { id: '6204-2RSH', designation: '6204-2RSH', outsideDiameter: 47, boreDiameter: 20, width: 14, dynamicLoadRating: 13.5, staticLoadRating: 6.55, limitingSpeed: 11000, weight: 0.11, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Sealed deep groove ball bearing with NBR contact seals.' },
                    { id: '6205', designation: '6205', outsideDiameter: 52, boreDiameter: 25, width: 15, dynamicLoadRating: 14.8, staticLoadRating: 7.8, limitingSpeed: 18000, weight: 0.13, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Standard deep groove ball bearing for electric motors and pumps.' },
                    { id: '6205-2RS1', designation: '6205-2RS1', outsideDiameter: 52, boreDiameter: 25, width: 15, dynamicLoadRating: 14.8, staticLoadRating: 7.8, limitingSpeed: 9500, weight: 0.13, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Dual rubber contact seals with premium factory grease fill.' },
                    { id: '6305', designation: '6305', outsideDiameter: 62, boreDiameter: 25, width: 17, dynamicLoadRating: 23.4, staticLoadRating: 11.6, limitingSpeed: 15000, weight: 0.23, brand: 'FAG', type: 'Deep Groove Ball', shortDescription: 'Heavy-duty deep groove ball bearing with high radial load capacity.' },
                    { id: '6308-2Z', designation: '6308-2Z', outsideDiameter: 90, boreDiameter: 40, width: 23, dynamicLoadRating: 42.3, staticLoadRating: 24.0, limitingSpeed: 8000, weight: 0.63, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Shielded deep groove ball bearing with pressed steel cage.' },
                    { id: '6310-2RS', designation: '6310-2RS', outsideDiameter: 110, boreDiameter: 50, width: 27, dynamicLoadRating: 65.0, staticLoadRating: 38.0, limitingSpeed: 5600, weight: 1.07, brand: 'JBS', type: 'Deep Groove Ball', shortDescription: 'Heavy industrial electric motor and gearbox bearing.' },
                  ]
                },
                {
                  id: 'angular-contact-ball-bearings',
                  name: 'Angular Contact Ball Bearings',
                  slug: 'angular-contact-ball-bearings',
                  description: 'Accommodate combined radial and axial loads acting simultaneously.',
                  imageUrl: '/images/products/spherical-roller-4k.jpg',
                  products: [
                    { id: '7205-BECBP', designation: '7205 BECBP', outsideDiameter: 52, boreDiameter: 25, width: 15, dynamicLoadRating: 16.8, staticLoadRating: 10.2, limitingSpeed: 18000, weight: 0.13, brand: 'JBS', type: 'Angular Contact', shortDescription: '40° contact angle, glass fibre reinforced PA66 cage, universally matchable.' },
                    { id: '7208-BECBP', designation: '7208 BECBP', outsideDiameter: 80, boreDiameter: 40, width: 18, dynamicLoadRating: 36.5, staticLoadRating: 26.0, limitingSpeed: 11000, weight: 0.37, brand: 'JBS', type: 'Angular Contact', shortDescription: 'Universally matchable angular contact ball bearing for pumps and compressors.' },
                    { id: '7310-BECBM', designation: '7310 BECBM', outsideDiameter: 110, boreDiameter: 50, width: 27, dynamicLoadRating: 71.5, staticLoadRating: 50.0, limitingSpeed: 8500, weight: 1.15, brand: 'JBS', type: 'Angular Contact', shortDescription: 'Machined brass cage for high-temperature and heavy thrust duty.' }
                  ]
                },
                {
                  id: 'insert-bearings',
                  name: 'Insert Bearings (Y-Bearings)',
                  slug: 'insert-bearings',
                  description: 'Based on sealed deep groove ball bearings with convex outer ring for self-alignment.',
                  imageUrl: '/images/products/ball-bearing-4k.jpg',
                  products: [
                    { id: 'YAR-204-2F', designation: 'YAR 204-2F', outsideDiameter: 47, boreDiameter: 20, width: 31, dynamicLoadRating: 12.7, staticLoadRating: 6.55, limitingSpeed: 8500, weight: 0.16, brand: 'JBS', type: 'Insert Bearing', shortDescription: 'Grub screw locking, flingers and contact seals on both sides.' },
                    { id: 'YAR-205-2F', designation: 'YAR 205-2F', outsideDiameter: 52, boreDiameter: 25, width: 34.1, dynamicLoadRating: 14.0, staticLoadRating: 7.8, limitingSpeed: 7000, weight: 0.20, brand: 'JBS', type: 'Insert Bearing', shortDescription: 'Set screw locking collar insert bearing with zinc-coated inner ring.' },
                    { id: 'YET-205', designation: 'YET 205', outsideDiameter: 52, boreDiameter: 25, width: 31, dynamicLoadRating: 14.0, staticLoadRating: 7.8, limitingSpeed: 7000, weight: 0.19, brand: 'JBS', type: 'Insert Bearing', shortDescription: 'Eccentric locking collar insert bearing for agricultural and conveyor shafts.' },
                    { id: 'YAR-206-2F', designation: 'YAR 206-2F', outsideDiameter: 62, boreDiameter: 30, width: 38.1, dynamicLoadRating: 19.5, staticLoadRating: 11.2, limitingSpeed: 6300, weight: 0.32, brand: 'JBS', type: 'Insert Bearing', shortDescription: 'Heavy-duty agricultural and industrial conveyor insert bearing.' },
                    { id: 'YAR-208-2F', designation: 'YAR 208-2F', outsideDiameter: 80, boreDiameter: 40, width: 49.2, dynamicLoadRating: 30.7, staticLoadRating: 19.0, limitingSpeed: 4800, weight: 0.65, brand: 'JBS', type: 'Insert Bearing', shortDescription: 'Standard shaft mount insert bearing with grease lubrication relubrication facility.' }
                  ]
                },
                {
                  id: 'self-aligning-ball-bearings',
                  name: 'Self-Aligning Ball Bearings',
                  slug: 'self-aligning-ball-bearings',
                  description: 'Two rows of balls with a common sphered raceway in the outer ring to tolerate shaft deflection.',
                  imageUrl: '/images/products/ball-bearing-4k.jpg',
                  products: [
                    { id: '1205-EKTN9', designation: '1205 EKTN9', outsideDiameter: 52, boreDiameter: 25, width: 15, dynamicLoadRating: 12.5, staticLoadRating: 3.35, limitingSpeed: 18000, weight: 0.13, brand: 'JBS', type: 'Self-Aligning Ball', shortDescription: 'Tapered bore self-aligning bearing with glass fiber cage.' },
                    { id: '2206-E-2RS1KTN9', designation: '2206 E-2RS1KTN9', outsideDiameter: 62, boreDiameter: 30, width: 20, dynamicLoadRating: 15.6, staticLoadRating: 4.65, limitingSpeed: 9500, weight: 0.27, brand: 'JBS', type: 'Self-Aligning Ball', shortDescription: 'Sealed double row self-aligning bearing with pre-greased long life.' }
                  ]
                }
              ]
            },
            {
              id: 'roller-bearings',
              name: 'Roller Bearings',
              slug: 'roller-bearings',
              description: 'Engineered for heavy radial and oscillating loads across rugged industrial environments.',
              imageUrl: '/images/products/spherical-roller-4k.jpg',
              children: [
                {
                  id: 'spherical-roller-bearings',
                  name: 'Spherical Roller Bearings',
                  slug: 'spherical-roller-bearings',
                  description: 'Self-aligning roller bearings built for extremely heavy radial and shock loads.',
                  imageUrl: '/images/products/spherical-roller-4k.jpg',
                  products: [
                    { id: '22210-E', designation: '22210 E', outsideDiameter: 90, boreDiameter: 50, width: 23, dynamicLoadRating: 104, staticLoadRating: 108, limitingSpeed: 7500, weight: 0.60, brand: 'JBS', type: 'Spherical Roller', shortDescription: 'Optimized internal design with stamped steel cage and lubrication groove.' },
                    { id: '22212-E', designation: '22212 E', outsideDiameter: 110, boreDiameter: 60, width: 28, dynamicLoadRating: 159, staticLoadRating: 166, limitingSpeed: 6300, weight: 1.15, brand: 'JBS', type: 'Spherical Roller', shortDescription: 'Two symmetrical rollers with self-centering guide ring.' },
                    { id: '22314-EK', designation: '22314 EK', outsideDiameter: 150, boreDiameter: 70, width: 51, dynamicLoadRating: 425, staticLoadRating: 465, limitingSpeed: 4300, weight: 4.25, brand: 'JBS', type: 'Spherical Roller', shortDescription: 'Tapered bore 1:12 spherical roller bearing for vibrating screens and crusher shafts.' },
                    { id: '23024-CC-W33', designation: '23024 CC/W33', outsideDiameter: 180, boreDiameter: 120, width: 46, dynamicLoadRating: 382, staticLoadRating: 540, limitingSpeed: 3400, weight: 4.60, brand: 'JBS', type: 'Spherical Roller', shortDescription: 'Heavy rolling mill and cement plant spherical roller bearing.' }
                  ]
                },
                {
                  id: 'tapered-roller-bearings',
                  name: 'Tapered Roller Bearings',
                  slug: 'tapered-roller-bearings',
                  description: 'Conical raceways designed to support high combined radial and heavy single-direction thrust loads.',
                  imageUrl: '/images/products/spherical-roller-4k.jpg',
                  products: [
                    { id: '30205-J2-Q', designation: '30205 J2/Q', outsideDiameter: 52, boreDiameter: 25, width: 16.25, dynamicLoadRating: 32.5, staticLoadRating: 33.5, limitingSpeed: 13000, weight: 0.15, brand: 'JBS', type: 'Tapered Roller', shortDescription: 'Single row tapered roller bearing with optimized roller end profile.' },
                    { id: '30208-J2-Q', designation: '30208 J2/Q', outsideDiameter: 80, boreDiameter: 40, width: 19.75, dynamicLoadRating: 63.8, staticLoadRating: 69.5, limitingSpeed: 8500, weight: 0.43, brand: 'JBS', type: 'Tapered Roller', shortDescription: 'Gearbox and wheel hub tapered roller bearing assembly.' },
                    { id: '32210-J2-Q', designation: '32210 J2/Q', outsideDiameter: 90, boreDiameter: 50, width: 24.75, dynamicLoadRating: 95.2, staticLoadRating: 110, limitingSpeed: 7000, weight: 0.65, brand: 'JBS', type: 'Tapered Roller', shortDescription: 'High capacity series for heavy industrial reduction drives.' }
                  ]
                },
                {
                  id: 'cylindrical-roller-bearings',
                  name: 'Cylindrical Roller Bearings',
                  slug: 'cylindrical-roller-bearings',
                  description: 'Line contact provides high radial load capacity and suitability for high-speed applications.',
                  imageUrl: '/images/products/spherical-roller-4k.jpg',
                  products: [
                    { id: 'NU-205-ECP', designation: 'NU 205 ECP', outsideDiameter: 52, boreDiameter: 25, width: 15, dynamicLoadRating: 29.0, staticLoadRating: 27.0, limitingSpeed: 17000, weight: 0.14, brand: 'JBS', type: 'Cylindrical Roller', shortDescription: 'Non-locating bearing with two integral flanges on outer ring.' },
                    { id: 'NJ-210-ECP', designation: 'NJ 210 ECP', outsideDiameter: 90, boreDiameter: 50, width: 20, dynamicLoadRating: 72.0, staticLoadRating: 73.5, limitingSpeed: 9500, weight: 0.50, brand: 'JBS', type: 'Cylindrical Roller', shortDescription: 'Locating bearing with one flange on inner ring for axial location in one direction.' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'mounted-bearings',
          name: 'Mounted Bearings & Housings',
          slug: 'mounted-bearings',
          description: 'Ready-to-mount housing units and split plummer blocks engineered for quick mounting and rugged durability.',
          imageUrl: '/images/products/pillow-block-4k.jpg',
          editorialText: 'The mounted bearings and housings with rolling bearings accommodate rotating shafts by compensating for misalignment or thermal tilting relative to surrounding machine structures. They must be locked on a machine frame or other sub-structure.',
          children: [
            {
              id: 'ball-bearing-units',
              name: 'Ball Bearing Units',
              slug: 'ball-bearing-units',
              description: 'Standard pillow blocks, 4-bolt flanged units, and 2-bolt flanged units with cast iron housings.',
              imageUrl: '/images/products/pillow-block-4k.jpg',
              products: [
                { id: 'UCP-205', designation: 'UCP 205', outsideDiameter: 140, boreDiameter: 25, width: 38, dynamicLoadRating: 14.0, staticLoadRating: 7.8, limitingSpeed: 7000, weight: 0.80, brand: 'JBS', type: 'Pillow Block Unit', shortDescription: 'Pillow block housing unit with cast iron base and insert bearing.' },
                { id: 'UCP-208', designation: 'UCP 208', outsideDiameter: 184, boreDiameter: 40, width: 54, dynamicLoadRating: 30.7, staticLoadRating: 19.0, limitingSpeed: 4800, weight: 1.90, brand: 'JBS', type: 'Pillow Block Unit', shortDescription: 'Heavy-duty conveyor and fan pillow block unit.' },
                { id: 'UCF-205', designation: 'UCF 205', outsideDiameter: 95, boreDiameter: 25, width: 35.7, dynamicLoadRating: 14.0, staticLoadRating: 7.8, limitingSpeed: 7000, weight: 0.85, brand: 'JBS', type: 'Flanged Unit', shortDescription: 'Square 4-bolt flanged unit for vertical and wall mounting.' },
                { id: 'UCFL-206', designation: 'UCFL 206', outsideDiameter: 148, boreDiameter: 30, width: 40.2, dynamicLoadRating: 19.5, staticLoadRating: 11.2, limitingSpeed: 6300, weight: 0.95, brand: 'JBS', type: 'Flanged Unit', shortDescription: 'Oval 2-bolt flanged bearing unit for tight mechanical envelopes.' }
              ]
            },
            {
              id: 'split-plummer-blocks',
              name: 'Split Plummer Block Housings',
              slug: 'split-plummer-blocks',
              description: 'SNL and SAF heavy industrial housings for spherical roller bearings with high grease capacity.',
              imageUrl: '/images/products/pillow-block-4k.jpg',
              products: [
                { id: 'SNL-508-607', designation: 'SNL 508-607', outsideDiameter: 175, boreDiameter: 35, width: 85, weight: 2.9, brand: 'JBS', type: 'Plummer Block Housing', shortDescription: 'Two-bolt split plummer block housing for adapter sleeve mounting.' },
                { id: 'SNL-511-609', designation: 'SNL 511-609', outsideDiameter: 210, boreDiameter: 50, width: 95, weight: 4.9, brand: 'JBS', type: 'Plummer Block Housing', shortDescription: 'Standard split housing for 22211 or 22212 spherical roller bearings.' },
                { id: 'SNL-515-612', designation: 'SNL 515-612', outsideDiameter: 280, boreDiameter: 65, width: 115, weight: 9.3, brand: 'JBS', type: 'Plummer Block Housing', shortDescription: 'Rugged grey cast iron housing with labyrinth seal grooves.' }
              ]
            }
          ]
        },
        {
          id: 'super-precision',
          name: 'Super-Precision Bearings',
          slug: 'super-precision',
          description: 'High running accuracy, high-speed performance, and system rigidity for CNC machine tools and spindles.',
          imageUrl: '/images/products/ball-bearing-4k.jpg',
          editorialText: 'Super-precision bearings are designed for machine tools and other precision applications where high running accuracy, high-speed performance and high system rigidity are needed. They accommodate high RPMs with minimal thermal expansion.',
          products: [
            { id: '7008-CD-P4ADGA', designation: '7008 CD/P4ADGA', outsideDiameter: 68, boreDiameter: 40, width: 15, dynamicLoadRating: 17.8, staticLoadRating: 13.7, limitingSpeed: 28000, weight: 0.19, brand: 'JBS', type: 'Super Precision', shortDescription: 'ISO Class 4 (ABEC 7) spindle bearing with 15° contact angle.' },
            { id: '71910-CD-HCP4A', designation: '71910 CD/HCP4A', outsideDiameter: 72, boreDiameter: 50, width: 12, dynamicLoadRating: 16.3, staticLoadRating: 14.3, limitingSpeed: 34000, weight: 0.13, brand: 'JBS', type: 'Super Precision Hybrid', shortDescription: 'Ceramic silicon nitride balls for ultra-high speed CNC routing spindles.' },
            { id: 'NN-3012-K-SPW33', designation: 'NN 3012 K/SPW33', outsideDiameter: 95, boreDiameter: 60, width: 26, dynamicLoadRating: 88.0, staticLoadRating: 116, limitingSpeed: 11000, weight: 0.65, brand: 'JBS', type: 'Super Precision Roller', shortDescription: 'Double row cylindrical roller bearing with tapered bore 1:12 for radial spindle stiffness.' }
          ]
        },
        {
          id: 'slewing-bearings',
          name: 'Slewing Bearings',
          slug: 'slewing-bearings',
          description: 'Large diameter rings with integral gearing to handle combined axial, radial, and overturning moment loads.',
          imageUrl: '/images/products/spherical-roller-4k.jpg',
          editorialText: 'Slewing bearings consist of an inner and outer ring, where one of the rings generally incorporates a gear. Together with attachment holes in both rings, they enable an optimized power transmission between adjacent machine components in cranes, wind turbines, and excavators.',
          products: [
            { id: 'RKS-062-20-0414', designation: 'RKS.062.20.0414', outsideDiameter: 504, boreDiameter: 324, width: 56, dynamicLoadRating: 115, staticLoadRating: 320, limitingSpeed: 50, weight: 32.0, brand: 'JBS', type: 'Slewing Bearing', shortDescription: 'Single row four-point contact ball slewing bearing with external gear teeth.' },
            { id: 'RKS-21-0641', designation: 'RKS.21 0641', outsideDiameter: 748, boreDiameter: 540, width: 56, dynamicLoadRating: 185, staticLoadRating: 540, limitingSpeed: 35, weight: 58.0, brand: 'JBS', type: 'Slewing Bearing', shortDescription: 'Internal geared slewing bearing for industrial turntable positioners and marine cranes.' }
          ]
        },
        {
          id: 'plain-bearings',
          name: 'Plain Bearings',
          slug: 'plain-bearings',
          description: 'Spherical sliding surfaces for oscillating movements, heavy static loads, and tilting alignment.',
          imageUrl: '/images/products/tapered-roller-4k.jpg',
          editorialText: 'Plain bearings with spherical sliding surfaces can accommodate alignment, tilting and oscillating movements to meet a wide range of loads, and applications inside compact housings. Bushings, thrust washers and rod ends are included.',
          products: [
            { id: 'GE-20-ES-2RS', designation: 'GE 20 ES-2RS', outsideDiameter: 35, boreDiameter: 20, width: 16, dynamicLoadRating: 30.0, staticLoadRating: 146, weight: 0.065, brand: 'JBS', type: 'Spherical Plain', shortDescription: 'Radial spherical plain bearing with double lip seals on both sides.' },
            { id: 'GE-35-ES', designation: 'GE 35 ES', outsideDiameter: 55, boreDiameter: 35, width: 25, dynamicLoadRating: 80.0, staticLoadRating: 400, weight: 0.23, brand: 'JBS', type: 'Spherical Plain', shortDescription: 'Steel/steel sliding contact surface with relubrication holes.' },
            { id: 'POS-16', designation: 'POS 16', outsideDiameter: 42, boreDiameter: 16, width: 21, dynamicLoadRating: 21.6, staticLoadRating: 36.5, weight: 0.19, brand: 'JBS', type: 'Rod End', shortDescription: 'Male thread rod end with spherical plain bearing insert for steering and linkage.' },
            { id: 'PHS-12', designation: 'PHS 12', outsideDiameter: 32, boreDiameter: 12, width: 16, dynamicLoadRating: 10.8, staticLoadRating: 17.0, weight: 0.11, brand: 'JBS', type: 'Rod End', shortDescription: 'Female thread rod end for pneumatic and hydraulic cylinder attachments.' }
          ]
        },
        {
          id: 'magnetic-bearings',
          name: 'Magnetic Bearings',
          slug: 'magnetic-bearings',
          description: 'Levitated rotating shafts with zero physical contact, zero friction, and zero lubrication for ultra-high speeds.',
          imageUrl: '/images/products/spherical-roller-4k.jpg',
          editorialText: 'Magnetic bearings and systems are ideal for applications demanding high speeds and low vibration. With no physical contact there is no need for lubrication and practically no wear, making them standard for supercritical turboexpanders.',
          products: [
            { id: 'S2M-ACTIVE-50', designation: 'S2M Active 50', outsideDiameter: 120, boreDiameter: 50, width: 60, limitingSpeed: 60000, brand: 'JBS', type: 'Magnetic Bearing', shortDescription: 'Active electromagnetic levitation bearing for high-speed gas compressors.' }
          ]
        },
        {
          id: 'thin-section',
          name: 'Thin Section Bearings',
          slug: 'thin-section',
          description: 'Extremely thin cross-sections to save weight, reduce footprint, and enhance robotic design flexibility.',
          imageUrl: '/images/products/ball-bearing-4k.jpg',
          editorialText: 'Thin section bearings are designed to save weight, use less space, reduce friction, increase design flexibility and provide high running accuracy. They can meet highly demanding specifications in aerospace, robotics and medical automation.',
          products: [
            { id: 'KD040CP0', designation: 'KD040CP0', outsideDiameter: 114.3, boreDiameter: 101.6, width: 6.35, dynamicLoadRating: 4.8, staticLoadRating: 10.2, limitingSpeed: 3600, weight: 0.12, brand: 'JBS Precision', type: 'Thin Section', shortDescription: 'Deep groove ball Reali-Slim thin section bearing with 1/4 inch cross section.' },
            { id: 'KD050AR0', designation: 'KD050AR0', outsideDiameter: 139.7, boreDiameter: 127.0, width: 6.35, dynamicLoadRating: 5.6, staticLoadRating: 12.8, limitingSpeed: 3200, weight: 0.15, brand: 'JBS Precision', type: 'Thin Section', shortDescription: 'Angular contact thin section bearing for harmonic drives and rotary joints.' }
          ]
        }
      ]
    },
    {
      id: 'industrial-seals',
      name: 'Industrial Seals',
      slug: 'seals',
      description: 'Rotary shaft seals, mechanical seals, and hydraulic seals engineered to prevent lubricant leakage and ingress.',
      imageUrl: '/images/products/seals-4k.jpg',
      editorialText: 'Industrial seals are critical to maximizing bearing life and preventing environmental contamination. Our range covers elastomeric radial shaft seals, heavy-duty cassette seals for agricultural machinery, and hydraulic seals.',
      children: [
        {
          id: 'radial-shaft-seals',
          name: 'Radial Shaft Seals',
          slug: 'radial-shaft-seals',
          description: 'Oil seals with rubber outside diameter and garter spring for grease and oil retention.',
          imageUrl: '/images/products/seals-4k.jpg',
          products: [
            { id: '25X47X7-HMS5-RG', designation: '25X47X7 HMS5 RG', outsideDiameter: 47, boreDiameter: 25, width: 7, brand: 'JBS', type: 'Radial Shaft Seal', shortDescription: 'Nitrile rubber (NBR) seal with JBS Duralip profile and garter spring.' },
            { id: '35X62X7-HMSA10-RG', designation: '35X62X7 HMSA10 RG', outsideDiameter: 62, boreDiameter: 35, width: 7, brand: 'JBS', type: 'Radial Shaft Seal', shortDescription: 'Dual-lip radial shaft seal with secondary dust lip for contaminated environments.' },
            { id: '50X72X8-CRW1-R', designation: '50X72X8 CRW1 R', outsideDiameter: 72, boreDiameter: 50, width: 8, brand: 'JBS', type: 'Radial Shaft Seal', shortDescription: 'Metal cased rotary oil seal for high-pressure industrial pumps.' }
          ]
        }
      ]
    },
    {
      id: 'lubrication',
      name: 'Lubrication Solutions',
      slug: 'lubrication',
      description: 'High-performance mineral and synthetic greases, automatic single-point lubricators, and dispensing systems.',
      imageUrl: '/images/products/lubrication-4k.jpg',
      editorialText: 'Poor lubrication accounts for over 36% of premature bearing failures. We provide factory-formulated greases, automatic lubricators, and central distribution systems to ensure optimum film thickness and longevity.',
      products: [
        { id: 'LGMT-2-1', designation: 'LGMT 2/1', brand: 'JBS', type: 'Industrial Grease', shortDescription: 'General purpose industrial and automotive bearing grease (1 kg can), mineral oil based lithium soap.' },
        { id: 'LGMT-3-04', designation: 'LGMT 3/0.4', brand: 'JBS', type: 'Industrial Grease', shortDescription: 'High viscosity mineral grease for electric motors, fans and pumps (420 ml cartridge).' },
        { id: 'LGWA-2-5', designation: 'LGWA 2/5', brand: 'JBS', type: 'Heavy Duty Grease', shortDescription: 'Extreme pressure (EP) grease for conveyor pulleys, vibrating screens and steel mills (5 kg pail).' },
        { id: 'LAGD-125-WA2', designation: 'LAGD 125/WA2', brand: 'JBS', type: 'Automatic Lubricator', shortDescription: 'Gas driven single-point automated lubricator, 125 ml capacity, variable dispense 1-12 months.' },
        { id: 'TLGB-20', designation: 'TLGB 20', brand: 'JBS', type: 'Battery Grease Gun', shortDescription: '20V Lithium-ion cordless battery driven grease gun with integrated flow meter display.' }
      ]
    },
    {
      id: 'power-transmission',
      name: 'Power Transmission',
      slug: 'power-transmission',
      description: 'Synchronous timing belts, classical V-belts, precision roller chains, sprockets, and flexible couplings.',
      imageUrl: '/images/products/transmission-4k.jpg',
      editorialText: 'A complete assortment of power transmission components designed to seamlessly integrate with bearings, reducing vibration and transferring torque efficiently across industrial drives.',
      products: [
        { id: 'PHG-SPA1250', designation: 'PHG SPA1250', brand: 'JBS', type: 'Wedge Belt', shortDescription: 'Wrapped narrow wedge belt, high temperature and oil resistant with polyester tension cords.' },
        { id: 'PHG-8M-1200-20', designation: 'PHG 8M-1200-20', brand: 'JBS', type: 'Timing Belt', shortDescription: 'High torque drive (Hi-TD) curvilinear synchronous timing belt, 8mm pitch, 20mm width.' },
        { id: 'PHC-08B-1X10FT', designation: 'PHC 08B-1X10FT', brand: 'JBS', type: 'Roller Chain', shortDescription: 'British Standard / ISO single strand (simplex) pre-stressed roller chain in 10ft box.' },
        { id: 'FFX-40-TYRE', designation: 'FFX 40 Tyre Coupling', brand: 'JBS', type: 'Flexible Coupling', shortDescription: 'High misalignment flexibility rubber tyre shaft coupling accommodating shock loads.' }
      ]
    },
    {
      id: 'maintenance-tools',
      name: 'Maintenance Tools',
      slug: 'maintenance-tools',
      description: 'Induction bearing heaters, mechanical pullers, laser shaft alignment systems, and vibration monitors.',
      imageUrl: '/images/products/maintenance-4k.jpg',
      editorialText: 'Precision tools engineered to eliminate premature bearing failure: safe thermal induction heating, non-destructive hydraulic dismounting, and precision laser alignment.',
      products: [
        { id: 'TIH-030M', designation: 'TIH 030M', brand: 'JBS', type: 'Induction Heater', shortDescription: 'Portable induction bearing heater for bearings up to 40 kg with thermal probe and demagnetization.' },
        { id: 'TMMA-60', designation: 'TMMA 60 EasyPull', brand: 'JBS', type: 'Mechanical Puller', shortDescription: 'Spring-operated mechanical 3-arm puller with safety locking arms for rapid extraction.' },
        { id: 'TKSA-41', designation: 'TKSA 41', brand: 'JBS', type: 'Laser Alignment', shortDescription: 'Wireless dual-detector laser shaft alignment system with automatic measurement and QR reporting.' },
        { id: 'CMAS-100-SL', designation: 'CMAS 100-SL QuickCollect', brand: 'JBS', type: 'Condition Monitoring', shortDescription: 'Bluetooth handheld vibration and temperature sensor connecting to iOS and Android diagnostic apps.' }
      ]
    }
  ]
};

export const servicesData = [
  {
    id: 'selection',
    name: 'Bearing Selection & Engineering',
    description: 'Expert calculations for dynamic life (L10h), shaft tolerances, heat dissipation, and load distribution.',
    iconName: 'WrenchIcon'
  },
  {
    id: 'alignment',
    name: 'Laser Shaft Alignment',
    description: 'Precision wireless alignment services to eliminate angular and parallel offset, doubling seal and bearing life.',
    iconName: 'GaugeIcon'
  },
  {
    id: 'monitoring',
    name: 'Condition Monitoring & Vibration',
    description: 'ISO-certified predictive maintenance audits, FFT frequency vibration analysis, and failure diagnostics.',
    iconName: 'ActivityIcon'
  },
  {
    id: 'remanufacturing',
    name: 'Bearing Refurbishment',
    description: 'Remanufacturing of large bore spherical, slewing and rolling mill bearings up to 60% cost savings.',
    iconName: 'RefreshCwIcon'
  },
  {
    id: 'lubrication',
    name: 'Automated Lubrication Audits',
    description: 'Custom grease calculations, automated dispensing installations, and contamination prevention protocols.',
    iconName: 'DropletIcon'
  },
  {
    id: 'logistics',
    name: 'Pan-India Express Logistics',
    description: 'Rapid dispatch network from strategic warehouses in Mumbai, Delhi, Kolkata, and Chennai for zero downtime.',
    iconName: 'TruckIcon'
  }
];

export function findCategoryBySlugPath(path: string[]): Category | undefined {
  let current: Category | undefined = catalogData;
  for (const slug of path) {
    if (!current?.children) return undefined;
    const found: Category | undefined = current.children.find(c => c.slug === slug);
    if (!found) return undefined;
    current = found;
  }
  return current;
}

export function getAllProducts(category: Category = catalogData): Product[] {
  let list: Product[] = [];
  if (category.products) {
    list = list.concat(category.products);
  }
  if (category.children) {
    for (const child of category.children) {
      list = list.concat(getAllProducts(child));
    }
  }
  return list;
}
