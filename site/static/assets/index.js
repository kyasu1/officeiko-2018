const style = "";
function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}
function F2(fun) {
  return F(2, fun, function(a) {
    return function(b) {
      return fun(a, b);
    };
  });
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) {
      return function(c) {
        return fun(a, b, c);
      };
    };
  });
}
function F4(fun) {
  return F(4, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return fun(a, b, c, d);
        };
      };
    };
  });
}
function F5(fun) {
  return F(5, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return fun(a, b, c, d, e);
          };
        };
      };
    };
  });
}
function F6(fun) {
  return F(6, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return fun(a, b, c, d, e, f);
            };
          };
        };
      };
    };
  });
}
function F7(fun) {
  return F(7, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return fun(a, b, c, d, e, f, g);
              };
            };
          };
        };
      };
    };
  });
}
function F8(fun) {
  return F(8, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return fun(a, b, c, d, e, f, g, h);
                };
              };
            };
          };
        };
      };
    };
  });
}
function F9(fun) {
  return F(9, fun, function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return function(i) {
                    return fun(a, b, c, d, e, f, g, h, i);
                  };
                };
              };
            };
          };
        };
      };
    };
  });
}
function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
var _JsArray_empty = [];
function _JsArray_length(array) {
  return array.length;
}
var _JsArray_initialize = F3(function(size, offset, func) {
  var result = new Array(size);
  for (var i = 0; i < size; i++) {
    result[i] = func(offset + i);
  }
  return result;
});
var _JsArray_initializeFromList = F2(function(max, ls) {
  var result = new Array(max);
  for (var i = 0; i < max && ls.b; i++) {
    result[i] = ls.a;
    ls = ls.b;
  }
  result.length = i;
  return _Utils_Tuple2(result, ls);
});
F2(function(index, array) {
  return array[index];
});
F3(function(index, value, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = array[i];
  }
  result[index] = value;
  return result;
});
F2(function(value, array) {
  var length = array.length;
  var result = new Array(length + 1);
  for (var i = 0; i < length; i++) {
    result[i] = array[i];
  }
  result[length] = value;
  return result;
});
F3(function(func, acc, array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    acc = A2(func, array[i], acc);
  }
  return acc;
});
var _JsArray_foldr = F3(function(func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A2(func, array[i], acc);
  }
  return acc;
});
F2(function(func, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = func(array[i]);
  }
  return result;
});
F3(function(func, offset, array) {
  var length = array.length;
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = A2(func, offset + i, array[i]);
  }
  return result;
});
F3(function(from, to, array) {
  return array.slice(from, to);
});
F3(function(n, dest, source) {
  var destLen = dest.length;
  var itemsToCopy = n - destLen;
  if (itemsToCopy > source.length) {
    itemsToCopy = source.length;
  }
  var size = destLen + itemsToCopy;
  var result = new Array(size);
  for (var i = 0; i < destLen; i++) {
    result[i] = dest[i];
  }
  for (var i = 0; i < itemsToCopy; i++) {
    result[i + destLen] = source[i];
  }
  return result;
});
F2(function(tag, value) {
  return value;
});
F2(function(tag, value) {
  console.log(tag + ": " + _Debug_toString());
  return value;
});
function _Debug_toString(value) {
  return "<internals>";
}
function _Debug_crash(identifier) {
  throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
}
function _Utils_eq(x, y) {
  for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
  }
  return isEqual;
}
function _Utils_eqHelp(x, y, depth, stack) {
  if (x === y) {
    return true;
  }
  if (typeof x !== "object" || x === null || y === null) {
    typeof x === "function" && _Debug_crash(5);
    return false;
  }
  if (depth > 100) {
    stack.push(_Utils_Tuple2(x, y));
    return true;
  }
  if (x.$ < 0) {
    x = $elm$core$Dict$toList(x);
    y = $elm$core$Dict$toList(y);
  }
  for (var key in x) {
    if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
      return false;
    }
  }
  return true;
}
F2(_Utils_eq);
F2(function(a, b) {
  return !_Utils_eq(a, b);
});
function _Utils_cmp(x, y, ord) {
  if (typeof x !== "object") {
    return x === y ? (
      /*EQ*/
      0
    ) : x < y ? (
      /*LT*/
      -1
    ) : (
      /*GT*/
      1
    );
  }
  if (typeof x.$ === "undefined") {
    return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
  }
  for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
  }
  return ord || (x.b ? (
    /*GT*/
    1
  ) : y.b ? (
    /*LT*/
    -1
  ) : (
    /*EQ*/
    0
  ));
}
F2(function(a, b) {
  return _Utils_cmp(a, b) < 0;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) < 1;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) > 0;
});
F2(function(a, b) {
  return _Utils_cmp(a, b) >= 0;
});
var _Utils_compare = F2(function(x, y) {
  var n = _Utils_cmp(x, y);
  return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});
var _Utils_Tuple0 = 0;
function _Utils_Tuple2(a, b) {
  return { a, b };
}
function _Utils_Tuple3(a, b, c) {
  return { a, b, c };
}
function _Utils_chr(c) {
  return c;
}
function _Utils_update(oldRecord, updatedFields) {
  var newRecord = {};
  for (var key in oldRecord) {
    newRecord[key] = oldRecord[key];
  }
  for (var key in updatedFields) {
    newRecord[key] = updatedFields[key];
  }
  return newRecord;
}
F2(_Utils_ap);
function _Utils_ap(xs, ys) {
  if (typeof xs === "string") {
    return xs + ys;
  }
  if (!xs.b) {
    return ys;
  }
  var root = _List_Cons(xs.a, ys);
  xs = xs.b;
  for (var curr = root; xs.b; xs = xs.b) {
    curr = curr.b = _List_Cons(xs.a, ys);
  }
  return root;
}
var _List_Nil = { $: 0 };
function _List_Cons(hd, tl) {
  return { $: 1, a: hd, b: tl };
}
var _List_cons = F2(_List_Cons);
function _List_fromArray(arr) {
  var out = _List_Nil;
  for (var i = arr.length; i--; ) {
    out = _List_Cons(arr[i], out);
  }
  return out;
}
function _List_toArray(xs) {
  for (var out = []; xs.b; xs = xs.b) {
    out.push(xs.a);
  }
  return out;
}
var _List_map2 = F3(function(f, xs, ys) {
  for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
    arr.push(A2(f, xs.a, ys.a));
  }
  return _List_fromArray(arr);
});
F4(function(f, xs, ys, zs) {
  for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A3(f, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F5(function(f, ws, xs, ys, zs) {
  for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F6(function(f, vs, ws, xs, ys, zs) {
  for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
    arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
  }
  return _List_fromArray(arr);
});
F2(function(f, xs) {
  return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    return _Utils_cmp(f(a), f(b));
  }));
});
F2(function(f, xs) {
  return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    var ord = A2(f, a, b);
    return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
  }));
});
F2(function(a, b) {
  return a + b;
});
F2(function(a, b) {
  return a - b;
});
F2(function(a, b) {
  return a * b;
});
F2(function(a, b) {
  return a / b;
});
F2(function(a, b) {
  return a / b | 0;
});
F2(Math.pow);
F2(function(b, a) {
  return a % b;
});
F2(function(modulus, x) {
  var answer = x % modulus;
  return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
});
var _Basics_pi = Math.PI;
F2(Math.atan2);
function _Basics_toFloat(x) {
  return x;
}
var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_log = Math.log;
function _Basics_not(bool) {
  return !bool;
}
F2(function(a, b) {
  return a && b;
});
F2(function(a, b) {
  return a || b;
});
F2(function(a, b) {
  return a !== b;
});
var _String_cons = F2(function(chr, str) {
  return chr + str;
});
function _String_uncons(string) {
  var word = string.charCodeAt(0);
  return !isNaN(word) ? $elm$core$Maybe$Just(
    55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
  ) : $elm$core$Maybe$Nothing;
}
F2(function(a, b) {
  return a + b;
});
function _String_length(str) {
  return str.length;
}
F2(function(func, string) {
  var len = string.length;
  var array = new Array(len);
  var i = 0;
  while (i < len) {
    var word = string.charCodeAt(i);
    if (55296 <= word && word <= 56319) {
      array[i] = func(_Utils_chr(string[i] + string[i + 1]));
      i += 2;
      continue;
    }
    array[i] = func(_Utils_chr(string[i]));
    i++;
  }
  return array.join("");
});
F2(function(isGood, str) {
  var arr = [];
  var len = str.length;
  var i = 0;
  while (i < len) {
    var char = str[i];
    var word = str.charCodeAt(i);
    i++;
    if (55296 <= word && word <= 56319) {
      char += str[i];
      i++;
    }
    if (isGood(_Utils_chr(char))) {
      arr.push(char);
    }
  }
  return arr.join("");
});
var _String_foldl = F3(function(func, state, string) {
  var len = string.length;
  var i = 0;
  while (i < len) {
    var char = string[i];
    var word = string.charCodeAt(i);
    i++;
    if (55296 <= word && word <= 56319) {
      char += string[i];
      i++;
    }
    state = A2(func, _Utils_chr(char), state);
  }
  return state;
});
var _String_foldr = F3(function(func, state, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    state = A2(func, _Utils_chr(char), state);
  }
  return state;
});
var _String_split = F2(function(sep, str) {
  return str.split(sep);
});
var _String_join = F2(function(sep, strs) {
  return strs.join(sep);
});
var _String_slice = F3(function(start, end, str) {
  return str.slice(start, end);
});
function _String_words(str) {
  return _List_fromArray(str.trim().split(/\s+/g));
}
function _String_toLower(str) {
  return str.toLowerCase();
}
F2(function(isGood, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    if (isGood(_Utils_chr(char))) {
      return true;
    }
  }
  return false;
});
var _String_all = F2(function(isGood, string) {
  var i = string.length;
  while (i--) {
    var char = string[i];
    var word = string.charCodeAt(i);
    if (56320 <= word && word <= 57343) {
      i--;
      char = string[i] + char;
    }
    if (!isGood(_Utils_chr(char))) {
      return false;
    }
  }
  return true;
});
var _String_contains = F2(function(sub, str) {
  return str.indexOf(sub) > -1;
});
F2(function(sub, str) {
  return str.indexOf(sub) === 0;
});
var _String_endsWith = F2(function(sub, str) {
  return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
});
var _String_indexes = F2(function(sub, str) {
  var subLen = sub.length;
  if (subLen < 1) {
    return _List_Nil;
  }
  var i = 0;
  var is = [];
  while ((i = str.indexOf(sub, i)) > -1) {
    is.push(i);
    i = i + subLen;
  }
  return _List_fromArray(is);
});
function _String_fromNumber(number) {
  return number + "";
}
function _String_toInt(str) {
  var total = 0;
  var code0 = str.charCodeAt(0);
  var start = code0 == 43 || code0 == 45 ? 1 : 0;
  for (var i = start; i < str.length; ++i) {
    var code = str.charCodeAt(i);
    if (code < 48 || 57 < code) {
      return $elm$core$Maybe$Nothing;
    }
    total = 10 * total + code - 48;
  }
  return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
}
function _Char_toCode(char) {
  var code = char.charCodeAt(0);
  if (55296 <= code && code <= 56319) {
    return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
  }
  return code;
}
function _Json_succeed(msg) {
  return {
    $: 0,
    a: msg
  };
}
function _Json_fail(msg) {
  return {
    $: 1,
    a: msg
  };
}
function _Json_decodePrim(decoder) {
  return { $: 2, b: decoder };
}
var _Json_decodeInt = _Json_decodePrim(function(value) {
  return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
});
var _Json_decodeValue = _Json_decodePrim(function(value) {
  return $elm$core$Result$Ok(_Json_wrap(value));
});
var _Json_decodeString = _Json_decodePrim(function(value) {
  return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
});
function _Json_decodeList(decoder) {
  return { $: 3, b: decoder };
}
var _Json_decodeField = F2(function(field, decoder) {
  return {
    $: 6,
    d: field,
    b: decoder
  };
});
F2(function(index, decoder) {
  return {
    $: 7,
    e: index,
    b: decoder
  };
});
function _Json_mapMany(f, decoders) {
  return {
    $: 9,
    f,
    g: decoders
  };
}
var _Json_andThen = F2(function(callback, decoder) {
  return {
    $: 10,
    b: decoder,
    h: callback
  };
});
var _Json_map1 = F2(function(f, d1) {
  return _Json_mapMany(f, [d1]);
});
var _Json_map2 = F3(function(f, d1, d2) {
  return _Json_mapMany(f, [d1, d2]);
});
F4(function(f, d1, d2, d3) {
  return _Json_mapMany(f, [d1, d2, d3]);
});
F5(function(f, d1, d2, d3, d4) {
  return _Json_mapMany(f, [d1, d2, d3, d4]);
});
F6(function(f, d1, d2, d3, d4, d5) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});
F7(function(f, d1, d2, d3, d4, d5, d6) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});
F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});
F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});
F2(function(decoder, string) {
  try {
    var value = JSON.parse(string);
    return _Json_runHelp(decoder, value);
  } catch (e) {
    return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
  }
});
var _Json_run = F2(function(decoder, value) {
  return _Json_runHelp(decoder, _Json_unwrap(value));
});
function _Json_runHelp(decoder, value) {
  switch (decoder.$) {
    case 2:
      return decoder.b(value);
    case 5:
      return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
    case 3:
      if (!_Json_isArray(value)) {
        return _Json_expecting("a LIST", value);
      }
      return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
    case 4:
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
    case 6:
      var field = decoder.d;
      if (typeof value !== "object" || value === null || !(field in value)) {
        return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
      }
      var result = _Json_runHelp(decoder.b, value[field]);
      return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
    case 7:
      var index = decoder.e;
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      if (index >= value.length) {
        return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
      }
      var result = _Json_runHelp(decoder.b, value[index]);
      return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
    case 8:
      if (typeof value !== "object" || value === null || _Json_isArray(value)) {
        return _Json_expecting("an OBJECT", value);
      }
      var keyValuePairs = _List_Nil;
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          var result = _Json_runHelp(decoder.b, value[key]);
          if (!$elm$core$Result$isOk(result)) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
          }
          keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
        }
      }
      return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
    case 9:
      var answer = decoder.f;
      var decoders = decoder.g;
      for (var i = 0; i < decoders.length; i++) {
        var result = _Json_runHelp(decoders[i], value);
        if (!$elm$core$Result$isOk(result)) {
          return result;
        }
        answer = answer(result.a);
      }
      return $elm$core$Result$Ok(answer);
    case 10:
      var result = _Json_runHelp(decoder.b, value);
      return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
    case 11:
      var errors = _List_Nil;
      for (var temp = decoder.g; temp.b; temp = temp.b) {
        var result = _Json_runHelp(temp.a, value);
        if ($elm$core$Result$isOk(result)) {
          return result;
        }
        errors = _List_Cons(result.a, errors);
      }
      return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
    case 1:
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
    case 0:
      return $elm$core$Result$Ok(decoder.a);
  }
}
function _Json_runArrayDecoder(decoder, value, toElmValue) {
  var len = value.length;
  var array = new Array(len);
  for (var i = 0; i < len; i++) {
    var result = _Json_runHelp(decoder, value[i]);
    if (!$elm$core$Result$isOk(result)) {
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
    }
    array[i] = result.a;
  }
  return $elm$core$Result$Ok(toElmValue(array));
}
function _Json_isArray(value) {
  return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
}
function _Json_toElmArray(array) {
  return A2($elm$core$Array$initialize, array.length, function(i) {
    return array[i];
  });
}
function _Json_expecting(type, value) {
  return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
}
function _Json_equality(x, y) {
  if (x === y) {
    return true;
  }
  if (x.$ !== y.$) {
    return false;
  }
  switch (x.$) {
    case 0:
    case 1:
      return x.a === y.a;
    case 2:
      return x.b === y.b;
    case 5:
      return x.c === y.c;
    case 3:
    case 4:
    case 8:
      return _Json_equality(x.b, y.b);
    case 6:
      return x.d === y.d && _Json_equality(x.b, y.b);
    case 7:
      return x.e === y.e && _Json_equality(x.b, y.b);
    case 9:
      return x.f === y.f && _Json_listEquality(x.g, y.g);
    case 10:
      return x.h === y.h && _Json_equality(x.b, y.b);
    case 11:
      return _Json_listEquality(x.g, y.g);
  }
}
function _Json_listEquality(aDecoders, bDecoders) {
  var len = aDecoders.length;
  if (len !== bDecoders.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (!_Json_equality(aDecoders[i], bDecoders[i])) {
      return false;
    }
  }
  return true;
}
var _Json_encode = F2(function(indentLevel, value) {
  return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
});
function _Json_wrap(value) {
  return value;
}
function _Json_unwrap(value) {
  return value;
}
function _Json_emptyArray() {
  return [];
}
function _Json_emptyObject() {
  return {};
}
var _Json_addField = F3(function(key, value, object) {
  object[key] = _Json_unwrap(value);
  return object;
});
function _Json_addEntry(func) {
  return F2(function(entry, array) {
    array.push(_Json_unwrap(func(entry)));
    return array;
  });
}
function _Scheduler_succeed(value) {
  return {
    $: 0,
    a: value
  };
}
function _Scheduler_fail(error) {
  return {
    $: 1,
    a: error
  };
}
function _Scheduler_binding(callback) {
  return {
    $: 2,
    b: callback,
    c: null
  };
}
var _Scheduler_andThen = F2(function(callback, task) {
  return {
    $: 3,
    b: callback,
    d: task
  };
});
F2(function(callback, task) {
  return {
    $: 4,
    b: callback,
    d: task
  };
});
function _Scheduler_receive(callback) {
  return {
    $: 5,
    b: callback
  };
}
var _Scheduler_guid = 0;
function _Scheduler_rawSpawn(task) {
  var proc = {
    $: 0,
    e: _Scheduler_guid++,
    f: task,
    g: null,
    h: []
  };
  _Scheduler_enqueue(proc);
  return proc;
}
function _Scheduler_spawn(task) {
  return _Scheduler_binding(function(callback) {
    callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
  });
}
function _Scheduler_rawSend(proc, msg) {
  proc.h.push(msg);
  _Scheduler_enqueue(proc);
}
var _Scheduler_send = F2(function(proc, msg) {
  return _Scheduler_binding(function(callback) {
    _Scheduler_rawSend(proc, msg);
    callback(_Scheduler_succeed(_Utils_Tuple0));
  });
});
function _Scheduler_kill(proc) {
  return _Scheduler_binding(function(callback) {
    var task = proc.f;
    if (task.$ === 2 && task.c) {
      task.c();
    }
    proc.f = null;
    callback(_Scheduler_succeed(_Utils_Tuple0));
  });
}
var _Scheduler_working = false;
var _Scheduler_queue = [];
function _Scheduler_enqueue(proc) {
  _Scheduler_queue.push(proc);
  if (_Scheduler_working) {
    return;
  }
  _Scheduler_working = true;
  while (proc = _Scheduler_queue.shift()) {
    _Scheduler_step(proc);
  }
  _Scheduler_working = false;
}
function _Scheduler_step(proc) {
  while (proc.f) {
    var rootTag = proc.f.$;
    if (rootTag === 0 || rootTag === 1) {
      while (proc.g && proc.g.$ !== rootTag) {
        proc.g = proc.g.i;
      }
      if (!proc.g) {
        return;
      }
      proc.f = proc.g.b(proc.f.a);
      proc.g = proc.g.i;
    } else if (rootTag === 2) {
      proc.f.c = proc.f.b(function(newRoot) {
        proc.f = newRoot;
        _Scheduler_enqueue(proc);
      });
      return;
    } else if (rootTag === 5) {
      if (proc.h.length === 0) {
        return;
      }
      proc.f = proc.f.b(proc.h.shift());
    } else {
      proc.g = {
        $: rootTag === 3 ? 0 : 1,
        b: proc.f.b,
        i: proc.g
      };
      proc.f = proc.f.d;
    }
  }
}
function _Process_sleep(time) {
  return _Scheduler_binding(function(callback) {
    var id = setTimeout(function() {
      callback(_Scheduler_succeed(_Utils_Tuple0));
    }, time);
    return function() {
      clearTimeout(id);
    };
  });
}
F4(function(impl, flagDecoder, debugMetadata, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.c8,
    impl.ed,
    impl.dU,
    function() {
      return function() {
      };
    }
  );
});
function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
  var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
  $elm$core$Result$isOk(result) || _Debug_crash(
    2
    /**_UNUSED/, _Json_errorToString(result.a) /**/
  );
  var managers = {};
  var initPair = init(result.a);
  var model = initPair.a;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);
  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper(model = pair.a, viewMetadata);
    _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
  }
  _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
  return ports ? { ports } : {};
}
var _Platform_effectManagers = {};
function _Platform_setupEffects(managers, sendToApp) {
  var ports;
  for (var key in _Platform_effectManagers) {
    var manager = _Platform_effectManagers[key];
    if (manager.a) {
      ports = ports || {};
      ports[key] = manager.a(key, sendToApp);
    }
    managers[key] = _Platform_instantiateManager(manager, sendToApp);
  }
  return ports;
}
function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
  return {
    b: init,
    c: onEffects,
    d: onSelfMsg,
    e: cmdMap,
    f: subMap
  };
}
function _Platform_instantiateManager(info, sendToApp) {
  var router = {
    g: sendToApp,
    h: void 0
  };
  var onEffects = info.c;
  var onSelfMsg = info.d;
  var cmdMap = info.e;
  var subMap = info.f;
  function loop(state) {
    return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
      var value = msg.a;
      if (msg.$ === 0) {
        return A3(onSelfMsg, router, value, state);
      }
      return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
    }));
  }
  return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}
var _Platform_sendToApp = F2(function(router, msg) {
  return _Scheduler_binding(function(callback) {
    router.g(msg);
    callback(_Scheduler_succeed(_Utils_Tuple0));
  });
});
var _Platform_sendToSelf = F2(function(router, msg) {
  return A2(_Scheduler_send, router.h, {
    $: 0,
    a: msg
  });
});
function _Platform_leaf(home) {
  return function(value) {
    return {
      $: 1,
      k: home,
      l: value
    };
  };
}
function _Platform_batch(list) {
  return {
    $: 2,
    m: list
  };
}
var _Platform_map = F2(function(tagger, bag) {
  return {
    $: 3,
    n: tagger,
    o: bag
  };
});
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;
function _Platform_enqueueEffects(managers, cmdBag, subBag) {
  _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
  if (_Platform_effectsActive)
    return;
  _Platform_effectsActive = true;
  for (var fx; fx = _Platform_effectsQueue.shift(); ) {
    _Platform_dispatchEffects(fx.p, fx.q, fx.r);
  }
  _Platform_effectsActive = false;
}
function _Platform_dispatchEffects(managers, cmdBag, subBag) {
  var effectsDict = {};
  _Platform_gatherEffects(true, cmdBag, effectsDict, null);
  _Platform_gatherEffects(false, subBag, effectsDict, null);
  for (var home in managers) {
    _Scheduler_rawSend(managers[home], {
      $: "fx",
      a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
    });
  }
}
function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
  switch (bag.$) {
    case 1:
      var home = bag.k;
      var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
      effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
      return;
    case 2:
      for (var list = bag.m; list.b; list = list.b) {
        _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
      }
      return;
    case 3:
      _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
        s: bag.n,
        t: taggers
      });
      return;
  }
}
function _Platform_toEffect(isCmd, home, taggers, value) {
  function applyTaggers(x) {
    for (var temp = taggers; temp; temp = temp.t) {
      x = temp.s(x);
    }
    return x;
  }
  var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
  return A2(map, applyTaggers, value);
}
function _Platform_insert(isCmd, newEffect, effects) {
  effects = effects || { i: _List_Nil, j: _List_Nil };
  isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
  return effects;
}
function _Platform_checkPortName(name) {
  if (_Platform_effectManagers[name]) {
    _Debug_crash(3);
  }
}
function _Platform_outgoingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    e: _Platform_outgoingPortMap,
    u: converter,
    a: _Platform_setupOutgoingPort
  };
  return _Platform_leaf(name);
}
var _Platform_outgoingPortMap = F2(function(tagger, value) {
  return value;
});
function _Platform_setupOutgoingPort(name) {
  var subs = [];
  var converter = _Platform_effectManagers[name].u;
  var init = _Process_sleep(0);
  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
    for (; cmdList.b; cmdList = cmdList.b) {
      var currentSubs = subs;
      var value = _Json_unwrap(converter(cmdList.a));
      for (var i = 0; i < currentSubs.length; i++) {
        currentSubs[i](value);
      }
    }
    return init;
  });
  function subscribe(callback) {
    subs.push(callback);
  }
  function unsubscribe(callback) {
    subs = subs.slice();
    var index = subs.indexOf(callback);
    if (index >= 0) {
      subs.splice(index, 1);
    }
  }
  return {
    subscribe,
    unsubscribe
  };
}
function _Platform_incomingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    f: _Platform_incomingPortMap,
    u: converter,
    a: _Platform_setupIncomingPort
  };
  return _Platform_leaf(name);
}
var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
  return function(value) {
    return tagger(finalTagger(value));
  };
});
function _Platform_setupIncomingPort(name, sendToApp) {
  var subs = _List_Nil;
  var converter = _Platform_effectManagers[name].u;
  var init = _Scheduler_succeed(null);
  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(function(router, subList, state) {
    subs = subList;
    return init;
  });
  function send(incomingValue) {
    var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
    $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
    var value = result.a;
    for (var temp = subs; temp.b; temp = temp.b) {
      sendToApp(temp.a(value));
    }
  }
  return { send };
}
var _VirtualDom_divertHrefToApp;
var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
function _VirtualDom_appendChild(parent, child) {
  parent.appendChild(child);
}
F4(function(virtualNode, flagDecoder, debugMetadata, args) {
  var node = args["node"];
  node.parentNode.replaceChild(
    _VirtualDom_render(virtualNode, function() {
    }),
    node
  );
  return {};
});
function _VirtualDom_text(string) {
  return {
    $: 0,
    a: string
  };
}
var _VirtualDom_nodeNS = F2(function(namespace, tag) {
  return F2(function(factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
      var kid = kidList.a;
      descendantsCount += kid.b || 0;
      kids.push(kid);
    }
    descendantsCount += kids.length;
    return {
      $: 1,
      c: tag,
      d: _VirtualDom_organizeFacts(factList),
      e: kids,
      f: namespace,
      b: descendantsCount
    };
  });
});
var _VirtualDom_node = _VirtualDom_nodeNS(void 0);
var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
  return F2(function(factList, kidList) {
    for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
      var kid = kidList.a;
      descendantsCount += kid.b.b || 0;
      kids.push(kid);
    }
    descendantsCount += kids.length;
    return {
      $: 2,
      c: tag,
      d: _VirtualDom_organizeFacts(factList),
      e: kids,
      f: namespace,
      b: descendantsCount
    };
  });
});
var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(void 0);
var _VirtualDom_map = F2(function(tagger, node) {
  return {
    $: 4,
    j: tagger,
    k: node,
    b: 1 + (node.b || 0)
  };
});
function _VirtualDom_thunk(refs, thunk) {
  return {
    $: 5,
    l: refs,
    m: thunk,
    k: void 0
  };
}
F2(function(func, a) {
  return _VirtualDom_thunk([func, a], function() {
    return func(a);
  });
});
F3(function(func, a, b) {
  return _VirtualDom_thunk([func, a, b], function() {
    return A2(func, a, b);
  });
});
F4(function(func, a, b, c) {
  return _VirtualDom_thunk([func, a, b, c], function() {
    return A3(func, a, b, c);
  });
});
F5(function(func, a, b, c, d) {
  return _VirtualDom_thunk([func, a, b, c, d], function() {
    return A4(func, a, b, c, d);
  });
});
F6(function(func, a, b, c, d, e) {
  return _VirtualDom_thunk([func, a, b, c, d, e], function() {
    return A5(func, a, b, c, d, e);
  });
});
F7(function(func, a, b, c, d, e, f) {
  return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
    return A6(func, a, b, c, d, e, f);
  });
});
F8(function(func, a, b, c, d, e, f, g) {
  return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
    return A7(func, a, b, c, d, e, f, g);
  });
});
F9(function(func, a, b, c, d, e, f, g, h) {
  return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
    return A8(func, a, b, c, d, e, f, g, h);
  });
});
var _VirtualDom_on = F2(function(key, handler) {
  return {
    $: "a0",
    n: key,
    o: handler
  };
});
var _VirtualDom_style = F2(function(key, value) {
  return {
    $: "a1",
    n: key,
    o: value
  };
});
var _VirtualDom_property = F2(function(key, value) {
  return {
    $: "a2",
    n: key,
    o: value
  };
});
var _VirtualDom_attribute = F2(function(key, value) {
  return {
    $: "a3",
    n: key,
    o: value
  };
});
F3(function(namespace, key, value) {
  return {
    $: "a4",
    n: key,
    o: { f: namespace, o: value }
  };
});
var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
function _VirtualDom_noScript(tag) {
  return _VirtualDom_RE_script.test(tag) ? "p" : tag;
}
function _VirtualDom_noOnOrFormAction(key) {
  return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
}
function _VirtualDom_noInnerHtmlOrFormAction(key) {
  return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
}
function _VirtualDom_noJavaScriptUri(value) {
  return _VirtualDom_RE_js.test(value) ? (
    /**/
    ""
  ) : value;
}
function _VirtualDom_noJavaScriptOrHtmlUri(value) {
  return _VirtualDom_RE_js_html.test(value) ? (
    /**/
    ""
  ) : value;
}
function _VirtualDom_noJavaScriptOrHtmlJson(value) {
  return typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value)) ? _Json_wrap(
    /**/
    ""
    //*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
  ) : value;
}
var _VirtualDom_mapAttribute = F2(function(func, attr) {
  return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
});
function _VirtualDom_mapHandler(func, handler) {
  var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
  return {
    $: handler.$,
    a: !tag ? A2($elm$json$Json$Decode$map, func, handler.a) : A3(
      $elm$json$Json$Decode$map2,
      tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord,
      $elm$json$Json$Decode$succeed(func),
      handler.a
    )
  };
}
var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
  return _Utils_Tuple2(func(tuple.a), tuple.b);
});
var _VirtualDom_mapEventRecord = F2(function(func, record) {
  return {
    N: func(record.N),
    ba: record.ba,
    a4: record.a4
  };
});
function _VirtualDom_organizeFacts(factList) {
  for (var facts = {}; factList.b; factList = factList.b) {
    var entry = factList.a;
    var tag = entry.$;
    var key = entry.n;
    var value = entry.o;
    if (tag === "a2") {
      key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
      continue;
    }
    var subFacts = facts[tag] || (facts[tag] = {});
    tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value;
  }
  return facts;
}
function _VirtualDom_addClass(object, key, newClass) {
  var classes = object[key];
  object[key] = classes ? classes + " " + newClass : newClass;
}
function _VirtualDom_render(vNode, eventNode) {
  var tag = vNode.$;
  if (tag === 5) {
    return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
  }
  if (tag === 0) {
    return _VirtualDom_doc.createTextNode(vNode.a);
  }
  if (tag === 4) {
    var subNode = vNode.k;
    var tagger = vNode.j;
    while (subNode.$ === 4) {
      typeof tagger !== "object" ? tagger = [tagger, subNode.j] : tagger.push(subNode.j);
      subNode = subNode.k;
    }
    var subEventRoot = { j: tagger, p: eventNode };
    var domNode = _VirtualDom_render(subNode, subEventRoot);
    domNode.elm_event_node_ref = subEventRoot;
    return domNode;
  }
  if (tag === 3) {
    var domNode = vNode.h(vNode.g);
    _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
    return domNode;
  }
  var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
  if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
    domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
  }
  _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
  for (var kids = vNode.e, i = 0; i < kids.length; i++) {
    _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
  }
  return domNode;
}
function _VirtualDom_applyFacts(domNode, eventNode, facts) {
  for (var key in facts) {
    var value = facts[key];
    key === "a1" ? _VirtualDom_applyStyles(domNode, value) : key === "a0" ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === "a3" ? _VirtualDom_applyAttrs(domNode, value) : key === "a4" ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
  }
}
function _VirtualDom_applyStyles(domNode, styles) {
  var domNodeStyle = domNode.style;
  for (var key in styles) {
    domNodeStyle[key] = styles[key];
  }
}
function _VirtualDom_applyAttrs(domNode, attrs) {
  for (var key in attrs) {
    var value = attrs[key];
    typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
  }
}
function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
  for (var key in nsAttrs) {
    var pair = nsAttrs[key];
    var namespace = pair.f;
    var value = pair.o;
    typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
  }
}
function _VirtualDom_applyEvents(domNode, eventNode, events) {
  var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
  for (var key in events) {
    var newHandler = events[key];
    var oldCallback = allCallbacks[key];
    if (!newHandler) {
      domNode.removeEventListener(key, oldCallback);
      allCallbacks[key] = void 0;
      continue;
    }
    if (oldCallback) {
      var oldHandler = oldCallback.q;
      if (oldHandler.$ === newHandler.$) {
        oldCallback.q = newHandler;
        continue;
      }
      domNode.removeEventListener(key, oldCallback);
    }
    oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
    domNode.addEventListener(
      key,
      oldCallback,
      _VirtualDom_passiveSupported && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
    );
    allCallbacks[key] = oldCallback;
  }
}
var _VirtualDom_passiveSupported;
try {
  window.addEventListener("t", null, Object.defineProperty({}, "passive", {
    get: function() {
      _VirtualDom_passiveSupported = true;
    }
  }));
} catch (e) {
}
function _VirtualDom_makeCallback(eventNode, initialHandler) {
  function callback(event) {
    var handler = callback.q;
    var result = _Json_runHelp(handler.a, event);
    if (!$elm$core$Result$isOk(result)) {
      return;
    }
    var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
    var value = result.a;
    var message = !tag ? value : tag < 3 ? value.a : value.N;
    var stopPropagation = tag == 1 ? value.b : tag == 3 && value.ba;
    var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.a4) && event.preventDefault(), eventNode);
    var tagger;
    var i;
    while (tagger = currentEventNode.j) {
      if (typeof tagger == "function") {
        message = tagger(message);
      } else {
        for (var i = tagger.length; i--; ) {
          message = tagger[i](message);
        }
      }
      currentEventNode = currentEventNode.p;
    }
    currentEventNode(message, stopPropagation);
  }
  callback.q = initialHandler;
  return callback;
}
function _VirtualDom_equalEvents(x, y) {
  return x.$ == y.$ && _Json_equality(x.a, y.a);
}
function _VirtualDom_diff(x, y) {
  var patches = [];
  _VirtualDom_diffHelp(x, y, patches, 0);
  return patches;
}
function _VirtualDom_pushPatch(patches, type, index, data) {
  var patch = {
    $: type,
    r: index,
    s: data,
    t: void 0,
    u: void 0
  };
  patches.push(patch);
  return patch;
}
function _VirtualDom_diffHelp(x, y, patches, index) {
  if (x === y) {
    return;
  }
  var xType = x.$;
  var yType = y.$;
  if (xType !== yType) {
    if (xType === 1 && yType === 2) {
      y = _VirtualDom_dekey(y);
      yType = 1;
    } else {
      _VirtualDom_pushPatch(patches, 0, index, y);
      return;
    }
  }
  switch (yType) {
    case 5:
      var xRefs = x.l;
      var yRefs = y.l;
      var i = xRefs.length;
      var same = i === yRefs.length;
      while (same && i--) {
        same = xRefs[i] === yRefs[i];
      }
      if (same) {
        y.k = x.k;
        return;
      }
      y.k = y.m();
      var subPatches = [];
      _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
      subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
      return;
    case 4:
      var xTaggers = x.j;
      var yTaggers = y.j;
      var nesting = false;
      var xSubNode = x.k;
      while (xSubNode.$ === 4) {
        nesting = true;
        typeof xTaggers !== "object" ? xTaggers = [xTaggers, xSubNode.j] : xTaggers.push(xSubNode.j);
        xSubNode = xSubNode.k;
      }
      var ySubNode = y.k;
      while (ySubNode.$ === 4) {
        nesting = true;
        typeof yTaggers !== "object" ? yTaggers = [yTaggers, ySubNode.j] : yTaggers.push(ySubNode.j);
        ySubNode = ySubNode.k;
      }
      if (nesting && xTaggers.length !== yTaggers.length) {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }
      if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
        _VirtualDom_pushPatch(patches, 2, index, yTaggers);
      }
      _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
      return;
    case 0:
      if (x.a !== y.a) {
        _VirtualDom_pushPatch(patches, 3, index, y.a);
      }
      return;
    case 1:
      _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
      return;
    case 2:
      _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
      return;
    case 3:
      if (x.h !== y.h) {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }
      var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
      factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
      var patch = y.i(x.g, y.g);
      patch && _VirtualDom_pushPatch(patches, 5, index, patch);
      return;
  }
}
function _VirtualDom_pairwiseRefEqual(as, bs) {
  for (var i = 0; i < as.length; i++) {
    if (as[i] !== bs[i]) {
      return false;
    }
  }
  return true;
}
function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
  if (x.c !== y.c || x.f !== y.f) {
    _VirtualDom_pushPatch(patches, 0, index, y);
    return;
  }
  var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
  factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
  diffKids(x, y, patches, index);
}
function _VirtualDom_diffFacts(x, y, category) {
  var diff;
  for (var xKey in x) {
    if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
      var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
      if (subDiff) {
        diff = diff || {};
        diff[xKey] = subDiff;
      }
      continue;
    }
    if (!(xKey in y)) {
      diff = diff || {};
      diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? void 0 : { f: x[xKey].f, o: void 0 };
      continue;
    }
    var xValue = x[xKey];
    var yValue = y[xKey];
    if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
      continue;
    }
    diff = diff || {};
    diff[xKey] = yValue;
  }
  for (var yKey in y) {
    if (!(yKey in x)) {
      diff = diff || {};
      diff[yKey] = y[yKey];
    }
  }
  return diff;
}
function _VirtualDom_diffKids(xParent, yParent, patches, index) {
  var xKids = xParent.e;
  var yKids = yParent.e;
  var xLen = xKids.length;
  var yLen = yKids.length;
  if (xLen > yLen) {
    _VirtualDom_pushPatch(patches, 6, index, {
      v: yLen,
      i: xLen - yLen
    });
  } else if (xLen < yLen) {
    _VirtualDom_pushPatch(patches, 7, index, {
      v: xLen,
      e: yKids
    });
  }
  for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
    var xKid = xKids[i];
    _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
    index += xKid.b || 0;
  }
}
function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
  var localPatches = [];
  var changes = {};
  var inserts = [];
  var xKids = xParent.e;
  var yKids = yParent.e;
  var xLen = xKids.length;
  var yLen = yKids.length;
  var xIndex = 0;
  var yIndex = 0;
  var index = rootIndex;
  while (xIndex < xLen && yIndex < yLen) {
    var x = xKids[xIndex];
    var y = yKids[yIndex];
    var xKey = x.a;
    var yKey = y.a;
    var xNode = x.b;
    var yNode = y.b;
    var newMatch = void 0;
    var oldMatch = void 0;
    if (xKey === yKey) {
      index++;
      _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
      index += xNode.b || 0;
      xIndex++;
      yIndex++;
      continue;
    }
    var xNext = xKids[xIndex + 1];
    var yNext = yKids[yIndex + 1];
    if (xNext) {
      var xNextKey = xNext.a;
      var xNextNode = xNext.b;
      oldMatch = yKey === xNextKey;
    }
    if (yNext) {
      var yNextKey = yNext.a;
      var yNextNode = yNext.b;
      newMatch = xKey === yNextKey;
    }
    if (newMatch && oldMatch) {
      index++;
      _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
      _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
      index += xNode.b || 0;
      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
      index += xNextNode.b || 0;
      xIndex += 2;
      yIndex += 2;
      continue;
    }
    if (newMatch) {
      index++;
      _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
      _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
      index += xNode.b || 0;
      xIndex += 1;
      yIndex += 2;
      continue;
    }
    if (oldMatch) {
      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
      index += xNode.b || 0;
      index++;
      _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
      index += xNextNode.b || 0;
      xIndex += 2;
      yIndex += 1;
      continue;
    }
    if (xNext && xNextKey === yNextKey) {
      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
      _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
      index += xNode.b || 0;
      index++;
      _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
      index += xNextNode.b || 0;
      xIndex += 2;
      yIndex += 2;
      continue;
    }
    break;
  }
  while (xIndex < xLen) {
    index++;
    var x = xKids[xIndex];
    var xNode = x.b;
    _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
    index += xNode.b || 0;
    xIndex++;
  }
  while (yIndex < yLen) {
    var endInserts = endInserts || [];
    var y = yKids[yIndex];
    _VirtualDom_insertNode(changes, localPatches, y.a, y.b, void 0, endInserts);
    yIndex++;
  }
  if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
    _VirtualDom_pushPatch(patches, 8, rootIndex, {
      w: localPatches,
      x: inserts,
      y: endInserts
    });
  }
}
var _VirtualDom_POSTFIX = "_elmW6BL";
function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
  var entry = changes[key];
  if (!entry) {
    entry = {
      c: 0,
      z: vnode,
      r: yIndex,
      s: void 0
    };
    inserts.push({ r: yIndex, A: entry });
    changes[key] = entry;
    return;
  }
  if (entry.c === 1) {
    inserts.push({ r: yIndex, A: entry });
    entry.c = 2;
    var subPatches = [];
    _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
    entry.r = yIndex;
    entry.s.s = {
      w: subPatches,
      A: entry
    };
    return;
  }
  _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}
function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
  var entry = changes[key];
  if (!entry) {
    var patch = _VirtualDom_pushPatch(localPatches, 9, index, void 0);
    changes[key] = {
      c: 1,
      z: vnode,
      r: index,
      s: patch
    };
    return;
  }
  if (entry.c === 0) {
    entry.c = 2;
    var subPatches = [];
    _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
    _VirtualDom_pushPatch(localPatches, 9, index, {
      w: subPatches,
      A: entry
    });
    return;
  }
  _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}
function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
  _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
  var patch = patches[i];
  var index = patch.r;
  while (index === low) {
    var patchType = patch.$;
    if (patchType === 1) {
      _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
    } else if (patchType === 8) {
      patch.t = domNode;
      patch.u = eventNode;
      var subPatches = patch.s.w;
      if (subPatches.length > 0) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
      }
    } else if (patchType === 9) {
      patch.t = domNode;
      patch.u = eventNode;
      var data = patch.s;
      if (data) {
        data.A.s = domNode;
        var subPatches = data.w;
        if (subPatches.length > 0) {
          _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      }
    } else {
      patch.t = domNode;
      patch.u = eventNode;
    }
    i++;
    if (!(patch = patches[i]) || (index = patch.r) > high) {
      return i;
    }
  }
  var tag = vNode.$;
  if (tag === 4) {
    var subNode = vNode.k;
    while (subNode.$ === 4) {
      subNode = subNode.k;
    }
    return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
  }
  var vKids = vNode.e;
  var childNodes = domNode.childNodes;
  for (var j = 0; j < vKids.length; j++) {
    low++;
    var vKid = tag === 1 ? vKids[j] : vKids[j].b;
    var nextLow = low + (vKid.b || 0);
    if (low <= index && index <= nextLow) {
      i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
      if (!(patch = patches[i]) || (index = patch.r) > high) {
        return i;
      }
    }
    low = nextLow;
  }
  return i;
}
function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
  if (patches.length === 0) {
    return rootDomNode;
  }
  _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
  return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}
function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
  for (var i = 0; i < patches.length; i++) {
    var patch = patches[i];
    var localDomNode = patch.t;
    var newNode = _VirtualDom_applyPatch(localDomNode, patch);
    if (localDomNode === rootDomNode) {
      rootDomNode = newNode;
    }
  }
  return rootDomNode;
}
function _VirtualDom_applyPatch(domNode, patch) {
  switch (patch.$) {
    case 0:
      return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
    case 4:
      _VirtualDom_applyFacts(domNode, patch.u, patch.s);
      return domNode;
    case 3:
      domNode.replaceData(0, domNode.length, patch.s);
      return domNode;
    case 1:
      return _VirtualDom_applyPatchesHelp(domNode, patch.s);
    case 2:
      if (domNode.elm_event_node_ref) {
        domNode.elm_event_node_ref.j = patch.s;
      } else {
        domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
      }
      return domNode;
    case 6:
      var data = patch.s;
      for (var i = 0; i < data.i; i++) {
        domNode.removeChild(domNode.childNodes[data.v]);
      }
      return domNode;
    case 7:
      var data = patch.s;
      var kids = data.e;
      var i = data.v;
      var theEnd = domNode.childNodes[i];
      for (; i < kids.length; i++) {
        domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
      }
      return domNode;
    case 9:
      var data = patch.s;
      if (!data) {
        domNode.parentNode.removeChild(domNode);
        return domNode;
      }
      var entry = data.A;
      if (typeof entry.r !== "undefined") {
        domNode.parentNode.removeChild(domNode);
      }
      entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
      return domNode;
    case 8:
      return _VirtualDom_applyPatchReorder(domNode, patch);
    case 5:
      return patch.s(domNode);
    default:
      _Debug_crash(10);
  }
}
function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
  var parentNode = domNode.parentNode;
  var newNode = _VirtualDom_render(vNode, eventNode);
  if (!newNode.elm_event_node_ref) {
    newNode.elm_event_node_ref = domNode.elm_event_node_ref;
  }
  if (parentNode && newNode !== domNode) {
    parentNode.replaceChild(newNode, domNode);
  }
  return newNode;
}
function _VirtualDom_applyPatchReorder(domNode, patch) {
  var data = patch.s;
  var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
  domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
  var inserts = data.x;
  for (var i = 0; i < inserts.length; i++) {
    var insert = inserts[i];
    var entry = insert.A;
    var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
    domNode.insertBefore(node, domNode.childNodes[insert.r]);
  }
  if (frag) {
    _VirtualDom_appendChild(domNode, frag);
  }
  return domNode;
}
function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
  if (!endInserts) {
    return;
  }
  var frag = _VirtualDom_doc.createDocumentFragment();
  for (var i = 0; i < endInserts.length; i++) {
    var insert = endInserts[i];
    var entry = insert.A;
    _VirtualDom_appendChild(
      frag,
      entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u)
    );
  }
  return frag;
}
function _VirtualDom_virtualize(node) {
  if (node.nodeType === 3) {
    return _VirtualDom_text(node.textContent);
  }
  if (node.nodeType !== 1) {
    return _VirtualDom_text("");
  }
  var attrList = _List_Nil;
  var attrs = node.attributes;
  for (var i = attrs.length; i--; ) {
    var attr = attrs[i];
    var name = attr.name;
    var value = attr.value;
    attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
  }
  var tag = node.tagName.toLowerCase();
  var kidList = _List_Nil;
  var kids = node.childNodes;
  for (var i = kids.length; i--; ) {
    kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
  }
  return A3(_VirtualDom_node, tag, attrList, kidList);
}
function _VirtualDom_dekey(keyedNode) {
  var keyedKids = keyedNode.e;
  var len = keyedKids.length;
  var kids = new Array(len);
  for (var i = 0; i < len; i++) {
    kids[i] = keyedKids[i].b;
  }
  return {
    $: 1,
    c: keyedNode.c,
    d: keyedNode.d,
    e: kids,
    f: keyedNode.f,
    b: keyedNode.b
  };
}
var _Browser_element = F4(function(impl, flagDecoder, debugMetadata, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.c8,
    impl.ed,
    impl.dU,
    function(sendToApp, initialModel) {
      var view = impl.ee;
      var domNode = args["node"];
      var currNode = _VirtualDom_virtualize(domNode);
      return _Browser_makeAnimator(initialModel, function(model) {
        var nextNode = view(model);
        var patches = _VirtualDom_diff(currNode, nextNode);
        domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
        currNode = nextNode;
      });
    }
  );
});
F4(function(impl, flagDecoder, debugMetadata, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.c8,
    impl.ed,
    impl.dU,
    function(sendToApp, initialModel) {
      var divertHrefToApp = impl.a7 && impl.a7(sendToApp);
      var view = impl.ee;
      var title = _VirtualDom_doc.title;
      var bodyNode = _VirtualDom_doc.body;
      var currNode = _VirtualDom_virtualize(bodyNode);
      return _Browser_makeAnimator(initialModel, function(model) {
        _VirtualDom_divertHrefToApp = divertHrefToApp;
        var doc = view(model);
        var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.cy);
        var patches = _VirtualDom_diff(currNode, nextNode);
        bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
        currNode = nextNode;
        _VirtualDom_divertHrefToApp = 0;
        title !== doc.d8 && (_VirtualDom_doc.title = title = doc.d8);
      });
    }
  );
});
var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback) {
  return setTimeout(callback, 1e3 / 60);
};
function _Browser_makeAnimator(model, draw) {
  draw(model);
  var state = 0;
  function updateIfNeeded() {
    state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
  }
  return function(nextModel, isSync) {
    model = nextModel;
    isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), state = 2);
  };
}
F2(function(key, n) {
  return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
    n && history.go(n);
    key();
  }));
});
F2(function(key, url) {
  return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
    history.pushState({}, "", url);
    key();
  }));
});
F2(function(key, url) {
  return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
    history.replaceState({}, "", url);
    key();
  }));
});
var _Browser_fakeNode = { addEventListener: function() {
}, removeEventListener: function() {
} };
var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
var _Browser_on = F3(function(node, eventName, sendToSelf) {
  return _Scheduler_spawn(_Scheduler_binding(function(callback) {
    function handler(event) {
      _Scheduler_rawSpawn(sendToSelf(event));
    }
    node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
    return function() {
      node.removeEventListener(eventName, handler);
    };
  }));
});
var _Browser_decodeEvent = F2(function(decoder, event) {
  var result = _Json_runHelp(decoder, event);
  return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});
function _Browser_withNode(id, doStuff) {
  return _Scheduler_binding(function(callback) {
    _Browser_requestAnimationFrame(function() {
      var node = document.getElementById(id);
      callback(
        node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
      );
    });
  });
}
function _Browser_withWindow(doStuff) {
  return _Scheduler_binding(function(callback) {
    _Browser_requestAnimationFrame(function() {
      callback(_Scheduler_succeed(doStuff()));
    });
  });
}
F2(function(functionName, id) {
  return _Browser_withNode(id, function(node) {
    node[functionName]();
    return _Utils_Tuple0;
  });
});
var _Browser_setViewport = F2(function(x, y) {
  return _Browser_withWindow(function() {
    _Browser_window.scroll(x, y);
    return _Utils_Tuple0;
  });
});
F3(function(id, x, y) {
  return _Browser_withNode(id, function(node) {
    node.scrollLeft = x;
    node.scrollTop = y;
    return _Utils_Tuple0;
  });
});
var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString) {
  var smallLength = smallString.length;
  var isGood = offset + smallLength <= bigString.length;
  for (var i = 0; isGood && i < smallLength; ) {
    var code = bigString.charCodeAt(offset);
    isGood = smallString[i++] === bigString[offset++] && (code === 10 ? (row++, col = 1) : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
  }
  return _Utils_Tuple3(isGood ? offset : -1, row, col);
});
var _Parser_isSubChar = F3(function(predicate, offset, string) {
  return string.length <= offset ? -1 : (string.charCodeAt(offset) & 63488) === 55296 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === "\n" ? -2 : offset + 1 : -1;
});
F3(function(code, offset, string) {
  return string.charCodeAt(offset) === code;
});
F2(function(offset, string) {
  for (; offset < string.length; offset++) {
    var code = string.charCodeAt(offset);
    if (code < 48 || 57 < code) {
      return offset;
    }
  }
  return offset;
});
F3(function(base, offset, string) {
  for (var total = 0; offset < string.length; offset++) {
    var digit = string.charCodeAt(offset) - 48;
    if (digit < 0 || base <= digit)
      break;
    total = base * total + digit;
  }
  return _Utils_Tuple2(offset, total);
});
F2(function(offset, string) {
  for (var total = 0; offset < string.length; offset++) {
    var code = string.charCodeAt(offset);
    if (48 <= code && code <= 57) {
      total = 16 * total + code - 48;
    } else if (65 <= code && code <= 70) {
      total = 16 * total + code - 55;
    } else if (97 <= code && code <= 102) {
      total = 16 * total + code - 87;
    } else {
      break;
    }
  }
  return _Utils_Tuple2(offset, total);
});
F5(function(smallString, offset, row, col, bigString) {
  var newOffset = bigString.indexOf(smallString, offset);
  var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
  while (offset < target) {
    var code = bigString.charCodeAt(offset++);
    code === 10 ? (col = 1, row++) : (col++, (code & 63488) === 55296 && offset++);
  }
  return _Utils_Tuple3(newOffset, row, col);
});
var _File_decoder = _Json_decodePrim(function(value) {
  return typeof File !== "undefined" && value instanceof File ? $elm$core$Result$Ok(value) : _Json_expecting("a FILE", value);
});
function _File_mime(file) {
  return file.type;
}
var _File_downloadNode;
function _File_getDownloadNode() {
  return _File_downloadNode || (_File_downloadNode = document.createElement("a"));
}
F3(function(name, mime, content) {
  return _Scheduler_binding(function(callback) {
    var blob = new Blob([content], { type: mime });
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, name);
      return;
    }
    var node = _File_getDownloadNode();
    var objectUrl = URL.createObjectURL(blob);
    node.href = objectUrl;
    node.download = name;
    _File_click(node);
    URL.revokeObjectURL(objectUrl);
  });
});
function _File_click(node) {
  if (typeof MouseEvent === "function") {
    node.dispatchEvent(new MouseEvent("click"));
  } else {
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(node);
    node.dispatchEvent(event);
    document.body.removeChild(node);
  }
}
var _File_node;
function _File_uploadOneOrMore(mimes) {
  return _Scheduler_binding(function(callback) {
    _File_node = document.createElement("input");
    _File_node.type = "file";
    _File_node.multiple = true;
    _File_node.accept = A2($elm$core$String$join, ",", mimes);
    _File_node.addEventListener("change", function(event) {
      var elmFiles = _List_fromArray(event.target.files);
      callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
    });
    _File_click(_File_node);
  });
}
function _File_toUrl(blob) {
  return _Scheduler_binding(function(callback) {
    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
      callback(_Scheduler_succeed(reader.result));
    });
    reader.readAsDataURL(blob);
    return function() {
      reader.abort();
    };
  });
}
function _Bytes_width(bytes) {
  return bytes.byteLength;
}
F2(function(le, be) {
  return _Scheduler_binding(function(callback) {
    callback(_Scheduler_succeed(new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be));
  });
});
function _Bytes_encode(encoder) {
  var mutableBytes = new DataView(new ArrayBuffer($elm$bytes$Bytes$Encode$getWidth(encoder)));
  $elm$bytes$Bytes$Encode$write(encoder)(mutableBytes)(0);
  return mutableBytes;
}
var _Bytes_write_i8 = F3(function(mb, i, n) {
  mb.setInt8(i, n);
  return i + 1;
});
var _Bytes_write_i16 = F4(function(mb, i, n, isLE) {
  mb.setInt16(i, n, isLE);
  return i + 2;
});
var _Bytes_write_i32 = F4(function(mb, i, n, isLE) {
  mb.setInt32(i, n, isLE);
  return i + 4;
});
var _Bytes_write_u8 = F3(function(mb, i, n) {
  mb.setUint8(i, n);
  return i + 1;
});
var _Bytes_write_u16 = F4(function(mb, i, n, isLE) {
  mb.setUint16(i, n, isLE);
  return i + 2;
});
var _Bytes_write_u32 = F4(function(mb, i, n, isLE) {
  mb.setUint32(i, n, isLE);
  return i + 4;
});
var _Bytes_write_f32 = F4(function(mb, i, n, isLE) {
  mb.setFloat32(i, n, isLE);
  return i + 4;
});
var _Bytes_write_f64 = F4(function(mb, i, n, isLE) {
  mb.setFloat64(i, n, isLE);
  return i + 8;
});
var _Bytes_write_bytes = F3(function(mb, offset, bytes) {
  for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4) {
    mb.setUint32(offset + i, bytes.getUint32(i));
  }
  for (; i < len; i++) {
    mb.setUint8(offset + i, bytes.getUint8(i));
  }
  return offset + len;
});
var _Bytes_write_string = F3(function(mb, offset, string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    offset += code < 128 ? (mb.setUint8(offset, code), 1) : code < 2048 ? (mb.setUint16(
      offset,
      49280 | (code >>> 6 & 31) << 8 | code & 63
      /* 0b00111111 */
    ), 2) : code < 55296 || 56319 < code ? (mb.setUint16(
      offset,
      57472 | (code >>> 12 & 15) << 8 | code >>> 6 & 63
      /* 0b00111111 */
    ), mb.setUint8(
      offset + 2,
      128 | code & 63
      /* 0b00111111 */
    ), 3) : (code = (code - 55296) * 1024 + string.charCodeAt(++i) - 56320 + 65536, mb.setUint32(
      offset,
      4034953344 | (code >>> 18 & 7) << 24 | (code >>> 12 & 63) << 16 | (code >>> 6 & 63) << 8 | code & 63
      /* 0b00111111 */
    ), 4);
  }
  return offset;
});
F2(function(decoder, bytes) {
  try {
    return $elm$core$Maybe$Just(A2(decoder, bytes, 0).b);
  } catch (e) {
    return $elm$core$Maybe$Nothing;
  }
});
F2(function(bytes, offset) {
  return _Utils_Tuple2(offset + 1, bytes.getInt8(offset));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 2, bytes.getInt16(offset, isLE));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 4, bytes.getInt32(offset, isLE));
});
F2(function(bytes, offset) {
  return _Utils_Tuple2(offset + 1, bytes.getUint8(offset));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 2, bytes.getUint16(offset, isLE));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 4, bytes.getUint32(offset, isLE));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 4, bytes.getFloat32(offset, isLE));
});
F3(function(isLE, bytes, offset) {
  return _Utils_Tuple2(offset + 8, bytes.getFloat64(offset, isLE));
});
F3(function(len, bytes, offset) {
  return _Utils_Tuple2(offset + len, new DataView(bytes.buffer, bytes.byteOffset + offset, len));
});
F3(function(len, bytes, offset) {
  var string = "";
  var end = offset + len;
  for (; offset < end; ) {
    var byte = bytes.getUint8(offset++);
    string += byte < 128 ? String.fromCharCode(byte) : (byte & 224) === 192 ? String.fromCharCode(
      (byte & 31) << 6 | bytes.getUint8(offset++) & 63
      /* 0b00111111 */
    ) : (byte & 240) === 224 ? String.fromCharCode(
      (byte & 15) << 12 | (bytes.getUint8(offset++) & 63) << 6 | bytes.getUint8(offset++) & 63
      /* 0b00111111 */
    ) : (byte = ((byte & 7) << 18 | (bytes.getUint8(offset++) & 63) << 12 | (bytes.getUint8(offset++) & 63) << 6 | bytes.getUint8(offset++) & 63) - 65536, String.fromCharCode(Math.floor(byte / 1024) + 55296, byte % 1024 + 56320));
  }
  return _Utils_Tuple2(offset, string);
});
F2(function() {
  throw 0;
});
F2(function(a, b) {
  return a & b;
});
F2(function(a, b) {
  return a | b;
});
F2(function(a, b) {
  return a ^ b;
});
F2(function(offset, a) {
  return a << offset;
});
F2(function(offset, a) {
  return a >> offset;
});
F2(function(offset, a) {
  return a >>> offset;
});
var _Regex_never = /.^/;
var _Regex_fromStringWith = F2(function(options, string) {
  var flags = "g";
  if (options.dl) {
    flags += "m";
  }
  if (options.cI) {
    flags += "i";
  }
  try {
    return $elm$core$Maybe$Just(new RegExp(string, flags));
  } catch (error) {
    return $elm$core$Maybe$Nothing;
  }
});
var _Regex_contains = F2(function(re, string) {
  return string.match(re) !== null;
});
F3(function(n, re, str) {
  var out = [];
  var number = 0;
  var string = str;
  var lastIndex = re.lastIndex;
  var prevLastIndex = -1;
  var result;
  while (number++ < n && (result = re.exec(string))) {
    if (prevLastIndex == re.lastIndex)
      break;
    var i = result.length - 1;
    var subs = new Array(i);
    while (i > 0) {
      var submatch = result[i];
      subs[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
    }
    out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
    prevLastIndex = re.lastIndex;
  }
  re.lastIndex = lastIndex;
  return _List_fromArray(out);
});
F4(function(n, re, replacer, string) {
  var count = 0;
  function jsReplacer(match) {
    if (count++ >= n) {
      return match;
    }
    var i = arguments.length - 3;
    var submatches = new Array(i);
    while (i > 0) {
      var submatch = arguments[i];
      submatches[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
    }
    return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
  }
  return string.replace(re, jsReplacer);
});
F3(function(n, re, str) {
  var string = str;
  var out = [];
  var start = re.lastIndex;
  var restoreLastIndex = re.lastIndex;
  while (n--) {
    var result = re.exec(string);
    if (!result)
      break;
    out.push(string.slice(start, result.index));
    start = re.lastIndex;
  }
  out.push(string.slice(start));
  re.lastIndex = restoreLastIndex;
  return _List_fromArray(out);
});
var _Http_toTask = F3(function(router, toTask, request) {
  return _Scheduler_binding(function(callback) {
    function done(response) {
      callback(toTask(request.cW.a(response)));
    }
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("error", function() {
      done($elm$http$Http$NetworkError_);
    });
    xhr.addEventListener("timeout", function() {
      done($elm$http$Http$Timeout_);
    });
    xhr.addEventListener("load", function() {
      done(_Http_toResponse(request.cW.b, xhr));
    });
    $elm$core$Maybe$isJust(request.b5) && _Http_track(router, xhr, request.b5.a);
    try {
      xhr.open(request.dj, request.b8, true);
    } catch (e) {
      return done($elm$http$Http$BadUrl_(request.b8));
    }
    _Http_configureRequest(xhr, request);
    request.cy.a && xhr.setRequestHeader("Content-Type", request.cy.a);
    xhr.send(request.cy.b);
    return function() {
      xhr.c = true;
      xhr.abort();
    };
  });
});
function _Http_configureRequest(xhr, request) {
  for (var headers = request.bv; headers.b; headers = headers.b) {
    xhr.setRequestHeader(headers.a.a, headers.a.b);
  }
  xhr.timeout = request.d7.a || 0;
  xhr.responseType = request.cW.d;
  xhr.withCredentials = request.cr;
}
function _Http_toResponse(toBody, xhr) {
  return A2(
    200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
    _Http_toMetadata(xhr),
    toBody(xhr.response)
  );
}
function _Http_toMetadata(xhr) {
  return {
    b8: xhr.responseURL,
    dO: xhr.status,
    dP: xhr.statusText,
    bv: _Http_parseHeaders(xhr.getAllResponseHeaders())
  };
}
function _Http_parseHeaders(rawHeaders) {
  if (!rawHeaders) {
    return $elm$core$Dict$empty;
  }
  var headers = $elm$core$Dict$empty;
  var headerPairs = rawHeaders.split("\r\n");
  for (var i = headerPairs.length; i--; ) {
    var headerPair = headerPairs[i];
    var index = headerPair.indexOf(": ");
    if (index > 0) {
      var key = headerPair.substring(0, index);
      var value = headerPair.substring(index + 2);
      headers = A3($elm$core$Dict$update, key, function(oldValue) {
        return $elm$core$Maybe$Just(
          $elm$core$Maybe$isJust(oldValue) ? value + ", " + oldValue.a : value
        );
      }, headers);
    }
  }
  return headers;
}
var _Http_expect = F3(function(type, toBody, toValue) {
  return {
    $: 0,
    d: type,
    b: toBody,
    a: toValue
  };
});
var _Http_mapExpect = F2(function(func, expect) {
  return {
    $: 0,
    d: expect.d,
    b: expect.b,
    a: function(x) {
      return func(expect.a(x));
    }
  };
});
var _Http_pair = F2(function(a, b) {
  return { $: 0, a, b };
});
function _Http_toFormData(parts) {
  for (var formData = new FormData(); parts.b; parts = parts.b) {
    var part = parts.a;
    formData.append(part.a, part.b);
  }
  return formData;
}
var _Http_bytesToBlob = F2(function(mime, bytes) {
  return new Blob([bytes], { type: mime });
});
function _Http_track(router, xhr, tracker) {
  xhr.upload.addEventListener("progress", function(event) {
    if (xhr.c) {
      return;
    }
    _Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
      dF: event.loaded,
      b1: event.total
    }))));
  });
  xhr.addEventListener("progress", function(event) {
    if (xhr.c) {
      return;
    }
    _Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
      dv: event.loaded,
      b1: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
    }))));
  });
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
F3(
  function(func, baseCase, _v0) {
    var tree = _v0.c;
    var tail = _v0.d;
    var helper = F2(
      function(node, acc) {
        if (!node.$) {
          var subTree = node.a;
          return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
        } else {
          var values = node.a;
          return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
        }
      }
    );
    return A3(
      $elm$core$Elm$JsArray$foldr,
      helper,
      A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
      tree
    );
  }
);
var $elm$core$Dict$foldr = F3(
  function(func, acc, t) {
    foldr:
      while (true) {
        if (t.$ === -2) {
          return acc;
        } else {
          var key = t.b;
          var value = t.c;
          var left = t.d;
          var right = t.e;
          var $temp$func = func, $temp$acc = A3(
            func,
            key,
            value,
            A3($elm$core$Dict$foldr, func, acc, right)
          ), $temp$t = left;
          func = $temp$func;
          acc = $temp$acc;
          t = $temp$t;
          continue foldr;
        }
      }
  }
);
var $elm$core$Dict$toList = function(dict) {
  return A3(
    $elm$core$Dict$foldr,
    F3(
      function(key, value, list) {
        return A2(
          $elm$core$List$cons,
          _Utils_Tuple2(key, value),
          list
        );
      }
    ),
    _List_Nil,
    dict
  );
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function(a) {
  return { $: 1, a };
};
var $elm$json$Json$Decode$Failure = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $elm$json$Json$Decode$Field = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $elm$json$Json$Decode$Index = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $elm$core$Result$Ok = function(a) {
  return { $: 0, a };
};
var $elm$json$Json$Decode$OneOf = function(a) {
  return { $: 2, a };
};
var $elm$core$Maybe$Just = function(a) {
  return { $: 0, a };
};
var $elm$core$Maybe$Nothing = { $: 1 };
var $elm$core$String$all = _String_all;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
  function(sep, chunks) {
    return A2(
      _String_join,
      sep,
      _List_toArray(chunks)
    );
  }
);
var $elm$core$String$split = F2(
  function(sep, string) {
    return _List_fromArray(
      A2(_String_split, sep, string)
    );
  }
);
var $elm$json$Json$Decode$indent = function(str) {
  return A2(
    $elm$core$String$join,
    "\n    ",
    A2($elm$core$String$split, "\n", str)
  );
};
var $elm$core$List$foldl = F3(
  function(func, acc, list) {
    foldl:
      while (true) {
        if (!list.b) {
          return acc;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
          func = $temp$func;
          acc = $temp$acc;
          list = $temp$list;
          continue foldl;
        }
      }
  }
);
var $elm$core$List$length = function(xs) {
  return A3(
    $elm$core$List$foldl,
    F2(
      function(_v0, i) {
        return i + 1;
      }
    ),
    0,
    xs
  );
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$List$rangeHelp = F3(
  function(lo, hi, list) {
    rangeHelp:
      while (true) {
        if (_Utils_cmp(lo, hi) < 1) {
          var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
          lo = $temp$lo;
          hi = $temp$hi;
          list = $temp$list;
          continue rangeHelp;
        } else {
          return list;
        }
      }
  }
);
var $elm$core$List$range = F2(
  function(lo, hi) {
    return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
  }
);
var $elm$core$List$indexedMap = F2(
  function(f, xs) {
    return A3(
      $elm$core$List$map2,
      f,
      A2(
        $elm$core$List$range,
        0,
        $elm$core$List$length(xs) - 1
      ),
      xs
    );
  }
);
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return 97 <= code && code <= 122;
};
var $elm$core$Char$isUpper = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return code <= 90 && 65 <= code;
};
var $elm$core$Char$isAlpha = function(_char) {
  return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function(_char) {
  var code = $elm$core$Char$toCode(_char);
  return code <= 57 && 48 <= code;
};
var $elm$core$Char$isAlphaNum = function(_char) {
  return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function(list) {
  return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
  function(i, error) {
    return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent(
      $elm$json$Json$Decode$errorToString(error)
    )));
  }
);
var $elm$json$Json$Decode$errorToString = function(error) {
  return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
  function(error, context) {
    errorToStringHelp:
      while (true) {
        switch (error.$) {
          case 0:
            var f = error.a;
            var err = error.b;
            var isSimple = function() {
              var _v1 = $elm$core$String$uncons(f);
              if (_v1.$ === 1) {
                return false;
              } else {
                var _v2 = _v1.a;
                var _char = _v2.a;
                var rest = _v2.b;
                return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
              }
            }();
            var fieldName = isSimple ? "." + f : "['" + (f + "']");
            var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
            error = $temp$error;
            context = $temp$context;
            continue errorToStringHelp;
          case 1:
            var i = error.a;
            var err = error.b;
            var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
            var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
            error = $temp$error;
            context = $temp$context;
            continue errorToStringHelp;
          case 2:
            var errors = error.a;
            if (!errors.b) {
              return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                if (!context.b) {
                  return "!";
                } else {
                  return " at json" + A2(
                    $elm$core$String$join,
                    "",
                    $elm$core$List$reverse(context)
                  );
                }
              }();
            } else {
              if (!errors.b.b) {
                var err = errors.a;
                var $temp$error = err, $temp$context = context;
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              } else {
                var starter = function() {
                  if (!context.b) {
                    return "Json.Decode.oneOf";
                  } else {
                    return "The Json.Decode.oneOf at json" + A2(
                      $elm$core$String$join,
                      "",
                      $elm$core$List$reverse(context)
                    );
                  }
                }();
                var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt(
                  $elm$core$List$length(errors)
                ) + " ways:"));
                return A2(
                  $elm$core$String$join,
                  "\n\n",
                  A2(
                    $elm$core$List$cons,
                    introduction,
                    A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)
                  )
                );
              }
            }
          default:
            var msg = error.a;
            var json = error.b;
            var introduction = function() {
              if (!context.b) {
                return "Problem with the given value:\n\n";
              } else {
                return "Problem with the value at json" + (A2(
                  $elm$core$String$join,
                  "",
                  $elm$core$List$reverse(context)
                ) + ":\n\n    ");
              }
            }();
            return introduction + ($elm$json$Json$Decode$indent(
              A2($elm$json$Json$Encode$encode, 4, json)
            ) + ("\n\n" + msg));
        }
      }
  }
);
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
  function(a, b, c, d) {
    return { $: 0, a, b, c, d };
  }
);
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$logBase = F2(
  function(base, number) {
    return _Basics_log(number) / _Basics_log(base);
  }
);
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
  A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor)
);
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function(a) {
  return { $: 1, a };
};
var $elm$core$Basics$apL = F2(
  function(f, x) {
    return f(x);
  }
);
F2(
  function(x, f) {
    return f(x);
  }
);
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
  function(x, y) {
    return _Utils_cmp(x, y) > 0 ? x : y;
  }
);
var $elm$core$Array$SubTree = function(a) {
  return { $: 0, a };
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
  function(nodes, acc) {
    compressNodes:
      while (true) {
        var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
        var node = _v0.a;
        var remainingNodes = _v0.b;
        var newAcc = A2(
          $elm$core$List$cons,
          $elm$core$Array$SubTree(node),
          acc
        );
        if (!remainingNodes.b) {
          return $elm$core$List$reverse(newAcc);
        } else {
          var $temp$nodes = remainingNodes, $temp$acc = newAcc;
          nodes = $temp$nodes;
          acc = $temp$acc;
          continue compressNodes;
        }
      }
  }
);
var $elm$core$Tuple$first = function(_v0) {
  var x = _v0.a;
  return x;
};
var $elm$core$Array$treeFromBuilder = F2(
  function(nodeList, nodeListSize) {
    treeFromBuilder:
      while (true) {
        var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
        if (newNodeSize === 1) {
          return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
        } else {
          var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
          nodeList = $temp$nodeList;
          nodeListSize = $temp$nodeListSize;
          continue treeFromBuilder;
        }
      }
  }
);
var $elm$core$Array$builderToArray = F2(
  function(reverseNodeList, builder) {
    if (!builder.g) {
      return A4(
        $elm$core$Array$Array_elm_builtin,
        $elm$core$Elm$JsArray$length(builder.i),
        $elm$core$Array$shiftStep,
        $elm$core$Elm$JsArray$empty,
        builder.i
      );
    } else {
      var treeLen = builder.g * $elm$core$Array$branchFactor;
      var depth = $elm$core$Basics$floor(
        A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1)
      );
      var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.j) : builder.j;
      var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.g);
      return A4(
        $elm$core$Array$Array_elm_builtin,
        $elm$core$Elm$JsArray$length(builder.i) + treeLen,
        A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
        tree,
        builder.i
      );
    }
  }
);
var $elm$core$Array$initializeHelp = F5(
  function(fn, fromIndex, len, nodeList, tail) {
    initializeHelp:
      while (true) {
        if (fromIndex < 0) {
          return A2(
            $elm$core$Array$builderToArray,
            false,
            { j: nodeList, g: len / $elm$core$Array$branchFactor | 0, i: tail }
          );
        } else {
          var leaf = $elm$core$Array$Leaf(
            A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn)
          );
          var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
          fn = $temp$fn;
          fromIndex = $temp$fromIndex;
          len = $temp$len;
          nodeList = $temp$nodeList;
          tail = $temp$tail;
          continue initializeHelp;
        }
      }
  }
);
var $elm$core$Array$initialize = F2(
  function(len, fn) {
    if (len <= 0) {
      return $elm$core$Array$empty;
    } else {
      var tailLen = len % $elm$core$Array$branchFactor;
      var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
      var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
      return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
    }
  }
);
var $elm$core$Result$isOk = function(result) {
  if (!result.$) {
    return true;
  } else {
    return false;
  }
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
  switch (handler.$) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    default:
      return 3;
  }
};
var $elm$core$Basics$identity = function(x) {
  return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Url = F6(
  function(protocol, host, port_, path, query, fragment) {
    return { bt: fragment, bz: host, bO: path, bQ: port_, bT: protocol, bU: query };
  }
);
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
  function(n, string) {
    return n < 1 ? string : A3(
      $elm$core$String$slice,
      n,
      $elm$core$String$length(string),
      string
    );
  }
);
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function(string) {
  return string === "";
};
var $elm$core$String$left = F2(
  function(n, string) {
    return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
  }
);
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
  function(protocol, path, params, frag, str) {
    if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, "@", str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, ":", str);
      if (!_v0.b) {
        return $elm$core$Maybe$Just(
          A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag)
        );
      } else {
        if (!_v0.b.b) {
          var i = _v0.a;
          var _v1 = $elm$core$String$toInt(
            A2($elm$core$String$dropLeft, i + 1, str)
          );
          if (_v1.$ === 1) {
            return $elm$core$Maybe$Nothing;
          } else {
            var port_ = _v1;
            return $elm$core$Maybe$Just(
              A6(
                $elm$url$Url$Url,
                protocol,
                A2($elm$core$String$left, i, str),
                port_,
                path,
                params,
                frag
              )
            );
          }
        } else {
          return $elm$core$Maybe$Nothing;
        }
      }
    }
  }
);
var $elm$url$Url$chompBeforeQuery = F4(
  function(protocol, params, frag, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "/", str);
      if (!_v0.b) {
        return A5($elm$url$Url$chompBeforePath, protocol, "/", params, frag, str);
      } else {
        var i = _v0.a;
        return A5(
          $elm$url$Url$chompBeforePath,
          protocol,
          A2($elm$core$String$dropLeft, i, str),
          params,
          frag,
          A2($elm$core$String$left, i, str)
        );
      }
    }
  }
);
var $elm$url$Url$chompBeforeFragment = F3(
  function(protocol, frag, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "?", str);
      if (!_v0.b) {
        return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
      } else {
        var i = _v0.a;
        return A4(
          $elm$url$Url$chompBeforeQuery,
          protocol,
          $elm$core$Maybe$Just(
            A2($elm$core$String$dropLeft, i + 1, str)
          ),
          frag,
          A2($elm$core$String$left, i, str)
        );
      }
    }
  }
);
F2(
  function(protocol, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "#", str);
      if (!_v0.b) {
        return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
      } else {
        var i = _v0.a;
        return A3(
          $elm$url$Url$chompBeforeFragment,
          protocol,
          $elm$core$Maybe$Just(
            A2($elm$core$String$dropLeft, i + 1, str)
          ),
          A2($elm$core$String$left, i, str)
        );
      }
    }
  }
);
var $elm$core$Basics$never = function(_v0) {
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
  function(fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;
      if (!r1.b) {
        return A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;
        if (!r2.b) {
          return A2(
            fn,
            a,
            A2(fn, b, acc)
          );
        } else {
          var c = r2.a;
          var r3 = r2.b;
          if (!r3.b) {
            return A2(
              fn,
              a,
              A2(
                fn,
                b,
                A2(fn, c, acc)
              )
            );
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? A3(
              $elm$core$List$foldl,
              fn,
              acc,
              $elm$core$List$reverse(r4)
            ) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
            return A2(
              fn,
              a,
              A2(
                fn,
                b,
                A2(
                  fn,
                  c,
                  A2(fn, d, res)
                )
              )
            );
          }
        }
      }
    }
  }
);
var $elm$core$List$foldr = F3(
  function(fn, acc, ls) {
    return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
  }
);
var $elm$core$List$map = F2(
  function(f, xs) {
    return A3(
      $elm$core$List$foldr,
      F2(
        function(x, acc) {
          return A2(
            $elm$core$List$cons,
            f(x),
            acc
          );
        }
      ),
      _List_Nil,
      xs
    );
  }
);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
  function(func, taskA) {
    return A2(
      $elm$core$Task$andThen,
      function(a) {
        return $elm$core$Task$succeed(
          func(a)
        );
      },
      taskA
    );
  }
);
var $elm$core$Task$map2 = F3(
  function(func, taskA, taskB) {
    return A2(
      $elm$core$Task$andThen,
      function(a) {
        return A2(
          $elm$core$Task$andThen,
          function(b) {
            return $elm$core$Task$succeed(
              A2(func, a, b)
            );
          },
          taskB
        );
      },
      taskA
    );
  }
);
var $elm$core$Task$sequence = function(tasks) {
  return A3(
    $elm$core$List$foldr,
    $elm$core$Task$map2($elm$core$List$cons),
    $elm$core$Task$succeed(_List_Nil),
    tasks
  );
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
  function(router, _v0) {
    var task = _v0;
    return _Scheduler_spawn(
      A2(
        $elm$core$Task$andThen,
        $elm$core$Platform$sendToApp(router),
        task
      )
    );
  }
);
var $elm$core$Task$onEffects = F3(
  function(router, commands, state) {
    return A2(
      $elm$core$Task$map,
      function(_v0) {
        return 0;
      },
      $elm$core$Task$sequence(
        A2(
          $elm$core$List$map,
          $elm$core$Task$spawnCmd(router),
          commands
        )
      )
    );
  }
);
var $elm$core$Task$onSelfMsg = F3(
  function(_v0, _v1, _v2) {
    return $elm$core$Task$succeed(0);
  }
);
var $elm$core$Task$cmdMap = F2(
  function(tagger, _v0) {
    var task = _v0;
    return A2($elm$core$Task$map, tagger, task);
  }
);
_Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf("Task");
var $elm$core$Task$perform = F2(
  function(toMessage, task) {
    return $elm$core$Task$command(
      A2($elm$core$Task$map, toMessage, task)
    );
  }
);
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$core$Basics$min = F2(
  function(x, y) {
    return _Utils_cmp(x, y) < 0 ? x : y;
  }
);
var $mdgriffith$elm_ui$Element$classifyDevice = function(window2) {
  return {
    A: function() {
      var shortSide = A2($elm$core$Basics$min, window2.bc, window2.aZ);
      var longSide = A2($elm$core$Basics$max, window2.bc, window2.aZ);
      return shortSide < 600 ? 0 : longSide <= 1200 ? 1 : longSide > 1200 && longSide <= 1920 ? 2 : 3;
    }(),
    bL: _Utils_cmp(window2.bc, window2.aZ) < 0 ? 0 : 1
  };
};
var $author$project$Contact$Editting = { $: 0 };
var $author$project$Contact$init = { ae: false, aD: "", C: "", E: "", f: _List_Nil, F: "", H: "", I: "" };
var $author$project$Contact$initialModel = { t: $author$project$Contact$init, aj: false, X: $elm$core$Maybe$Nothing, O: $author$project$Contact$Editting, am: false, av: false };
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function(flags) {
  return _Utils_Tuple2(
    {
      ah: $author$project$Contact$initialModel,
      aK: $mdgriffith$elm_ui$Element$classifyDevice(flags)
    },
    $elm$core$Platform$Cmd$none
  );
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$ContactMsg = function(a) {
  return { $: 1, a };
};
var $author$project$Main$DeviceClassified = function(a) {
  return { $: 0, a };
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Browser$Events$MySub = F3(
  function(a, b, c) {
    return { $: 0, a, b, c };
  }
);
var $elm$browser$Browser$Events$State = F2(
  function(subs, pids) {
    return { bP: pids, b3: subs };
  }
);
var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
  A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty)
);
var $elm$browser$Browser$Events$nodeToKey = function(node) {
  if (!node) {
    return "d_";
  } else {
    return "w_";
  }
};
var $elm$browser$Browser$Events$addKey = function(sub) {
  var node = sub.a;
  var name = sub.b;
  return _Utils_Tuple2(
    _Utils_ap(
      $elm$browser$Browser$Events$nodeToKey(node),
      name
    ),
    sub
  );
};
var $elm$core$Dict$RBNode_elm_builtin = F5(
  function(a, b, c, d, e) {
    return { $: -1, a, b, c, d, e };
  }
);
var $elm$core$Dict$balance = F5(
  function(color, key, value, left, right) {
    if (right.$ === -1 && !right.a) {
      right.a;
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;
      if (left.$ === -1 && !left.a) {
        left.a;
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          0,
          key,
          value,
          A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight)
        );
      } else {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          color,
          rK,
          rV,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
          rRight
        );
      }
    } else {
      if (left.$ === -1 && !left.a && left.d.$ === -1 && !left.d.a) {
        left.a;
        var lK = left.b;
        var lV = left.c;
        var _v6 = left.d;
        _v6.a;
        var llK = _v6.b;
        var llV = _v6.c;
        var llLeft = _v6.d;
        var llRight = _v6.e;
        var lRight = left.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          0,
          lK,
          lV,
          A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right)
        );
      } else {
        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
      }
    }
  }
);
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
  function(key, value, dict) {
    if (dict.$ === -2) {
      return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;
      var _v1 = A2($elm$core$Basics$compare, key, nKey);
      switch (_v1) {
        case 0:
          return A5(
            $elm$core$Dict$balance,
            nColor,
            nKey,
            nValue,
            A3($elm$core$Dict$insertHelp, key, value, nLeft),
            nRight
          );
        case 1:
          return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
        default:
          return A5(
            $elm$core$Dict$balance,
            nColor,
            nKey,
            nValue,
            nLeft,
            A3($elm$core$Dict$insertHelp, key, value, nRight)
          );
      }
    }
  }
);
var $elm$core$Dict$insert = F3(
  function(key, value, dict) {
    var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
    if (_v0.$ === -1 && !_v0.a) {
      _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  }
);
var $elm$core$Dict$fromList = function(assocs) {
  return A3(
    $elm$core$List$foldl,
    F2(
      function(_v0, dict) {
        var key = _v0.a;
        var value = _v0.b;
        return A3($elm$core$Dict$insert, key, value, dict);
      }
    ),
    $elm$core$Dict$empty,
    assocs
  );
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
  function(func, acc, dict) {
    foldl:
      while (true) {
        if (dict.$ === -2) {
          return acc;
        } else {
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          var $temp$func = func, $temp$acc = A3(
            func,
            key,
            value,
            A3($elm$core$Dict$foldl, func, acc, left)
          ), $temp$dict = right;
          func = $temp$func;
          acc = $temp$acc;
          dict = $temp$dict;
          continue foldl;
        }
      }
  }
);
var $elm$core$Dict$merge = F6(
  function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
    var stepState = F3(
      function(rKey, rValue, _v0) {
        stepState:
          while (true) {
            var list = _v0.a;
            var result = _v0.b;
            if (!list.b) {
              return _Utils_Tuple2(
                list,
                A3(rightStep, rKey, rValue, result)
              );
            } else {
              var _v2 = list.a;
              var lKey = _v2.a;
              var lValue = _v2.b;
              var rest = list.b;
              if (_Utils_cmp(lKey, rKey) < 0) {
                var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(
                  rest,
                  A3(leftStep, lKey, lValue, result)
                );
                rKey = $temp$rKey;
                rValue = $temp$rValue;
                _v0 = $temp$_v0;
                continue stepState;
              } else {
                if (_Utils_cmp(lKey, rKey) > 0) {
                  return _Utils_Tuple2(
                    list,
                    A3(rightStep, rKey, rValue, result)
                  );
                } else {
                  return _Utils_Tuple2(
                    rest,
                    A4(bothStep, lKey, lValue, rValue, result)
                  );
                }
              }
            }
          }
      }
    );
    var _v3 = A3(
      $elm$core$Dict$foldl,
      stepState,
      _Utils_Tuple2(
        $elm$core$Dict$toList(leftDict),
        initialResult
      ),
      rightDict
    );
    var leftovers = _v3.a;
    var intermediateResult = _v3.b;
    return A3(
      $elm$core$List$foldl,
      F2(
        function(_v4, result) {
          var k = _v4.a;
          var v = _v4.b;
          return A3(leftStep, k, v, result);
        }
      ),
      intermediateResult,
      leftovers
    );
  }
);
var $elm$browser$Browser$Events$Event = F2(
  function(key, event) {
    return { bp: event, bE: key };
  }
);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
  function(router, key, _v0) {
    var node = _v0.a;
    var name = _v0.b;
    var actualNode = function() {
      if (!node) {
        return _Browser_doc;
      } else {
        return _Browser_window;
      }
    }();
    return A2(
      $elm$core$Task$map,
      function(value) {
        return _Utils_Tuple2(key, value);
      },
      A3(
        _Browser_on,
        actualNode,
        name,
        function(event) {
          return A2(
            $elm$core$Platform$sendToSelf,
            router,
            A2($elm$browser$Browser$Events$Event, key, event)
          );
        }
      )
    );
  }
);
var $elm$core$Dict$union = F2(
  function(t1, t2) {
    return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
  }
);
var $elm$browser$Browser$Events$onEffects = F3(
  function(router, subs, state) {
    var stepRight = F3(
      function(key, sub, _v6) {
        var deads = _v6.a;
        var lives = _v6.b;
        var news = _v6.c;
        return _Utils_Tuple3(
          deads,
          lives,
          A2(
            $elm$core$List$cons,
            A3($elm$browser$Browser$Events$spawn, router, key, sub),
            news
          )
        );
      }
    );
    var stepLeft = F3(
      function(_v4, pid, _v5) {
        var deads = _v5.a;
        var lives = _v5.b;
        var news = _v5.c;
        return _Utils_Tuple3(
          A2($elm$core$List$cons, pid, deads),
          lives,
          news
        );
      }
    );
    var stepBoth = F4(
      function(key, pid, _v2, _v3) {
        var deads = _v3.a;
        var lives = _v3.b;
        var news = _v3.c;
        return _Utils_Tuple3(
          deads,
          A3($elm$core$Dict$insert, key, pid, lives),
          news
        );
      }
    );
    var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
    var _v0 = A6(
      $elm$core$Dict$merge,
      stepLeft,
      stepBoth,
      stepRight,
      state.bP,
      $elm$core$Dict$fromList(newSubs),
      _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil)
    );
    var deadPids = _v0.a;
    var livePids = _v0.b;
    var makeNewPids = _v0.c;
    return A2(
      $elm$core$Task$andThen,
      function(pids) {
        return $elm$core$Task$succeed(
          A2(
            $elm$browser$Browser$Events$State,
            newSubs,
            A2(
              $elm$core$Dict$union,
              livePids,
              $elm$core$Dict$fromList(pids)
            )
          )
        );
      },
      A2(
        $elm$core$Task$andThen,
        function(_v1) {
          return $elm$core$Task$sequence(makeNewPids);
        },
        $elm$core$Task$sequence(
          A2($elm$core$List$map, $elm$core$Process$kill, deadPids)
        )
      )
    );
  }
);
var $elm$core$List$maybeCons = F3(
  function(f, mx, xs) {
    var _v0 = f(mx);
    if (!_v0.$) {
      var x = _v0.a;
      return A2($elm$core$List$cons, x, xs);
    } else {
      return xs;
    }
  }
);
var $elm$core$List$filterMap = F2(
  function(f, xs) {
    return A3(
      $elm$core$List$foldr,
      $elm$core$List$maybeCons(f),
      _List_Nil,
      xs
    );
  }
);
var $elm$browser$Browser$Events$onSelfMsg = F3(
  function(router, _v0, state) {
    var key = _v0.bE;
    var event = _v0.bp;
    var toMessage = function(_v2) {
      var subKey = _v2.a;
      var _v3 = _v2.b;
      _v3.a;
      _v3.b;
      var decoder = _v3.c;
      return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
    };
    var messages = A2($elm$core$List$filterMap, toMessage, state.b3);
    return A2(
      $elm$core$Task$andThen,
      function(_v1) {
        return $elm$core$Task$succeed(state);
      },
      $elm$core$Task$sequence(
        A2(
          $elm$core$List$map,
          $elm$core$Platform$sendToApp(router),
          messages
        )
      )
    );
  }
);
var $elm$browser$Browser$Events$subMap = F2(
  function(func, _v0) {
    var node = _v0.a;
    var name = _v0.b;
    var decoder = _v0.c;
    return A3(
      $elm$browser$Browser$Events$MySub,
      node,
      name,
      A2($elm$json$Json$Decode$map, func, decoder)
    );
  }
);
_Platform_effectManagers["Browser.Events"] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf("Browser.Events");
var $elm$browser$Browser$Events$on = F3(
  function(node, name, decoder) {
    return $elm$browser$Browser$Events$subscription(
      A3($elm$browser$Browser$Events$MySub, node, name, decoder)
    );
  }
);
var $elm$browser$Browser$Events$onResize = function(func) {
  return A3(
    $elm$browser$Browser$Events$on,
    1,
    "resize",
    A2(
      $elm$json$Json$Decode$field,
      "target",
      A3(
        $elm$json$Json$Decode$map2,
        func,
        A2($elm$json$Json$Decode$field, "innerWidth", $elm$json$Json$Decode$int),
        A2($elm$json$Json$Decode$field, "innerHeight", $elm$json$Json$Decode$int)
      )
    )
  );
};
var $author$project$Contact$ClickedCloseModal = { $: 13 };
var $author$project$Contact$GotResized = function(a) {
  return { $: 10, a };
};
var $author$project$Contact$NoOp = { $: 14 };
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, 0, "keydown");
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Contact$onEscape = F2(
  function(action, noop) {
    return $elm$browser$Browser$Events$onKeyDown(
      A2(
        $elm$json$Json$Decode$map,
        function(k) {
          if (k === "Escape") {
            return action;
          } else {
            return noop;
          }
        },
        A2($elm$json$Json$Decode$field, "key", $elm$json$Json$Decode$string)
      )
    );
  }
);
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Contact$resizedImages = _Platform_incomingPort("resizedImages", $elm$json$Json$Decode$value);
var $author$project$Contact$subscriptions = function(model) {
  var _v0 = model.X;
  if (!_v0.$) {
    return A2($author$project$Contact$onEscape, $author$project$Contact$ClickedCloseModal, $author$project$Contact$NoOp);
  } else {
    return $author$project$Contact$resizedImages($author$project$Contact$GotResized);
  }
};
var $author$project$Main$subscriptions = function(model) {
  return $elm$core$Platform$Sub$batch(
    _List_fromArray(
      [
        $elm$browser$Browser$Events$onResize(
          F2(
            function(width, height) {
              return $author$project$Main$DeviceClassified(
                $mdgriffith$elm_ui$Element$classifyDevice(
                  { aZ: height, bc: width }
                )
              );
            }
          )
        ),
        A2(
          $elm$core$Platform$Sub$map,
          $author$project$Main$ContactMsg,
          $author$project$Contact$subscriptions(model.ah)
        )
      ]
    )
  );
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Contact$Confirming = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $author$project$Contact$GotFiles = F2(
  function(a, b) {
    return { $: 8, a, b };
  }
);
var $author$project$Contact$GotPreviews = function(a) {
  return { $: 9, a };
};
var $author$project$Contact$Sent = function(a) {
  return { $: 2, a };
};
var $author$project$Contact$acceptedFileTypes = _List_fromArray(
  ["image/jpeg", "image/gif", "image/png"]
);
var $elm$core$List$any = F2(
  function(isOkay, list) {
    any:
      while (true) {
        if (!list.b) {
          return false;
        } else {
          var x = list.a;
          var xs = list.b;
          if (isOkay(x)) {
            return true;
          } else {
            var $temp$isOkay = isOkay, $temp$list = xs;
            isOkay = $temp$isOkay;
            list = $temp$list;
            continue any;
          }
        }
      }
  }
);
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$Contact$Contact = F7(
  function(name, kana, email, tel, content, images, botField) {
    return { aD: botField, C: content, E: email, f: images, F: kana, H: name, I: tel };
  }
);
var $elm$core$Result$andThen = F2(
  function(callback, result) {
    if (!result.$) {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return $elm$core$Result$Err(msg);
    }
  }
);
var $arowM$elm_form_decoder$Form$Decoder$custom = $elm$core$Basics$identity;
var $elm$core$Result$map = F2(
  function(func, ra) {
    if (!ra.$) {
      var a = ra.a;
      return $elm$core$Result$Ok(
        func(a)
      );
    } else {
      var e = ra.a;
      return $elm$core$Result$Err(e);
    }
  }
);
var $arowM$elm_form_decoder$Form$Decoder$run = F2(
  function(_v0, a) {
    var f = _v0;
    return f(a);
  }
);
var $arowM$elm_form_decoder$Form$Decoder$assert = F2(
  function(v, _v0) {
    var f = _v0;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      function(a) {
        return A2(
          $elm$core$Result$andThen,
          function(x) {
            return A2(
              $elm$core$Result$map,
              function(_v1) {
                return x;
              },
              A2($arowM$elm_form_decoder$Form$Decoder$run, v, x)
            );
          },
          f(a)
        );
      }
    );
  }
);
var $arowM$elm_form_decoder$Form$Decoder$identity = $arowM$elm_form_decoder$Form$Decoder$custom($elm$core$Result$Ok);
var $author$project$Error$Invalid = function(a) {
  return { $: 1, a };
};
var $author$project$Error$invalid = $author$project$Error$Invalid;
var $elm$core$Basics$composeL = F3(
  function(g, f, x) {
    return g(
      f(x)
    );
  }
);
var $arowM$elm_form_decoder$Form$Decoder$map = F2(
  function(f, _v0) {
    var g = _v0;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      A2(
        $elm$core$Basics$composeL,
        $elm$core$Result$map(f),
        g
      )
    );
  }
);
var $arowM$elm_form_decoder$Form$Decoder$maxLength = F2(
  function(err, bound) {
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      function(str) {
        return _Utils_cmp(
          $elm$core$String$length(str),
          bound
        ) < 1 ? $elm$core$Result$Ok(0) : $elm$core$Result$Err(
          _List_fromArray(
            [err]
          )
        );
      }
    );
  }
);
var $author$project$Error$Required = { $: 0 };
var $author$project$Error$required = $author$project$Error$Required;
var $arowM$elm_form_decoder$Form$Decoder$fail = function(err) {
  return $arowM$elm_form_decoder$Form$Decoder$custom(
    function(_v0) {
      return $elm$core$Result$Err(
        _List_fromArray(
          [err]
        )
      );
    }
  );
};
var $arowM$elm_form_decoder$Form$Decoder$with = function(f) {
  return $arowM$elm_form_decoder$Form$Decoder$custom(
    function(a) {
      return A2(
        $arowM$elm_form_decoder$Form$Decoder$run,
        f(a),
        a
      );
    }
  );
};
var $author$project$Form$Decoder$Extra$required = F2(
  function(err, d) {
    return $arowM$elm_form_decoder$Form$Decoder$with(
      function(s) {
        return s === "" ? $arowM$elm_form_decoder$Form$Decoder$fail(err) : d;
      }
    );
  }
);
var $author$project$Inquiry$Content$decoder = A2(
  $arowM$elm_form_decoder$Form$Decoder$map,
  $elm$core$Basics$identity,
  A2(
    $arowM$elm_form_decoder$Form$Decoder$assert,
    A2(
      $arowM$elm_form_decoder$Form$Decoder$maxLength,
      $author$project$Error$invalid("500文字以内で入力をお願いします"),
      500
    ),
    A2($author$project$Form$Decoder$Extra$required, $author$project$Error$required, $arowM$elm_form_decoder$Form$Decoder$identity)
  )
);
var $arowM$elm_form_decoder$Form$Decoder$lift = F2(
  function(f, _v0) {
    var g = _v0;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      A2($elm$core$Basics$composeL, g, f)
    );
  }
);
var $author$project$Contact$decoderContent = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.C;
  },
  $author$project$Inquiry$Content$decoder
);
var $arowM$elm_form_decoder$Form$Decoder$andThen = F2(
  function(f, _v0) {
    var g = _v0;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      function(a) {
        var _v1 = g(a);
        if (_v1.$ === 1) {
          var err = _v1.a;
          return $elm$core$Result$Err(err);
        } else {
          var x = _v1.a;
          return A2(
            $arowM$elm_form_decoder$Form$Decoder$run,
            f(x),
            a
          );
        }
      }
    );
  }
);
var $author$project$Email$ExpectingSymbol = function(a) {
  return { $: 6, a };
};
var $author$project$Email$MissingHostName = { $: 5 };
var $elm$parser$Parser$Advanced$Token = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $author$project$Email$TooLongEmail = { $: 4 };
var $author$project$Email$UnexpectedEnd = { $: 7 };
var $elm$parser$Parser$Advanced$Bad = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $elm$parser$Parser$Advanced$Good = F3(
  function(a, b, c) {
    return { $: 0, a, b, c };
  }
);
var $elm$parser$Parser$Advanced$andThen = F2(
  function(callback, _v0) {
    var parseA = _v0;
    return function(s0) {
      var _v1 = parseA(s0);
      if (_v1.$ === 1) {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        var _v2 = callback(a);
        var parseB = _v2;
        var _v3 = parseB(s1);
        if (_v3.$ === 1) {
          var p2 = _v3.a;
          var x = _v3.b;
          return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
        }
      }
    };
  }
);
var $author$project$Email$InvalidSubdomain = { $: 2 };
var $author$project$Email$InvalidTld = { $: 3 };
var $elm$parser$Parser$Advanced$Done = function(a) {
  return { $: 1, a };
};
var $elm$parser$Parser$Advanced$Loop = function(a) {
  return { $: 0, a };
};
var $author$project$Email$EmptyHostName = { $: 1 };
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
  function(isGood, offset, row, col, s0) {
    chompWhileHelp:
      while (true) {
        var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.dN);
        if (_Utils_eq(newOffset, -1)) {
          return A3(
            $elm$parser$Parser$Advanced$Good,
            _Utils_cmp(s0.a, offset) < 0,
            0,
            { bm: col, c: s0.c, d: s0.d, a: offset, b_: row, dN: s0.dN }
          );
        } else {
          if (_Utils_eq(newOffset, -2)) {
            var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
            isGood = $temp$isGood;
            offset = $temp$offset;
            row = $temp$row;
            col = $temp$col;
            s0 = $temp$s0;
            continue chompWhileHelp;
          } else {
            var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
            isGood = $temp$isGood;
            offset = $temp$offset;
            row = $temp$row;
            col = $temp$col;
            s0 = $temp$s0;
            continue chompWhileHelp;
          }
        }
      }
  }
);
var $elm$parser$Parser$Advanced$chompWhile = function(isGood) {
  return function(s) {
    return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.a, s.b_, s.bm, s);
  };
};
var $elm$core$Basics$always = F2(
  function(a, _v0) {
    return a;
  }
);
var $elm$parser$Parser$Advanced$mapChompedString = F2(
  function(func, _v0) {
    var parse = _v0;
    return function(s0) {
      var _v1 = parse(s0);
      if (_v1.$ === 1) {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return A3(
          $elm$parser$Parser$Advanced$Good,
          p,
          A2(
            func,
            A3($elm$core$String$slice, s0.a, s1.a, s0.dN),
            a
          ),
          s1
        );
      }
    };
  }
);
var $elm$parser$Parser$Advanced$getChompedString = function(parser) {
  return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$map2 = F3(
  function(func, _v0, _v1) {
    var parseA = _v0;
    var parseB = _v1;
    return function(s0) {
      var _v2 = parseA(s0);
      if (_v2.$ === 1) {
        var p = _v2.a;
        var x = _v2.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _v2.a;
        var a = _v2.b;
        var s1 = _v2.c;
        var _v3 = parseB(s1);
        if (_v3.$ === 1) {
          var p2 = _v3.a;
          var x = _v3.b;
          return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return A3(
            $elm$parser$Parser$Advanced$Good,
            p1 || p2,
            A2(func, a, b),
            s2
          );
        }
      }
    };
  }
);
var $elm$parser$Parser$Advanced$ignorer = F2(
  function(keepParser, ignoreParser) {
    return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
  }
);
var $elm$parser$Parser$Advanced$AddRight = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $elm$parser$Parser$Advanced$DeadEnd = F4(
  function(row, col, problem, contextStack) {
    return { bm: col, cP: contextStack, du: problem, b_: row };
  }
);
var $elm$parser$Parser$Advanced$Empty = { $: 0 };
var $elm$parser$Parser$Advanced$fromState = F2(
  function(s, x) {
    return A2(
      $elm$parser$Parser$Advanced$AddRight,
      $elm$parser$Parser$Advanced$Empty,
      A4($elm$parser$Parser$Advanced$DeadEnd, s.b_, s.bm, x, s.c)
    );
  }
);
var $elm$parser$Parser$Advanced$problem = function(x) {
  return function(s) {
    return A2(
      $elm$parser$Parser$Advanced$Bad,
      false,
      A2($elm$parser$Parser$Advanced$fromState, s, x)
    );
  };
};
var $elm$parser$Parser$Advanced$succeed = function(a) {
  return function(s) {
    return A3($elm$parser$Parser$Advanced$Good, false, a, s);
  };
};
var $author$project$Email$hostParser = A2(
  $elm$parser$Parser$Advanced$andThen,
  function(s) {
    return $elm$core$String$length(s) > 0 ? $elm$parser$Parser$Advanced$succeed(s) : $elm$parser$Parser$Advanced$problem($author$project$Email$EmptyHostName);
  },
  $elm$parser$Parser$Advanced$getChompedString(
    A2(
      $elm$parser$Parser$Advanced$ignorer,
      $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
      $elm$parser$Parser$Advanced$chompWhile(
        function(c) {
          return $elm$core$Char$isAlphaNum(c) || (c === "-" || c === "_");
        }
      )
    )
  )
);
var $elm$parser$Parser$Advanced$keeper = F2(
  function(parseFunc, parseArg) {
    return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
  }
);
var $elm$parser$Parser$Advanced$map = F2(
  function(func, _v0) {
    var parse = _v0;
    return function(s0) {
      var _v1 = parse(s0);
      if (!_v1.$) {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return A3(
          $elm$parser$Parser$Advanced$Good,
          p,
          func(a),
          s1
        );
      } else {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      }
    };
  }
);
var $elm$parser$Parser$Advanced$Append = F2(
  function(a, b) {
    return { $: 2, a, b };
  }
);
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
  function(s0, bag, parsers) {
    oneOfHelp:
      while (true) {
        if (!parsers.b) {
          return A2($elm$parser$Parser$Advanced$Bad, false, bag);
        } else {
          var parse = parsers.a;
          var remainingParsers = parsers.b;
          var _v1 = parse(s0);
          if (!_v1.$) {
            var step = _v1;
            return step;
          } else {
            var step = _v1;
            var p = step.a;
            var x = step.b;
            if (p) {
              return step;
            } else {
              var $temp$s0 = s0, $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x), $temp$parsers = remainingParsers;
              s0 = $temp$s0;
              bag = $temp$bag;
              parsers = $temp$parsers;
              continue oneOfHelp;
            }
          }
        }
      }
  }
);
var $elm$parser$Parser$Advanced$oneOf = function(parsers) {
  return function(s) {
    return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
  };
};
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function(_v0) {
  var str = _v0.a;
  var expecting = _v0.b;
  var progress = !$elm$core$String$isEmpty(str);
  return function(s) {
    var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.a, s.b_, s.bm, s.dN);
    var newOffset = _v1.a;
    var newRow = _v1.b;
    var newCol = _v1.c;
    return _Utils_eq(newOffset, -1) ? A2(
      $elm$parser$Parser$Advanced$Bad,
      false,
      A2($elm$parser$Parser$Advanced$fromState, s, expecting)
    ) : A3(
      $elm$parser$Parser$Advanced$Good,
      progress,
      0,
      { bm: newCol, c: s.c, d: s.d, a: newOffset, b_: newRow, dN: s.dN }
    );
  };
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Email$domainHelper = function(revStrings) {
  return $elm$parser$Parser$Advanced$oneOf(
    _List_fromArray(
      [
        A2(
          $elm$parser$Parser$Advanced$keeper,
          A2(
            $elm$parser$Parser$Advanced$ignorer,
            $elm$parser$Parser$Advanced$succeed(
              function(string) {
                return $elm$parser$Parser$Advanced$Loop(
                  A2($elm$core$List$cons, string, revStrings)
                );
              }
            ),
            $elm$parser$Parser$Advanced$symbol(
              A2(
                $elm$parser$Parser$Advanced$Token,
                ".",
                $author$project$Email$ExpectingSymbol(".")
              )
            )
          ),
          $author$project$Email$hostParser
        ),
        A2(
          $elm$parser$Parser$Advanced$map,
          function(_v0) {
            return $elm$parser$Parser$Advanced$Done(
              $elm$core$List$reverse(revStrings)
            );
          },
          $elm$parser$Parser$Advanced$succeed(0)
        )
      ]
    )
  );
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
  function(p, state, callback, s0) {
    loopHelp:
      while (true) {
        var _v0 = callback(state);
        var parse = _v0;
        var _v1 = parse(s0);
        if (!_v1.$) {
          var p1 = _v1.a;
          var step = _v1.b;
          var s1 = _v1.c;
          if (!step.$) {
            var newState = step.a;
            var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
            p = $temp$p;
            state = $temp$state;
            callback = $temp$callback;
            s0 = $temp$s0;
            continue loopHelp;
          } else {
            var result = step.a;
            return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
          }
        } else {
          var p1 = _v1.a;
          var x = _v1.b;
          return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
        }
      }
  }
);
var $elm$parser$Parser$Advanced$loop = F2(
  function(state, callback) {
    return function(s) {
      return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
    };
  }
);
var $elm$core$List$filter = F2(
  function(isGood, list) {
    return A3(
      $elm$core$List$foldr,
      F2(
        function(x, xs) {
          return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }
      ),
      _List_Nil,
      list
    );
  }
);
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function(string) {
  return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Email$tldCheck = function(s) {
  return !$elm$core$List$length(
    A2(
      $elm$core$List$filter,
      A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$Char$isAlpha),
      $elm$core$String$toList(s)
    )
  );
};
var $author$project$Email$domainsParser = A2(
  $elm$parser$Parser$Advanced$andThen,
  function(listOfString) {
    var _v0 = $elm$core$List$reverse(listOfString);
    if (!_v0.b) {
      return $elm$parser$Parser$Advanced$problem($author$project$Email$InvalidSubdomain);
    } else {
      var hd = _v0.a;
      return $author$project$Email$tldCheck(hd) ? $elm$parser$Parser$Advanced$succeed(listOfString) : $elm$parser$Parser$Advanced$problem($author$project$Email$InvalidTld);
    }
  },
  A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Email$domainHelper)
);
var $elm$parser$Parser$Advanced$end = function(x) {
  return function(s) {
    return _Utils_eq(
      $elm$core$String$length(s.dN),
      s.a
    ) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
      $elm$parser$Parser$Advanced$Bad,
      false,
      A2($elm$parser$Parser$Advanced$fromState, s, x)
    );
  };
};
var $author$project$Email$TooLongLocalPart = { $: 0 };
var $author$project$Email$UnexpectedChar = { $: 8 };
var $elm$parser$Parser$Advanced$chompIf = F2(
  function(isGood, expecting) {
    return function(s) {
      var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.a, s.dN);
      return _Utils_eq(newOffset, -1) ? A2(
        $elm$parser$Parser$Advanced$Bad,
        false,
        A2($elm$parser$Parser$Advanced$fromState, s, expecting)
      ) : _Utils_eq(newOffset, -2) ? A3(
        $elm$parser$Parser$Advanced$Good,
        true,
        0,
        { bm: 1, c: s.c, d: s.d, a: s.a + 1, b_: s.b_ + 1, dN: s.dN }
      ) : A3(
        $elm$parser$Parser$Advanced$Good,
        true,
        0,
        { bm: s.bm + 1, c: s.c, d: s.d, a: newOffset, b_: s.b_, dN: s.dN }
      );
    };
  }
);
var $author$project$Email$localParser = A2(
  $elm$parser$Parser$Advanced$andThen,
  function(s) {
    return $elm$core$String$length(s) <= 64 ? $elm$parser$Parser$Advanced$succeed(s) : $elm$parser$Parser$Advanced$problem($author$project$Email$TooLongLocalPart);
  },
  $elm$parser$Parser$Advanced$getChompedString(
    A2(
      $elm$parser$Parser$Advanced$ignorer,
      A2(
        $elm$parser$Parser$Advanced$ignorer,
        $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
        A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isAlpha, $author$project$Email$UnexpectedChar)
      ),
      $elm$parser$Parser$Advanced$chompWhile(
        function(c) {
          return $elm$core$Char$isAlphaNum(c) || (c === "." || (c === "-" || c === "_"));
        }
      )
    )
  )
);
var $author$project$Email$parser = A2(
  $elm$parser$Parser$Advanced$andThen,
  function(_v0) {
    var local = _v0.a;
    var host = _v0.b;
    var hosts = _v0.c;
    if ($elm$core$List$length(hosts) > 0) {
      var domain = host + ("." + A2($elm$core$String$join, ".", hosts));
      var email = local + ("@" + domain);
      return $elm$core$String$length(domain) <= 253 && $elm$core$String$length(email) <= 254 ? $elm$parser$Parser$Advanced$succeed(email) : $elm$parser$Parser$Advanced$problem($author$project$Email$TooLongEmail);
    } else {
      return $elm$parser$Parser$Advanced$problem($author$project$Email$MissingHostName);
    }
  },
  A2(
    $elm$parser$Parser$Advanced$keeper,
    A2(
      $elm$parser$Parser$Advanced$keeper,
      A2(
        $elm$parser$Parser$Advanced$keeper,
        $elm$parser$Parser$Advanced$succeed(
          F3(
            function(local, host, hosts) {
              return _Utils_Tuple3(local, host, hosts);
            }
          )
        ),
        A2(
          $elm$parser$Parser$Advanced$ignorer,
          $author$project$Email$localParser,
          $elm$parser$Parser$Advanced$symbol(
            A2(
              $elm$parser$Parser$Advanced$Token,
              "@",
              $author$project$Email$ExpectingSymbol("@")
            )
          )
        )
      ),
      $author$project$Email$hostParser
    ),
    A2(
      $elm$parser$Parser$Advanced$ignorer,
      $author$project$Email$domainsParser,
      $elm$parser$Parser$Advanced$end($author$project$Email$UnexpectedEnd)
    )
  )
);
var $elm$parser$Parser$Advanced$bagToList = F2(
  function(bag, list) {
    bagToList:
      while (true) {
        switch (bag.$) {
          case 0:
            return list;
          case 1:
            var bag1 = bag.a;
            var x = bag.b;
            var $temp$bag = bag1, $temp$list = A2($elm$core$List$cons, x, list);
            bag = $temp$bag;
            list = $temp$list;
            continue bagToList;
          default:
            var bag1 = bag.a;
            var bag2 = bag.b;
            var $temp$bag = bag1, $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
            bag = $temp$bag;
            list = $temp$list;
            continue bagToList;
        }
      }
  }
);
var $elm$parser$Parser$Advanced$run = F2(
  function(_v0, src) {
    var parse = _v0;
    var _v1 = parse(
      { bm: 1, c: _List_Nil, d: 1, a: 0, b_: 1, dN: src }
    );
    if (!_v1.$) {
      var value = _v1.b;
      return $elm$core$Result$Ok(value);
    } else {
      var bag = _v1.b;
      return $elm$core$Result$Err(
        A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil)
      );
    }
  }
);
var $author$project$Email$decoder = $arowM$elm_form_decoder$Form$Decoder$custom(
  function(input) {
    var _v0 = A2($elm$parser$Parser$Advanced$run, $author$project$Email$parser, input);
    if (!_v0.$) {
      var email = _v0.a;
      return $elm$core$Result$Ok(email);
    } else {
      var problems = _v0.a;
      return $elm$core$Result$Err(
        A2(
          $elm$core$List$map,
          function($) {
            return $.du;
          },
          problems
        )
      );
    }
  }
);
var $elm$core$Result$mapError = F2(
  function(f, result) {
    if (!result.$) {
      var v = result.a;
      return $elm$core$Result$Ok(v);
    } else {
      var e = result.a;
      return $elm$core$Result$Err(
        f(e)
      );
    }
  }
);
var $arowM$elm_form_decoder$Form$Decoder$mapError = F2(
  function(f, _v0) {
    var g = _v0;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      A2(
        $elm$core$Basics$composeL,
        $elm$core$Result$mapError(
          $elm$core$List$map(f)
        ),
        g
      )
    );
  }
);
var $author$project$Inquiry$Email$problemToError = function(p) {
  switch (p.$) {
    case 0:
      return $author$project$Error$invalid("メールアドレスの前半が長すぎます");
    case 7:
      return $author$project$Error$invalid("末尾に記号や数字が含まれています");
    default:
      return $author$project$Error$invalid("不正なメールアドレスが入力されました");
  }
};
var $author$project$Inquiry$Email$decoder = A2(
  $arowM$elm_form_decoder$Form$Decoder$andThen,
  function(_v0) {
    return A2($arowM$elm_form_decoder$Form$Decoder$mapError, $author$project$Inquiry$Email$problemToError, $author$project$Email$decoder);
  },
  A2($author$project$Form$Decoder$Extra$required, $author$project$Error$required, $arowM$elm_form_decoder$Form$Decoder$identity)
);
var $author$project$Contact$decoderEmail = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.E;
  },
  $author$project$Inquiry$Email$decoder
);
var $author$project$Contact$decoderImageForm = $arowM$elm_form_decoder$Form$Decoder$identity;
var $arowM$elm_form_decoder$Form$Decoder$appendListResult = F2(
  function(r1, r2) {
    var _v0 = _Utils_Tuple2(r1, r2);
    if (_v0.a.$ === 1) {
      if (_v0.b.$ === 1) {
        var err = _v0.a.a;
        var errs = _v0.b.a;
        return $elm$core$Result$Err(
          _Utils_ap(err, errs)
        );
      } else {
        var err = _v0.a.a;
        return $elm$core$Result$Err(err);
      }
    } else {
      if (_v0.b.$ === 1) {
        var errs = _v0.b.a;
        return $elm$core$Result$Err(errs);
      } else {
        var b = _v0.a.a;
        var bs = _v0.b.a;
        return $elm$core$Result$Ok(
          A2($elm$core$List$cons, b, bs)
        );
      }
    }
  }
);
var $arowM$elm_form_decoder$Form$Decoder$runWithTag = F3(
  function(tag, d, a) {
    return A2(
      $elm$core$Result$mapError,
      $elm$core$List$map(
        function(err) {
          return _Utils_Tuple2(tag, err);
        }
      ),
      A2($arowM$elm_form_decoder$Form$Decoder$run, d, a)
    );
  }
);
var $arowM$elm_form_decoder$Form$Decoder$listOf = function(d) {
  return $arowM$elm_form_decoder$Form$Decoder$custom(
    function(ls) {
      return A3(
        $elm$core$List$foldr,
        $arowM$elm_form_decoder$Form$Decoder$appendListResult,
        $elm$core$Result$Ok(_List_Nil),
        A2(
          $elm$core$List$indexedMap,
          function(n) {
            return A2($arowM$elm_form_decoder$Form$Decoder$runWithTag, n, d);
          },
          ls
        )
      );
    }
  );
};
var $elm$core$Tuple$second = function(_v0) {
  var y = _v0.b;
  return y;
};
var $arowM$elm_form_decoder$Form$Decoder$list = A2(
  $elm$core$Basics$composeL,
  $arowM$elm_form_decoder$Form$Decoder$mapError($elm$core$Tuple$second),
  $arowM$elm_form_decoder$Form$Decoder$listOf
);
var $author$project$Form$Decoder$Extra$maxLengthList = F2(
  function(err, bound) {
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      function(items) {
        return _Utils_cmp(
          $elm$core$List$length(items),
          bound
        ) < 1 ? $elm$core$Result$Ok(0) : $elm$core$Result$Err(
          _List_fromArray(
            [err]
          )
        );
      }
    );
  }
);
var $author$project$Contact$decoderImages = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.f;
  },
  A2(
    $arowM$elm_form_decoder$Form$Decoder$assert,
    A2(
      $author$project$Form$Decoder$Extra$maxLengthList,
      $author$project$Error$invalid("添付可能な画像は10枚までです"),
      10
    ),
    $arowM$elm_form_decoder$Form$Decoder$list($author$project$Contact$decoderImageForm)
  )
);
var $author$project$Inquiry$Kana$decoder = A2(
  $arowM$elm_form_decoder$Form$Decoder$map,
  $elm$core$Basics$identity,
  A2(
    $arowM$elm_form_decoder$Form$Decoder$assert,
    A2(
      $arowM$elm_form_decoder$Form$Decoder$maxLength,
      $author$project$Error$invalid("50文字以内で入力をお願いします"),
      50
    ),
    A2($author$project$Form$Decoder$Extra$required, $author$project$Error$required, $arowM$elm_form_decoder$Form$Decoder$identity)
  )
);
var $author$project$Contact$decoderKana = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.F;
  },
  $author$project$Inquiry$Kana$decoder
);
var $author$project$Inquiry$Name$decoder = A2(
  $arowM$elm_form_decoder$Form$Decoder$map,
  $elm$core$Basics$identity,
  A2(
    $arowM$elm_form_decoder$Form$Decoder$assert,
    A2(
      $arowM$elm_form_decoder$Form$Decoder$maxLength,
      $author$project$Error$invalid("50文字以内で入力をお願いします"),
      50
    ),
    A2($author$project$Form$Decoder$Extra$required, $author$project$Error$required, $arowM$elm_form_decoder$Form$Decoder$identity)
  )
);
var $author$project$Contact$decoderName = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.H;
  },
  $author$project$Inquiry$Name$decoder
);
var $elm$core$Maybe$map = F2(
  function(f, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return $elm$core$Maybe$Just(
        f(value)
      );
    } else {
      return $elm$core$Maybe$Nothing;
    }
  }
);
var $arowM$elm_form_decoder$Form$Decoder$always = function(a) {
  return $arowM$elm_form_decoder$Form$Decoder$custom(
    function(_v0) {
      return $elm$core$Result$Ok(a);
    }
  );
};
var $author$project$Form$Decoder$Extra$optional = function(d) {
  return $arowM$elm_form_decoder$Form$Decoder$with(
    function(s) {
      return s === "" ? $arowM$elm_form_decoder$Form$Decoder$always($elm$core$Maybe$Nothing) : A2($arowM$elm_form_decoder$Form$Decoder$map, $elm$core$Maybe$Just, d);
    }
  );
};
var $author$project$Inquiry$Tel$decoder = A2(
  $arowM$elm_form_decoder$Form$Decoder$map,
  $elm$core$Maybe$map($elm$core$Basics$identity),
  $author$project$Form$Decoder$Extra$optional($arowM$elm_form_decoder$Form$Decoder$identity)
);
var $author$project$Contact$decoderTel = A2(
  $arowM$elm_form_decoder$Form$Decoder$lift,
  function($) {
    return $.I;
  },
  $author$project$Inquiry$Tel$decoder
);
var $arowM$elm_form_decoder$Form$Decoder$field = F2(
  function(_v0, _v1) {
    var f = _v0;
    var g = _v1;
    return $arowM$elm_form_decoder$Form$Decoder$custom(
      function(i) {
        var _v2 = _Utils_Tuple2(
          g(i),
          f(i)
        );
        if (!_v2.a.$) {
          var h = _v2.a.a;
          var res = _v2.b;
          return A2($elm$core$Result$map, h, res);
        } else {
          if (_v2.b.$ === 1) {
            var gErr = _v2.a.a;
            var fErr = _v2.b.a;
            return $elm$core$Result$Err(
              _Utils_ap(gErr, fErr)
            );
          } else {
            var gErr = _v2.a.a;
            return $elm$core$Result$Err(gErr);
          }
        }
      }
    );
  }
);
var $arowM$elm_form_decoder$Form$Decoder$top = function(f) {
  return $arowM$elm_form_decoder$Form$Decoder$custom(
    function(_v0) {
      return $elm$core$Result$Ok(f);
    }
  );
};
var $author$project$Contact$decoder = $arowM$elm_form_decoder$Form$Decoder$with(
  function(form) {
    return form.ae ? A2(
      $arowM$elm_form_decoder$Form$Decoder$field,
      A2(
        $arowM$elm_form_decoder$Form$Decoder$lift,
        function($) {
          return $.aD;
        },
        $arowM$elm_form_decoder$Form$Decoder$identity
      ),
      A2(
        $arowM$elm_form_decoder$Form$Decoder$field,
        $author$project$Contact$decoderImages,
        A2(
          $arowM$elm_form_decoder$Form$Decoder$field,
          $author$project$Contact$decoderContent,
          A2(
            $arowM$elm_form_decoder$Form$Decoder$field,
            $author$project$Contact$decoderTel,
            A2(
              $arowM$elm_form_decoder$Form$Decoder$field,
              $author$project$Contact$decoderEmail,
              A2(
                $arowM$elm_form_decoder$Form$Decoder$field,
                $author$project$Contact$decoderKana,
                A2(
                  $arowM$elm_form_decoder$Form$Decoder$field,
                  $author$project$Contact$decoderName,
                  $arowM$elm_form_decoder$Form$Decoder$top($author$project$Contact$Contact)
                )
              )
            )
          )
        )
      )
    ) : $arowM$elm_form_decoder$Form$Decoder$fail(
      $author$project$Error$invalid("同意が必要です")
    );
  }
);
var $elm$core$List$drop = F2(
  function(n, list) {
    drop:
      while (true) {
        if (n <= 0) {
          return list;
        } else {
          if (!list.b) {
            return list;
          } else {
            list.a;
            var xs = list.b;
            var $temp$n = n - 1, $temp$list = xs;
            n = $temp$n;
            list = $temp$list;
            continue drop;
          }
        }
      }
  }
);
var $elm$file$File$Select$files = F2(
  function(mimes, toMsg) {
    return A2(
      $elm$core$Task$perform,
      function(_v0) {
        var f = _v0.a;
        var fs = _v0.b;
        return A2(toMsg, f, fs);
      },
      _File_uploadOneOrMore(mimes)
    );
  }
);
var $elm$core$List$head = function(list) {
  if (list.b) {
    var x = list.a;
    list.b;
    return $elm$core$Maybe$Just(x);
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Encode$list = F2(
  function(func, entries) {
    return _Json_wrap(
      A3(
        $elm$core$List$foldl,
        _Json_addEntry(func),
        _Json_emptyArray(),
        entries
      )
    );
  }
);
var $elm$file$File$mime = _File_mime;
var $elm$core$List$repeatHelp = F3(
  function(result, n, value) {
    repeatHelp:
      while (true) {
        if (n <= 0) {
          return result;
        } else {
          var $temp$result = A2($elm$core$List$cons, value, result), $temp$n = n - 1, $temp$value = value;
          result = $temp$result;
          n = $temp$n;
          value = $temp$value;
          continue repeatHelp;
        }
      }
  }
);
var $elm$core$List$repeat = F2(
  function(n, value) {
    return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
  }
);
var $author$project$Contact$resize = _Platform_outgoingPort("resize", $elm$core$Basics$identity);
var $author$project$Contact$SentMail = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $elm$bytes$Bytes$Encode$getWidth = function(builder) {
  switch (builder.$) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 4;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
      return 4;
    case 6:
      return 4;
    case 7:
      return 8;
    case 8:
      var w = builder.a;
      return w;
    case 9:
      var w = builder.a;
      return w;
    default:
      var bs = builder.a;
      return _Bytes_width(bs);
  }
};
var $elm$bytes$Bytes$Encode$write = F3(
  function(builder, mb, offset) {
    switch (builder.$) {
      case 0:
        var n = builder.a;
        return A3(_Bytes_write_i8, mb, offset, n);
      case 1:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_i16, mb, offset, n, !e);
      case 2:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_i32, mb, offset, n, !e);
      case 3:
        var n = builder.a;
        return A3(_Bytes_write_u8, mb, offset, n);
      case 4:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_u16, mb, offset, n, !e);
      case 5:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_u32, mb, offset, n, !e);
      case 6:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_f32, mb, offset, n, !e);
      case 7:
        var e = builder.a;
        var n = builder.b;
        return A4(_Bytes_write_f64, mb, offset, n, !e);
      case 8:
        var bs = builder.b;
        return A3($elm$bytes$Bytes$Encode$writeSequence, bs, mb, offset);
      case 9:
        var s = builder.b;
        return A3(_Bytes_write_string, mb, offset, s);
      default:
        var bs = builder.a;
        return A3(_Bytes_write_bytes, mb, offset, bs);
    }
  }
);
var $elm$bytes$Bytes$Encode$writeSequence = F3(
  function(builders, mb, offset) {
    writeSequence:
      while (true) {
        if (!builders.b) {
          return offset;
        } else {
          var b = builders.a;
          var bs = builders.b;
          var $temp$builders = bs, $temp$mb = mb, $temp$offset = A3($elm$bytes$Bytes$Encode$write, b, mb, offset);
          builders = $temp$builders;
          mb = $temp$mb;
          offset = $temp$offset;
          continue writeSequence;
        }
      }
  }
);
var $elm$bytes$Bytes$Encode$encode = _Bytes_encode;
var $elm$bytes$Bytes$Encode$Seq = F2(
  function(a, b) {
    return { $: 8, a, b };
  }
);
var $elm$bytes$Bytes$Encode$getWidths = F2(
  function(width, builders) {
    getWidths:
      while (true) {
        if (!builders.b) {
          return width;
        } else {
          var b = builders.a;
          var bs = builders.b;
          var $temp$width = width + $elm$bytes$Bytes$Encode$getWidth(b), $temp$builders = bs;
          width = $temp$width;
          builders = $temp$builders;
          continue getWidths;
        }
      }
  }
);
var $elm$bytes$Bytes$Encode$sequence = function(builders) {
  return A2(
    $elm$bytes$Bytes$Encode$Seq,
    A2($elm$bytes$Bytes$Encode$getWidths, 0, builders),
    builders
  );
};
var $chelovek0v$bbase64$Base64$Decode$encodeBytes = function(encoders) {
  return $elm$bytes$Bytes$Encode$encode(
    $elm$bytes$Bytes$Encode$sequence(
      $elm$core$List$reverse(encoders)
    )
  );
};
var $chelovek0v$bbase64$Base64$Table$charToCodeMap = $elm$core$Dict$fromList(
  _List_fromArray(
    [
      _Utils_Tuple2("A", 0),
      _Utils_Tuple2("B", 1),
      _Utils_Tuple2("C", 2),
      _Utils_Tuple2("D", 3),
      _Utils_Tuple2("E", 4),
      _Utils_Tuple2("F", 5),
      _Utils_Tuple2("G", 6),
      _Utils_Tuple2("H", 7),
      _Utils_Tuple2("I", 8),
      _Utils_Tuple2("J", 9),
      _Utils_Tuple2("K", 10),
      _Utils_Tuple2("L", 11),
      _Utils_Tuple2("M", 12),
      _Utils_Tuple2("N", 13),
      _Utils_Tuple2("O", 14),
      _Utils_Tuple2("P", 15),
      _Utils_Tuple2("Q", 16),
      _Utils_Tuple2("R", 17),
      _Utils_Tuple2("S", 18),
      _Utils_Tuple2("T", 19),
      _Utils_Tuple2("U", 20),
      _Utils_Tuple2("V", 21),
      _Utils_Tuple2("W", 22),
      _Utils_Tuple2("X", 23),
      _Utils_Tuple2("Y", 24),
      _Utils_Tuple2("Z", 25),
      _Utils_Tuple2("a", 26),
      _Utils_Tuple2("b", 27),
      _Utils_Tuple2("c", 28),
      _Utils_Tuple2("d", 29),
      _Utils_Tuple2("e", 30),
      _Utils_Tuple2("f", 31),
      _Utils_Tuple2("g", 32),
      _Utils_Tuple2("h", 33),
      _Utils_Tuple2("i", 34),
      _Utils_Tuple2("j", 35),
      _Utils_Tuple2("k", 36),
      _Utils_Tuple2("l", 37),
      _Utils_Tuple2("m", 38),
      _Utils_Tuple2("n", 39),
      _Utils_Tuple2("o", 40),
      _Utils_Tuple2("p", 41),
      _Utils_Tuple2("q", 42),
      _Utils_Tuple2("r", 43),
      _Utils_Tuple2("s", 44),
      _Utils_Tuple2("t", 45),
      _Utils_Tuple2("u", 46),
      _Utils_Tuple2("v", 47),
      _Utils_Tuple2("w", 48),
      _Utils_Tuple2("x", 49),
      _Utils_Tuple2("y", 50),
      _Utils_Tuple2("z", 51),
      _Utils_Tuple2("0", 52),
      _Utils_Tuple2("1", 53),
      _Utils_Tuple2("2", 54),
      _Utils_Tuple2("3", 55),
      _Utils_Tuple2("4", 56),
      _Utils_Tuple2("5", 57),
      _Utils_Tuple2("6", 58),
      _Utils_Tuple2("7", 59),
      _Utils_Tuple2("8", 60),
      _Utils_Tuple2("9", 61),
      _Utils_Tuple2("+", 62),
      _Utils_Tuple2("/", 63)
    ]
  )
);
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function(_char) {
  return A2($elm$core$String$cons, _char, "");
};
var $elm$core$Dict$get = F2(
  function(targetKey, dict) {
    get:
      while (true) {
        if (dict.$ === -2) {
          return $elm$core$Maybe$Nothing;
        } else {
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          var _v1 = A2($elm$core$Basics$compare, targetKey, key);
          switch (_v1) {
            case 0:
              var $temp$targetKey = targetKey, $temp$dict = left;
              targetKey = $temp$targetKey;
              dict = $temp$dict;
              continue get;
            case 1:
              return $elm$core$Maybe$Just(value);
            default:
              var $temp$targetKey = targetKey, $temp$dict = right;
              targetKey = $temp$targetKey;
              dict = $temp$dict;
              continue get;
          }
        }
      }
  }
);
var $chelovek0v$bbase64$Base64$Table$decode = function(_char) {
  return A2(
    $elm$core$Dict$get,
    $elm$core$String$fromChar(_char),
    $chelovek0v$bbase64$Base64$Table$charToCodeMap
  );
};
var $chelovek0v$bbase64$Base64$Shift$decodeNext = function(shift) {
  switch (shift) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    default:
      return 0;
  }
};
var $chelovek0v$bbase64$Base64$Shift$toInt = function(shift) {
  switch (shift) {
    case 0:
      return 0;
    case 1:
      return 2;
    case 2:
      return 4;
    default:
      return 6;
  }
};
var $chelovek0v$bbase64$Base64$Shift$shiftRightZfBy = F2(
  function(shift, value) {
    return value >>> $chelovek0v$bbase64$Base64$Shift$toInt(shift);
  }
);
var $chelovek0v$bbase64$Base64$Decode$finishPartialByte = F3(
  function(shift, sextet, partialByte) {
    return partialByte | A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, shift, sextet);
  }
);
var $chelovek0v$bbase64$Base64$Shift$shiftLeftBy = F2(
  function(shift, value) {
    return value << $chelovek0v$bbase64$Base64$Shift$toInt(shift);
  }
);
var $elm$bytes$Bytes$Encode$U8 = function(a) {
  return { $: 3, a };
};
var $elm$bytes$Bytes$Encode$unsignedInt8 = $elm$bytes$Bytes$Encode$U8;
var $chelovek0v$bbase64$Base64$Decode$decodeStep = F2(
  function(sextet, _v0) {
    var shift = _v0.a;
    var partialByte = _v0.b;
    var deferredEncoders = _v0.c;
    var nextBlankByte = function() {
      switch (shift) {
        case 0:
          return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, 1, sextet);
        case 1:
          return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, 2, sextet);
        case 2:
          return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, 3, sextet);
        default:
          return 0;
      }
    }();
    var finishedByte = function() {
      switch (shift) {
        case 0:
          return $elm$core$Maybe$Nothing;
        case 1:
          return $elm$core$Maybe$Just(
            A3($chelovek0v$bbase64$Base64$Decode$finishPartialByte, 2, sextet, partialByte)
          );
        case 2:
          return $elm$core$Maybe$Just(
            A3($chelovek0v$bbase64$Base64$Decode$finishPartialByte, 1, sextet, partialByte)
          );
        default:
          return $elm$core$Maybe$Just(partialByte | sextet);
      }
    }();
    var nextDeferredDecoders = function() {
      if (!finishedByte.$) {
        var byte_ = finishedByte.a;
        return A2(
          $elm$core$List$cons,
          $elm$bytes$Bytes$Encode$unsignedInt8(byte_),
          deferredEncoders
        );
      } else {
        return deferredEncoders;
      }
    }();
    return _Utils_Tuple3(
      $chelovek0v$bbase64$Base64$Shift$decodeNext(shift),
      nextBlankByte,
      nextDeferredDecoders
    );
  }
);
var $elm$core$String$foldl = _String_foldl;
var $chelovek0v$bbase64$Base64$Decode$initialState = _Utils_Tuple3(0, 0, _List_Nil);
var $elm$core$String$dropRight = F2(
  function(n, string) {
    return n < 1 ? string : A3($elm$core$String$slice, 0, -n, string);
  }
);
var $elm$core$String$endsWith = _String_endsWith;
var $chelovek0v$bbase64$Base64$Decode$strip = function(input) {
  return A2($elm$core$String$endsWith, "==", input) ? $elm$core$Result$Ok(
    A2($elm$core$String$dropRight, 2, input)
  ) : A2($elm$core$String$endsWith, "=", input) ? $elm$core$Result$Ok(
    A2($elm$core$String$dropRight, 1, input)
  ) : $elm$core$Result$Ok(input);
};
var $elm$regex$Regex$Match = F4(
  function(match, index, number, submatches) {
    return { c7: index, di: match, dm: number, dT: submatches };
  }
);
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function(string) {
  return A2(
    $elm$regex$Regex$fromStringWith,
    { cI: false, dl: false },
    string
  );
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$core$Maybe$withDefault = F2(
  function(_default, maybe) {
    if (!maybe.$) {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  }
);
var $chelovek0v$bbase64$Base64$Decode$validate = function(input) {
  var regex = A2(
    $elm$core$Maybe$withDefault,
    $elm$regex$Regex$never,
    $elm$regex$Regex$fromString("^[A-Za-z0-9\\/+]*$")
  );
  return A2($elm$regex$Regex$contains, regex, input) ? $elm$core$Result$Ok(input) : $elm$core$Result$Err(0);
};
var $chelovek0v$bbase64$Base64$Decode$tryDecode = function(input) {
  return A2(
    $elm$core$Result$map,
    A2(
      $elm$core$String$foldl,
      F2(
        function(_char, state) {
          return A2(
            $elm$core$Maybe$withDefault,
            state,
            A2(
              $elm$core$Maybe$map,
              function(sextet) {
                return A2($chelovek0v$bbase64$Base64$Decode$decodeStep, sextet, state);
              },
              $chelovek0v$bbase64$Base64$Table$decode(_char)
            )
          );
        }
      ),
      $chelovek0v$bbase64$Base64$Decode$initialState
    ),
    A2(
      $elm$core$Result$andThen,
      $chelovek0v$bbase64$Base64$Decode$validate,
      $chelovek0v$bbase64$Base64$Decode$strip(input)
    )
  );
};
var $chelovek0v$bbase64$Base64$Decode$bytes = function(input) {
  var _v0 = $chelovek0v$bbase64$Base64$Decode$tryDecode(input);
  if (!_v0.$) {
    var _v1 = _v0.a;
    var deferredEncoders = _v1.c;
    return $elm$core$Result$Ok(
      $chelovek0v$bbase64$Base64$Decode$encodeBytes(deferredEncoders)
    );
  } else {
    var e = _v0.a;
    return $elm$core$Result$Err(e);
  }
};
var $elm$http$Http$BadStatus_ = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $elm$http$Http$BadUrl_ = function(a) {
  return { $: 0, a };
};
var $elm$http$Http$GoodStatus_ = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $elm$http$Http$NetworkError_ = { $: 2 };
var $elm$http$Http$Receiving = function(a) {
  return { $: 1, a };
};
var $elm$http$Http$Sending = function(a) {
  return { $: 0, a };
};
var $elm$http$Http$Timeout_ = { $: 1 };
var $elm$core$Maybe$isJust = function(maybe) {
  if (!maybe.$) {
    return true;
  } else {
    return false;
  }
};
var $elm$core$Dict$getMin = function(dict) {
  getMin:
    while (true) {
      if (dict.$ === -1 && dict.d.$ === -1) {
        var left = dict.d;
        var $temp$dict = left;
        dict = $temp$dict;
        continue getMin;
      } else {
        return dict;
      }
    }
};
var $elm$core$Dict$moveRedLeft = function(dict) {
  if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
    if (dict.e.d.$ === -1 && !dict.e.d.a) {
      var clr = dict.a;
      var k = dict.b;
      var v = dict.c;
      var _v1 = dict.d;
      _v1.a;
      var lK = _v1.b;
      var lV = _v1.c;
      var lLeft = _v1.d;
      var lRight = _v1.e;
      var _v2 = dict.e;
      _v2.a;
      var rK = _v2.b;
      var rV = _v2.c;
      var rLeft = _v2.d;
      rLeft.a;
      var rlK = rLeft.b;
      var rlV = rLeft.c;
      var rlL = rLeft.d;
      var rlR = rLeft.e;
      var rRight = _v2.e;
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        0,
        rlK,
        rlV,
        A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
          rlL
        ),
        A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight)
      );
    } else {
      var clr = dict.a;
      var k = dict.b;
      var v = dict.c;
      var _v4 = dict.d;
      _v4.a;
      var lK = _v4.b;
      var lV = _v4.c;
      var lLeft = _v4.d;
      var lRight = _v4.e;
      var _v5 = dict.e;
      _v5.a;
      var rK = _v5.b;
      var rV = _v5.c;
      var rLeft = _v5.d;
      var rRight = _v5.e;
      if (clr === 1) {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
        );
      } else {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
        );
      }
    }
  } else {
    return dict;
  }
};
var $elm$core$Dict$moveRedRight = function(dict) {
  if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
    if (dict.d.d.$ === -1 && !dict.d.d.a) {
      var clr = dict.a;
      var k = dict.b;
      var v = dict.c;
      var _v1 = dict.d;
      _v1.a;
      var lK = _v1.b;
      var lV = _v1.c;
      var _v2 = _v1.d;
      _v2.a;
      var llK = _v2.b;
      var llV = _v2.c;
      var llLeft = _v2.d;
      var llRight = _v2.e;
      var lRight = _v1.e;
      var _v4 = dict.e;
      _v4.a;
      var rK = _v4.b;
      var rV = _v4.c;
      var rLeft = _v4.d;
      var rRight = _v4.e;
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        0,
        lK,
        lV,
        A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
        A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          lRight,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
        )
      );
    } else {
      var clr = dict.a;
      var k = dict.b;
      var v = dict.c;
      var _v5 = dict.d;
      _v5.a;
      var lK = _v5.b;
      var lV = _v5.c;
      var lLeft = _v5.d;
      var lRight = _v5.e;
      var _v6 = dict.e;
      _v6.a;
      var rK = _v6.b;
      var rV = _v6.c;
      var rLeft = _v6.d;
      var rRight = _v6.e;
      if (clr === 1) {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
        );
      } else {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          1,
          k,
          v,
          A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
        );
      }
    }
  } else {
    return dict;
  }
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
  function(targetKey, dict, color, key, value, left, right) {
    if (left.$ === -1 && !left.a) {
      left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        color,
        lK,
        lV,
        lLeft,
        A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right)
      );
    } else {
      _v2$2:
        while (true) {
          if (right.$ === -1 && right.a === 1) {
            if (right.d.$ === -1) {
              if (right.d.a === 1) {
                right.a;
                var _v4 = right.d;
                _v4.a;
                return $elm$core$Dict$moveRedRight(dict);
              } else {
                break _v2$2;
              }
            } else {
              right.a;
              right.d;
              return $elm$core$Dict$moveRedRight(dict);
            }
          } else {
            break _v2$2;
          }
        }
      return dict;
    }
  }
);
var $elm$core$Dict$removeMin = function(dict) {
  if (dict.$ === -1 && dict.d.$ === -1) {
    var color = dict.a;
    var key = dict.b;
    var value = dict.c;
    var left = dict.d;
    var lColor = left.a;
    var lLeft = left.d;
    var right = dict.e;
    if (lColor === 1) {
      if (lLeft.$ === -1 && !lLeft.a) {
        lLeft.a;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          color,
          key,
          value,
          $elm$core$Dict$removeMin(left),
          right
        );
      } else {
        var _v4 = $elm$core$Dict$moveRedLeft(dict);
        if (_v4.$ === -1) {
          var nColor = _v4.a;
          var nKey = _v4.b;
          var nValue = _v4.c;
          var nLeft = _v4.d;
          var nRight = _v4.e;
          return A5(
            $elm$core$Dict$balance,
            nColor,
            nKey,
            nValue,
            $elm$core$Dict$removeMin(nLeft),
            nRight
          );
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      }
    } else {
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        color,
        key,
        value,
        $elm$core$Dict$removeMin(left),
        right
      );
    }
  } else {
    return $elm$core$Dict$RBEmpty_elm_builtin;
  }
};
var $elm$core$Dict$removeHelp = F2(
  function(targetKey, dict) {
    if (dict.$ === -2) {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_cmp(targetKey, key) < 0) {
        if (left.$ === -1 && left.a === 1) {
          left.a;
          var lLeft = left.d;
          if (lLeft.$ === -1 && !lLeft.a) {
            lLeft.a;
            return A5(
              $elm$core$Dict$RBNode_elm_builtin,
              color,
              key,
              value,
              A2($elm$core$Dict$removeHelp, targetKey, left),
              right
            );
          } else {
            var _v7 = $elm$core$Dict$moveRedLeft(dict);
            if (_v7.$ === -1) {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return A5(
                $elm$core$Dict$balance,
                nColor,
                nKey,
                nValue,
                A2($elm$core$Dict$removeHelp, targetKey, nLeft),
                nRight
              );
            } else {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            }
          }
        } else {
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            color,
            key,
            value,
            A2($elm$core$Dict$removeHelp, targetKey, left),
            right
          );
        }
      } else {
        return A2(
          $elm$core$Dict$removeHelpEQGT,
          targetKey,
          A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right)
        );
      }
    }
  }
);
var $elm$core$Dict$removeHelpEQGT = F2(
  function(targetKey, dict) {
    if (dict.$ === -1) {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_eq(targetKey, key)) {
        var _v1 = $elm$core$Dict$getMin(right);
        if (_v1.$ === -1) {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return A5(
            $elm$core$Dict$balance,
            color,
            minKey,
            minValue,
            left,
            $elm$core$Dict$removeMin(right)
          );
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      } else {
        return A5(
          $elm$core$Dict$balance,
          color,
          key,
          value,
          left,
          A2($elm$core$Dict$removeHelp, targetKey, right)
        );
      }
    } else {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    }
  }
);
var $elm$core$Dict$remove = F2(
  function(key, dict) {
    var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
    if (_v0.$ === -1 && !_v0.a) {
      _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  }
);
var $elm$core$Dict$update = F3(
  function(targetKey, alter, dictionary) {
    var _v0 = alter(
      A2($elm$core$Dict$get, targetKey, dictionary)
    );
    if (!_v0.$) {
      var value = _v0.a;
      return A3($elm$core$Dict$insert, targetKey, value, dictionary);
    } else {
      return A2($elm$core$Dict$remove, targetKey, dictionary);
    }
  }
);
var $elm$http$Http$bytesPart = F3(
  function(key, mime, bytes) {
    return A2(
      _Http_pair,
      key,
      A2(_Http_bytesToBlob, mime, bytes)
    );
  }
);
var $chelovek0v$bbase64$Base64$Decode$decode = F2(
  function(_v0, input) {
    var decoder = _v0;
    return decoder(input);
  }
);
var $elm$core$String$replace = F3(
  function(before, after, string) {
    return A2(
      $elm$core$String$join,
      after,
      A2($elm$core$String$split, before, string)
    );
  }
);
var $elm$core$Result$toMaybe = function(result) {
  if (!result.$) {
    var v = result.a;
    return $elm$core$Maybe$Just(v);
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $author$project$Contact$base64ToFile = function(_v0) {
  var fileName = _v0.a;
  var dataUrl = _v0.b;
  var _v1 = A2(
    $elm$core$String$split,
    ",",
    A3(
      $elm$core$String$replace,
      ";base64",
      "",
      A2($elm$core$String$dropLeft, 5, dataUrl)
    )
  );
  if (_v1.b && _v1.b.b) {
    var mime = _v1.a;
    var _v2 = _v1.b;
    var data = _v2.a;
    return $elm$core$Result$toMaybe(
      A2(
        $elm$core$Result$map,
        function(decoded) {
          return A3($elm$http$Http$bytesPart, fileName + ".jpg", mime, decoded);
        },
        A2($chelovek0v$bbase64$Base64$Decode$decode, $chelovek0v$bbase64$Base64$Decode$bytes, data)
      )
    );
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $elm$core$Basics$composeR = F3(
  function(f, g, x) {
    return g(
      f(x)
    );
  }
);
var $elm$http$Http$expectStringResponse = F2(
  function(toMsg, toResult) {
    return A3(
      _Http_expect,
      "",
      $elm$core$Basics$identity,
      A2($elm$core$Basics$composeR, toResult, toMsg)
    );
  }
);
var $elm$http$Http$BadBody = function(a) {
  return { $: 4, a };
};
var $elm$http$Http$BadStatus = function(a) {
  return { $: 3, a };
};
var $elm$http$Http$BadUrl = function(a) {
  return { $: 0, a };
};
var $elm$http$Http$NetworkError = { $: 2 };
var $elm$http$Http$Timeout = { $: 1 };
var $elm$http$Http$resolve = F2(
  function(toResult, response) {
    switch (response.$) {
      case 0:
        var url = response.a;
        return $elm$core$Result$Err(
          $elm$http$Http$BadUrl(url)
        );
      case 1:
        return $elm$core$Result$Err($elm$http$Http$Timeout);
      case 2:
        return $elm$core$Result$Err($elm$http$Http$NetworkError);
      case 3:
        var metadata = response.a;
        return $elm$core$Result$Err(
          $elm$http$Http$BadStatus(metadata.dO)
        );
      default:
        var body = response.b;
        return A2(
          $elm$core$Result$mapError,
          $elm$http$Http$BadBody,
          toResult(body)
        );
    }
  }
);
var $elm$http$Http$expectString = function(toMsg) {
  return A2(
    $elm$http$Http$expectStringResponse,
    toMsg,
    $elm$http$Http$resolve($elm$core$Result$Ok)
  );
};
var $elm$http$Http$multipartBody = function(parts) {
  return A2(
    _Http_pair,
    "",
    _Http_toFormData(parts)
  );
};
var $elm$core$String$repeatHelp = F3(
  function(n, chunk, result) {
    return n <= 0 ? result : A3(
      $elm$core$String$repeatHelp,
      n >> 1,
      _Utils_ap(chunk, chunk),
      !(n & 1) ? result : _Utils_ap(result, chunk)
    );
  }
);
var $elm$core$String$repeat = F2(
  function(n, chunk) {
    return A3($elm$core$String$repeatHelp, n, chunk, "");
  }
);
var $elm$core$String$padLeft = F3(
  function(n, _char, string) {
    return _Utils_ap(
      A2(
        $elm$core$String$repeat,
        n - $elm$core$String$length(string),
        $elm$core$String$fromChar(_char)
      ),
      string
    );
  }
);
var $elm$http$Http$Request = function(a) {
  return { $: 1, a };
};
var $elm$http$Http$State = F2(
  function(reqs, subs) {
    return { bW: reqs, b3: subs };
  }
);
var $elm$http$Http$init = $elm$core$Task$succeed(
  A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil)
);
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
  function(router, cmds, reqs) {
    updateReqs:
      while (true) {
        if (!cmds.b) {
          return $elm$core$Task$succeed(reqs);
        } else {
          var cmd = cmds.a;
          var otherCmds = cmds.b;
          if (!cmd.$) {
            var tracker = cmd.a;
            var _v2 = A2($elm$core$Dict$get, tracker, reqs);
            if (_v2.$ === 1) {
              var $temp$router = router, $temp$cmds = otherCmds, $temp$reqs = reqs;
              router = $temp$router;
              cmds = $temp$cmds;
              reqs = $temp$reqs;
              continue updateReqs;
            } else {
              var pid = _v2.a;
              return A2(
                $elm$core$Task$andThen,
                function(_v3) {
                  return A3(
                    $elm$http$Http$updateReqs,
                    router,
                    otherCmds,
                    A2($elm$core$Dict$remove, tracker, reqs)
                  );
                },
                $elm$core$Process$kill(pid)
              );
            }
          } else {
            var req = cmd.a;
            return A2(
              $elm$core$Task$andThen,
              function(pid2) {
                var _v4 = req.b5;
                if (_v4.$ === 1) {
                  return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
                } else {
                  var tracker2 = _v4.a;
                  return A3(
                    $elm$http$Http$updateReqs,
                    router,
                    otherCmds,
                    A3($elm$core$Dict$insert, tracker2, pid2, reqs)
                  );
                }
              },
              $elm$core$Process$spawn(
                A3(
                  _Http_toTask,
                  router,
                  $elm$core$Platform$sendToApp(router),
                  req
                )
              )
            );
          }
        }
      }
  }
);
var $elm$http$Http$onEffects = F4(
  function(router, cmds, subs, state) {
    return A2(
      $elm$core$Task$andThen,
      function(reqs) {
        return $elm$core$Task$succeed(
          A2($elm$http$Http$State, reqs, subs)
        );
      },
      A3($elm$http$Http$updateReqs, router, cmds, state.bW)
    );
  }
);
var $elm$http$Http$maybeSend = F4(
  function(router, desiredTracker, progress, _v0) {
    var actualTracker = _v0.a;
    var toMsg = _v0.b;
    return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
      A2(
        $elm$core$Platform$sendToApp,
        router,
        toMsg(progress)
      )
    ) : $elm$core$Maybe$Nothing;
  }
);
var $elm$http$Http$onSelfMsg = F3(
  function(router, _v0, state) {
    var tracker = _v0.a;
    var progress = _v0.b;
    return A2(
      $elm$core$Task$andThen,
      function(_v1) {
        return $elm$core$Task$succeed(state);
      },
      $elm$core$Task$sequence(
        A2(
          $elm$core$List$filterMap,
          A3($elm$http$Http$maybeSend, router, tracker, progress),
          state.b3
        )
      )
    );
  }
);
var $elm$http$Http$Cancel = function(a) {
  return { $: 0, a };
};
var $elm$http$Http$cmdMap = F2(
  function(func, cmd) {
    if (!cmd.$) {
      var tracker = cmd.a;
      return $elm$http$Http$Cancel(tracker);
    } else {
      var r = cmd.a;
      return $elm$http$Http$Request(
        {
          cr: r.cr,
          cy: r.cy,
          cW: A2(_Http_mapExpect, func, r.cW),
          bv: r.bv,
          dj: r.dj,
          d7: r.d7,
          b5: r.b5,
          b8: r.b8
        }
      );
    }
  }
);
var $elm$http$Http$MySub = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $elm$http$Http$subMap = F2(
  function(func, _v0) {
    var tracker = _v0.a;
    var toMsg = _v0.b;
    return A2(
      $elm$http$Http$MySub,
      tracker,
      A2($elm$core$Basics$composeR, toMsg, func)
    );
  }
);
_Platform_effectManagers["Http"] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf("Http");
var $elm$http$Http$request = function(r) {
  return $elm$http$Http$command(
    $elm$http$Http$Request(
      { cr: false, cy: r.cy, cW: r.cW, bv: r.bv, dj: r.dj, d7: r.d7, b5: r.b5, b8: r.b8 }
    )
  );
};
var $elm$http$Http$post = function(r) {
  return $elm$http$Http$request(
    { cy: r.cy, cW: r.cW, bv: _List_Nil, dj: "POST", d7: $elm$core$Maybe$Nothing, b5: $elm$core$Maybe$Nothing, b8: r.b8 }
  );
};
var $elm$http$Http$stringPart = _Http_pair;
var $author$project$Inquiry$Content$toString = function(_v0) {
  var value = _v0;
  return value;
};
var $author$project$Email$toString = function(_v0) {
  var value = _v0;
  return value;
};
var $author$project$Inquiry$Email$toString = $author$project$Email$toString;
var $author$project$Inquiry$Kana$toString = function(_v0) {
  var value = _v0;
  return value;
};
var $author$project$Inquiry$Name$toString = function(_v0) {
  var value = _v0;
  return value;
};
var $author$project$Inquiry$Tel$toString = function(_v0) {
  var value = _v0;
  return value;
};
var $author$project$Contact$sendMail = function(contact) {
  return $elm$http$Http$post(
    {
      cy: $elm$http$Http$multipartBody(
        _Utils_ap(
          _List_fromArray(
            [
              A2(
                $elm$http$Http$stringPart,
                "email",
                $author$project$Inquiry$Email$toString(contact.E)
              ),
              A2(
                $elm$http$Http$stringPart,
                "name",
                $author$project$Inquiry$Name$toString(contact.H)
              ),
              A2(
                $elm$http$Http$stringPart,
                "kana",
                $author$project$Inquiry$Kana$toString(contact.F)
              ),
              A2(
                $elm$http$Http$stringPart,
                "tel",
                A2(
                  $elm$core$Maybe$withDefault,
                  "",
                  A2($elm$core$Maybe$map, $author$project$Inquiry$Tel$toString, contact.I)
                )
              ),
              A2(
                $elm$http$Http$stringPart,
                "content",
                $author$project$Inquiry$Content$toString(contact.C)
              ),
              A2($elm$http$Http$stringPart, "body-field", ""),
              A2($elm$http$Http$stringPart, "form-name", "contact")
            ]
          ),
          A2(
            $elm$core$List$filterMap,
            $author$project$Contact$base64ToFile,
            A2(
              $elm$core$List$indexedMap,
              F2(
                function(index, file) {
                  return _Utils_Tuple2(
                    "file" + A3(
                      $elm$core$String$padLeft,
                      2,
                      "0",
                      $elm$core$String$fromInt(index + 1)
                    ),
                    file
                  );
                }
              ),
              contact.f
            )
          )
        )
      ),
      cW: $elm$http$Http$expectString(
        $author$project$Contact$SentMail(contact)
      ),
      b8: "/"
    }
  );
};
var $elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$core$List$takeReverse = F3(
  function(n, list, kept) {
    takeReverse:
      while (true) {
        if (n <= 0) {
          return kept;
        } else {
          if (!list.b) {
            return kept;
          } else {
            var x = list.a;
            var xs = list.b;
            var $temp$n = n - 1, $temp$list = xs, $temp$kept = A2($elm$core$List$cons, x, kept);
            n = $temp$n;
            list = $temp$list;
            kept = $temp$kept;
            continue takeReverse;
          }
        }
      }
  }
);
var $elm$core$List$takeTailRec = F2(
  function(n, list) {
    return $elm$core$List$reverse(
      A3($elm$core$List$takeReverse, n, list, _List_Nil)
    );
  }
);
var $elm$core$List$takeFast = F3(
  function(ctr, n, list) {
    if (n <= 0) {
      return _List_Nil;
    } else {
      var _v0 = _Utils_Tuple2(n, list);
      _v0$1:
        while (true) {
          _v0$5:
            while (true) {
              if (!_v0.b.b) {
                return list;
              } else {
                if (_v0.b.b.b) {
                  switch (_v0.a) {
                    case 1:
                      break _v0$1;
                    case 2:
                      var _v2 = _v0.b;
                      var x = _v2.a;
                      var _v3 = _v2.b;
                      var y = _v3.a;
                      return _List_fromArray(
                        [x, y]
                      );
                    case 3:
                      if (_v0.b.b.b.b) {
                        var _v4 = _v0.b;
                        var x = _v4.a;
                        var _v5 = _v4.b;
                        var y = _v5.a;
                        var _v6 = _v5.b;
                        var z = _v6.a;
                        return _List_fromArray(
                          [x, y, z]
                        );
                      } else {
                        break _v0$5;
                      }
                    default:
                      if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                        var _v7 = _v0.b;
                        var x = _v7.a;
                        var _v8 = _v7.b;
                        var y = _v8.a;
                        var _v9 = _v8.b;
                        var z = _v9.a;
                        var _v10 = _v9.b;
                        var w = _v10.a;
                        var tl = _v10.b;
                        return ctr > 1e3 ? A2(
                          $elm$core$List$cons,
                          x,
                          A2(
                            $elm$core$List$cons,
                            y,
                            A2(
                              $elm$core$List$cons,
                              z,
                              A2(
                                $elm$core$List$cons,
                                w,
                                A2($elm$core$List$takeTailRec, n - 4, tl)
                              )
                            )
                          )
                        ) : A2(
                          $elm$core$List$cons,
                          x,
                          A2(
                            $elm$core$List$cons,
                            y,
                            A2(
                              $elm$core$List$cons,
                              z,
                              A2(
                                $elm$core$List$cons,
                                w,
                                A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)
                              )
                            )
                          )
                        );
                      } else {
                        break _v0$5;
                      }
                  }
                } else {
                  if (_v0.a === 1) {
                    break _v0$1;
                  } else {
                    break _v0$5;
                  }
                }
              }
            }
          return list;
        }
      var _v1 = _v0.b;
      var x = _v1.a;
      return _List_fromArray(
        [x]
      );
    }
  }
);
var $elm$core$List$take = F2(
  function(n, list) {
    return A3($elm$core$List$takeFast, 0, n, list);
  }
);
var $elm$file$File$toUrl = _File_toUrl;
var $author$project$Contact$update = F2(
  function(msg, model) {
    var form = model.t;
    var setContactForm = function(f) {
      return _Utils_update(
        model,
        { t: f }
      );
    };
    switch (msg.$) {
      case 0:
        var _v1 = A2($arowM$elm_form_decoder$Form$Decoder$run, $author$project$Contact$decoder, model.t);
        if (!_v1.$) {
          var contact = _v1.a;
          return _Utils_Tuple2(
            _Utils_update(
              model,
              {
                O: A2($author$project$Contact$Confirming, contact, $elm$core$Maybe$Nothing),
                av: true
              }
            ),
            A2(
              $elm$core$Task$perform,
              function(_v2) {
                return $author$project$Contact$NoOp;
              },
              A2($elm$browser$Browser$Dom$setViewport, 0, 0)
            )
          );
        } else {
          return _Utils_Tuple2(
            _Utils_update(
              model,
              { av: true }
            ),
            $elm$core$Platform$Cmd$none
          );
        }
      case 1:
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { O: $author$project$Contact$Editting }
          ),
          A2(
            $elm$core$Task$perform,
            function(_v3) {
              return $author$project$Contact$NoOp;
            },
            A2($elm$browser$Browser$Dom$setViewport, 0, 0)
          )
        );
      case 2:
        var contact = msg.a;
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { am: true }
          ),
          $author$project$Contact$sendMail(contact)
        );
      case 3:
        return _Utils_Tuple2($author$project$Contact$initialModel, $elm$core$Platform$Cmd$none);
      case 4:
        if (!msg.b.$) {
          var response = msg.b.a;
          return _Utils_Tuple2(
            _Utils_update(
              model,
              {
                O: $author$project$Contact$Sent(response),
                am: false
              }
            ),
            A2(
              $elm$core$Task$perform,
              function(_v4) {
                return $author$project$Contact$NoOp;
              },
              A2($elm$browser$Browser$Dom$setViewport, 0, 0)
            )
          );
        } else {
          var contact = msg.a;
          return _Utils_Tuple2(
            _Utils_update(
              model,
              {
                O: A2(
                  $author$project$Contact$Confirming,
                  contact,
                  $elm$core$Maybe$Just("通信エラーが発生しました")
                ),
                am: false
              }
            ),
            $elm$core$Platform$Cmd$none
          );
        }
      case 5:
        return _Utils_Tuple2(
          model,
          A2($elm$file$File$Select$files, $author$project$Contact$acceptedFileTypes, $author$project$Contact$GotFiles)
        );
      case 6:
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { aj: true }
          ),
          $elm$core$Platform$Cmd$none
        );
      case 7:
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { aj: false }
          ),
          $elm$core$Platform$Cmd$none
        );
      case 8:
        var file = msg.a;
        var files = msg.b;
        var validFiles = A2(
          $elm$core$List$filter,
          function(item) {
            return A2(
              $elm$core$List$any,
              function(mime) {
                return _Utils_eq(
                  $elm$file$File$mime(item),
                  mime
                );
              },
              $author$project$Contact$acceptedFileTypes
            );
          },
          A2($elm$core$List$cons, file, files)
        );
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { aj: false }
          ),
          A2(
            $elm$core$Task$perform,
            $author$project$Contact$GotPreviews,
            $elm$core$Task$sequence(
              A2($elm$core$List$map, $elm$file$File$toUrl, validFiles)
            )
          )
        );
      case 9:
        var urls = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              {
                f: A2(
                  $elm$core$List$take,
                  10,
                  _Utils_ap(
                    form.f,
                    A2(
                      $elm$core$List$repeat,
                      $elm$core$List$length(urls),
                      ""
                    )
                  )
                )
              }
            )
          ),
          $author$project$Contact$resize(
            A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, urls)
          )
        );
      case 10:
        var value = msg.a;
        var _v5 = A2(
          $elm$json$Json$Decode$decodeValue,
          $elm$json$Json$Decode$list($elm$json$Json$Decode$string),
          value
        );
        if (!_v5.$) {
          var urls = _v5.a;
          return _Utils_Tuple2(
            setContactForm(
              _Utils_update(
                form,
                {
                  f: A2(
                    $elm$core$List$take,
                    10,
                    _Utils_ap(
                      A2(
                        $elm$core$List$filter,
                        function(url) {
                          return url !== "";
                        },
                        form.f
                      ),
                      urls
                    )
                  )
                }
              )
            ),
            $elm$core$Platform$Cmd$none
          );
        } else {
          return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
        }
      case 11:
        var index = msg.a;
        return _Utils_Tuple2(
          function(m) {
            return _Utils_update(
              m,
              { X: $elm$core$Maybe$Nothing }
            );
          }(
            setContactForm(
              _Utils_update(
                form,
                {
                  f: _Utils_ap(
                    A2($elm$core$List$take, index, form.f),
                    A2($elm$core$List$drop, index + 1, form.f)
                  )
                }
              )
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      case 12:
        var index = msg.a;
        return _Utils_Tuple2(
          _Utils_update(
            model,
            {
              X: A2(
                $elm$core$Maybe$map,
                function(s) {
                  return _Utils_Tuple2(index, s);
                },
                $elm$core$List$head(
                  A2($elm$core$List$drop, index, model.t.f)
                )
              )
            }
          ),
          $elm$core$Platform$Cmd$none
        );
      case 13:
        return _Utils_Tuple2(
          _Utils_update(
            model,
            { X: $elm$core$Maybe$Nothing }
          ),
          $elm$core$Platform$Cmd$none
        );
      case 14:
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
      case 15:
        var v = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { H: v }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      case 16:
        var v = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { F: v }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      case 17:
        var v = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { I: v }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      case 18:
        var v = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { E: v }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      case 19:
        var v = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { C: v }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
      default:
        var b = msg.a;
        return _Utils_Tuple2(
          setContactForm(
            _Utils_update(
              form,
              { ae: b }
            )
          ),
          $elm$core$Platform$Cmd$none
        );
    }
  }
);
var $author$project$Main$update = F2(
  function(msg, model) {
    if (!msg.$) {
      var device = msg.a;
      return _Utils_Tuple2(
        _Utils_update(
          model,
          { aK: device }
        ),
        $elm$core$Platform$Cmd$none
      );
    } else {
      var subMsg = msg.a;
      var _v1 = A2($author$project$Contact$update, subMsg, model.ah);
      var newModel = _v1.a;
      var cmd = _v1.b;
      return _Utils_Tuple2(
        _Utils_update(
          model,
          { ah: newModel }
        ),
        A2($elm$core$Platform$Cmd$map, $author$project$Main$ContactMsg, cmd)
      );
    }
  }
);
var $mdgriffith$elm_ui$Internal$Style$classes = { ch: "a", aP: "atv", cj: "ab", ck: "cx", cl: "cy", cm: "acb", cn: "accx", co: "accy", cp: "acr", bi: "al", bj: "ar", cq: "at", aQ: "ah", aR: "av", cs: "s", cw: "bh", cx: "b", cz: "w7", cB: "bd", cC: "bdt", aC: "bn", cD: "bs", aE: "cpe", cL: "cp", cM: "cpx", cN: "cpy", L: "c", aG: "ctr", aH: "cb", aI: "ccx", M: "ccy", as: "cl", aJ: "cr", cO: "ct", cQ: "cptr", cR: "ctxt", cZ: "fcs", bs: "focus-within", c_: "fs", c0: "g", aY: "hbh", a_: "hc", bw: "he", a$: "hf", bx: "hfp", aj: "hv", c4: "ic", c6: "fr", aM: "lbl", c9: "iml", da: "imlf", db: "imlp", dc: "implw", dd: "it", df: "i", bF: "lnk", ak: "nb", bI: "notxt", dn: "ol", $7: "or", _: "oq", ds: "oh", bM: "pg", bN: "p", dt: "ppe", dz: "ui", b_: "r", dB: "sb", dC: "sbx", dD: "sby", dE: "sbt", dI: "e", dJ: "cap", dK: "sev", dR: "sk", ax: "t", dV: "tc", dW: "w8", dX: "w2", dY: "w9", dZ: "tj", aO: "tja", d_: "tl", d$: "w3", d0: "w5", d1: "w4", d2: "tr", d3: "w6", d4: "w1", d5: "tun", b7: "ts", ac: "clr", ec: "u", bd: "wc", cc: "we", be: "wf", cd: "wfp", bg: "wrp" };
var $mdgriffith$elm_ui$Internal$Model$Attr = function(a) {
  return { $: 1, a };
};
var $elm$html$Html$Attributes$stringProperty = F2(
  function(key, string) {
    return A2(
      _VirtualDom_property,
      key,
      $elm$json$Json$Encode$string(string)
    );
  }
);
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty("className");
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function(cls) {
  return $mdgriffith$elm_ui$Internal$Model$Attr(
    $elm$html$Html$Attributes$class(cls)
  );
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
  function(a, b) {
    return { $: 2, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function(a) {
  return { $: 0, a };
};
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$Generic = { $: 0 };
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = { $: 0 };
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.L);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.c0);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bM);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bN);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.b_);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.dI);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function(context) {
  switch (context) {
    case 0:
      return $mdgriffith$elm_ui$Internal$Model$rowClass;
    case 1:
      return $mdgriffith$elm_ui$Internal$Model$columnClass;
    case 2:
      return $mdgriffith$elm_ui$Internal$Model$singleClass;
    case 3:
      return $mdgriffith$elm_ui$Internal$Model$gridClass;
    case 4:
      return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
    default:
      return $mdgriffith$elm_ui$Internal$Model$pageClass;
  }
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = { $: 0 };
var $mdgriffith$elm_ui$Internal$Model$Styled = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function(a) {
  return { $: 0, a };
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
  function(existing, nearbyChildren) {
    switch (nearbyChildren.$) {
      case 0:
        return existing;
      case 1:
        var behind = nearbyChildren.a;
        return _Utils_ap(behind, existing);
      case 2:
        var inFront = nearbyChildren.a;
        return _Utils_ap(existing, inFront);
      default:
        var behind = nearbyChildren.a;
        var inFront = nearbyChildren.b;
        return _Utils_ap(
          behind,
          _Utils_ap(existing, inFront)
        );
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
  function(key, existing, nearbyChildren) {
    switch (nearbyChildren.$) {
      case 0:
        return existing;
      case 1:
        var behind = nearbyChildren.a;
        return _Utils_ap(
          A2(
            $elm$core$List$map,
            function(x) {
              return _Utils_Tuple2(key, x);
            },
            behind
          ),
          existing
        );
      case 2:
        var inFront = nearbyChildren.a;
        return _Utils_ap(
          existing,
          A2(
            $elm$core$List$map,
            function(x) {
              return _Utils_Tuple2(key, x);
            },
            inFront
          )
        );
      default:
        var behind = nearbyChildren.a;
        var inFront = nearbyChildren.b;
        return _Utils_ap(
          A2(
            $elm$core$List$map,
            function(x) {
              return _Utils_Tuple2(key, x);
            },
            behind
          ),
          _Utils_ap(
            existing,
            A2(
              $elm$core$List$map,
              function(x) {
                return _Utils_Tuple2(key, x);
              },
              inFront
            )
          )
        );
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function(a) {
  return { $: 0, a };
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Flag$flag = function(i) {
  return i > 31 ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << i - 32) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$div = _VirtualDom_node("div");
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function(x) {
  switch (x.$) {
    case 0:
      var px = x.a;
      return $elm$core$String$fromInt(px) + "px";
    case 1:
      return "auto";
    case 2:
      var i = x.a;
      return $elm$core$String$fromInt(i) + "fr";
    case 3:
      var min = x.a;
      var len = x.b;
      return "min" + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
    default:
      var max = x.a;
      var len = x.b;
      return "max" + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
  }
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function(x) {
  return $elm$core$String$fromInt(
    $elm$core$Basics$round(x * 255)
  );
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function(transform) {
  switch (transform.$) {
    case 0:
      return $elm$core$Maybe$Nothing;
    case 1:
      var _v1 = transform.a;
      var x = _v1.a;
      var y = _v1.b;
      var z = _v1.c;
      return $elm$core$Maybe$Just(
        "mv-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(z)))))
      );
    default:
      var _v2 = transform.a;
      var tx = _v2.a;
      var ty = _v2.b;
      var tz = _v2.c;
      var _v3 = transform.b;
      var sx = _v3.a;
      var sy = _v3.b;
      var sz = _v3.c;
      var _v4 = transform.c;
      var ox = _v4.a;
      var oy = _v4.b;
      var oz = _v4.c;
      var angle = transform.d;
      return $elm$core$Maybe$Just(
        "tfrm-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(angle)))))))))))))))))))
      );
  }
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function(style2) {
  switch (style2.$) {
    case 13:
      var name = style2.a;
      return name;
    case 12:
      var name = style2.a;
      style2.b;
      return name;
    case 0:
      var _class = style2.a;
      return _class;
    case 1:
      var name = style2.a;
      return name;
    case 2:
      var i = style2.a;
      return "font-size-" + $elm$core$String$fromInt(i);
    case 3:
      var _class = style2.a;
      return _class;
    case 4:
      var _class = style2.a;
      return _class;
    case 5:
      var cls = style2.a;
      var x = style2.b;
      style2.c;
      return cls;
    case 7:
      var cls = style2.a;
      style2.b;
      style2.c;
      style2.d;
      style2.e;
      return cls;
    case 6:
      var cls = style2.a;
      style2.b;
      style2.c;
      style2.d;
      style2.e;
      return cls;
    case 8:
      var template = style2.a;
      return "grid-rows-" + (A2(
        $elm$core$String$join,
        "-",
        A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.dA)
      ) + ("-cols-" + (A2(
        $elm$core$String$join,
        "-",
        A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.B)
      ) + ("-space-x-" + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dL.a) + ("-space-y-" + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dL.b)))))));
    case 9:
      var pos = style2.a;
      return "gp grid-pos-" + ($elm$core$String$fromInt(pos.b_) + ("-" + ($elm$core$String$fromInt(pos.bm) + ("-" + ($elm$core$String$fromInt(pos.bc) + ("-" + $elm$core$String$fromInt(pos.aZ)))))));
    case 11:
      var selector = style2.a;
      var subStyle = style2.b;
      var name = function() {
        switch (selector) {
          case 0:
            return "fs";
          case 1:
            return "hv";
          default:
            return "act";
        }
      }();
      return A2(
        $elm$core$String$join,
        " ",
        A2(
          $elm$core$List$map,
          function(sty) {
            var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
            if (_v1 === "") {
              return "";
            } else {
              var styleName = _v1;
              return styleName + ("-" + name);
            }
          },
          subStyle
        )
      );
    default:
      var x = style2.a;
      return A2(
        $elm$core$Maybe$withDefault,
        "",
        $mdgriffith$elm_ui$Internal$Model$transformClass(x)
      );
  }
};
var $elm$core$Set$insert = F2(
  function(key, _v0) {
    var dict = _v0;
    return A3($elm$core$Dict$insert, key, 0, dict);
  }
);
var $elm$core$Dict$member = F2(
  function(key, dict) {
    var _v0 = A2($elm$core$Dict$get, key, dict);
    if (!_v0.$) {
      return true;
    } else {
      return false;
    }
  }
);
var $elm$core$Set$member = F2(
  function(key, _v0) {
    var dict = _v0;
    return A2($elm$core$Dict$member, key, dict);
  }
);
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
  function(style2, nevermind) {
    var cache = nevermind.a;
    var existing = nevermind.b;
    var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style2);
    return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
      A2($elm$core$Set$insert, styleName, cache),
      A2($elm$core$List$cons, style2, existing)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$dot = function(c) {
  return "." + c;
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function(_v0) {
  var red = _v0.a;
  var green = _v0.b;
  var blue = _v0.c;
  var alpha = _v0.d;
  return "rgba(" + ($elm$core$String$fromInt(
    $elm$core$Basics$round(red * 255)
  ) + ("," + $elm$core$String$fromInt(
    $elm$core$Basics$round(green * 255)
  ) + ("," + $elm$core$String$fromInt(
    $elm$core$Basics$round(blue * 255)
  ) + ("," + ($elm$core$String$fromFloat(alpha) + ")")))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function(shadow) {
  return A2(
    $elm$core$String$join,
    " ",
    A2(
      $elm$core$List$filterMap,
      $elm$core$Basics$identity,
      _List_fromArray(
        [
          shadow.bB ? $elm$core$Maybe$Just("inset") : $elm$core$Maybe$Nothing,
          $elm$core$Maybe$Just(
            $elm$core$String$fromFloat(shadow.a.a) + "px"
          ),
          $elm$core$Maybe$Just(
            $elm$core$String$fromFloat(shadow.a.b) + "px"
          ),
          $elm$core$Maybe$Just(
            $elm$core$String$fromFloat(shadow.af) + "px"
          ),
          $elm$core$Maybe$Just(
            $elm$core$String$fromFloat(shadow.b1) + "px"
          ),
          $elm$core$Maybe$Just(
            $mdgriffith$elm_ui$Internal$Model$formatColor(shadow.ag)
          )
        ]
      )
    )
  );
};
var $elm$core$Tuple$mapFirst = F2(
  function(func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Utils_Tuple2(
      func(x),
      y
    );
  }
);
var $elm$core$Tuple$mapSecond = F2(
  function(func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Utils_Tuple2(
      x,
      func(y)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function(focus) {
  return _List_fromArray(
    [
      A2(
        $mdgriffith$elm_ui$Internal$Model$Style,
        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bs) + ":focus-within",
        A2(
          $elm$core$List$filterMap,
          $elm$core$Basics$identity,
          _List_fromArray(
            [
              A2(
                $elm$core$Maybe$map,
                function(color) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "border-color",
                    $mdgriffith$elm_ui$Internal$Model$formatColor(color)
                  );
                },
                focus.cA
              ),
              A2(
                $elm$core$Maybe$map,
                function(color) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "background-color",
                    $mdgriffith$elm_ui$Internal$Model$formatColor(color)
                  );
                },
                focus.cu
              ),
              A2(
                $elm$core$Maybe$map,
                function(shadow) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "box-shadow",
                    $mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
                      {
                        af: shadow.af,
                        ag: shadow.ag,
                        bB: false,
                        a: A2(
                          $elm$core$Tuple$mapSecond,
                          $elm$core$Basics$toFloat,
                          A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.a)
                        ),
                        b1: shadow.b1
                      }
                    )
                  );
                },
                focus.dG
              ),
              $elm$core$Maybe$Just(
                A2($mdgriffith$elm_ui$Internal$Model$Property, "outline", "none")
              )
            ]
          )
        )
      ),
      A2(
        $mdgriffith$elm_ui$Internal$Model$Style,
        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ":focus .focusable, " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ".focusable:focus, " + (".ui-slide-bar:focus + " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + " .focusable-thumb"))),
        A2(
          $elm$core$List$filterMap,
          $elm$core$Basics$identity,
          _List_fromArray(
            [
              A2(
                $elm$core$Maybe$map,
                function(color) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "border-color",
                    $mdgriffith$elm_ui$Internal$Model$formatColor(color)
                  );
                },
                focus.cA
              ),
              A2(
                $elm$core$Maybe$map,
                function(color) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "background-color",
                    $mdgriffith$elm_ui$Internal$Model$formatColor(color)
                  );
                },
                focus.cu
              ),
              A2(
                $elm$core$Maybe$map,
                function(shadow) {
                  return A2(
                    $mdgriffith$elm_ui$Internal$Model$Property,
                    "box-shadow",
                    $mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
                      {
                        af: shadow.af,
                        ag: shadow.ag,
                        bB: false,
                        a: A2(
                          $elm$core$Tuple$mapSecond,
                          $elm$core$Basics$toFloat,
                          A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.a)
                        ),
                        b1: shadow.b1
                      }
                    )
                  );
                },
                focus.dG
              ),
              $elm$core$Maybe$Just(
                A2($mdgriffith$elm_ui$Internal$Model$Property, "outline", "none")
              )
            ]
          )
        )
      )
    ]
  );
};
var $elm$virtual_dom$VirtualDom$node = function(tag) {
  return _VirtualDom_node(
    _VirtualDom_noScript(tag)
  );
};
var $elm$virtual_dom$VirtualDom$property = F2(
  function(key, value) {
    return A2(
      _VirtualDom_property,
      _VirtualDom_noInnerHtmlOrFormAction(key),
      _VirtualDom_noJavaScriptOrHtmlJson(value)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
  function(a, b) {
    return { $: 2, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$Batch = function(a) {
  return { $: 6, a };
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
  [0, 1, 2, 3, 4, 5]
);
var $elm$core$List$append = F2(
  function(xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    }
  }
);
var $elm$core$List$concat = function(lists) {
  return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
  function(f, list) {
    return $elm$core$List$concat(
      A2($elm$core$List$map, f, list)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Style$contentName = function(desc) {
  switch (desc) {
    case 0:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cO);
    case 1:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aH);
    case 2:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aJ);
    case 3:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.as);
    case 4:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aI);
    default:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.M);
  }
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function(desc) {
  switch (desc) {
    case 0:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cq);
    case 1:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cj);
    case 2:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bj);
    case 3:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bi);
    case 4:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ck);
    default:
      return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl);
  }
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function(values) {
  var createDescription = function(alignment) {
    var _v0 = values(alignment);
    var content = _v0.a;
    var indiv = _v0.b;
    return _List_fromArray(
      [
        A2(
          $mdgriffith$elm_ui$Internal$Style$Descriptor,
          $mdgriffith$elm_ui$Internal$Style$contentName(alignment),
          content
        ),
        A2(
          $mdgriffith$elm_ui$Internal$Style$Child,
          $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Style$Descriptor,
                $mdgriffith$elm_ui$Internal$Style$selfName(alignment),
                indiv
              )
            ]
          )
        )
      ]
    );
  };
  return $mdgriffith$elm_ui$Internal$Style$Batch(
    A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments)
  );
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
  [
    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
    A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "column"),
    A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre"),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Descriptor,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aY),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Child,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "-1")
              ]
            )
          )
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Descriptor,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dE),
      _List_fromArray(
        [
          A2(
            $mdgriffith$elm_ui$Internal$Style$Child,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ax),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "auto !important")
                    ]
                  )
                )
              ]
            )
          )
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Child,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a_),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Child,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Child,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Child,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cd),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Child,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
        ]
      )
    ),
    $mdgriffith$elm_ui$Internal$Style$describeAlignment(
      function(alignment) {
        switch (alignment) {
          case 0:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important"),
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "0 !important")
                ]
              )
            );
          case 1:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "0 !important")
                ]
              )
            );
          case 2:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                ]
              )
            );
          case 3:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                ]
              )
            );
          case 4:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                ]
              )
            );
          default:
            return _Utils_Tuple2(
              _List_fromArray(
                [
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$Child,
                    $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
                    _List_fromArray(
                      [
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto"),
                        A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto")
                      ]
                    )
                  )
                ]
              ),
              _List_fromArray(
                [
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                  A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                ]
              )
            );
        }
      }
    )
  ]
);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function(values) {
  var createDescription = function(alignment) {
    return _List_fromArray(
      [
        A2(
          $mdgriffith$elm_ui$Internal$Style$Child,
          $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Style$Descriptor,
                $mdgriffith$elm_ui$Internal$Style$selfName(alignment),
                values(alignment)
              )
            ]
          )
        )
      ]
    );
  };
  return $mdgriffith$elm_ui$Internal$Style$Batch(
    A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments)
  );
};
var $mdgriffith$elm_ui$Internal$Style$locations = function() {
  return _List_fromArray(
    [0, 1, 2, 3, 4, 5]
  );
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
  [
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      "html,body",
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "padding", "0"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      _Utils_ap(
        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
        _Utils_ap(
          $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
          $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c4)
        )
      ),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "img",
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "max-height", "100%"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "object-fit", "cover")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "img",
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "max-width", "100%"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "object-fit", "cover")
                    ]
                  )
                )
              ]
            )
          )
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ":focus",
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "outline", "none")
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dz),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "min-height", "100%"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            _Utils_ap(
              $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
              $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$)
            ),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Child,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c6),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ak),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "fixed"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20")
                    ]
                  )
                )
              ]
            )
          )
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ak),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "relative"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "border", "none"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
            $mdgriffith$elm_ui$Internal$Style$elDescription
          ),
          $mdgriffith$elm_ui$Internal$Style$Batch(
            function(fn) {
              return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
            }(
              function(loc) {
                switch (loc) {
                  case 0:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ch),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "bottom", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
                              ]
                            )
                          ),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                              ]
                            )
                          ),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                  case 1:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "bottom", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          ),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                  case 2:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                  case 3:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dn),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "right", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "20"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                  case 4:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c6),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                  default:
                    return A2(
                      $mdgriffith$elm_ui$Internal$Style$Descriptor,
                      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "absolute"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
                          A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none"),
                          A2(
                            $mdgriffith$elm_ui$Internal$Style$Child,
                            "*",
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto")
                              ]
                            )
                          )
                        ]
                      )
                    );
                }
              }
            )
          )
        ]
      )
    ),
    A2(
      $mdgriffith$elm_ui$Internal$Style$Class,
      $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "relative"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "border", "none"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "0"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "resize", "none"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", "inherit"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "box-sizing", "border-box"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "padding", "0"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-width", "0"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "solid"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-size", "inherit"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "color", "inherit"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-family", "inherit"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "line-height", "1"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "inherit"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "none"),
          A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "inherit"),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bg),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-wrap", "wrap")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bI),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-moz-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-webkit-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "-ms-user-select", "none"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "user-select", "none")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cQ),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "pointer")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cR),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "text")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dt),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none !important")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aE),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "auto !important")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ac),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes._),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes.ac)
            ) + ":hover",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aj, $mdgriffith$elm_ui$Internal$Style$classes._)
            ) + ":hover",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cZ, $mdgriffith$elm_ui$Internal$Style$classes.ac)
            ) + ":focus",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.cZ, $mdgriffith$elm_ui$Internal$Style$classes._)
            ) + ":focus",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aP, $mdgriffith$elm_ui$Internal$Style$classes.ac)
            ) + ":active",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "0")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot(
              _Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.aP, $mdgriffith$elm_ui$Internal$Style$classes._)
            ) + ":active",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "opacity", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b7),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Prop,
                  "transition",
                  A2(
                    $elm$core$String$join,
                    ", ",
                    A2(
                      $elm$core$List$map,
                      function(x) {
                        return x + " 160ms";
                      },
                      _List_fromArray(
                        ["transform", "opacity", "filter", "background-color", "color", "font-size"]
                      )
                    )
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dB),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dC),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-x", "auto"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b_),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dD),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-y", "auto"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.L),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-shrink", "1")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cL),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow", "hidden")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-x", "hidden")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cN),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-y", "hidden")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "auto")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aC),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-width", "0")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cB),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "dashed")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cC),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "dotted")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cD),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "border-style", "solid")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ax),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-block")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dd),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "line-height", "1.05"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "background", "transparent"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "inherit")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
            $mdgriffith$elm_ui$Internal$Style$elDescription
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b_),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "row"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "0%"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cc),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bF),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aG),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "u:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.cp,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.cn,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ck),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-left", "auto !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:last-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.cn,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ck),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-right", "auto !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:only-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.cn,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:last-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.cn + " ~ u"),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "u:first-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.cp + (" ~ s." + $mdgriffith$elm_ui$Internal$Style$classes.cn)),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                    ]
                  )
                ),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(
                  function(alignment) {
                    switch (alignment) {
                      case 0:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                            ]
                          )
                        );
                      case 1:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                            ]
                          )
                        );
                      case 2:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                            ]
                          ),
                          _List_Nil
                        );
                      case 3:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                            ]
                          ),
                          _List_Nil
                        );
                      case 4:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                            ]
                          ),
                          _List_Nil
                        );
                      default:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                            ]
                          )
                        );
                    }
                  }
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dK),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "space-between")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "baseline")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.L),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-direction", "column"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "0px"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "min-height", "min-content"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bw),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "100000")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.be),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cd),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "u:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.cm,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:first-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.co,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "0 !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:last-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.co,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "0 !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:only-of-type." + $mdgriffith$elm_ui$Internal$Style$classes.co,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "1"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto !important"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto !important")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "s:last-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.co + " ~ u"),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  "u:first-of-type." + ($mdgriffith$elm_ui$Internal$Style$classes.cm + (" ~ s." + $mdgriffith$elm_ui$Internal$Style$classes.co)),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0")
                    ]
                  )
                ),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(
                  function(alignment) {
                    switch (alignment) {
                      case 0:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-bottom", "auto")
                            ]
                          )
                        );
                      case 1:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin-top", "auto")
                            ]
                          )
                        );
                      case 2:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-end")
                            ]
                          )
                        );
                      case 3:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "flex-start")
                            ]
                          )
                        );
                      case 4:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                            ]
                          ),
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "center")
                            ]
                          )
                        );
                      default:
                        return _Utils_Tuple2(
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                            ]
                          ),
                          _List_Nil
                        );
                    }
                  }
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aG),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-grow", "0"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-self", "stretch !important")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dK),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "space-between")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c0),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "-ms-grid"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  ".gp",
                  _List_fromArray(
                    [
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Supports,
                  _Utils_Tuple2("display", "grid"),
                  _List_fromArray(
                    [
                      _Utils_Tuple2("display", "grid")
                    ]
                  )
                ),
                $mdgriffith$elm_ui$Internal$Style$gridAlignments(
                  function(alignment) {
                    switch (alignment) {
                      case 0:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-start")
                          ]
                        );
                      case 1:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "flex-end")
                          ]
                        );
                      case 2:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-end")
                          ]
                        );
                      case 3:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "flex-start")
                          ]
                        );
                      case 4:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "align-items", "center")
                          ]
                        );
                      default:
                        return _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "justify-content", "center")
                          ]
                        );
                    }
                  }
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bM),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs + ":first-child"),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot(
                    $mdgriffith$elm_ui$Internal$Style$classes.cs + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (":first-child + ." + $mdgriffith$elm_ui$Internal$Style$classes.cs))
                  ),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot(
                    $mdgriffith$elm_ui$Internal$Style$classes.cs + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (":first-child + ." + $mdgriffith$elm_ui$Internal$Style$classes.cs))
                  ),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "margin", "0 !important")
                    ]
                  )
                ),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(
                  function(alignment) {
                    switch (alignment) {
                      case 0:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      case 1:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      case 2:
                        return _Utils_Tuple2(
                          _List_Nil,
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "right"),
                              A2(
                                $mdgriffith$elm_ui$Internal$Style$Descriptor,
                                "::after",
                                _List_fromArray(
                                  [
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", '""'),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "table"),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "clear", "both")
                                  ]
                                )
                              )
                            ]
                          )
                        );
                      case 3:
                        return _Utils_Tuple2(
                          _List_Nil,
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "left"),
                              A2(
                                $mdgriffith$elm_ui$Internal$Style$Descriptor,
                                "::after",
                                _List_fromArray(
                                  [
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", '""'),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "table"),
                                    A2($mdgriffith$elm_ui$Internal$Style$Prop, "clear", "both")
                                  ]
                                )
                              )
                            ]
                          )
                        );
                      case 4:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      default:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                    }
                  }
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "background-color", "transparent")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dc),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "flex-basis", "auto")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.db),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "cursor", "text"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "pre-wrap !important"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "color", "transparent")
                    ]
                  )
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bN),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "block"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "overflow-wrap", "break-word"),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Descriptor,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aY),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "0"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "z-index", "-1")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$AllChildren,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ax),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$AllChildren,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bN),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        "::after",
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", "none")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        "::before",
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "content", "none")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$AllChildren,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal"),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cc),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-block")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c6),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ch),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Descriptor,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dn),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "flex")
                          ]
                        )
                      ),
                      A2(
                        $mdgriffith$elm_ui$Internal$Style$Child,
                        $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ax),
                        _List_fromArray(
                          [
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline"),
                            A2($mdgriffith$elm_ui$Internal$Style$Prop, "white-space", "normal")
                          ]
                        )
                      )
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b_),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.L),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-flex")
                    ]
                  )
                ),
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Child,
                  $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c0),
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "inline-grid")
                    ]
                  )
                ),
                $mdgriffith$elm_ui$Internal$Style$describeAlignment(
                  function(alignment) {
                    switch (alignment) {
                      case 0:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      case 1:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      case 2:
                        return _Utils_Tuple2(
                          _List_Nil,
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "right")
                            ]
                          )
                        );
                      case 3:
                        return _Utils_Tuple2(
                          _List_Nil,
                          _List_fromArray(
                            [
                              A2($mdgriffith$elm_ui$Internal$Style$Prop, "float", "left")
                            ]
                          )
                        );
                      case 4:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                      default:
                        return _Utils_Tuple2(_List_Nil, _List_Nil);
                    }
                  }
                )
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            ".hidden",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "display", "none")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d4),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "100")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dX),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "200")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d$),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "300")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d1),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "400")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d0),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "500")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d3),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "600")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cz),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "700")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dW),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "800")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dY),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-weight", "900")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.df),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "italic")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "line-through")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ec),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "underline"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip-ink", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip", "ink")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            _Utils_ap(
              $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ec),
              $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR)
            ),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration", "line-through underline"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip-ink", "auto"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-decoration-skip", "ink")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d5),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-style", "normal")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dZ),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "justify")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aO),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "justify-all")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dV),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "center")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "right")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d_),
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "text-align", "left")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Descriptor,
            ".modal",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "position", "fixed"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "left", "0"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "top", "0"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "width", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "height", "100%"),
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "pointer-events", "none")
              ]
            )
          )
        ]
      )
    )
  ]
);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function(_var) {
  return _List_fromArray(
    [
      A2(
        $mdgriffith$elm_ui$Internal$Style$Class,
        ".v-" + _var,
        _List_fromArray(
          [
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", '"' + (_var + '"'))
          ]
        )
      ),
      A2(
        $mdgriffith$elm_ui$Internal$Style$Class,
        ".v-" + (_var + "-off"),
        _List_fromArray(
          [
            A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-feature-settings", '"' + (_var + '" 0'))
          ]
        )
      )
    ]
  );
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
  _List_fromArray(
    [
      A2(
        $elm$core$List$map,
        function(x) {
          return A2(
            $mdgriffith$elm_ui$Internal$Style$Class,
            ".border-" + $elm$core$String$fromInt(x),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Prop,
                  "border-width",
                  $elm$core$String$fromInt(x) + "px"
                )
              ]
            )
          );
        },
        A2($elm$core$List$range, 0, 6)
      ),
      A2(
        $elm$core$List$map,
        function(i) {
          return A2(
            $mdgriffith$elm_ui$Internal$Style$Class,
            ".font-size-" + $elm$core$String$fromInt(i),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Prop,
                  "font-size",
                  $elm$core$String$fromInt(i) + "px"
                )
              ]
            )
          );
        },
        A2($elm$core$List$range, 8, 32)
      ),
      A2(
        $elm$core$List$map,
        function(i) {
          return A2(
            $mdgriffith$elm_ui$Internal$Style$Class,
            ".p-" + $elm$core$String$fromInt(i),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Internal$Style$Prop,
                  "padding",
                  $elm$core$String$fromInt(i) + "px"
                )
              ]
            )
          );
        },
        A2($elm$core$List$range, 0, 24)
      ),
      _List_fromArray(
        [
          A2(
            $mdgriffith$elm_ui$Internal$Style$Class,
            ".v-smcp",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-variant", "small-caps")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Style$Class,
            ".v-smcp-off",
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Style$Prop, "font-variant", "normal")
              ]
            )
          )
        ]
      ),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("zero"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("onum"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("liga"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("dlig"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("ordn"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("tnum"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("afrc"),
      $mdgriffith$elm_ui$Internal$Style$fontVariant("frac")
    ]
  )
);
var $mdgriffith$elm_ui$Internal$Style$explainer = "\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > ." + ($mdgriffith$elm_ui$Internal$Style$classes.cs + (" {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > ." + ($mdgriffith$elm_ui$Internal$Style$classes.cs + " {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n")));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = "\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n";
var $mdgriffith$elm_ui$Internal$Style$thumbReset = "\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n";
var $mdgriffith$elm_ui$Internal$Style$trackReset = "\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n";
var $mdgriffith$elm_ui$Internal$Style$overrides = "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {" + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b_) + (" > " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + (" { flex-basis: auto !important; } " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b_) + (" > " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aG) + (" { flex-basis: auto !important; }}" + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function(strings) {
  return A2($elm$core$String$join, "", strings);
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
  function(selector, closing) {
    return { aF: closing, l: _List_Nil, Q: _List_Nil, y: selector };
  }
);
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
  function(_v0, rulesToRender) {
    var parent = _v0;
    var generateIntermediates = F2(
      function(rule, rendered) {
        switch (rule.$) {
          case 0:
            var name = rule.a;
            var val = rule.b;
            return _Utils_update(
              rendered,
              {
                Q: A2(
                  $elm$core$List$cons,
                  _Utils_Tuple2(name, val),
                  rendered.Q
                )
              }
            );
          case 3:
            var _v2 = rule.a;
            var prop = _v2.a;
            var value = _v2.b;
            var props = rule.b;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  { aF: "\n}", l: _List_Nil, Q: props, y: "@supports (" + (prop + (":" + (value + (") {" + parent.y)))) },
                  rendered.l
                )
              }
            );
          case 5:
            var selector = rule.a;
            var adjRules = rule.b;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$renderRules,
                    A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.y + (" + " + selector), ""),
                    adjRules
                  ),
                  rendered.l
                )
              }
            );
          case 1:
            var child = rule.a;
            var childRules = rule.b;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$renderRules,
                    A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.y + (" > " + child), ""),
                    childRules
                  ),
                  rendered.l
                )
              }
            );
          case 2:
            var child = rule.a;
            var childRules = rule.b;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$renderRules,
                    A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.y + (" " + child), ""),
                    childRules
                  ),
                  rendered.l
                )
              }
            );
          case 4:
            var descriptor = rule.a;
            var descriptorRules = rule.b;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$renderRules,
                    A2(
                      $mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
                      _Utils_ap(parent.y, descriptor),
                      ""
                    ),
                    descriptorRules
                  ),
                  rendered.l
                )
              }
            );
          default:
            var batched = rule.a;
            return _Utils_update(
              rendered,
              {
                l: A2(
                  $elm$core$List$cons,
                  A2(
                    $mdgriffith$elm_ui$Internal$Style$renderRules,
                    A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.y, ""),
                    batched
                  ),
                  rendered.l
                )
              }
            );
        }
      }
    );
    return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
  }
);
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function(styleClasses) {
  var renderValues = function(values) {
    return $elm$core$String$concat(
      A2(
        $elm$core$List$map,
        function(_v3) {
          var x = _v3.a;
          var y = _v3.b;
          return x + (":" + (y + ";"));
        },
        values
      )
    );
  };
  var renderClass = function(rule) {
    var _v2 = rule.Q;
    if (!_v2.b) {
      return "";
    } else {
      return rule.y + ("{" + (renderValues(rule.Q) + (rule.aF + "}")));
    }
  };
  var renderIntermediate = function(_v0) {
    var rule = _v0;
    return _Utils_ap(
      renderClass(rule),
      $elm$core$String$concat(
        A2($elm$core$List$map, renderIntermediate, rule.l)
      )
    );
  };
  return $elm$core$String$concat(
    A2(
      $elm$core$List$map,
      renderIntermediate,
      A3(
        $elm$core$List$foldr,
        F2(
          function(_v1, existing) {
            var name = _v1.a;
            var styleRules = _v1.b;
            return A2(
              $elm$core$List$cons,
              A2(
                $mdgriffith$elm_ui$Internal$Style$renderRules,
                A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ""),
                styleRules
              ),
              existing
            );
          }
        ),
        _List_Nil,
        styleClasses
      )
    )
  );
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
  $mdgriffith$elm_ui$Internal$Style$overrides,
  $mdgriffith$elm_ui$Internal$Style$renderCompact(
    _Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)
  )
);
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function(opts) {
  var _v0 = opts.dk;
  switch (_v0) {
    case 0:
      return A3(
        $elm$virtual_dom$VirtualDom$node,
        "div",
        _List_Nil,
        _List_fromArray(
          [
            A3(
              $elm$virtual_dom$VirtualDom$node,
              "style",
              _List_Nil,
              _List_fromArray(
                [
                  $elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
                ]
              )
            )
          ]
        )
      );
    case 1:
      return $elm$virtual_dom$VirtualDom$text("");
    default:
      return A3(
        $elm$virtual_dom$VirtualDom$node,
        "elm-ui-static-rules",
        _List_fromArray(
          [
            A2(
              $elm$virtual_dom$VirtualDom$property,
              "rules",
              $elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules)
            )
          ]
        ),
        _List_Nil
      );
  }
};
var $elm$json$Json$Encode$object = function(pairs) {
  return _Json_wrap(
    A3(
      $elm$core$List$foldl,
      F2(
        function(_v0, obj) {
          var k = _v0.a;
          var v = _v0.b;
          return A3(_Json_addField, k, v, obj);
        }
      ),
      _Json_emptyObject(),
      pairs
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$fontName = function(font) {
  switch (font.$) {
    case 0:
      return "serif";
    case 1:
      return "sans-serif";
    case 2:
      return "monospace";
    case 3:
      var name = font.a;
      return '"' + (name + '"');
    case 4:
      var name = font.a;
      font.b;
      return '"' + (name + '"');
    default:
      var name = font.a.H;
      return '"' + (name + '"');
  }
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function(_var) {
  switch (_var.$) {
    case 0:
      var name = _var.a;
      return name === "smcp";
    case 1:
      var name = _var.a;
      return false;
    default:
      var name = _var.a;
      var index = _var.b;
      return name === "smcp" && index === 1;
  }
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function(typeface) {
  if (typeface.$ === 5) {
    var font = typeface.a;
    return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.b9);
  } else {
    return false;
  }
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
  function(force, _v0, existing) {
    var key = _v0.a;
    var val = _v0.b;
    return force ? existing + ("\n  " + (key + (": " + (val + " !important;")))) : existing + ("\n  " + (key + (": " + (val + ";"))));
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
  function(options, maybePseudo, selector, props) {
    if (maybePseudo.$ === 1) {
      return _List_fromArray(
        [
          selector + ("{" + (A3(
            $elm$core$List$foldl,
            $mdgriffith$elm_ui$Internal$Model$renderProps(false),
            "",
            props
          ) + "\n}"))
        ]
      );
    } else {
      var pseudo = maybePseudo.a;
      switch (pseudo) {
        case 1:
          var _v2 = options.aj;
          switch (_v2) {
            case 0:
              return _List_Nil;
            case 2:
              return _List_fromArray(
                [
                  selector + ("-hv {" + (A3(
                    $elm$core$List$foldl,
                    $mdgriffith$elm_ui$Internal$Model$renderProps(true),
                    "",
                    props
                  ) + "\n}"))
                ]
              );
            default:
              return _List_fromArray(
                [
                  selector + ("-hv:hover {" + (A3(
                    $elm$core$List$foldl,
                    $mdgriffith$elm_ui$Internal$Model$renderProps(false),
                    "",
                    props
                  ) + "\n}"))
                ]
              );
          }
        case 0:
          var renderedProps = A3(
            $elm$core$List$foldl,
            $mdgriffith$elm_ui$Internal$Model$renderProps(false),
            "",
            props
          );
          return _List_fromArray(
            [
              selector + ("-fs:focus {" + (renderedProps + "\n}")),
              "." + ($mdgriffith$elm_ui$Internal$Style$classes.cs + (":focus " + (selector + "-fs  {"))) + (renderedProps + "\n}"),
              selector + "-fs:focus-within {" + (renderedProps + "\n}"),
              ".ui-slide-bar:focus + " + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cs) + (" .focusable-thumb" + (selector + "-fs {"))) + (renderedProps + "\n}")
            ]
          );
        default:
          return _List_fromArray(
            [
              selector + ("-act:active {" + (A3(
                $elm$core$List$foldl,
                $mdgriffith$elm_ui$Internal$Model$renderProps(false),
                "",
                props
              ) + "\n}"))
            ]
          );
      }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function(_var) {
  switch (_var.$) {
    case 0:
      var name = _var.a;
      return '"' + (name + '"');
    case 1:
      var name = _var.a;
      return '"' + (name + '" 0');
    default:
      var name = _var.a;
      var index = _var.b;
      return '"' + (name + ('" ' + $elm$core$String$fromInt(index)));
  }
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function(typeface) {
  if (typeface.$ === 5) {
    var font = typeface.a;
    return $elm$core$Maybe$Just(
      A2(
        $elm$core$String$join,
        ", ",
        A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.b9)
      )
    );
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function(transform) {
  switch (transform.$) {
    case 0:
      return $elm$core$Maybe$Nothing;
    case 1:
      var _v1 = transform.a;
      var x = _v1.a;
      var y = _v1.b;
      var z = _v1.c;
      return $elm$core$Maybe$Just(
        "translate3d(" + ($elm$core$String$fromFloat(x) + ("px, " + ($elm$core$String$fromFloat(y) + ("px, " + ($elm$core$String$fromFloat(z) + "px)")))))
      );
    default:
      var _v2 = transform.a;
      var tx = _v2.a;
      var ty = _v2.b;
      var tz = _v2.c;
      var _v3 = transform.b;
      var sx = _v3.a;
      var sy = _v3.b;
      var sz = _v3.c;
      var _v4 = transform.c;
      var ox = _v4.a;
      var oy = _v4.b;
      var oz = _v4.c;
      var angle = transform.d;
      var translate = "translate3d(" + ($elm$core$String$fromFloat(tx) + ("px, " + ($elm$core$String$fromFloat(ty) + ("px, " + ($elm$core$String$fromFloat(tz) + "px)")))));
      var scale = "scale3d(" + ($elm$core$String$fromFloat(sx) + (", " + ($elm$core$String$fromFloat(sy) + (", " + ($elm$core$String$fromFloat(sz) + ")")))));
      var rotate = "rotate3d(" + ($elm$core$String$fromFloat(ox) + (", " + ($elm$core$String$fromFloat(oy) + (", " + ($elm$core$String$fromFloat(oz) + (", " + ($elm$core$String$fromFloat(angle) + "rad)")))))));
      return $elm$core$Maybe$Just(translate + (" " + (scale + (" " + rotate))));
  }
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
  function(options, rule, maybePseudo) {
    switch (rule.$) {
      case 0:
        var selector = rule.a;
        var props = rule.b;
        return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
      case 13:
        var name = rule.a;
        var prop = rule.b;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          "." + name,
          _List_fromArray(
            [
              A2($mdgriffith$elm_ui$Internal$Model$Property, "box-shadow", prop)
            ]
          )
        );
      case 12:
        var name = rule.a;
        var transparency = rule.b;
        var opacity = A2(
          $elm$core$Basics$max,
          0,
          A2($elm$core$Basics$min, 1, 1 - transparency)
        );
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          "." + name,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Model$Property,
                "opacity",
                $elm$core$String$fromFloat(opacity)
              )
            ]
          )
        );
      case 2:
        var i = rule.a;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          ".font-size-" + $elm$core$String$fromInt(i),
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Model$Property,
                "font-size",
                $elm$core$String$fromInt(i) + "px"
              )
            ]
          )
        );
      case 1:
        var name = rule.a;
        var typefaces = rule.b;
        var features = A2(
          $elm$core$String$join,
          ", ",
          A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces)
        );
        var families = _List_fromArray(
          [
            A2(
              $mdgriffith$elm_ui$Internal$Model$Property,
              "font-family",
              A2(
                $elm$core$String$join,
                ", ",
                A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces)
              )
            ),
            A2($mdgriffith$elm_ui$Internal$Model$Property, "font-feature-settings", features),
            A2(
              $mdgriffith$elm_ui$Internal$Model$Property,
              "font-variant",
              A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? "small-caps" : "normal"
            )
          ]
        );
        return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, "." + name, families);
      case 3:
        var _class = rule.a;
        var prop = rule.b;
        var val = rule.c;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          "." + _class,
          _List_fromArray(
            [
              A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
            ]
          )
        );
      case 4:
        var _class = rule.a;
        var prop = rule.b;
        var color = rule.c;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          "." + _class,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Model$Property,
                prop,
                $mdgriffith$elm_ui$Internal$Model$formatColor(color)
              )
            ]
          )
        );
      case 5:
        var cls = rule.a;
        var x = rule.b;
        var y = rule.c;
        var yPx = $elm$core$String$fromInt(y) + "px";
        var xPx = $elm$core$String$fromInt(x) + "px";
        var row = "." + $mdgriffith$elm_ui$Internal$Style$classes.b_;
        var wrappedRow = "." + ($mdgriffith$elm_ui$Internal$Style$classes.bg + row);
        var right = "." + $mdgriffith$elm_ui$Internal$Style$classes.bj;
        var paragraph = "." + $mdgriffith$elm_ui$Internal$Style$classes.bN;
        var page = "." + $mdgriffith$elm_ui$Internal$Style$classes.bM;
        var left = "." + $mdgriffith$elm_ui$Internal$Style$classes.bi;
        var halfY = $elm$core$String$fromFloat(y / 2) + "px";
        var halfX = $elm$core$String$fromFloat(x / 2) + "px";
        var column = "." + $mdgriffith$elm_ui$Internal$Style$classes.L;
        var _class = "." + cls;
        var any = "." + $mdgriffith$elm_ui$Internal$Style$classes.cs;
        return $elm$core$List$concat(
          _List_fromArray(
            [
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (row + (" > " + (any + (" + " + any)))),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (wrappedRow + (" > " + any)),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin", halfY + (" " + halfX))
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (column + (" > " + (any + (" + " + any)))),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-top", yPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (page + (" > " + (any + (" + " + any)))),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-top", yPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (page + (" > " + left)),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-right", xPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (page + (" > " + right)),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _Utils_ap(_class, paragraph),
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_ui$Internal$Model$Property,
                      "line-height",
                      "calc(1em + " + ($elm$core$String$fromInt(y) + "px)")
                    )
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                "textarea" + (any + _class),
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_ui$Internal$Model$Property,
                      "line-height",
                      "calc(1em + " + ($elm$core$String$fromInt(y) + "px)")
                    ),
                    A2(
                      $mdgriffith$elm_ui$Internal$Model$Property,
                      "height",
                      "calc(100% + " + ($elm$core$String$fromInt(y) + "px)")
                    )
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (paragraph + (" > " + left)),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-right", xPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (paragraph + (" > " + right)),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "margin-left", xPx)
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (paragraph + "::after"),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "content", "''"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "display", "block"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "height", "0"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "width", "0"),
                    A2(
                      $mdgriffith$elm_ui$Internal$Model$Property,
                      "margin-top",
                      $elm$core$String$fromInt(-1 * (y / 2 | 0)) + "px"
                    )
                  ]
                )
              ),
              A4(
                $mdgriffith$elm_ui$Internal$Model$renderStyle,
                options,
                maybePseudo,
                _class + (paragraph + "::before"),
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "content", "''"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "display", "block"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "height", "0"),
                    A2($mdgriffith$elm_ui$Internal$Model$Property, "width", "0"),
                    A2(
                      $mdgriffith$elm_ui$Internal$Model$Property,
                      "margin-bottom",
                      $elm$core$String$fromInt(-1 * (y / 2 | 0)) + "px"
                    )
                  ]
                )
              )
            ]
          )
        );
      case 7:
        var cls = rule.a;
        var top = rule.b;
        var right = rule.c;
        var bottom = rule.d;
        var left = rule.e;
        var _class = "." + cls;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          _class,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Model$Property,
                "padding",
                $elm$core$String$fromFloat(top) + ("px " + ($elm$core$String$fromFloat(right) + ("px " + ($elm$core$String$fromFloat(bottom) + ("px " + ($elm$core$String$fromFloat(left) + "px"))))))
              )
            ]
          )
        );
      case 6:
        var cls = rule.a;
        var top = rule.b;
        var right = rule.c;
        var bottom = rule.d;
        var left = rule.e;
        var _class = "." + cls;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$renderStyle,
          options,
          maybePseudo,
          _class,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Internal$Model$Property,
                "border-width",
                $elm$core$String$fromInt(top) + ("px " + ($elm$core$String$fromInt(right) + ("px " + ($elm$core$String$fromInt(bottom) + ("px " + ($elm$core$String$fromInt(left) + "px"))))))
              )
            ]
          )
        );
      case 8:
        var template = rule.a;
        var toGridLengthHelper = F3(
          function(minimum, maximum, x2) {
            toGridLengthHelper:
              while (true) {
                switch (x2.$) {
                  case 0:
                    var px = x2.a;
                    return $elm$core$String$fromInt(px) + "px";
                  case 1:
                    var _v2 = _Utils_Tuple2(minimum, maximum);
                    if (_v2.a.$ === 1) {
                      if (_v2.b.$ === 1) {
                        _v2.a;
                        _v2.b;
                        return "max-content";
                      } else {
                        _v2.a;
                        var maxSize = _v2.b.a;
                        return "minmax(max-content, " + ($elm$core$String$fromInt(maxSize) + "px)");
                      }
                    } else {
                      if (_v2.b.$ === 1) {
                        var minSize = _v2.a.a;
                        _v2.b;
                        return "minmax(" + ($elm$core$String$fromInt(minSize) + "px, max-content)");
                      } else {
                        var minSize = _v2.a.a;
                        var maxSize = _v2.b.a;
                        return "minmax(" + ($elm$core$String$fromInt(minSize) + ("px, " + ($elm$core$String$fromInt(maxSize) + "px)")));
                      }
                    }
                  case 2:
                    var i2 = x2.a;
                    var _v7 = _Utils_Tuple2(minimum, maximum);
                    if (_v7.a.$ === 1) {
                      if (_v7.b.$ === 1) {
                        _v7.a;
                        _v7.b;
                        return $elm$core$String$fromInt(i2) + "fr";
                      } else {
                        _v7.a;
                        var maxSize = _v7.b.a;
                        return "minmax(max-content, " + ($elm$core$String$fromInt(maxSize) + "px)");
                      }
                    } else {
                      if (_v7.b.$ === 1) {
                        var minSize = _v7.a.a;
                        _v7.b;
                        return "minmax(" + ($elm$core$String$fromInt(minSize) + ("px, " + ($elm$core$String$fromInt(i2) + "frfr)")));
                      } else {
                        var minSize = _v7.a.a;
                        var maxSize = _v7.b.a;
                        return "minmax(" + ($elm$core$String$fromInt(minSize) + ("px, " + ($elm$core$String$fromInt(maxSize) + "px)")));
                      }
                    }
                  case 3:
                    var m = x2.a;
                    var len = x2.b;
                    var $temp$minimum = $elm$core$Maybe$Just(m), $temp$maximum = maximum, $temp$x = len;
                    minimum = $temp$minimum;
                    maximum = $temp$maximum;
                    x2 = $temp$x;
                    continue toGridLengthHelper;
                  default:
                    var m = x2.a;
                    var len = x2.b;
                    var $temp$minimum = minimum, $temp$maximum = $elm$core$Maybe$Just(m), $temp$x = len;
                    minimum = $temp$minimum;
                    maximum = $temp$maximum;
                    x2 = $temp$x;
                    continue toGridLengthHelper;
                }
              }
          }
        );
        var toGridLength = function(x2) {
          return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x2);
        };
        toGridLength(template.dL.a);
        var ySpacing = toGridLength(template.dL.b);
        var rows = function(x2) {
          return "grid-template-rows: " + (x2 + ";");
        }(
          A2(
            $elm$core$String$join,
            " ",
            A2($elm$core$List$map, toGridLength, template.dA)
          )
        );
        var msRows = function(x2) {
          return "-ms-grid-rows: " + (x2 + ";");
        }(
          A2(
            $elm$core$String$join,
            ySpacing,
            A2($elm$core$List$map, toGridLength, template.B)
          )
        );
        var msColumns = function(x2) {
          return "-ms-grid-columns: " + (x2 + ";");
        }(
          A2(
            $elm$core$String$join,
            ySpacing,
            A2($elm$core$List$map, toGridLength, template.B)
          )
        );
        var gapY = "grid-row-gap:" + (toGridLength(template.dL.b) + ";");
        var gapX = "grid-column-gap:" + (toGridLength(template.dL.a) + ";");
        var columns = function(x2) {
          return "grid-template-columns: " + (x2 + ";");
        }(
          A2(
            $elm$core$String$join,
            " ",
            A2($elm$core$List$map, toGridLength, template.B)
          )
        );
        var _class = ".grid-rows-" + (A2(
          $elm$core$String$join,
          "-",
          A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.dA)
        ) + ("-cols-" + (A2(
          $elm$core$String$join,
          "-",
          A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.B)
        ) + ("-space-x-" + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dL.a) + ("-space-y-" + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.dL.b)))))));
        var modernGrid = _class + ("{" + (columns + (rows + (gapX + (gapY + "}")))));
        var supports = "@supports (display:grid) {" + (modernGrid + "}");
        var base = _class + ("{" + (msColumns + (msRows + "}")));
        return _List_fromArray(
          [base, supports]
        );
      case 9:
        var position = rule.a;
        var msPosition = A2(
          $elm$core$String$join,
          " ",
          _List_fromArray(
            [
              "-ms-grid-row: " + ($elm$core$String$fromInt(position.b_) + ";"),
              "-ms-grid-row-span: " + ($elm$core$String$fromInt(position.aZ) + ";"),
              "-ms-grid-column: " + ($elm$core$String$fromInt(position.bm) + ";"),
              "-ms-grid-column-span: " + ($elm$core$String$fromInt(position.bc) + ";")
            ]
          )
        );
        var modernPosition = A2(
          $elm$core$String$join,
          " ",
          _List_fromArray(
            [
              "grid-row: " + ($elm$core$String$fromInt(position.b_) + (" / " + ($elm$core$String$fromInt(position.b_ + position.aZ) + ";"))),
              "grid-column: " + ($elm$core$String$fromInt(position.bm) + (" / " + ($elm$core$String$fromInt(position.bm + position.bc) + ";")))
            ]
          )
        );
        var _class = ".grid-pos-" + ($elm$core$String$fromInt(position.b_) + ("-" + ($elm$core$String$fromInt(position.bm) + ("-" + ($elm$core$String$fromInt(position.bc) + ("-" + $elm$core$String$fromInt(position.aZ)))))));
        var modernGrid = _class + ("{" + (modernPosition + "}"));
        var supports = "@supports (display:grid) {" + (modernGrid + "}");
        var base = _class + ("{" + (msPosition + "}"));
        return _List_fromArray(
          [base, supports]
        );
      case 11:
        var _class = rule.a;
        var styles = rule.b;
        var renderPseudoRule = function(style2) {
          return A3(
            $mdgriffith$elm_ui$Internal$Model$renderStyleRule,
            options,
            style2,
            $elm$core$Maybe$Just(_class)
          );
        };
        return A2($elm$core$List$concatMap, renderPseudoRule, styles);
      default:
        var transform = rule.a;
        var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
        var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
        var _v12 = _Utils_Tuple2(_class, val);
        if (!_v12.a.$ && !_v12.b.$) {
          var cls = _v12.a.a;
          var v = _v12.b.a;
          return A4(
            $mdgriffith$elm_ui$Internal$Model$renderStyle,
            options,
            maybePseudo,
            "." + cls,
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Internal$Model$Property, "transform", v)
              ]
            )
          );
        } else {
          return _List_Nil;
        }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
  function(options, stylesheet) {
    return $elm$json$Json$Encode$object(
      A2(
        $elm$core$List$map,
        function(style2) {
          var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style2, $elm$core$Maybe$Nothing);
          return _Utils_Tuple2(
            $mdgriffith$elm_ui$Internal$Model$getStyleName(style2),
            A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled)
          );
        },
        stylesheet
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
  function(selector, rules) {
    var renderPair = function(_v0) {
      var name = _v0.a;
      var val = _v0.b;
      return name + (": " + (val + ";"));
    };
    return selector + (" {" + (A2(
      $elm$core$String$join,
      "",
      A2($elm$core$List$map, renderPair, rules)
    ) + "}"));
  }
);
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
  function(name, modifier, _v0) {
    var parentAdj = _v0.a;
    var textAdjustment = _v0.b;
    return _List_fromArray(
      [
        A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name + ("." + (modifier + (", " + ("." + (name + (" ." + modifier))))))), parentAdj),
        A2($mdgriffith$elm_ui$Internal$Model$bracket, "." + (name + ("." + (modifier + ("> ." + ($mdgriffith$elm_ui$Internal$Style$classes.ax + (", ." + (name + (" ." + (modifier + (" > ." + $mdgriffith$elm_ui$Internal$Style$classes.ax)))))))))), textAdjustment)
      ]
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
  function(fontToAdjust, _v0, otherFontName) {
    var full = _v0.a;
    var capital = _v0.b;
    var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : otherFontName + (" ." + fontToAdjust);
    return A2(
      $elm$core$String$join,
      " ",
      _Utils_ap(
        A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.dJ, capital),
        A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.c_, full)
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
  function(fontToAdjust, otherFontName) {
    var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : otherFontName + (" ." + fontToAdjust);
    return A2(
      $elm$core$String$join,
      " ",
      _List_fromArray(
        [
          A2(
            $mdgriffith$elm_ui$Internal$Model$bracket,
            "." + (name + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.dJ + (", " + ("." + (name + (" ." + $mdgriffith$elm_ui$Internal$Style$classes.dJ))))))),
            _List_fromArray(
              [
                _Utils_Tuple2("line-height", "1")
              ]
            )
          ),
          A2(
            $mdgriffith$elm_ui$Internal$Model$bracket,
            "." + (name + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.dJ + ("> ." + ($mdgriffith$elm_ui$Internal$Style$classes.ax + (", ." + (name + (" ." + ($mdgriffith$elm_ui$Internal$Style$classes.dJ + (" > ." + $mdgriffith$elm_ui$Internal$Style$classes.ax)))))))))),
            _List_fromArray(
              [
                _Utils_Tuple2("vertical-align", "0"),
                _Utils_Tuple2("line-height", "1")
              ]
            )
          )
        ]
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
  function(size, height, vertical) {
    return { aZ: height / size, b1: size, ca: vertical };
  }
);
var $elm$core$List$maximum = function(list) {
  if (list.b) {
    var x = list.a;
    var xs = list.b;
    return $elm$core$Maybe$Just(
      A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs)
    );
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $elm$core$List$minimum = function(list) {
  if (list.b) {
    var x = list.a;
    var xs = list.b;
    return $elm$core$Maybe$Just(
      A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs)
    );
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function(adjustment) {
  var lines = _List_fromArray(
    [adjustment.cH, adjustment.cv, adjustment.cS, adjustment.dh]
  );
  var descender = A2(
    $elm$core$Maybe$withDefault,
    adjustment.cS,
    $elm$core$List$minimum(lines)
  );
  var newBaseline = A2(
    $elm$core$Maybe$withDefault,
    adjustment.cv,
    $elm$core$List$minimum(
      A2(
        $elm$core$List$filter,
        function(x) {
          return !_Utils_eq(x, descender);
        },
        lines
      )
    )
  );
  var ascender = A2(
    $elm$core$Maybe$withDefault,
    adjustment.cH,
    $elm$core$List$maximum(lines)
  );
  var capitalSize = 1 / (ascender - newBaseline);
  var capitalVertical = 1 - ascender;
  var fullSize = 1 / (ascender - descender);
  var fullVertical = 1 - ascender;
  return {
    cH: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
    bu: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
  };
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function(converted) {
  return _Utils_Tuple2(
    _List_fromArray(
      [
        _Utils_Tuple2("display", "block")
      ]
    ),
    _List_fromArray(
      [
        _Utils_Tuple2("display", "inline-block"),
        _Utils_Tuple2(
          "line-height",
          $elm$core$String$fromFloat(converted.aZ)
        ),
        _Utils_Tuple2(
          "vertical-align",
          $elm$core$String$fromFloat(converted.ca) + "em"
        ),
        _Utils_Tuple2(
          "font-size",
          $elm$core$String$fromFloat(converted.b1) + "em"
        )
      ]
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function(typefaces) {
  return A3(
    $elm$core$List$foldl,
    F2(
      function(face, found) {
        if (found.$ === 1) {
          if (face.$ === 5) {
            var _with = face.a;
            var _v2 = _with.ci;
            if (_v2.$ === 1) {
              return found;
            } else {
              var adjustment = _v2.a;
              return $elm$core$Maybe$Just(
                _Utils_Tuple2(
                  $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
                    function($) {
                      return $.bu;
                    }(
                      $mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)
                    )
                  ),
                  $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
                    function($) {
                      return $.cH;
                    }(
                      $mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)
                    )
                  )
                )
              );
            }
          } else {
            return found;
          }
        } else {
          return found;
        }
      }
    ),
    $elm$core$Maybe$Nothing,
    typefaces
  );
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function(rules) {
  var withImport = function(font) {
    if (font.$ === 4) {
      var url = font.b;
      return $elm$core$Maybe$Just("@import url('" + (url + "');"));
    } else {
      return $elm$core$Maybe$Nothing;
    }
  };
  var fontImports = function(_v2) {
    _v2.a;
    var typefaces = _v2.b;
    var imports = A2(
      $elm$core$String$join,
      "\n",
      A2($elm$core$List$filterMap, withImport, typefaces)
    );
    return imports;
  };
  var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
  var fontAdjustments = function(_v1) {
    var name = _v1.a;
    var typefaces = _v1.b;
    var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
    if (_v0.$ === 1) {
      return A2(
        $elm$core$String$join,
        "",
        A2(
          $elm$core$List$map,
          $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
          allNames
        )
      );
    } else {
      var adjustment = _v0.a;
      return A2(
        $elm$core$String$join,
        "",
        A2(
          $elm$core$List$map,
          A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
          allNames
        )
      );
    }
  };
  return _Utils_ap(
    A2(
      $elm$core$String$join,
      "\n",
      A2($elm$core$List$map, fontImports, rules)
    ),
    A2(
      $elm$core$String$join,
      "\n",
      A2($elm$core$List$map, fontAdjustments, rules)
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function(rule) {
  if (rule.$ === 1) {
    var name = rule.a;
    var typefaces = rule.b;
    return $elm$core$Maybe$Just(
      _Utils_Tuple2(name, typefaces)
    );
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
  function(options, stylesheet) {
    var combine = F2(
      function(style2, rendered) {
        return {
          aN: _Utils_ap(
            rendered.aN,
            A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style2, $elm$core$Maybe$Nothing)
          ),
          az: function() {
            var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style2);
            if (_v1.$ === 1) {
              return rendered.az;
            } else {
              var topLevel2 = _v1.a;
              return A2($elm$core$List$cons, topLevel2, rendered.az);
            }
          }()
        };
      }
    );
    var _v0 = A3(
      $elm$core$List$foldl,
      combine,
      { aN: _List_Nil, az: _List_Nil },
      stylesheet
    );
    var topLevel = _v0.az;
    var rules = _v0.aN;
    return _Utils_ap(
      $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
      $elm$core$String$concat(rules)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
  function(options, styleSheet) {
    var _v0 = options.dk;
    switch (_v0) {
      case 0:
        return A3(
          $elm$virtual_dom$VirtualDom$node,
          "div",
          _List_Nil,
          _List_fromArray(
            [
              A3(
                $elm$virtual_dom$VirtualDom$node,
                "style",
                _List_Nil,
                _List_fromArray(
                  [
                    $elm$virtual_dom$VirtualDom$text(
                      A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet)
                    )
                  ]
                )
              )
            ]
          )
        );
      case 1:
        return A3(
          $elm$virtual_dom$VirtualDom$node,
          "div",
          _List_Nil,
          _List_fromArray(
            [
              A3(
                $elm$virtual_dom$VirtualDom$node,
                "style",
                _List_Nil,
                _List_fromArray(
                  [
                    $elm$virtual_dom$VirtualDom$text(
                      A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet)
                    )
                  ]
                )
              )
            ]
          )
        );
      default:
        return A3(
          $elm$virtual_dom$VirtualDom$node,
          "elm-ui-rules",
          _List_fromArray(
            [
              A2(
                $elm$virtual_dom$VirtualDom$property,
                "rules",
                A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet)
              )
            ]
          ),
          _List_Nil
        );
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
  function(_static, opts, styles, children) {
    var dynamicStyleSheet = A2(
      $mdgriffith$elm_ui$Internal$Model$toStyleSheet,
      opts,
      A3(
        $elm$core$List$foldl,
        $mdgriffith$elm_ui$Internal$Model$reduceStyles,
        _Utils_Tuple2(
          $elm$core$Set$empty,
          $mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.cZ)
        ),
        styles
      ).b
    );
    return _static ? A2(
      $elm$core$List$cons,
      _Utils_Tuple2(
        "static-stylesheet",
        $mdgriffith$elm_ui$Internal$Model$staticRoot(opts)
      ),
      A2(
        $elm$core$List$cons,
        _Utils_Tuple2("dynamic-stylesheet", dynamicStyleSheet),
        children
      )
    ) : A2(
      $elm$core$List$cons,
      _Utils_Tuple2("dynamic-stylesheet", dynamicStyleSheet),
      children
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
  function(_static, opts, styles, children) {
    var dynamicStyleSheet = A2(
      $mdgriffith$elm_ui$Internal$Model$toStyleSheet,
      opts,
      A3(
        $elm$core$List$foldl,
        $mdgriffith$elm_ui$Internal$Model$reduceStyles,
        _Utils_Tuple2(
          $elm$core$Set$empty,
          $mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.cZ)
        ),
        styles
      ).b
    );
    return _static ? A2(
      $elm$core$List$cons,
      $mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
      A2($elm$core$List$cons, dynamicStyleSheet, children)
    ) : A2($elm$core$List$cons, dynamicStyleSheet, children);
  }
);
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function(tag) {
  return _VirtualDom_keyedNode(
    _VirtualDom_noScript(tag)
  );
};
var $elm$html$Html$p = _VirtualDom_node("p");
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
  function(myFlag, _v0) {
    var fieldOne = _v0.a;
    var fieldTwo = _v0.b;
    if (!myFlag.$) {
      var first = myFlag.a;
      return _Utils_eq(first & fieldOne, first);
    } else {
      var second = myFlag.a;
      return _Utils_eq(second & fieldTwo, second);
    }
  }
);
var $elm$html$Html$s = _VirtualDom_node("s");
var $elm$html$Html$u = _VirtualDom_node("u");
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
  function(has, node, attributes, children, embedMode, parentContext) {
    var createNode = F2(
      function(nodeName, attrs) {
        if (children.$ === 1) {
          var keyed = children.a;
          return A3(
            $elm$virtual_dom$VirtualDom$keyedNode,
            nodeName,
            attrs,
            function() {
              switch (embedMode.$) {
                case 0:
                  return keyed;
                case 2:
                  var opts = embedMode.a;
                  var styles = embedMode.b;
                  return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
                default:
                  var opts = embedMode.a;
                  var styles = embedMode.b;
                  return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
              }
            }()
          );
        } else {
          var unkeyed = children.a;
          return A2(
            function() {
              switch (nodeName) {
                case "div":
                  return $elm$html$Html$div;
                case "p":
                  return $elm$html$Html$p;
                default:
                  return $elm$virtual_dom$VirtualDom$node(nodeName);
              }
            }(),
            attrs,
            function() {
              switch (embedMode.$) {
                case 0:
                  return unkeyed;
                case 2:
                  var opts = embedMode.a;
                  var styles = embedMode.b;
                  return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
                default:
                  var opts = embedMode.a;
                  var styles = embedMode.b;
                  return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
              }
            }()
          );
        }
      }
    );
    var html = function() {
      switch (node.$) {
        case 0:
          return A2(createNode, "div", attributes);
        case 1:
          var nodeName = node.a;
          return A2(createNode, nodeName, attributes);
        default:
          var nodeName = node.a;
          var internal = node.b;
          return A3(
            $elm$virtual_dom$VirtualDom$node,
            nodeName,
            attributes,
            _List_fromArray(
              [
                A2(
                  createNode,
                  internal,
                  _List_fromArray(
                    [
                      $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + $mdgriffith$elm_ui$Internal$Style$classes.dI))
                    ]
                  )
                )
              ]
            )
          );
      }
    }();
    switch (parentContext) {
      case 0:
        return A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && !A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has) ? html : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
          $elm$html$Html$u,
          _List_fromArray(
            [
              $elm$html$Html$Attributes$class(
                A2(
                  $elm$core$String$join,
                  " ",
                  _List_fromArray(
                    [$mdgriffith$elm_ui$Internal$Style$classes.cs, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.aG, $mdgriffith$elm_ui$Internal$Style$classes.M, $mdgriffith$elm_ui$Internal$Style$classes.cp]
                  )
                )
              )
            ]
          ),
          _List_fromArray(
            [html]
          )
        ) : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
          $elm$html$Html$s,
          _List_fromArray(
            [
              $elm$html$Html$Attributes$class(
                A2(
                  $elm$core$String$join,
                  " ",
                  _List_fromArray(
                    [$mdgriffith$elm_ui$Internal$Style$classes.cs, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.aG, $mdgriffith$elm_ui$Internal$Style$classes.M, $mdgriffith$elm_ui$Internal$Style$classes.cn]
                  )
                )
              )
            ]
          ),
          _List_fromArray(
            [html]
          )
        ) : html;
      case 1:
        return A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && !A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has) ? html : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
          $elm$html$Html$s,
          _List_fromArray(
            [
              $elm$html$Html$Attributes$class(
                A2(
                  $elm$core$String$join,
                  " ",
                  _List_fromArray(
                    [$mdgriffith$elm_ui$Internal$Style$classes.cs, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.aG, $mdgriffith$elm_ui$Internal$Style$classes.co]
                  )
                )
              )
            ]
          ),
          _List_fromArray(
            [html]
          )
        ) : A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
          $elm$html$Html$u,
          _List_fromArray(
            [
              $elm$html$Html$Attributes$class(
                A2(
                  $elm$core$String$join,
                  " ",
                  _List_fromArray(
                    [$mdgriffith$elm_ui$Internal$Style$classes.cs, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.aG, $mdgriffith$elm_ui$Internal$Style$classes.cm]
                  )
                )
              )
            ]
          ),
          _List_fromArray(
            [html]
          )
        ) : html;
      default:
        return html;
    }
  }
);
var $elm$core$List$isEmpty = function(xs) {
  if (!xs.b) {
    return true;
  } else {
    return false;
  }
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.ax + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.bd + (" " + $mdgriffith$elm_ui$Internal$Style$classes.a_)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function(str) {
  return A2(
    $elm$html$Html$div,
    _List_fromArray(
      [
        $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
      ]
    ),
    _List_fromArray(
      [
        $elm$html$Html$text(str)
      ]
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.cs + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.ax + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.be + (" " + $mdgriffith$elm_ui$Internal$Style$classes.a$)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function(str) {
  return A2(
    $elm$html$Html$div,
    _List_fromArray(
      [
        $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
      ]
    ),
    _List_fromArray(
      [
        $elm$html$Html$text(str)
      ]
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
  function(context, children, rendered) {
    var gatherKeyed = F2(
      function(_v8, _v9) {
        var key = _v8.a;
        var child = _v8.b;
        var htmls = _v9.a;
        var existingStyles = _v9.b;
        switch (child.$) {
          case 0:
            var html = child.a;
            return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  key,
                  html(context)
                ),
                htmls
              ),
              existingStyles
            ) : _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  key,
                  html(context)
                ),
                htmls
              ),
              existingStyles
            );
          case 1:
            var styled = child.a;
            return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  key,
                  A2(styled.c2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)
                ),
                htmls
              ),
              $elm$core$List$isEmpty(existingStyles) ? styled.dS : _Utils_ap(styled.dS, existingStyles)
            ) : _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  key,
                  A2(styled.c2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)
                ),
                htmls
              ),
              $elm$core$List$isEmpty(existingStyles) ? styled.dS : _Utils_ap(styled.dS, existingStyles)
            );
          case 2:
            var str = child.a;
            return _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  key,
                  _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)
                ),
                htmls
              ),
              existingStyles
            );
          default:
            return _Utils_Tuple2(htmls, existingStyles);
        }
      }
    );
    var gather = F2(
      function(child, _v6) {
        var htmls = _v6.a;
        var existingStyles = _v6.b;
        switch (child.$) {
          case 0:
            var html = child.a;
            return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                html(context),
                htmls
              ),
              existingStyles
            ) : _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                html(context),
                htmls
              ),
              existingStyles
            );
          case 1:
            var styled = child.a;
            return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                A2(styled.c2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
                htmls
              ),
              $elm$core$List$isEmpty(existingStyles) ? styled.dS : _Utils_ap(styled.dS, existingStyles)
            ) : _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                A2(styled.c2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
                htmls
              ),
              $elm$core$List$isEmpty(existingStyles) ? styled.dS : _Utils_ap(styled.dS, existingStyles)
            );
          case 2:
            var str = child.a;
            return _Utils_Tuple2(
              A2(
                $elm$core$List$cons,
                _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
                htmls
              ),
              existingStyles
            );
          default:
            return _Utils_Tuple2(htmls, existingStyles);
        }
      }
    );
    if (children.$ === 1) {
      var keyedChildren = children.a;
      var _v1 = A3(
        $elm$core$List$foldr,
        gatherKeyed,
        _Utils_Tuple2(_List_Nil, _List_Nil),
        keyedChildren
      );
      var keyed = _v1.a;
      var styles = _v1.b;
      var newStyles = $elm$core$List$isEmpty(styles) ? rendered.dS : _Utils_ap(rendered.dS, styles);
      if (!newStyles.b) {
        return $mdgriffith$elm_ui$Internal$Model$Unstyled(
          A5(
            $mdgriffith$elm_ui$Internal$Model$finalizeNode,
            rendered.W,
            rendered.Y,
            rendered.S,
            $mdgriffith$elm_ui$Internal$Model$Keyed(
              A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, "nearby-element-pls", keyed, rendered.T)
            ),
            $mdgriffith$elm_ui$Internal$Model$NoStyleSheet
          )
        );
      } else {
        var allStyles = newStyles;
        return $mdgriffith$elm_ui$Internal$Model$Styled(
          {
            c2: A4(
              $mdgriffith$elm_ui$Internal$Model$finalizeNode,
              rendered.W,
              rendered.Y,
              rendered.S,
              $mdgriffith$elm_ui$Internal$Model$Keyed(
                A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, "nearby-element-pls", keyed, rendered.T)
              )
            ),
            dS: allStyles
          }
        );
      }
    } else {
      var unkeyedChildren = children.a;
      var _v3 = A3(
        $elm$core$List$foldr,
        gather,
        _Utils_Tuple2(_List_Nil, _List_Nil),
        unkeyedChildren
      );
      var unkeyed = _v3.a;
      var styles = _v3.b;
      var newStyles = $elm$core$List$isEmpty(styles) ? rendered.dS : _Utils_ap(rendered.dS, styles);
      if (!newStyles.b) {
        return $mdgriffith$elm_ui$Internal$Model$Unstyled(
          A5(
            $mdgriffith$elm_ui$Internal$Model$finalizeNode,
            rendered.W,
            rendered.Y,
            rendered.S,
            $mdgriffith$elm_ui$Internal$Model$Unkeyed(
              A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.T)
            ),
            $mdgriffith$elm_ui$Internal$Model$NoStyleSheet
          )
        );
      } else {
        var allStyles = newStyles;
        return $mdgriffith$elm_ui$Internal$Model$Styled(
          {
            c2: A4(
              $mdgriffith$elm_ui$Internal$Model$finalizeNode,
              rendered.W,
              rendered.Y,
              rendered.S,
              $mdgriffith$elm_ui$Internal$Model$Unkeyed(
                A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.T)
              )
            ),
            dS: allStyles
          }
        );
      }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
  function(a, b, c) {
    return { $: 3, a, b, c };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Transform = function(a) {
  return { $: 10, a };
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
  function(myFlag, _v0) {
    var one = _v0.a;
    var two = _v0.b;
    if (!myFlag.$) {
      var first = myFlag.a;
      return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
    } else {
      var second = myFlag.a;
      return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function(a) {
  return { $: 2, a };
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
  function(location, elem) {
    return A2(
      $elm$html$Html$div,
      _List_fromArray(
        [
          $elm$html$Html$Attributes$class(
            function() {
              switch (location) {
                case 0:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.ch]
                    )
                  );
                case 1:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.cx]
                    )
                  );
                case 2:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.$7]
                    )
                  );
                case 3:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.dn]
                    )
                  );
                case 4:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.c6]
                    )
                  );
                default:
                  return A2(
                    $elm$core$String$join,
                    " ",
                    _List_fromArray(
                      [$mdgriffith$elm_ui$Internal$Style$classes.ak, $mdgriffith$elm_ui$Internal$Style$classes.dI, $mdgriffith$elm_ui$Internal$Style$classes.cw]
                    )
                  );
              }
            }()
          )
        ]
      ),
      _List_fromArray(
        [
          function() {
            switch (elem.$) {
              case 3:
                return $elm$virtual_dom$VirtualDom$text("");
              case 2:
                var str = elem.a;
                return $mdgriffith$elm_ui$Internal$Model$textElement(str);
              case 0:
                var html = elem.a;
                return html($mdgriffith$elm_ui$Internal$Model$asEl);
              default:
                var styled = elem.a;
                return A2(styled.c2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
            }
          }()
        ]
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
  function(location, elem, existing) {
    var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
    switch (existing.$) {
      case 0:
        if (location === 5) {
          return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
            _List_fromArray(
              [nearby]
            )
          );
        } else {
          return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
            _List_fromArray(
              [nearby]
            )
          );
        }
      case 1:
        var existingBehind = existing.a;
        if (location === 5) {
          return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
            A2($elm$core$List$cons, nearby, existingBehind)
          );
        } else {
          return A2(
            $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
            existingBehind,
            _List_fromArray(
              [nearby]
            )
          );
        }
      case 2:
        var existingInFront = existing.a;
        if (location === 5) {
          return A2(
            $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
            _List_fromArray(
              [nearby]
            ),
            existingInFront
          );
        } else {
          return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
            A2($elm$core$List$cons, nearby, existingInFront)
          );
        }
      default:
        var existingBehind = existing.a;
        var existingInFront = existing.b;
        if (location === 5) {
          return A2(
            $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
            A2($elm$core$List$cons, nearby, existingBehind),
            existingInFront
          );
        } else {
          return A2(
            $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
            existingBehind,
            A2($elm$core$List$cons, nearby, existingInFront)
          );
        }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
  function(a, b) {
    return { $: 2, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$NodeName = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
  function(newNode, old) {
    switch (old.$) {
      case 0:
        return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
      case 1:
        var name = old.a;
        return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
      default:
        var x = old.a;
        var y = old.b;
        return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$alignXName = function(align) {
  switch (align) {
    case 0:
      return $mdgriffith$elm_ui$Internal$Style$classes.aQ + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bi);
    case 2:
      return $mdgriffith$elm_ui$Internal$Style$classes.aQ + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bj);
    default:
      return $mdgriffith$elm_ui$Internal$Style$classes.aQ + (" " + $mdgriffith$elm_ui$Internal$Style$classes.ck);
  }
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function(align) {
  switch (align) {
    case 0:
      return $mdgriffith$elm_ui$Internal$Style$classes.aR + (" " + $mdgriffith$elm_ui$Internal$Style$classes.cq);
    case 2:
      return $mdgriffith$elm_ui$Internal$Style$classes.aR + (" " + $mdgriffith$elm_ui$Internal$Style$classes.cj);
    default:
      return $mdgriffith$elm_ui$Internal$Style$classes.aR + (" " + $mdgriffith$elm_ui$Internal$Style$classes.cl);
  }
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
  function(key, value) {
    return A2(
      _VirtualDom_attribute,
      _VirtualDom_noOnOrFormAction(key),
      _VirtualDom_noJavaScriptOrHtmlUri(value)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
  function(a, b, c, d) {
    return { $: 2, a, b, c, d };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Moved = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
  function(transform, component) {
    switch (transform.$) {
      case 0:
        switch (component.$) {
          case 0:
            var x = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(x, 0, 0)
            );
          case 1:
            var y = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(0, y, 0)
            );
          case 2:
            var z = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(0, 0, z)
            );
          case 3:
            var xyz = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
          case 4:
            var xyz = component.a;
            var angle = component.b;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              _Utils_Tuple3(0, 0, 0),
              _Utils_Tuple3(1, 1, 1),
              xyz,
              angle
            );
          default:
            var xyz = component.a;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              _Utils_Tuple3(0, 0, 0),
              xyz,
              _Utils_Tuple3(0, 0, 1),
              0
            );
        }
      case 1:
        var moved = transform.a;
        var x = moved.a;
        var y = moved.b;
        var z = moved.c;
        switch (component.$) {
          case 0:
            var newX = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(newX, y, z)
            );
          case 1:
            var newY = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(x, newY, z)
            );
          case 2:
            var newZ = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(
              _Utils_Tuple3(x, y, newZ)
            );
          case 3:
            var xyz = component.a;
            return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
          case 4:
            var xyz = component.a;
            var angle = component.b;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              moved,
              _Utils_Tuple3(1, 1, 1),
              xyz,
              angle
            );
          default:
            var scale = component.a;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              moved,
              scale,
              _Utils_Tuple3(0, 0, 1),
              0
            );
        }
      default:
        var moved = transform.a;
        var x = moved.a;
        var y = moved.b;
        var z = moved.c;
        var scaled = transform.b;
        var origin = transform.c;
        var angle = transform.d;
        switch (component.$) {
          case 0:
            var newX = component.a;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              _Utils_Tuple3(newX, y, z),
              scaled,
              origin,
              angle
            );
          case 1:
            var newY = component.a;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              _Utils_Tuple3(x, newY, z),
              scaled,
              origin,
              angle
            );
          case 2:
            var newZ = component.a;
            return A4(
              $mdgriffith$elm_ui$Internal$Model$FullTransform,
              _Utils_Tuple3(x, y, newZ),
              scaled,
              origin,
              angle
            );
          case 3:
            var newMove = component.a;
            return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
          case 4:
            var newOrigin = component.a;
            var newAngle = component.b;
            return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
          default:
            var newScale = component.a;
            return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
        }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
  function(_v0, _v1) {
    var one = _v0.a;
    var two = _v0.b;
    var three = _v1.a;
    var four = _v1.b;
    return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
  }
);
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function(h) {
  switch (h.$) {
    case 0:
      var px = h.a;
      var val = $elm$core$String$fromInt(px);
      var name = "height-px-" + val;
      return _Utils_Tuple3(
        $mdgriffith$elm_ui$Internal$Flag$none,
        $mdgriffith$elm_ui$Internal$Style$classes.bw + (" " + name),
        _List_fromArray(
          [
            A3($mdgriffith$elm_ui$Internal$Model$Single, name, "height", val + "px")
          ]
        )
      );
    case 1:
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.a_,
        _List_Nil
      );
    case 2:
      var portion = h.a;
      return portion === 1 ? _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.a$,
        _List_Nil
      ) : _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.bx + (" height-fill-" + $elm$core$String$fromInt(portion)),
        _List_fromArray(
          [
            A3(
              $mdgriffith$elm_ui$Internal$Model$Single,
              $mdgriffith$elm_ui$Internal$Style$classes.cs + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.L + (" > " + $mdgriffith$elm_ui$Internal$Style$dot(
                "height-fill-" + $elm$core$String$fromInt(portion)
              )))),
              "flex-grow",
              $elm$core$String$fromInt(portion * 1e5)
            )
          ]
        )
      );
    case 3:
      var minSize = h.a;
      var len = h.b;
      var cls = "min-height-" + $elm$core$String$fromInt(minSize);
      var style2 = A3(
        $mdgriffith$elm_ui$Internal$Model$Single,
        cls,
        "min-height",
        $elm$core$String$fromInt(minSize) + "px !important"
      );
      var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
      var newFlag = _v1.a;
      var newAttrs = _v1.b;
      var newStyle = _v1.c;
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
        cls + (" " + newAttrs),
        A2($elm$core$List$cons, style2, newStyle)
      );
    default:
      var maxSize = h.a;
      var len = h.b;
      var cls = "max-height-" + $elm$core$String$fromInt(maxSize);
      var style2 = A3(
        $mdgriffith$elm_ui$Internal$Model$Single,
        cls,
        "max-height",
        $elm$core$String$fromInt(maxSize) + "px"
      );
      var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
      var newFlag = _v2.a;
      var newAttrs = _v2.b;
      var newStyle = _v2.c;
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
        cls + (" " + newAttrs),
        A2($elm$core$List$cons, style2, newStyle)
      );
  }
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function(w) {
  switch (w.$) {
    case 0:
      var px = w.a;
      return _Utils_Tuple3(
        $mdgriffith$elm_ui$Internal$Flag$none,
        $mdgriffith$elm_ui$Internal$Style$classes.cc + (" width-px-" + $elm$core$String$fromInt(px)),
        _List_fromArray(
          [
            A3(
              $mdgriffith$elm_ui$Internal$Model$Single,
              "width-px-" + $elm$core$String$fromInt(px),
              "width",
              $elm$core$String$fromInt(px) + "px"
            )
          ]
        )
      );
    case 1:
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.bd,
        _List_Nil
      );
    case 2:
      var portion = w.a;
      return portion === 1 ? _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.be,
        _List_Nil
      ) : _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
        $mdgriffith$elm_ui$Internal$Style$classes.cd + (" width-fill-" + $elm$core$String$fromInt(portion)),
        _List_fromArray(
          [
            A3(
              $mdgriffith$elm_ui$Internal$Model$Single,
              $mdgriffith$elm_ui$Internal$Style$classes.cs + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.b_ + (" > " + $mdgriffith$elm_ui$Internal$Style$dot(
                "width-fill-" + $elm$core$String$fromInt(portion)
              )))),
              "flex-grow",
              $elm$core$String$fromInt(portion * 1e5)
            )
          ]
        )
      );
    case 3:
      var minSize = w.a;
      var len = w.b;
      var cls = "min-width-" + $elm$core$String$fromInt(minSize);
      var style2 = A3(
        $mdgriffith$elm_ui$Internal$Model$Single,
        cls,
        "min-width",
        $elm$core$String$fromInt(minSize) + "px"
      );
      var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
      var newFlag = _v1.a;
      var newAttrs = _v1.b;
      var newStyle = _v1.c;
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
        cls + (" " + newAttrs),
        A2($elm$core$List$cons, style2, newStyle)
      );
    default:
      var maxSize = w.a;
      var len = w.b;
      var cls = "max-width-" + $elm$core$String$fromInt(maxSize);
      var style2 = A3(
        $mdgriffith$elm_ui$Internal$Model$Single,
        cls,
        "max-width",
        $elm$core$String$fromInt(maxSize) + "px"
      );
      var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
      var newFlag = _v2.a;
      var newAttrs = _v2.b;
      var newStyle = _v2.c;
      return _Utils_Tuple3(
        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
        cls + (" " + newAttrs),
        A2($elm$core$List$cons, style2, newStyle)
      );
  }
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
  function(flag, style2) {
    if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
      if (style2.$ === 3) {
        var val = style2.c;
        switch (val) {
          case "0px":
            return true;
          case "1px":
            return true;
          case "2px":
            return true;
          case "3px":
            return true;
          case "4px":
            return true;
          case "5px":
            return true;
          case "6px":
            return true;
          default:
            return false;
        }
      } else {
        return false;
      }
    } else {
      switch (style2.$) {
        case 2:
          var i = style2.a;
          return i >= 8 && i <= 32;
        case 7:
          style2.a;
          var t = style2.b;
          var r = style2.c;
          var b = style2.d;
          var l = style2.e;
          return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && (t >= 0 && t <= 24)));
        default:
          return false;
      }
    }
  }
);
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
  function(classes, node, has, transform, styles, attrs, children, elementAttrs) {
    gatherAttrRecursive:
      while (true) {
        if (!elementAttrs.b) {
          var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
          if (_v1.$ === 1) {
            return {
              S: A2(
                $elm$core$List$cons,
                $elm$html$Html$Attributes$class(classes),
                attrs
              ),
              T: children,
              W: has,
              Y: node,
              dS: styles
            };
          } else {
            var _class = _v1.a;
            return {
              S: A2(
                $elm$core$List$cons,
                $elm$html$Html$Attributes$class(classes + (" " + _class)),
                attrs
              ),
              T: children,
              W: has,
              Y: node,
              dS: A2(
                $elm$core$List$cons,
                $mdgriffith$elm_ui$Internal$Model$Transform(transform),
                styles
              )
            };
          }
        } else {
          var attribute = elementAttrs.a;
          var remaining = elementAttrs.b;
          switch (attribute.$) {
            case 0:
              var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
              classes = $temp$classes;
              node = $temp$node;
              has = $temp$has;
              transform = $temp$transform;
              styles = $temp$styles;
              attrs = $temp$attrs;
              children = $temp$children;
              elementAttrs = $temp$elementAttrs;
              continue gatherAttrRecursive;
            case 3:
              var flag = attribute.a;
              var exactClassName = attribute.b;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                var $temp$classes = exactClassName + (" " + classes), $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              }
            case 1:
              var actualAttribute = attribute.a;
              var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs), $temp$children = children, $temp$elementAttrs = remaining;
              classes = $temp$classes;
              node = $temp$node;
              has = $temp$has;
              transform = $temp$transform;
              styles = $temp$styles;
              attrs = $temp$attrs;
              children = $temp$children;
              elementAttrs = $temp$elementAttrs;
              continue gatherAttrRecursive;
            case 4:
              var flag = attribute.a;
              var style2 = attribute.b;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style2)) {
                  var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style2) + (" " + classes), $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                } else {
                  var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style2) + (" " + classes), $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has), $temp$transform = transform, $temp$styles = A2($elm$core$List$cons, style2, styles), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                }
              }
            case 10:
              var flag = attribute.a;
              var component = attribute.b;
              var $temp$classes = classes, $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has), $temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component), $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
              classes = $temp$classes;
              node = $temp$node;
              has = $temp$has;
              transform = $temp$transform;
              styles = $temp$styles;
              attrs = $temp$attrs;
              children = $temp$children;
              elementAttrs = $temp$elementAttrs;
              continue gatherAttrRecursive;
            case 7:
              var width = attribute.a;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                switch (width.$) {
                  case 0:
                    var px = width.a;
                    var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.cc + (" width-px-" + $elm$core$String$fromInt(px)) + (" " + classes), $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has), $temp$transform = transform, $temp$styles = A2(
                      $elm$core$List$cons,
                      A3(
                        $mdgriffith$elm_ui$Internal$Model$Single,
                        "width-px-" + $elm$core$String$fromInt(px),
                        "width",
                        $elm$core$String$fromInt(px) + "px"
                      ),
                      styles
                    ), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                  case 1:
                    var $temp$classes = classes + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bd), $temp$node = node, $temp$has = A2(
                      $mdgriffith$elm_ui$Internal$Flag$add,
                      $mdgriffith$elm_ui$Internal$Flag$widthContent,
                      A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)
                    ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                  case 2:
                    var portion = width.a;
                    if (portion === 1) {
                      var $temp$classes = classes + (" " + $mdgriffith$elm_ui$Internal$Style$classes.be), $temp$node = node, $temp$has = A2(
                        $mdgriffith$elm_ui$Internal$Flag$add,
                        $mdgriffith$elm_ui$Internal$Flag$widthFill,
                        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)
                      ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    } else {
                      var $temp$classes = classes + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.cd + (" width-fill-" + $elm$core$String$fromInt(portion)))), $temp$node = node, $temp$has = A2(
                        $mdgriffith$elm_ui$Internal$Flag$add,
                        $mdgriffith$elm_ui$Internal$Flag$widthFill,
                        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)
                      ), $temp$transform = transform, $temp$styles = A2(
                        $elm$core$List$cons,
                        A3(
                          $mdgriffith$elm_ui$Internal$Model$Single,
                          $mdgriffith$elm_ui$Internal$Style$classes.cs + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.b_ + (" > " + $mdgriffith$elm_ui$Internal$Style$dot(
                            "width-fill-" + $elm$core$String$fromInt(portion)
                          )))),
                          "flex-grow",
                          $elm$core$String$fromInt(portion * 1e5)
                        ),
                        styles
                      ), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    }
                  default:
                    var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
                    var addToFlags = _v4.a;
                    var newClass = _v4.b;
                    var newStyles = _v4.c;
                    var $temp$classes = classes + (" " + newClass), $temp$node = node, $temp$has = A2(
                      $mdgriffith$elm_ui$Internal$Flag$merge,
                      addToFlags,
                      A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)
                    ), $temp$transform = transform, $temp$styles = _Utils_ap(newStyles, styles), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                }
              }
            case 8:
              var height = attribute.a;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                switch (height.$) {
                  case 0:
                    var px = height.a;
                    var val = $elm$core$String$fromInt(px) + "px";
                    var name = "height-px-" + val;
                    var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bw + (" " + (name + (" " + classes))), $temp$node = node, $temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has), $temp$transform = transform, $temp$styles = A2(
                      $elm$core$List$cons,
                      A3($mdgriffith$elm_ui$Internal$Model$Single, name, "height ", val),
                      styles
                    ), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                  case 1:
                    var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.a_ + (" " + classes), $temp$node = node, $temp$has = A2(
                      $mdgriffith$elm_ui$Internal$Flag$add,
                      $mdgriffith$elm_ui$Internal$Flag$heightContent,
                      A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)
                    ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                  case 2:
                    var portion = height.a;
                    if (portion === 1) {
                      var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.a$ + (" " + classes), $temp$node = node, $temp$has = A2(
                        $mdgriffith$elm_ui$Internal$Flag$add,
                        $mdgriffith$elm_ui$Internal$Flag$heightFill,
                        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)
                      ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    } else {
                      var $temp$classes = classes + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.bx + (" height-fill-" + $elm$core$String$fromInt(portion)))), $temp$node = node, $temp$has = A2(
                        $mdgriffith$elm_ui$Internal$Flag$add,
                        $mdgriffith$elm_ui$Internal$Flag$heightFill,
                        A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)
                      ), $temp$transform = transform, $temp$styles = A2(
                        $elm$core$List$cons,
                        A3(
                          $mdgriffith$elm_ui$Internal$Model$Single,
                          $mdgriffith$elm_ui$Internal$Style$classes.cs + ("." + ($mdgriffith$elm_ui$Internal$Style$classes.L + (" > " + $mdgriffith$elm_ui$Internal$Style$dot(
                            "height-fill-" + $elm$core$String$fromInt(portion)
                          )))),
                          "flex-grow",
                          $elm$core$String$fromInt(portion * 1e5)
                        ),
                        styles
                      ), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    }
                  default:
                    var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
                    var addToFlags = _v6.a;
                    var newClass = _v6.b;
                    var newStyles = _v6.c;
                    var $temp$classes = classes + (" " + newClass), $temp$node = node, $temp$has = A2(
                      $mdgriffith$elm_ui$Internal$Flag$merge,
                      addToFlags,
                      A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)
                    ), $temp$transform = transform, $temp$styles = _Utils_ap(newStyles, styles), $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                }
              }
            case 2:
              var description = attribute.a;
              switch (description.$) {
                case 0:
                  var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "main", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 1:
                  var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "nav", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 2:
                  var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "footer", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 3:
                  var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "aside", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 4:
                  var i = description.a;
                  if (i <= 1) {
                    var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "h1", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                    classes = $temp$classes;
                    node = $temp$node;
                    has = $temp$has;
                    transform = $temp$transform;
                    styles = $temp$styles;
                    attrs = $temp$attrs;
                    children = $temp$children;
                    elementAttrs = $temp$elementAttrs;
                    continue gatherAttrRecursive;
                  } else {
                    if (i < 7) {
                      var $temp$classes = classes, $temp$node = A2(
                        $mdgriffith$elm_ui$Internal$Model$addNodeName,
                        "h" + $elm$core$String$fromInt(i),
                        node
                      ), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    } else {
                      var $temp$classes = classes, $temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, "h6", node), $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                      classes = $temp$classes;
                      node = $temp$node;
                      has = $temp$has;
                      transform = $temp$transform;
                      styles = $temp$styles;
                      attrs = $temp$attrs;
                      children = $temp$children;
                      elementAttrs = $temp$elementAttrs;
                      continue gatherAttrRecursive;
                    }
                  }
                case 9:
                  var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 8:
                  var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = A2(
                    $elm$core$List$cons,
                    A2($elm$virtual_dom$VirtualDom$attribute, "role", "button"),
                    attrs
                  ), $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 5:
                  var label = description.a;
                  var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = A2(
                    $elm$core$List$cons,
                    A2($elm$virtual_dom$VirtualDom$attribute, "aria-label", label),
                    attrs
                  ), $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                case 6:
                  var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = A2(
                    $elm$core$List$cons,
                    A2($elm$virtual_dom$VirtualDom$attribute, "aria-live", "polite"),
                    attrs
                  ), $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
                default:
                  var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = A2(
                    $elm$core$List$cons,
                    A2($elm$virtual_dom$VirtualDom$attribute, "aria-live", "assertive"),
                    attrs
                  ), $temp$children = children, $temp$elementAttrs = remaining;
                  classes = $temp$classes;
                  node = $temp$node;
                  has = $temp$has;
                  transform = $temp$transform;
                  styles = $temp$styles;
                  attrs = $temp$attrs;
                  children = $temp$children;
                  elementAttrs = $temp$elementAttrs;
                  continue gatherAttrRecursive;
              }
            case 9:
              var location = attribute.a;
              var elem = attribute.b;
              var newStyles = function() {
                switch (elem.$) {
                  case 3:
                    return styles;
                  case 2:
                    elem.a;
                    return styles;
                  case 0:
                    elem.a;
                    return styles;
                  default:
                    var styled = elem.a;
                    return _Utils_ap(styles, styled.dS);
                }
              }();
              var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = newStyles, $temp$attrs = attrs, $temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children), $temp$elementAttrs = remaining;
              classes = $temp$classes;
              node = $temp$node;
              has = $temp$has;
              transform = $temp$transform;
              styles = $temp$styles;
              attrs = $temp$attrs;
              children = $temp$children;
              elementAttrs = $temp$elementAttrs;
              continue gatherAttrRecursive;
            case 6:
              var x = attribute.a;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (" " + classes), $temp$node = node, $temp$has = function(flags) {
                  switch (x) {
                    case 1:
                      return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
                    case 2:
                      return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
                    default:
                      return flags;
                  }
                }(
                  A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)
                ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              }
            default:
              var y = attribute.a;
              if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
                var $temp$classes = classes, $temp$node = node, $temp$has = has, $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              } else {
                var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (" " + classes), $temp$node = node, $temp$has = function(flags) {
                  switch (y) {
                    case 1:
                      return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
                    case 2:
                      return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
                    default:
                      return flags;
                  }
                }(
                  A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)
                ), $temp$transform = transform, $temp$styles = styles, $temp$attrs = attrs, $temp$children = children, $temp$elementAttrs = remaining;
                classes = $temp$classes;
                node = $temp$node;
                has = $temp$has;
                transform = $temp$transform;
                styles = $temp$styles;
                attrs = $temp$attrs;
                children = $temp$children;
                elementAttrs = $temp$elementAttrs;
                continue gatherAttrRecursive;
              }
          }
        }
      }
  }
);
var $mdgriffith$elm_ui$Internal$Model$Untransformed = { $: 0 };
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
  function(context, node, attributes, children) {
    return A3(
      $mdgriffith$elm_ui$Internal$Model$createElement,
      context,
      children,
      A8(
        $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
        $mdgriffith$elm_ui$Internal$Model$contextClasses(context),
        node,
        $mdgriffith$elm_ui$Internal$Flag$none,
        $mdgriffith$elm_ui$Internal$Model$untransformed,
        _List_Nil,
        _List_Nil,
        $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
        $elm$core$List$reverse(attributes)
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
  function(a, b, c, d) {
    return { $: 0, a, b, c, d };
  }
);
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
  cu: $elm$core$Maybe$Nothing,
  cA: $elm$core$Maybe$Nothing,
  dG: $elm$core$Maybe$Just(
    {
      af: 0,
      ag: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
      a: _Utils_Tuple2(0, 0),
      b1: 3
    }
  )
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function(options) {
  var combine = F2(
    function(opt, record) {
      switch (opt.$) {
        case 0:
          var hoverable = opt.a;
          var _v4 = record.aj;
          if (_v4.$ === 1) {
            return _Utils_update(
              record,
              {
                aj: $elm$core$Maybe$Just(hoverable)
              }
            );
          } else {
            return record;
          }
        case 1:
          var focusStyle = opt.a;
          var _v5 = record.cZ;
          if (_v5.$ === 1) {
            return _Utils_update(
              record,
              {
                cZ: $elm$core$Maybe$Just(focusStyle)
              }
            );
          } else {
            return record;
          }
        default:
          var renderMode = opt.a;
          var _v6 = record.dk;
          if (_v6.$ === 1) {
            return _Utils_update(
              record,
              {
                dk: $elm$core$Maybe$Just(renderMode)
              }
            );
          } else {
            return record;
          }
      }
    }
  );
  var andFinally = function(record) {
    return {
      cZ: function() {
        var _v0 = record.cZ;
        if (_v0.$ === 1) {
          return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
        } else {
          var focusable = _v0.a;
          return focusable;
        }
      }(),
      aj: function() {
        var _v1 = record.aj;
        if (_v1.$ === 1) {
          return 1;
        } else {
          var hoverable = _v1.a;
          return hoverable;
        }
      }(),
      dk: function() {
        var _v2 = record.dk;
        if (_v2.$ === 1) {
          return 0;
        } else {
          var actualMode = _v2.a;
          return actualMode;
        }
      }()
    };
  };
  return andFinally(
    A3(
      $elm$core$List$foldr,
      combine,
      { cZ: $elm$core$Maybe$Nothing, aj: $elm$core$Maybe$Nothing, dk: $elm$core$Maybe$Nothing },
      options
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
  function(mode, el) {
    switch (el.$) {
      case 0:
        var html = el.a;
        return html($mdgriffith$elm_ui$Internal$Model$asEl);
      case 1:
        var styles = el.a.dS;
        var html = el.a.c2;
        return A2(
          html,
          mode(styles),
          $mdgriffith$elm_ui$Internal$Model$asEl
        );
      case 2:
        var text = el.a;
        return $mdgriffith$elm_ui$Internal$Model$textElement(text);
      default:
        return $mdgriffith$elm_ui$Internal$Model$textElement("");
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
  function(optionList, attributes, child) {
    var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
    var embedStyle = function() {
      var _v0 = options.dk;
      if (_v0 === 1) {
        return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
      } else {
        return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
      }
    }();
    return A2(
      $mdgriffith$elm_ui$Internal$Model$toHtml,
      embedStyle,
      A4(
        $mdgriffith$elm_ui$Internal$Model$element,
        $mdgriffith$elm_ui$Internal$Model$asEl,
        $mdgriffith$elm_ui$Internal$Model$div,
        attributes,
        $mdgriffith$elm_ui$Internal$Model$Unkeyed(
          _List_fromArray(
            [child]
          )
        )
      )
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
  function(a, b, c) {
    return { $: 4, a, b, c };
  }
);
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
  function(a, b) {
    return { $: 1, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$FontSize = function(a) {
  return { $: 2, a };
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = { $: 1 };
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Typeface = function(a) {
  return { $: 3, a };
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function(_v0) {
  var red = _v0.a;
  var green = _v0.b;
  var blue = _v0.c;
  var alpha = _v0.d;
  return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
  function(font, current) {
    return _Utils_ap(
      current,
      function() {
        switch (font.$) {
          case 0:
            return "serif";
          case 1:
            return "sans-serif";
          case 2:
            return "monospace";
          case 3:
            var name = font.a;
            return A2(
              $elm$core$String$join,
              "-",
              $elm$core$String$words(
                $elm$core$String$toLower(name)
              )
            );
          case 4:
            var name = font.a;
            font.b;
            return A2(
              $elm$core$String$join,
              "-",
              $elm$core$String$words(
                $elm$core$String$toLower(name)
              )
            );
          default:
            var name = font.a.H;
            return A2(
              $elm$core$String$join,
              "-",
              $elm$core$String$words(
                $elm$core$String$toLower(name)
              )
            );
        }
      }()
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function() {
  var families = _List_fromArray(
    [
      $mdgriffith$elm_ui$Internal$Model$Typeface("Open Sans"),
      $mdgriffith$elm_ui$Internal$Model$Typeface("Helvetica"),
      $mdgriffith$elm_ui$Internal$Model$Typeface("Verdana"),
      $mdgriffith$elm_ui$Internal$Model$SansSerif
    ]
  );
  return _List_fromArray(
    [
      A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$bgColor,
        A3(
          $mdgriffith$elm_ui$Internal$Model$Colored,
          "bg-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
            A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)
          ),
          "background-color",
          A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)
        )
      ),
      A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$fontColor,
        A3(
          $mdgriffith$elm_ui$Internal$Model$Colored,
          "fc-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
            A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)
          ),
          "color",
          A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)
        )
      ),
      A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$fontSize,
        $mdgriffith$elm_ui$Internal$Model$FontSize(20)
      ),
      A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$fontFamily,
        A2(
          $mdgriffith$elm_ui$Internal$Model$FontFamily,
          A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, "font-", families),
          families
        )
      )
    ]
  );
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
  function(_v0, attrs, child) {
    var options = _v0.bK;
    return A3(
      $mdgriffith$elm_ui$Internal$Model$renderRoot,
      options,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$htmlClass(
          A2(
            $elm$core$String$join,
            " ",
            _List_fromArray(
              [$mdgriffith$elm_ui$Internal$Style$classes.dz, $mdgriffith$elm_ui$Internal$Style$classes.cs, $mdgriffith$elm_ui$Internal$Style$classes.dI]
            )
          )
        ),
        _Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)
      ),
      child
    );
  }
);
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
  { bK: _List_Nil }
);
var $mdgriffith$elm_ui$Internal$Model$Empty = { $: 3 };
var $mdgriffith$elm_ui$Internal$Model$Text = function(a) {
  return { $: 2, a };
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
  function(fn, el) {
    switch (el.$) {
      case 1:
        var styled = el.a;
        return $mdgriffith$elm_ui$Internal$Model$Styled(
          {
            c2: F2(
              function(add, context) {
                return A2(
                  $elm$virtual_dom$VirtualDom$map,
                  fn,
                  A2(styled.c2, add, context)
                );
              }
            ),
            dS: styled.dS
          }
        );
      case 0:
        var html = el.a;
        return $mdgriffith$elm_ui$Internal$Model$Unstyled(
          A2(
            $elm$core$Basics$composeL,
            $elm$virtual_dom$VirtualDom$map(fn),
            html
          )
        );
      case 2:
        var str = el.a;
        return $mdgriffith$elm_ui$Internal$Model$Text(str);
      default:
        return $mdgriffith$elm_ui$Internal$Model$Empty;
    }
  }
);
var $mdgriffith$elm_ui$Element$map = $mdgriffith$elm_ui$Internal$Model$map;
var $author$project$Contact$Remove = function(a) {
  return { $: 11, a };
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function(a) {
  return { $: 6, a };
};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$Height = function(a) {
  return { $: 8, a };
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Content = { $: 1 };
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function(a) {
  return { $: 7, a };
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
  function(attrs, children) {
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asColumn,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cO + (" " + $mdgriffith$elm_ui$Internal$Style$classes.as)),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
            attrs
          )
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
    );
  }
);
var $mdgriffith$elm_ui$Internal$Model$Fill = function(a) {
  return { $: 2, a };
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $mdgriffith$elm_ui$Element$maximum = F2(
  function(i, l) {
    return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
  }
);
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
  function(a, b, c, d, e) {
    return { $: 7, a, b, c, d, e };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$paddingXY = F2(
  function(x, y) {
    if (_Utils_eq(x, y)) {
      var f = x;
      return A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$padding,
        A5(
          $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
          "p-" + $elm$core$String$fromInt(x),
          f,
          f,
          f,
          f
        )
      );
    } else {
      var yFloat = y;
      var xFloat = x;
      return A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$padding,
        A5(
          $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
          "p-" + ($elm$core$String$fromInt(x) + ("-" + $elm$core$String$fromInt(y))),
          yFloat,
          xFloat,
          yFloat,
          xFloat
        )
      );
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
  function(a, b, c) {
    return { $: 5, a, b, c };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
  function(x, y) {
    return "spacing-" + ($elm$core$String$fromInt(x) + ("-" + $elm$core$String$fromInt(y)));
  }
);
var $mdgriffith$elm_ui$Element$spacing = function(x) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$spacing,
    A3(
      $mdgriffith$elm_ui$Internal$Model$SpacingStyle,
      A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
      x,
      x
    )
  );
};
var $author$project$Contact$ClickedBack = { $: 1 };
var $author$project$Contact$ClickedSend = function(a) {
  return { $: 2, a };
};
var $author$project$Color$base = function(hue) {
  return hue(3);
};
var $mdgriffith$elm_ui$Internal$Model$Button = { $: 8 };
var $mdgriffith$elm_ui$Internal$Model$Describe = function(a) {
  return { $: 2, a };
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
  function(key, bool) {
    return A2(
      _VirtualDom_property,
      key,
      $elm$json$Json$Encode$bool(bool)
    );
  }
);
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty("disabled");
var $mdgriffith$elm_ui$Element$Input$enter = "Enter";
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = { $: 0 };
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function(attr) {
  if (attr.$ === 4 && attr.b.$ === 11 && !attr.b.a) {
    var _v1 = attr.b;
    _v1.a;
    return true;
  } else {
    return false;
  }
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function(attrs) {
  return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass("focusable");
};
var $elm$virtual_dom$VirtualDom$Normal = function(a) {
  return { $: 0, a };
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
  function(event, decoder) {
    return A2(
      $elm$virtual_dom$VirtualDom$on,
      event,
      $elm$virtual_dom$VirtualDom$Normal(decoder)
    );
  }
);
var $elm$html$Html$Events$onClick = function(msg) {
  return A2(
    $elm$html$Html$Events$on,
    "click",
    $elm$json$Json$Decode$succeed(msg)
  );
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function(a) {
  return { $: 2, a };
};
var $elm$html$Html$Events$preventDefaultOn = F2(
  function(event, decoder) {
    return A2(
      $elm$virtual_dom$VirtualDom$on,
      event,
      $elm$virtual_dom$VirtualDom$MayPreventDefault(decoder)
    );
  }
);
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function(lookup) {
  var decode = function(code) {
    var _v0 = lookup(code);
    if (_v0.$ === 1) {
      return $elm$json$Json$Decode$fail("No key matched");
    } else {
      var msg = _v0.a;
      return $elm$json$Json$Decode$succeed(msg);
    }
  };
  var isKey = A2(
    $elm$json$Json$Decode$andThen,
    decode,
    A2($elm$json$Json$Decode$field, "key", $elm$json$Json$Decode$string)
  );
  return $mdgriffith$elm_ui$Internal$Model$Attr(
    A2(
      $elm$html$Html$Events$preventDefaultOn,
      "keydown",
      A2(
        $elm$json$Json$Decode$map,
        function(fired) {
          return _Utils_Tuple2(fired, true);
        },
        isKey
      )
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cQ);
var $mdgriffith$elm_ui$Element$Input$space = " ";
var $elm$html$Html$Attributes$tabindex = function(n) {
  return A2(
    _VirtualDom_attribute,
    "tabIndex",
    $elm$core$String$fromInt(n)
  );
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
  function(attrs, _v0) {
    var onPress = _v0.Z;
    var label = _v0.n;
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asEl,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aI + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.M + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.dE + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bI)))))),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Element$pointer,
              A2(
                $elm$core$List$cons,
                $mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
                A2(
                  $elm$core$List$cons,
                  $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
                  A2(
                    $elm$core$List$cons,
                    $mdgriffith$elm_ui$Internal$Model$Attr(
                      $elm$html$Html$Attributes$tabindex(0)
                    ),
                    function() {
                      if (onPress.$ === 1) {
                        return A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_ui$Internal$Model$Attr(
                            $elm$html$Html$Attributes$disabled(true)
                          ),
                          attrs
                        );
                      } else {
                        var msg = onPress.a;
                        return A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_ui$Element$Events$onClick(msg),
                          A2(
                            $elm$core$List$cons,
                            $mdgriffith$elm_ui$Element$Input$onKeyLookup(
                              function(code) {
                                return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing;
                              }
                            ),
                            attrs
                          )
                        );
                      }
                    }()
                  )
                )
              )
            )
          )
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(
        _List_fromArray(
          [label]
        )
      )
    );
  }
);
var $mdgriffith$elm_ui$Element$Background$color = function(clr) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$bgColor,
    A3(
      $mdgriffith$elm_ui$Internal$Model$Colored,
      "bg-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
      "background-color",
      clr
    )
  );
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function(clr) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$borderColor,
    A3(
      $mdgriffith$elm_ui$Internal$Model$Colored,
      "bc-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
      "border-color",
      clr
    )
  );
};
var $mdgriffith$elm_ui$Element$Font$color = function(fontColor) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$fontColor,
    A3(
      $mdgriffith$elm_ui$Internal$Model$Colored,
      "fc-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
      "color",
      fontColor
    )
  );
};
var $author$project$Color$dark = function(hue) {
  return hue(2);
};
var $mdgriffith$elm_ui$Element$el = F2(
  function(attrs, child) {
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asEl,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
          attrs
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(
        _List_fromArray(
          [child]
        )
      )
    );
  }
);
var $mdgriffith$elm_ui$Element$rgb255 = F3(
  function(red, green, blue) {
    return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
  }
);
var $author$project$Color$grey = function(lightness) {
  switch (lightness) {
    case 0:
      return A3($mdgriffith$elm_ui$Element$rgb255, 61, 72, 82);
    case 1:
      return A3($mdgriffith$elm_ui$Element$rgb255, 96, 111, 123);
    case 2:
      return A3($mdgriffith$elm_ui$Element$rgb255, 135, 149, 161);
    case 3:
      return A3($mdgriffith$elm_ui$Element$rgb255, 210, 194, 204);
    case 4:
      return A3($mdgriffith$elm_ui$Element$rgb255, 218, 225, 231);
    case 5:
      return A3($mdgriffith$elm_ui$Element$rgb255, 241, 245, 248);
    default:
      return A3($mdgriffith$elm_ui$Element$rgb255, 248, 250, 252);
  }
};
var $mdgriffith$elm_ui$Element$padding = function(x) {
  var f = x;
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$padding,
    A5(
      $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
      "p-" + $elm$core$String$fromInt(x),
      f,
      f,
      f,
      f
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$Px = function(a) {
  return { $: 0, a };
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $author$project$Color$red = function(lightness) {
  switch (lightness) {
    case 0:
      return A3($mdgriffith$elm_ui$Element$rgb255, 59, 13, 12);
    case 1:
      return A3($mdgriffith$elm_ui$Element$rgb255, 98, 27, 24);
    case 2:
      return A3($mdgriffith$elm_ui$Element$rgb255, 204, 31, 26);
    case 3:
      return A3($mdgriffith$elm_ui$Element$rgb255, 227, 52, 47);
    case 4:
      return A3($mdgriffith$elm_ui$Element$rgb255, 239, 87, 83);
    case 5:
      return A3($mdgriffith$elm_ui$Element$rgb255, 249, 172, 170);
    default:
      return A3($mdgriffith$elm_ui$Element$rgb255, 252, 235, 234);
  }
};
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function(radius) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$borderRound,
    A3(
      $mdgriffith$elm_ui$Internal$Model$Single,
      "br-" + $elm$core$String$fromInt(radius),
      "border-radius",
      $elm$core$String$fromInt(radius) + "px"
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$row = F2(
  function(attrs, children) {
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asRow,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.as + (" " + $mdgriffith$elm_ui$Internal$Style$classes.M)),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
            attrs
          )
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
    );
  }
);
var $mdgriffith$elm_ui$Element$Font$size = function(i) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$fontSize,
    $mdgriffith$elm_ui$Internal$Model$FontSize(i)
  );
};
var $author$project$Atom$Font$base = 16;
var $author$project$Atom$Font$sm = $elm$core$Basics$round($author$project$Atom$Font$base * 0.875);
var $author$project$Color$teal = function(lightness) {
  switch (lightness) {
    case 0:
      return A3($mdgriffith$elm_ui$Element$rgb255, 13, 51, 49);
    case 1:
      return A3($mdgriffith$elm_ui$Element$rgb255, 32, 80, 79);
    case 2:
      return A3($mdgriffith$elm_ui$Element$rgb255, 56, 168, 157);
    case 3:
      return A3($mdgriffith$elm_ui$Element$rgb255, 77, 192, 181);
    case 4:
      return A3($mdgriffith$elm_ui$Element$rgb255, 100, 213, 202);
    case 5:
      return A3($mdgriffith$elm_ui$Element$rgb255, 160, 240, 237);
    default:
      return A3($mdgriffith$elm_ui$Element$rgb255, 232, 255, 254);
  }
};
var $mdgriffith$elm_ui$Element$text = function(content) {
  return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $author$project$Color$blue = function(lightness) {
  switch (lightness) {
    case 0:
      return A3($mdgriffith$elm_ui$Element$rgb255, 18, 40, 58);
    case 1:
      return A3($mdgriffith$elm_ui$Element$rgb255, 28, 61, 90);
    case 2:
      return A3($mdgriffith$elm_ui$Element$rgb255, 39, 121, 189);
    case 3:
      return A3($mdgriffith$elm_ui$Element$rgb255, 52, 144, 220);
    case 4:
      return A3($mdgriffith$elm_ui$Element$rgb255, 108, 178, 235);
    case 5:
      return A3($mdgriffith$elm_ui$Element$rgb255, 188, 222, 250);
    default:
      return A3($mdgriffith$elm_ui$Element$rgb255, 239, 248, 255);
  }
};
var $author$project$Atom$horizontalDivider = A2(
  $mdgriffith$elm_ui$Element$el,
  _List_fromArray(
    [
      $mdgriffith$elm_ui$Element$height(
        $mdgriffith$elm_ui$Element$px(1)
      ),
      $mdgriffith$elm_ui$Element$Background$color(
        $author$project$Color$dark($author$project$Color$grey)
      ),
      $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
    ]
  ),
  $mdgriffith$elm_ui$Element$text(" ")
);
var $author$project$Color$lighter = function(hue) {
  return hue(5);
};
var $mdgriffith$elm_ui$Internal$Model$Paragraph = { $: 9 };
var $mdgriffith$elm_ui$Element$paragraph = F2(
  function(attrs, children) {
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asParagraph,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$spacing(5),
            attrs
          )
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
    );
  }
);
var $mdgriffith$elm_ui$Element$spacingXY = F2(
  function(x, y) {
    return A2(
      $mdgriffith$elm_ui$Internal$Model$StyleClass,
      $mdgriffith$elm_ui$Internal$Flag$spacing,
      A3(
        $mdgriffith$elm_ui$Internal$Model$SpacingStyle,
        A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, y),
        x,
        y
      )
    );
  }
);
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty("alt");
var $elm$html$Html$Attributes$src = function(url) {
  return A2(
    $elm$html$Html$Attributes$stringProperty,
    "src",
    _VirtualDom_noJavaScriptOrHtmlUri(url)
  );
};
var $mdgriffith$elm_ui$Element$image = F2(
  function(attrs, _v0) {
    var src = _v0.dN;
    var description = _v0.cT;
    var imageAttributes = A2(
      $elm$core$List$filter,
      function(a) {
        switch (a.$) {
          case 7:
            return true;
          case 8:
            return true;
          default:
            return false;
        }
      },
      attrs
    );
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asEl,
      $mdgriffith$elm_ui$Internal$Model$div,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c4),
        attrs
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(
        _List_fromArray(
          [
            A4(
              $mdgriffith$elm_ui$Internal$Model$element,
              $mdgriffith$elm_ui$Internal$Model$asEl,
              $mdgriffith$elm_ui$Internal$Model$NodeName("img"),
              _Utils_ap(
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Internal$Model$Attr(
                      $elm$html$Html$Attributes$src(src)
                    ),
                    $mdgriffith$elm_ui$Internal$Model$Attr(
                      $elm$html$Html$Attributes$alt(description)
                    )
                  ]
                ),
                imageAttributes
              ),
              $mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil)
            )
          ]
        )
      )
    );
  }
);
var $author$project$Color$light = function(hue) {
  return hue(4);
};
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.cD);
var $author$project$Contact$viewPreview = function(src) {
  return A2(
    $mdgriffith$elm_ui$Element$image,
    _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$width(
          $mdgriffith$elm_ui$Element$px(140)
        ),
        $mdgriffith$elm_ui$Element$height(
          $mdgriffith$elm_ui$Element$px(140)
        ),
        $mdgriffith$elm_ui$Element$Border$solid,
        $mdgriffith$elm_ui$Element$Border$color(
          $author$project$Color$light($author$project$Color$blue)
        )
      ]
    ),
    { cT: "", dN: src }
  );
};
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
  function(a, b, c, d, e) {
    return { $: 0, a, b, c, d, e };
  }
);
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
  function(a, b, c) {
    return { $: 0, a, b, c };
  }
);
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function(attrs) {
  return A3(
    $elm$core$List$foldr,
    F2(
      function(attr, _v0) {
        var pad = _v0.a;
        var spacing = _v0.b;
        return _Utils_Tuple2(
          function() {
            if (!pad.$) {
              pad.a;
              return pad;
            } else {
              if (attr.$ === 4 && attr.b.$ === 7) {
                var _v3 = attr.b;
                var name = _v3.a;
                var t = _v3.b;
                var r = _v3.c;
                var b = _v3.d;
                var l = _v3.e;
                return $elm$core$Maybe$Just(
                  A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l)
                );
              } else {
                return $elm$core$Maybe$Nothing;
              }
            }
          }(),
          function() {
            if (!spacing.$) {
              var x = spacing.a;
              return spacing;
            } else {
              if (attr.$ === 4 && attr.b.$ === 5) {
                var _v6 = attr.b;
                var name = _v6.a;
                var x = _v6.b;
                var y = _v6.c;
                return $elm$core$Maybe$Just(
                  A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y)
                );
              } else {
                return $elm$core$Maybe$Nothing;
              }
            }
          }()
        );
      }
    ),
    _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
    attrs
  );
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
  function(top, right, bottom, left) {
    return "pad-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ("-" + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ("-" + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
  }
);
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
  function(attrs, children) {
    var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
    var padded = _v0.a;
    var spaced = _v0.b;
    if (spaced.$ === 1) {
      return A4(
        $mdgriffith$elm_ui$Internal$Model$element,
        $mdgriffith$elm_ui$Internal$Model$asRow,
        $mdgriffith$elm_ui$Internal$Model$div,
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.as + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.M + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bg)))),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
              attrs
            )
          )
        ),
        $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
      );
    } else {
      var _v2 = spaced.a;
      var spaceName = _v2.a;
      var x = _v2.b;
      var y = _v2.c;
      var newPadding = function() {
        if (!padded.$) {
          var _v5 = padded.a;
          _v5.a;
          var t = _v5.b;
          var r = _v5.c;
          var b = _v5.d;
          var l = _v5.e;
          if (_Utils_cmp(r, x / 2) > -1 && _Utils_cmp(b, y / 2) > -1) {
            var newTop = t - y / 2;
            var newRight = r - x / 2;
            var newLeft = l - x / 2;
            var newBottom = b - y / 2;
            return $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_ui$Internal$Model$StyleClass,
                $mdgriffith$elm_ui$Internal$Flag$padding,
                A5(
                  $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
                  A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
                  newTop,
                  newRight,
                  newBottom,
                  newLeft
                )
              )
            );
          } else {
            return $elm$core$Maybe$Nothing;
          }
        } else {
          return $elm$core$Maybe$Nothing;
        }
      }();
      if (!newPadding.$) {
        var pad = newPadding.a;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$element,
          $mdgriffith$elm_ui$Internal$Model$asRow,
          $mdgriffith$elm_ui$Internal$Model$div,
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.as + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.M + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bg)))),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
              A2(
                $elm$core$List$cons,
                $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
                _Utils_ap(
                  attrs,
                  _List_fromArray(
                    [pad]
                  )
                )
              )
            )
          ),
          $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
        );
      } else {
        var halfY = -(y / 2);
        var halfX = -(x / 2);
        return A4(
          $mdgriffith$elm_ui$Internal$Model$element,
          $mdgriffith$elm_ui$Internal$Model$asEl,
          $mdgriffith$elm_ui$Internal$Model$div,
          attrs,
          $mdgriffith$elm_ui$Internal$Model$Unkeyed(
            _List_fromArray(
              [
                A4(
                  $mdgriffith$elm_ui$Internal$Model$element,
                  $mdgriffith$elm_ui$Internal$Model$asRow,
                  $mdgriffith$elm_ui$Internal$Model$div,
                  A2(
                    $elm$core$List$cons,
                    $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.as + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.M + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bg)))),
                    A2(
                      $elm$core$List$cons,
                      $mdgriffith$elm_ui$Internal$Model$Attr(
                        A2(
                          $elm$html$Html$Attributes$style,
                          "margin",
                          $elm$core$String$fromFloat(halfY) + ("px" + (" " + ($elm$core$String$fromFloat(halfX) + "px")))
                        )
                      ),
                      A2(
                        $elm$core$List$cons,
                        $mdgriffith$elm_ui$Internal$Model$Attr(
                          A2(
                            $elm$html$Html$Attributes$style,
                            "width",
                            "calc(100% + " + ($elm$core$String$fromInt(x) + "px)")
                          )
                        ),
                        A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_ui$Internal$Model$Attr(
                            A2(
                              $elm$html$Html$Attributes$style,
                              "height",
                              "calc(100% + " + ($elm$core$String$fromInt(y) + "px)")
                            )
                          ),
                          A2(
                            $elm$core$List$cons,
                            A2(
                              $mdgriffith$elm_ui$Internal$Model$StyleClass,
                              $mdgriffith$elm_ui$Internal$Flag$spacing,
                              A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)
                            ),
                            _List_Nil
                          )
                        )
                      )
                    )
                  ),
                  $mdgriffith$elm_ui$Internal$Model$Unkeyed(children)
                )
              ]
            )
          )
        );
      }
    }
  }
);
var $author$project$Contact$viewContact = F2(
  function(device, contact) {
    var field = F2(
      function(labelString, fieldString) {
        var _v1 = device.A;
        if (!_v1) {
          return A2(
            $mdgriffith$elm_ui$Element$column,
            _List_fromArray(
              [
                A2($mdgriffith$elm_ui$Element$spacingXY, 0, 16),
                $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
              ]
            ),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Element$el,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Element$paddingXY, 8, 8),
                      $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                      $mdgriffith$elm_ui$Element$Background$color(
                        $author$project$Color$lighter($author$project$Color$blue)
                      )
                    ]
                  ),
                  $mdgriffith$elm_ui$Element$text(labelString)
                ),
                A2(
                  $mdgriffith$elm_ui$Element$paragraph,
                  _List_fromArray(
                    [
                      A2($mdgriffith$elm_ui$Element$paddingXY, 8, 0),
                      $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                    ]
                  ),
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$text(fieldString)
                    ]
                  )
                )
              ]
            )
          );
        } else {
          return A2(
            $mdgriffith$elm_ui$Element$row,
            _List_Nil,
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Element$el,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$width(
                        $mdgriffith$elm_ui$Element$px(250)
                      )
                    ]
                  ),
                  $mdgriffith$elm_ui$Element$text(labelString)
                ),
                A2(
                  $mdgriffith$elm_ui$Element$paragraph,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                    ]
                  ),
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$text(fieldString)
                    ]
                  )
                )
              ]
            )
          );
        }
      }
    );
    var divider = function() {
      var _v0 = device.A;
      if (!_v0) {
        return $mdgriffith$elm_ui$Element$text("");
      } else {
        return $author$project$Atom$horizontalDivider;
      }
    }();
    return _List_fromArray(
      [
        divider,
        A2(
          field,
          "お名前（漢字）",
          $author$project$Inquiry$Name$toString(contact.H) + "　様"
        ),
        divider,
        A2(
          field,
          "お名前（ふりがな）",
          $author$project$Inquiry$Kana$toString(contact.F)
        ),
        divider,
        A2(
          field,
          "メールアドレス",
          $author$project$Inquiry$Email$toString(contact.E)
        ),
        divider,
        A2(
          field,
          "お電話番号",
          A2(
            $elm$core$Maybe$withDefault,
            "",
            A2($elm$core$Maybe$map, $author$project$Inquiry$Tel$toString, contact.I)
          )
        ),
        divider,
        A2(
          field,
          "内容",
          $author$project$Inquiry$Content$toString(contact.C)
        ),
        divider,
        A2(
          $mdgriffith$elm_ui$Element$wrappedRow,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$spacing(4),
              $mdgriffith$elm_ui$Element$centerX
            ]
          ),
          A2($elm$core$List$map, $author$project$Contact$viewPreview, contact.f)
        )
      ]
    );
  }
);
var $author$project$Color$white = A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
  function(a, b, c, d, e) {
    return { $: 6, a, b, c, d, e };
  }
);
var $mdgriffith$elm_ui$Element$Border$width = function(v) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$borderWidth,
    A5(
      $mdgriffith$elm_ui$Internal$Model$BorderWidth,
      "b-" + $elm$core$String$fromInt(v),
      v,
      v,
      v,
      v
    )
  );
};
var $author$project$Contact$viewConfirm = F3(
  function(device, contact, maybeString) {
    if (!maybeString.$) {
      var errorString = maybeString.a;
      return _Utils_ap(
        _List_fromArray(
          [
            A2(
              $mdgriffith$elm_ui$Element$el,
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$Border$width(1),
                  $mdgriffith$elm_ui$Element$Border$color(
                    $author$project$Color$dark($author$project$Color$red)
                  ),
                  $mdgriffith$elm_ui$Element$Border$rounded(4),
                  A2($mdgriffith$elm_ui$Element$paddingXY, 4, 10),
                  $mdgriffith$elm_ui$Element$spacing(8),
                  $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                  $mdgriffith$elm_ui$Element$Font$color(
                    $author$project$Color$dark($author$project$Color$red)
                  )
                ]
              ),
              A2(
                $mdgriffith$elm_ui$Element$el,
                _List_fromArray(
                  [$mdgriffith$elm_ui$Element$centerX]
                ),
                $mdgriffith$elm_ui$Element$text(errorString)
              )
            )
          ]
        ),
        _Utils_ap(
          A2($author$project$Contact$viewContact, device, contact),
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$el,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$centerX,
                    $mdgriffith$elm_ui$Element$padding(20)
                  ]
                ),
                A2(
                  $mdgriffith$elm_ui$Element$Input$button,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$Background$color(
                        $author$project$Color$dark($author$project$Color$grey)
                      ),
                      $mdgriffith$elm_ui$Element$Border$rounded(4),
                      $mdgriffith$elm_ui$Element$Border$color(
                        $author$project$Color$dark($author$project$Color$grey)
                      ),
                      $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
                      A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
                      $mdgriffith$elm_ui$Element$width(
                        $mdgriffith$elm_ui$Element$px(256)
                      )
                    ]
                  ),
                  {
                    n: A2(
                      $mdgriffith$elm_ui$Element$el,
                      _List_fromArray(
                        [$mdgriffith$elm_ui$Element$centerX]
                      ),
                      $mdgriffith$elm_ui$Element$text("再度送信")
                    ),
                    Z: $elm$core$Maybe$Just(
                      $author$project$Contact$ClickedSend(contact)
                    )
                  }
                )
              )
            ]
          )
        )
      );
    } else {
      return _Utils_ap(
        A2($author$project$Contact$viewContact, device, contact),
        _List_fromArray(
          [
            A2(
              $mdgriffith$elm_ui$Element$el,
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$centerX,
                  $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm)
                ]
              ),
              $mdgriffith$elm_ui$Element$text("上記の内容でよろしければ送信ボタンを押してください")
            ),
            A2(
              $mdgriffith$elm_ui$Element$el,
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$centerX,
                  $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm)
                ]
              ),
              $mdgriffith$elm_ui$Element$text("入力内容を修正する場合は修正ボタンを押してください")
            ),
            A2(
              $mdgriffith$elm_ui$Element$row,
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$centerX,
                  $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $mdgriffith$elm_ui$Element$el,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_ui$Element$centerX,
                        $mdgriffith$elm_ui$Element$padding(20),
                        $mdgriffith$elm_ui$Element$width(
                          A2($mdgriffith$elm_ui$Element$maximum, 256, $mdgriffith$elm_ui$Element$fill)
                        )
                      ]
                    ),
                    A2(
                      $mdgriffith$elm_ui$Element$Input$button,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Background$color(
                            $author$project$Color$dark($author$project$Color$grey)
                          ),
                          $mdgriffith$elm_ui$Element$Border$rounded(4),
                          $mdgriffith$elm_ui$Element$Border$color(
                            $author$project$Color$dark($author$project$Color$grey)
                          ),
                          $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
                          A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
                          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                        ]
                      ),
                      {
                        n: A2(
                          $mdgriffith$elm_ui$Element$el,
                          _List_fromArray(
                            [$mdgriffith$elm_ui$Element$centerX]
                          ),
                          $mdgriffith$elm_ui$Element$text("修正")
                        ),
                        Z: $elm$core$Maybe$Just($author$project$Contact$ClickedBack)
                      }
                    )
                  ),
                  A2(
                    $mdgriffith$elm_ui$Element$el,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_ui$Element$centerX,
                        $mdgriffith$elm_ui$Element$padding(20),
                        $mdgriffith$elm_ui$Element$width(
                          A2($mdgriffith$elm_ui$Element$maximum, 256, $mdgriffith$elm_ui$Element$fill)
                        )
                      ]
                    ),
                    A2(
                      $mdgriffith$elm_ui$Element$Input$button,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Background$color(
                            $author$project$Color$base($author$project$Color$teal)
                          ),
                          $mdgriffith$elm_ui$Element$Border$rounded(4),
                          $mdgriffith$elm_ui$Element$Border$color(
                            $author$project$Color$base($author$project$Color$teal)
                          ),
                          $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
                          A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
                          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                        ]
                      ),
                      {
                        n: A2(
                          $mdgriffith$elm_ui$Element$el,
                          _List_fromArray(
                            [$mdgriffith$elm_ui$Element$centerX]
                          ),
                          $mdgriffith$elm_ui$Element$text("送信")
                        ),
                        Z: $elm$core$Maybe$Just(
                          $author$project$Contact$ClickedSend(contact)
                        )
                      }
                    )
                  )
                ]
              )
            )
          ]
        )
      );
    }
  }
);
var $author$project$Contact$ChangedContent = function(a) {
  return { $: 19, a };
};
var $author$project$Contact$ChangedEmail = function(a) {
  return { $: 18, a };
};
var $author$project$Contact$ChangedKana = function(a) {
  return { $: 16, a };
};
var $author$project$Contact$ChangedName = function(a) {
  return { $: 15, a };
};
var $author$project$Contact$ChangedTel = function(a) {
  return { $: 17, a };
};
var $author$project$Contact$ClickedAgreement = function(a) {
  return { $: 20, a };
};
var $author$project$Contact$ClickedConfirm = { $: 0 };
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function(a) {
  return { $: 5, a };
};
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $mdgriffith$elm_ui$Internal$Model$LivePolite = { $: 6 };
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
  function(attrs, label, input) {
    if (label.$ === 1) {
      label.a;
      return A4(
        $mdgriffith$elm_ui$Internal$Model$element,
        $mdgriffith$elm_ui$Internal$Model$asColumn,
        $mdgriffith$elm_ui$Internal$Model$NodeName("label"),
        attrs,
        $mdgriffith$elm_ui$Internal$Model$Unkeyed(
          _List_fromArray(
            [input]
          )
        )
      );
    } else {
      var position = label.a;
      var labelAttrs = label.b;
      var labelChild = label.c;
      var labelElement = A4(
        $mdgriffith$elm_ui$Internal$Model$element,
        $mdgriffith$elm_ui$Internal$Model$asEl,
        $mdgriffith$elm_ui$Internal$Model$div,
        labelAttrs,
        $mdgriffith$elm_ui$Internal$Model$Unkeyed(
          _List_fromArray(
            [labelChild]
          )
        )
      );
      switch (position) {
        case 2:
          return A4(
            $mdgriffith$elm_ui$Internal$Model$element,
            $mdgriffith$elm_ui$Internal$Model$asColumn,
            $mdgriffith$elm_ui$Internal$Model$NodeName("label"),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM),
              attrs
            ),
            $mdgriffith$elm_ui$Internal$Model$Unkeyed(
              _List_fromArray(
                [labelElement, input]
              )
            )
          );
        case 3:
          return A4(
            $mdgriffith$elm_ui$Internal$Model$element,
            $mdgriffith$elm_ui$Internal$Model$asColumn,
            $mdgriffith$elm_ui$Internal$Model$NodeName("label"),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM),
              attrs
            ),
            $mdgriffith$elm_ui$Internal$Model$Unkeyed(
              _List_fromArray(
                [input, labelElement]
              )
            )
          );
        case 0:
          return A4(
            $mdgriffith$elm_ui$Internal$Model$element,
            $mdgriffith$elm_ui$Internal$Model$asRow,
            $mdgriffith$elm_ui$Internal$Model$NodeName("label"),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM),
              attrs
            ),
            $mdgriffith$elm_ui$Internal$Model$Unkeyed(
              _List_fromArray(
                [input, labelElement]
              )
            )
          );
        default:
          return A4(
            $mdgriffith$elm_ui$Internal$Model$element,
            $mdgriffith$elm_ui$Internal$Model$asRow,
            $mdgriffith$elm_ui$Internal$Model$NodeName("label"),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM),
              attrs
            ),
            $mdgriffith$elm_ui$Internal$Model$Unkeyed(
              _List_fromArray(
                [labelElement, input]
              )
            )
          );
      }
    }
  }
);
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Internal$Model$Label = function(a) {
  return { $: 5, a };
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function(label) {
  if (label.$ === 1) {
    var textLabel = label.a;
    return $mdgriffith$elm_ui$Internal$Model$Describe(
      $mdgriffith$elm_ui$Internal$Model$Label(textLabel)
    );
  } else {
    return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
  }
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function(label) {
  if (label.$ === 1) {
    return true;
  } else {
    return false;
  }
};
var $mdgriffith$elm_ui$Element$Input$tabindex = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$tabindex);
var $mdgriffith$elm_ui$Element$Input$checkbox = F2(
  function(attrs, _v0) {
    var label = _v0.n;
    var icon = _v0.c3;
    var checked = _v0.cK;
    var onChange = _v0.al;
    var attributes = _Utils_ap(
      _List_fromArray(
        [
          $mdgriffith$elm_ui$Element$Input$isHiddenLabel(label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(6),
          $mdgriffith$elm_ui$Internal$Model$Attr(
            $elm$html$Html$Events$onClick(
              onChange(!checked)
            )
          ),
          $mdgriffith$elm_ui$Element$Region$announce,
          $mdgriffith$elm_ui$Element$Input$onKeyLookup(
            function(code) {
              return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(
                onChange(!checked)
              ) : _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(
                onChange(!checked)
              ) : $elm$core$Maybe$Nothing;
            }
          ),
          $mdgriffith$elm_ui$Element$Input$tabindex(0),
          $mdgriffith$elm_ui$Element$pointer,
          $mdgriffith$elm_ui$Element$alignLeft,
          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
        ]
      ),
      attrs
    );
    return A3(
      $mdgriffith$elm_ui$Element$Input$applyLabel,
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$Attr(
          A2($elm$html$Html$Attributes$attribute, "role", "checkbox")
        ),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Internal$Model$Attr(
            A2(
              $elm$html$Html$Attributes$attribute,
              "aria-checked",
              checked ? "true" : "false"
            )
          ),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(label),
            attributes
          )
        )
      ),
      label,
      A4(
        $mdgriffith$elm_ui$Internal$Model$element,
        $mdgriffith$elm_ui$Internal$Model$asEl,
        $mdgriffith$elm_ui$Internal$Model$div,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$centerY,
            $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
          ]
        ),
        $mdgriffith$elm_ui$Internal$Model$Unkeyed(
          _List_fromArray(
            [
              icon(checked)
            ]
          )
        )
      )
    );
  }
);
var $author$project$Contact$decoInputField = _List_fromArray(
  [
    A2($mdgriffith$elm_ui$Element$spacingXY, 10, 10),
    $mdgriffith$elm_ui$Element$padding(5),
    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
  ]
);
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.dV);
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function(angleInDegrees) {
  return angleInDegrees * $elm$core$Basics$pi / 180;
};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
  function(a, b) {
    return { $: 9, a, b };
  }
);
var $mdgriffith$elm_ui$Element$createNearby = F2(
  function(loc, element) {
    if (element.$ === 3) {
      return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
    } else {
      return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
    }
  }
);
var $mdgriffith$elm_ui$Element$inFront = function(element) {
  return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function(a) {
  return { $: 1, a };
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
  function(a, b) {
    return { $: 10, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function(y) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$TransformComponent,
    $mdgriffith$elm_ui$Internal$Flag$moveY,
    $mdgriffith$elm_ui$Internal$Model$MoveY(-y)
  );
};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Element$rgb = F3(
  function(r, g, b) {
    return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
  }
);
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Internal$Model$Rotate = F2(
  function(a, b) {
    return { $: 4, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$rotate = $mdgriffith$elm_ui$Internal$Flag$flag(24);
var $mdgriffith$elm_ui$Element$rotate = function(angle) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$TransformComponent,
    $mdgriffith$elm_ui$Internal$Flag$rotate,
    A2(
      $mdgriffith$elm_ui$Internal$Model$Rotate,
      _Utils_Tuple3(0, 0, 1),
      angle
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$boxShadowClass = function(shadow) {
  return $elm$core$String$concat(
    _List_fromArray(
      [
        shadow.bB ? "box-inset" : "box-",
        $mdgriffith$elm_ui$Internal$Model$floatClass(shadow.a.a) + "px",
        $mdgriffith$elm_ui$Internal$Model$floatClass(shadow.a.b) + "px",
        $mdgriffith$elm_ui$Internal$Model$floatClass(shadow.af) + "px",
        $mdgriffith$elm_ui$Internal$Model$floatClass(shadow.b1) + "px",
        $mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.ag)
      ]
    )
  );
};
var $mdgriffith$elm_ui$Internal$Flag$shadows = $mdgriffith$elm_ui$Internal$Flag$flag(19);
var $mdgriffith$elm_ui$Element$Border$shadow = function(almostShade) {
  var shade = { af: almostShade.af, ag: almostShade.ag, bB: false, a: almostShade.a, b1: almostShade.b1 };
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$shadows,
    A3(
      $mdgriffith$elm_ui$Internal$Model$Single,
      $mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
      "box-shadow",
      $mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
  function(a, b) {
    return { $: 12, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$transparent = function(on) {
  return on ? A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$transparency,
    A2($mdgriffith$elm_ui$Internal$Model$Transparency, "transparent", 1)
  ) : A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$transparency,
    A2($mdgriffith$elm_ui$Internal$Model$Transparency, "visible", 0)
  );
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
  function(x, y) {
    return A2(
      $mdgriffith$elm_ui$Internal$Model$StyleClass,
      $mdgriffith$elm_ui$Internal$Flag$borderWidth,
      A5(
        $mdgriffith$elm_ui$Internal$Model$BorderWidth,
        "b-" + ($elm$core$String$fromInt(x) + ("-" + $elm$core$String$fromInt(y))),
        y,
        x,
        y,
        x
      )
    );
  }
);
var $mdgriffith$elm_ui$Element$Border$widthEach = function(_v0) {
  var bottom = _v0.cE;
  var top = _v0.d9;
  var left = _v0.dg;
  var right = _v0.dy;
  return _Utils_eq(top, bottom) && _Utils_eq(left, right) ? _Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top) : A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$borderWidth,
    A5(
      $mdgriffith$elm_ui$Internal$Model$BorderWidth,
      "b-" + ($elm$core$String$fromInt(top) + ("-" + ($elm$core$String$fromInt(right) + ("-" + ($elm$core$String$fromInt(bottom) + ("-" + $elm$core$String$fromInt(left))))))),
      top,
      right,
      bottom,
      left
    )
  );
};
var $mdgriffith$elm_ui$Element$Input$defaultCheckbox = function(checked) {
  return A2(
    $mdgriffith$elm_ui$Element$el,
    _List_fromArray(
      [
        $mdgriffith$elm_ui$Internal$Model$htmlClass("focusable"),
        $mdgriffith$elm_ui$Element$width(
          $mdgriffith$elm_ui$Element$px(14)
        ),
        $mdgriffith$elm_ui$Element$height(
          $mdgriffith$elm_ui$Element$px(14)
        ),
        $mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$white),
        $mdgriffith$elm_ui$Element$centerY,
        $mdgriffith$elm_ui$Element$Font$size(9),
        $mdgriffith$elm_ui$Element$Font$center,
        $mdgriffith$elm_ui$Element$Border$rounded(3),
        $mdgriffith$elm_ui$Element$Border$color(
          checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : A3($mdgriffith$elm_ui$Element$rgb, 211 / 255, 211 / 255, 211 / 255)
        ),
        $mdgriffith$elm_ui$Element$Border$shadow(
          {
            af: 1,
            ag: checked ? A4($mdgriffith$elm_ui$Element$rgba, 238 / 255, 238 / 255, 238 / 255, 0) : A3($mdgriffith$elm_ui$Element$rgb, 238 / 255, 238 / 255, 238 / 255),
            a: _Utils_Tuple2(0, 0),
            b1: 1
          }
        ),
        $mdgriffith$elm_ui$Element$Background$color(
          checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : $mdgriffith$elm_ui$Element$Input$white
        ),
        $mdgriffith$elm_ui$Element$Border$width(
          checked ? 0 : 1
        ),
        $mdgriffith$elm_ui$Element$inFront(
          A2(
            $mdgriffith$elm_ui$Element$el,
            _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$white),
                $mdgriffith$elm_ui$Element$height(
                  $mdgriffith$elm_ui$Element$px(6)
                ),
                $mdgriffith$elm_ui$Element$width(
                  $mdgriffith$elm_ui$Element$px(9)
                ),
                $mdgriffith$elm_ui$Element$rotate(
                  $elm$core$Basics$degrees(-45)
                ),
                $mdgriffith$elm_ui$Element$centerX,
                $mdgriffith$elm_ui$Element$centerY,
                $mdgriffith$elm_ui$Element$moveUp(1),
                $mdgriffith$elm_ui$Element$transparent(!checked),
                $mdgriffith$elm_ui$Element$Border$widthEach(
                  { cE: 2, dg: 2, dy: 0, d9: 0 }
                )
              ]
            ),
            $mdgriffith$elm_ui$Element$none
          )
        )
      ]
    ),
    $mdgriffith$elm_ui$Element$none
  );
};
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function(a) {
  return { $: 0, a };
};
var $mdgriffith$elm_ui$Element$Input$TextArea = { $: 1 };
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
  $elm$core$Basics$composeL,
  $mdgriffith$elm_ui$Internal$Model$Attr,
  $elm$html$Html$Attributes$attribute("autocomplete")
);
var $mdgriffith$elm_ui$Element$behindContent = function(element) {
  return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function(attrs) {
  var gatherSpacing = F2(
    function(attr, found) {
      if (attr.$ === 4 && attr.b.$ === 5) {
        var _v2 = attr.b;
        _v2.b;
        var y = _v2.c;
        if (found.$ === 1) {
          return $elm$core$Maybe$Just(y);
        } else {
          return found;
        }
      } else {
        return found;
      }
    }
  );
  var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
  if (_v0.$ === 1) {
    return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
  } else {
    var vSpace = _v0.a;
    return $mdgriffith$elm_ui$Element$moveUp(
      $elm$core$Basics$floor(vSpace / 2)
    );
  }
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.cL);
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
  [
    $mdgriffith$elm_ui$Element$Input$defaultTextPadding,
    $mdgriffith$elm_ui$Element$Border$rounded(3),
    $mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
    $mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
    $mdgriffith$elm_ui$Element$Border$width(1),
    $mdgriffith$elm_ui$Element$spacing(5),
    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
    $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
  ]
);
var $mdgriffith$elm_ui$Element$Input$getHeight = function(attr) {
  if (attr.$ === 8) {
    var h = attr.a;
    return $elm$core$Maybe$Just(h);
  } else {
    return $elm$core$Maybe$Nothing;
  }
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function(len) {
  isConstrained:
    while (true) {
      switch (len.$) {
        case 1:
          return false;
        case 0:
          return true;
        case 2:
          return true;
        case 3:
          var l = len.b;
          var $temp$len = l;
          len = $temp$len;
          continue isConstrained;
        default:
          var l = len.b;
          return true;
      }
    }
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function(label) {
  if (!label.$) {
    var loc = label.a;
    switch (loc) {
      case 0:
        return false;
      case 1:
        return false;
      case 2:
        return true;
      default:
        return true;
    }
  } else {
    return true;
  }
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function(box) {
  return { cE: -box.cE, dg: -box.dg, dy: -box.dy, d9: -box.d9 };
};
var $elm$html$Html$Events$alwaysStop = function(x) {
  return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
  return { $: 1, a };
};
var $elm$html$Html$Events$stopPropagationOn = F2(
  function(event, decoder) {
    return A2(
      $elm$virtual_dom$VirtualDom$on,
      event,
      $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder)
    );
  }
);
var $elm$json$Json$Decode$at = F2(
  function(fields, decoder) {
    return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
  }
);
var $elm$html$Html$Events$targetValue = A2(
  $elm$json$Json$Decode$at,
  _List_fromArray(
    ["target", "value"]
  ),
  $elm$json$Json$Decode$string
);
var $elm$html$Html$Events$onInput = function(tagger) {
  return A2(
    $elm$html$Html$Events$stopPropagationOn,
    "input",
    A2(
      $elm$json$Json$Decode$map,
      $elm$html$Html$Events$alwaysStop,
      A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
  function(top, right, bottom, left) {
    return "pad-" + ($elm$core$String$fromInt(top) + ("-" + ($elm$core$String$fromInt(right) + ("-" + ($elm$core$String$fromInt(bottom) + ("-" + $elm$core$String$fromInt(left)))))));
  }
);
var $mdgriffith$elm_ui$Element$paddingEach = function(_v0) {
  var top = _v0.d9;
  var right = _v0.dy;
  var bottom = _v0.cE;
  var left = _v0.dg;
  if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
    var topFloat = top;
    return A2(
      $mdgriffith$elm_ui$Internal$Model$StyleClass,
      $mdgriffith$elm_ui$Internal$Flag$padding,
      A5(
        $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
        "p-" + $elm$core$String$fromInt(top),
        topFloat,
        topFloat,
        topFloat,
        topFloat
      )
    );
  } else {
    return A2(
      $mdgriffith$elm_ui$Internal$Model$StyleClass,
      $mdgriffith$elm_ui$Internal$Flag$padding,
      A5(
        $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
        A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
        top,
        right,
        bottom,
        left
      )
    );
  }
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function(len) {
  isFill:
    while (true) {
      switch (len.$) {
        case 2:
          return true;
        case 1:
          return false;
        case 0:
          return false;
        case 3:
          var l = len.b;
          var $temp$len = l;
          len = $temp$len;
          continue isFill;
        default:
          var l = len.b;
          var $temp$len = l;
          len = $temp$len;
          continue isFill;
      }
    }
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function(len) {
  isPixel:
    while (true) {
      switch (len.$) {
        case 1:
          return false;
        case 0:
          return true;
        case 2:
          return false;
        case 3:
          var l = len.b;
          var $temp$len = l;
          len = $temp$len;
          continue isPixel;
        default:
          var l = len.b;
          var $temp$len = l;
          len = $temp$len;
          continue isPixel;
      }
    }
};
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
  function(isMultiline, stacked, attr, els) {
    switch (attr.$) {
      case 9:
        return _Utils_update(
          els,
          {
            b: A2($elm$core$List$cons, attr, els.b)
          }
        );
      case 7:
        var width = attr.a;
        return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e),
            k: A2($elm$core$List$cons, attr, els.k),
            b: A2($elm$core$List$cons, attr, els.b)
          }
        ) : stacked ? _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e)
          }
        ) : _Utils_update(
          els,
          {
            b: A2($elm$core$List$cons, attr, els.b)
          }
        );
      case 8:
        var height = attr.a;
        return !stacked ? _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e),
            b: A2($elm$core$List$cons, attr, els.b)
          }
        ) : $mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e),
            b: A2($elm$core$List$cons, attr, els.b)
          }
        ) : $mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
          els,
          {
            b: A2($elm$core$List$cons, attr, els.b)
          }
        ) : _Utils_update(
          els,
          {
            b: A2($elm$core$List$cons, attr, els.b)
          }
        );
      case 6:
        return _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e)
          }
        );
      case 5:
        return _Utils_update(
          els,
          {
            e: A2($elm$core$List$cons, attr, els.e)
          }
        );
      case 4:
        switch (attr.b.$) {
          case 5:
            attr.b;
            return _Utils_update(
              els,
              {
                e: A2($elm$core$List$cons, attr, els.e),
                k: A2($elm$core$List$cons, attr, els.k),
                b: A2($elm$core$List$cons, attr, els.b),
                aq: A2($elm$core$List$cons, attr, els.aq)
              }
            );
          case 7:
            attr.a;
            var _v2 = attr.b;
            _v2.a;
            var t = _v2.b;
            var r = _v2.c;
            var b = _v2.d;
            var l = _v2.e;
            if (isMultiline) {
              return _Utils_update(
                els,
                {
                  q: A2($elm$core$List$cons, attr, els.q),
                  b: A2($elm$core$List$cons, attr, els.b)
                }
              );
            } else {
              var newTop = t - A2($elm$core$Basics$min, t, b);
              var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
                A2(
                  $elm$html$Html$Attributes$style,
                  "line-height",
                  "calc(1.0em + " + ($elm$core$String$fromFloat(
                    2 * A2($elm$core$Basics$min, t, b)
                  ) + "px)")
                )
              );
              var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
                A2(
                  $elm$html$Html$Attributes$style,
                  "height",
                  "calc(1.0em + " + ($elm$core$String$fromFloat(
                    2 * A2($elm$core$Basics$min, t, b)
                  ) + "px)")
                )
              );
              var newBottom = b - A2($elm$core$Basics$min, t, b);
              var reducedVerticalPadding = A2(
                $mdgriffith$elm_ui$Internal$Model$StyleClass,
                $mdgriffith$elm_ui$Internal$Flag$padding,
                A5(
                  $mdgriffith$elm_ui$Internal$Model$PaddingStyle,
                  A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
                  newTop,
                  r,
                  newBottom,
                  l
                )
              );
              return _Utils_update(
                els,
                {
                  q: A2($elm$core$List$cons, attr, els.q),
                  k: A2(
                    $elm$core$List$cons,
                    newHeight,
                    A2($elm$core$List$cons, newLineHeight, els.k)
                  ),
                  b: A2($elm$core$List$cons, reducedVerticalPadding, els.b)
                }
              );
            }
          case 6:
            attr.b;
            return _Utils_update(
              els,
              {
                q: A2($elm$core$List$cons, attr, els.q),
                b: A2($elm$core$List$cons, attr, els.b)
              }
            );
          case 10:
            return _Utils_update(
              els,
              {
                q: A2($elm$core$List$cons, attr, els.q),
                b: A2($elm$core$List$cons, attr, els.b)
              }
            );
          case 2:
            return _Utils_update(
              els,
              {
                e: A2($elm$core$List$cons, attr, els.e)
              }
            );
          case 1:
            attr.b;
            return _Utils_update(
              els,
              {
                e: A2($elm$core$List$cons, attr, els.e)
              }
            );
          default:
            attr.a;
            attr.b;
            return _Utils_update(
              els,
              {
                b: A2($elm$core$List$cons, attr, els.b)
              }
            );
        }
      case 0:
        return els;
      case 1:
        attr.a;
        return _Utils_update(
          els,
          {
            k: A2($elm$core$List$cons, attr, els.k)
          }
        );
      case 2:
        return _Utils_update(
          els,
          {
            k: A2($elm$core$List$cons, attr, els.k)
          }
        );
      case 3:
        return _Utils_update(
          els,
          {
            b: A2($elm$core$List$cons, attr, els.b)
          }
        );
      default:
        return _Utils_update(
          els,
          {
            k: A2($elm$core$List$cons, attr, els.k)
          }
        );
    }
  }
);
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
  function(isMultiline, stacked, attrs) {
    return function(redist) {
      return {
        q: $elm$core$List$reverse(redist.q),
        e: $elm$core$List$reverse(redist.e),
        k: $elm$core$List$reverse(redist.k),
        b: $elm$core$List$reverse(redist.b),
        aq: $elm$core$List$reverse(redist.aq)
      };
    }(
      A3(
        $elm$core$List$foldl,
        A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
        { q: _List_Nil, e: _List_Nil, k: _List_Nil, b: _List_Nil, aq: _List_Nil },
        attrs
      )
    );
  }
);
var $mdgriffith$elm_ui$Element$Input$renderBox = function(_v0) {
  var top = _v0.d9;
  var right = _v0.dy;
  var bottom = _v0.cE;
  var left = _v0.dg;
  return $elm$core$String$fromInt(top) + ("px " + ($elm$core$String$fromInt(right) + ("px " + ($elm$core$String$fromInt(bottom) + ("px " + ($elm$core$String$fromInt(left) + "px"))))));
};
var $mdgriffith$elm_ui$Element$alpha = function(o) {
  var transparency = function(x) {
    return 1 - x;
  }(
    A2(
      $elm$core$Basics$min,
      1,
      A2($elm$core$Basics$max, 0, o)
    )
  );
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$transparency,
    A2(
      $mdgriffith$elm_ui$Internal$Model$Transparency,
      "transparency-" + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
      transparency
    )
  );
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
  function(_v0, forPlaceholder, on) {
    var placeholderAttrs = _v0.a;
    var placeholderEl = _v0.b;
    return A2(
      $mdgriffith$elm_ui$Element$el,
      _Utils_ap(
        forPlaceholder,
        _Utils_ap(
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
              $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bI + (" " + $mdgriffith$elm_ui$Internal$Style$classes.dt)),
              $mdgriffith$elm_ui$Element$clip,
              $mdgriffith$elm_ui$Element$Border$color(
                A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)
              ),
              $mdgriffith$elm_ui$Element$Background$color(
                A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)
              ),
              $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
              $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
              $mdgriffith$elm_ui$Element$alpha(
                on ? 1 : 0
              )
            ]
          ),
          placeholderAttrs
        )
      ),
      placeholderEl
    );
  }
);
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.dD);
var $elm$html$Html$span = _VirtualDom_node("span");
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty("spellcheck");
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty("type");
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty("value");
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
  function(textInput, attrs, textOptions) {
    var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
    var redistributed = A3(
      $mdgriffith$elm_ui$Element$Input$redistribute,
      _Utils_eq(textInput.o, $mdgriffith$elm_ui$Element$Input$TextArea),
      $mdgriffith$elm_ui$Element$Input$isStacked(textOptions.n),
      withDefaults
    );
    var heightConstrained = function() {
      var _v7 = textInput.o;
      if (!_v7.$) {
        _v7.a;
        return false;
      } else {
        return A2(
          $elm$core$Maybe$withDefault,
          false,
          A2(
            $elm$core$Maybe$map,
            $mdgriffith$elm_ui$Element$Input$isConstrained,
            $elm$core$List$head(
              $elm$core$List$reverse(
                A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)
              )
            )
          )
        );
      }
    }();
    var getPadding = function(attr) {
      if (attr.$ === 4 && attr.b.$ === 7) {
        attr.a;
        var _v6 = attr.b;
        _v6.a;
        var t = _v6.b;
        var r = _v6.c;
        var b = _v6.d;
        var l = _v6.e;
        return $elm$core$Maybe$Just(
          {
            cE: A2(
              $elm$core$Basics$max,
              0,
              $elm$core$Basics$floor(b - 3)
            ),
            dg: A2(
              $elm$core$Basics$max,
              0,
              $elm$core$Basics$floor(l - 3)
            ),
            dy: A2(
              $elm$core$Basics$max,
              0,
              $elm$core$Basics$floor(r - 3)
            ),
            d9: A2(
              $elm$core$Basics$max,
              0,
              $elm$core$Basics$floor(t - 3)
            )
          }
        );
      } else {
        return $elm$core$Maybe$Nothing;
      }
    };
    var parentPadding = A2(
      $elm$core$Maybe$withDefault,
      { cE: 0, dg: 0, dy: 0, d9: 0 },
      $elm$core$List$head(
        $elm$core$List$reverse(
          A2($elm$core$List$filterMap, getPadding, withDefaults)
        )
      )
    );
    var inputElement = A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asEl,
      function() {
        var _v3 = textInput.o;
        if (!_v3.$) {
          _v3.a;
          return $mdgriffith$elm_ui$Internal$Model$NodeName("input");
        } else {
          return $mdgriffith$elm_ui$Internal$Model$NodeName("textarea");
        }
      }(),
      _Utils_ap(
        function() {
          var _v4 = textInput.o;
          if (!_v4.$) {
            var inputType = _v4.a;
            return _List_fromArray(
              [
                $mdgriffith$elm_ui$Internal$Model$Attr(
                  $elm$html$Html$Attributes$type_(inputType)
                ),
                $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dd)
              ]
            );
          } else {
            return _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$clip,
                $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
                $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.c9),
                $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
                $mdgriffith$elm_ui$Element$paddingEach(parentPadding),
                $mdgriffith$elm_ui$Internal$Model$Attr(
                  A2(
                    $elm$html$Html$Attributes$style,
                    "margin",
                    $mdgriffith$elm_ui$Element$Input$renderBox(
                      $mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)
                    )
                  )
                ),
                $mdgriffith$elm_ui$Internal$Model$Attr(
                  A2($elm$html$Html$Attributes$style, "box-sizing", "content-box")
                )
              ]
            );
          }
        }(),
        _Utils_ap(
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Input$value(textOptions.ax),
              $mdgriffith$elm_ui$Internal$Model$Attr(
                $elm$html$Html$Events$onInput(textOptions.al)
              ),
              $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.n),
              $mdgriffith$elm_ui$Element$Input$spellcheck(textInput.z),
              A2(
                $elm$core$Maybe$withDefault,
                $mdgriffith$elm_ui$Internal$Model$NoAttribute,
                A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.v)
              )
            ]
          ),
          redistributed.k
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil)
    );
    var wrappedInput = function() {
      var _v0 = textInput.o;
      if (_v0.$ === 1) {
        return A4(
          $mdgriffith$elm_ui$Internal$Model$element,
          $mdgriffith$elm_ui$Internal$Model$asEl,
          $mdgriffith$elm_ui$Internal$Model$div,
          _Utils_ap(
            (heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                  A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bs),
                  $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dc)
                ]
              )
            ),
            redistributed.b
          ),
          $mdgriffith$elm_ui$Internal$Model$Unkeyed(
            _List_fromArray(
              [
                A4(
                  $mdgriffith$elm_ui$Internal$Model$element,
                  $mdgriffith$elm_ui$Internal$Model$asParagraph,
                  $mdgriffith$elm_ui$Internal$Model$div,
                  A2(
                    $elm$core$List$cons,
                    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                    A2(
                      $elm$core$List$cons,
                      $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
                      A2(
                        $elm$core$List$cons,
                        $mdgriffith$elm_ui$Element$inFront(inputElement),
                        A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.db),
                          redistributed.aq
                        )
                      )
                    )
                  ),
                  $mdgriffith$elm_ui$Internal$Model$Unkeyed(
                    function() {
                      if (textOptions.ax === "") {
                        var _v1 = textOptions.au;
                        if (_v1.$ === 1) {
                          return _List_fromArray(
                            [
                              $mdgriffith$elm_ui$Element$text(" ")
                            ]
                          );
                        } else {
                          var place = _v1.a;
                          return _List_fromArray(
                            [
                              A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.ax === "")
                            ]
                          );
                        }
                      } else {
                        return _List_fromArray(
                          [
                            $mdgriffith$elm_ui$Internal$Model$unstyled(
                              A2(
                                $elm$html$Html$span,
                                _List_fromArray(
                                  [
                                    $elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.da)
                                  ]
                                ),
                                _List_fromArray(
                                  [
                                    $elm$html$Html$text(textOptions.ax + " ")
                                  ]
                                )
                              )
                            )
                          ]
                        );
                      }
                    }()
                  )
                )
              ]
            )
          )
        );
      } else {
        _v0.a;
        return A4(
          $mdgriffith$elm_ui$Internal$Model$element,
          $mdgriffith$elm_ui$Internal$Model$asEl,
          $mdgriffith$elm_ui$Internal$Model$div,
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
            A2(
              $elm$core$List$cons,
              A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bs),
              $elm$core$List$concat(
                _List_fromArray(
                  [
                    redistributed.b,
                    function() {
                      var _v2 = textOptions.au;
                      if (_v2.$ === 1) {
                        return _List_Nil;
                      } else {
                        var place = _v2.a;
                        return _List_fromArray(
                          [
                            $mdgriffith$elm_ui$Element$behindContent(
                              A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.q, textOptions.ax === "")
                            )
                          ]
                        );
                      }
                    }()
                  ]
                )
              )
            )
          ),
          $mdgriffith$elm_ui$Internal$Model$Unkeyed(
            _List_fromArray(
              [inputElement]
            )
          )
        );
      }
    }();
    return A3(
      $mdgriffith$elm_ui$Element$Input$applyLabel,
      A2(
        $elm$core$List$cons,
        A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cR),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.n) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
          A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.e)
        )
      ),
      textOptions.n,
      wrappedInput
    );
  }
);
var $mdgriffith$elm_ui$Element$Input$email = $mdgriffith$elm_ui$Element$Input$textHelper(
  {
    v: $elm$core$Maybe$Just("email"),
    z: false,
    o: $mdgriffith$elm_ui$Element$Input$TextInputNode("email")
  }
);
var $author$project$Contact$errorField = function(maybeString) {
  if (!maybeString.$) {
    return _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Border$color(
          $author$project$Color$base($author$project$Color$red)
        )
      ]
    );
  } else {
    return _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Border$color(
          $author$project$Color$dark($author$project$Color$grey)
        )
      ]
    );
  }
};
var $author$project$Error$errorField = function(error) {
  if (!error.$) {
    return "入力をお願いします";
  } else {
    var s = error.a;
    return s;
  }
};
var $mdgriffith$elm_ui$Internal$Model$Min = F2(
  function(a, b) {
    return { $: 3, a, b };
  }
);
var $mdgriffith$elm_ui$Element$minimum = F2(
  function(i, l) {
    return A2($mdgriffith$elm_ui$Internal$Model$Min, i, l);
  }
);
var $author$project$Contact$errorTip = F2(
  function(maybeString, device) {
    var err = A2(
      $mdgriffith$elm_ui$Element$el,
      _List_fromArray(
        [
          $mdgriffith$elm_ui$Element$Font$color(
            $author$project$Color$base($author$project$Color$red)
          ),
          $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm),
          $mdgriffith$elm_ui$Element$height(
            A2($mdgriffith$elm_ui$Element$minimum, 16, $mdgriffith$elm_ui$Element$fill)
          )
        ]
      ),
      $mdgriffith$elm_ui$Element$text(
        A2($elm$core$Maybe$withDefault, "", maybeString)
      )
    );
    var _v0 = device.A;
    if (!_v0) {
      return err;
    } else {
      return A2(
        $mdgriffith$elm_ui$Element$row,
        _List_Nil,
        _List_fromArray(
          [
            A2(
              $mdgriffith$elm_ui$Element$el,
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$width(
                    $mdgriffith$elm_ui$Element$px(250)
                  )
                ]
              ),
              $mdgriffith$elm_ui$Element$none
            ),
            err
          ]
        )
      );
    }
  }
);
var $mdgriffith$elm_ui$Element$fillPortion = $mdgriffith$elm_ui$Internal$Model$Fill;
var $mdgriffith$elm_ui$Internal$Flag$bgGradient = $mdgriffith$elm_ui$Internal$Flag$flag(10);
var $mdgriffith$elm_ui$Element$Background$gradient = function(_v0) {
  var angle = _v0.aT;
  var steps = _v0.a9;
  if (!steps.b) {
    return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
  } else {
    if (!steps.b.b) {
      var clr = steps.a;
      return A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$bgColor,
        A3(
          $mdgriffith$elm_ui$Internal$Model$Colored,
          "bg-" + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
          "background-color",
          clr
        )
      );
    } else {
      return A2(
        $mdgriffith$elm_ui$Internal$Model$StyleClass,
        $mdgriffith$elm_ui$Internal$Flag$bgGradient,
        A3(
          $mdgriffith$elm_ui$Internal$Model$Single,
          "bg-grad-" + A2(
            $elm$core$String$join,
            "-",
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Internal$Model$floatClass(angle),
              A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColorClass, steps)
            )
          ),
          "background-image",
          "linear-gradient(" + (A2(
            $elm$core$String$join,
            ", ",
            A2(
              $elm$core$List$cons,
              $elm$core$String$fromFloat(angle) + "rad",
              A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColor, steps)
            )
          ) + ")")
        )
      );
    }
  }
};
var $author$project$Atom$horizontalDividerGradient = function(config) {
  return A2(
    $mdgriffith$elm_ui$Element$el,
    _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$height(
          $mdgriffith$elm_ui$Element$px(1)
        ),
        $mdgriffith$elm_ui$Element$Background$gradient(config),
        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
      ]
    ),
    $mdgriffith$elm_ui$Element$text(" ")
  );
};
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$html$Html$input = _VirtualDom_node("input");
var $author$project$Contact$labelAttrs = function(device) {
  var _v0 = device.A;
  if (!_v0) {
    return _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base),
        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
      ]
    );
  } else {
    return _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base),
        $mdgriffith$elm_ui$Element$width(
          $mdgriffith$elm_ui$Element$px(250)
        ),
        A2($mdgriffith$elm_ui$Element$paddingXY, 10, 0),
        $mdgriffith$elm_ui$Element$centerY
      ]
    );
  }
};
var $mdgriffith$elm_ui$Element$Input$Label = F3(
  function(a, b, c) {
    return { $: 0, a, b, c };
  }
);
var $mdgriffith$elm_ui$Element$Input$labelAbove = $mdgriffith$elm_ui$Element$Input$Label(2);
var $mdgriffith$elm_ui$Element$Input$labelLeft = $mdgriffith$elm_ui$Element$Input$Label(1);
var $author$project$Contact$labelTag = F2(
  function(bgColor, tag) {
    return A2(
      $mdgriffith$elm_ui$Element$el,
      _List_fromArray(
        [
          $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm),
          $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
          $mdgriffith$elm_ui$Element$Background$color(bgColor),
          A2($mdgriffith$elm_ui$Element$paddingXY, 4, 4)
        ]
      ),
      $mdgriffith$elm_ui$Element$text(tag)
    );
  }
);
var $author$project$Contact$labelBase = F2(
  function(_v0, device) {
    var labelString = _v0.a0;
    var bgColor = _v0.aU;
    var tag = _v0.bb;
    var row_ = A2(
      $mdgriffith$elm_ui$Element$row,
      _List_fromArray(
        [
          A2($mdgriffith$elm_ui$Element$spacingXY, 4, 0),
          $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
        ]
      ),
      _List_fromArray(
        [
          A2(
            $mdgriffith$elm_ui$Element$el,
            _List_fromArray(
              [$mdgriffith$elm_ui$Element$alignLeft]
            ),
            $mdgriffith$elm_ui$Element$text(labelString)
          ),
          A2(
            $mdgriffith$elm_ui$Element$el,
            _List_fromArray(
              [$mdgriffith$elm_ui$Element$alignRight]
            ),
            A2($author$project$Contact$labelTag, bgColor, tag)
          )
        ]
      )
    );
    var _v1 = device.A;
    if (!_v1) {
      return A2(
        $mdgriffith$elm_ui$Element$Input$labelAbove,
        $author$project$Contact$labelAttrs(device),
        row_
      );
    } else {
      return A2(
        $mdgriffith$elm_ui$Element$Input$labelLeft,
        $author$project$Contact$labelAttrs(device),
        row_
      );
    }
  }
);
var $author$project$Contact$labelOptional = function(l) {
  return $author$project$Contact$labelBase(
    {
      aU: $author$project$Color$light($author$project$Color$teal),
      a0: l,
      bb: "任意"
    }
  );
};
var $author$project$Contact$labelRequired = function(l) {
  return $author$project$Contact$labelBase(
    {
      aU: $author$project$Color$light($author$project$Color$red),
      a0: l,
      bb: "必須"
    }
  );
};
var $mdgriffith$elm_ui$Element$Input$labelRight = $mdgriffith$elm_ui$Element$Input$Label(0);
var $mdgriffith$elm_ui$Element$Input$multiline = F2(
  function(attrs, multi) {
    return A3(
      $mdgriffith$elm_ui$Element$Input$textHelper,
      { v: $elm$core$Maybe$Nothing, z: multi.dM, o: $mdgriffith$elm_ui$Element$Input$TextArea },
      attrs,
      { n: multi.n, al: multi.al, au: multi.au, ax: multi.ax }
    );
  }
);
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty("name");
var $elm$html$Html$Attributes$href = function(url) {
  return A2(
    $elm$html$Html$Attributes$stringProperty,
    "href",
    _VirtualDom_noJavaScriptUri(url)
  );
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute("rel");
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty("target");
var $mdgriffith$elm_ui$Element$newTabLink = F2(
  function(attrs, _v0) {
    var url = _v0.b8;
    var label = _v0.n;
    return A4(
      $mdgriffith$elm_ui$Internal$Model$element,
      $mdgriffith$elm_ui$Internal$Model$asEl,
      $mdgriffith$elm_ui$Internal$Model$NodeName("a"),
      A2(
        $elm$core$List$cons,
        $mdgriffith$elm_ui$Internal$Model$Attr(
          $elm$html$Html$Attributes$href(url)
        ),
        A2(
          $elm$core$List$cons,
          $mdgriffith$elm_ui$Internal$Model$Attr(
            $elm$html$Html$Attributes$rel("noopener noreferrer")
          ),
          A2(
            $elm$core$List$cons,
            $mdgriffith$elm_ui$Internal$Model$Attr(
              $elm$html$Html$Attributes$target("_blank")
            ),
            A2(
              $elm$core$List$cons,
              $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
              A2(
                $elm$core$List$cons,
                $mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
                A2(
                  $elm$core$List$cons,
                  $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aI + (" " + ($mdgriffith$elm_ui$Internal$Style$classes.M + (" " + $mdgriffith$elm_ui$Internal$Style$classes.bF)))),
                  attrs
                )
              )
            )
          )
        )
      ),
      $mdgriffith$elm_ui$Internal$Model$Unkeyed(
        _List_fromArray(
          [label]
        )
      )
    );
  }
);
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
  function(a, b) {
    return { $: 0, a, b };
  }
);
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
  {
    v: $elm$core$Maybe$Nothing,
    z: false,
    o: $mdgriffith$elm_ui$Element$Input$TextInputNode("text")
  }
);
var $author$project$Contact$DragEnter = { $: 6 };
var $author$project$Contact$DragLeave = { $: 7 };
var $author$project$Contact$Pick = { $: 5 };
var $mdgriffith$elm_ui$Element$Border$dashed = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.cB);
var $elm$file$File$decoder = _File_decoder;
var $elm$json$Json$Decode$oneOrMoreHelp = F2(
  function(toValue, xs) {
    if (!xs.b) {
      return $elm$json$Json$Decode$fail("a ARRAY with at least ONE element");
    } else {
      var y = xs.a;
      var ys = xs.b;
      return $elm$json$Json$Decode$succeed(
        A2(toValue, y, ys)
      );
    }
  }
);
var $elm$json$Json$Decode$oneOrMore = F2(
  function(toValue, decoder) {
    return A2(
      $elm$json$Json$Decode$andThen,
      $elm$json$Json$Decode$oneOrMoreHelp(toValue),
      $elm$json$Json$Decode$list(decoder)
    );
  }
);
var $author$project$Contact$dropDecoder = A2(
  $elm$json$Json$Decode$at,
  _List_fromArray(
    ["dataTransfer", "files"]
  ),
  A2($elm$json$Json$Decode$oneOrMore, $author$project$Contact$GotFiles, $elm$file$File$decoder)
);
var $author$project$Contact$hijack = function(msg) {
  return _Utils_Tuple2(msg, true);
};
var $author$project$Contact$hijackOn = F2(
  function(e, d) {
    return A2(
      $elm$html$Html$Events$preventDefaultOn,
      e,
      A2($elm$json$Json$Decode$map, $author$project$Contact$hijack, d)
    );
  }
);
var $author$project$Atom$Font$lg = $elm$core$Basics$round($author$project$Atom$Font$base * 1.125);
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
  function(a, b) {
    return { $: 11, a, b };
  }
);
var $mdgriffith$elm_ui$Internal$Flag$hover = $mdgriffith$elm_ui$Internal$Flag$flag(33);
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
  function(fn, attr) {
    switch (attr.$) {
      case 0:
        return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
      case 2:
        var description = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$Describe(description);
      case 6:
        var x = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
      case 5:
        var y = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
      case 7:
        var x = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$Width(x);
      case 8:
        var x = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$Height(x);
      case 3:
        var x = attr.a;
        var y = attr.b;
        return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
      case 4:
        var flag = attr.a;
        var style2 = attr.b;
        return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style2);
      case 9:
        var location = attr.a;
        var elem = attr.b;
        return A2(
          $mdgriffith$elm_ui$Internal$Model$Nearby,
          location,
          A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem)
        );
      case 1:
        var htmlAttr = attr.a;
        return $mdgriffith$elm_ui$Internal$Model$Attr(
          A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr)
        );
      default:
        var fl = attr.a;
        var trans = attr.b;
        return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$removeNever = function(style2) {
  return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style2);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
  function(attr, _v0) {
    var styles = _v0.a;
    var trans = _v0.b;
    var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
    switch (_v1.$) {
      case 4:
        var style2 = _v1.b;
        return _Utils_Tuple2(
          A2($elm$core$List$cons, style2, styles),
          trans
        );
      case 10:
        _v1.a;
        var component = _v1.b;
        return _Utils_Tuple2(
          styles,
          A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component)
        );
      default:
        return _Utils_Tuple2(styles, trans);
    }
  }
);
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function(attrs) {
  var _v0 = A3(
    $elm$core$List$foldl,
    $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
    _Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
    attrs
  );
  var styles = _v0.a;
  var transform = _v0.b;
  return A2(
    $elm$core$List$cons,
    $mdgriffith$elm_ui$Internal$Model$Transform(transform),
    styles
  );
};
var $mdgriffith$elm_ui$Element$mouseOver = function(decs) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$StyleClass,
    $mdgriffith$elm_ui$Internal$Flag$hover,
    A2(
      $mdgriffith$elm_ui$Internal$Model$PseudoSelector,
      1,
      $mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)
    )
  );
};
var $mdgriffith$elm_ui$Internal$Model$Scale = function(a) {
  return { $: 5, a };
};
var $mdgriffith$elm_ui$Internal$Flag$scale = $mdgriffith$elm_ui$Internal$Flag$flag(23);
var $mdgriffith$elm_ui$Element$scale = function(n) {
  return A2(
    $mdgriffith$elm_ui$Internal$Model$TransformComponent,
    $mdgriffith$elm_ui$Internal$Flag$scale,
    $mdgriffith$elm_ui$Internal$Model$Scale(
      _Utils_Tuple3(n, n, 1)
    )
  );
};
var $author$project$Contact$Enlarge = function(a) {
  return { $: 12, a };
};
var $author$project$Contact$imageSize = 128;
var $elm$html$Html$img = _VirtualDom_node("img");
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS("http://www.w3.org/2000/svg");
var $elm$svg$Svg$animateTransform = $elm$svg$Svg$trustedNode("animateTransform");
var $elm$svg$Svg$Attributes$attributeName = _VirtualDom_attribute("attributeName");
var $elm$svg$Svg$Attributes$attributeType = _VirtualDom_attribute("attributeType");
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute("d");
var $elm$svg$Svg$Attributes$dur = _VirtualDom_attribute("dur");
var $elm$svg$Svg$Attributes$enableBackground = _VirtualDom_attribute("enable-background");
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute("fill");
var $elm$svg$Svg$Attributes$from = function(value) {
  return A2(
    _VirtualDom_attribute,
    "from",
    _VirtualDom_noJavaScriptUri(value)
  );
};
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute("height");
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute("id");
var $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute("opacity");
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode("path");
var $elm$svg$Svg$Attributes$repeatCount = _VirtualDom_attribute("repeatCount");
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode("svg");
var $elm$svg$Svg$Attributes$to = function(value) {
  return A2(
    _VirtualDom_attribute,
    "to",
    _VirtualDom_noJavaScriptUri(value)
  );
};
var $elm$svg$Svg$Attributes$type_ = _VirtualDom_attribute("type");
var $elm$svg$Svg$Attributes$version = _VirtualDom_attribute("version");
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute("viewBox");
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute("width");
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute("x");
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute("y");
var $author$project$Icon$loading = function(size) {
  return A2(
    $elm$svg$Svg$svg,
    _List_fromArray(
      [
        $elm$svg$Svg$Attributes$version("1.1"),
        $elm$svg$Svg$Attributes$id("loader-1"),
        $elm$svg$Svg$Attributes$x("0px"),
        $elm$svg$Svg$Attributes$y("0px"),
        $elm$svg$Svg$Attributes$width(
          $elm$core$String$fromInt(size) + "px"
        ),
        $elm$svg$Svg$Attributes$height(
          $elm$core$String$fromInt(size) + "px"
        ),
        $elm$svg$Svg$Attributes$viewBox("0 0 40 40"),
        $elm$svg$Svg$Attributes$enableBackground("new 0 0 40 40")
      ]
    ),
    _List_fromArray(
      [
        A2(
          $elm$svg$Svg$path,
          _List_fromArray(
            [
              $elm$svg$Svg$Attributes$opacity("0.2"),
              $elm$svg$Svg$Attributes$fill("#000"),
              $elm$svg$Svg$Attributes$d("M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z")
            ]
          ),
          _List_Nil
        ),
        A2(
          $elm$svg$Svg$path,
          _List_fromArray(
            [
              $elm$svg$Svg$Attributes$fill("#000"),
              $elm$svg$Svg$Attributes$d("M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z")
            ]
          ),
          _List_fromArray(
            [
              A2(
                $elm$svg$Svg$animateTransform,
                _List_fromArray(
                  [
                    $elm$svg$Svg$Attributes$attributeType("xml"),
                    $elm$svg$Svg$Attributes$attributeName("transform"),
                    $elm$svg$Svg$Attributes$type_("rotate"),
                    $elm$svg$Svg$Attributes$from("0 20 20"),
                    $elm$svg$Svg$Attributes$to("360 20 20"),
                    $elm$svg$Svg$Attributes$dur("0.5s"),
                    $elm$svg$Svg$Attributes$repeatCount("indefinite")
                  ]
                ),
                _List_Nil
              )
            ]
          )
        )
      ]
    )
  );
};
var $author$project$Contact$viewPreviewFile = F3(
  function(device, index, src) {
    if (src === "") {
      return A2(
        $mdgriffith$elm_ui$Element$el,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$width(
              $mdgriffith$elm_ui$Element$px($author$project$Contact$imageSize)
            ),
            $mdgriffith$elm_ui$Element$height(
              $mdgriffith$elm_ui$Element$px($author$project$Contact$imageSize)
            ),
            $mdgriffith$elm_ui$Element$Border$solid,
            $mdgriffith$elm_ui$Element$Border$width(1)
          ]
        ),
        A2(
          $mdgriffith$elm_ui$Element$el,
          _List_fromArray(
            [$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]
          ),
          $mdgriffith$elm_ui$Element$html(
            $author$project$Icon$loading(100)
          )
        )
      );
    } else {
      var imageCell = function(w) {
        return $mdgriffith$elm_ui$Element$html(
          A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$class(w + " p-1 text-center")
              ]
            ),
            _List_fromArray(
              [
                A2(
                  $elm$html$Html$img,
                  _List_fromArray(
                    [
                      $elm$html$Html$Attributes$src(src),
                      $elm$html$Html$Attributes$class("object-contain"),
                      A2($elm$html$Html$Attributes$style, "height", "160px"),
                      $elm$html$Html$Events$onClick(
                        $author$project$Contact$Enlarge(index)
                      )
                    ]
                  ),
                  _List_Nil
                )
              ]
            )
          )
        );
      };
      var _v0 = device.A;
      if (!_v0) {
        return imageCell("w-1/2");
      } else {
        return imageCell("w-1/5");
      }
    }
  }
);
var $author$project$Color$yellow = function(lightness) {
  switch (lightness) {
    case 0:
      return A3($mdgriffith$elm_ui$Element$rgb255, 69, 52, 17);
    case 1:
      return A3($mdgriffith$elm_ui$Element$rgb255, 104, 79, 29);
    case 2:
      return A3($mdgriffith$elm_ui$Element$rgb255, 242, 208, 36);
    case 3:
      return A3($mdgriffith$elm_ui$Element$rgb255, 255, 237, 74);
    case 4:
      return A3($mdgriffith$elm_ui$Element$rgb255, 255, 243, 130);
    case 5:
      return A3($mdgriffith$elm_ui$Element$rgb255, 255, 249, 194);
    default:
      return A3($mdgriffith$elm_ui$Element$rgb255, 252, 251, 235);
  }
};
var $author$project$Contact$viewUpload = F2(
  function(device, model) {
    var uploadButton = function(l) {
      return A2(
        $mdgriffith$elm_ui$Element$Input$button,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$width(
              $mdgriffith$elm_ui$Element$px(256)
            ),
            $mdgriffith$elm_ui$Element$Border$color(
              $author$project$Color$base($author$project$Color$teal)
            ),
            $mdgriffith$elm_ui$Element$Border$width(2),
            $mdgriffith$elm_ui$Element$Border$rounded(2),
            A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
            $mdgriffith$elm_ui$Element$mouseOver(
              _List_fromArray(
                [
                  $mdgriffith$elm_ui$Element$Border$color(
                    $author$project$Color$base($author$project$Color$teal)
                  ),
                  $mdgriffith$elm_ui$Element$Background$color(
                    $author$project$Color$base($author$project$Color$teal)
                  ),
                  $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white)
                ]
              )
            )
          ]
        ),
        {
          n: A2(
            $mdgriffith$elm_ui$Element$el,
            _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$centerX,
                $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
              ]
            ),
            $mdgriffith$elm_ui$Element$text(l)
          ),
          Z: $elm$core$Maybe$Just($author$project$Contact$Pick)
        }
      );
    };
    var dropStyles = model.aj ? _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Border$color(
          $author$project$Color$dark($author$project$Color$yellow)
        ),
        $mdgriffith$elm_ui$Element$Background$color(
          $author$project$Color$lighter($author$project$Color$yellow)
        ),
        $mdgriffith$elm_ui$Element$scale(1.05)
      ]
    ) : _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Border$color(
          $author$project$Color$dark($author$project$Color$grey)
        )
      ]
    );
    if (_Utils_eq(model.t.f, _List_Nil)) {
      var _v0 = device.A;
      if (!_v0) {
        return A2(
          $mdgriffith$elm_ui$Element$el,
          _List_fromArray(
            [$mdgriffith$elm_ui$Element$centerX]
          ),
          uploadButton("画像のアップロード")
        );
      } else {
        return A2(
          $mdgriffith$elm_ui$Element$el,
          _Utils_ap(
            _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                $mdgriffith$elm_ui$Element$height(
                  $mdgriffith$elm_ui$Element$px(256)
                ),
                $mdgriffith$elm_ui$Element$Border$dashed,
                $mdgriffith$elm_ui$Element$Border$width(2),
                $mdgriffith$elm_ui$Element$spacing(10),
                $mdgriffith$elm_ui$Element$centerX,
                $mdgriffith$elm_ui$Element$centerY,
                $mdgriffith$elm_ui$Element$htmlAttribute(
                  A2(
                    $author$project$Contact$hijackOn,
                    "dragenter",
                    $elm$json$Json$Decode$succeed($author$project$Contact$DragEnter)
                  )
                ),
                $mdgriffith$elm_ui$Element$htmlAttribute(
                  A2(
                    $author$project$Contact$hijackOn,
                    "dragover",
                    $elm$json$Json$Decode$succeed($author$project$Contact$DragEnter)
                  )
                ),
                $mdgriffith$elm_ui$Element$htmlAttribute(
                  A2(
                    $author$project$Contact$hijackOn,
                    "dragleave",
                    $elm$json$Json$Decode$succeed($author$project$Contact$DragLeave)
                  )
                ),
                $mdgriffith$elm_ui$Element$htmlAttribute(
                  A2($author$project$Contact$hijackOn, "drop", $author$project$Contact$dropDecoder)
                )
              ]
            ),
            dropStyles
          ),
          A2(
            $mdgriffith$elm_ui$Element$column,
            _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$spacing(16),
                $mdgriffith$elm_ui$Element$centerX,
                $mdgriffith$elm_ui$Element$centerY
              ]
            ),
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_ui$Element$el,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$centerX,
                      $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$lg)
                    ]
                  ),
                  $mdgriffith$elm_ui$Element$text("ドラッグアンドドロップ")
                ),
                uploadButton("画像のアップロード"),
                A2(
                  $mdgriffith$elm_ui$Element$el,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_ui$Element$centerX,
                      $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm)
                    ]
                  ),
                  $mdgriffith$elm_ui$Element$text("10枚まで")
                )
              ]
            )
          )
        );
      }
    } else {
      return A2(
        $mdgriffith$elm_ui$Element$wrappedRow,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
          ]
        ),
        function() {
          if ($elm$core$List$length(model.t.f) >= 10) {
            return A2(
              $elm$core$List$indexedMap,
              $author$project$Contact$viewPreviewFile(device),
              model.t.f
            );
          } else {
            var restLabel = "残り" + ($elm$core$String$fromInt(
              10 - $elm$core$List$length(model.t.f)
            ) + "枚登録可能");
            var uploader = function() {
              var _v1 = device.A;
              if (!_v1) {
                return A2(
                  $mdgriffith$elm_ui$Element$el,
                  _List_fromArray(
                    [$mdgriffith$elm_ui$Element$centerX]
                  ),
                  uploadButton(restLabel)
                );
              } else {
                return A2(
                  $mdgriffith$elm_ui$Element$el,
                  _Utils_ap(
                    _List_fromArray(
                      [
                        $mdgriffith$elm_ui$Element$htmlAttribute(
                          A2(
                            $author$project$Contact$hijackOn,
                            "dragenter",
                            $elm$json$Json$Decode$succeed($author$project$Contact$DragEnter)
                          )
                        ),
                        $mdgriffith$elm_ui$Element$htmlAttribute(
                          A2(
                            $author$project$Contact$hijackOn,
                            "dragover",
                            $elm$json$Json$Decode$succeed($author$project$Contact$DragEnter)
                          )
                        ),
                        $mdgriffith$elm_ui$Element$htmlAttribute(
                          A2(
                            $author$project$Contact$hijackOn,
                            "dragleave",
                            $elm$json$Json$Decode$succeed($author$project$Contact$DragLeave)
                          )
                        ),
                        $mdgriffith$elm_ui$Element$htmlAttribute(
                          A2($author$project$Contact$hijackOn, "drop", $author$project$Contact$dropDecoder)
                        ),
                        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                        $mdgriffith$elm_ui$Element$padding(8)
                      ]
                    ),
                    dropStyles
                  ),
                  A2(
                    $mdgriffith$elm_ui$Element$Input$button,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                        $mdgriffith$elm_ui$Element$height(
                          $mdgriffith$elm_ui$Element$px(160)
                        ),
                        $mdgriffith$elm_ui$Element$Border$dashed,
                        $mdgriffith$elm_ui$Element$Border$color(
                          $author$project$Color$dark($author$project$Color$grey)
                        ),
                        $mdgriffith$elm_ui$Element$Border$width(2),
                        $mdgriffith$elm_ui$Element$mouseOver(
                          _List_fromArray(
                            [
                              $mdgriffith$elm_ui$Element$Border$color(
                                $author$project$Color$dark($author$project$Color$yellow)
                              )
                            ]
                          )
                        )
                      ]
                    ),
                    {
                      n: A2(
                        $mdgriffith$elm_ui$Element$column,
                        _List_fromArray(
                          [
                            $mdgriffith$elm_ui$Element$centerX,
                            $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
                          ]
                        ),
                        _List_fromArray(
                          [
                            $mdgriffith$elm_ui$Element$text(restLabel)
                          ]
                        )
                      ),
                      Z: $elm$core$Maybe$Just($author$project$Contact$Pick)
                    }
                  )
                );
              }
            }();
            return _Utils_ap(
              A2(
                $elm$core$List$indexedMap,
                $author$project$Contact$viewPreviewFile(device),
                model.t.f
              ),
              _List_fromArray(
                [uploader]
              )
            );
          }
        }()
      );
    }
  }
);
var $author$project$Contact$viewForm = F2(
  function(device, model) {
    var form = model.t;
    var submitted = model.av;
    var fieldError = F2(
      function(errorToString, d) {
        var _v0 = A2($arowM$elm_form_decoder$Form$Decoder$run, d, form);
        if (!_v0.$) {
          return $elm$core$Maybe$Nothing;
        } else {
          var errs = _v0.a;
          return submitted ? $elm$core$Maybe$Just(
            $elm$core$String$concat(
              A2($elm$core$List$map, errorToString, errs)
            )
          ) : $elm$core$Maybe$Nothing;
        }
      }
    );
    return _List_fromArray(
      [
        A2(
          $mdgriffith$elm_ui$Element$el,
          _List_Nil,
          $mdgriffith$elm_ui$Element$text("送信にあたっての注意")
        ),
        $author$project$Atom$horizontalDividerGradient(
          {
            aT: 90,
            a9: _List_fromArray(
              [
                $author$project$Color$base($author$project$Color$red),
                $author$project$Color$light($author$project$Color$grey)
              ]
            )
          }
        ),
        A2(
          $mdgriffith$elm_ui$Element$paragraph,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
            ]
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$text("お問い合わせ内容によっては、回答にお時間がかかる場合や、回答を差し控えさせていただく場合がございます。また、定休日、夏期休業および冬期休業期間は、翌営業日以降のご対応とさせていただきます。")
            ]
          )
        ),
        A2(
          $mdgriffith$elm_ui$Element$paragraph,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
            ]
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$text("スマホなどでキャリアメールをご利用の場合、当社からの返信メールが受信できるように、当社のメールアドレス"),
              A2(
                $mdgriffith$elm_ui$Element$el,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$Font$color(
                      $author$project$Color$dark($author$project$Color$teal)
                    ),
                    A2($mdgriffith$elm_ui$Element$paddingXY, 10, 0)
                  ]
                ),
                $mdgriffith$elm_ui$Element$text("info@officeiko.co.jp")
              ),
              $mdgriffith$elm_ui$Element$text("を迷惑メールフィルタから除外してください。")
            ]
          )
        ),
        A2(
          $mdgriffith$elm_ui$Element$el,
          _List_Nil,
          $mdgriffith$elm_ui$Element$text("お問い合わせ入力欄")
        ),
        $author$project$Atom$horizontalDividerGradient(
          {
            aT: 90,
            a9: _List_fromArray(
              [
                $author$project$Color$base($author$project$Color$red),
                $author$project$Color$light($author$project$Color$grey)
              ]
            )
          }
        ),
        A2(
          $mdgriffith$elm_ui$Element$paragraph,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
            ]
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$text("下記のフォームに必要事項をご記入のうえ、確認ボタンを押してください。"),
              A2(
                $author$project$Contact$labelTag,
                $author$project$Color$light($author$project$Color$red),
                "必須"
              ),
              $mdgriffith$elm_ui$Element$text("のついた項目は必ずご入力してください。")
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        $mdgriffith$elm_ui$Element$html(
          A2(
            $elm$html$Html$input,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$type_("hidden"),
                $elm$html$Html$Attributes$name("bot-field")
              ]
            ),
            _List_Nil
          )
        ),
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$text,
                $elm$core$List$concat(
                  _List_fromArray(
                    [
                      $author$project$Contact$errorField(
                        A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderName)
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Border$rounded(0),
                          $mdgriffith$elm_ui$Element$width(
                            $mdgriffith$elm_ui$Element$fillPortion(2)
                          )
                        ]
                      )
                    ]
                  )
                ),
                {
                  n: A2($author$project$Contact$labelRequired, "お名前（漢字）", device),
                  al: $author$project$Contact$ChangedName,
                  au: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_ui$Element$Input$placeholder,
                      _List_Nil,
                      $mdgriffith$elm_ui$Element$text("田中　太郎")
                    )
                  ),
                  ax: form.H
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderName),
                device
              )
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$text,
                $elm$core$List$concat(
                  _List_fromArray(
                    [
                      $author$project$Contact$errorField(
                        A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderKana)
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Border$rounded(4)
                        ]
                      )
                    ]
                  )
                ),
                {
                  n: A2($author$project$Contact$labelRequired, "お名前（ふりがな）", device),
                  al: $author$project$Contact$ChangedKana,
                  au: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_ui$Element$Input$placeholder,
                      _List_Nil,
                      $mdgriffith$elm_ui$Element$text("たなか　たろう")
                    )
                  ),
                  ax: form.F
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderKana),
                device
              )
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$text,
                $elm$core$List$concat(
                  _List_fromArray(
                    [
                      $author$project$Contact$errorField(
                        A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderTel)
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Border$rounded(4)
                        ]
                      )
                    ]
                  )
                ),
                {
                  n: A2($author$project$Contact$labelOptional, "電話番号", device),
                  al: $author$project$Contact$ChangedTel,
                  au: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_ui$Element$Input$placeholder,
                      _List_Nil,
                      $mdgriffith$elm_ui$Element$text("090-1234-5678")
                    )
                  ),
                  ax: form.I
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderTel),
                device
              )
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$email,
                $elm$core$List$concat(
                  _List_fromArray(
                    [
                      $author$project$Contact$errorField(
                        A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderEmail)
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Border$rounded(4)
                        ]
                      )
                    ]
                  )
                ),
                {
                  n: A2($author$project$Contact$labelRequired, "メールアドレス", device),
                  al: $author$project$Contact$ChangedEmail,
                  au: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_ui$Element$Input$placeholder,
                      _List_Nil,
                      $mdgriffith$elm_ui$Element$text("tanaka@gmail.com")
                    )
                  ),
                  ax: form.E
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderEmail),
                device
              )
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$multiline,
                $elm$core$List$concat(
                  _List_fromArray(
                    [
                      $author$project$Contact$errorField(
                        A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderContent)
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Border$rounded(4),
                          $mdgriffith$elm_ui$Element$height(
                            $mdgriffith$elm_ui$Element$px(200)
                          )
                        ]
                      )
                    ]
                  )
                ),
                {
                  n: A2($author$project$Contact$labelRequired, "内容", device),
                  al: $author$project$Contact$ChangedContent,
                  au: $elm$core$Maybe$Nothing,
                  dM: false,
                  ax: form.C
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                A2(fieldError, $author$project$Error$errorField, $author$project$Contact$decoderContent),
                device
              )
            ]
          )
        ),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$labelAttrs(device),
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$row,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base),
                    A2($mdgriffith$elm_ui$Element$spacingXY, 4, 0),
                    $mdgriffith$elm_ui$Element$centerY,
                    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
                  ]
                ),
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_ui$Element$el,
                      _List_fromArray(
                        [$mdgriffith$elm_ui$Element$alignLeft]
                      ),
                      $mdgriffith$elm_ui$Element$text("画像")
                    ),
                    A2(
                      $mdgriffith$elm_ui$Element$el,
                      _List_fromArray(
                        [$mdgriffith$elm_ui$Element$alignRight]
                      ),
                      A2(
                        $author$project$Contact$labelTag,
                        $author$project$Color$light($author$project$Color$teal),
                        "任意"
                      )
                    )
                  ]
                )
              ),
              A2(
                $mdgriffith$elm_ui$Element$paragraph,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
                    $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm),
                    $mdgriffith$elm_ui$Element$Font$color(
                      $author$project$Color$dark($author$project$Color$grey)
                    )
                  ]
                ),
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$text("10枚まで添付可能です")
                  ]
                )
              )
            ]
          )
        ),
        A2($author$project$Contact$viewUpload, device, model),
        $author$project$Atom$horizontalDivider,
        A2(
          $mdgriffith$elm_ui$Element$el,
          _List_Nil,
          $mdgriffith$elm_ui$Element$text("個人情報のお取り扱いについて")
        ),
        $author$project$Atom$horizontalDividerGradient(
          {
            aT: 90,
            a9: _List_fromArray(
              [
                $author$project$Color$base($author$project$Color$red),
                $author$project$Color$light($author$project$Color$grey)
              ]
            )
          }
        ),
        A2(
          $mdgriffith$elm_ui$Element$paragraph,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$padding(5),
              $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
              $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$sm)
            ]
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$text("お送りいただいた個人情報は、お客様とのご連絡等の目的以外では使用致しません。当社の"),
              A2(
                $mdgriffith$elm_ui$Element$newTabLink,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$Font$color(
                      $author$project$Color$light($author$project$Color$red)
                    )
                  ]
                ),
                {
                  n: $mdgriffith$elm_ui$Element$text("プライバシーポリシー"),
                  b8: "/privacy"
                }
              ),
              $mdgriffith$elm_ui$Element$text("をご確認いただき、同意いただいた上でご送信ください。ご入力いただいた情報は暗号化されて送信されます。")
            ]
          )
        ),
        A2(
          $mdgriffith$elm_ui$Element$column,
          $author$project$Contact$decoInputField,
          _List_fromArray(
            [
              A2(
                $mdgriffith$elm_ui$Element$Input$checkbox,
                _List_fromArray(
                  [
                    $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
                    $mdgriffith$elm_ui$Element$centerX
                  ]
                ),
                {
                  cK: form.ae,
                  c3: $mdgriffith$elm_ui$Element$Input$defaultCheckbox,
                  n: A2(
                    $mdgriffith$elm_ui$Element$Input$labelRight,
                    _List_Nil,
                    A2(
                      $mdgriffith$elm_ui$Element$el,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$base)
                        ]
                      ),
                      $mdgriffith$elm_ui$Element$text("プライバシーポリシーに同意する")
                    )
                  ),
                  al: $author$project$Contact$ClickedAgreement
                }
              ),
              A2(
                $author$project$Contact$errorTip,
                form.ae ? $elm$core$Maybe$Nothing : !submitted ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just("プラバシーポリシーへの同意が認められておりません。"),
                device
              )
            ]
          )
        ),
        A2(
          $mdgriffith$elm_ui$Element$el,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$centerX,
              $mdgriffith$elm_ui$Element$padding(20)
            ]
          ),
          A2(
            $mdgriffith$elm_ui$Element$Input$button,
            _List_fromArray(
              [
                $mdgriffith$elm_ui$Element$Background$color(
                  $author$project$Color$base($author$project$Color$teal)
                ),
                $mdgriffith$elm_ui$Element$Border$rounded(4),
                $mdgriffith$elm_ui$Element$Border$color(
                  $author$project$Color$base($author$project$Color$teal)
                ),
                $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
                A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
                $mdgriffith$elm_ui$Element$width(
                  $mdgriffith$elm_ui$Element$px(256)
                )
              ]
            ),
            {
              n: A2(
                $mdgriffith$elm_ui$Element$el,
                _List_fromArray(
                  [$mdgriffith$elm_ui$Element$centerX]
                ),
                $mdgriffith$elm_ui$Element$text("確認")
              ),
              Z: $elm$core$Maybe$Just($author$project$Contact$ClickedConfirm)
            }
          )
        )
      ]
    );
  }
);
var $author$project$Spinner$view = function(color) {
  return A2(
    $elm$svg$Svg$svg,
    _List_fromArray(
      [
        $elm$svg$Svg$Attributes$width("50"),
        $elm$svg$Svg$Attributes$height("50"),
        $elm$svg$Svg$Attributes$viewBox("0 0 50 50")
      ]
    ),
    _List_fromArray(
      [
        A2(
          $elm$svg$Svg$path,
          _List_fromArray(
            [
              $elm$svg$Svg$Attributes$fill(color),
              $elm$svg$Svg$Attributes$d("M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z")
            ]
          ),
          _List_fromArray(
            [
              A2(
                $elm$svg$Svg$animateTransform,
                _List_fromArray(
                  [
                    $elm$svg$Svg$Attributes$attributeName("transform"),
                    $elm$svg$Svg$Attributes$type_("rotate"),
                    $elm$svg$Svg$Attributes$from("0 25 25"),
                    $elm$svg$Svg$Attributes$to("360 25 25"),
                    $elm$svg$Svg$Attributes$dur("0.5s"),
                    $elm$svg$Svg$Attributes$repeatCount("indefinite")
                  ]
                ),
                _List_Nil
              )
            ]
          )
        )
      ]
    )
  );
};
var $author$project$Contact$viewLoading = function(src) {
  return $mdgriffith$elm_ui$Element$html(
    A2(
      $elm$html$Html$div,
      _List_fromArray(
        [
          $elm$html$Html$Attributes$class("fixed inset-0 z-50 overflow-auto bg-smoke-500 flex flex-col items-center justify-center")
        ]
      ),
      _List_fromArray(
        [
          A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$class("py-4")
              ]
            ),
            _List_fromArray(
              [
                $author$project$Spinner$view("#F2D024")
              ]
            )
          ),
          A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$class("py-4 text-yellow-600 text-2xl")
              ]
            ),
            _List_fromArray(
              [
                $elm$html$Html$text("送信中...")
              ]
            )
          )
        ]
      )
    )
  );
};
var $author$project$Contact$alwaysStopPropagate = function(msg) {
  return _Utils_Tuple2(msg, true);
};
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute("class");
var $author$project$Icon$close = A2(
  $elm$svg$Svg$svg,
  _List_fromArray(
    [
      $elm$svg$Svg$Attributes$class("h-12 w-12 fill-current text-grey hover:text-grey-darkest"),
      $elm$svg$Svg$Attributes$version("1.1"),
      $elm$svg$Svg$Attributes$viewBox("0 0 20 20")
    ]
  ),
  _List_fromArray(
    [
      A2(
        $elm$svg$Svg$path,
        _List_fromArray(
          [
            $elm$svg$Svg$Attributes$d("M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z")
          ]
        ),
        _List_Nil
      )
    ]
  )
);
var $author$project$Contact$viewOverlay = F2(
  function(msg, src) {
    return $mdgriffith$elm_ui$Element$html(
      A2(
        $elm$html$Html$div,
        _List_fromArray(
          [
            $elm$html$Html$Attributes$class("fixed inset-0 z-50 overflow-auto bg-smoke-400 flex"),
            A2(
              $elm$html$Html$Events$stopPropagationOn,
              "click",
              A2(
                $elm$json$Json$Decode$map,
                $author$project$Contact$alwaysStopPropagate,
                $elm$json$Json$Decode$succeed($author$project$Contact$ClickedCloseModal)
              )
            )
          ]
        ),
        _List_fromArray(
          [
            A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  $elm$html$Html$Attributes$class("relative p-8 bg-white w-full max-w-md m-auto flex-col flex"),
                  A2(
                    $elm$html$Html$Events$stopPropagationOn,
                    "click",
                    A2(
                      $elm$json$Json$Decode$map,
                      $author$project$Contact$alwaysStopPropagate,
                      $elm$json$Json$Decode$succeed($author$project$Contact$NoOp)
                    )
                  )
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$img,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$src(src),
                        $elm$html$Html$Attributes$class("inline")
                      ]
                    ),
                    _List_Nil
                  ),
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$class("absolute top-0 right-0 p-4 cursor-pointer"),
                        $elm$html$Html$Events$onClick($author$project$Contact$ClickedCloseModal)
                      ]
                    ),
                    _List_fromArray(
                      [$author$project$Icon$close]
                    )
                  ),
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$class("absolute bottom-0 right-0 p-16 cursor-pointer"),
                        $elm$html$Html$Events$onClick(msg)
                      ]
                    ),
                    _List_fromArray(
                      [
                        A2(
                          $elm$html$Html$div,
                          _List_fromArray(
                            [
                              $elm$html$Html$Attributes$class("bg-red-700 text-white hover:bg-red-500 border rounded shadow px-4 py-2")
                            ]
                          ),
                          _List_fromArray(
                            [
                              $elm$html$Html$text("削除")
                            ]
                          )
                        )
                      ]
                    )
                  )
                ]
              )
            )
          ]
        )
      )
    );
  }
);
var $author$project$Contact$ClickedResend = { $: 3 };
var $author$project$Contact$viewSent = function(response) {
  return _List_fromArray(
    [
      A2(
        $mdgriffith$elm_ui$Element$el,
        _List_Nil,
        $mdgriffith$elm_ui$Element$text("お問い合わせありがとうございました")
      ),
      A2(
        $mdgriffith$elm_ui$Element$el,
        _List_Nil,
        $mdgriffith$elm_ui$Element$text("受信日時：")
      ),
      A2(
        $mdgriffith$elm_ui$Element$paragraph,
        _List_Nil,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$text("お問い合わせ内容によっては、回答にお時間がかかる場合や、回答を差し控えさせていただく場合がございます。また、定休日、夏期休業および冬期休業期間は、翌営業日以降のご対応とさせていただきます。")
          ]
        )
      ),
      A2(
        $mdgriffith$elm_ui$Element$el,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$centerX,
            $mdgriffith$elm_ui$Element$padding(20)
          ]
        ),
        A2(
          $mdgriffith$elm_ui$Element$Input$button,
          _List_fromArray(
            [
              $mdgriffith$elm_ui$Element$Background$color(
                $author$project$Color$dark($author$project$Color$grey)
              ),
              $mdgriffith$elm_ui$Element$Border$rounded(4),
              $mdgriffith$elm_ui$Element$Border$color(
                $author$project$Color$dark($author$project$Color$grey)
              ),
              $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
              A2($mdgriffith$elm_ui$Element$paddingXY, 20, 10),
              $mdgriffith$elm_ui$Element$width(
                $mdgriffith$elm_ui$Element$px(256)
              )
            ]
          ),
          {
            n: A2(
              $mdgriffith$elm_ui$Element$el,
              _List_fromArray(
                [$mdgriffith$elm_ui$Element$centerX]
              ),
              $mdgriffith$elm_ui$Element$text("もう一度送信")
            ),
            Z: $elm$core$Maybe$Just($author$project$Contact$ClickedResend)
          }
        )
      )
    ]
  );
};
var $author$project$Color$black = A3($mdgriffith$elm_ui$Element$rgb255, 34, 41, 47);
var $author$project$Color$darkest = function(hue) {
  return hue(0);
};
var $author$project$Atom$Font$xl2 = $elm$core$Basics$round($author$project$Atom$Font$base * 1.5);
var $author$project$Contact$viewTop = function(state) {
  var menu = F3(
    function(m1, m2, m3) {
      return A2(
        $mdgriffith$elm_ui$Element$row,
        _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$spacing(16),
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
          ]
        ),
        _List_fromArray(
          [
            A2(
              $mdgriffith$elm_ui$Element$el,
              m1,
              $mdgriffith$elm_ui$Element$text("1.入力")
            ),
            A2(
              $mdgriffith$elm_ui$Element$el,
              m2,
              $mdgriffith$elm_ui$Element$text("2.確認")
            ),
            A2(
              $mdgriffith$elm_ui$Element$el,
              m3,
              $mdgriffith$elm_ui$Element$text("3.完了")
            )
          ]
        )
      );
    }
  );
  var header = function(s) {
    return A2(
      $mdgriffith$elm_ui$Element$el,
      _List_fromArray(
        [
          $mdgriffith$elm_ui$Element$Font$color(
            $author$project$Color$darkest($author$project$Color$grey)
          ),
          $mdgriffith$elm_ui$Element$Font$size($author$project$Atom$Font$xl2)
        ]
      ),
      $mdgriffith$elm_ui$Element$text(s)
    );
  };
  var base = _List_fromArray(
    [
      $mdgriffith$elm_ui$Element$padding(16),
      $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
      $mdgriffith$elm_ui$Element$Font$center
    ]
  );
  var inactive = _Utils_ap(
    _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Font$color($author$project$Color$black),
        $mdgriffith$elm_ui$Element$Background$color(
          $author$project$Color$lighter($author$project$Color$grey)
        )
      ]
    ),
    base
  );
  var active = _Utils_ap(
    _List_fromArray(
      [
        $mdgriffith$elm_ui$Element$Font$color($author$project$Color$white),
        $mdgriffith$elm_ui$Element$Background$color(
          $author$project$Color$dark($author$project$Color$blue)
        )
      ]
    ),
    base
  );
  switch (state.$) {
    case 0:
      return _List_fromArray(
        [
          header("お問い合わせフォーム"),
          A3(menu, active, inactive, inactive)
        ]
      );
    case 1:
      state.a;
      state.b;
      return _List_fromArray(
        [
          header("お問い合わせ内容確認"),
          A3(menu, inactive, active, inactive)
        ]
      );
    default:
      state.a;
      return _List_fromArray(
        [
          header("送信完了"),
          A3(menu, inactive, inactive, active)
        ]
      );
  }
};
var $author$project$Contact$view = F2(
  function(device, model) {
    var attrs = function() {
      var _v3 = device.A;
      if (!_v3) {
        return _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
            $mdgriffith$elm_ui$Element$centerX,
            $mdgriffith$elm_ui$Element$spacing(16)
          ]
        );
      } else {
        return _List_fromArray(
          [
            $mdgriffith$elm_ui$Element$width(
              A2($mdgriffith$elm_ui$Element$maximum, 800, $mdgriffith$elm_ui$Element$fill)
            ),
            $mdgriffith$elm_ui$Element$centerX,
            A2($mdgriffith$elm_ui$Element$paddingXY, 40, 20),
            $mdgriffith$elm_ui$Element$spacing(20)
          ]
        );
      }
    }();
    return A2(
      $mdgriffith$elm_ui$Element$column,
      attrs,
      _Utils_ap(
        $author$project$Contact$viewTop(model.O),
        function() {
          var _v0 = model.O;
          switch (_v0.$) {
            case 0:
              var _v1 = model.X;
              if (!_v1.$) {
                var _v2 = _v1.a;
                var index = _v2.a;
                var image = _v2.b;
                return _Utils_ap(
                  _List_fromArray(
                    [
                      A2(
                        $author$project$Contact$viewOverlay,
                        $author$project$Contact$Remove(index),
                        image
                      )
                    ]
                  ),
                  A2($author$project$Contact$viewForm, device, model)
                );
              } else {
                return A2($author$project$Contact$viewForm, device, model);
              }
            case 1:
              var contact = _v0.a;
              var err = _v0.b;
              return model.am ? _List_fromArray(
                [
                  $author$project$Contact$viewLoading()
                ]
              ) : A3($author$project$Contact$viewConfirm, device, contact, err);
            default:
              _v0.a;
              return $author$project$Contact$viewSent();
          }
        }()
      )
    );
  }
);
var $author$project$Main$view = function(model) {
  return A2(
    $mdgriffith$elm_ui$Element$layout,
    _List_Nil,
    A2(
      $mdgriffith$elm_ui$Element$map,
      $author$project$Main$ContactMsg,
      A2($author$project$Contact$view, model.aK, model.ah)
    )
  );
};
var $author$project$Main$main = $elm$browser$Browser$element(
  { c8: $author$project$Main$init, dU: $author$project$Main$subscriptions, ed: $author$project$Main$update, ee: $author$project$Main$view }
);
const Elm = { "Main": { "init": $author$project$Main$main(
  A2(
    $elm$json$Json$Decode$andThen,
    function(width) {
      return A2(
        $elm$json$Json$Decode$andThen,
        function(height) {
          return $elm$json$Json$Decode$succeed(
            { aZ: height, bc: width }
          );
        },
        A2($elm$json$Json$Decode$field, "height", $elm$json$Json$Decode$int)
      );
    },
    A2($elm$json$Json$Decode$field, "width", $elm$json$Json$Decode$int)
  )
)(0) } };
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var glightbox_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    function e(t2) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      })(t2);
    }
    function t(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e2, t2) {
      for (var i2 = 0; i2 < t2.length; i2++) {
        var n2 = t2[i2];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
      }
    }
    function n(e2, t2, n2) {
      return t2 && i(e2.prototype, t2), n2 && i(e2, n2), e2;
    }
    var s = Date.now();
    function l() {
      var e2 = {}, t2 = true, i2 = 0, n2 = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t2 = arguments[0], i2++);
      for (var s2 = function(i3) {
        for (var n3 in i3)
          Object.prototype.hasOwnProperty.call(i3, n3) && (t2 && "[object Object]" === Object.prototype.toString.call(i3[n3]) ? e2[n3] = l(true, e2[n3], i3[n3]) : e2[n3] = i3[n3]);
      }; i2 < n2; i2++) {
        var o2 = arguments[i2];
        s2(o2);
      }
      return e2;
    }
    function o(e2, t2) {
      if ((k(e2) || e2 === window || e2 === document) && (e2 = [e2]), A(e2) || L(e2) || (e2 = [e2]), 0 != P(e2)) {
        if (A(e2) && !L(e2))
          for (var i2 = e2.length, n2 = 0; n2 < i2 && false !== t2.call(e2[n2], e2[n2], n2, e2); n2++)
            ;
        else if (L(e2)) {
          for (var s2 in e2)
            if (O(e2, s2) && false === t2.call(e2[s2], e2[s2], s2, e2))
              break;
        }
      }
    }
    function r(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = e2[s] = e2[s] || [], l2 = { all: n2, evt: null, found: null };
      return t2 && i2 && P(n2) > 0 && o(n2, function(e3, n3) {
        if (e3.eventName == t2 && e3.fn.toString() == i2.toString())
          return l2.found = true, l2.evt = n3, false;
      }), l2;
    }
    function a(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = t2.onElement, n2 = t2.withCallback, s2 = t2.avoidDuplicate, l2 = void 0 === s2 || s2, a2 = t2.once, h2 = void 0 !== a2 && a2, d2 = t2.useCapture, c2 = void 0 !== d2 && d2, u2 = arguments.length > 2 ? arguments[2] : void 0, g2 = i2 || [];
      function v2(e3) {
        T(n2) && n2.call(u2, e3, this), h2 && v2.destroy();
      }
      return C(g2) && (g2 = document.querySelectorAll(g2)), v2.destroy = function() {
        o(g2, function(t3) {
          var i3 = r(t3, e2, v2);
          i3.found && i3.all.splice(i3.evt, 1), t3.removeEventListener && t3.removeEventListener(e2, v2, c2);
        });
      }, o(g2, function(t3) {
        var i3 = r(t3, e2, v2);
        (t3.addEventListener && l2 && !i3.found || !l2) && (t3.addEventListener(e2, v2, c2), i3.all.push({ eventName: e2, fn: v2 }));
      }), v2;
    }
    function h(e2, t2) {
      o(t2.split(" "), function(t3) {
        return e2.classList.add(t3);
      });
    }
    function d(e2, t2) {
      o(t2.split(" "), function(t3) {
        return e2.classList.remove(t3);
      });
    }
    function c(e2, t2) {
      return e2.classList.contains(t2);
    }
    function u(e2, t2) {
      for (; e2 !== document.body; ) {
        if (!(e2 = e2.parentElement))
          return false;
        if ("function" == typeof e2.matches ? e2.matches(t2) : e2.msMatchesSelector(t2))
          return e2;
      }
    }
    function g(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!e2 || "" === t2)
        return false;
      if ("none" === t2)
        return T(i2) && i2(), false;
      var n2 = x(), s2 = t2.split(" ");
      o(s2, function(t3) {
        h(e2, "g" + t3);
      }), a(n2, { onElement: e2, avoidDuplicate: false, once: true, withCallback: function(e3, t3) {
        o(s2, function(e4) {
          d(t3, "g" + e4);
        }), T(i2) && i2();
      } });
    }
    function v(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if ("" === t2)
        return e2.style.webkitTransform = "", e2.style.MozTransform = "", e2.style.msTransform = "", e2.style.OTransform = "", e2.style.transform = "", false;
      e2.style.webkitTransform = t2, e2.style.MozTransform = t2, e2.style.msTransform = t2, e2.style.OTransform = t2, e2.style.transform = t2;
    }
    function f(e2) {
      e2.style.display = "block";
    }
    function p(e2) {
      e2.style.display = "none";
    }
    function m(e2) {
      var t2 = document.createDocumentFragment(), i2 = document.createElement("div");
      for (i2.innerHTML = e2; i2.firstChild; )
        t2.appendChild(i2.firstChild);
      return t2;
    }
    function y() {
      return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
    }
    function x() {
      var e2, t2 = document.createElement("fakeelement"), i2 = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" };
      for (e2 in i2)
        if (void 0 !== t2.style[e2])
          return i2[e2];
    }
    function b(e2, t2, i2, n2) {
      if (e2())
        t2();
      else {
        var s2;
        i2 || (i2 = 100);
        var l2 = setInterval(function() {
          e2() && (clearInterval(l2), s2 && clearTimeout(s2), t2());
        }, i2);
        n2 && (s2 = setTimeout(function() {
          clearInterval(l2);
        }, n2));
      }
    }
    function S(e2, t2, i2) {
      if (I(e2))
        console.error("Inject assets error");
      else if (T(t2) && (i2 = t2, t2 = false), C(t2) && t2 in window)
        T(i2) && i2();
      else {
        var n2;
        if (-1 !== e2.indexOf(".css")) {
          if ((n2 = document.querySelectorAll('link[href="' + e2 + '"]')) && n2.length > 0)
            return void (T(i2) && i2());
          var s2 = document.getElementsByTagName("head")[0], l2 = s2.querySelectorAll('link[rel="stylesheet"]'), o2 = document.createElement("link");
          return o2.rel = "stylesheet", o2.type = "text/css", o2.href = e2, o2.media = "all", l2 ? s2.insertBefore(o2, l2[0]) : s2.appendChild(o2), void (T(i2) && i2());
        }
        if ((n2 = document.querySelectorAll('script[src="' + e2 + '"]')) && n2.length > 0) {
          if (T(i2)) {
            if (C(t2))
              return b(function() {
                return void 0 !== window[t2];
              }, function() {
                i2();
              }), false;
            i2();
          }
        } else {
          var r2 = document.createElement("script");
          r2.type = "text/javascript", r2.src = e2, r2.onload = function() {
            if (T(i2)) {
              if (C(t2))
                return b(function() {
                  return void 0 !== window[t2];
                }, function() {
                  i2();
                }), false;
              i2();
            }
          }, document.body.appendChild(r2);
        }
      }
    }
    function w() {
      return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function T(e2) {
      return "function" == typeof e2;
    }
    function C(e2) {
      return "string" == typeof e2;
    }
    function k(e2) {
      return !(!e2 || !e2.nodeType || 1 != e2.nodeType);
    }
    function E(e2) {
      return Array.isArray(e2);
    }
    function A(e2) {
      return e2 && e2.length && isFinite(e2.length);
    }
    function L(t2) {
      return "object" === e(t2) && null != t2 && !T(t2) && !E(t2);
    }
    function I(e2) {
      return null == e2;
    }
    function O(e2, t2) {
      return null !== e2 && hasOwnProperty.call(e2, t2);
    }
    function P(e2) {
      if (L(e2)) {
        if (e2.keys)
          return e2.keys().length;
        var t2 = 0;
        for (var i2 in e2)
          O(e2, i2) && t2++;
        return t2;
      }
      return e2.length;
    }
    function M(e2) {
      return !isNaN(parseFloat(e2)) && isFinite(e2);
    }
    function z() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t2 = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
      if (!t2.length)
        return false;
      if (1 == t2.length)
        return t2[0];
      "string" == typeof e2 && (e2 = parseInt(e2));
      var i2 = [];
      o(t2, function(e3) {
        i2.push(e3.getAttribute("data-taborder"));
      });
      var n2 = Math.max.apply(Math, i2.map(function(e3) {
        return parseInt(e3);
      })), s2 = e2 < 0 ? 1 : e2 + 1;
      s2 > n2 && (s2 = "1");
      var l2 = i2.filter(function(e3) {
        return e3 >= parseInt(s2);
      }), r2 = l2.sort()[0];
      return document.querySelector('.gbtn[data-taborder="'.concat(r2, '"]'));
    }
    function X(e2) {
      if (e2.events.hasOwnProperty("keyboard"))
        return false;
      e2.events.keyboard = a("keydown", { onElement: window, withCallback: function(t2, i2) {
        var n2 = (t2 = t2 || window.event).keyCode;
        if (9 == n2) {
          var s2 = document.querySelector(".gbtn.focused");
          if (!s2) {
            var l2 = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
            if ("input" == l2 || "textarea" == l2 || "button" == l2)
              return;
          }
          t2.preventDefault();
          var o2 = document.querySelectorAll(".gbtn[data-taborder]");
          if (!o2 || o2.length <= 0)
            return;
          if (!s2) {
            var r2 = z();
            return void (r2 && (r2.focus(), h(r2, "focused")));
          }
          var a2 = z(s2.getAttribute("data-taborder"));
          d(s2, "focused"), a2 && (a2.focus(), h(a2, "focused"));
        }
        39 == n2 && e2.nextSlide(), 37 == n2 && e2.prevSlide(), 27 == n2 && e2.close();
      } });
    }
    function Y(e2) {
      return Math.sqrt(e2.x * e2.x + e2.y * e2.y);
    }
    function q(e2, t2) {
      var i2 = function(e3, t3) {
        var i3 = Y(e3) * Y(t3);
        if (0 === i3)
          return 0;
        var n2 = function(e4, t4) {
          return e4.x * t4.x + e4.y * t4.y;
        }(e3, t3) / i3;
        return n2 > 1 && (n2 = 1), Math.acos(n2);
      }(e2, t2);
      return function(e3, t3) {
        return e3.x * t3.y - t3.x * e3.y;
      }(e2, t2) > 0 && (i2 *= -1), 180 * i2 / Math.PI;
    }
    var N = function() {
      function e2(i2) {
        t(this, e2), this.handlers = [], this.el = i2;
      }
      return n(e2, [{ key: "add", value: function(e3) {
        this.handlers.push(e3);
      } }, { key: "del", value: function(e3) {
        e3 || (this.handlers = []);
        for (var t2 = this.handlers.length; t2 >= 0; t2--)
          this.handlers[t2] === e3 && this.handlers.splice(t2, 1);
      } }, { key: "dispatch", value: function() {
        for (var e3 = 0, t2 = this.handlers.length; e3 < t2; e3++) {
          var i2 = this.handlers[e3];
          "function" == typeof i2 && i2.apply(this.el, arguments);
        }
      } }]), e2;
    }();
    function D(e2, t2) {
      var i2 = new N(e2);
      return i2.add(t2), i2;
    }
    var _ = function() {
      function e2(i2, n2) {
        t(this, e2), this.element = "string" == typeof i2 ? document.querySelector(i2) : i2, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, false), this.element.addEventListener("touchmove", this.move, false), this.element.addEventListener("touchend", this.end, false), this.element.addEventListener("touchcancel", this.cancel, false), this.preV = { x: null, y: null }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = false;
        var s2 = function() {
        };
        this.rotate = D(this.element, n2.rotate || s2), this.touchStart = D(this.element, n2.touchStart || s2), this.multipointStart = D(this.element, n2.multipointStart || s2), this.multipointEnd = D(this.element, n2.multipointEnd || s2), this.pinch = D(this.element, n2.pinch || s2), this.swipe = D(this.element, n2.swipe || s2), this.tap = D(this.element, n2.tap || s2), this.doubleTap = D(this.element, n2.doubleTap || s2), this.longTap = D(this.element, n2.longTap || s2), this.singleTap = D(this.element, n2.singleTap || s2), this.pressMove = D(this.element, n2.pressMove || s2), this.twoFingerPressMove = D(this.element, n2.twoFingerPressMove || s2), this.touchMove = D(this.element, n2.touchMove || s2), this.touchEnd = D(this.element, n2.touchEnd || s2), this.touchCancel = D(this.element, n2.touchCancel || s2), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = { x: null, y: null };
      }
      return n(e2, [{ key: "start", value: function(e3) {
        if (e3.touches) {
          if (e3.target && e3.target.nodeName && ["a", "button", "input"].indexOf(e3.target.nodeName.toLowerCase()) >= 0)
            console.log("ignore drag for this touched element", e3.target.nodeName.toLowerCase());
          else {
            this.now = Date.now(), this.x1 = e3.touches[0].pageX, this.y1 = e3.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e3, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
            var t2 = this.preV;
            if (e3.touches.length > 1) {
              this._cancelLongTap(), this._cancelSingleTap();
              var i2 = { x: e3.touches[1].pageX - this.x1, y: e3.touches[1].pageY - this.y1 };
              t2.x = i2.x, t2.y = i2.y, this.pinchStartLen = Y(t2), this.multipointStart.dispatch(e3, this.element);
            }
            this._preventTap = false, this.longTapTimeout = setTimeout((function() {
              this.longTap.dispatch(e3, this.element), this._preventTap = true;
            }).bind(this), 750);
          }
        }
      } }, { key: "move", value: function(e3) {
        if (e3.touches) {
          var t2 = this.preV, i2 = e3.touches.length, n2 = e3.touches[0].pageX, s2 = e3.touches[0].pageY;
          if (this.isDoubleTap = false, i2 > 1) {
            var l2 = e3.touches[1].pageX, o2 = e3.touches[1].pageY, r2 = { x: e3.touches[1].pageX - n2, y: e3.touches[1].pageY - s2 };
            null !== t2.x && (this.pinchStartLen > 0 && (e3.zoom = Y(r2) / this.pinchStartLen, this.pinch.dispatch(e3, this.element)), e3.angle = q(r2, t2), this.rotate.dispatch(e3, this.element)), t2.x = r2.x, t2.y = r2.y, null !== this.x2 && null !== this.sx2 ? (e3.deltaX = (n2 - this.x2 + l2 - this.sx2) / 2, e3.deltaY = (s2 - this.y2 + o2 - this.sy2) / 2) : (e3.deltaX = 0, e3.deltaY = 0), this.twoFingerPressMove.dispatch(e3, this.element), this.sx2 = l2, this.sy2 = o2;
          } else {
            if (null !== this.x2) {
              e3.deltaX = n2 - this.x2, e3.deltaY = s2 - this.y2;
              var a2 = Math.abs(this.x1 - this.x2), h2 = Math.abs(this.y1 - this.y2);
              (a2 > 10 || h2 > 10) && (this._preventTap = true);
            } else
              e3.deltaX = 0, e3.deltaY = 0;
            this.pressMove.dispatch(e3, this.element);
          }
          this.touchMove.dispatch(e3, this.element), this._cancelLongTap(), this.x2 = n2, this.y2 = s2, i2 > 1 && e3.preventDefault();
        }
      } }, { key: "end", value: function(e3) {
        if (e3.changedTouches) {
          this._cancelLongTap();
          var t2 = this;
          e3.touches.length < 2 && (this.multipointEnd.dispatch(e3, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e3.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
            t2.swipe.dispatch(e3, t2.element);
          }, 0)) : (this.tapTimeout = setTimeout(function() {
            t2._preventTap || t2.tap.dispatch(e3, t2.element), t2.isDoubleTap && (t2.doubleTap.dispatch(e3, t2.element), t2.isDoubleTap = false);
          }, 0), t2.isDoubleTap || (t2.singleTapTimeout = setTimeout(function() {
            t2.singleTap.dispatch(e3, t2.element);
          }, 250))), this.touchEnd.dispatch(e3, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
        }
      } }, { key: "cancelAll", value: function() {
        this._preventTap = true, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
      } }, { key: "cancel", value: function(e3) {
        this.cancelAll(), this.touchCancel.dispatch(e3, this.element);
      } }, { key: "_cancelLongTap", value: function() {
        clearTimeout(this.longTapTimeout);
      } }, { key: "_cancelSingleTap", value: function() {
        clearTimeout(this.singleTapTimeout);
      } }, { key: "_swipeDirection", value: function(e3, t2, i2, n2) {
        return Math.abs(e3 - t2) >= Math.abs(i2 - n2) ? e3 - t2 > 0 ? "Left" : "Right" : i2 - n2 > 0 ? "Up" : "Down";
      } }, { key: "on", value: function(e3, t2) {
        this[e3] && this[e3].add(t2);
      } }, { key: "off", value: function(e3, t2) {
        this[e3] && this[e3].del(t2);
      } }, { key: "destroy", value: function() {
        return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
      } }]), e2;
    }();
    function W(e2) {
      var t2 = function() {
        var e3, t3 = document.createElement("fakeelement"), i3 = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
        for (e3 in i3)
          if (void 0 !== t3.style[e3])
            return i3[e3];
      }(), i2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n2 = c(e2, "gslide-media") ? e2 : e2.querySelector(".gslide-media"), s2 = u(n2, ".ginner-container"), l2 = e2.querySelector(".gslide-description");
      i2 > 769 && (n2 = s2), h(n2, "greset"), v(n2, "translate3d(0, 0, 0)"), a(t2, { onElement: n2, once: true, withCallback: function(e3, t3) {
        d(n2, "greset");
      } }), n2.style.opacity = "", l2 && (l2.style.opacity = "");
    }
    function B(e2) {
      if (e2.events.hasOwnProperty("touch"))
        return false;
      var t2, i2, n2, s2 = y(), l2 = s2.width, o2 = s2.height, r2 = false, a2 = null, g2 = null, f2 = null, p2 = false, m2 = 1, x2 = 1, b2 = false, S2 = false, w2 = null, T2 = null, C2 = null, k2 = null, E2 = 0, A9 = 0, L2 = false, I2 = false, O2 = {}, P2 = {}, M2 = 0, z2 = 0, X2 = document.getElementById("glightbox-slider"), Y2 = document.querySelector(".goverlay"), q2 = new _(X2, { touchStart: function(t3) {
        if (r2 = true, (c(t3.targetTouches[0].target, "ginner-container") || u(t3.targetTouches[0].target, ".gslide-desc") || "a" == t3.targetTouches[0].target.nodeName.toLowerCase()) && (r2 = false), u(t3.targetTouches[0].target, ".gslide-inline") && !c(t3.targetTouches[0].target.parentNode, "gslide-inline") && (r2 = false), r2) {
          if (P2 = t3.targetTouches[0], O2.pageX = t3.targetTouches[0].pageX, O2.pageY = t3.targetTouches[0].pageY, M2 = t3.targetTouches[0].clientX, z2 = t3.targetTouches[0].clientY, a2 = e2.activeSlide, g2 = a2.querySelector(".gslide-media"), n2 = a2.querySelector(".gslide-inline"), f2 = null, c(g2, "gslide-image") && (f2 = g2.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g2 = a2.querySelector(".ginner-container")), d(Y2, "greset"), t3.pageX > 20 && t3.pageX < window.innerWidth - 20)
            return;
          t3.preventDefault();
        }
      }, touchMove: function(s3) {
        if (r2 && (P2 = s3.targetTouches[0], !b2 && !S2)) {
          if (n2 && n2.offsetHeight > o2) {
            var a3 = O2.pageX - P2.pageX;
            if (Math.abs(a3) <= 13)
              return false;
          }
          p2 = true;
          var h2, d2 = s3.targetTouches[0].clientX, c2 = s3.targetTouches[0].clientY, u2 = M2 - d2, m3 = z2 - c2;
          if (Math.abs(u2) > Math.abs(m3) ? (L2 = false, I2 = true) : (I2 = false, L2 = true), t2 = P2.pageX - O2.pageX, E2 = 100 * t2 / l2, i2 = P2.pageY - O2.pageY, A9 = 100 * i2 / o2, L2 && f2 && (h2 = 1 - Math.abs(i2) / o2, Y2.style.opacity = h2, e2.settings.touchFollowAxis && (E2 = 0)), I2 && (h2 = 1 - Math.abs(t2) / l2, g2.style.opacity = h2, e2.settings.touchFollowAxis && (A9 = 0)), !f2)
            return v(g2, "translate3d(".concat(E2, "%, 0, 0)"));
          v(g2, "translate3d(".concat(E2, "%, ").concat(A9, "%, 0)"));
        }
      }, touchEnd: function() {
        if (r2) {
          if (p2 = false, S2 || b2)
            return C2 = w2, void (k2 = T2);
          var t3 = Math.abs(parseInt(A9)), i3 = Math.abs(parseInt(E2));
          if (!(t3 > 29 && f2))
            return t3 < 29 && i3 < 25 ? (h(Y2, "greset"), Y2.style.opacity = 1, W(g2)) : void 0;
          e2.close();
        }
      }, multipointEnd: function() {
        setTimeout(function() {
          b2 = false;
        }, 50);
      }, multipointStart: function() {
        b2 = true, m2 = x2 || 1;
      }, pinch: function(e3) {
        if (!f2 || p2)
          return false;
        b2 = true, f2.scaleX = f2.scaleY = m2 * e3.zoom;
        var t3 = m2 * e3.zoom;
        if (S2 = true, t3 <= 1)
          return S2 = false, t3 = 1, k2 = null, C2 = null, w2 = null, T2 = null, void f2.setAttribute("style", "");
        t3 > 4.5 && (t3 = 4.5), f2.style.transform = "scale3d(".concat(t3, ", ").concat(t3, ", 1)"), x2 = t3;
      }, pressMove: function(e3) {
        if (S2 && !b2) {
          var t3 = P2.pageX - O2.pageX, i3 = P2.pageY - O2.pageY;
          C2 && (t3 += C2), k2 && (i3 += k2), w2 = t3, T2 = i3;
          var n3 = "translate3d(".concat(t3, "px, ").concat(i3, "px, 0)");
          x2 && (n3 += " scale3d(".concat(x2, ", ").concat(x2, ", 1)")), v(f2, n3);
        }
      }, swipe: function(t3) {
        if (!S2)
          if (b2)
            b2 = false;
          else {
            if ("Left" == t3.direction) {
              if (e2.index == e2.elements.length - 1)
                return W(g2);
              e2.nextSlide();
            }
            if ("Right" == t3.direction) {
              if (0 == e2.index)
                return W(g2);
              e2.prevSlide();
            }
          }
      } });
      e2.events.touch = q2;
    }
    var H = function() {
      function e2(i2, n2) {
        var s2 = this, l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (t(this, e2), this.img = i2, this.slide = n2, this.onclose = l2, this.img.setZoomEvents)
          return false;
        this.active = false, this.zoomedIn = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e3) {
          return s2.dragStart(e3);
        }, false), this.img.addEventListener("mouseup", function(e3) {
          return s2.dragEnd(e3);
        }, false), this.img.addEventListener("mousemove", function(e3) {
          return s2.drag(e3);
        }, false), this.img.addEventListener("click", function(e3) {
          return s2.slide.classList.contains("dragging-nav") ? (s2.zoomOut(), false) : s2.zoomedIn ? void (s2.zoomedIn && !s2.dragging && s2.zoomOut()) : s2.zoomIn();
        }, false), this.img.setZoomEvents = true;
      }
      return n(e2, [{ key: "zoomIn", value: function() {
        var e3 = this.widowWidth();
        if (!(this.zoomedIn || e3 <= 768)) {
          var t2 = this.img;
          if (t2.setAttribute("data-style", t2.getAttribute("style")), t2.style.maxWidth = t2.naturalWidth + "px", t2.style.maxHeight = t2.naturalHeight + "px", t2.naturalWidth > e3) {
            var i2 = e3 / 2 - t2.naturalWidth / 2;
            this.setTranslate(this.img.parentNode, i2, 0);
          }
          this.slide.classList.add("zoomed"), this.zoomedIn = true;
        }
      } }, { key: "zoomOut", value: function() {
        this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
      } }, { key: "dragStart", value: function(e3) {
        e3.preventDefault(), this.zoomedIn ? ("touchstart" === e3.type ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset), e3.target === this.img && (this.active = true, this.img.classList.add("dragging"))) : this.active = false;
      } }, { key: "dragEnd", value: function(e3) {
        var t2 = this;
        e3.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = false, setTimeout(function() {
          t2.dragging = false, t2.img.isDragging = false, t2.img.classList.remove("dragging");
        }, 100);
      } }, { key: "drag", value: function(e3) {
        this.active && (e3.preventDefault(), "touchmove" === e3.type ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = true, this.dragging = true, this.setTranslate(this.img, this.currentX, this.currentY));
      } }, { key: "onMove", value: function(e3) {
        if (this.zoomedIn) {
          var t2 = e3.clientX - this.img.naturalWidth / 2, i2 = e3.clientY - this.img.naturalHeight / 2;
          this.setTranslate(this.img, t2, i2);
        }
      } }, { key: "setTranslate", value: function(e3, t2, i2) {
        e3.style.transform = "translate3d(" + t2 + "px, " + i2 + "px, 0)";
      } }, { key: "widowWidth", value: function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      } }]), e2;
    }(), V = function() {
      function e2() {
        var i2 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e2);
        var s2 = n2.dragEl, l2 = n2.toleranceX, o2 = void 0 === l2 ? 40 : l2, r2 = n2.toleranceY, a2 = void 0 === r2 ? 65 : r2, h2 = n2.slide, d2 = void 0 === h2 ? null : h2, c2 = n2.instance, u2 = void 0 === c2 ? null : c2;
        this.el = s2, this.active = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o2, this.toleranceY = a2, this.toleranceReached = false, this.dragContainer = this.el, this.slide = d2, this.instance = u2, this.el.addEventListener("mousedown", function(e3) {
          return i2.dragStart(e3);
        }, false), this.el.addEventListener("mouseup", function(e3) {
          return i2.dragEnd(e3);
        }, false), this.el.addEventListener("mousemove", function(e3) {
          return i2.drag(e3);
        }, false);
      }
      return n(e2, [{ key: "dragStart", value: function(e3) {
        if (this.slide.classList.contains("zoomed"))
          this.active = false;
        else {
          "touchstart" === e3.type ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset);
          var t2 = e3.target.nodeName.toLowerCase();
          e3.target.classList.contains("nodrag") || u(e3.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t2) ? this.active = false : (e3.preventDefault(), (e3.target === this.el || "img" !== t2 && u(e3.target, ".gslide-inline")) && (this.active = true, this.el.classList.add("dragging"), this.dragContainer = u(e3.target, ".ginner-container")));
        }
      } }, { key: "dragEnd", value: function(e3) {
        var t2 = this;
        e3 && e3.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = false, this.doSlideChange && (this.instance.preventOutsideClick = true, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, true), setTimeout(function() {
          t2.instance.preventOutsideClick = false, t2.toleranceReached = false, t2.lastDirection = null, t2.dragging = false, t2.el.isDragging = false, t2.el.classList.remove("dragging"), t2.slide.classList.remove("dragging-nav"), t2.dragContainer.style.transform = "", t2.dragContainer.style.transition = "";
        }, 100);
      } }, { key: "drag", value: function(e3) {
        if (this.active) {
          e3.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e3.type ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = true, this.dragging = true, this.doSlideChange = false, this.doSlideClose = false;
          var t2 = Math.abs(this.currentX), i2 = Math.abs(this.currentY);
          if (t2 > 0 && t2 >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
            var n2 = this.shouldChange();
            if (!this.instance.settings.dragAutoSnap && n2 && (this.doSlideChange = n2), this.instance.settings.dragAutoSnap && n2)
              return this.instance.preventOutsideClick = true, this.toleranceReached = true, this.active = false, this.instance.preventOutsideClick = true, this.dragEnd(null), "right" == n2 && this.instance.prevSlide(), void ("left" == n2 && this.instance.nextSlide());
          }
          if (this.toleranceY > 0 && i2 > 0 && i2 >= t2 && (!this.lastDirection || "y" == this.lastDirection)) {
            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
            var s2 = this.shouldClose();
            return !this.instance.settings.dragAutoSnap && s2 && (this.doSlideClose = true), void (this.instance.settings.dragAutoSnap && s2 && this.instance.close());
          }
        }
      } }, { key: "shouldChange", value: function() {
        var e3 = false;
        if (Math.abs(this.currentX) >= this.toleranceX) {
          var t2 = this.currentX > 0 ? "right" : "left";
          ("left" == t2 && this.slide !== this.slide.parentNode.lastChild || "right" == t2 && this.slide !== this.slide.parentNode.firstChild) && (e3 = t2);
        }
        return e3;
      } }, { key: "shouldClose", value: function() {
        var e3 = false;
        return Math.abs(this.currentY) >= this.toleranceY && (e3 = true), e3;
      } }, { key: "setTranslate", value: function(e3, t2, i2) {
        var n2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e3.style.transition = n2 ? "all .2s ease" : "", e3.style.transform = "translate3d(".concat(t2, "px, ").concat(i2, "px, 0)");
      } }]), e2;
    }();
    function j(e2, t2, i2, n2) {
      var s2 = e2.querySelector(".gslide-media"), l2 = new Image(), o2 = "gSlideTitle_" + i2, r2 = "gSlideDesc_" + i2;
      l2.addEventListener("load", function() {
        T(n2) && n2();
      }, false), l2.src = t2.href, "" != t2.sizes && "" != t2.srcset && (l2.sizes = t2.sizes, l2.srcset = t2.srcset), l2.alt = "", I(t2.alt) || "" === t2.alt || (l2.alt = t2.alt), "" !== t2.title && l2.setAttribute("aria-labelledby", o2), "" !== t2.description && l2.setAttribute("aria-describedby", r2), t2.hasOwnProperty("_hasCustomWidth") && t2._hasCustomWidth && (l2.style.width = t2.width), t2.hasOwnProperty("_hasCustomHeight") && t2._hasCustomHeight && (l2.style.height = t2.height), s2.insertBefore(l2, s2.firstChild);
    }
    function F10(e2, t2, i2, n2) {
      var s2 = this, l2 = e2.querySelector(".ginner-container"), o2 = "gvideo" + i2, r2 = e2.querySelector(".gslide-media"), a2 = this.getAllPlayers();
      h(l2, "gvideo-container"), r2.insertBefore(m('<div class="gvideo-wrapper"></div>'), r2.firstChild);
      var d2 = e2.querySelector(".gvideo-wrapper");
      S(this.settings.plyr.css, "Plyr");
      var c2 = t2.href, u2 = null == t2 ? void 0 : t2.videoProvider, g2 = false;
      r2.style.maxWidth = t2.width, S(this.settings.plyr.js, "Plyr", function() {
        if (!u2 && c2.match(/vimeo\.com\/([0-9]*)/) && (u2 = "vimeo"), !u2 && (c2.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c2.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c2.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u2 = "youtube"), "local" === u2 || !u2) {
          u2 = "local";
          var l3 = '<video id="' + o2 + '" ';
          l3 += 'style="background:#000; max-width: '.concat(t2.width, ';" '), l3 += 'preload="metadata" ', l3 += 'x-webkit-airplay="allow" ', l3 += "playsinline ", l3 += "controls ", l3 += 'class="gvideo-local">', l3 += '<source src="'.concat(c2, '">'), g2 = m(l3 += "</video>");
        }
        var r3 = g2 || m('<div id="'.concat(o2, '" data-plyr-provider="').concat(u2, '" data-plyr-embed-id="').concat(c2, '"></div>'));
        h(d2, "".concat(u2, "-video gvideo")), d2.appendChild(r3), d2.setAttribute("data-id", o2), d2.setAttribute("data-index", i2);
        var v2 = O(s2.settings.plyr, "config") ? s2.settings.plyr.config : {}, f2 = new Plyr("#" + o2, v2);
        f2.on("ready", function(e3) {
          a2[o2] = e3.detail.plyr, T(n2) && n2();
        }), b(function() {
          return e2.querySelector("iframe") && "true" == e2.querySelector("iframe").dataset.ready;
        }, function() {
          s2.resize(e2);
        }), f2.on("enterfullscreen", R), f2.on("exitfullscreen", R);
      });
    }
    function R(e2) {
      var t2 = u(e2.target, ".gslide-media");
      "enterfullscreen" === e2.type && h(t2, "fullscreen"), "exitfullscreen" === e2.type && d(t2, "fullscreen");
    }
    function G(e2, t2, i2, n2) {
      var s2, l2 = this, o2 = e2.querySelector(".gslide-media"), r2 = !(!O(t2, "href") || !t2.href) && t2.href.split("#").pop().trim(), d2 = !(!O(t2, "content") || !t2.content) && t2.content;
      if (d2 && (C(d2) && (s2 = m('<div class="ginlined-content">'.concat(d2, "</div>"))), k(d2))) {
        "none" == d2.style.display && (d2.style.display = "block");
        var c2 = document.createElement("div");
        c2.className = "ginlined-content", c2.appendChild(d2), s2 = c2;
      }
      if (r2) {
        var u2 = document.getElementById(r2);
        if (!u2)
          return false;
        var g2 = u2.cloneNode(true);
        g2.style.height = t2.height, g2.style.maxWidth = t2.width, h(g2, "ginlined-content"), s2 = g2;
      }
      if (!s2)
        return console.error("Unable to append inline slide content", t2), false;
      o2.style.height = t2.height, o2.style.width = t2.width, o2.appendChild(s2), this.events["inlineclose" + r2] = a("click", { onElement: o2.querySelectorAll(".gtrigger-close"), withCallback: function(e3) {
        e3.preventDefault(), l2.close();
      } }), T(n2) && n2();
    }
    function Z(e2, t2, i2, n2) {
      var s2 = e2.querySelector(".gslide-media"), l2 = function(e3) {
        var t3 = e3.url, i3 = e3.allow, n3 = e3.callback, s3 = e3.appendTo, l3 = document.createElement("iframe");
        return l3.className = "vimeo-video gvideo", l3.src = t3, l3.style.width = "100%", l3.style.height = "100%", i3 && l3.setAttribute("allow", i3), l3.onload = function() {
          l3.onload = null, h(l3, "node-ready"), T(n3) && n3();
        }, s3 && s3.appendChild(l3), l3;
      }({ url: t2.href, callback: n2 });
      s2.parentNode.style.maxWidth = t2.width, s2.parentNode.style.height = t2.height, s2.appendChild(l2);
    }
    var U = function() {
      function e2() {
        var i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e2), this.defaults = { href: "", sizes: "", srcset: "", title: "", type: "", videoProvider: "", description: "", alt: "", descPosition: "bottom", effect: "", width: "", height: "", content: false, zoomable: true, draggable: true }, L(i2) && (this.defaults = l(this.defaults, i2));
      }
      return n(e2, [{ key: "sourceType", value: function(e3) {
        var t2 = e3;
        if (null !== (e3 = e3.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))
          return "image";
        if (e3.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e3.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e3.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
          return "video";
        if (e3.match(/vimeo\.com\/([0-9]*)/))
          return "video";
        if (null !== e3.match(/\.(mp4|ogg|webm|mov)/))
          return "video";
        if (null !== e3.match(/\.(mp3|wav|wma|aac|ogg)/))
          return "audio";
        if (e3.indexOf("#") > -1 && "" !== t2.split("#").pop().trim())
          return "inline";
        return e3.indexOf("goajax=true") > -1 ? "ajax" : "external";
      } }, { key: "parseConfig", value: function(e3, t2) {
        var i2 = this, n2 = l({ descPosition: t2.descPosition }, this.defaults);
        if (L(e3) && !k(e3)) {
          O(e3, "type") || (O(e3, "content") && e3.content ? e3.type = "inline" : O(e3, "href") && (e3.type = this.sourceType(e3.href)));
          var s2 = l(n2, e3);
          return this.setSize(s2, t2), s2;
        }
        var r2 = "", a2 = e3.getAttribute("data-glightbox"), h2 = e3.nodeName.toLowerCase();
        if ("a" === h2 && (r2 = e3.href), "img" === h2 && (r2 = e3.src, n2.alt = e3.alt), n2.href = r2, o(n2, function(s3, l2) {
          O(t2, l2) && "width" !== l2 && (n2[l2] = t2[l2]);
          var o2 = e3.dataset[l2];
          I(o2) || (n2[l2] = i2.sanitizeValue(o2));
        }), n2.content && (n2.type = "inline"), !n2.type && r2 && (n2.type = this.sourceType(r2)), I(a2)) {
          if (!n2.title && "a" == h2) {
            var d2 = e3.title;
            I(d2) || "" === d2 || (n2.title = d2);
          }
          if (!n2.title && "img" == h2) {
            var c2 = e3.alt;
            I(c2) || "" === c2 || (n2.title = c2);
          }
        } else {
          var u2 = [];
          o(n2, function(e4, t3) {
            u2.push(";\\s?" + t3);
          }), u2 = u2.join("\\s?:|"), "" !== a2.trim() && o(n2, function(e4, t3) {
            var s3 = a2, l2 = new RegExp("s?" + t3 + "s?:s?(.*?)(" + u2 + "s?:|$)"), o2 = s3.match(l2);
            if (o2 && o2.length && o2[1]) {
              var r3 = o2[1].trim().replace(/;\s*$/, "");
              n2[t3] = i2.sanitizeValue(r3);
            }
          });
        }
        if (n2.description && "." === n2.description.substring(0, 1)) {
          var g2;
          try {
            g2 = document.querySelector(n2.description).innerHTML;
          } catch (e4) {
            if (!(e4 instanceof DOMException))
              throw e4;
          }
          g2 && (n2.description = g2);
        }
        if (!n2.description) {
          var v2 = e3.querySelector(".glightbox-desc");
          v2 && (n2.description = v2.innerHTML);
        }
        return this.setSize(n2, t2, e3), this.slideConfig = n2, n2;
      } }, { key: "setSize", value: function(e3, t2) {
        var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = "video" == e3.type ? this.checkSize(t2.videosWidth) : this.checkSize(t2.width), s2 = this.checkSize(t2.height);
        return e3.width = O(e3, "width") && "" !== e3.width ? this.checkSize(e3.width) : n2, e3.height = O(e3, "height") && "" !== e3.height ? this.checkSize(e3.height) : s2, i2 && "image" == e3.type && (e3._hasCustomWidth = !!i2.dataset.width, e3._hasCustomHeight = !!i2.dataset.height), e3;
      } }, { key: "checkSize", value: function(e3) {
        return M(e3) ? "".concat(e3, "px") : e3;
      } }, { key: "sanitizeValue", value: function(e3) {
        return "true" !== e3 && "false" !== e3 ? e3 : "true" === e3;
      } }]), e2;
    }(), $ = function() {
      function e2(i2, n2, s2) {
        t(this, e2), this.element = i2, this.instance = n2, this.index = s2;
      }
      return n(e2, [{ key: "setContent", value: function() {
        var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (c(t2, "loaded"))
          return false;
        var n2 = this.instance.settings, s2 = this.slideConfig, l2 = w();
        T(n2.beforeSlideLoad) && n2.beforeSlideLoad({ index: this.index, slide: t2, player: false });
        var o2 = s2.type, r2 = s2.descPosition, a2 = t2.querySelector(".gslide-media"), d2 = t2.querySelector(".gslide-title"), u2 = t2.querySelector(".gslide-desc"), g2 = t2.querySelector(".gdesc-inner"), v2 = i2, f2 = "gSlideTitle_" + this.index, p2 = "gSlideDesc_" + this.index;
        if (T(n2.afterSlideLoad) && (v2 = function() {
          T(i2) && i2(), n2.afterSlideLoad({ index: e3.index, slide: t2, player: e3.instance.getSlidePlayerInstance(e3.index) });
        }), "" == s2.title && "" == s2.description ? g2 && g2.parentNode.parentNode.removeChild(g2.parentNode) : (d2 && "" !== s2.title ? (d2.id = f2, d2.innerHTML = s2.title) : d2.parentNode.removeChild(d2), u2 && "" !== s2.description ? (u2.id = p2, l2 && n2.moreLength > 0 ? (s2.smallDescription = this.slideShortDesc(s2.description, n2.moreLength, n2.moreText), u2.innerHTML = s2.smallDescription, this.descriptionEvents(u2, s2)) : u2.innerHTML = s2.description) : u2.parentNode.removeChild(u2), h(a2.parentNode, "desc-".concat(r2)), h(g2.parentNode, "description-".concat(r2))), h(a2, "gslide-".concat(o2)), h(t2, "loaded"), "video" !== o2) {
          if ("external" !== o2)
            return "inline" === o2 ? (G.apply(this.instance, [t2, s2, this.index, v2]), void (s2.draggable && new V({ dragEl: t2.querySelector(".gslide-inline"), toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: this.instance }))) : void ("image" !== o2 ? T(v2) && v2() : j(t2, s2, this.index, function() {
              var i3 = t2.querySelector("img");
              s2.draggable && new V({ dragEl: i3, toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: e3.instance }), s2.zoomable && i3.naturalWidth > i3.offsetWidth && (h(i3, "zoomable"), new H(i3, t2, function() {
                e3.instance.resize();
              })), T(v2) && v2();
            }));
          Z.apply(this, [t2, s2, this.index, v2]);
        } else
          F10.apply(this.instance, [t2, s2, this.index, v2]);
      } }, { key: "slideShortDesc", value: function(e3) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n2 = document.createElement("div");
        n2.innerHTML = e3;
        var s2 = n2.innerText, l2 = i2;
        if ((e3 = s2.trim()).length <= t2)
          return e3;
        var o2 = e3.substr(0, t2 - 1);
        return l2 ? (n2 = null, o2 + '... <a href="#" class="desc-more">' + i2 + "</a>") : o2;
      } }, { key: "descriptionEvents", value: function(e3, t2) {
        var i2 = this, n2 = e3.querySelector(".desc-more");
        if (!n2)
          return false;
        a("click", { onElement: n2, withCallback: function(e4, n3) {
          e4.preventDefault();
          var s2 = document.body, l2 = u(n3, ".gslide-desc");
          if (!l2)
            return false;
          l2.innerHTML = t2.description, h(s2, "gdesc-open");
          var o2 = a("click", { onElement: [s2, u(l2, ".gslide-description")], withCallback: function(e5, n4) {
            "a" !== e5.target.nodeName.toLowerCase() && (d(s2, "gdesc-open"), h(s2, "gdesc-closed"), l2.innerHTML = t2.smallDescription, i2.descriptionEvents(l2, t2), setTimeout(function() {
              d(s2, "gdesc-closed");
            }, 400), o2.destroy());
          } });
        } });
      } }, { key: "create", value: function() {
        return m(this.instance.settings.slideHTML);
      } }, { key: "getConfig", value: function() {
        k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
        var e3 = new U(this.instance.settings.slideExtraAttributes);
        return this.slideConfig = e3.parseConfig(this.element, this.instance.settings), this.slideConfig;
      } }]), e2;
    }(), J = w(), K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = { selector: ".glightbox", elements: null, skin: "clean", theme: "clean", closeButton: true, startAt: null, autoplayVideos: true, autofocusVideos: true, descPosition: "bottom", width: "900px", height: "506px", videosWidth: "960px", beforeSlideChange: null, afterSlideChange: null, beforeSlideLoad: null, afterSlideLoad: null, slideInserted: null, slideRemoved: null, slideExtraAttributes: null, onOpen: null, onClose: null, loop: false, zoomable: true, draggable: true, dragAutoSnap: false, dragToleranceX: 40, dragToleranceY: 65, preload: true, oneSlidePerOpen: false, touchNavigation: true, touchFollowAxis: true, keyboardNavigation: true, closeOnOutsideClick: true, plugins: false, plyr: { css: "https://cdn.plyr.io/3.6.12/plyr.css", js: "https://cdn.plyr.io/3.6.12/plyr.js", config: { ratio: "16:9", fullscreen: { enabled: true, iosNative: true }, youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 }, vimeo: { byline: false, portrait: false, title: false, transparent: false } } }, openEffect: "zoom", closeEffect: "zoom", slideEffect: "slide", moreText: "See more", moreLength: 60, cssEfects: { fade: { in: "fadeIn", out: "fadeOut" }, zoom: { in: "zoomIn", out: "zoomOut" }, slide: { in: "slideInRight", out: "slideOutLeft" }, slideBack: { in: "slideInLeft", out: "slideOutRight" }, none: { in: "none", out: "none" } }, svg: { close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>', next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>', prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>' }, slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>', lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>' }, te = function() {
      function e2() {
        var i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e2), this.customOptions = i2, this.settings = l(ee, i2), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = false;
      }
      return n(e2, [{ key: "init", value: function() {
        var e3 = this, t2 = this.getSelector();
        t2 && (this.baseEvents = a("click", { onElement: t2, withCallback: function(t3, i2) {
          t3.preventDefault(), e3.open(i2);
        } })), this.elements = this.getElements();
      } }, { key: "open", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (0 === this.elements.length)
          return false;
        this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
        var i2 = M(t2) ? t2 : this.settings.startAt;
        if (k(e3)) {
          var n2 = e3.getAttribute("data-gallery");
          n2 && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n2)), I(i2) && (i2 = this.getElementIndex(e3)) < 0 && (i2 = 0);
        }
        M(i2) || (i2 = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
        var s2 = document.body, l2 = window.innerWidth - document.documentElement.clientWidth;
        if (l2 > 0) {
          var o2 = document.createElement("style");
          o2.type = "text/css", o2.className = "gcss-styles", o2.innerText = ".gscrollbar-fixer {margin-right: ".concat(l2, "px}"), document.head.appendChild(o2), h(s2, "gscrollbar-fixer");
        }
        h(s2, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i2, true), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = true, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
      } }, { key: "openAt", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.open(null, e3);
      } }, { key: "showSlide", value: function() {
        var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        f(this.loader), this.index = parseInt(t2);
        var n2 = this.slidesContainer.querySelector(".current");
        n2 && d(n2, "current"), this.slideAnimateOut();
        var s2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
        if (c(s2, "loaded"))
          this.slideAnimateIn(s2, i2), p(this.loader);
        else {
          f(this.loader);
          var l2 = this.elements[t2], o2 = { index: this.index, slide: s2, slideNode: s2, slideConfig: l2.slideConfig, slideIndex: this.index, trigger: l2.node, player: null };
          this.trigger("slide_before_load", o2), l2.instance.setContent(s2, function() {
            p(e3.loader), e3.resize(), e3.slideAnimateIn(s2, i2), e3.trigger("slide_after_load", o2);
          });
        }
        this.slideDescription = s2.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t2 + 1), this.preloadSlide(t2 - 1)), this.updateNavigationClasses(), this.activeSlide = s2;
      } }, { key: "preloadSlide", value: function(e3) {
        var t2 = this;
        if (e3 < 0 || e3 > this.elements.length - 1)
          return false;
        if (I(this.elements[e3]))
          return false;
        var i2 = this.slidesContainer.querySelectorAll(".gslide")[e3];
        if (c(i2, "loaded"))
          return false;
        var n2 = this.elements[e3], s2 = n2.type, l2 = { index: e3, slide: i2, slideNode: i2, slideConfig: n2.slideConfig, slideIndex: e3, trigger: n2.node, player: null };
        this.trigger("slide_before_load", l2), "video" === s2 || "external" === s2 ? setTimeout(function() {
          n2.instance.setContent(i2, function() {
            t2.trigger("slide_after_load", l2);
          });
        }, 200) : n2.instance.setContent(i2, function() {
          t2.trigger("slide_after_load", l2);
        });
      } }, { key: "prevSlide", value: function() {
        this.goToSlide(this.index - 1);
      } }, { key: "nextSlide", value: function() {
        this.goToSlide(this.index + 1);
      } }, { key: "goToSlide", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e3 < 0 || e3 > this.elements.length - 1))
          return false;
        e3 < 0 ? e3 = this.elements.length - 1 : e3 >= this.elements.length && (e3 = 0), this.showSlide(e3);
      } }, { key: "insertSlide", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        t2 < 0 && (t2 = this.elements.length);
        var i2 = new $(e3, this, t2), n2 = i2.getConfig(), s2 = l({}, n2), o2 = i2.create(), r2 = this.elements.length - 1;
        s2.index = t2, s2.node = false, s2.instance = i2, s2.slideConfig = n2, this.elements.splice(t2, 0, s2);
        var a2 = null, h2 = null;
        if (this.slidesContainer) {
          if (t2 > r2)
            this.slidesContainer.appendChild(o2);
          else {
            var d2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
            this.slidesContainer.insertBefore(o2, d2);
          }
          (this.settings.preload && 0 == this.index && 0 == t2 || this.index - 1 == t2 || this.index + 1 == t2) && this.preloadSlide(t2), 0 === this.index && 0 === t2 && (this.index = 1), this.updateNavigationClasses(), a2 = this.slidesContainer.querySelectorAll(".gslide")[t2], h2 = this.getSlidePlayerInstance(t2), s2.slideNode = a2;
        }
        this.trigger("slide_inserted", { index: t2, slide: a2, slideNode: a2, slideConfig: n2, slideIndex: t2, trigger: null, player: h2 }), T(this.settings.slideInserted) && this.settings.slideInserted({ index: t2, slide: a2, player: h2 });
      } }, { key: "removeSlide", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        if (e3 < 0 || e3 > this.elements.length - 1)
          return false;
        var t2 = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e3];
        t2 && (this.getActiveSlideIndex() == e3 && (e3 == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t2.parentNode.removeChild(t2)), this.elements.splice(e3, 1), this.trigger("slide_removed", e3), T(this.settings.slideRemoved) && this.settings.slideRemoved(e3);
      } }, { key: "slideAnimateIn", value: function(e3, t2) {
        var i2 = this, n2 = e3.querySelector(".gslide-media"), s2 = e3.querySelector(".gslide-description"), l2 = { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlide, slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, o2 = { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideConfig: this.elements[this.index].slideConfig, slideIndex: this.index, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) };
        if (n2.offsetWidth > 0 && s2 && (p(s2), s2.style.display = ""), d(e3, this.effectsClasses), t2)
          g(e3, this.settings.cssEfects[this.settings.openEffect].in, function() {
            i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), T(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
          });
        else {
          var r2 = this.settings.slideEffect, a2 = "none" !== r2 ? this.settings.cssEfects[r2].in : r2;
          this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a2 = this.settings.cssEfects.slideBack.in), g(e3, a2, function() {
            i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), T(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
          });
        }
        setTimeout(function() {
          i2.resize(e3);
        }, 100), h(e3, "current");
      } }, { key: "slideAnimateOut", value: function() {
        if (!this.prevActiveSlide)
          return false;
        var e3 = this.prevActiveSlide;
        d(e3, this.effectsClasses), h(e3, "prev");
        var t2 = this.settings.slideEffect, i2 = "none" !== t2 ? this.settings.cssEfects[t2].out : t2;
        this.slidePlayerPause(e3), this.trigger("slide_before_change", { prev: { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlideIndex, slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, current: { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideIndex: this.index, slideConfig: this.elements[this.index].slideConfig, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) } }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{ index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, { index: this.index, slide: this.activeSlide, player: this.getSlidePlayerInstance(this.index) }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i2 = this.settings.cssEfects.slideBack.out), g(e3, i2, function() {
          var t3 = e3.querySelector(".ginner-container"), i3 = e3.querySelector(".gslide-media"), n2 = e3.querySelector(".gslide-description");
          t3.style.transform = "", i3.style.transform = "", d(i3, "greset"), i3.style.opacity = "", n2 && (n2.style.opacity = ""), d(e3, "prev");
        });
      } }, { key: "getAllPlayers", value: function() {
        return this.videoPlayers;
      } }, { key: "getSlidePlayerInstance", value: function(e3) {
        var t2 = "gvideo" + e3, i2 = this.getAllPlayers();
        return !(!O(i2, t2) || !i2[t2]) && i2[t2];
      } }, { key: "stopSlideVideo", value: function(e3) {
        if (k(e3)) {
          var t2 = e3.querySelector(".gvideo-wrapper");
          t2 && (e3 = t2.getAttribute("data-index"));
        }
        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var i2 = this.getSlidePlayerInstance(e3);
        i2 && i2.playing && i2.pause();
      } }, { key: "slidePlayerPause", value: function(e3) {
        if (k(e3)) {
          var t2 = e3.querySelector(".gvideo-wrapper");
          t2 && (e3 = t2.getAttribute("data-index"));
        }
        var i2 = this.getSlidePlayerInstance(e3);
        i2 && i2.playing && i2.pause();
      } }, { key: "playSlideVideo", value: function(e3) {
        if (k(e3)) {
          var t2 = e3.querySelector(".gvideo-wrapper");
          t2 && (e3 = t2.getAttribute("data-index"));
        }
        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var i2 = this.getSlidePlayerInstance(e3);
        i2 && !i2.playing && i2.play();
      } }, { key: "slidePlayerPlay", value: function(e3) {
        var t2;
        if (!J || null !== (t2 = this.settings.plyr.config) && void 0 !== t2 && t2.muted) {
          if (k(e3)) {
            var i2 = e3.querySelector(".gvideo-wrapper");
            i2 && (e3 = i2.getAttribute("data-index"));
          }
          var n2 = this.getSlidePlayerInstance(e3);
          n2 && !n2.playing && (n2.play(), this.settings.autofocusVideos && n2.elements.container.focus());
        }
      } }, { key: "setElements", value: function(e3) {
        var t2 = this;
        this.settings.elements = false;
        var i2 = [];
        e3 && e3.length && o(e3, function(e4, n2) {
          var s2 = new $(e4, t2, n2), o2 = s2.getConfig(), r2 = l({}, o2);
          r2.slideConfig = o2, r2.instance = s2, r2.index = n2, i2.push(r2);
        }), this.elements = i2, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
          var e4 = m(t2.settings.slideHTML);
          t2.slidesContainer.appendChild(e4);
        }), this.showSlide(0, true)));
      } }, { key: "getElementIndex", value: function(e3) {
        var t2 = false;
        return o(this.elements, function(i2, n2) {
          if (O(i2, "node") && i2.node == e3)
            return t2 = n2, true;
        }), t2;
      } }, { key: "getElements", value: function() {
        var e3 = this, t2 = [];
        this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(i3, n2) {
          var s2 = new $(i3, e3, n2), o2 = s2.getConfig(), r2 = l({}, o2);
          r2.node = false, r2.index = n2, r2.instance = s2, r2.slideConfig = o2, t2.push(r2);
        });
        var i2 = false;
        return this.getSelector() && (i2 = document.querySelectorAll(this.getSelector())), i2 ? (o(i2, function(i3, n2) {
          var s2 = new $(i3, e3, n2), o2 = s2.getConfig(), r2 = l({}, o2);
          r2.node = i3, r2.index = n2, r2.instance = s2, r2.slideConfig = o2, r2.gallery = i3.getAttribute("data-gallery"), t2.push(r2);
        }), t2) : t2;
      } }, { key: "getGalleryElements", value: function(e3, t2) {
        return e3.filter(function(e4) {
          return e4.gallery == t2;
        });
      } }, { key: "getSelector", value: function() {
        return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
      } }, { key: "getActiveSlide", value: function() {
        return this.slidesContainer.querySelectorAll(".gslide")[this.index];
      } }, { key: "getActiveSlideIndex", value: function() {
        return this.index;
      } }, { key: "getAnimationClasses", value: function() {
        var e3 = [];
        for (var t2 in this.settings.cssEfects)
          if (this.settings.cssEfects.hasOwnProperty(t2)) {
            var i2 = this.settings.cssEfects[t2];
            e3.push("g".concat(i2.in)), e3.push("g".concat(i2.out));
          }
        return e3.join(" ");
      } }, { key: "build", value: function() {
        var e3 = this;
        if (this.built)
          return false;
        var t2 = document.body.childNodes, i2 = [];
        o(t2, function(e4) {
          e4.parentNode == document.body && "#" !== e4.nodeName.charAt(0) && e4.hasAttribute && !e4.hasAttribute("aria-hidden") && (i2.push(e4), e4.setAttribute("aria-hidden", "true"));
        });
        var n2 = O(this.settings.svg, "next") ? this.settings.svg.next : "", s2 = O(this.settings.svg, "prev") ? this.settings.svg.prev : "", l2 = O(this.settings.svg, "close") ? this.settings.svg.close : "", r2 = this.settings.lightboxHTML;
        r2 = m(r2 = (r2 = (r2 = r2.replace(/{nextSVG}/g, n2)).replace(/{prevSVG}/g, s2)).replace(/{closeSVG}/g, l2)), document.body.appendChild(r2);
        var d2 = document.getElementById("glightbox-body");
        this.modal = d2;
        var g2 = d2.querySelector(".gclose");
        this.prevButton = d2.querySelector(".gprev"), this.nextButton = d2.querySelector(".gnext"), this.overlay = d2.querySelector(".goverlay"), this.loader = d2.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i2, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g2 && (this.events.close = a("click", { onElement: g2, withCallback: function(t3, i3) {
          t3.preventDefault(), e3.close();
        } })), g2 && !this.settings.closeButton && g2.parentNode.removeChild(g2), this.nextButton && (this.events.next = a("click", { onElement: this.nextButton, withCallback: function(t3, i3) {
          t3.preventDefault(), e3.nextSlide();
        } })), this.prevButton && (this.events.prev = a("click", { onElement: this.prevButton, withCallback: function(t3, i3) {
          t3.preventDefault(), e3.prevSlide();
        } })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", { onElement: d2, withCallback: function(t3, i3) {
          e3.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t3.target, ".ginner-container") || u(t3.target, ".gbtn") || c(t3.target, "gnext") || c(t3.target, "gprev") || e3.close();
        } })), o(this.elements, function(t3, i3) {
          e3.slidesContainer.appendChild(t3.instance.create()), t3.slideNode = e3.slidesContainer.querySelectorAll(".gslide")[i3];
        }), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", { onElement: window, withCallback: function() {
          e3.resize();
        } }), this.built = true;
      } }, { key: "resize", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if ((e3 = e3 || this.activeSlide) && !c(e3, "zoomed")) {
          var t2 = y(), i2 = e3.querySelector(".gvideo-wrapper"), n2 = e3.querySelector(".gslide-image"), s2 = this.slideDescription, l2 = t2.width, o2 = t2.height;
          if (l2 <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i2 || n2) {
            var r2 = false;
            if (s2 && (c(s2, "description-bottom") || c(s2, "description-top")) && !c(s2, "gabsolute") && (r2 = true), n2) {
              if (l2 <= 768)
                n2.querySelector("img");
              else if (r2) {
                var a2 = s2.offsetHeight, u2 = n2.querySelector("img");
                u2.setAttribute("style", "max-height: calc(100vh - ".concat(a2, "px)")), s2.setAttribute("style", "max-width: ".concat(u2.offsetWidth, "px;"));
              }
            }
            if (i2) {
              var g2 = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
              if (!g2) {
                var v2 = i2.clientWidth, f2 = i2.clientHeight, p2 = v2 / f2;
                g2 = "".concat(v2 / p2, ":").concat(f2 / p2);
              }
              var m2 = g2.split(":"), x2 = this.settings.videosWidth, b2 = this.settings.videosWidth, S2 = (b2 = M(x2) || -1 !== x2.indexOf("px") ? parseInt(x2) : -1 !== x2.indexOf("vw") ? l2 * parseInt(x2) / 100 : -1 !== x2.indexOf("vh") ? o2 * parseInt(x2) / 100 : -1 !== x2.indexOf("%") ? l2 * parseInt(x2) / 100 : parseInt(i2.clientWidth)) / (parseInt(m2[0]) / parseInt(m2[1]));
              if (S2 = Math.floor(S2), r2 && (o2 -= s2.offsetHeight), b2 > l2 || S2 > o2 || o2 < S2 && l2 > b2) {
                var w2 = i2.offsetWidth, T2 = i2.offsetHeight, C2 = o2 / T2, k2 = { width: w2 * C2, height: T2 * C2 };
                i2.parentNode.setAttribute("style", "max-width: ".concat(k2.width, "px")), r2 && s2.setAttribute("style", "max-width: ".concat(k2.width, "px;"));
              } else
                i2.parentNode.style.maxWidth = "".concat(x2), r2 && s2.setAttribute("style", "max-width: ".concat(x2, ";"));
            }
          }
        }
      } }, { key: "reload", value: function() {
        this.init();
      } }, { key: "updateNavigationClasses", value: function() {
        var e3 = this.loop();
        d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e3 ? this.index !== this.elements.length - 1 || e3 || h(this.nextButton, "disabled") : h(this.prevButton, "disabled");
      } }, { key: "loop", value: function() {
        var e3 = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
        return e3 = O(this.settings, "loop") ? this.settings.loop : e3, e3;
      } }, { key: "close", value: function() {
        var e3 = this;
        if (!this.lightboxOpen) {
          if (this.events) {
            for (var t2 in this.events)
              this.events.hasOwnProperty(t2) && this.events[t2].destroy();
            this.events = null;
          }
          return false;
        }
        if (this.closing)
          return false;
        this.closing = true, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(e4) {
          e4.removeAttribute("aria-hidden");
        }), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
          if (e3.activeSlide = null, e3.prevActiveSlideIndex = null, e3.prevActiveSlide = null, e3.built = false, e3.events) {
            for (var t3 in e3.events)
              e3.events.hasOwnProperty(t3) && e3.events[t3].destroy();
            e3.events = null;
          }
          var i2 = document.body;
          d(Q, "glightbox-open"), d(i2, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e3.modal.parentNode.removeChild(e3.modal), e3.trigger("close"), T(e3.settings.onClose) && e3.settings.onClose();
          var n2 = document.querySelector(".gcss-styles");
          n2 && n2.parentNode.removeChild(n2), e3.lightboxOpen = false, e3.closing = null;
        });
      } }, { key: "destroy", value: function() {
        this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
      } }, { key: "on", value: function(e3, t2) {
        var i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e3 || !T(t2))
          throw new TypeError("Event name and callback must be defined");
        this.apiEvents.push({ evt: e3, once: i2, callback: t2 });
      } }, { key: "once", value: function(e3, t2) {
        this.on(e3, t2, true);
      } }, { key: "trigger", value: function(e3) {
        var t2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n2 = [];
        o(this.apiEvents, function(t3, s2) {
          var l2 = t3.evt, o2 = t3.once, r2 = t3.callback;
          l2 == e3 && (r2(i2), o2 && n2.push(s2));
        }), n2.length && o(n2, function(e4) {
          return t2.apiEvents.splice(e4, 1);
        });
      } }, { key: "clearAllEvents", value: function() {
        this.apiEvents.splice(0, this.apiEvents.length);
      } }, { key: "version", value: function() {
        return "3.1.0";
      } }]), e2;
    }();
    return function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = new te(e2);
      return t2.init(), t2;
    };
  });
})(glightbox_min);
var glightbox_minExports = glightbox_min.exports;
const GLightbox = /* @__PURE__ */ getDefaultExportFromCjs(glightbox_minExports);
const nodeContact = document.getElementById("elm-contact-form");
if (nodeContact) {
  let resizeImage = function(src) {
    return new Promise((resolve, reject) => {
      const width = 800;
      const image = new Image();
      image.onload = () => {
        const elem = document.createElement("canvas");
        const scaleFactor = width / image.width;
        elem.width = width;
        elem.height = image.height * scaleFactor;
        const ctx = elem.getContext("2d");
        ctx.drawImage(image, 0, 0, width, image.height * scaleFactor);
        const result = ctx.canvas.toDataURL("image/jpeg", 0.85);
        resolve(result);
      };
      image.onerror = (e) => {
        console.log("onerror: ", e);
        reject(e);
      };
      image.src = src;
    });
  };
  var resizeImage2 = resizeImage;
  const app = Elm.Main.init({
    node: nodeContact,
    flags: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  });
  app.ports.resize.subscribe((data) => {
    Promise.all(data.map(resizeImage)).then((resized) => {
      app.ports.resizedImages.send(resized);
    });
  });
}
const btnOpenNav = document.getElementById("btnOpenNav");
if (btnOpenNav) {
  btnOpenNav.addEventListener("click", () => {
    document.getElementById("side-nav").style.width = "100%";
  });
}
const btnCloseNav = document.getElementById("btnCloseNav");
if (btnCloseNav) {
  btnCloseNav.addEventListener("click", () => {
    document.getElementById("side-nav").style.width = "0";
  });
}
GLightbox({
  selector: "glightbox",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  onOpen: () => {
    console.log("Lightbox opened");
  },
  beforeSlideLoad: (slide, data) => {
  }
});
