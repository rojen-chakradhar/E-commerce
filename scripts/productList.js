const products = [
  {
    id: "1",
    name: "Sky Blue Hoodie",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1617171594207-430a01a9da3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1617171594207-430a01a9da3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Cozy hoodie in sky color",
    category: "clothing"
  },
  {
    id: "2",
    name: "Cat Mug",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1539547256500-3c6cfd15bfdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1539547256500-3c6cfd15bfdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1542847957-80a6beffcbde?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1738330194751-e096b51af7bf?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Cute mug for cat lovers",
    category: "mugs"
  },
  {
    id: "3",
    name: "Galaxy T-shirt",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1542847957-80a6beffcbde?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1542847957-80a6beffcbde?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Stylish galaxy print tee",
    category: "clothing"
  },
  {
    id: "4",
    name: "Sports Bat",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1738330194751-e096b51af7bf?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1738330194751-e096b51af7bf?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Bat of different sports",
    category: "sports"
  },
  {
    id: "5",
    name: "Travis Scott x Air Jordan 1",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Travis Scott x Air Jordan 1 Retro Low OG Reverse Mocha",
    category: "boots"
  },
  {
    id: "6",
    name: "Tabi Boots",
    price: "$1500",
    image: "https://images.unsplash.com/photo-1539547256500-3c6cfd15bfdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1539547256500-3c6cfd15bfdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1542847957-80a6beffcbde?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1738330194751-e096b51af7bf?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Tabi Boots",
    category: "boots"
  },  
  {
    id: "7",
    name: "Travis Scott x Air Jordan 1",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Travis Scott x Air Jordan 1 Retro Low OG Reverse Mocha",
    category: "boots"
  },
  {
    id: "8",
    name: "Travis Scott x Air Jordan 1",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: "Travis Scott x Air Jordan 1 Retro Low OG Reverse Mocha",
    category: "boots"
  }
];