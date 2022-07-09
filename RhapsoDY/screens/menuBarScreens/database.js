//sample database for listing products
export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Blue woolen sweater',
      productPrice: 20,
      description:
        'Woolen sweater',
      isOff: false,
      productImage: require('./sweater.png'),
      isAvailable: true,
      productImageList: [
        require('./sweater.png'),
        require('./sweater.png'),
        require('./sweater.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Khaki blazer jacket',
      productPrice: 50,
      description:
        'Second-hand khaki blazer jacket for men, size M',
      isOff: false,
      productImage: require('./blazer.png'),
      isAvailable: true,
      productImageList: [
        require('./blazer.png'),
        require('./blazer.png'),
        require('./blazer.png'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'Overall slip on',
      productPrice: 35,
      description:
        'Material: Denim, Size: Euro 8',
      isOff: false,
      productImage: require('./overalls.png'),
      isAvailable: true,
      productImageList: [
        require('./overalls.png'),
        require('./overalls.png'),
        require('./overalls.png'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Flutter Skirt',
      productPrice: 59,
      description:
        'Flutter skirt for women, second hand from Unix',
      isOff: false,
      productImage: require('./flutter.png'),
      isAvailable: true,
      productImageList: [
        require('./flutter.png'),
        require('./flutter.png'),
        require('./flutter.png'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Office Shirt',
      productPrice: 30,
      description:
        'Formal shirt for office goers - men .',
      isOff: false,
      productImage: require('./office.png'),
      isAvailable: false,
      productImageList: [
        require('./office.png'),
        require('./office.png'),
        require('./office.png'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Denim shorts',
      productPrice: 29,
      description:
        'Flexi denim shorts for women',
      isOff: false,
      productImage: require('./denim.png'),
      isAvailable: true,
      productImageList: [
        require('./denim.png'),
        require('./denim.png'),
        require('./denim.png'),
      ],
    },
  ];