export interface ImageAsset {
  src: string;
  alt: string;
  category: 'training' | 'kids' | 'facility' | 'belts' | 'other';
  source: 'instagram' | 'yelp';
}

export const allImages: ImageAsset[] = [
  // Instagram images
  { src: '/assets/instagram/post_01_pinned_reel.jpg', alt: 'Academy of Jiu Jitsu - Free trial and foundation class', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_02_sweep.jpg', alt: 'Single leg X to Lazarus sweep technique', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_03_brothers.jpg', alt: 'Brothers training together', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_04_kids_4_5.jpg', alt: '4-5 year old class', category: 'kids', source: 'instagram' },
  { src: '/assets/instagram/post_05_kids_spar.jpg', alt: 'Kids position sparring', category: 'kids', source: 'instagram' },
  { src: '/assets/instagram/post_06_gi.jpg', alt: 'Gi training session', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_07_muaythai.jpg', alt: 'Muay Thai training', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_08_nogi.jpg', alt: 'No-Gi class announcement', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_09_belt.jpg', alt: 'Belt promotion', category: 'belts', source: 'instagram' },
  { src: '/assets/instagram/post_10_gi2.jpg', alt: 'Gi training', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_11_kids_spar2.jpg', alt: 'Kids sparring session', category: 'kids', source: 'instagram' },
  { src: '/assets/instagram/post_12_belt_tie.jpg', alt: 'How to tie a Brazilian Jiu Jitsu belt', category: 'belts', source: 'instagram' },
  { src: '/assets/instagram/post_13_first_responder.jpg', alt: 'First responders free class promotion', category: 'other', source: 'instagram' },
  { src: '/assets/instagram/post_14_martial_arts.jpg', alt: 'Martial arts training', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_16_training.jpg', alt: 'Training session', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_17_youth.jpg', alt: 'Youth class', category: 'kids', source: 'instagram' },
  { src: '/assets/instagram/post_18_mount.jpg', alt: 'Mount position technique', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_19_guerrilla.jpg', alt: 'Guerrilla Jiu Jitsu team', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_20_muaythai.jpg', alt: 'Muay Thai combo', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_21_first_responders.jpg', alt: 'First responders appreciation', category: 'other', source: 'instagram' },
  { src: '/assets/instagram/post_22_classes.jpg', alt: 'Classes for children and adults', category: 'training', source: 'instagram' },
  { src: '/assets/instagram/post_23_time_quote.jpg', alt: 'Time is your quiet ally on the mat', category: 'other', source: 'instagram' },
  { src: '/assets/instagram/post_15_blue_belt.jpg', alt: 'Blue belt promotion', category: 'belts', source: 'instagram' },
  { src: '/assets/instagram/post_24_belt_mat.jpg', alt: 'Belt on the mat', category: 'belts', source: 'instagram' },
  { src: '/assets/instagram/post_25_belt_text.jpg', alt: 'Belt detail', category: 'belts', source: 'instagram' },
  // Yelp images
  { src: '/assets/yelp/yelp_01.jpg', alt: 'Academy of Jiu Jitsu facility', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_02.jpg', alt: 'Training area', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_03.jpg', alt: 'Class in session', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_04.jpg', alt: 'Academy exterior', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_05.jpg', alt: 'Adult Jiu Jitsu class - teammates position sparring', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_06.jpg', alt: 'Training mats', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_07.jpg', alt: 'Training session', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_08.jpg', alt: 'Academy interior', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_09.jpg', alt: 'Students training', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_10.jpg', alt: 'Class instruction', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_11.jpg', alt: 'Technique practice', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_12.jpg', alt: 'Academy space', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_13.jpg', alt: 'Rolling session', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_14.jpg', alt: 'Training partners', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_15.jpg', alt: 'Facility overview', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_16.jpg', alt: 'Warm up drills', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_17.jpg', alt: 'Academy entrance', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_18.jpg', alt: 'Open mat session', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_19.jpg', alt: 'Technique demonstration', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_20.jpg', alt: 'Class lineup', category: 'training', source: 'yelp' },
  { src: '/assets/yelp/yelp_21.jpg', alt: 'Academy detail', category: 'facility', source: 'yelp' },
  { src: '/assets/yelp/yelp_22.jpg', alt: 'Training environment', category: 'facility', source: 'yelp' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'training', label: 'Training' },
  { id: 'kids', label: 'Kids' },
  { id: 'facility', label: 'Facility' },
  { id: 'belts', label: 'Belts' },
] as const;
