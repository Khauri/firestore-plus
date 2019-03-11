(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var interopRequireDefault = createCommonjsModule(function (module) {
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}

	module.exports = _interopRequireDefault;
	});

	unwrapExports(interopRequireDefault);

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}

	var _baseHas = baseHas;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$2.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol_1(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$3 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = _MapCache;

	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize_1(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = _memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }
	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) &&
	    (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && _hasPath(object, path, _baseHas);
	}

	var has_1 = has;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set$1 = _getNative(_root, 'Set');

	var _Set = Set$1;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (_Map && getTag(new _Map) != mapTag$1) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$1) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor;

	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor;

	    case symbolTag$1:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$3 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
	cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
	cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });

	    return result;
	  }

	  if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });

	    return result;
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.cloneWith` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.cloneWith
	 * @example
	 *
	 * function customizer(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(true);
	 *   }
	 * }
	 *
	 * var el = _.cloneDeepWith(document.body, customizer);
	 *
	 * console.log(el === document.body);
	 * // => false
	 * console.log(el.nodeName);
	 * // => 'BODY'
	 * console.log(el.childNodes.length);
	 * // => 20
	 */
	function cloneDeepWith(value, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1, customizer);
	}

	var cloneDeepWith_1 = cloneDeepWith;

	/** `Object#toString` result references. */
	var stringTag$3 = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$3);
	}

	var isString_1 = isString;

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	var _iteratorToArray = iteratorToArray;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo = '[' + rsComboRange$1 + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange$1 + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange$1 + ']?',
	    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return _arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	var _baseValues = baseValues;

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : _baseValues(object, keys_1(object));
	}

	var values_1 = values;

	/** `Object#toString` result references. */
	var mapTag$5 = '[object Map]',
	    setTag$5 = '[object Set]';

	/** Built-in value references. */
	var symIterator = _Symbol ? _Symbol.iterator : undefined;

	/**
	 * Converts `value` to an array.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the converted array.
	 * @example
	 *
	 * _.toArray({ 'a': 1, 'b': 2 });
	 * // => [1, 2]
	 *
	 * _.toArray('abc');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toArray(1);
	 * // => []
	 *
	 * _.toArray(null);
	 * // => []
	 */
	function toArray(value) {
	  if (!value) {
	    return [];
	  }
	  if (isArrayLike_1(value)) {
	    return isString_1(value) ? _stringToArray(value) : _copyArray(value);
	  }
	  if (symIterator && value[symIterator]) {
	    return _iteratorToArray(value[symIterator]());
	  }
	  var tag = _getTag(value),
	      func = tag == mapTag$5 ? _mapToArray : (tag == setTag$5 ? _setToArray : values_1);

	  return func(value);
	}

	var toArray_1 = toArray;

	var printValue_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = printValue;
	var toString = Object.prototype.toString;
	var errorToString = Error.prototype.toString;
	var regExpToString = RegExp.prototype.toString;
	var symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : function () {
	  return '';
	};
	var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;

	function printNumber(val) {
	  if (val != +val) return 'NaN';
	  var isNegativeZero = val === 0 && 1 / val < 0;
	  return isNegativeZero ? '-0' : '' + val;
	}

	function printSimpleValue(val, quoteStrings) {
	  if (quoteStrings === void 0) {
	    quoteStrings = false;
	  }

	  if (val == null || val === true || val === false) return '' + val;
	  var typeOf = typeof val;
	  if (typeOf === 'number') return printNumber(val);
	  if (typeOf === 'string') return quoteStrings ? "\"" + val + "\"" : val;
	  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
	  if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
	  var tag = toString.call(val).slice(8, -1);
	  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
	  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
	  if (tag === 'RegExp') return regExpToString.call(val);
	  return null;
	}

	function printValue(value, quoteStrings) {
	  var result = printSimpleValue(value, quoteStrings);
	  if (result !== null) return result;
	  return JSON.stringify(value, function (key, value) {
	    var result = printSimpleValue(this[key], quoteStrings);
	    if (result !== null) return result;
	    return value;
	  }, 2);
	}

	module.exports = exports["default"];
	});

	unwrapExports(printValue_1);

	var locale = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;

	var _printValue = interopRequireDefault(printValue_1);

	var mixed = {
	  default: '${path} is invalid',
	  required: '${path} is a required field',
	  oneOf: '${path} must be one of the following values: ${values}',
	  notOneOf: '${path} must not be one of the following values: ${values}',
	  notType: function notType(_ref) {
	    var path = _ref.path,
	        type = _ref.type,
	        value = _ref.value,
	        originalValue = _ref.originalValue;
	    var isCast = originalValue != null && originalValue !== value;
	    var msg = path + " must be a `" + type + "` type, " + ("but the final value was: `" + (0, _printValue.default)(value, true) + "`") + (isCast ? " (cast from the value `" + (0, _printValue.default)(originalValue, true) + "`)." : '.');

	    if (value === null) {
	      msg += "\n If \"null\" is intended as an empty value be sure to mark the schema as `.nullable()`";
	    }

	    return msg;
	  }
	};
	exports.mixed = mixed;
	var string = {
	  length: '${path} must be exactly ${length} characters',
	  min: '${path} must be at least ${min} characters',
	  max: '${path} must be at most ${max} characters',
	  matches: '${path} must match the following: "${regex}"',
	  email: '${path} must be a valid email',
	  url: '${path} must be a valid URL',
	  trim: '${path} must be a trimmed string',
	  lowercase: '${path} must be a lowercase string',
	  uppercase: '${path} must be a upper case string'
	};
	exports.string = string;
	var number = {
	  min: '${path} must be greater than or equal to ${min}',
	  max: '${path} must be less than or equal to ${max}',
	  lessThan: '${path} must be less than ${less}',
	  moreThan: '${path} must be greater than ${more}',
	  notEqual: '${path} must be not equal to ${notEqual}',
	  positive: '${path} must be a positive number',
	  negative: '${path} must be a negative number',
	  integer: '${path} must be an integer'
	};
	exports.number = number;
	var date = {
	  min: '${path} field must be later than ${min}',
	  max: '${path} field must be at earlier than ${max}'
	};
	exports.date = date;
	var boolean = {};
	exports.boolean = boolean;
	var object = {
	  noUnknown: '${path} field cannot have keys not specified in the object shape'
	};
	exports.object = object;
	var array = {
	  min: '${path} field must have at least ${min} items',
	  max: '${path} field must have less than or equal to ${max} items'
	};
	exports.array = array;
	var _default = {
	  mixed: mixed,
	  string: string,
	  number: number,
	  date: date,
	  object: object,
	  array: array,
	  boolean: boolean
	};
	exports.default = _default;
	});

	unwrapExports(locale);
	var locale_1 = locale.array;
	var locale_2 = locale.object;
	var locale_3 = locale.date;
	var locale_4 = locale.number;
	var locale_5 = locale.string;
	var locale_6 = locale.mixed;

	var isSchema = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;

	var _default = function _default(obj) {
	  return obj && obj.__isYupSchema__;
	};

	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(isSchema);

	var Condition = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = void 0;

	var _has = interopRequireDefault(has_1);

	var _isSchema = interopRequireDefault(isSchema);

	function callOrConcat(schema) {
	  if (typeof schema === 'function') return schema;
	  return function (base) {
	    return base.concat(schema);
	  };
	}

	var Conditional =
	/*#__PURE__*/
	function () {
	  function Conditional(refs, options) {
	    var is = options.is,
	        then = options.then,
	        otherwise = options.otherwise;
	    this.refs = [].concat(refs);
	    then = callOrConcat(then);
	    otherwise = callOrConcat(otherwise);
	    if (typeof options === 'function') this.fn = options;else {
	      if (!(0, _has.default)(options, 'is')) throw new TypeError('`is:` is required for `when()` conditions');
	      if (!options.then && !options.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
	      var isFn = typeof is === 'function' ? is : function () {
	        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
	          values[_key] = arguments[_key];
	        }

	        return values.every(function (value) {
	          return value === is;
	        });
	      };

	      this.fn = function () {
	        for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          values[_key2] = arguments[_key2];
	        }

	        var currentSchema = values.pop();
	        var option = isFn.apply(void 0, values) ? then : otherwise;
	        return option(currentSchema);
	      };
	    }
	  }

	  var _proto = Conditional.prototype;

	  _proto.getValue = function getValue(parent, context) {
	    var values = this.refs.map(function (r) {
	      return r.getValue(parent, context);
	    });
	    return values;
	  };

	  _proto.resolve = function resolve(ctx, values) {
	    var schema = this.fn.apply(ctx, values.concat(ctx));
	    if (schema !== undefined && !(0, _isSchema.default)(schema)) throw new TypeError('conditions must return a schema object');
	    return schema || ctx;
	  };

	  return Conditional;
	}();

	var _default = Conditional;
	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(Condition);

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	/* jshint node: true */
	function makeArrayFrom(obj) {
	  return Array.prototype.slice.apply(obj);
	}
	var
	  PENDING = "pending",
	  RESOLVED = "resolved",
	  REJECTED = "rejected";

	function SynchronousPromise(handler) {
	  this.status = PENDING;
	  this._continuations = [];
	  this._parent = null;
	  this._paused = false;
	  if (handler) {
	    handler.call(
	      this,
	      this._continueWith.bind(this),
	      this._failWith.bind(this)
	    );
	  }
	}

	function looksLikeAPromise(obj) {
	  return obj && typeof (obj.then) === "function";
	}

	SynchronousPromise.prototype = {
	  then: function (nextFn, catchFn) {
	    var next = SynchronousPromise.unresolved()._setParent(this);
	    if (this._isRejected()) {
	      if (this._paused) {
	        this._continuations.push({
	          promise: next,
	          nextFn: nextFn,
	          catchFn: catchFn
	        });
	        return next;
	      }
	      if (catchFn) {
	        try {
	          var catchResult = catchFn(this._error);
	          if (looksLikeAPromise(catchResult)) {
	            this._chainPromiseData(catchResult, next);
	            return next;
	          } else {
	            return SynchronousPromise.resolve(catchResult)._setParent(this);
	          }
	        } catch (e) {
	          return SynchronousPromise.reject(e)._setParent(this);
	        }
	      }
	      return SynchronousPromise.reject(this._error)._setParent(this);
	    }
	    this._continuations.push({
	      promise: next,
	      nextFn: nextFn,
	      catchFn: catchFn
	    });
	    this._runResolutions();
	    return next;
	  },
	  catch: function (handler) {
	    if (this._isResolved()) {
	      return SynchronousPromise.resolve(this._data)._setParent(this);
	    }
	    var next = SynchronousPromise.unresolved()._setParent(this);
	    this._continuations.push({
	      promise: next,
	      catchFn: handler
	    });
	    this._runRejections();
	    return next;
	  },
	  pause: function () {
	    this._paused = true;
	    return this;
	  },
	  resume: function () {
	    var firstPaused = this._findFirstPaused();
	    if (firstPaused) {
	      firstPaused._paused = false;
	      firstPaused._runResolutions();
	      firstPaused._runRejections();
	    }
	    return this;
	  },
	  _findAncestry: function () {
	    return this._continuations.reduce(function (acc, cur) {
	      if (cur.promise) {
	        var node = {
	          promise: cur.promise,
	          children: cur.promise._findAncestry()
	        };
	        acc.push(node);
	      }
	      return acc;
	    }, []);
	  },
	  _setParent: function (parent) {
	    if (this._parent) {
	      throw new Error("parent already set");
	    }
	    this._parent = parent;
	    return this;
	  },
	  _continueWith: function (data) {
	    var firstPending = this._findFirstPending();
	    if (firstPending) {
	      firstPending._data = data;
	      firstPending._setResolved();
	    }
	  },
	  _findFirstPending: function () {
	    return this._findFirstAncestor(function (test) {
	      return test._isPending && test._isPending();
	    });
	  },
	  _findFirstPaused: function () {
	    return this._findFirstAncestor(function (test) {
	      return test._paused;
	    });
	  },
	  _findFirstAncestor: function (matching) {
	    var test = this;
	    var result;
	    while (test) {
	      if (matching(test)) {
	        result = test;
	      }
	      test = test._parent;
	    }
	    return result;
	  },
	  _failWith: function (error) {
	    var firstRejected = this._findFirstPending();
	    if (firstRejected) {
	      firstRejected._error = error;
	      firstRejected._setRejected();
	    }
	  },
	  _takeContinuations: function () {
	    return this._continuations.splice(0, this._continuations.length);
	  },
	  _runRejections: function () {
	    if (this._paused || !this._isRejected()) {
	      return;
	    }
	    var
	      error = this._error,
	      continuations = this._takeContinuations(),
	      self = this;
	    continuations.forEach(function (cont) {
	      if (cont.catchFn) {
	        try {
	          var catchResult = cont.catchFn(error);
	          self._handleUserFunctionResult(catchResult, cont.promise);
	        } catch (e) {
	          var message = e.message;
	          cont.promise.reject(e);
	        }
	      } else {
	        cont.promise.reject(error);
	      }
	    });
	  },
	  _runResolutions: function () {
	    if (this._paused || !this._isResolved()) {
	      return;
	    }
	    var continuations = this._takeContinuations();
	    if (looksLikeAPromise(this._data)) {
	      return this._handleWhenResolvedDataIsPromise(this._data);
	    }
	    var data = this._data;
	    var self = this;
	    continuations.forEach(function (cont) {
	      if (cont.nextFn) {
	        try {
	          var result = cont.nextFn(data);
	          self._handleUserFunctionResult(result, cont.promise);
	        } catch (e) {
	          self._handleResolutionError(e, cont);
	        }
	      } else if (cont.promise) {
	        cont.promise.resolve(data);
	      }
	    });
	  },
	  _handleResolutionError: function (e, continuation) {
	    this._setRejected();
	    if (continuation.catchFn) {
	      try {
	        continuation.catchFn(e);
	        return;
	      } catch (e2) {
	        e = e2;
	      }
	    }
	    if (continuation.promise) {
	      continuation.promise.reject(e);
	    }
	  },
	  _handleWhenResolvedDataIsPromise: function (data) {
	    var self = this;
	    return data.then(function (result) {
	      self._data = result;
	      self._runResolutions();
	    }).catch(function (error) {
	      self._error = error;
	      self._setRejected();
	      self._runRejections();
	    });
	  },
	  _handleUserFunctionResult: function (data, nextSynchronousPromise) {
	    if (looksLikeAPromise(data)) {
	      this._chainPromiseData(data, nextSynchronousPromise);
	    } else {
	      nextSynchronousPromise.resolve(data);
	    }
	  },
	  _chainPromiseData: function (promiseData, nextSynchronousPromise) {
	    promiseData.then(function (newData) {
	      nextSynchronousPromise.resolve(newData);
	    }).catch(function (newError) {
	      nextSynchronousPromise.reject(newError);
	    });
	  },
	  _setResolved: function () {
	    this.status = RESOLVED;
	    if (!this._paused) {
	      this._runResolutions();
	    }
	  },
	  _setRejected: function () {
	    this.status = REJECTED;
	    if (!this._paused) {
	      this._runRejections();
	    }
	  },
	  _isPending: function () {
	    return this.status === PENDING;
	  },
	  _isResolved: function () {
	    return this.status === RESOLVED;
	  },
	  _isRejected: function () {
	    return this.status === REJECTED;
	  }
	};

	SynchronousPromise.resolve = function (result) {
	  return new SynchronousPromise(function (resolve, reject) {
	    if (looksLikeAPromise(result)) {
	      result.then(function (newResult) {
	        resolve(newResult);
	      }).catch(function (error) {
	        reject(error);
	      });
	    } else {
	      resolve(result);
	    }
	  });
	};

	SynchronousPromise.reject = function (result) {
	  return new SynchronousPromise(function (resolve, reject) {
	    reject(result);
	  });
	};

	SynchronousPromise.unresolved = function () {
	  return new SynchronousPromise(function (resolve, reject) {
	    this.resolve = resolve;
	    this.reject = reject;
	  });
	};

	SynchronousPromise.all = function () {
	  var args = makeArrayFrom(arguments);
	  if (Array.isArray(args[0])) {
	    args = args[0];
	  }
	  if (!args.length) {
	    return SynchronousPromise.resolve([]);
	  }
	  return new SynchronousPromise(function (resolve, reject) {
	    var
	      allData = [],
	      numResolved = 0,
	      doResolve = function () {
	        if (numResolved === args.length) {
	          resolve(allData);
	        }
	      },
	      rejected = false,
	      doReject = function (err) {
	        if (rejected) {
	          return;
	        }
	        rejected = true;
	        reject(err);
	      };
	    args.forEach(function (arg, idx) {
	      SynchronousPromise.resolve(arg).then(function (thisResult) {
	        allData[idx] = thisResult;
	        numResolved += 1;
	        doResolve();
	      }).catch(function (err) {
	        doReject(err);
	      });
	    });
	  });
	};

	/* jshint ignore:start */
	if (Promise === SynchronousPromise) {
	  throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
	}
	var RealPromise = Promise;
	SynchronousPromise.installGlobally = function(__awaiter) {
	  if (Promise === SynchronousPromise) {
	    return __awaiter;
	  }
	  var result = patchAwaiterIfRequired(__awaiter);
	  Promise = SynchronousPromise;
	  return result;
	};

	SynchronousPromise.uninstallGlobally = function() {
	  if (Promise === SynchronousPromise) {
	    Promise = RealPromise;
	  }
	};

	function patchAwaiterIfRequired(__awaiter) {
	  if (typeof(__awaiter) === "undefined" || __awaiter.__patched) {
	    return __awaiter;
	  }
	  var originalAwaiter = __awaiter;
	  __awaiter = function() {
	    originalAwaiter.apply(this, makeArrayFrom(arguments));
	  };
	  __awaiter.__patched = true;
	  return __awaiter;
	}
	/* jshint ignore:end */

	var synchronousPromise = {
	  SynchronousPromise: SynchronousPromise
	};

	var ValidationError_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = ValidationError;

	var _printValue = interopRequireDefault(printValue_1);

	var strReg = /\$\{\s*(\w+)\s*\}/g;

	var replace = function replace(str) {
	  return function (params) {
	    return str.replace(strReg, function (_, key) {
	      return (0, _printValue.default)(params[key]);
	    });
	  };
	};

	function ValidationError(errors, value, field, type) {
	  var _this = this;

	  this.name = 'ValidationError';
	  this.value = value;
	  this.path = field;
	  this.type = type;
	  this.errors = [];
	  this.inner = [];
	  if (errors) [].concat(errors).forEach(function (err) {
	    _this.errors = _this.errors.concat(err.errors || err);
	    if (err.inner) _this.inner = _this.inner.concat(err.inner.length ? err.inner : err);
	  });
	  this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0];
	  if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
	}

	ValidationError.prototype = Object.create(Error.prototype);
	ValidationError.prototype.constructor = ValidationError;

	ValidationError.isError = function (err) {
	  return err && err.name === 'ValidationError';
	};

	ValidationError.formatError = function (message, params) {
	  if (typeof message === 'string') message = replace(message);

	  var fn = function fn(params) {
	    params.path = params.label || params.path || 'this';
	    return typeof message === 'function' ? message(params) : message;
	  };

	  return arguments.length === 1 ? fn : fn(params);
	};

	module.exports = exports["default"];
	});

	unwrapExports(ValidationError_1);

	var runValidations_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.propagateErrors = propagateErrors;
	exports.settled = settled;
	exports.collectErrors = collectErrors;
	exports.default = runValidations;

	var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);



	var _ValidationError = interopRequireDefault(ValidationError_1);

	var promise = function promise(sync) {
	  return sync ? synchronousPromise.SynchronousPromise : Promise;
	};

	var unwrapError = function unwrapError(errors) {
	  if (errors === void 0) {
	    errors = [];
	  }

	  return errors.inner && errors.inner.length ? errors.inner : [].concat(errors);
	};

	function scopeToValue(promises, value, sync) {
	  //console.log('scopeToValue', promises, value)
	  var p = promise(sync).all(promises); //console.log('scopeToValue B', p)

	  var b = p.catch(function (err) {
	    if (err.name === 'ValidationError') err.value = value;
	    throw err;
	  }); //console.log('scopeToValue c', b)

	  var c = b.then(function () {
	    return value;
	  }); //console.log('scopeToValue d', c)

	  return c;
	}
	/**
	 * If not failing on the first error, catch the errors
	 * and collect them in an array
	 */


	function propagateErrors(endEarly, errors) {
	  return endEarly ? null : function (err) {
	    errors.push(err);
	    return err.value;
	  };
	}

	function settled(promises, sync) {
	  var Promise = promise(sync);
	  return Promise.all(promises.map(function (p) {
	    return Promise.resolve(p).then(function (value) {
	      return {
	        fulfilled: true,
	        value: value
	      };
	    }, function (value) {
	      return {
	        fulfilled: false,
	        value: value
	      };
	    });
	  }));
	}

	function collectErrors(_ref) {
	  var validations = _ref.validations,
	      value = _ref.value,
	      path = _ref.path,
	      sync = _ref.sync,
	      errors = _ref.errors,
	      sort = _ref.sort;
	  errors = unwrapError(errors);
	  return settled(validations, sync).then(function (results) {
	    var nestedErrors = results.filter(function (r) {
	      return !r.fulfilled;
	    }).reduce(function (arr, _ref2) {
	      var error = _ref2.value;

	      // we are only collecting validation errors
	      if (!_ValidationError.default.isError(error)) {
	        throw error;
	      }

	      return arr.concat(error);
	    }, []);
	    if (sort) nestedErrors.sort(sort); //show parent errors after the nested ones: name.first, name

	    errors = nestedErrors.concat(errors);
	    if (errors.length) throw new _ValidationError.default(errors, value, path);
	    return value;
	  });
	}

	function runValidations(_ref3) {
	  var endEarly = _ref3.endEarly,
	      options = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["endEarly"]);
	  if (endEarly) return scopeToValue(options.validations, options.value, options.sync);
	  return collectErrors(options);
	}
	});

	unwrapExports(runValidations_1);
	var runValidations_2 = runValidations_1.propagateErrors;
	var runValidations_3 = runValidations_1.settled;
	var runValidations_4 = runValidations_1.collectErrors;

	var merge_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = merge;

	var _has = interopRequireDefault(has_1);

	var _isSchema = interopRequireDefault(isSchema);

	var isObject = function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	};

	function merge(target, source) {
	  for (var key in source) {
	    if ((0, _has.default)(source, key)) {
	      var targetVal = target[key],
	          sourceVal = source[key];
	      if (sourceVal === undefined) continue;

	      if ((0, _isSchema.default)(sourceVal)) {
	        target[key] = (0, _isSchema.default)(targetVal) ? targetVal.concat(sourceVal) : sourceVal;
	      } else if (isObject(sourceVal)) {
	        target[key] = isObject(targetVal) ? merge(targetVal, sourceVal) : sourceVal;
	      } else if (Array.isArray(sourceVal)) {
	        target[key] = Array.isArray(targetVal) ? targetVal.concat(sourceVal) : sourceVal;
	      } else target[key] = source[key];
	    }
	  }

	  return target;
	}

	module.exports = exports["default"];
	});

	unwrapExports(merge_1);

	var isAbsent = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;

	var _default = function _default(value) {
	  return value == null;
	};

	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(isAbsent);

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = _createBaseFor();

	var _baseFor = baseFor;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && _baseFor(object, iteratee, keys_1);
	}

	var _baseForOwn = baseForOwn;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    mapTag$6 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$6 = '[object Set]',
	    stringTag$4 = '[object String]',
	    symbolTag$3 = '[object Symbol]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$4:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$3:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$3:
	    case dateTag$3:
	    case numberTag$3:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$2:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$3:
	    case stringTag$4:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$6:
	      var convert = _mapToArray;

	    case setTag$6:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag$3:
	      if (symbolValueOf$1) {
	        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$e.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$b.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    objectTag$3 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$f = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$2 : _getTag(object),
	      othTag = othIsArr ? arrayTag$2 : _getTag(other);

	  objTag = objTag == argsTag$3 ? objectTag$3 : objTag;
	  othTag = othTag == argsTag$3 ? objectTag$3 : othTag;

	  var objIsObj = objTag == objectTag$3,
	      othIsObj = othTag == objectTag$3,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$c.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$c.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new _Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject_1(value);
	}

	var _isStrictComparable = isStrictComparable;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys_1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, _isStrictComparable(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = _getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || _baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = _castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : _baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (_isKey(path) && _isStrictComparable(srcValue)) {
	    return _matchesStrictComparable(_toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get_1(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn_1(object, path)
	      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return _baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
	}

	var property_1 = property;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity_1;
	  }
	  if (typeof value == 'object') {
	    return isArray_1(value)
	      ? _baseMatchesProperty(value[0], value[1])
	      : _baseMatches(value);
	  }
	  return property_1(value);
	}

	var _baseIteratee = baseIteratee;

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = _baseIteratee(iteratee, 3);

	  _baseForOwn(object, function(value, key, object) {
	    _baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}

	var mapValues_1 = mapValues;

	/**
	 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
	 */

	function Cache(maxSize) {
	  this._maxSize = maxSize;
	  this.clear();
	}
	Cache.prototype.clear = function() {
	  this._size = 0;
	  this._values = {};
	};
	Cache.prototype.get = function(key) {
	  return this._values[key]
	};
	Cache.prototype.set = function(key, value) {
	  this._size >= this._maxSize && this.clear();
	  if (!this._values.hasOwnProperty(key)) {
	    this._size++;
	  }
	  return this._values[key] = value
	};

	var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
	  DIGIT_REGEX = /^\d+$/,
	  LEAD_DIGIT_REGEX = /^\d/,
	  SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
	  CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
	  MAX_CACHE_SIZE = 512;

	var contentSecurityPolicy = false,
	  pathCache = new Cache(MAX_CACHE_SIZE),
	  setCache = new Cache(MAX_CACHE_SIZE),
	  getCache = new Cache(MAX_CACHE_SIZE);

	try {
	  new Function('');
	} catch (error) {
	  contentSecurityPolicy = true;
	}

	var propertyExpr = {
	  Cache: Cache,

	  expr: expr,

	  split: split,

	  normalizePath: normalizePath,

	  setter: contentSecurityPolicy
	    ? function(path) {
	      var parts = normalizePath(path);
	      return function(data, value) {
	        return setterFallback(parts, data, value)
	      }
	    }
	    : function(path) {
	      return setCache.get(path) || setCache.set(
	        path,
	        new Function(
	          'data, value',
	          expr(path, 'data') + ' = value'
	        )
	      )
	    },

	  getter: contentSecurityPolicy
	    ? function(path, safe) {
	      var parts = normalizePath(path);
	      return function(data) {
	        return getterFallback(parts, safe, data)
	      }
	    }
	    : function(path, safe) {
	      var key = path + '_' + safe;
	      return getCache.get(key) || getCache.set(
	        key,
	        new Function('data', 'return ' + expr(path, safe, 'data'))
	      )
	    },

	  join: function(segments) {
	    return segments.reduce(function(path, part) {
	      return (
	        path +
	        (isQuoted(part) || DIGIT_REGEX.test(part)
	          ? '[' + part + ']'
	          : (path ? '.' : '') + part)
	      )
	    }, '')
	  },

	  forEach: function(path, cb, thisArg) {
	    forEach(split(path), cb, thisArg);
	  }
	};

	function setterFallback(parts, data, value) {
	  var index = 0,
	    len = parts.length;
	  while (index < len - 1) {
	    data = data[parts[index++]];
	  }
	  data[parts[index]] = value;
	}

	function getterFallback(parts, safe, data) {
	  var index = 0,
	    len = parts.length;
	  while (index < len) {
	    if (data != null || !safe) {
	      data = data[parts[index++]];
	    } else {
	      return
	    }
	  }
	  return data
	}

	function normalizePath(path) {
	  return pathCache.get(path) || pathCache.set(
	    path,
	    split(path).map(function(part) {
	      return part.replace(CLEAN_QUOTES_REGEX, '$2')
	    })
	  )
	}

	function split(path) {
	  return path.match(SPLIT_REGEX)
	}

	function expr(expression, safe, param) {
	  expression = expression || '';

	  if (typeof safe === 'string') {
	    param = safe;
	    safe = false;
	  }

	  param = param || 'data';

	  if (expression && expression.charAt(0) !== '[') expression = '.' + expression;

	  return safe ? makeSafe(expression, param) : param + expression
	}

	function forEach(parts, iter, thisArg) {
	  var len = parts.length,
	    part,
	    idx,
	    isArray,
	    isBracket;

	  for (idx = 0; idx < len; idx++) {
	    part = parts[idx];

	    if (part) {
	      if (shouldBeQuoted(part)) {
	        part = '"' + part + '"';
	      }

	      isBracket = isQuoted(part);
	      isArray = !isBracket && /^\d+$/.test(part);

	      iter.call(thisArg, part, isBracket, isArray, idx, parts);
	    }
	  }
	}

	function isQuoted(str) {
	  return (
	    typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1
	  )
	}

	function makeSafe(path, param) {
	  var result = param,
	    parts = split(path),
	    isLast;

	  forEach(parts, function(part, isBracket, isArray, idx, parts) {
	    isLast = idx === parts.length - 1;

	    part = isBracket || isArray ? '[' + part + ']' : '.' + part;

	    result += part + (!isLast ? ' || {})' : ')');
	  });

	  return new Array(parts.length + 1).join('(') + result
	}

	function hasLeadingNumber(part) {
	  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
	}

	function hasSpecialChars(part) {
	  return SPEC_CHAR_REGEX.test(part)
	}

	function shouldBeQuoted(part) {
	  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
	}

	var Reference_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;



	var validateName = function validateName(d) {
	  if (typeof d !== 'string') throw new TypeError("ref's must be strings, got: " + d);
	};

	var Reference =
	/*#__PURE__*/
	function () {
	  Reference.isRef = function isRef(value) {
	    return !!(value && (value.__isYupRef || value instanceof Reference));
	  };

	  var _proto = Reference.prototype;

	  _proto.toString = function toString() {
	    return "Ref(" + this.key + ")";
	  };

	  function Reference(key, mapFn, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    validateName(key);
	    var prefix = options.contextPrefix || '$';

	    if (typeof key === 'function') {
	      key = '.';
	    }

	    this.key = key.trim();
	    this.prefix = prefix;
	    this.isContext = this.key.indexOf(prefix) === 0;
	    this.isSelf = this.key === '.';
	    this.path = this.isContext ? this.key.slice(this.prefix.length) : this.key;
	    this._get = (0, propertyExpr.getter)(this.path, true);

	    this.map = mapFn || function (value) {
	      return value;
	    };
	  }

	  _proto.resolve = function resolve() {
	    return this;
	  };

	  _proto.cast = function cast(value, _ref) {
	    var parent = _ref.parent,
	        context = _ref.context;
	    return this.getValue(parent, context);
	  };

	  _proto.getValue = function getValue(parent, context) {
	    var isContext = this.isContext;

	    var value = this._get(isContext ? context : parent || context || {});

	    return this.map(value);
	  };

	  return Reference;
	}();

	exports.default = Reference;
	Reference.prototype.__isYupRef = true;
	module.exports = exports["default"];
	});

	unwrapExports(Reference_1);

	var createValidation_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.createErrorFactory = createErrorFactory;
	exports.default = createValidation;

	var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

	var _extends2 = interopRequireDefault(_extends_1);

	var _mapValues = interopRequireDefault(mapValues_1);

	var _ValidationError = interopRequireDefault(ValidationError_1);

	var _Reference = interopRequireDefault(Reference_1);



	var formatError = _ValidationError.default.formatError;

	var thenable = function thenable(p) {
	  return p && typeof p.then === 'function' && typeof p.catch === 'function';
	};

	function runTest(testFn, ctx, value, sync) {
	  var result = testFn.call(ctx, value);
	  if (!sync) return Promise.resolve(result);

	  if (thenable(result)) {
	    throw new Error("Validation test of type: \"" + ctx.type + "\" returned a Promise during a synchronous validate. " + "This test will finish after the validate call has returned");
	  }

	  return synchronousPromise.SynchronousPromise.resolve(result);
	}

	function resolveParams(oldParams, newParams, resolve) {
	  return (0, _mapValues.default)((0, _extends2.default)({}, oldParams, newParams), resolve);
	}

	function createErrorFactory(_ref) {
	  var value = _ref.value,
	      label = _ref.label,
	      resolve = _ref.resolve,
	      originalValue = _ref.originalValue,
	      opts = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["value", "label", "resolve", "originalValue"]);
	  return function createError(_temp) {
	    var _ref2 = _temp === void 0 ? {} : _temp,
	        _ref2$path = _ref2.path,
	        path = _ref2$path === void 0 ? opts.path : _ref2$path,
	        _ref2$message = _ref2.message,
	        message = _ref2$message === void 0 ? opts.message : _ref2$message,
	        _ref2$type = _ref2.type,
	        type = _ref2$type === void 0 ? opts.name : _ref2$type,
	        params = _ref2.params;

	    params = (0, _extends2.default)({
	      path: path,
	      value: value,
	      originalValue: originalValue,
	      label: label
	    }, resolveParams(opts.params, params, resolve));
	    return (0, _extends2.default)(new _ValidationError.default(formatError(message, params), value, path, type), {
	      params: params
	    });
	  };
	}

	function createValidation(options) {
	  var name = options.name,
	      message = options.message,
	      test = options.test,
	      params = options.params;

	  function validate(_ref3) {
	    var value = _ref3.value,
	        path = _ref3.path,
	        label = _ref3.label,
	        options = _ref3.options,
	        originalValue = _ref3.originalValue,
	        sync = _ref3.sync,
	        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["value", "path", "label", "options", "originalValue", "sync"]);
	    var parent = options.parent;

	    var resolve = function resolve(value) {
	      return _Reference.default.isRef(value) ? value.getValue(parent, options.context) : value;
	    };

	    var createError = createErrorFactory({
	      message: message,
	      path: path,
	      value: value,
	      originalValue: originalValue,
	      params: params,
	      label: label,
	      resolve: resolve,
	      name: name
	    });
	    var ctx = (0, _extends2.default)({
	      path: path,
	      parent: parent,
	      type: name,
	      createError: createError,
	      resolve: resolve,
	      options: options
	    }, rest);
	    return runTest(test, ctx, value, sync).then(function (validOrError) {
	      if (_ValidationError.default.isError(validOrError)) throw validOrError;else if (!validOrError) throw createError();
	    });
	  }

	  validate.OPTIONS = options;
	  return validate;
	}
	});

	unwrapExports(createValidation_1);
	var createValidation_2 = createValidation_1.createErrorFactory;

	var reach_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.getIn = getIn;
	exports.default = void 0;



	var _has = interopRequireDefault(has_1);

	var trim = function trim(part) {
	  return part.substr(0, part.length - 1).substr(1);
	};

	function getIn(schema, path, value, context) {
	  var parent, lastPart, lastPartDebug; // if only one "value" arg then use it for both

	  context = context || value;
	  if (!path) return {
	    parent: parent,
	    parentPath: path,
	    schema: schema.resolve({
	      context: context,
	      parent: parent,
	      value: value
	    })
	  };
	  (0, propertyExpr.forEach)(path, function (_part, isBracket, isArray) {
	    var part = isBracket ? trim(_part) : _part;

	    if (isArray || (0, _has.default)(schema, '_subType')) {
	      // we skipped an array: foo[].bar
	      var idx = isArray ? parseInt(part, 10) : 0;
	      schema = schema.resolve({
	        context: context,
	        parent: parent,
	        value: value
	      })._subType;

	      if (value) {
	        if (isArray && idx >= value.length) {
	          throw new Error("Yup.reach cannot resolve an array item at index: " + _part + ", in the path: " + path + ". " + "because there is no value at that index. ");
	        }

	        value = value[idx];
	      }
	    }

	    if (!isArray) {
	      schema = schema.resolve({
	        context: context,
	        parent: parent,
	        value: value
	      });
	      if (!(0, _has.default)(schema, 'fields') || !(0, _has.default)(schema.fields, part)) throw new Error("The schema does not contain the path: " + path + ". " + ("(failed at: " + lastPartDebug + " which is a type: \"" + schema._type + "\") "));
	      schema = schema.fields[part];
	      parent = value;
	      value = value && value[part];
	      lastPart = part;
	      lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
	    }
	  });

	  if (schema) {
	    schema = schema.resolve({
	      context: context,
	      parent: parent,
	      value: value
	    });
	  }

	  return {
	    schema: schema,
	    parent: parent,
	    parentPath: lastPart
	  };
	}

	var reach = function reach(obj, path, value, context) {
	  return getIn(obj, path, value, context).schema;
	};

	var _default = reach;
	exports.default = _default;
	});

	unwrapExports(reach_1);
	var reach_2 = reach_1.getIn;

	var mixed = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = SchemaType;

	var _extends2 = interopRequireDefault(_extends_1);

	var _has = interopRequireDefault(has_1);

	var _cloneDeepWith = interopRequireDefault(cloneDeepWith_1);

	var _toArray2 = interopRequireDefault(toArray_1);



	var _Condition = interopRequireDefault(Condition);

	var _runValidations = interopRequireDefault(runValidations_1);

	var _merge = interopRequireDefault(merge_1);

	var _isSchema = interopRequireDefault(isSchema);

	var _isAbsent = interopRequireDefault(isAbsent);

	var _createValidation = interopRequireDefault(createValidation_1);

	var _printValue = interopRequireDefault(printValue_1);

	var _Reference = interopRequireDefault(Reference_1);



	var notEmpty = function notEmpty(value) {
	  return !(0, _isAbsent.default)(value);
	};

	var RefSet =
	/*#__PURE__*/
	function () {
	  function RefSet() {
	    this.list = new Set();
	    this.refs = new Map();
	  }

	  var _proto = RefSet.prototype;

	  _proto.toArray = function toArray() {
	    return (0, _toArray2.default)(this.list).concat((0, _toArray2.default)(this.refs.values()));
	  };

	  _proto.add = function add(value) {
	    _Reference.default.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
	  };

	  _proto.delete = function _delete(value) {
	    _Reference.default.isRef(value) ? this.refs.delete(value.key, value) : this.list.delete(value);
	  };

	  _proto.has = function has(value, resolve) {
	    if (this.list.has(value)) return true;
	    var item,
	        values = this.refs.values();

	    while (item = values.next(), !item.done) {
	      if (resolve(item.value) === value) return true;
	    }

	    return false;
	  };

	  return RefSet;
	}();

	function SchemaType(options) {
	  var _this = this;

	  if (options === void 0) {
	    options = {};
	  }

	  if (!(this instanceof SchemaType)) return new SchemaType();
	  this._deps = [];
	  this._conditions = [];
	  this._options = {
	    abortEarly: true,
	    recursive: true
	  };
	  this._exclusive = Object.create(null);
	  this._whitelist = new RefSet();
	  this._blacklist = new RefSet();
	  this.tests = [];
	  this.transforms = [];
	  this.withMutation(function () {
	    _this.typeError(locale.mixed.notType);
	  });
	  if ((0, _has.default)(options, 'default')) this._defaultDefault = options.default;
	  this._type = options.type || 'mixed';
	}

	var proto = SchemaType.prototype = {
	  __isYupSchema__: true,
	  constructor: SchemaType,
	  clone: function clone() {
	    var _this2 = this;

	    if (this._mutate) return this; // if the nested value is a schema we can skip cloning, since
	    // they are already immutable

	    return (0, _cloneDeepWith.default)(this, function (value) {
	      if ((0, _isSchema.default)(value) && value !== _this2) return value;
	    });
	  },
	  label: function label(_label) {
	    var next = this.clone();
	    next._label = _label;
	    return next;
	  },
	  meta: function meta(obj) {
	    if (arguments.length === 0) return this._meta;
	    var next = this.clone();
	    next._meta = (0, _extends2.default)(next._meta || {}, obj);
	    return next;
	  },
	  withMutation: function withMutation(fn) {
	    this._mutate = true;
	    var result = fn(this);
	    this._mutate = false;
	    return result;
	  },
	  concat: function concat(schema) {
	    if (!schema) return this;
	    if (schema._type !== this._type && this._type !== 'mixed') throw new TypeError("You cannot `concat()` schema's of different types: " + this._type + " and " + schema._type);
	    var cloned = this.clone();
	    var next = (0, _merge.default)(this.clone(), schema.clone()); // undefined isn't merged over, but is a valid value for default

	    if ((0, _has.default)(schema, '_default')) next._default = schema._default;
	    next.tests = cloned.tests;
	    next._exclusive = cloned._exclusive; // manually add the new tests to ensure
	    // the deduping logic is consistent

	    schema.tests.forEach(function (fn) {
	      next = next.test(fn.OPTIONS);
	    });
	    next._type = schema._type;
	    return next;
	  },
	  isType: function isType(v) {
	    if (this._nullable && v === null) return true;
	    return !this._typeCheck || this._typeCheck(v);
	  },
	  resolve: function resolve(_ref) {
	    var context = _ref.context,
	        parent = _ref.parent;

	    if (this._conditions.length) {
	      return this._conditions.reduce(function (schema, match) {
	        return match.resolve(schema, match.getValue(parent, context));
	      }, this);
	    }

	    return this;
	  },
	  cast: function cast(value, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var resolvedSchema = this.resolve(options);

	    var result = resolvedSchema._cast(value, options);

	    if (value !== undefined && options.assert !== false && resolvedSchema.isType(result) !== true) {
	      var formattedValue = (0, _printValue.default)(value);
	      var formattedResult = (0, _printValue.default)(result);
	      throw new TypeError("The value of " + (options.path || 'field') + " could not be cast to a value " + ("that satisfies the schema type: \"" + resolvedSchema._type + "\". \n\n") + ("attempted value: " + formattedValue + " \n") + (formattedResult !== formattedValue ? "result of cast: " + formattedResult : ''));
	    }

	    return result;
	  },
	  _cast: function _cast(rawValue) {
	    var _this3 = this;

	    var value = rawValue === undefined ? rawValue : this.transforms.reduce(function (value, fn) {
	      return fn.call(_this3, value, rawValue);
	    }, rawValue);

	    if (value === undefined && (0, _has.default)(this, '_default')) {
	      value = this.default();
	    }

	    return value;
	  },
	  _validate: function _validate(_value, options) {
	    var _this4 = this;

	    if (options === void 0) {
	      options = {};
	    }

	    var value = _value;
	    var originalValue = options.originalValue != null ? options.originalValue : _value;

	    var isStrict = this._option('strict', options);

	    var endEarly = this._option('abortEarly', options);

	    var sync = options.sync;
	    var path = options.path;
	    var label = this._label;

	    if (!isStrict) {
	      value = this._cast(value, (0, _extends2.default)({
	        assert: false
	      }, options));
	    } // value is cast, we can check if it meets type requirements


	    var validationParams = {
	      value: value,
	      path: path,
	      schema: this,
	      options: options,
	      label: label,
	      originalValue: originalValue,
	      sync: sync
	    };
	    var initialTests = [];
	    if (this._typeError) initialTests.push(this._typeError(validationParams));
	    if (this._whitelistError) initialTests.push(this._whitelistError(validationParams));
	    if (this._blacklistError) initialTests.push(this._blacklistError(validationParams));
	    return (0, _runValidations.default)({
	      validations: initialTests,
	      endEarly: endEarly,
	      value: value,
	      path: path,
	      sync: sync
	    }).then(function (value) {
	      return (0, _runValidations.default)({
	        path: path,
	        sync: sync,
	        value: value,
	        endEarly: endEarly,
	        validations: _this4.tests.map(function (fn) {
	          return fn(validationParams);
	        })
	      });
	    });
	  },
	  validate: function validate(value, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var schema = this.resolve(options);
	    return schema._validate(value, options);
	  },
	  validateSync: function validateSync(value, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var schema = this.resolve(options);
	    var result, err;

	    schema._validate(value, (0, _extends2.default)({}, options, {
	      sync: true
	    })).then(function (r) {
	      return result = r;
	    }).catch(function (e) {
	      return err = e;
	    });

	    if (err) throw err;
	    return result;
	  },
	  isValid: function isValid(value, options) {
	    return this.validate(value, options).then(function () {
	      return true;
	    }).catch(function (err) {
	      if (err.name === 'ValidationError') return false;
	      throw err;
	    });
	  },
	  isValidSync: function isValidSync(value, options) {
	    try {
	      this.validateSync(value, (0, _extends2.default)({}, options));
	      return true;
	    } catch (err) {
	      if (err.name === 'ValidationError') return false;
	      throw err;
	    }
	  },
	  getDefault: function getDefault(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var schema = this.resolve(options);
	    return schema.default();
	  },
	  default: function _default(def) {
	    if (arguments.length === 0) {
	      var defaultValue = (0, _has.default)(this, '_default') ? this._default : this._defaultDefault;
	      return typeof defaultValue === 'function' ? defaultValue.call(this) : (0, _cloneDeepWith.default)(defaultValue);
	    }

	    var next = this.clone();
	    next._default = def;
	    return next;
	  },
	  strict: function strict() {
	    var next = this.clone();
	    next._options.strict = true;
	    return next;
	  },
	  required: function required(message) {
	    if (message === void 0) {
	      message = locale.mixed.required;
	    }

	    return this.test({
	      message: message,
	      name: 'required',
	      test: notEmpty
	    });
	  },
	  notRequired: function notRequired() {
	    var next = this.clone();
	    next.tests = next.tests.filter(function (test) {
	      return test.OPTIONS.name !== 'required';
	    });
	    return next;
	  },
	  nullable: function nullable(value) {
	    var next = this.clone();
	    next._nullable = value === false ? false : true;
	    return next;
	  },
	  transform: function transform(fn) {
	    var next = this.clone();
	    next.transforms.push(fn);
	    return next;
	  },

	  /**
	   * Adds a test function to the schema's queue of tests.
	   * tests can be exclusive or non-exclusive.
	   *
	   * - exclusive tests, will replace any existing tests of the same name.
	   * - non-exclusive: can be stacked
	   *
	   * If a non-exclusive test is added to a schema with an exclusive test of the same name
	   * the exclusive test is removed and further tests of the same name will be stacked.
	   *
	   * If an exclusive test is added to a schema with non-exclusive tests of the same name
	   * the previous tests are removed and further tests of the same name will replace each other.
	   */
	  test: function test() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var opts = args[0];

	    if (args.length > 1) {
	      var name = args[0],
	          message = args[1],
	          test = args[2];

	      if (test == null) {
	        test = message;
	        message = locale.mixed.default;
	      }

	      opts = {
	        name: name,
	        test: test,
	        message: message,
	        exclusive: false
	      };
	    }

	    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
	    var next = this.clone();
	    var validate = (0, _createValidation.default)(opts);
	    var isExclusive = opts.exclusive || opts.name && next._exclusive[opts.name] === true;

	    if (opts.exclusive && !opts.name) {
	      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
	    }

	    next._exclusive[opts.name] = !!opts.exclusive;
	    next.tests = next.tests.filter(function (fn) {
	      if (fn.OPTIONS.name === opts.name) {
	        if (isExclusive) return false;
	        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
	      }

	      return true;
	    });
	    next.tests.push(validate);
	    return next;
	  },
	  when: function when(keys, options) {
	    var next = this.clone(),
	        deps = [].concat(keys).map(function (key) {
	      return new _Reference.default(key);
	    });
	    deps.forEach(function (dep) {
	      if (!dep.isContext) next._deps.push(dep.key);
	    });

	    next._conditions.push(new _Condition.default(deps, options));

	    return next;
	  },
	  typeError: function typeError(message) {
	    var next = this.clone();
	    next._typeError = (0, _createValidation.default)({
	      message: message,
	      name: 'typeError',
	      test: function test(value) {
	        if (value !== undefined && !this.schema.isType(value)) return this.createError({
	          params: {
	            type: this.schema._type
	          }
	        });
	        return true;
	      }
	    });
	    return next;
	  },
	  oneOf: function oneOf(enums, message) {
	    if (message === void 0) {
	      message = locale.mixed.oneOf;
	    }

	    var next = this.clone();
	    enums.forEach(function (val) {
	      next._whitelist.add(val);

	      next._blacklist.delete(val);
	    });
	    next._whitelistError = (0, _createValidation.default)({
	      message: message,
	      name: 'oneOf',
	      test: function test(value) {
	        if (value === undefined) return true;
	        var valids = this.schema._whitelist;
	        return valids.has(value, this.resolve) ? true : this.createError({
	          params: {
	            values: valids.toArray().join(', ')
	          }
	        });
	      }
	    });
	    return next;
	  },
	  notOneOf: function notOneOf(enums, message) {
	    if (message === void 0) {
	      message = locale.mixed.notOneOf;
	    }

	    var next = this.clone();
	    enums.forEach(function (val) {
	      next._blacklist.add(val);

	      next._whitelist.delete(val);
	    });
	    next._blacklistError = (0, _createValidation.default)({
	      message: message,
	      name: 'notOneOf',
	      test: function test(value) {
	        var invalids = this.schema._blacklist;
	        if (invalids.has(value, this.resolve)) return this.createError({
	          params: {
	            values: invalids.toArray().join(', ')
	          }
	        });
	        return true;
	      }
	    });
	    return next;
	  },
	  strip: function strip(_strip) {
	    if (_strip === void 0) {
	      _strip = true;
	    }

	    var next = this.clone();
	    next._strip = _strip;
	    return next;
	  },
	  _option: function _option(key, overrides) {
	    return (0, _has.default)(overrides, key) ? overrides[key] : this._options[key];
	  },
	  describe: function describe() {
	    var next = this.clone();
	    return {
	      type: next._type,
	      meta: next._meta,
	      label: next._label,
	      tests: next.tests.map(function (fn) {
	        return {
	          name: fn.OPTIONS.name,
	          params: fn.OPTIONS.params
	        };
	      }).filter(function (n, idx, list) {
	        return list.findIndex(function (c) {
	          return c.name === n.name;
	        }) === idx;
	      })
	    };
	  }
	};
	var _arr = ['validate', 'validateSync'];

	var _loop = function _loop() {
	  var method = _arr[_i];

	  proto[method + "At"] = function (path, value, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var _getIn = (0, reach_1.getIn)(this, path, value, options.context),
	        parent = _getIn.parent,
	        parentPath = _getIn.parentPath,
	        schema = _getIn.schema;

	    return schema[method](parent && parent[parentPath], (0, _extends2.default)({}, options, {
	      parent: parent,
	      path: path
	    }));
	  };
	};

	for (var _i = 0; _i < _arr.length; _i++) {
	  _loop();
	}

	var _arr2 = ['equals', 'is'];

	for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
	  var alias = _arr2[_i2];
	  proto[alias] = proto.oneOf;
	}

	var _arr3 = ['not', 'nope'];

	for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
	  var _alias = _arr3[_i3];
	  proto[_alias] = proto.notOneOf;
	}

	module.exports = exports["default"];
	});

	unwrapExports(mixed);

	var inherits_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = inherits;

	var _extends2 = interopRequireDefault(_extends_1);

	function inherits(ctor, superCtor, spec) {
	  ctor.prototype = Object.create(superCtor.prototype, {
	    constructor: {
	      value: ctor,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  (0, _extends2.default)(ctor.prototype, spec);
	}

	module.exports = exports["default"];
	});

	unwrapExports(inherits_1);

	var boolean_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = void 0;

	var _inherits = interopRequireDefault(inherits_1);

	var _mixed = interopRequireDefault(mixed);

	var _default = BooleanSchema;
	exports.default = _default;

	function BooleanSchema() {
	  var _this = this;

	  if (!(this instanceof BooleanSchema)) return new BooleanSchema();

	  _mixed.default.call(this, {
	    type: 'boolean'
	  });

	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (!this.isType(value)) {
	        if (/^(true|1)$/i.test(value)) return true;
	        if (/^(false|0)$/i.test(value)) return false;
	      }

	      return value;
	    });
	  });
	}

	(0, _inherits.default)(BooleanSchema, _mixed.default, {
	  _typeCheck: function _typeCheck(v) {
	    if (v instanceof Boolean) v = v.valueOf();
	    return typeof v === 'boolean';
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(boolean_1);

	var string = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = StringSchema;

	var _inherits = interopRequireDefault(inherits_1);

	var _mixed = interopRequireDefault(mixed);



	var _isAbsent = interopRequireDefault(isAbsent);

	// eslint-disable-next-line
	var rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-next-line

	var rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

	var hasLength = function hasLength(value) {
	  return (0, _isAbsent.default)(value) || value.length > 0;
	};

	var isTrimmed = function isTrimmed(value) {
	  return (0, _isAbsent.default)(value) || value === value.trim();
	};

	function StringSchema() {
	  var _this = this;

	  if (!(this instanceof StringSchema)) return new StringSchema();

	  _mixed.default.call(this, {
	    type: 'string'
	  });

	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (this.isType(value)) return value;
	      return value != null && value.toString ? value.toString() : value;
	    });
	  });
	}

	(0, _inherits.default)(StringSchema, _mixed.default, {
	  _typeCheck: function _typeCheck(value) {
	    if (value instanceof String) value = value.valueOf();
	    return typeof value === 'string';
	  },
	  required: function required(message) {
	    if (message === void 0) {
	      message = locale.mixed.required;
	    }

	    var next = _mixed.default.prototype.required.call(this, message);

	    return next.test({
	      message: message,
	      name: 'required',
	      test: hasLength
	    });
	  },
	  length: function length(_length, message) {
	    if (message === void 0) {
	      message = locale.string.length;
	    }

	    return this.test({
	      message: message,
	      name: 'length',
	      exclusive: true,
	      params: {
	        length: _length
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value.length === this.resolve(_length);
	      }
	    });
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = locale.string.min;
	    }

	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value.length >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = locale.string.max;
	    }

	    return this.test({
	      name: 'max',
	      exclusive: true,
	      message: message,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value.length <= this.resolve(_max);
	      }
	    });
	  },
	  matches: function matches(regex, options) {
	    var excludeEmptyString = false;
	    var message;

	    if (options) {
	      if (options.message || options.hasOwnProperty('excludeEmptyString')) {
	        excludeEmptyString = options.excludeEmptyString;
	        message = options.message;
	      } else message = options;
	    }

	    return this.test({
	      message: message || locale.string.matches,
	      params: {
	        regex: regex
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value === '' && excludeEmptyString || regex.test(value);
	      }
	    });
	  },
	  email: function email(message) {
	    if (message === void 0) {
	      message = locale.string.email;
	    }

	    return this.matches(rEmail, {
	      message: message,
	      excludeEmptyString: true
	    });
	  },
	  url: function url(message) {
	    if (message === void 0) {
	      message = locale.string.url;
	    }

	    return this.matches(rUrl, {
	      message: message,
	      excludeEmptyString: true
	    });
	  },
	  //-- transforms --
	  ensure: function ensure() {
	    return this.default('').transform(function (val) {
	      return val === null ? '' : val;
	    });
	  },
	  trim: function trim(message) {
	    if (message === void 0) {
	      message = locale.string.trim;
	    }

	    return this.transform(function (val) {
	      return val != null ? val.trim() : val;
	    }).test({
	      message: message,
	      name: 'trim',
	      test: isTrimmed
	    });
	  },
	  lowercase: function lowercase(message) {
	    if (message === void 0) {
	      message = locale.string.lowercase;
	    }

	    return this.transform(function (value) {
	      return !(0, _isAbsent.default)(value) ? value.toLowerCase() : value;
	    }).test({
	      message: message,
	      name: 'string_case',
	      exclusive: true,
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value === value.toLowerCase();
	      }
	    });
	  },
	  uppercase: function uppercase(message) {
	    if (message === void 0) {
	      message = locale.string.uppercase;
	    }

	    return this.transform(function (value) {
	      return !(0, _isAbsent.default)(value) ? value.toUpperCase() : value;
	    }).test({
	      message: message,
	      name: 'string_case',
	      exclusive: true,
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value === value.toUpperCase();
	      }
	    });
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(string);

	var number = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = NumberSchema;

	var _inherits = interopRequireDefault(inherits_1);

	var _mixed = interopRequireDefault(mixed);



	var _isAbsent = interopRequireDefault(isAbsent);

	var isNaN = function isNaN(value) {
	  return value != +value;
	};

	var isInteger = function isInteger(val) {
	  return (0, _isAbsent.default)(val) || val === (val | 0);
	};

	function NumberSchema() {
	  var _this = this;

	  if (!(this instanceof NumberSchema)) return new NumberSchema();

	  _mixed.default.call(this, {
	    type: 'number'
	  });

	  this.withMutation(function () {
	    _this.transform(function (value) {
	      var parsed = value;

	      if (typeof parsed === 'string') {
	        parsed = parsed.replace(/\s/g, '');
	        if (parsed === '') return NaN; // don't use parseFloat to avoid positives on alpha-numeric strings

	        parsed = +parsed;
	      }

	      if (this.isType(parsed)) return parsed;
	      return parseFloat(parsed);
	    });
	  });
	}

	(0, _inherits.default)(NumberSchema, _mixed.default, {
	  _typeCheck: function _typeCheck(value) {
	    if (value instanceof Number) value = value.valueOf();
	    return typeof value === 'number' && !isNaN(value);
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = locale.number.min;
	    }

	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = locale.number.max;
	    }

	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value <= this.resolve(_max);
	      }
	    });
	  },
	  lessThan: function lessThan(less, message) {
	    if (message === void 0) {
	      message = locale.number.lessThan;
	    }

	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        less: less
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value < this.resolve(less);
	      }
	    });
	  },
	  moreThan: function moreThan(more, message) {
	    if (message === void 0) {
	      message = locale.number.moreThan;
	    }

	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        more: more
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value > this.resolve(more);
	      }
	    });
	  },
	  positive: function positive(msg) {
	    if (msg === void 0) {
	      msg = locale.number.positive;
	    }

	    return this.moreThan(0, msg);
	  },
	  negative: function negative(msg) {
	    if (msg === void 0) {
	      msg = locale.number.negative;
	    }

	    return this.lessThan(0, msg);
	  },
	  integer: function integer(message) {
	    if (message === void 0) {
	      message = locale.number.integer;
	    }

	    return this.test({
	      name: 'integer',
	      message: message,
	      test: isInteger
	    });
	  },
	  truncate: function truncate() {
	    return this.transform(function (value) {
	      return !(0, _isAbsent.default)(value) ? value | 0 : value;
	    });
	  },
	  round: function round(method) {
	    var avail = ['ceil', 'floor', 'round', 'trunc'];
	    method = method && method.toLowerCase() || 'round'; // this exists for symemtry with the new Math.trunc

	    if (method === 'trunc') return this.truncate();
	    if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
	    return this.transform(function (value) {
	      return !(0, _isAbsent.default)(value) ? Math[method](value) : value;
	    });
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(number);

	var isodate = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = parseIsoDate;

	/* eslint-disable */

	/**
	 *
	 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
	 * NON-CONFORMANT EDITION.
	 * © 2011 Colin Snover <http://zetafleet.com>
	 * Released under MIT license.
	 */
	//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
	var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;

	function parseIsoDate(date) {
	  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
	      minutesOffset = 0,
	      timestamp,
	      struct;

	  if (struct = isoReg.exec(date)) {
	    // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
	    for (var i = 0, k; k = numericKeys[i]; ++i) {
	      struct[k] = +struct[k] || 0;
	    } // allow undefined days and months


	    struct[2] = (+struct[2] || 1) - 1;
	    struct[3] = +struct[3] || 1; // allow arbitrary sub-second precision beyond milliseconds

	    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0; // timestamps without timezone identifiers should be considered local time

	    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
	      if (struct[8] !== 'Z' && struct[9] !== undefined) {
	        minutesOffset = struct[10] * 60 + struct[11];
	        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
	      }

	      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
	    }
	  } else timestamp = Date.parse ? Date.parse(date) : NaN;

	  return timestamp;
	}

	module.exports = exports["default"];
	});

	unwrapExports(isodate);

	var date = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = void 0;

	var _mixed = interopRequireDefault(mixed);

	var _inherits = interopRequireDefault(inherits_1);

	var _isodate = interopRequireDefault(isodate);



	var _isAbsent = interopRequireDefault(isAbsent);

	var _Reference = interopRequireDefault(Reference_1);

	var invalidDate = new Date('');

	var isDate = function isDate(obj) {
	  return Object.prototype.toString.call(obj) === '[object Date]';
	};

	var _default = DateSchema;
	exports.default = _default;

	function DateSchema() {
	  var _this = this;

	  if (!(this instanceof DateSchema)) return new DateSchema();

	  _mixed.default.call(this, {
	    type: 'date'
	  });

	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (this.isType(value)) return value;
	      value = (0, _isodate.default)(value);
	      return value ? new Date(value) : invalidDate;
	    });
	  });
	}

	(0, _inherits.default)(DateSchema, _mixed.default, {
	  _typeCheck: function _typeCheck(v) {
	    return isDate(v) && !isNaN(v.getTime());
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = locale.date.min;
	    }

	    var limit = _min;

	    if (!_Reference.default.isRef(limit)) {
	      limit = this.cast(_min);
	      if (!this._typeCheck(limit)) throw new TypeError('`min` must be a Date or a value that can be `cast()` to a Date');
	    }

	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value >= this.resolve(limit);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = locale.date.max;
	    }

	    var limit = _max;

	    if (!_Reference.default.isRef(limit)) {
	      limit = this.cast(_max);
	      if (!this._typeCheck(limit)) throw new TypeError('`max` must be a Date or a value that can be `cast()` to a Date');
	    }

	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value <= this.resolve(limit);
	      }
	    });
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(date);

	var interopRequireWildcard = createCommonjsModule(function (module) {
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	          if (desc.get || desc.set) {
	            Object.defineProperty(newObj, key, desc);
	          } else {
	            newObj[key] = obj[key];
	          }
	        }
	      }
	    }

	    newObj.default = obj;
	    return newObj;
	  }
	}

	module.exports = _interopRequireWildcard;
	});

	unwrapExports(interopRequireWildcard);

	function _taggedTemplateLiteralLoose(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }

	  strings.raw = raw;
	  return strings;
	}

	var taggedTemplateLiteralLoose = _taggedTemplateLiteralLoose;

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

	/** Used to compose unicode capture groups. */
	var rsCombo$1 = '[' + rsComboRange$2 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$1, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * Converts `string` to
	 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the snake cased string.
	 * @example
	 *
	 * _.snakeCase('Foo Bar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('fooBar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('--FOO-BAR--');
	 * // => 'foo_bar'
	 */
	var snakeCase = _createCompounder(function(result, word, index) {
	  return result + (index ? '_' : '') + word.toLowerCase();
	});

	var snakeCase_1 = snakeCase;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst_1(toString_1(string).toLowerCase());
	}

	var capitalize_1 = capitalize;

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = _createCompounder(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize_1(word) : word);
	});

	var camelCase_1 = camelCase;

	/**
	 * The opposite of `_.mapValues`; this method creates an object with the
	 * same values as `object` and keys generated by running each own enumerable
	 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	 * with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.8.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapValues
	 * @example
	 *
	 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   return key + value;
	 * });
	 * // => { 'a1': 1, 'b2': 2 }
	 */
	function mapKeys(object, iteratee) {
	  var result = {};
	  iteratee = _baseIteratee(iteratee, 3);

	  _baseForOwn(object, function(value, key, object) {
	    _baseAssignValue(result, iteratee(value, key, object), value);
	  });
	  return result;
	}

	var mapKeys_1 = mapKeys;

	/**
	 * Topological sorting function
	 *
	 * @param {Array} edges
	 * @returns {Array}
	 */

	var toposort_1 = function(edges) {
	  return toposort(uniqueNodes(edges), edges)
	};

	var array = toposort;

	function toposort(nodes, edges) {
	  var cursor = nodes.length
	    , sorted = new Array(cursor)
	    , visited = {}
	    , i = cursor
	    // Better data structures make algorithm much faster.
	    , outgoingEdges = makeOutgoingEdges(edges)
	    , nodesHash = makeNodesHash(nodes);

	  // check for unknown nodes
	  edges.forEach(function(edge) {
	    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
	      throw new Error('Unknown node. There is an unknown node in the supplied edges.')
	    }
	  });

	  while (i--) {
	    if (!visited[i]) visit(nodes[i], i, new Set());
	  }

	  return sorted

	  function visit(node, i, predecessors) {
	    if(predecessors.has(node)) {
	      var nodeRep;
	      try {
	        nodeRep = ", node was:" + JSON.stringify(node);
	      } catch(e) {
	        nodeRep = "";
	      }
	      throw new Error('Cyclic dependency' + nodeRep)
	    }

	    if (!nodesHash.has(node)) {
	      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
	    }

	    if (visited[i]) return;
	    visited[i] = true;

	    var outgoing = outgoingEdges.get(node) || new Set();
	    outgoing = Array.from(outgoing);

	    if (i = outgoing.length) {
	      predecessors.add(node);
	      do {
	        var child = outgoing[--i];
	        visit(child, nodesHash.get(child), predecessors);
	      } while (i)
	      predecessors.delete(node);
	    }

	    sorted[--cursor] = node;
	  }
	}

	function uniqueNodes(arr){
	  var res = new Set();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var edge = arr[i];
	    res.add(edge[0]);
	    res.add(edge[1]);
	  }
	  return Array.from(res)
	}

	function makeOutgoingEdges(arr){
	  var edges = new Map();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var edge = arr[i];
	    if (!edges.has(edge[0])) edges.set(edge[0], new Set());
	    if (!edges.has(edge[1])) edges.set(edge[1], new Set());
	    edges.get(edge[0]).add(edge[1]);
	  }
	  return edges
	}

	function makeNodesHash(arr){
	  var res = new Map();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    res.set(arr[i], i);
	  }
	  return res
	}
	toposort_1.array = array;

	var sortFields_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = sortFields;

	var _has = interopRequireDefault(has_1);

	var _toposort = interopRequireDefault(toposort_1);



	var _Reference = interopRequireDefault(Reference_1);

	var _isSchema = interopRequireDefault(isSchema);

	function sortFields(fields, excludes) {
	  if (excludes === void 0) {
	    excludes = [];
	  }

	  var edges = [],
	      nodes = [];

	  function addNode(depPath, key) {
	    var node = (0, propertyExpr.split)(depPath)[0];
	    if (!~nodes.indexOf(node)) nodes.push(node);
	    if (!~excludes.indexOf(key + "-" + node)) edges.push([key, node]);
	  }

	  for (var key in fields) {
	    if ((0, _has.default)(fields, key)) {
	      var value = fields[key];
	      if (!~nodes.indexOf(key)) nodes.push(key);
	      if (_Reference.default.isRef(value) && !value.isContext) addNode(value.path, key);else if ((0, _isSchema.default)(value) && value._deps) value._deps.forEach(function (path) {
	        return addNode(path, key);
	      });
	    }
	  }

	  return _toposort.default.array(nodes, edges).reverse();
	}

	module.exports = exports["default"];
	});

	unwrapExports(sortFields_1);

	var sortByKeyOrder_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = sortByKeyOrder;

	function findIndex(arr, err) {
	  var idx = Infinity;
	  arr.some(function (key, ii) {
	    if (err.path.indexOf(key) !== -1) {
	      idx = ii;
	      return true;
	    }
	  });
	  return idx;
	}

	function sortByKeyOrder(fields) {
	  var keys = Object.keys(fields);
	  return function (a, b) {
	    return findIndex(keys, a) - findIndex(keys, b);
	  };
	}

	module.exports = exports["default"];
	});

	unwrapExports(sortByKeyOrder_1);

	var makePath_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = makePath;

	function makePath(strings) {
	  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }

	  var path = strings.reduce(function (str, next) {
	    var value = values.shift();
	    return str + (value == null ? '' : value) + next;
	  });
	  return path.replace(/^\./, '');
	}

	module.exports = exports["default"];
	});

	unwrapExports(makePath_1);

	var object = createCommonjsModule(function (module, exports) {





	exports.__esModule = true;
	exports.default = ObjectSchema;

	var _taggedTemplateLiteralLoose2 = interopRequireDefault(taggedTemplateLiteralLoose);

	var _extends2 = interopRequireDefault(_extends_1);

	var _has = interopRequireDefault(has_1);

	var _snakeCase2 = interopRequireDefault(snakeCase_1);

	var _camelCase2 = interopRequireDefault(camelCase_1);

	var _mapKeys = interopRequireDefault(mapKeys_1);

	var _mapValues = interopRequireDefault(mapValues_1);



	var _mixed = interopRequireDefault(mixed);



	var _sortFields = interopRequireDefault(sortFields_1);

	var _sortByKeyOrder = interopRequireDefault(sortByKeyOrder_1);

	var _inherits = interopRequireDefault(inherits_1);

	var _makePath = interopRequireDefault(makePath_1);

	var _runValidations = interopRequireWildcard(runValidations_1);

	function _templateObject2() {
	  var data = (0, _taggedTemplateLiteralLoose2.default)(["", ".", ""]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject() {
	  var data = (0, _taggedTemplateLiteralLoose2.default)(["", ".", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}

	var isObject = function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	};

	function unknown(ctx, value) {
	  var known = Object.keys(ctx.fields);
	  return Object.keys(value).filter(function (key) {
	    return known.indexOf(key) === -1;
	  });
	}

	function ObjectSchema(spec) {
	  var _this2 = this;

	  if (!(this instanceof ObjectSchema)) return new ObjectSchema(spec);

	  _mixed.default.call(this, {
	    type: 'object',
	    default: function _default() {
	      var _this = this;

	      if (!this._nodes.length) return undefined;
	      var dft = {};

	      this._nodes.forEach(function (key) {
	        dft[key] = _this.fields[key].default ? _this.fields[key].default() : undefined;
	      });

	      return dft;
	    }
	  });

	  this.fields = Object.create(null);
	  this._nodes = [];
	  this._excludedEdges = [];
	  this.withMutation(function () {
	    _this2.transform(function coerce(value) {
	      if (typeof value === 'string') {
	        try {
	          value = JSON.parse(value);
	        } catch (err) {
	          value = null;
	        }
	      }

	      if (this.isType(value)) return value;
	      return null;
	    });

	    if (spec) {
	      _this2.shape(spec);
	    }
	  });
	}

	(0, _inherits.default)(ObjectSchema, _mixed.default, {
	  _typeCheck: function _typeCheck(value) {
	    return isObject(value) || typeof value === 'function';
	  },
	  _cast: function _cast(_value, options) {
	    var _this3 = this;

	    if (options === void 0) {
	      options = {};
	    }

	    var value = _mixed.default.prototype._cast.call(this, _value, options); //should ignore nulls here


	    if (value === undefined) return this.default();
	    if (!this._typeCheck(value)) return value;
	    var fields = this.fields;
	    var strip = this._option('stripUnknown', options) === true;

	    var props = this._nodes.concat(Object.keys(value).filter(function (v) {
	      return _this3._nodes.indexOf(v) === -1;
	    }));

	    var intermediateValue = {}; // is filled during the transform below

	    var innerOptions = (0, _extends2.default)({}, options, {
	      parent: intermediateValue,
	      __validating: false
	    });
	    var isChanged = false;
	    props.forEach(function (prop) {
	      var field = fields[prop];
	      var exists = (0, _has.default)(value, prop);

	      if (field) {
	        var fieldValue;
	        var strict = field._options && field._options.strict; // safe to mutate since this is fired in sequence

	        innerOptions.path = (0, _makePath.default)(_templateObject(), options.path, prop);
	        innerOptions.value = value[prop];
	        field = field.resolve(innerOptions);

	        if (field._strip === true) {
	          isChanged = isChanged || prop in value;
	          return;
	        }

	        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
	        if (fieldValue !== undefined) intermediateValue[prop] = fieldValue;
	      } else if (exists && !strip) intermediateValue[prop] = value[prop];

	      if (intermediateValue[prop] !== value[prop]) isChanged = true;
	    });
	    return isChanged ? intermediateValue : value;
	  },
	  _validate: function _validate(_value, opts) {
	    var _this4 = this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    var endEarly, recursive;
	    var sync = opts.sync;
	    var errors = [];
	    var originalValue = opts.originalValue != null ? opts.originalValue : _value;
	    endEarly = this._option('abortEarly', opts);
	    recursive = this._option('recursive', opts);
	    opts = (0, _extends2.default)({}, opts, {
	      __validating: true,
	      originalValue: originalValue
	    });
	    return _mixed.default.prototype._validate.call(this, _value, opts).catch((0, _runValidations.propagateErrors)(endEarly, errors)).then(function (value) {
	      if (!recursive || !isObject(value)) {
	        // only iterate though actual objects
	        if (errors.length) throw errors[0];
	        return value;
	      }

	      originalValue = originalValue || value;

	      var validations = _this4._nodes.map(function (key) {
	        var path = (0, _makePath.default)(_templateObject2(), opts.path, key);
	        var field = _this4.fields[key];
	        var innerOptions = (0, _extends2.default)({}, opts, {
	          path: path,
	          parent: value,
	          originalValue: originalValue[key]
	        });

	        if (field && field.validate) {
	          // inner fields are always strict:
	          // 1. this isn't strict so the casting will also have cast inner values
	          // 2. this is strict in which case the nested values weren't cast either
	          innerOptions.strict = true;
	          return field.validate(value[key], innerOptions);
	        }

	        return Promise.resolve(true);
	      });

	      return (0, _runValidations.default)({
	        sync: sync,
	        validations: validations,
	        value: value,
	        errors: errors,
	        endEarly: endEarly,
	        path: opts.path,
	        sort: (0, _sortByKeyOrder.default)(_this4.fields)
	      });
	    });
	  },
	  concat: function concat(schema) {
	    var next = _mixed.default.prototype.concat.call(this, schema);

	    next._nodes = (0, _sortFields.default)(next.fields, next._excludedEdges);
	    return next;
	  },
	  shape: function shape(schema, excludes) {
	    if (excludes === void 0) {
	      excludes = [];
	    }

	    var next = this.clone();
	    var fields = (0, _extends2.default)(next.fields, schema);
	    next.fields = fields;

	    if (excludes.length) {
	      if (!Array.isArray(excludes[0])) excludes = [excludes];
	      var keys = excludes.map(function (_ref) {
	        var first = _ref[0],
	            second = _ref[1];
	        return first + "-" + second;
	      });
	      next._excludedEdges = next._excludedEdges.concat(keys);
	    }

	    next._nodes = (0, _sortFields.default)(fields, next._excludedEdges);
	    return next;
	  },
	  from: function from(_from, to, alias) {
	    var fromGetter = (0, propertyExpr.getter)(_from, true);
	    return this.transform(function (obj) {
	      if (obj == null) return obj;
	      var newObj = obj;

	      if ((0, _has.default)(obj, _from)) {
	        newObj = (0, _extends2.default)({}, obj);
	        if (!alias) delete newObj[_from];
	        newObj[to] = fromGetter(obj);
	      }

	      return newObj;
	    });
	  },
	  noUnknown: function noUnknown(noAllow, message) {
	    if (noAllow === void 0) {
	      noAllow = true;
	    }

	    if (message === void 0) {
	      message = locale.object.noUnknown;
	    }

	    if (typeof noAllow === 'string') {
	      message = noAllow;
	      noAllow = true;
	    }

	    var next = this.test({
	      name: 'noUnknown',
	      exclusive: true,
	      message: message,
	      test: function test(value) {
	        return value == null || !noAllow || unknown(this.schema, value).length === 0;
	      }
	    });
	    if (noAllow) next._options.stripUnknown = true;
	    return next;
	  },
	  transformKeys: function transformKeys(fn) {
	    return this.transform(function (obj) {
	      return obj && (0, _mapKeys.default)(obj, function (_, key) {
	        return fn(key);
	      });
	    });
	  },
	  camelCase: function camelCase() {
	    return this.transformKeys(_camelCase2.default);
	  },
	  snakeCase: function snakeCase() {
	    return this.transformKeys(_snakeCase2.default);
	  },
	  constantCase: function constantCase() {
	    return this.transformKeys(function (key) {
	      return (0, _snakeCase2.default)(key).toUpperCase();
	    });
	  },
	  describe: function describe() {
	    var base = _mixed.default.prototype.describe.call(this);

	    base.fields = (0, _mapValues.default)(this.fields, function (value) {
	      return value.describe();
	    });
	    return base;
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(object);

	var array$1 = createCommonjsModule(function (module, exports) {





	exports.__esModule = true;
	exports.default = void 0;

	var _extends2 = interopRequireDefault(_extends_1);

	var _taggedTemplateLiteralLoose2 = interopRequireDefault(taggedTemplateLiteralLoose);

	var _inherits = interopRequireDefault(inherits_1);

	var _isAbsent = interopRequireDefault(isAbsent);

	var _isSchema = interopRequireDefault(isSchema);

	var _makePath = interopRequireDefault(makePath_1);

	var _printValue = interopRequireDefault(printValue_1);

	var _mixed = interopRequireDefault(mixed);



	var _runValidations = interopRequireWildcard(runValidations_1);

	function _templateObject() {
	  var data = (0, _taggedTemplateLiteralLoose2.default)(["", "[", "]"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}

	var hasLength = function hasLength(value) {
	  return !(0, _isAbsent.default)(value) && value.length > 0;
	};

	var _default = ArraySchema;
	exports.default = _default;

	function ArraySchema(type) {
	  var _this = this;

	  if (!(this instanceof ArraySchema)) return new ArraySchema(type);

	  _mixed.default.call(this, {
	    type: 'array'
	  }); // `undefined` specifically means uninitialized, as opposed to
	  // "no subtype"


	  this._subType = undefined;
	  this.withMutation(function () {
	    _this.transform(function (values) {
	      if (typeof values === 'string') try {
	        values = JSON.parse(values);
	      } catch (err) {
	        values = null;
	      }
	      return this.isType(values) ? values : null;
	    });

	    if (type) _this.of(type);
	  });
	}

	(0, _inherits.default)(ArraySchema, _mixed.default, {
	  _typeCheck: function _typeCheck(v) {
	    return Array.isArray(v);
	  },
	  _cast: function _cast(_value, _opts) {
	    var _this2 = this;

	    var value = _mixed.default.prototype._cast.call(this, _value, _opts); //should ignore nulls here


	    if (!this._typeCheck(value) || !this._subType) return value;
	    var isChanged = false;
	    var castArray = value.map(function (v) {
	      var castElement = _this2._subType.cast(v, _opts);

	      if (castElement !== v) {
	        isChanged = true;
	      }

	      return castElement;
	    });
	    return isChanged ? castArray : value;
	  },
	  _validate: function _validate(_value, options) {
	    var _this3 = this;

	    if (options === void 0) {
	      options = {};
	    }

	    var errors = [];
	    var sync = options.sync;
	    var path = options.path;
	    var subType = this._subType;

	    var endEarly = this._option('abortEarly', options);

	    var recursive = this._option('recursive', options);

	    var originalValue = options.originalValue != null ? options.originalValue : _value;
	    return _mixed.default.prototype._validate.call(this, _value, options).catch((0, _runValidations.propagateErrors)(endEarly, errors)).then(function (value) {
	      if (!recursive || !subType || !_this3._typeCheck(value)) {
	        if (errors.length) throw errors[0];
	        return value;
	      }

	      originalValue = originalValue || value;
	      var validations = value.map(function (item, idx) {
	        var path = (0, _makePath.default)(_templateObject(), options.path, idx); // object._validate note for isStrict explanation

	        var innerOptions = (0, _extends2.default)({}, options, {
	          path: path,
	          strict: true,
	          parent: value,
	          originalValue: originalValue[idx]
	        });
	        if (subType.validate) return subType.validate(item, innerOptions);
	        return true;
	      });
	      return (0, _runValidations.default)({
	        sync: sync,
	        path: path,
	        value: value,
	        errors: errors,
	        endEarly: endEarly,
	        validations: validations
	      });
	    });
	  },
	  of: function of(schema) {
	    var next = this.clone();
	    if (schema !== false && !(0, _isSchema.default)(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. ' + 'not: ' + (0, _printValue.default)(schema));
	    next._subType = schema;
	    return next;
	  },
	  required: function required(message) {
	    if (message === void 0) {
	      message = locale.mixed.required;
	    }

	    var next = _mixed.default.prototype.required.call(this, message);

	    return next.test({
	      message: message,
	      name: 'required',
	      test: hasLength
	    });
	  },
	  min: function min(_min, message) {
	    message = message || locale.array.min;
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value.length >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    message = message || locale.array.max;
	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return (0, _isAbsent.default)(value) || value.length <= this.resolve(_max);
	      }
	    });
	  },
	  ensure: function ensure() {
	    var _this4 = this;

	    return this.default(function () {
	      return [];
	    }).transform(function (val) {
	      if (_this4.isType(val)) return val;
	      return val === null ? [] : [].concat(val);
	    });
	  },
	  compact: function compact(rejector) {
	    var reject = !rejector ? function (v) {
	      return !!v;
	    } : function (v, i, a) {
	      return !rejector(v, i, a);
	    };
	    return this.transform(function (values) {
	      return values != null ? values.filter(reject) : values;
	    });
	  },
	  describe: function describe() {
	    var base = _mixed.default.prototype.describe.call(this);

	    if (this._subType) base.innerType = this._subType.describe();
	    return base;
	  }
	});
	module.exports = exports["default"];
	});

	unwrapExports(array$1);

	var Lazy_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = void 0;

	var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

	var _isSchema = interopRequireDefault(isSchema);

	var Lazy =
	/*#__PURE__*/
	function () {
	  function Lazy(mapFn) {
	    this._resolve = function () {
	      var schema = mapFn.apply(void 0, arguments);
	      if (!(0, _isSchema.default)(schema)) throw new TypeError('lazy() functions must return a valid schema');
	      return schema;
	    };
	  }

	  var _proto = Lazy.prototype;

	  _proto.resolve = function resolve(_ref) {
	    var value = _ref.value,
	        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["value"]);
	    return this._resolve(value, rest);
	  };

	  _proto.cast = function cast(value, options) {
	    return this._resolve(value, options).cast(value, options);
	  };

	  _proto.validate = function validate(value, options) {
	    return this._resolve(value, options).validate(value, options);
	  };

	  _proto.validateSync = function validateSync(value, options) {
	    return this._resolve(value, options).validateSync(value, options);
	  };

	  _proto.validateAt = function validateAt(path, value, options) {
	    return this._resolve(value, options).validateAt(path, value, options);
	  };

	  _proto.validateSyncAt = function validateSyncAt(path, value, options) {
	    return this._resolve(value, options).validateSyncAt(path, value, options);
	  };

	  return Lazy;
	}();

	Lazy.prototype.__isYupSchema__ = true;
	var _default = Lazy;
	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(Lazy_1);

	var setLocale_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = setLocale;

	var _locale = interopRequireDefault(locale);

	function setLocale(custom) {
	  Object.keys(custom).forEach(function (type) {
	    Object.keys(custom[type]).forEach(function (method) {
	      _locale.default[type][method] = custom[type][method];
	    });
	  });
	}

	module.exports = exports["default"];
	});

	unwrapExports(setLocale_1);

	var lib = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.addMethod = addMethod;
	exports.lazy = exports.ref = exports.boolean = void 0;

	var _mixed = interopRequireDefault(mixed);

	exports.mixed = _mixed.default;

	var _boolean = interopRequireDefault(boolean_1);

	exports.bool = _boolean.default;

	var _string = interopRequireDefault(string);

	exports.string = _string.default;

	var _number = interopRequireDefault(number);

	exports.number = _number.default;

	var _date = interopRequireDefault(date);

	exports.date = _date.default;

	var _object = interopRequireDefault(object);

	exports.object = _object.default;

	var _array = interopRequireDefault(array$1);

	exports.array = _array.default;

	var _Reference = interopRequireDefault(Reference_1);

	var _Lazy = interopRequireDefault(Lazy_1);

	var _ValidationError = interopRequireDefault(ValidationError_1);

	exports.ValidationError = _ValidationError.default;

	var _reach = interopRequireDefault(reach_1);

	exports.reach = _reach.default;

	var _isSchema = interopRequireDefault(isSchema);

	exports.isSchema = _isSchema.default;

	var _setLocale = interopRequireDefault(setLocale_1);

	exports.setLocale = _setLocale.default;
	var boolean = _boolean.default;
	exports.boolean = boolean;

	var ref = function ref(key, options) {
	  return new _Reference.default(key, options);
	};

	exports.ref = ref;

	var lazy = function lazy(fn) {
	  return new _Lazy.default(fn);
	};

	exports.lazy = lazy;

	function addMethod(schemaType, name, fn) {
	  if (!schemaType || !(0, _isSchema.default)(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
	  if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
	  if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
	  schemaType.prototype[name] = fn;
	}
	});

	var index = unwrapExports(lib);
	var lib_1 = lib.addMethod;
	var lib_2 = lib.lazy;
	var lib_3 = lib.ref;
	var lib_4 = lib.mixed;
	var lib_5 = lib.bool;
	var lib_6 = lib.string;
	var lib_7 = lib.number;
	var lib_8 = lib.date;
	var lib_9 = lib.object;
	var lib_10 = lib.array;
	var lib_11 = lib.ValidationError;
	var lib_12 = lib.reach;
	var lib_13 = lib.isSchema;
	var lib_14 = lib.setLocale;

	var index$1 = /*#__PURE__*/Object.freeze({
		default: index,
		__moduleExports: lib,
		addMethod: lib_1,
		lazy: lib_2,
		ref: lib_3,
		mixed: lib_4,
		bool: lib_5,
		string: lib_6,
		number: lib_7,
		date: lib_8,
		object: lib_9,
		array: lib_10,
		ValidationError: lib_11,
		reach: lib_12,
		isSchema: lib_13,
		setLocale: lib_14
	});

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    });
	  }

	  return target;
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose$1(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function getFirstObject() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return args.find(el => el !== null && el instanceof Object) || {};
	}
	/**
	 * Extensible Schema class
	 */


	class Schema {
	  constructor(data) {}

	  static isSchema(obj) {
	    return Boolean(obj) && obj.__firestore_plus_schema__ === true;
	  }

	  static get __is_firestore_plus_schema__() {
	    return true;
	  }

	  static get $methods() {
	    return this.prototype;
	  }
	  /**
	   * Run before validation
	   */


	  static preValidate(data) {}

	  static validate() {
	    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    obj = getFirstObject(this.preValidate(obj), obj);

	    const dataToValidate = _objectSpread({}, this.defaultFields, obj);

	    const data = lib_9(this.fieldTypes).validateSync(dataToValidate, options);
	    return getFirstObject(this.postValidate(data), data);
	  }
	  /**
	   * Run after validation
	   * @param {*} data 
	   */


	  static postValidate(data) {}

	}
	Schema.__firestore_plus_schema__ = true;
	Schema.fieldTypes = {};
	Schema.defaultFields = {};
	/**
	 * Schema Builder function for object instantiation
	 * fields, methods and statics are reserved optional keywords. To use
	 * keys of the same name, include them in the fields key.
	 */

	function SchemaBuilder() {
	  let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$fields = _ref.fields,
	      fields = _ref$fields === void 0 ? {} : _ref$fields,
	      _ref$methods = _ref.methods,
	      methods = _ref$methods === void 0 ? {} : _ref$methods,
	      _ref$statics = _ref.statics,
	      statics = _ref$statics === void 0 ? {} : _ref$statics,
	      rest = _objectWithoutProperties(_ref, ["fields", "methods", "statics"]);

	  const CustomSchema = class extends Schema {};
	  fields = _objectSpread({}, fields, rest); // Add default field types

	  for (let key in fields) {
	    let fieldType = fields[key];

	    if (!fieldType) {
	      continue;
	    }

	    if (lib_13(fieldType)) {
	      CustomSchema.fieldTypes[key] = fieldType;
	      continue;
	    }

	    if (fieldType.hasOwnProperty('type')) {
	      CustomSchema.fieldTypes[key] = fieldType.type;
	    }

	    if (fieldType.hasOwnProperty('default')) {
	      CustomSchema.defaultFields[key] = fieldType.default;
	    }
	  }

	  for (let key in methods) {
	    CustomSchema.prototype[key] = methods[key];
	  }

	  for (let key in statics) {
	    CustomSchema[key] = statics[key];
	  }

	  return CustomSchema;
	}

	class chainHandler {
	  constructor() {
	    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    Object.assign(this, data);
	    this._stopped = false;
	    this._next = true;
	    this._val = null; // eagerly awaiting class properties being standardized
	    // this.done = this.done.bind(this)

	    this.next = this.next.bind(this);
	    this.resolve = this.resolve.bind(this);
	    this.stop = this.stop.bind(this);
	  }
	  /**
	   * Calls the next function with the arguments supplied
	   * @param  {...any} args 
	   */


	  next(args) {
	    if (args && args.length) {
	      this.args = args;
	    }

	    this._next = true;
	  }
	  /**
	   * Immediately stops the chain and returns the value supplied
	   * @param {*} val 
	   */


	  resolve(val) {
	    this._val = val;
	    this._next = false;
	    this.stop();
	  }
	  /**
	   * Stops the chain. Doesn't necesarily prevent the old function
	   * from being called afterwards unless resolved first
	   */


	  stop() {
	    this._stopped = true;
	  }

	}

	const createFunctionHandler = function createFunctionHandler(fp, oldFn, newFn) {
	  let isAsync = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  // if already stubbed
	  const key = '__firestore_plus_stubbed_fn__'; // console.log("old, new", oldFn[key])

	  if (oldFn[key]) {
	    if (oldFn[key].fp === fp) {
	      oldFn[key].queue.push(newFn);
	      return oldFn;
	    }

	    oldFn = oldFn[key].oldFn;
	  }

	  let handler,
	      queue = [newFn];

	  if (isAsync) {
	    handler =
	    /*#__PURE__*/
	    function () {
	      var _ref = _asyncToGenerator(function* () {
	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        const chain = new chainHandler({
	          wrapped: oldFn,
	          fp,
	          context: this,
	          args
	        });

	        for (let handler of queue) {
	          yield handler.call(this, chain);

	          if (chain._stopped === true) {
	            break;
	          }
	        }

	        if (chain._next === true) {
	          return oldFn(...chain.args);
	        }

	        return chain._val;
	      });

	      return function handler() {
	        return _ref.apply(this, arguments);
	      };
	    }();
	  } else {
	    handler = function handler() {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      const chain = new chainHandler({
	        wrapped: oldFn,
	        fp,
	        context: this,
	        args
	      });

	      for (let handler of queue) {
	        handler.call(this, chain);

	        if (chain._stopped === true) {
	          break;
	        }
	      }

	      if (chain._next === true) {
	        return oldFn(...chain.args);
	      }

	      return chain._val;
	    };
	  }

	  handler[key] = {
	    queue,
	    fp,
	    oldFn
	  };
	  return handler;
	};
	/**
	 * 
	 * @param {*} fp 
	 * @param {*} target 
	 * @param {*} path 
	 * @param {*} value 
	 * @param {*} isAsync 
	 * @param {'before'|'default'|'after'} position The point in the chain the function will be run
	 */

	function overwrite(fp, target, path, value, isAsync) {
	  let position = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "default";
	  const last = path.pop();
	  let curr = target;
	  let part;

	  while (part = path.shift()) {
	    if (!curr[part]) {
	      curr[part] = part;
	    }

	    curr = curr[part];
	  }

	  if (typeof curr[last] !== 'function') {
	    curr[last] = value;
	    return;
	  }

	  curr[last] = createFunctionHandler(fp, curr[last], value, isAsync, position);
	}

	const createPluginTarget = val => {
	  function target(async, path) {
	    if (typeof async === 'string') {
	      path = async;
	      async = false;
	    }

	    return `${val}${path ? `.${path}` : ''}${async ? '#async' : ''}`;
	  }

	  target.toString = function () {
	    return val;
	  };

	  return target;
	};

	const PluginTargets = {
	  DocumentSnapshot: createPluginTarget('firebase.firestore.DocumentSnapshot.prototype'),
	  DocumentReference: createPluginTarget('firebasee.firestore.DocumentReference.prototype'),
	  CollectionReference: createPluginTarget('firebase.firestore.CollectionReference.prototype'),
	  QueryDocumentSnapshot: createPluginTarget('firebase.firestore.QueryDocumentSnapshot.prototype'),
	  QuerySnapshot: createPluginTarget('firebase.firestore.QuerySnapshot.prototype')
	};
	class FirestorePlusPlugin {
	  static isPlugin(plugin) {
	    return plugin && plugin.__firestore_plus_plugin__ === true;
	  }

	  get defaultName() {
	    return null;
	  }

	  get id() {
	    return null;
	  }

	  get __firestore_plus_plugin__() {
	    return true;
	  }

	  get extensions() {
	    return {};
	  } // Attach all appropriate methods of this instance


	  __init(fp) {
	    this.fp = fp;
	    this.firebase = fp.firebase;
	    this.preInit();

	    for (let key in this.extensions) {
	      let isAsync = false;

	      if (/#async$/.test(key)) {
	        isAsync = true;
	        key = key.replace(/#async$/, "");
	      }

	      if (!/^firebase/.test(key)) {
	        continue;
	      }

	      if (/prototype$/.test(key)) {
	        throw "Overwriting entire prototype is not supported";
	      }

	      overwrite(fp, this.firebase, key.split('.').slice(1), this.extensions[key], isAsync);
	    }

	    this.init();
	  }

	  preInit() {// Called before initializing. Useful for adding dependencies
	    // this.fplus is available here
	  }

	  init() {}

	}
	FirestorePlusPlugin.__firestore_plus_plugin__ = true;

	const createPlusObject = firebase => {
	  const fp = new FirestorePlus(firebase);

	  function plus(plugin, options) {
	    if (arguments.length === 0) {
	      return fp;
	    }

	    if (FirestorePlusPlugin.isPlugin(plugin)) {
	      fp.use(plugin, options);
	    } else {
	      for (let key in obj) {
	        fp.use(obj[key], key);
	      }
	    }

	    return fp;
	  }

	  plus.instance = fp;
	  return plus;
	};
	/**
	 * A function that idempotently attaches the plus interface to firestore
	 * @param {*} firebase 
	 * @returns {FirestorePlus}
	 */


	function hooker(firebase, forceRecreate) {
	  if (!firebase || typeof firebase.firestore !== 'function') {
	    throw new TypeError('firebase instance with firestore enabled is required');
	  }

	  const hookTarget = firebase.firestore.Firestore.prototype;

	  if (!hookTarget['plus'] || forceRecreate === true) {
	    hookTarget['plus'] = createPlusObject(firebase);
	  }

	  return hookTarget['plus'].instance;
	}

	class FirestorePlus {
	  /**
	   * Creates a new instance of FirestorePlus
	   * @param {firebase} firebase 
	   */
	  constructor(firebase) {
	    this.firebase = firebase;
	    this.plugins = {};
	  }

	  use() {
	    let plugin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : plugin.defaultName;
	    let id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : plugin.id || name;

	    if (!name) {
	      throw new TypeError('plugin with no default name supplied');
	    }
	    /** @type {PropertyDescriptor} */


	    const descriptor = {
	      value: plugin,
	      enumerable: false,
	      writable: false
	    };

	    if (!this.plugins[plugin.id]) {
	      if (typeof plugin.__init === 'function') {
	        plugin.__init(this);
	      }

	      Object.defineProperty(this.plugins, id, descriptor);
	    }

	    if (!this[name]) {
	      Object.defineProperty(this, name, descriptor);
	    }

	    return this;
	  }

	}

	class SchemaPlugin extends FirestorePlusPlugin {
	  constructor() {
	    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$autoValidate = _ref.autoValidate,
	        autoValidate = _ref$autoValidate === void 0 ? true : _ref$autoValidate;

	    super();
	    this.autoValidate = autoValidate;
	    this.schema = {};
	  }

	  get defaultName() {
	    return 'schema';
	  }

	  get id() {
	    return '@firestore-plus/schema';
	  }

	  get extensions() {
	    var _this = this;

	    return {
	      /**
	       * Runs validation upon document get
	       * Because this resolves the document, this should
	       * plugin should be listed last.
	       */
	      [PluginTargets.DocumentSnapshot('data')]: chain => {
	        const wrapped = chain.wrapped,
	              context = chain.context,
	              args = chain.args,
	              next = chain.next,
	              resolve = chain.resolve;

	        if (this.autoValidate === false) {
	          return next();
	        }

	        const data = args[0] || wrapped.call(context);
	        const path = context.ref.path;
	        const schema = this.getSchemaByPath(path);

	        if (!schema) {
	          return resolve(data);
	        }

	        return resolve(schema.validate(data, {
	          strict: true
	        }));
	      },
	      // Validates the data before setting
	      [PluginTargets.DocumentReference('set', true)]: function () {
	        var _ref2 = _asyncToGenerator(function* (chain) {
	          const context = chain.context,
	                args = chain.args,
	                next = chain.next;

	          if (_this.autoValidate === false) {
	            return next();
	          }

	          const path = context.path;

	          const schema = _this.getSchemaByPath(path);

	          if (!schema) {
	            return next();
	          }

	          args[0] = schema.validate(args[0], {
	            strict: true
	          });
	          return next(args);
	        });

	        return function (_x) {
	          return _ref2.apply(this, arguments);
	        };
	      }(),
	      // Validates the data before updating
	      [PluginTargets.DocumentReference('update', true)]: function () {
	        var _ref3 = _asyncToGenerator(function* (chain) {
	          const context = chain.context,
	                args = chain.args,
	                next = chain.next;

	          if (_this.autoValidate === false) {
	            return next();
	          }

	          const path = context.path;

	          const schema = _this.getSchemaByPath(path);

	          if (!schema) {
	            return next();
	          }

	          if (typeof args[0] === 'string') {
	            // alternating syntax not currently supported so just continue
	            return next();
	          }

	          args[0] = schema.validate(args[0], {
	            strict: true
	          });
	          return next(args);
	        });

	        return function (_x2) {
	          return _ref3.apply(this, arguments);
	        };
	      }()
	    };
	  }
	  /**
	   * Returns the schema given a path
	   * @param {string} path 
	   * @returns {typeof Schema}
	   */


	  getSchemaByPath(path) {
	    let schema = null;
	    path = path.split(/\\|\//g).filter(Boolean).slice(0, -1);

	    for (let key in this.schema) {
	      let temp = this.schema[key];
	      key = key.split(/\\|\//g).filter(Boolean);

	      if (path.length !== key.length) {
	        continue;
	      }

	      let i = key.length - 1;

	      while (--i >= 0) {
	        // check for equivalency and wildcards
	        if (key[i] !== path[i] && /^:/.test(key[i]) === false) {
	          break;
	        }
	      }

	      if (i < 0) {
	        schema = temp;
	      }
	    }

	    return schema;
	  }
	  /**
	   * @param {Array<String>|String} arrayOrString 
	   * @param {Object} schemaOrObject 
	   */


	  model(arrayOrString, schemaOrObject) {
	    if (!schemaOrObject || !arrayOrString) {
	      throw new TypeError(`path(s) and schema definition required but recieved [${Array.from(arguments).map(el => typeof el).join()}]`);
	    } // first resolve the schema


	    if (!Schema.isSchema(schemaOrObject)) {
	      if (typeof schemaOrObject === 'function') {
	        throw new TypeError('schema should inherit from Schema class');
	      }

	      schemaOrObject = SchemaBuilder(schemaOrObject);
	    }

	    if (arrayOrString instanceof Array) {
	      arrayOrString.forEach(string => this.model(string, schemaOrObject));
	    }

	    if (!(typeof arrayOrString === 'string')) {
	      throw `Path must string or array of strings`;
	    }

	    this.schema[arrayOrString] = schemaOrObject;
	    return schemaOrObject;
	  }

	}



	var index$2 = /*#__PURE__*/Object.freeze({
		SchemaPlugin: SchemaPlugin
	});

	exports.plugins = index$2;
	exports.FieldTypes = index$1;
	exports.default = hooker;
	exports.Schema = Schema;
	exports.SchemaBuilder = SchemaBuilder;
	exports.PluginTargets = PluginTargets;
	exports.FirestorePlusPlugin = FirestorePlusPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
