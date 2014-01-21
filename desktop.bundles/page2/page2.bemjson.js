({
    block: 'page',
    title: 'Menu',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_page2.css', ie: false },
        { elem: 'css', url: '_page2.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'menu',
            content: [
                {
                    title: 'Index',
                    isSelected: false,
                },
                {
                    title: 'Products',
                    isSelected: true
                },
                {
                    title: 'Contact',
                    isSelected: false
                }
            ].map(function(item){
                var block = {
                    block: 'menu',
                    elem: 'item',
                    content: item.title,
                    mods: {
                        selected: item.isSelected
                    }
                };
                return block;
            })
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { elem: 'js', url: '_page2.js' }
    ]
})
