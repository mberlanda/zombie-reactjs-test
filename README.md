# Zombie ReactJS Test

This is a very basic NodeJS Express app where I am trying to test pages unsing [Mocha](https://mochajs.org/) and [Zombie](http://zombie.js.org/).


If I put in the home page the [helloworld example](https://facebook.github.io/react/docs/getting-started.html) from ReactJS documentation, the tests fail due to timeout error.

The first working solution is to specify the timeout inside the test itself, but it is not really suitable for testing purposes.  