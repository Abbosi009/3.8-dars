//if 1
let son = 5;
if (son > 0) {
  son += 1;
}
console.log("Natija:", son);

//if 2
let son = -3;

if (son > 0) {
  son += 1;
} else if (son < 0) {
  son -= 2;
} else {
  son = 10;
}

console.log("Natija:", son);

//if 3
let a = 5, b = -1, c = 0;
let musbat = 0;

if (a > 0) musbat++;
if (b > 0) musbat++;
if (c > 0) musbat++;

console.log("Musbat sonlar soni:", musbat);

//if 4 
let a = 3, b = 8;

let katta = (a > b) ? a : b;
console.log("Kattasi:", katta);

//if 5
let a = 6, b = 9;

let tartib = (a < b) ? "1-son kichik" : "2-son kichik";
console.log(tartib);

//if 6
let a = 15, b = 7;

if (a > b) {
  console.log(a, b);
} else {
  console.log(b, a);
}

//if 7
let A = 9.2, B = 3.4;

if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}

console.log("A:", A, "B:", B);

//if 8
let A = 4, B = 6;

if (A !== B) {
  let sum = A + B;
  A = sum;
  B = sum;
} else {
  A = 0;
  B = 0;
}

console.log("A:", A, "B:", B);

//if 9
let A = 5, B = 9;

if (A !== B) {
  let max = (A > B) ? A : B;
  A = max;
  B = max;
} else {
  A = 0;
  B = 0;
}

console.log("A:", A, "B:", B);

//if 10
let a = 7, b = 3, c = 10;
let kichik = Math.min(a, b, c);
console.log("Eng kichigi:", kichik);

//if 11
let a = 4, b = 9, c = 6;

let orta;

if ((a > b && a < c) || (a < b && a > c)) orta = a;
else if ((b > a && b < c) || (b < a && b > c)) orta = b;
else orta = c;

console.log("O‘rtadagi son:", orta);

//if 12
let a = 4, b = 7, c = 10;

let sum1 = a + b;
let sum2 = a + c;
let sum3 = b + c;

if (sum1 >= sum2 && sum1 >= sum3) {
  console.log(a, b);
} else if (sum2 >= sum1 && sum2 >= sum3) {
  console.log(a, c);
} else {
  console.log(b, c);
}

//if 13
let A = 2, B = 5, C = 9;

if (A < B && B < C) {
  A *= 2;
  B *= 2;
  C *= 2;
} else {
  A = -A;
  B = -B;
  C = -C;
}

console.log("A:", A, "B:", B, "C:", C);

//if 14
let A = 10, B = 6, C = 2;

if ((A < B && B < C) || (A > B && B > C)) {
  A *= 2;
  B *= 2;
  C *= 2;
} else {
  A = -A;
  B = -B;
  C = -C;
}

console.log("A:", A, "B:", B, "C:", C);

//if 15
let a = 7, b = 7, c = 7, d = 3;

if (a === b && a === c) console.log("4-son boshqacha");
else if (a === b && a === d) console.log("3-son boshqacha");
else if (a === c && a === d) console.log("2-son boshqacha");
else if (b === c && b === d) console.log("1-son boshqacha");
else console.log("Mos keladigan 3 ta teng son topilmadi");

//if 16
let x = 1.5;
let natija;

if (x <= 0) {
  natija = -x;
} else if (x < 2) {
  natija = x * x;
} else {
  natija = 4;
}

console.log("F(x) =", natija);

//if 17
let yil = 2024;
let kunlar;

if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
  kunlar = 366;
} else {
  kunlar = 365;
}

console.log(yil + " yilda", kunlar, "kun bor");

//if 18
let son = 247;

if (son < 1 || son > 999) {
  console.log("Noto‘g‘ri son kiritildi.");
} else {
  let xonalar = (son < 10) ? "bir xonali" :
                (son < 100) ? "ikki xonali" :
                "uch xonali";

  let juftlik = (son % 2 === 0) ? "juft son" : "toq son";

  console.log(`${xonalar} ${juftlik}`);
}
