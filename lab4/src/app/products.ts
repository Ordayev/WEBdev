export interface Product{
  name:string,
  price:number;
  description:string,
  rating:number,
  image: string,
  link:string,
  buttonn:string
}

export const products = [
  {
    name: 'Red  Jewelry',
    price: 2.99,
    description: '2019 Korea Hot Fashion Jewelry Acrylic Paint Romantic Leaves Rose Petals dangle Earrings Gold Copper Earrings for women gift',
    rating: 4.9,
    image:'https://ae01.alicdn.com/kf/H02c7c9e619364e28944119dad71d6e3d6/2019.jpg',
    link:'https://www.aliexpress.com/item/4000021960808.html?spm=a2g0o.tm75978.1711311780.6.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=2df5f7db-f3c8-4ad6-aed8-c31f9f79c62f',
    buttonn:'https://api.whatsapp.com/send?phone=77075145613&text=Look+at+this+product+${product.name}+${product.link}'
  },
  {
    name: 'Bracelets',
    price: 3.22,
    description: '3pcs/set Royal Roman Bracelets & Bangles Love Bangle Bracelet For Men stainless steel Rectangle Bracelet Pulseira Mens Jewelry',
    rating: 4.7,
    image:'https://i.etsystatic.com/15514917/r/il/92b989/1516290725/il_794xN.1516290725_qg0c.jpg',
    link:'https://www.aliexpress.com/item/4000390721638.html?spm=a2g0o.tm75978.1711311780.21.1fe17294SAUbQL"'
  },
  {
    name: 'Necklace',
    price: 6.89,
    description: 'ASHIQI Real Pure 925 Sterling Silver Chain Pendant Necklace For Women 8-9mm White Gray Natural Freshwater Baroque Pearl Jewelry',
    rating:4.9,
    image:'https://ae01.alicdn.com/kf/HTB1oJTmOFXXXXabXpXXq6xXFXXX5/RUNZHUQIYUAN-2017-100-natural-freshwater-pearl-choker-necklace-925-sterling-silver-chain-jewelry-pearl-pendant-for.jpg_q50.jpg',
    link:'https://www.aliexpress.com/item/32936743091.html?spm=a2g0o.tm75978.5230979690.4.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=f6da9256-7502-469e-ac5f-8b21de6e80e6'
  },
  {
    name: 'Watches',
    price: 2.97,
    description: 'A Womens Watches Fashion Women Wrist Watch Luxury Ladies Watch Women Bracelet Reloj Mujer Clock Relogio Feminino zegarek damski large phone with one of the best screens',
    rating:4.6,
    image:'https://cdn.klenoty-buran.cz/klenotycdn/images/0Q2scHCg_s.jpg',
    link:'https://www.aliexpress.com/item/32896991745.html?spm=a2g0o.tm75978.1389489740.16.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=dcacc210-e23c-4cc4-8a5b-994ebb663f2f'

  },
  {
    name: 'Sunglasses',
    price: 2.92,
    description: 'LeonLion 2019 Metal Classic Vintage Women Sunglasses Luxury Brand Design Glasses Female Driving Eyewear Oculos De Sol Masculino',
    rating:4.6,
    image:'https://ae01.alicdn.com/kf/HTB1FWRRV4TpK1RjSZFKq6y2wXXaK.jpg',
    link:'https://www.aliexpress.com/item/33019407403.html?spm=a2g0o.tm75978.1172360260.6.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=42b1403d-f76b-455f-83d7-e665231b0654'

  },
  {
    name: 'Chain Sunglasses',
    price: 1.06,
    description: 'Fashion Chic Womens Eyeglass Chains Sunglasses Reading Beaded Glasses Chain Eyewears Cord Holder neck strap Rope',
    rating:4.7,
    image:'https://i.pinimg.com/236x/b9/4d/6f/b94d6fd58fadd72e48937b72af9457ff.jpg',
    link:'https://www.aliexpress.com/item/32914440656.html?spm=a2g0o.tm75978.1172360260.12.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=42b1403d-f76b-455f-83d7-e665231b0654'

  },
  {
    name: 'Cap',
    price: 7.10,
    description: 'A large fashion genuine leather fishing cap brand casual bucket Hat out sun protection bonnie hat male camping borras for women men with one of the best screens',
    rating:4.7,
    image:'https://assets.vogue.com/photos/5d277900e34020000828c020/master/w_400%2Cc_limit/slide_5.jpg',
    link:'https://www.aliexpress.com/item/32282826530.html?spm=a2g0o.tm75978.1172360260.16.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=ea8748be-c6d3-4848-b822-05c3b351a1bc'

  },
  {
    name: 'Earrings',
    price: 3.21,
    description: 'Transparent Personality Pearl Paved Heart Big Earrings For Women 2019 New Jewelry Statement Earrings Street Style',
    rating:4.9,
    image:'https://www.dhresource.com/webp/m/0x0s/f2-albu-g10-M01-83-B3-rBVaVl2IbYmALji2AAD9DMn0jcU451.jpg/bohemian-gold-acrylic-love-heart-earring.jpg',
    link:'https://www.aliexpress.com/item/4000049313465.html?spm=a2g0o.tm75978.1711311780.9.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=2df5f7db-f3c8-4ad6-aed8-c31f9f79c62f'

  },
  {
    name: 'Ring',
    price: 3.60,
    description: 'Miyuki Beaded Ring Set Geometric New Fashion Popular Accessories Woven Jewelry For Woman or Man Party Gifts Bohemia Dropshipping',
    rating:4.6,
    image:'https://ae01.alicdn.com/kf/HTB11YiMMVzqK1RjSZFvq6AB7VXaK.jpg',
    link:'https://www.aliexpress.com/item/32990264336.html?spm=a2g0o.tm75978.1711311780.19.1fe17294SAUbQL&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=7563d251-e9ea-4877-bc1b-e2a351562ef8'

  },
  {
    name: 'Jewelry Sets',
    price: 3.82,
    description: 'ANENJERY 925 Sterling Silver Jewelry Sets Epoxy Black Round Wafer Necklace+Earrings+Ring For Women Korean Jewelry',
    rating:4.8,
    image:'https://scontent-otp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/72639402_197988431232572_6584819376880662946_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_cat=108&oh=2c820f9a05f64a32c6c8647588fe5597&oe=5EAD580B',
    link:'https://www.aliexpress.com/item/33033607547.html?spm=a2g0o.tm75978.1748155390.7.1fe17294SAUbQL&&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=d9d82754-fc3e-4344-8d65-d356a5611eb8'

  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/