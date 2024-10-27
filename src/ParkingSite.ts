export interface ParkingBay {
  id: string;
  length: number;
}

export class ParkingSite {
  private bays: ParkingBay[];

  constructor(bays: ParkingBay[]) {
    this.bays = bays;
  }

  findContiguousBays(vehicleLength: number) {
    let possibleBays: ParkingBay[][] = [];

    for (let i = 0; i < this.bays.length; i++) {
      console.log("!!current bay:", this.bays[i]);

      if (vehicleLength <= this.bays[i].length) {
        possibleBays.push([this.bays[i]]);
      }
    }

    return possibleBays;
  }
}
