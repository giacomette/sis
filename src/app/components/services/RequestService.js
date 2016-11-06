(function () {
  'use strict';

  angular.module('app')
    .service('RequestService', RequestService);

  function RequestService($http, api) {

    function Request(entity) {

      this.url = '';

      this.url = api.url + entity;

      this.get = function (id) {

        id = id || '';

        if (typeof id === 'object') {

          var str = [];
          var obj = id;

          for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
          }

          id = str.join("&");

          id = '?' + id;

        } else {
          id = id ? '/' + id : '';
        }

        return this.request(this.url + id);
      }

      this.save = function (body) {

        if (body.ID) {
          return this.put(body);
        }

        return this.post(body);
      }

      this.post = function (body) {

        return this.request(this.url, {
          method: 'POST',
          body: JSON.stringify(body),
        }, {
            "Content-Type": "application/json"
          });
      }

      this.put = function (body) {

        return this.request(this.url + '/' + body.ID, {
          method: 'PUT',
          body: JSON.stringify(body),
        });
      }

      this['delete'] = function (id) {
        return this.request(this.url + '/' + id, {
          method: 'DELETE',
        });
      }

      this.request = function (uri, options, config) {

        options = options || {};
        config = config || {};

        var method = (options.method || 'GET').toLowerCase();

        if (method.toLowerCase() == "get") {

          return $http({
            method: method,
            url: uri, 
            data: options.body,
          });
        } 

        return $http({
          method: method,
          url: uri,
          data: JSON.parse(options.body),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          transformRequest: function (obj) {
            var str = [];
            for (var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          }
        })
        //return $http[method](uri, options.body, config);
      }

      this.toJson = function (value) {
        return value.json();
      }

    }

    return Request;
  }

})();
