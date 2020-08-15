// prototypes are the mechanism by which JS objects inherit features from one another
//templates or blueprints we can think of them as

String.prototype.yell = function () {
  return `omg!!! ${this.toUpperCase()}!!! ahggh`;
};

console.log("i love you".yell()); //`omg!!! I LOVE YOU!!! ahggh`;
