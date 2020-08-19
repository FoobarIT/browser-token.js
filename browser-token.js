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
        /**
         * Generate a token bases on the range type
         * 
         * @param {number} n
         */
    function generate(n) {
        let token = ''
        for (var i = 0; i < n; i++) {
            let string = range.default
            if (range.type === 'numbers') {
                string = range.numbers
            }
            if (range.type === 'letters') {
                string = range.letters
            }
            token += string[Math.floor(Math.random() * string.length)];
        }
        return token
    }

    /**
     * Setter for the range type and range length
     * 
     * @param {number} n
     * @param {string|null} type
     */
    function setType(n, type = null) {
        range.length = n
        if (type) range.type = type
    }

    /**
     * @param {number} n
     * 
     * @return {string}
     */
    Token.generateDefault = function(n) {
            setType(n)
            return generate(n)
        }
        /**
         * @param {number} n
         * 
         * @return {string}
         */
    Token.generateNumbers = function(n) {
            setType(n, 'numbers')
            return generate(n)
        }
        /**
         * @param {number} n
         * 
         * @return {string}
         */
    Token.generateLetters = function(n) {
            setType(n, 'letters')
            return generate(n)
        }
        /**
         * Generate unique DOM ID - Start 0
         * 
         * @param {string} id_name
         * 
         * @return {string|void}
         */
    Token.generateID = function(id_name) {
            range.index_id++;

            let token = id_name + range.index_id
            let query = document.querySelector('#' + token)
            if (query) {
                console.error('This id name already exist in the DOM')
            } else {
                return token
            }
        },
        /**
         * Reset index_id 
         */
        Token.resetTokentID = function() {
            range.index_id = -1
        },
        /**
         * Inject unique token id in array.
         * 
         * @param {array} items
         */
        Token.injected = function(items) {
            items.forEach((item) => {
                if (item.tokenID === null || item.tokenID === undefined) {
                    item['tokenID'] = Token.generateDefault(8)
                } else {
                    console.error(`'tokenID' already exist in your array.`)
                }
            })
        }

    /**
     * @param {string} newToken
     * @param {array} items
     */
    Token.compare = function(newToken, items) {
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

    return Token
}))