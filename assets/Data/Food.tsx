const Food=[
    {
      id:0,
      title: 'Spicy Noodles',
      price:'N1,500',
      image:'data:image/jpeg;base64,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'
  
    },
    {
      id:1,
      title: 'Shrimp Pasta',
      price:'N1,800',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ioUZ5aQpRSga1aGIiA7q2CN8xr0T7IxT6w&s'
  
    },
    {
      id:2,
      title: 'Vegetable Curry',
      price:'N1,200',
      image:'data:image/jpeg;base64,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'
  
    },
    {
      id:3,
      title: 'Mixed Salad',
      price:'N1,500',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsaRfY4bN_dfVk5AbsALPTXANoly8tlXbcw&s'
  
    },
    {
      id:4,
      title: 'Chicken Pasta Salad',
      price:'N1,500',
      image:'https://kalejunkie.com/wp-content/uploads/2023/08/KJ_Chicken-Caesar-Pasta-Salad-5.jpg'
  
    },
    {
      id:5,
      title: 'Beef Salad',
      price:'N1,200',
      image:'https://www.thespruceeats.com/thmb/2GoDt7juuaU7lxtQDq-_IjEr6t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-our-favorite-simple-green-salad-recipe-7370448-hero-01-4ca9788a0a3c4d53b70f1d07f8382b7f.jpg'
  
    },
   
 

  ]
  export default Food;