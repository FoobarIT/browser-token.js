(function(root, factory) {

    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = factory(root, exports);
      }
    } else if (typeof define === 'function' && define.amd) {
      define(['exports'], function(exports) {
        root.Token = factory(root, exports);
      });
    } else {
      root.Token = factory(root, {});
    }
  
  }(this, function(root, Token) {
    
    
    'use strict';
    
    Token.generateToken = function(n) {
            var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var token = '';
            for (var i = 0; i < n; i++) {
                token += chars[Math.floor(Math.random() * chars.length)];
            }
            return token;
    }

    Token.compareToken = function (newToken, items) {
        let success = true
        items.forEach((item) => {
            if (item.tokenID === undefined) {
                throw err('Property tokenID is not defined')
            }
            if (newToken === item.tokenID) {
                success = false
            }
        });
        return success
    }

   return Token;
  }));