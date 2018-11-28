const Author = require('../models/author');

exports.author_list = (req, res, next) => {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec((err, list_authors) => {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};

exports.author_detail = (req, res) => {
  res.send(`Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.author_create_get = (req, res) => {
  res.send('Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = (req, res) => {
  res.send('Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send('Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send('Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send('Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send('Author update POST');
};
