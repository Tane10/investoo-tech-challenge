# Tech test notes

- [Tech test notes](#tech-test-notes)
  - [My approach](#my-approach)
  - [Testing](#testing)
  - [If I had more time](#if-i-had-more-time)
  - [How to improve the API](#how-to-improve-the-api)

## My approach

My approach was to use left-hand side [LHS] bracketing because it is easy to read and easy to use and doesn't require any special characters escaping.

I picked the `property is greater/less than/equal to X` to focus on. I made some assumptions with the data to make the logic more simple.
I assumed that any array in the offers data will only contain strings and that greater or less that will never need to be applied to an array type.

I didn't have enough time to add it to the frontend or write tests.

## Testing

1. It should return offers that have coins that contain "AE" -> /offers?coins[eq]=AE
2. It should return offers that have a star rating greater than 50 -> /offers?starRating[gt]=50
3. It should return offer that have a position less than 6 -> /offers?position[lt]=6
4. It should be able to handle multiple query parameters and return a valid offer array -> /offers?coins[eq]=AE&starRating[gt]=50&position[lt]=6
5. It should return all offers if no query parameters in URL  -> /offers?

## If I had more time

- I would have implemented the frontend part of the test
- Looked into how to clean the API up and move it more into classes, so if the API was to expand and had more services I could use dependency injection  making the classes separate from their dependencies
- Created a Query filter class to handle filtering and added it as middle wear, passing a DB query to the route allowing data to be filtered upfront

## How to improve the API

If time/budget isn't an issue and the API needed to be very fast, I would use a language like RUST to create a data processing module that the API could use to allow much faster data processing. As well as that I would add a cache to the data filtering step allowing faster data retrieval if a user wanted to repeatedly filter the same block of data.
