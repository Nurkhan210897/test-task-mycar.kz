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
    },
    deleteCar(state, carIndex){
      state.cars.splice(carIndex, 1)
    },

    saveEditedData(state, carData){
      console.log(carData);
    }
  },

  getters: {
      getCars: state => state.cars
  },
};
