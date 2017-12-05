/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

    'post /login' : {
      controller: 'AuthController',
      action: 'login'
    },
    'post /signup' : {
        controller: 'AuthController',
        action: 'signup',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['GET', 'POST'],
            summary: ' Get Groups ',
            description: 'Get Groups Description',
            produces: [
                'application/json'
            ],
            tags: [
                'Groups'
            ],
            responses: {
                '200': {
                    description: 'List of Groups',
                    schema: 'Group', // api/model/Group.js,
                    type: 'array'
                }
            },
            parameters: 'id'
        }
    },
    'get /groups/:id': {
        controller: 'GroupController',
        action: 'test',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['GET', 'POST'],
            summary: ' Get Groups ',
            description: 'Get Groups Description',
            produces: [
                'application/json'
            ],
            tags: [
                'Groups'
            ],
            responses: {
                '200': {
                    description: 'List of Groups',
                    schema: 'Group', // api/model/Group.js,
                    type: 'array'
                }
            },
            parameters: []

        }
    },
    // For Testing 
    'get /users_list': {
        controller: 'UserdetailsController',
        action: 'get_users',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['GET', 'POST'],
            summary: ' Get Groups ',
            description: 'Get Groups Description',
            produces: [
                'application/json'
            ],
            responses: {
                '200': {
                    type: 'array'
                }
            },
            parameters: 'id'
        }
    },

    'post /create_user' : {
        controller: 'UserdetailsController',
        action: 'create_user',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['POST'],
            produces: [
                'application/json'
            ],
            responses: {
                '201': {
                    type: 'object'
                }
            },
            parameters: 'id'
        }
    },
    'put /update_user/:id' : {
        controller: 'UserdetailsController',
        action: 'update_user',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['POST'],
            produces: [
                'application/json'
            ],
            responses: {
                '200': {
                    type: 'array'
                }
            },
            parameters: 'id'
        }
    },
    'delete /delete_user/:id' : {
        controller: 'UserdetailsController',
        action: 'delete_user',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['POST'],
            produces: [
                'application/json'
            ],
            responses: {
                '200': {
                    type: 'array'
                }
            },
            parameters: 'id'
        }
    },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};