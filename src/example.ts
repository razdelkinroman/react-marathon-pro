// 1
const concat = (str1: string, str2: string): string => concat(str1, str2);
concat('Hello ', 'World'); // -> Hello World;

// 2
type HowIDoItType = string;
type SimeArrayType = Array<string | number>;

type WithDataType = {
  howIDoIt: HowIDoItType;
  simeArray: SimeArrayType;
};

interface HometaskInterface {
  howIDoIt: HowIDoItType;
  simeArray: SimeArrayType;
  withData: Array<WithDataType>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHometask: HometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// 3
interface MyArray<T> {
  [n: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce<U>(fn: (acc: T, el: T) => U, initValue: T): U[];
}

const tsArr: MyArray<number> = [1, 2, 3, 4];
tsArr.map((i) => i + 1);
tsArr.reduce((acc, i) => acc + i, 0);
