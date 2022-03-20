function getParam(paramName: string, url: string): string | null {
  const href = url || window.location.href;
  const name = paramName.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function camelizeStr(str: string): string {
  return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}

function snakifyStr(str: string): string {
  if (str.length === 1) return str;
  const r = str.replace(/(?:^|\.?)([A-Z])/g, (_, x) => `_${x.toLowerCase()}`);
  return r[0] === '_' ? r.slice(1) : r;
}

function convertCase(convertFunc: Function) {
  function converter(thing: any): string | string[] {
    if (thing instanceof Array) {
      return thing.map((i) => converter(i)) as string[];
    }
    if (thing instanceof Object) {
      const newObj: any = {};
      Object.keys(thing).forEach((k) => {
        newObj[convertFunc(k)] = converter(thing[k]);
      });
      return newObj;
    }
    return thing;
  }
  return converter;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const patternLetters: Record<string, any> = {
  yyyy: 'getFullYear',
  MM: function(date: any) {
    const m = date.getMonth() + 1;
    return m < 10 ? '0' + m : m;
  },
  dd: function(date: any) {
    const d = date.getDate();
    return d < 10 ? '0' + d : d;
  },
};

const rformat = new RegExp((function() {
  const re = [];
  for (let i in patternLetters) re.push(i);
  return '(' + re.join('|') + ')';
})(), 'g');

function formatDate(date: any, format: any) {
  return format.replace(rformat, function replaceDate($0: string, flag: string) {
    return typeof patternLetters[flag] === 'function'
      ? patternLetters[flag](date)
      : date[patternLetters[flag]]();
  });
}

export type TimeRemainType = {
  d: number;
  h: number;
  m: number;
  s: number;
};

export type TimerType = Partial<{
  resolve: () => void;
  remain: TimeRemainType;
  attach: Function[];
}>;

function getTimeRemain(t: number): TimeRemainType {
  let s = Math.floor( (t/1000) % 60 );
  let m = Math.floor( (t/1000/60) % 60 );
  let h = Math.floor( (t/(1000*60*60)) % 24 );
  let d = Math.floor( t/(1000*60*60*24) );
  return { d, h, m, s };
}

function setTimer(_remain: number, fn: (timeRemain: TimeRemainType, remain: number) => void) {
  let resolve: any;

  const p = new Promise((_resolve) => {
    let remain = _remain;
    let timer = setInterval(() => {
      if (remain > 0) {
        remain -= 1000;
        fn(getTimeRemain(remain), remain);
      } else {
        resolve();
      }
    }, 1000);

    resolve = () => {
      clearInterval(timer);
      _resolve(null);
    };
  });

  return {
    promise: p,
    resolve,
    attach: [], // attached functions to run together
  }
}

export default {
  getParam,
  camelizeStr,
  snakifyStr,
  delay,
  formatDate,
  getTimeRemain,
  setTimer,
  camelizeKeys: convertCase(camelizeStr),
  snakifyKeys: convertCase(snakifyStr),
};
