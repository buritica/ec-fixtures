var starter = {
  id: 1,
  title: 'Starter',
  itemLimit: 1,
  discount: 0.25
};

var signature = {
  id: 2,
  title: 'Signature',
  itemLimit: 2,
  discount: 0.375
};

var premium = {
  id: 3,
  title: 'Premium',
  itemLimit: null,
  discount: 0.5
};

var subscriptions = [
  starter,
  signature,
  premium
];

export default subscriptions;