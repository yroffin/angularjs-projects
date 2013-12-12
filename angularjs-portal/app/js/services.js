'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'],
        function($provide) {
            /**
             * swap provider
             */
            console.info('Register swap services');
            $provide.factory('Swap', function($resource, $routeParams) {
                /**
                 * params injection
                 * @type @exp;$routeParams@pro;swapId
                 */
                var swapId = $routeParams.swapId;
                return $resource('', {}, {
                    swaps: {
                        url: '/joomla/3.2.0',
                        params: {option:'com_swap', service:'Swap', method:'swaps', format:'json'}, 
                        method: 'POST',
                        isArray: true,
                        cache: false
                    },
                    swap: {
                        url: '/joomla/3.2.0', 
                        params: {option:'com_swap', service:'Swap', method:'swap', format:'json', swapId: swapId}, 
                        method: 'POST', 
                        isArray: false, 
                        cache: false
                    },
                    setup: {
                        url: '/joomla/3.2.0', 
                        params: {option:'com_swap', service:'Swap', method:'setup', format:'json'}, 
                        method: 'POST', 
                        isArray: false, 
                        cache: false
                    },
                    planning: {
                        url: '/joomla/3.2.0', 
                        params: {option:'com_swap', service:'Swap', method:'planning', format:'json'}, 
                        method: 'POST', 
                        isArray: false, 
                        cache: false
                    }
                });
            });
        }).value('version', '0.1');
