let products = [
    {
        name: 'Mangoes',
        category: 'fruits'
    },
    {
        name: 'Apples',
        category: 'fruits'
    },
    {
        name: 'Bananas',
        category: 'fruits'
    },
    {
        name: 'Oranges',
        category: 'fruits'
    },
    {
        name: 'Grapes',
        category: 'fruits'
    },
    {
        name: 'Kales',
        category: 'vegetables'
    },
    {
        name: 'Onions',
        category: 'vegetables'
    },
    {
        name: 'Tomatoes',
        category: 'vegetables'
    },
    {
        name: 'Cabbages',
        category: 'vegetables'
    },
    {
        name: 'Spinach',
        category: 'vegetables'
    },
    ];
    
    function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        return filteredProducts;
    }
    return products;
    }
    
    GreensKiosk = {
    getItems: getItems
    };

    module.exports = GreensKiosk;
    
   