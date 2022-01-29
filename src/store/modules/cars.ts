import { cars } from "@/api/apiCars";
import { clients } from "@/api/apiClients";

export default {
  state: {
    cars: cars,
  },

  mutations: {
    setCars(state) {
      state.cars.filter((car) => {
        clients.forEach((client) => {
          if (car.id === client.idCar) {
            car.clients = client.clients;
          }
        });
      });
    },

    addCar(state, carData) {
      state.cars.push(carData);
    },

    deleteCar(state, carIndex) {
      state.cars.splice(carIndex, 1);
    },

    saveEditedData(state, carData) {
      state.cars.forEach((item) => {
        let brand = carData.brand !== "" ? carData.brand : item.brand;
        let model = carData.model !== "" ? carData.model : item.model;
        let numberPlate = carData.numberPlate !== "" ? carData.numberPlate : item.numberPlate;

        if (item.id === carData.id) {
          item.title = brand;
          item.description = model;
          item.numberPlate = numberPlate;
        }
      });
    },
  },

  getters: {
    getCars: (state) => state.cars,
  },
};
