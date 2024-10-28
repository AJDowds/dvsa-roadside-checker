export interface ParkingBay {
  id: string;
  length: number;
}

export class ParkingSite {
  private bays: ParkingBay[];

  constructor(bays: ParkingBay[]) {
    this.bays = bays;
  }

  findContiguousBays(vehicleLength: number): ParkingBay[][] {
    let possibleBays: ParkingBay[][] = [];

    for (let i = 0; i < this.bays.length; i++) {
      let currentLength = 0;
      let contiguousBays: ParkingBay[] = [];

      for (let j = i; j < this.bays.length; j++) {
        const currentBay = this.bays[j];
        currentLength += currentBay.length;
        contiguousBays.push(currentBay);

        if (currentLength >= vehicleLength) {
          possibleBays.push([...contiguousBays]);
          break;
        }
      }
    }

    return possibleBays;
  }
}
