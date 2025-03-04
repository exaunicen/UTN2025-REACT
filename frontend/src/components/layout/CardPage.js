import Card from "./Card";
import CasaAlLago from "../../assets/img/CasaAlLago.jpg";
import MansionConPileta from "../../assets/img/MansionConPileta.jpg";
import CasaDiseñoModerno from "../../assets/img/CasaDiseñoModerno.jpg";
import CasaBarrioResidencial from "../../assets/img/CasaClasica.jpg";
import CasaLadrillos from "../../assets/img/CasaLadrillosVistos.jpg";
import CasaNocturna from "../../assets/img/CasaVistaqNocturna.jpg";

const houses = [
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
  {
    id: 4,
    title: "Casa en Barrio Residencial",
    imagen: CasaBarrioResidencial,
    description:
      "Casa en barrio residencial, 3 Habitaciones, 2 baños, 2 plantas, 1 cochera, 200 m2.",
    price: "U$A 150000",
  },
  {
    id: 5,
    title: "Casa con Ladrillos Vistos",
    imagen: CasaLadrillos,
    description:
      "Casa con ladrillos vistos, 4 Habitaciones, 3 baños, 2 plantas, 2 cocheras, 250 m2.",
    price: "U$A 180000",
  },
  {
    id: 6,
    title: "Casa con Vista Nocturna",
    imagen: CasaNocturna,
    description:
      "Casa con vista nocturna, 5 Habitaciones, 4 baños, 3 plantas, 3 cocheras, 300 m2.",
    price: "U$A 250000",
  },
];

function CardPage() {
  return (
    <div className="row">
      {houses.map((house) => (
        <div className="col-md-4" key={house.id}>
          <Card
            title={house.title}
            imagen={house.imagen}
            description={house.description}
            price={house.price}
          />
        </div>
      ))}
    </div>
  );
}
export default CardPage;
