const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

// Virtual for author "full" name.
AuthorSchema.virtual('name').get(function() {
  return this.family_name + ', ' + this.first_name;
});

AuthorSchema.virtual('lifespan').get(function () {
  let dateOfBirth = '';
  let dateOfDeath = '';
  if (this.date_of_birth) {
    dateOfBirth = moment(this.date_of_birth).format('MMMM Do, YYYY');
  }
  if (this.date_of_death) {
    dateOfDeath = moment(this.date_of_death).format('MMMM Do, YYYY');
  }
  return `${dateOfBirth} - ${dateOfDeath}`;
});

// Virtual for this author instance URL.
AuthorSchema.virtual('url').get(function() {
  return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);
