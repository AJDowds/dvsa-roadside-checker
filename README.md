## High Level

Finds contiguous bays which can accommodate the specified vehicle (i.e. combined bay lengths are equal to or greater than the length of the vehicle)

## Logic

- Iterate over each bay in the outer loop (starting point for each check)
  - Initialise currentLength and contiguousBays which will be updated on each inner loop iteration
- Iterate over each bay in the inner loop (check each bay beginning at the starting point)
  - If the current length (accumulated from the starting position to the current bay) is greater than vehicle length, add these cotiguous bays to the availableBays array.
- Return the array of possible bay arrays

## Future Improvements

- Reservation mechanism to avoid collisions on bays which are available at the point of request but not at the point of use.
