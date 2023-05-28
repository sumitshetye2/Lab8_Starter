# Lab 8 - Starter
## Sumit Shetye

1. I would fit automated tests in my Recipe project development pipeline within a Github action that runs whenever code is pushed, as running tests manually takes away time from the developer, and would be handled more efficiently via Gibhub actions.
2. I would not use end to end testing to check if a single function returns a correct output. 
3. I would not really use a unit test to test the "message" feature as described by the lab write-up. This sort of feature is almost entirely the bulk of a messaging application, so it would be best to do E2E testing.
4. I would use unit testing to test the max message length, as this type of checking is more localized, and should not interrupt the overall messaging feature.
