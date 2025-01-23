import { Vehicle } from "./vehiculo";

export const vehicles: Omit <Vehicle,"type">[] = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, brand: "Honda", model: "Civic", year: 2019 },
    { id: 3, brand: "Ford", model: "Focus", year: 2021 },
    { id: 4, brand: "Chevrolet", model: "Malibu", year: 2018 },
    { id: 5, brand: "BMW", model: "3 Series", year: 2022 },
    { id: 6, brand: "Audi", model: "A4", year: 2020 },
    { id: 7, brand: "Mercedes", model: "C-Class", year: 2021 },
    { id: 8, brand: "Nissan", model: "Altima", year: 2022 },
    { id: 9, brand: "Hyundai", model: "Elantra", year: 2021 },
    { id: 10, brand: "Kia", model: "Optima", year: 2020 },
  ];

    export const enrichedVehicles: Vehicle[] = vehicles.map(vehicle => ({
      ...vehicle,
      type: "vehicle",
    }));