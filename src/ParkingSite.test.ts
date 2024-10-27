import { defaultBays } from "./ParkingSite.data";
import { ParkingSite } from "./ParkingSite";

test("All bays required", () => {
  const parkingSite = new ParkingSite(defaultBays);

  const suitableBays = parkingSite.findContiguousBays(65);

  expect(suitableBays.length).toBe(1);
});

test("Not enough bays", () => {
  const parkingSite = new ParkingSite(defaultBays);

  const suitableBays = parkingSite.findContiguousBays(66);

  expect(suitableBays.length).toBe(0);
});

test("Correct number of bays for 25m vehicle", () => {
  const parkingSite = new ParkingSite(defaultBays);

  const suitableBays = parkingSite.findContiguousBays(25);

  expect(suitableBays.length).toBe(6);
});
