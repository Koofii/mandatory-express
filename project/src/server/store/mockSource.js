const products = [
    {
        id: 1,
        name: 'JS 101',
        category: 'book'
    },
    {
        id: 2,
        name: 'Avancerad JS',
        category: 'book'
    }
];
const posts = [
    {
        id: 1,
        name: 'kooooofiiie',
        description: 'fiddy krona'
    },
    {
        id: 2,
        name: 'Robert',
        description: 'hundra krona'
    },
    {
        id: 3,
        name: 'POSTING IS LUL',
        description: 'ne lul ez'
    },
    {
        id: 4,
        name: 'hehehehehehehehehehhehe',
        description: 'ex utbildning'
    }
]

class mockSource {
    getPosts(){
        return Promise.resolve(posts)
    }
    getPost(id){
        return new Promise((resolve, reject) => {
            const found = posts.find(post => post.id === id);
            found ? resolve(found) : reject();
        })
    }

    addPost(productData){
        const lastIndex = posts.length - 1;
        const lastId    = posts[lastIndex].id;
        const newPost = {
            id: lastId +1,
            name: productData.name,
            description: productData.description,
            price: productData.price
        }
        posts.push(newPost)
        return Promise.resolve(newPost)
    }
    deletePost(deleteId){

        const obj = posts.find(function(obj){
            return obj.id === deleteId;
        })

        posts.splice(obj.id - 1, 1)

        return Promise.resolve({posts});
    }
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === +id); // + är vad? Kika..
            found ? resolve(found) : reject();
        });

    }

    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId    = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);

        return Promise.resolve(newProduct);
    }

}

module.exports = mockSource;