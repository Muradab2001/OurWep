const x = document.querySelector('.x');
const pop = document.querySelector('.pop');
const stoppropa = document.querySelector('.stoppropa');
const html = document.querySelector('html');

Array.from(document.querySelectorAll('.cards > div')).forEach( item => {
    item.addEventListener('click', ac);
    item.classList.add('card');
})

stoppropa.addEventListener('click', e => { e.stopPropagation() });

pop.addEventListener('click', bagla);

x.addEventListener('click', bagla);


function ac() {
    pop.classList.remove('hidden');
    pop.classList.add('flex');
    html.style.overflowY = 'hidden';
    OkuCarusel()
}

addEventListener('resize', OkuCarusel)
addEventListener('resize', () => {
    // if (html.offsetWidth <= 1024) {
    //     if (html.offsetWidth <=)
    // }
    document.querySelector('.paragraph')
})

function OkuCarusel() {
    const carusel = document.querySelector('[data-type="carusel"]') // Carusel
    const main = document.querySelector('[data-type="main"]') // Top main box
    const bottom = document.querySelector('[data-type="bottom"]') // Bottom main box
    const okuCarScroll = document.querySelector('[data-OkuCar="scroll"]')
    const paragraph = document.querySelector('[data-okuCar="paragraph"]')
    bottom.innerHTML = ''
    const slider = document.querySelector('[data-type="slider"]') // Bottom main box 
    slider.innerHTML = ''
    const boxes = 3 // How many box in the bottom side
    let topImgHeight
    let bottomImgHeight
    let errorNum = 0
    let autoPos = 0
    let pos = 0
    let t
//          Changable Zone
    const url = [ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx18_Ns5JkA4LN4pDZ8mppYoIAPKDAl8rhpxQYlDtp&s' ,'https://hips.hearstapps.com/hmg-prod/images/happy-smiley-face-balloons-against-colorful-cotton-royalty-free-image-1677446093.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyMFLFl5zPd4jbBZY5pujz9gOH6mTWaMHrg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSot4LtM4Rd9YETY5dZ32BBdslr6Zqv8_dNnA&usqp=CAU' ] // Images for carusel
    const autoScrolling = 3000 // box to box scrolling timeout with (ms)
    let w = 692
    if (html.offsetWidth <= 764) {
        w = 413
        if (html.offsetWidth <= 425) {
            w = 259
        }
    }
    let topHeight = 320 // The height of the top
    let bottomHeight =  119 // The height of the bottom

    if (html.offsetWidth <= 768) {
        topHeight = 235
        bottomHeight =  62.5
    }



    const topGap = 4 // The gap of the top the between boxes with (px)
    const bottomGap = 4 // The gap of the top the between boxes with (px)
    const betweenGap = 20 // The gap of between top and bottom with (px)
    const bottomBorderRadius = 20 // The border radius of the bottom imgs with (px)
    const topBorderRadius = 20 // The border radius of the bottom imgs with (px)
    const timer = 3000 // 


    main.style.height = topHeight + 'px'
    bottom.style.height = bottomHeight + 'px'

    const createShadow = document.createElement('div')
    // const createMarginFirst = document.createElement('div')
    // const createMarginLast = document.createElement('div')
    // createMarginFirst.setAttribute('data-item', 'margin')
    // createMarginLast.setAttribute('data-item', 'margin')
    createShadow.setAttribute('data-shadow', '')

    createBottomSlideFirst = document.createElement('div')
    createBottomSlideFirst.setAttribute('data-type', 'bottomSlide')
    createBottomSlideFirst.setAttribute('data-queue', 'first')
    createBottomSlideSecond = document.createElement('div')
    createBottomSlideSecond.setAttribute('data-type', 'bottomSlide')
    createBottomSlideSecond.setAttribute('data-queue', 'second')
    createBottomSlideLast = document.createElement('div')
    createBottomSlideLast.setAttribute('data-type', 'bottomSlide')
    createBottomSlideLast.setAttribute('data-queue', 'last')

    createTopSlideFirst = document.createElement('div')
    createTopSlideFirst.setAttribute('data-type', 'topSlide')
    createTopSlideFirst.setAttribute('data-queue', 'first')
    createTopSlideSecond = document.createElement('div')
    createTopSlideSecond.setAttribute('data-type', 'topSlide')
    createTopSlideSecond.setAttribute('data-queue', 'second')
    createTopSlideLast = document.createElement('div')
    createTopSlideLast.setAttribute('data-type', 'topSlide')
    createTopSlideLast.setAttribute('data-queue', 'last')

    bottom.append(createShadow)
    bottom.append(createBottomSlideFirst)
    bottom.append(createBottomSlideSecond)
    bottom.append(createBottomSlideLast)
    slider.append(createTopSlideFirst)
    slider.append(createTopSlideSecond)
    slider.append(createTopSlideLast)

    const bottomSlide = Array.from(document.querySelectorAll('[data-type="bottomSlide"]'))
    const topSlide = Array.from(document.querySelectorAll('[data-type="topSlide"]'))

    bottomSlide.forEach((item) => {
        item.style.display = 'flex'
        item.style.gap = bottomGap + 'px'
    })

    topSlide.forEach((item) => {
        item.style.display = 'flex'
        item.style.gap = topGap + 'px'
    })

    bottomSlide.forEach((mainItem) => {
        url.forEach((item) => {
            let newElement = document.createElement('div')
            newImg = document.createElement('img')
            newElement.setAttribute('data-item', 'bottom')
            newImg.setAttribute('src', item)
            newElement.append(newImg)
            mainItem.append(newElement)
        })
    })

    topSlide.forEach((mainItem) => {
        url.forEach((item) => {
            let newElement = document.createElement('div')
            newImg = document.createElement('img')
            newElement.setAttribute('data-item', 'top')
            newImg.setAttribute('src', item)
            newElement.append(newImg)

            mainItem.append(newElement)
        })
    })

    const bottomItems = Array.from(document.querySelectorAll('[data-item="bottom"]')) // Bottom items
    const shadow = document.querySelector('[data-shadow]') // The shadow of the bottom box
    shadow.classList.add('shadow-okuCarusel')
    // const margin = Array.from(document.querySelectorAll('[data-item="margin"]')) // Margins 
    const topItems = Array.from(document.querySelectorAll('[data-item="top"]')) // Bottom items

    carusel.style.gap = betweenGap + 'px'
    shadow.style.right = 0 + 'px'
    main.style.width = w + 'px'
    main.style.borderRadius = topBorderRadius + 'px'
    slider.style.gap = topGap + 'px'
    bottom.style.gap = bottomGap + 'px'
    bottom.style.borderRadius = bottomBorderRadius + 'px'
    bottom.style.width = w + 'px'

    const boxW = ((bottom.offsetWidth - ((boxes - 1) * bottomGap)) / boxes)
    
    bottom.addEventListener('scroll', scrolling)
    t = setInterval(scrolling, timer, 'auto')

    topItems.forEach((item) => {
        const img = item.querySelector('img')
        item.style.minHeight = topHeight + 'px'
        item.style.maxHeight = topHeight + 'px'
        img.style.minWidth = `${w}px`
        img.style.maxWidth = `${w}px`
        img.style.minHeight = topHeight + 'px'
        img.style.maxHeight = topHeight + 'px'
        img.style.objectFit = 'cover'
        img.style.borderRadius = topBorderRadius + 'px'
        topImgHeight = img.offsetHeight
    })
    bottomItems.forEach((item) => {
        const img = item.querySelector('img')
        img.style.minWidth = `${boxW}px`
        img.style.maxHeight = bottomHeight + 'px'
        img.style.minHeight = bottomHeight + 'px'
        item.style.minHeight = bottomHeight + 'px'
        item.style.maxHeight = bottomHeight + 'px'
        img.style.objectFit = 'cover'
        img.style.borderRadius = bottomBorderRadius + 'px'
        item.classList.add('snap-always', 'snap-center') 
        item.style.shrink = 0
        bottomImgHeight = img.offsetHeight
    })

    bottom.scrollLeft = (boxW * (url.length - 1 )) + (url.length * 4)


    function scrolling(auto) {
        if ( bottom.scrollLeft < (boxW * (url.length - 2)) + ((url.length - 2) * bottomGap)) {
            bottom.style.scrollBehavior = null
            bottom.scrollLeft = (boxW * (url.length + url.length - 2)) + ((url.length + url.length - 2) * bottomGap)
        }
        else if ( bottom.scrollLeft > (boxW * (url.length + url.length - 2)) + ((url.length + url.length - 2) * bottomGap)) {
            bottom.style.scrollBehavior = null
            bottom.scrollLeft = (boxW * (url.length - 2)) + ((url.length - 2) * bottomGap)
        }
        
        if (auto != 'auto') {
            clearInterval(t)
            bottom.style.scrollBehavior = null
            if ( (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) && Math.trunc(bottom.scrollLeft) % 2 == 1 ) {
            errorNum = 0.5
            }
            else if ( (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) && Math.trunc(bottom.scrollLeft) % 2 == 0 ) {
                errorNum = -0.5
            }
            pos = (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) ? (bottom.scrollLeft * (((w + topGap) / (boxW + bottomGap)) * -1)) + errorNum : bottom.scrollLeft * (((w + topGap ) / (boxW + bottomGap)) * -1)
            slider.style.left = (pos - w - topGap) + 'px'
            shadow.style.right = (bottom.scrollLeft * -1) + 'px'
            autoPos = bottom.scrollLeft
            t = setInterval(scrolling, timer, 'auto')
        }
        else {
            bottom.style.scrollBehavior = 'smooth'
            autoPos = bottom.scrollLeft
            autoPos += boxW
            if (bottom.scrollLeft >= (boxW * (url.length + url.length - 2)) + ((url.length + url.length - 2) * bottomGap)) {
                bottom.style.scrollBehavior = null
                bottom.scrollLeft = (boxW * (url.length - 2)) + ((url.length - 2) * bottomGap)
                autoPos = bottom.scrollLeft
                autoPos += boxW
                bottom.style.scrollBehavior = 'smooth'
                bottom.scrollLeft = autoPos
            }
            else {
                bottom.scrollLeft = autoPos
            }
            
        }
    }

    carusel.style.width = 100 + '%'
    main.style.width = w
    main.style.height = topImgHeight + 'px'
    slider.style.position = 'absolute'

    paragraph.style.maxHeight = okuCarScroll.offsetHeight + 'px'
    console.log(paragraph.offsetHeight);

    }
    function bagla() {
        pop.classList.remove('flex');
        pop.classList.add('hidden');
        html.style.overflowY = 'inherit';
    }