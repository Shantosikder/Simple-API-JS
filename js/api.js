const shop = {
    owner: 'shanto sikder',
    name:'shopno outlet',
    location: 'Mirpur-6',
    contact: '0179951485',
    product: ['mac','murgi','chal','dal'],
    stapName:{
        manager: 'Aboul',
        Casher: 'Babul',
        helpar: 'chabul'
    },
    revinue: '23849809',
    isOpen: true,
    isNew: false
}

// console.log(shop);
const jsonStringify = JSON.stringify(shop);
const jsonStringify2 = JSON.parse(jsonStringify);

console.log(jsonStringify);
console.log(jsonStringify2);