const products = [
    {
        id:'1',
        name:'Joystick xbox',
        price:'$5000',
        category:'joystick',
        stock:'2',
        image:'https://http2.mlstatic.com/D_NQ_NP_749977-MLA44330907675_122020-O.jpg',
        description:'game pad for play actually games'
    },
    {
        id:'2',
        name:'Joystick ps4',
        price:'$5000',
        category:'joystick',
        stock:'2',
        image:'https://www.necxus.com.ar/products_image/12014/1000x1000_1.jpg',
        description:'game pad for play actually games'
    },
    {
        id:'3',
        name:'Joystick redragon',
        price:'$5000',
        category:'joystick',
        stock:'2',
        image:'https://mexx-img-2019.s3.amazonaws.com/35355_1.jpeg',
        description:'game pad for play actually games'
    },
    {
        id:'4',
        name:'teclado',
        price:'$2000',
        category:'teclados',
        stock:'2',
        image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQ052?wid=4000&hei=1800&fmt=jpeg&qlt=95&.v=1495129815011',
        description:'Keyboard pad for play actually games'
    },
    {
        id:'5',
        name:'teclado',
        price:'$2000',
        category:'teclados',
        stock:'2',
        image:'https://mexx-img-2019.s3.amazonaws.com/39014_1.jpeg',
        description:'Keyboard pad for play actually games'
    },
    {
        id:'6',
        name:'mouse',
        category:'mouse',
        price:'$3500',
        stock:'2',
        image:'https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU458.jpg',
        description:'Mouse pad for play actually games'
    },

    {
        id:'7',
        name:'mouse',
        category:'mouse',
        price:'$3500',
        stock:'2',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0v51EQV2V5pwVHR0ypXOxjHWr5zPhQ3VnJQ&usqp=CAU',
        description:'Mouse pad for play actually games'
    },

    {
        id:'8',
        name:'teclado',
        category:'teclados',
        price:'$3500',
        stock:'2',
        image:'https://tecnocompro.com/pub/media/catalog/product/cache/f2fda30fa08589bc3d50957538fec3cf/1/_/1_13.png',
        description:'Mouse pad for play actually games'
    },
    
    {
        id:'9',
        name:'mouse',
        category:'mouse',
        price:'$3500',
        stock:'2',
        image:'https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187',
        description:'Mouse pad for play actually games'
    }
]


export const getProducts = ( categoryId )=>{
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products )
        }, 500)
    )
} 

export const getProduct = (id)=>{
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    )
} 

