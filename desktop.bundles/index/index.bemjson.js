({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
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
            block: 'content',
            content: (function() {
                var res = [];
                for(var i = 0; i < 10; i++) {
                    res.push({
                        block: 'button',
                        content: 'Button ' + (i + 1)
                    });
                }
                return res;
            })()
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
