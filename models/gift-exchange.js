// const { copy } = require("../routes/gift-exchange")

const express = require("express")
const { route } = require("../routes/gift-exchange")
const router = express.Router()

class GiftExchange{

    static pairs(names){
        try{
            if(names.length % 2 == 1){
                throw new invalidArraySizeError("The number of names cannot be odd")
            }
            let currentIndex  = names.length
            let randomIndex

            while(currentIndex != 0){

                randomIndex = Math.floor(Math.random() * currentIndex)

                [names[currentIndex], names[randomIndex]] = [names[randomIndex], names[currentIndex]]

                let pairs = []

                for(let i = 0; i < names.length; i+= 2){
                    pairs.push([names[i], names[i+1]])
                }
                console.log(pairs)

                return pairs
            }
        }
        catch(e){
            console.log(e.message)
        }
    }

    static traditional(names){

        let arr1 = [...names]
        let arr2 = [...names]

        arr1.sort(function (a, b){
            return 0.5 - Math.random()
        })

        arr2.sort(function (a, b){
            return 0.5 - Math.random()
        })

        let array = []

        while(arr1.length != 0 && arr2.length != 0){
            let element1 = arr1.pop()
            let element2 = arr2[0]

            if(element1 == element2){
                element2 = arr2.pop()
            }

            array.push(`${element1} is gifting ${element2}`)
        }

        return array
    }

}
router.get("/pairs", async(req, res, next) => {
    res.status(200).json(pairs)
})

router.get("/traditional", async(req, res, next) => {
    res.status(200).json(traditional)
})

module.exports = router