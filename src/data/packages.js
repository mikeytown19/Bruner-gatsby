import Money from '../images/icons/icon-money.svg'
import Video from '../images/icons/icon-video.svg'
import Hands from '../images/icons/icon-hands.svg'
import Bell from '../images/icons/icon-bell.svg'
const PackageData = [
  {
      "name": "Pamantha",
      "price":"30",
      "priceCents": "00",
      "priceDisc":"$5/mo after we’re best friends",
      "feature":true,
      "details": [
         {
          "icon": `${Bell}`,
          "text":"Free Change Service",
          "subText": "Need to break a $20? We can help."
        },
         {
          "icon":`${Video}`,
          "text":"Video Suggestions",
          "subText": "We’ll send you hilarious youtube clips"
        },
         {
          "icon": `${Hands}`,
          "text":"Complimentary Claps",
          "subText": "Included at no additional cost"
        }
      ]
    },
    {
      "name": "EL TEN ELEVEN",
      "price":"50",
      "priceCents": "00",
      "priceDisc":"$700/mo after you’re officially rich",
      "feature":null,
      "details": [
         {
          "icon":`${Bell}`,
          "text":"Patriotic Media",
          "subText": "Consume any patriotic content for free.*"
        },
         {
          "icon":`${Video}`,
          "text":"Jurassic Park Channel",
          "subText": "Channel 345 plays Jurassic Park all day "
        },
         {
          "icon": `${Hands}`,
          "text":"Chip Bag Service",
          "subText": "Stubborn bag of chips? We can help. "
        }
      ]

    },
    {
      "name": "ST. Jimmy’s Special",
      "price":"70",
      "priceCents": "00",
      "priceDisc":"$11/mo after you’ve proven worthy",
      "feature":null,
      "details": [
         {
          "icon":`${Video}`,
          "text":"Raft Jousting Channel",
          "subText": "Catch all the RJA action in one place!"
        },
         {
          "icon": `${Bell}`,
          "text":"Reptile Disease Network",
          "subText": "Snakes with warts? Look no further"
        },
         {
          "icon": `${Money}`,
          "text":"Broken Faucet Repair",
          "subText": "Anytime day or night.** "
        }
      ]

    },
    {
      "name": "Cult Hero Classic",
      "price":"100",
      "priceCents":"00",
      "priceDisc":"-$1/mo after you demonstrate loyalty",
      "feature":null,
      "details": [
         {
          "icon": `${Bell}`,
          "text":"Gaming Currency",
          "subText": "We now accept Mario and Sonic coins."
        },
         {
          "icon":`${Bell}`,
          "text":"Landline Service",
          "subText": "Crystal clear calls to Grandma."
        },
         {
          "icon": `${Hands}`,
          "text":"Shuttlecock Recovery",
          "subText": "We will retrieve stray shuttlecocks at your next badminton match.†"
        }
      ]

    }
  ]

  export default PackageData
