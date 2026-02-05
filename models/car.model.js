import { option } from "./option.model";

class Car{
    constructor(name, rentalPrice, transmitionType, carburantType) {
        this.name = name;
        this.rentalPrice = rentalPrice;
        this.transmitionType = transmitionType;
        this.option = option;
        this.carburantType = carburantType;
    }
}