import { defaultBays } from "./ParkingSite.data";
import { ParkingSite } from "./ParkingSite";

test("Test Something", () => {
  const parkingSite = new ParkingSite(defaultBays);

  const suitableBays = parkingSite.findContiguousBays(10);

  console.log("!!suitableBays", suitableBays);

  expect(true).toBe(true);
});
