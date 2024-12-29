const assets = [
    import('./zero.svg?raw'),
    import('./one.svg?raw'),
    import('./two.svg?raw'),
    import('./three.svg?raw'),
    import('./four.svg?raw'),
    import('./five.svg?raw'),
    import('./six.svg?raw'),
    import('./seven.svg?raw'),
    import('./eight.svg?raw'),
    import('./nine.svg?raw'),
    import('./ten.svg?raw'),
    import('./eleven.svg?raw'),
    import('./twelve.svg?raw')
]

Promise.all(assets);

export default assets;