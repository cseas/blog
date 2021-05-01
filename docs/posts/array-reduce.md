---
title: "How to use Array.reduce() in TypeScript"
date: "2021-04-27"
---

I recently bumped into a use case where I had an array of objects, similar to the one below:

```js
const dataArray: Data[] = [
  { a: true, b: 1 },
  { a: false, b: 2 },
  { a: true, b: 1 },
];
```

The problem is to get all the index positions of the array where a key is equal to a particular value. For example, we'd like to get all the indexes where the key `a` is `true`.

This can be done in TypeScript with `Array.prototype.reduce()` as follows:

```ts:getIndexes.ts
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

reducer: 3 parameters: accumulator, currentValue, index

_References_:

- [MDN Web Docs: Array.prototype.reduce()][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
