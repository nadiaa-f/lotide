# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nadiaf/lotide`

**Require it:**

`const _ = require('@nadiaf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns an array
* `tail(...)`: returns an arrays
* `assertEqual(...)`: compares two values and prints out a message telling us if they match or not
* `assertArraysEqual(...)`: takes in two arrays and console.log an appropriate message to the console
* `eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match