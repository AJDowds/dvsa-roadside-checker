export interface ParkingBay {
  id: string;
  length: number;
}

export class ParkingSite {
  private bays: ParkingBay[];

  constructor(bays: ParkingBay[]) {
    this.bays = bays;
  }

  findContiguousBays = () => {
    console.log("!!findContiguousBays");
  };
}
