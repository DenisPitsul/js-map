const arr = [[1,"first"], [3,"third"]];

const map = new Map(arr);

console.log('Map size:', map.size);

map.set(2, 'second');
console.log('Map after add element:', map);

map.delete(2);
console.log('Map after delete element:', map);

console.log('Find element by key 1:', map.get(1));

console.log('Check if map has element with key 2:', map.has(2));

function translateNumbersInStr(str, mapToTranslate) {
    return str.split(' ')
        .map(word => mapToTranslate.has(Number(word)) ? mapToTranslate.get(Number(word)) : word)
        .join(' ');
}

const textToTranslate = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';
const translatedText = translateNumbersInStr(textToTranslate, map);
console.log('Translated text:', translatedText);