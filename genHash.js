const crypto = require('crypto');

const ids = [
  '591020959113150464',
  '646377265265115136',
  '698331289807224904',
  '542982404143579154',
  '825807822250835988',
  '507292571949858822',
  '330841287299301376',
  '231373224418476032',
  '530580123855093767',
  '651675865024954399',
  '303908929711243264',
  '615937980447850517'
]

const concatIds = ids.reduce((acc, id) => acc += id, '');

const hash = crypto.createHash('sha256').update(concatIds).digest('hex');

console.log(hash);
