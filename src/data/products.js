import { VscVariableGroup } from "react-icons/vsc";

const products = [
  // Flowers Bouquet
  { id: 1, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-1.webp",
    badge: "Best Seller"
  },
  { id: 2, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-2.webp",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-3.jpeg",
    badge: "Best Seller"
  },
  { id: 4, category: "bouquets", name: "Mini Bouquet", price: 499,
    image: "/images/bouquet/flow-4.webp",
    badge: "Best Seller"
  },
  { id: 6, category: "bouquets", name: "Flowers Bouquet", 
    image: "/images/bouquet/flow-6.jpg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-7.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-8.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-9.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-10.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-11.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-12.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-13.jpeg",
    badge: "Best Seller"
  },
  { id: 3, category: "bouquets", name: "Flowers Bouquet",
    image: "/images/bouquet/flow-14.jpeg",
    badge: "Best Seller"
  },
  

  // Chocolate Bouquet
  { id: 7, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-1.jpeg",
    badge: "Best Seller"
  },
  { id: 9, category: "bouquets", name: "Sweetheart Chocolate Bouquet", 
    image: "/images/chocolate/choco-18.webp",
    badge: "Best Seller"
  },
  { id: 10, category: "bouquets", name: "Assorted Chocolate Bouquet",
    image: "/images/chocolate/choco-19.webp",
    badge: "Best Seller"
  },
  { id: 11, category: "bouquets", name: "Chocolate & Roses",
    image: "/images/chocolate/choco-20.jpeg",
    badge: "Best Seller"
  },
  { id: 12, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-21.jpg",
    badge: "Best Seller"
  },
  { id: 12, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-22.jpeg",
    badge: "Best Seller"
  },
  { id: 12, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-23.jpeg",
    badge: "Best Seller"
  },
  { id: 13, category: "bouquets", name: "Kitkat Roses", 
    image: "/images/chocolate/choco-2.jpeg",
    badge: "Best Seller"
  },
  { id: 14, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-3.jpeg",
    badge: "Best Seller"
  },
  { id: 15, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-4.jpeg",
    badge: "Best Seller"
  },
  { id: 16, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-5.jpeg",
    badge: "Best Seller"
  },
  { id: 17, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-6.jpeg",
    badge: "Best Seller"
  },
  { id: 18, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-7.jpeg",
    badge: "Best Seller"
  },
  { id: 19, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-8.jpeg",
    badge: "Best Seller"
  },
  { id: 20, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-9.jpeg",
    badge: "Best Seller"
  },
  { id: 21, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-10.jpeg",
    badge: "Best Seller"
  },
  { id: 22, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-11.jpeg",
    badge: "Best Seller"
  },
  { id: 23, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-12.jpeg",
    badge: "Best Seller"
  },
  { id: 24, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-13.jpeg",
    badge: "Best Seller"
  },
  { id: 25, category: "bouquets", name: "Chocolate Bouquet", 
    image: "/images/chocolate/choco-14.jpeg",
    badge: "Best Seller"
  },
  { id: 26, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-15.jpeg",
    badge: "Best Seller"
  },
  { id: 27, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-16.png",
    badge: "Best Seller"
  },
  { id: 28, category: "bouquets", name: "Chocolate Bouquet",
    image: "/images/chocolate/choco-17.jpeg",
    badge: "Best Seller"
  },
  { id: 29, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-1.png",
    badge: "Best Seller"
  },
  { id: 31, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-3.png",
    badge: "Best Seller"
  },
  { id: 32, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-4.png",
    badge: "Best Seller"
  },
  { id: 33, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-5.png",
    badge: "Best Seller"
  },
  { id: 34, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-6.png",
    badge: "Best Seller"
  },
  { id: 35, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-7.png",
    badge: "Best Seller"
  },
  { id: 36, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-8.png",
    badge: "Best Seller"
  },
  { id: 37, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-9.png",
    badge: "Best Seller"
  },
  { id: 38, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-10.png",
    badge: "Best Seller"
  },
  { id: 39, category: "bouquets", name: "Teddy Bouquet",
    image: "/images/bouquet/bq-11.png",
    badge: "Best Seller"
  },
  { id: 40, category: "bouquets", name: "Cosmetic Teddy Bouquet",
    image: "/images/bouquet/bq-12.png",
    badge: "Best Seller"
  },
  { id: 41, category: "bouquets", name: "Cosmetic Bouquet",
    image: "/images/bouquet/bq-13.jpeg",
    badge: "Best Seller"
  },





  //frames
  {
    id: 42, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-13.webp",
    badge: "Best Seller"
  },
  {
    id: 43, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-1.png",
    badge: "Best Seller"
  },
  {
    id: 44, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-2.png",
    badge: "Best Seller"
  },
  {
    id: 46, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-4.png",
    badge: "Best Seller"
  },
  {
    id: 47, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-5.png",
    badge: "Best Seller"
  },
  {
    id: 48, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-6.png",
    badge: "Best Seller"
  },
  {
    id: 49, category: "frames", name: "Custom Love Frame",
    image: "/images/frames/frame-7.png",
    badge: "Best Seller"
  },
  {
    id: 50, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-8.png",
    badge: "Best Seller"
  },
  {
    id: 51, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-9.jpg",
    badge: "Best Seller"
  },
  {
    id: 52, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-10.jpeg",
    badge: "Best Seller"
  },
  {
    id: 53, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-11.jpeg",
    badge: "Best Seller"
  },
  {
    id: 54, category: "frames", name: "Custom Love Frame", 
    image: "/images/frames/frame-14.jpeg",
    badge: "Best Seller"
  },
  


   //Hampers  
   {
    id: 55, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-C.jpg",
    badge: "Best Seller"
  },
  {
    id: 56, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 57, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-1.png",
    badge: "Best Seller"
  },
  {
    id: 58, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-2.png",
    badge: "Best Seller"
  },
  {
    id: 59, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-3.png",
    badge: "Best Seller"
  },
  {
    id: 60, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-4.png",
    badge: "Best Seller"
  },
  {
    id: 61, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-5.png",
    badge: "Best Seller"
  },
  {
    id: 62, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-6.png",
    badge: "Best Seller"
  },
  {
    id: 63, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-7.png",
    badge: "Best Seller"
  },
  {
    id: 64, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-8.png",
    badge: "Best Seller"
  },
  {
    id: 65, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-9.png",
    badge: "Best Seller"
  },
  {
    id: 66, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-10.png",
    badge: "Best Seller"
  },
  {
    id: 67, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-11.webp",
    badge: "Best Seller"
  },
  {
    id: 68, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-12.jpeg",
    badge: "Best Seller"
  },
  {
    id: 69, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-13.jpeg",
    badge: "Best Seller"
  },
  {
    id: 70, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-14.png",
    badge: "Best Seller"
  },
  {
    id: 71, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-15.png",
    badge: "Best Seller"
  },
  {
    id: 72, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-16.png",
    badge: "Best Seller"
  },
  {
    id: 73, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-17.png",
    badge: "Best Seller"
  },
  {
    id: 74, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-18.jpeg",
    badge: "Best Seller"
  },
  {
    id: 75, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-19.png",
    badge: "Best Seller"
  },
  {
    id: 76, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-20.jpeg",
    badge: "Best Seller"
  },
  {
    id: 77, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-21.jpeg",
    badge: "Best Seller"
  },
  {
    id: 78, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-22.png",
    badge: "Best Seller"
  },
  {
    id: 79, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-23.jpeg",
    badge: "Best Seller"
  },
  {
    id: 80, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-24.jpeg",
    badge: "Best Seller"
  },
  {
    id: 81, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-25.jpeg",
    badge: "Best Seller"
  },
  {
    id: 82, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-26.jpeg",
    badge: "Best Seller"
  },
  {
    id: 83, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-27.jpeg",
    badge: "Best Seller"
  },
  {
    id: 84, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-28.jpeg",
    badge: "Best Seller"
  },
  {
    id: 85, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-29.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-30.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-31.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-32.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-33.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-34.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-35.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-36.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-37.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-38.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-39.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-40.jpeg",
    badge: "Best Seller"
  },
  {
    id: 86, category: "hampers", name: "Gift hamper",
    image: "/images/hampers/hamper-41.jpeg",
    badge: "Best Seller"
  },



  //resin Art
  {
    id: 87, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img27.jpeg",
    badge: "Best Seller"
  },
  {
    id: 88, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 89, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img2.png",
    badge: "Best Seller"
  },
  {
    id: 90, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 91, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img4.png",
    badge: "Best Seller"
  },
  {
    id: 92, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img5.png",
    badge: "Best Seller"
  },
  {
    id: 93, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img6.png",
    badge: "Best Seller"
  },
  {
    id: 94, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img7.png",
    badge: "Best Seller"
  },
  {
    id: 95, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img8.png",
    badge: "Best Seller"
  },
  {
    id: 96, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img9.png",
    badge: "Best Seller"
  },
  {
    id: 97, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img10.png",
    badge: "Best Seller"
  },
  {
    id: 98, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img11.png",
    badge: "Best Seller"
  },
  {
    id: 99, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img12.png",
    badge: "Best Seller"
  },
  {
    id: 100, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img13.jpeg",
    badge: "Best Seller"
  },
  {
    id: 101, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img14.png",
    badge: "Best Seller"
  },
  {
    id: 102, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img15.png",
    badge: "Best Seller"
  },
  {
    id: 103, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img16.png",
    badge: "Best Seller"
  },
  {
    id: 104, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img17.jpeg",
    badge: "Best Seller"
  },
  {
    id: 105, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img18.jpeg",
    badge: "Best Seller"
  },
  {
    id: 106, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img19.png",
    badge: "Best Seller"
  },
  {
    id: 107, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img20.jpeg",
    badge: "Best Seller"
  },
  {
    id: 108, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img21.jpeg",
    badge: "Best Seller"
  },
  {
    id: 109, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img22.png",
    badge: "Best Seller"
  },
  {
    id: 110, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img23.png",
    badge: "Best Seller"
  },
  {
    id: 111, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img24.jpeg",
    badge: "Best Seller"
  },
  {
    id: 112, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img25.jpeg",
    badge: "Best Seller"
  },
  {
    id: 113, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img26.jpeg",
    badge: "Best Seller"
  },
  {
    id: 114, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img28.jpeg",
    badge: "Best Seller"
  },
  {
    id: 115, category: "resin art", name: "Customized Resin Art", 
    image: "/images/resinArt/img29.jpeg",
    badge: "Best Seller"
  },


  //Ringplattr
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-2.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-4.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-5.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-6.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-7.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-8.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-9.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-10.jpeg",
    badge: "Best Seller"
  },
  {
    id: 116, category: "ring platter", name: "Customized Ring platter", 
    image: "/images/ringPlate/ring-11.jpeg",
    badge: "Best Seller"
  },


  //crochet gifts
  {
    id: 117,
    category: "crochet gifts",
    name: "Crochet Bouquet",
    image: "/images/crochet/boqu1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 118,
    category: "crochet gifts",
    name: "Crochet Bouquet",
    image: "/images/crochet/boqu2.jpeg",
    badge: "Best Seller"
  },
  {
    id: 119,
    category: "crochet gifts",
    name: "Crochet Bouquet",
    image: "/images/crochet/boqu3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 120,
    category: "crochet gifts",
    name: "Crochet Bouquet",
    image: "/images/crochet/boqu4.jpeg",
    badge: "Best Seller"
  },
  {
    id: 121,
    category: "crochet gifts",
    name: "Crochet Bouquet",
    image: "/images/crochet/boqu5.jpeg",
    badge: "Best Seller"
  },
  {
    id: 122,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 123,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair2.jpeg",
    badge: "Best Seller"
  },
  {
    id: 124,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 125,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair4.jpeg",
    badge: "Best Seller"
  },
  {
    id: 126,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair5.jpeg",
    badge: "Best Seller"
  },
  {
    id: 127,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair6.jpeg",
    badge: "Best Seller"
  },
  {
    id: 128,
    category: "crochet gifts",
    name: "Crochet Hair Accessories",
    image: "/images/crochet/hair7.jpeg",
    badge: "Best Seller"
  },
  {
    id: 129,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 130,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key2.jpeg",
    badge: "Best Seller"
  },
  {
    id: 131,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 132,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key4.jpeg",
    badge: "Best Seller"
  },
  {
    id: 133,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key5.jpeg",
    badge: "Best Seller"
  },
  {
    id: 134,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key6.jpeg",
    badge: "Best Seller"
  },
  {
    id: 135,
    category: "crochet gifts",
    name: "Crochet Keychain",
    image: "/images/crochet/key7.jpeg",
    badge: "Best Seller"
  },
  {
    id: 136,
    category: "crochet gifts",
    name: "Crochet toys",
    image: "/images/crochet/toy1.jpeg",
    badge: "Best Seller"
  },
  {
    id: 137,
    category: "crochet gifts",
    name: "Crochet toys",
    image: "/images/crochet/toy2.jpeg",
    badge: "Best Seller"
  },
  {
    id: 138,
    category: "crochet gifts",
    name: "Crochet toys",
    image: "/images/crochet/toy3.jpeg",
    badge: "Best Seller"
  },
  {
    id: 136,
    category: "crochet gifts",
    name: "Crochet toys",
    image: "/images/crochet/toy4.jpeg",
    badge: "Best Seller"
  },
  {
    id: 136,
    category: "crochet gifts",
    name: "Crochet toys",
    image: "/images/crochet/toy5.jpeg",
    badge: "Best Seller"
  },
];

export default products;
