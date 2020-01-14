const newfunc = {
  toMoreArr(arr, key) {
    let result = [];
    let length1 = arr.length;
    for (let i = 0, j = 0; i < length1; i += key, j++) {
      result[j] = arr.splice(-key, key);
    }
    return result;
  },

  // 把数字转换成中文
  toChineseNum(y) {
    const arr1 = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const arr2 = ['', '十', '百', '千'];
    const arr3 = ['', '万', '亿', '兆'];
    let str = '';
    let str3 = '';
    if (!y) return false;
    if (typeof y !== 'number') return false;
    const str1 = [...Array.from(String(y))];
    const str2 = toMoreArr(str1, 4);
    str2.map((i, v) => {
      i.map((k, n) => {
        str = `${str}${arr1[Number(k)]}${arr2[Number(i.length - n - 1)]}`;
      });
      str3 = `${str}${arr3[v]}${str3}`;
      str = '';
    });

    str3 = str3
      .replace(/零[零十百千]+/g, '零')
      .replace(/零+$/g, '')
      .replace(/零万/g, '万');
    return str3;
  },
};

export default newfunc;