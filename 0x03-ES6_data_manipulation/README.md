### JavaScript Arrays and Data Structures - Learning Objectives

This README will guide you through essential JavaScript concepts focused on data manipulation using array methods such as `map`, `filter`, and `reduce`, as well as Typed Arrays and advanced data structures like `Set`, `Map`, and `WeakMap`. By the end of this guide, you should have a strong grasp of these topics and be able to manipulate data effectively in your JavaScript projects.

---

## Table of Contents
1. [Array Methods for Data Manipulation](#array-methods-for-data-manipulation)
   - 1.1 [`map()` Method](#map-method)
   - 1.2 [`filter()` Method](#filter-method)
   - 1.3 [`reduce()` Method](#reduce-method)
2. [Typed Arrays](#typed-arrays)
3. [Advanced Data Structures](#advanced-data-structures)
   - 3.1 [`Set`](#set)
   - 3.2 [`Map`](#map)
   - 3.3 [`WeakMap`](#weakmap)
   - 3.4 [`WeakSet`](#weakset)
4. [Examples and Use Cases](#examples-and-use-cases)

---

## 1. Array Methods for Data Manipulation

### 1.1 `map()` Method
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Syntax:**
```javascript
let newArray = array.map(callback(currentValue[, index[, array]])[, thisArg])
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]
```

### 1.2 `filter()` Method
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**
```javascript
let newArray = array.filter(callback(element[, index[, array]])[, thisArg])
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
```

### 1.3 `reduce()` Method
The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

**Syntax:**
```javascript
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, x) => acc + x, 0); // 10
```

## 2. Typed Arrays

Typed Arrays provide a mechanism for accessing raw binary data in memory buffers, allowing for efficient manipulation of data types such as integers and floating-point numbers.

**Common Typed Arrays:**
- `Int8Array`, `Uint8Array`, `Uint8ClampedArray`
- `Int16Array`, `Uint16Array`
- `Int32Array`, `Uint32Array`
- `Float32Array`, `Float64Array`

**Example:**
```javascript
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
```

## 3. Advanced Data Structures

### 3.1 `Set`
A `Set` is a collection of unique values. It does not allow duplicate entries.

**Example:**
```javascript
const set = new Set([1, 2, 3, 4, 4]);
console.log(set); // Set { 1, 2, 3, 4 }
```

### 3.2 `Map`
A `Map` is a collection of key-value pairs where keys can be of any data type.

**Example:**
```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1
```

### 3.3 `WeakMap`
A `WeakMap` is similar to a `Map`, but keys must be objects, and they are weakly referenced, meaning they can be garbage-collected.

**Example:**
```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'
```

### 3.4 `WeakSet`
A `WeakSet` is similar to a `Set`, but its members must be objects, and they are weakly referenced.

**Example:**
```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
```

## 4. Examples and Use Cases

### Combining Methods
Using `map`, `filter`, and `reduce` together can achieve complex data manipulations efficiently.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .reduce((acc, x) => acc + x, 0); // 60
```

### Working with Typed Arrays
Typed Arrays are ideal when dealing with raw binary data, such as when processing images or sound files.

### Using `Set` and `Map`
`Set` is useful for eliminating duplicate values, while `Map` is great for storing keyed data with diverse key types.

