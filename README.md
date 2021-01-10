![](https://image.noelshack.com/fichiers/2020/34/3/1597846925-sans-titre-1.png)

![](https://img.shields.io/github/manifest-json/v/FoobarIT/browser-token.js?style=for-the-badge) ![](https://img.shields.io/github/last-commit/FoobarIT/browser-token.js?style=for-the-badge) ![](https://img.shields.io/github/size/FoobarIT/browser-token.js/browser-token.js?style=for-the-badge)
### Features

- Generate Token with only letters, numbers or all in one.
- Generate Token to unique ID DOM element.
- Injected a new Token in array.
- Compare Token in a array.

### Docs

###### Token.generateDefault(n);
```js
Token.generateDefault(4)
```
*`Random Output: xR7S`*

###### Token.generateNumbers(n);
```js
Token.generateNumbers(4)
```
*`Random Output: 4561`*

###### Token.generateLetters(n);
```js
Token.generateLetters(4); 
```
*`Random Output: fdsz`*

###### Token.generateID(id_name);
```js
Token.generateID('btn-');
```
*`Result: Your DOM id => btn-0`*

###### Token.compare(newToken, items);
```js
Token.compare(Token.generateDefault(4), array)
```
*`Result: Compare all tokenID in a array and generating new tokenID if current token are identical.`*

###### Token.injected(items); 
```js
Token.injected(array);
```
*`Result: Inject an property named (tokenID) in your Object.`*

###### Token.uuid(); 
```js
Token.uuid(); 
```
*`Result: Random UUID conform to RFC4122`*

##### Parameters
|   Name |  Desc  |
| ------------ | ------------ |
| n | *Number*  |
| id_name| *String*  |
| items | *Object[]*|
|newToken|*function(): string*|

