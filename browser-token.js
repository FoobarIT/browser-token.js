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
    let range = {
        default: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        numbers: '0123456789',
        letters: 'abcdefghijklmnopqrstuvwxyz',
        type: 'default',
        length: 4,
        index_id: -1
    }

    Token.generate = function(n) {
        let token = '';
        for (var i = 0; i < n; i++) {
            token += range.numbers[Math.floor(Math.random() * range.numbers.length)];
        }
        return token;
    }

    Token.generateDefault = function(n) {
        range.length = n

        var token = '';
        for (var i = 0; i < n; i++) {
            token += range.default[Math.floor(Math.random() * range.default.length)];
        }
        return token;
    }
    Token.generateNumbers = function(n) {
        range.length = n
        range.type = 'numbers'

        var token = '';
        for (var i = 0; i < n; i++) {
            token += range.numbers[Math.floor(Math.random() * range.numbers.length)];
        }
        return token;
    }
    Token.generateLetters = function(n) {
            range.length = n
            range.type = 'letters'

            var token = '';
            for (var i = 0; i < n; i++) {
                token += range.letters[Math.floor(Math.random() * range.letters.length)];
            }
            return token;
        }
        // Generate unique DOM ID - Start 0
    Token.generateID = function(id_name) {
            range.index_id++;

            let token = id_name + range.index_id
            let query = document.querySelector('#' + token)
            if (query) {
                console.error('This id name already exist in the DOM')
            } else {
                return token;
            }
        },
        // Reset index_id 
        Token.resetTokentID = function() {
            range.index_id = -1
        },
        // Inject unique token id in array.
        Token.injected = function(items) {
            items.forEach((item) => {
                if (item.tokenID === null || item.tokenID === undefined) {
                    item['tokenID'] = Token.generateDefault(8);
                } else {
                    console.error(`'tokenID' already exist in your array.`)
                }
            })
        }

    Token.compareToken = function(newToken, items) {
        items.forEach((item) => {
            if (item.tokenID === undefined) {
                console.error('Property tokenID is not defined.')
            }
            if (newToken === item.tokenID) {
                const { type, length } = range
                let token = Token.generateDefault(length)
                if (type === 'numbers') {
                    token += Token.generateNumbers(length)
                }
                if (type === 'letters') {
                    token += Token.generateLetters(length)
                }
                item['tokenID'] = token
            }
        });
    }

    return Token;
}));