import _ from 'lodash';

var baseUrl = '/assets/dev-images/';

var products = [];

var images = [
  {url: baseUrl + 'look1.jpg'},
  {url: baseUrl + 'look2.jpg'},
  {url: baseUrl + 'look3.jpg'},
  {url: baseUrl + 'look4.jpg'},
  {url: baseUrl + 'look5.jpg'},
  {url: baseUrl + 'look6.jpg'}
];

var thumbnails = {
  small: {url: baseUrl + 'small.jpg'},
  large: {url: baseUrl + 'large.jpg'}
};

var measurements = [
  ['Bust',34,36,38,40,42,44,46,48,50],
  ['Waist',27,29,31,33,35,37,39,41,43],
  ['Bottom Opening',38,40,42,44,46,48,50,52,54],
  ['Center Back Length',22,24,26,28,30,32,34,36,38],
  ['Neck Drop',5.5,7.5,9.5,11.5,13.5,15.5,17.5,19.5,21.5],
  ['Sleeve Length',24,26,28,30,32,34,36,38,40],
  ['Shoulder Width',16,18,20,22,24,26,28,30,32]
];

var sizes = ['00','0','2','4','6','8','10','12','14'];

var defaults = {
  images: images,
  thumbnailLarge: baseUrl + 'large.jpg',
  thumbnailSmall: baseUrl + 'small.jpg',
  description: '<p>Sumus tam adultis. Non est enim tibi nescio fingunt. Confusio esse cupio. Scio te debeo meae. At etiam, ut caveant ab his eu. Non est enim tibi nescio fingunt. </p><p>Confusio esse cupio. Scio te debeo meae. At etiam, ut caveant ab his eu. In tuo positum, idem fecissem. Constitutione, quam molesta est mihi.</p>',
  shortDescription: 'Crepe de Chine sleeveless blouse',
  material: '100% Cotton',
  colors: [11],
  color: 'White',
  care: 'Machine washable. Dryer safe.',
  sheerness: 7,
  measurements: measurements,
  price: 4000,
  sizes: sizes
};

var fey = _.defaults({
  id: '54c3f479ea046c16997aab42',
  title: 'Fey',
  collection: '54c3f5adea046c16997aab47',
  skuBase: 'FC-fey'
}, defaults);

var lizlemon = _.defaults({
  id: '54c3f47bea046c16997aab43',
  title: 'Liz Lemon',
  collection: '54c3f5adea046c16997aab47',
  skuBase: 'FC-lizlemon'
}, defaults);

var taylor = _.defaults({
  id: '4c3f47bea046c16997aab44',
  title: 'Taylor',
  collection: '54c3f5adea046c16997aab48',
  skuBase: 'SP14-taylor'
}, defaults);

var warren = _.defaults({
  id: '54c3f47cea046c16997aab45',
  title: 'Warren',
  collection: '54c3f5adea046c16997aab48',
  skuBase: 'SP14-warren'
}, defaults);

var white = _.defaults({
  id: '54c3f480ea046c16997aab46',
  title: 'White',
  collection: '54c3f5adea046c16997aab49',
  skuBase: 'FA13-white'
}, defaults);

var products = [
  fey,
  lizlemon,
  taylor,
  warren,
  white
];

products.forEach(function(product) {
  product.images = _.shuffle(product.images);
});

export default products;