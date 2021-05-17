const agregatedSms = arr => {
  let arr2 = JSON.parse(JSON.stringify(arr));

  arr2.sort(function (x, y) {
    if (x.number < y.number) {
      return -1;
    }
    if (x.number > y.number) {
      return 1;
    }
    return 0;
  });

  var lastId;
  var b = [];
  for (var i = 0; i < arr2.length; i++) {
    if (lastId === arr2[i].number) {
      if (arr2[i].status !== 'Data Undefined' && arr2[i].status !== undefined) {
        if (
          b[b.length - 1].status === 'Решен' ||
          arr2[i].status === 'Решен' ||
          b[b.length - 1].status === 'Исследование'
        ) {
          b[b.length - 1].status = 'Решен';
        } else {
          b[b.length - 1].status = arr2[i].status;
        }
      }
      b[b.length - 1].text = b[b.length - 1].text + ' ' + arr2[i].text;
      if (arr2[i].cat !== 'Data Undefined' && arr2[i].cat !== undefined) {
        b[b.length - 1].cat = arr2[i].cat;
      }
      if (arr2[i].date !== 'Data Undefined' && arr2[i].date !== undefined) {
        b[b.length - 1].date = arr2[i].date;
      }
      if (arr2[i].id !== 'Data Undefined' && arr2[i].id !== undefined) {
        b[b.length - 1].id = arr2[i].id;
      }
    } else {
      b[b.length] = arr2[i];
      lastId = arr2[i].number;
    }
  }
  return b;
};

export default agregatedSms;
