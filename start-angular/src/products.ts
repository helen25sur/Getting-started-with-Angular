export interface Product {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  description: string;
  // type: 'phone' | 'tablet' | 'watch';
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 11 64GB - Black',
    imgSrc: './assets/images/products/phone-1.webp',
    price: 549.00,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet quasi, odit aut assumenda nisi iure repellat et ea magni facilis provident, iusto illum facere debitis tempore fugiat alias eos.',
    // type: 'phone'
  },
  {
    id: 2,
    name: 'Apple Watch SE Starlight Aluminium GPS 40mm - Starlight Sport Band Regular',
    imgSrc: './assets/images/products/watch-1.webp',
    price: 319.00,
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam repudiandae, quasi quod adipisci similique voluptatem autem rerum amet vel.',
    // type: 'watch'
  },
  {
    id: 3,
    name: 'Smartphone Samsung Galaxy A33 5G 128GB Dual Sim - Awesome Black',
    imgSrc: './assets/images/products/phone-2.webp',
    price: 319.90,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab nam modi autem perspiciatis.',
    // type: 'phone'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S23 Ultra 512GB - Phantom Black',
    imgSrc: './assets/images/products/phone-3.avif',
    price: 1629.00,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis, unde libero exercitationem tenetur, dicta natus minus cumque maxime esse. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'phone'
  },
  {
    id: 5,
    name: 'Smartwatch Samsung Galaxy Watch5 40mm - Pink Gold',
    imgSrc: './assets/images/products/watch-2.webp',
    price: 239.90,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis, unde libero exercitationem tenetur, dicta natus minus cumque maxime esse. ',
    // type: 'watch'
  },
  {
    id: 6,
    name: 'Smartphone Xiaomi Redmi Note 11 Dual Sim 64GB - Star Blue',
    imgSrc: './assets/images/products/phone-4.webp',
    price: 209.89,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'phone'
  },
  {
    id: 7,
    name: 'Tablet Lenovo Tab M10 Plus (3rd Gen) 4GB/128GB WiFi Storm Grey',
    imgSrc: './assets/images/products/tablet-1.webp',
    price: 239.90,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'tablet'
  },
   {
    id: 8,
    name: 'Apple iPad 10.9" 2022 (10th Gen) 64GB WiFi Blue',
    imgSrc: './assets/images/products/tablet-2.webp',
    price: 629.00,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'tablet'
  },
  {
    id: 9,
    name: 'Smartwatch Huawei Watch GT 3 Elite 46mm - Steel',
    imgSrc: './assets/images/products/watch-3.webp',
    price: 279.00,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'watch'
  },
  {
    id: 10,
    name: 'Tablet Samsung Galaxy Tab A8 WiFi 4GB/64GB - Dark Gray',
    imgSrc: './assets/images/products/tablet-3.avif',
    price: 268.99,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos distinctio odio debitis sed nobis. Obcaecati iusto ex cum laboriosam quod.',
    // type: 'tablet'
  },
];
