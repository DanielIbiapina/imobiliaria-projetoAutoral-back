import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.property.createMany({
    data: [
      {
        rooms: 2,
        bathrooms: 2,
        parkingSpaces: 2,
        area: 130,
        address: "Av. Raul Lopes",
        name: "Villa Mediterrâneo",
        image:
          "https://imgbr.imovelwebcdn.com/avisos/2/10/03/40/44/07/720x532/742202719.jpg",
        price: "185.000",
      },
      {
        rooms: 1,
        bathrooms: 1,
        parkingSpaces: 2,
        area: 20,
        address: "R. 3",
        name: "Lugar Z",
        image:
          "https://patrimoniodi.com.br/wp-content/uploads/2019/02/smile-morada-do-sol-10.jpg",
        price: "524.000",
      },
      {
        rooms: 2,
        bathrooms: 3,
        parkingSpaces: 4,
        area: 240,
        address: "R. 2",
        name: "Lugar Y",
        image:
          "https://s2.glbimg.com/CO-pj6-63YJTa6phDOOQibfUvkg=/smart/e.glbimg.com/og/ed/f/original/2019/08/01/rubens-barrichello-mansao-01.jpg",
        price: "185.000",
      },
      {
        rooms: 1,
        bathrooms: 2,
        parkingSpaces: 2,
        area: 230,
        address: "R. 1",
        name: "Lugar X",
        image:
          "https://img3.idealista.pt/blur/WEB_LISTING-M/0/id.pro.pt.image.master/06/ef/4a/210507169.jpg",
        price: "185.000",
      },
      {
        rooms: 4,
        bathrooms: 5,
        parkingSpaces: 5,
        area: 130,
        address: "R. Valdemar Martins",
        name: "Pituchinha",
        image:
          "https://scontent.123i.com.br/photo/catalog/15941708b80995d1f145bda1a7d00758/images/731x501/cb70f85384887b8132735e6a63e08c14.jpg",
        price: "2.555.000",
      },
      {
        rooms: 4,
        bathrooms: 5,
        parkingSpaces: 4,
        area: 130,
        address: "Av. Socopo",
        name: "Aldebaran",
        image:
          "https://meuimobiliario.com/wp-content/uploads/2022/01/Casa-Aldebaran-Ville-1.jpg",
        price: "2.555.000",
      },
      {
        rooms: 3,
        bathrooms: 2,
        parkingSpaces: 1,
        area: 130,
        address: "Av. Cafe del Mar",
        name: "Liz Medeiros",
        image:
          "http://imoveisnopiaui.com/media/images/1-fachada-liz-medeiros-condominium_389.jpg",
        price: "2.555.000",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Registro feito com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
