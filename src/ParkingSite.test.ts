import { defaultBays } from "./ParkingSite.data";
import { ParkingSite } from "./ParkingSite";

test("Test Something", () => {
  const parkingSite = new ParkingSite(defaultBays);

  console.log("!!parkingSite", parkingSite);

  expect(true).toBe(true);
});
