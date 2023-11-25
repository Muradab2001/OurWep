fnc()
        addEventListener('resize', fnc)

        function fnc() {
            const main = document.querySelector('[data-type="okuCar2"]')
            const helper = document.querySelector('[data-helper]')
            const okuCar2 = document.querySelector('[data-okuCar2]')
            const thumb = document.querySelector('[data-scroll]')
            const items = Array.from(document.querySelectorAll('[data-item="okuCar2"]'))
            const track = Array.from(document.querySelectorAll('[data-track]'))
            const htmlW = document.querySelector('html').offsetWidth
//          Changeable zone
            const gap = 40
            const boxBorderRadius = '20px'


            let trackW = 600

            if (htmlW <= 650) {
                trackW = htmlW - 50
            }

            let box = 4
            if (htmlW <= 1024) {
                box = 3
                if (htmlW <= 768) {
                    box = 2
                    if (htmlW <= 425) {
                        box = 1
                    }
                }
            }

            

            track.forEach((item) => {
                item.style.width = trackW + 'px'
            })

            

            const artiq = (((okuCar2.offsetWidth / box) - gap) + gap / box) * (items.length - box) + ((items.length - box) * gap) // Artiq qalanin uzunlugu
            const umumi = okuCar2.offsetWidth + (((okuCar2.offsetWidth / box) - gap) + gap / box) * (items.length - box) + ((items.length - box) * gap)

            main.style.gap = gap + 'px'
            items.forEach((item) => {
                item.style.minWidth = (((okuCar2.offsetWidth / box) - gap) + gap / box) + 'px'
                item.style.backgroundColor = '#D8DEE2'
                item.style.borderRadius = boxBorderRadius
            })

            thumb.style.width = (okuCar2.offsetWidth / umumi * 100) + '%'
            thumb.style.width = thumb.offsetWidth + 'px'
            helper.style.width = (trackW - thumb.offsetWidth) + 'px'
            thumb.style.left = '0%'

            if (artiq == 0) {
                track.forEach((item) => {
                    item.style.display = 'none'
                })
                thumb.style.display = 'none'
            }
            else {
                track.forEach((item) => {
                    item.style.display = 'inherit'
                })
                thumb.style.display = 'inherit'
            }


            main.addEventListener('scroll', () => {
                thumb.style.left = ((main.scrollLeft / artiq) * 100) + '%'
            })
        } 