const service = require('feathers-mongoose');

const hooks = require('./hooks');
const Organization = require('./organization-model');

module.exports = function () { // eslint-disable-line func-names
  const app = this;

  const options = {
    Model: Organization,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  // Initialize our service with any options it requires
  app.use('/organizations', service(options));

  // Get our initialize service to that we can bind hooks
  const organizationService = app.service('/organizations');

  // Set up our before hooks
  organizationService.before(hooks.before);

  // Set up our after hooks
  organizationService.after(hooks.after);
};
