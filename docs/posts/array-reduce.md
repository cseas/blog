---
title: "How to use Array.reduce() in TypeScript"
date: "2024-12-22"
cover: "/covers/typescript.avif"
---

I recently bumped into a use case where I had an array of objects, similar to the one below:

```ts
const dataArray: Data[] = [
  { a: true, b: 1 },
  { a: false, b: 2 },
  { a: true, b: 1 },
];
```

The requirement is to get all the index positions of the array where a key is equal to a particular value. For example, we'd like to get all the indexes where the key `a` is `true`.

This can be done in TypeScript with `Array.prototype.reduce()` as follows:

```ts
function getIndexes(dataArray: Data[]): number[] {
  return data.reduce<number[]>((arr, obj, index) => {
    if (obj.a) {
      arr.push(index);
    }
    return arr;
  }, []);
}
```

Let's understand what is happening here.

The `Array.reduce()` function takes 2 parameters.

1. A reducer function.
2. Optionally, an initial value of the _accumulator_. If a value is not provided, the `reduce()` function uses the first element of the array as the initial value of the accumulator.

> Note: The type of the accumulator should be defined in the function signature as a generic as shown above.

The _reducer_ function passed as the first parameter above uses 3 parameters:

1. **accumulator**: The previous value of the accumulator.
2. **currentValue**: The current value being processed in the array.
3. **index**: The index of the current value being processed.

Here's how the reducer function used in the example works:

- The initial value of the accumulator is initialized to an empty array. The accumulator is the value which will eventually contain our result at the end of the processing.
- For every element in the array, we check if the element has a key "a" that is true. If yes, we push the index of that element in the accumulator array and return the resulting array for use in the iteration for the next element until we're done walking through the whole original `data` array.
- Finally, the accumulator will contain the list of all the indexes that satisfy the given condition, which is value ultimately returned from our custom `getIndexes()` function.

> Have questions? [Discuss on Twitter][1]

### References

- [MDN Web Docs: Array.prototype.reduce()][2]

[1]: https://twitter.com/cse_as
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
