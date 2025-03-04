import Card from "./Card";
import CasaAlLago from "../../assets/img/CasaAlLago.jpg";
import MansionConPileta from "../../assets/img/MansionConPileta.jpg";
import CasaDiseñoModerno from "../../assets/img/CasaDiseñoModerno.jpg";

const cards = [
  {
    id: 1,
    title: "Casa de Lujo en el Lago",
    imagen: CasaAlLago,
    description:
      "Casa en el lago con excelente vista, acabados de lujo, 4 Habitaciones, 4 baños, 2 plantas, 2 cocheras, 300 m2.",
    price: "U$A 300000",
  },
  {
    id: 2,
    title: "Mansion con Pileta",
    imagen: MansionConPileta,
    description:
      "Mansion con pileta y parque, 5 Habitaciones, 5 baños, 3 plantas, 3 cocheras, 500 m2.",
    price: "U$A 500000",
  },
  {
    id: 3,
    title: "Casa Diseño Moderno",
    imagen: CasaDiseñoModerno,
    description:
      "Casa con diseño moderno, 3 Habitaciones, 2 baños, 2 planta, 1 cochera, excelente ubicacion, 150 m2.",
    price: "U$A 200000",
  },
];

function Cards() {
  return (
    <div className="row">
      {cards.map((card) => (
        <div className="col-md-4" key={card.id}>
          <Card
            title={card.title}
            imagen={card.imagen}
            description={card.description}
            price={card.price}
          />
        </div>
      ))}
    </div>
  );
}
export default Cards;
