var starter = {
  id: 1,
  title: 'starter',
  itemLimit: 1,
  discount: 0.25
};

var signature = {
  id: 2,
  title: 'signature',
  itemLimit: 2,
  discount: 0.375
};

var premium = {
  id: 3,
  title: 'premium',
  itemLimit: null,
  discount: 0.5
};

var plans = [
  starter,
  signature,
  premium
];

export default plans;