/**
 * Mocking client-server processing
 */
const _products = [
    {
        'id': 1,
        'title': 'White T-Shirt',
        'price': 50.01,
        'inventory': 2,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.This is product detail line.This is product detail line.This is product detail line.'
    },
    {
        'id': 2,
        'title': 'Black Jacket',
        'price': 45.99,
        'inventory': 10,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.This is product detail line.This is product detail line.This is product detail line.'
    },
    {
        'id': 3,
        'title': 'Gucci Belt Bag',
        'price': 40.99,
        'inventory': 20,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.This is product detail line.This is product detail line.This is product detail line.'
    },
    {
        'id': 4,
        'title': 'Black Bootie',
        'price': 30.99,
        'inventory': 15,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.This is product detail line.This is product detail line.This is product detail line.'
    },
    {
        'id': 5,
        'title': 'Crop Top',
        'price': 29.99,
        'inventory': 5,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.'
    },
    {
        'id': 6,
        'title': 'Red Hat',
        'price': 29.99,
        'inventory': 12,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.'
    },
    {
        'id': 7,
        'title': 'Transparent Gloves',
        'price': 29.99,
        'inventory': 55,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.'
    },
    {
        'id': 8,
        'title': 'Black Crop T-shit',
        'price': 29.99,
        'inventory': 15,
        'image': 'https://avatars.mds.yandex.net/i?id=d8c5296c770e0453f52a1eaf42a31558-4935575-images-thumbs&n=13',
        'detail': 'This is product detail line.'
    }
]

export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 300)
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    },

    delete(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}