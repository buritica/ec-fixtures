var baseUrl = '/assets/dev-images/';

var collections = [];

var forever = {
  id: '54c3f5adea046c16997aab47',
  title: 'Forever',
  status: 'active',
  code: 'FC',
  image: baseUrl + 'forever-collection.jpg'
};

var spring14 = {
  id: '54c3f5adea046c16997aab48',
  title: 'Spring 2014',
  status: 'active',
  code: 'SP14',
  image: baseUrl + 'collection.jpg'
};

var fall13 = {
  id: '54c3f5adea046c16997aab49',
  title: 'Fall 2013',
  status: 'inactive',
  code: 'FA13',
  image: baseUrl + 'collection.jpg'
};

collections.push(spring14, fall13, forever);

export default collections;

