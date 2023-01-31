import { Button } from "../../../lib/components"
import { BikeOptionsStyled } from "./bikeOptions.styled"
import { BikeCard } from "./components/bikeCard"

import ImageNqiSport from "../../../assets/images/bikes/nova_sport.webp"
import ImageNqiGts from "../../../assets/images/bikes/niu_nqi_gts.webp"
import ImageSuperSoco from "../../../assets/images/bikes/super_soco_new_ts.webp"

const BikeOptions = () => {
  const cards = [
    {
      name: "NIU NQi Sport",
      image: ImageNqiSport,
      voltage: "1500 W -> 50 cc",
      maxSpeed: "máx. 60 km/h",
      autonomy: "60 km de autonomia"
    },
    {
      name: "NIU NQi GTS",
      image: ImageNqiGts,
      voltage: "3000 W -> 110cc",
      maxSpeed: "máx. 85 km/h",
      autonomy: "80 km de autonomia"
    },
    {
      name: "Super Soco New TS",
      image: ImageSuperSoco,
      voltage: "2500 W -> 100cc",
      maxSpeed: "máx. 75 km/h",
      autonomy: "90 km de autonomia"
    }
  ]

  return (
    <BikeOptionsStyled>
      <h3>Escolha a melhor moto para você</h3>

      <div className="bikeOptions__cardsContainer">
        {cards?.map((item, index) => (
          <BikeCard key={item.name + index} item={item} />
        ))}
      </div>

      <Button text="Ver preços" goTo="prices" />
    </BikeOptionsStyled>
  )
}

export default BikeOptions