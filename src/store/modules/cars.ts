import { cars } from "@/api/apiCars";
import { clients } from "@/api/apiClients";

export default {
  state: {
    cars: cars
  },

  mutations: {
    setCars(state) {
      state.cars.filter((car) => {
        clients.forEach((client) => {
          if (car.id === client.idCar) {
            car.clients = client.clients
          }
        });
      });
    },
    addCar(state, carData){
        state.cars.push(carData)        
    }
  },

  getters: {
      getCars: state => state.cars
  },
};
