jQuery( document ).ready( function( $ )
{
	MD5 = function(e){function k(d,e){var f,g,b,c,a;return b=2147483648&d,c=2147483648&e,f=1073741824&d,g=1073741824&e,a=(1073741823&d)+(1073741823&e),f&g?2147483648^a^b^c:f|g?1073741824&a?3221225472^a^b^c:1073741824^a^b^c:a^b^c}function g(a,b,d,e,f,c,g){return a=k(a,k(k(b&d| ~b&e,f),g)),k(a<<c|a>>>32-c,b)}function h(a,b,e,c,f,d,g){return a=k(a,k(k(b&c|e& ~c,f),g)),k(a<<d|a>>>32-d,b)}function i(a,b,d,e,f,c,g){return a=k(a,k(k(b^d^e,f),g)),k(a<<c|a>>>32-c,b)}function j(a,b,d,e,f,c,g){return a=k(a,k(k(d^(b| ~e),f),g)),k(a<<c|a>>>32-c,b)}function l(d){var a,c="",b="";for(a=0;3>=a;a++)c+=(b="0"+(b=d>>>8*a&255).toString(16)).substr(b.length-2,2);return c}var m,n,o,p,a,b,c,d,f=[];for(f=function(f){var b,d=f.length;b=d+8;for(var e=16*((b-b%64)/64+1),c=Array(e-1),g=0,a=0;a<d;)b=(a-a%4)/4,g=a%4*8,c[b]|=f.charCodeAt(a)<<g,a++;return b=(a-a%4)/4,c[b]|=128<<a%4*8,c[e-2]=d<<3,c[e-1]=d>>>29,c}(e=function(c){c=c.replace(/\r\n/g,"\n");for(var b="",d=0;d<c.length;d++){var a=c.charCodeAt(d);128>a?b+=String.fromCharCode(a):(127<a&&2048>a?b+=String.fromCharCode(a>>6|192):(b+=String.fromCharCode(a>>12|224),b+=String.fromCharCode(a>>6&63|128)),b+=String.fromCharCode(63&a|128))}return b}(e)),a=1732584193,b=4023233417,c=2562383102,d=271733878,e=0;e<f.length;e+=16)m=a,n=b,o=c,p=d,a=g(a,b,c,d,f[e+0],7,3614090360),d=g(d,a,b,c,f[e+1],12,3905402710),c=g(c,d,a,b,f[e+2],17,606105819),b=g(b,c,d,a,f[e+3],22,3250441966),a=g(a,b,c,d,f[e+4],7,4118548399),d=g(d,a,b,c,f[e+5],12,1200080426),c=g(c,d,a,b,f[e+6],17,2821735955),b=g(b,c,d,a,f[e+7],22,4249261313),a=g(a,b,c,d,f[e+8],7,1770035416),d=g(d,a,b,c,f[e+9],12,2336552879),c=g(c,d,a,b,f[e+10],17,4294925233),b=g(b,c,d,a,f[e+11],22,2304563134),a=g(a,b,c,d,f[e+12],7,1804603682),d=g(d,a,b,c,f[e+13],12,4254626195),c=g(c,d,a,b,f[e+14],17,2792965006),b=g(b,c,d,a,f[e+15],22,1236535329),a=h(a,b,c,d,f[e+1],5,4129170786),d=h(d,a,b,c,f[e+6],9,3225465664),c=h(c,d,a,b,f[e+11],14,643717713),b=h(b,c,d,a,f[e+0],20,3921069994),a=h(a,b,c,d,f[e+5],5,3593408605),d=h(d,a,b,c,f[e+10],9,38016083),c=h(c,d,a,b,f[e+15],14,3634488961),b=h(b,c,d,a,f[e+4],20,3889429448),a=h(a,b,c,d,f[e+9],5,568446438),d=h(d,a,b,c,f[e+14],9,3275163606),c=h(c,d,a,b,f[e+3],14,4107603335),b=h(b,c,d,a,f[e+8],20,1163531501),a=h(a,b,c,d,f[e+13],5,2850285829),d=h(d,a,b,c,f[e+2],9,4243563512),c=h(c,d,a,b,f[e+7],14,1735328473),b=h(b,c,d,a,f[e+12],20,2368359562),a=i(a,b,c,d,f[e+5],4,4294588738),d=i(d,a,b,c,f[e+8],11,2272392833),c=i(c,d,a,b,f[e+11],16,1839030562),b=i(b,c,d,a,f[e+14],23,4259657740),a=i(a,b,c,d,f[e+1],4,2763975236),d=i(d,a,b,c,f[e+4],11,1272893353),c=i(c,d,a,b,f[e+7],16,4139469664),b=i(b,c,d,a,f[e+10],23,3200236656),a=i(a,b,c,d,f[e+13],4,681279174),d=i(d,a,b,c,f[e+0],11,3936430074),c=i(c,d,a,b,f[e+3],16,3572445317),b=i(b,c,d,a,f[e+6],23,76029189),a=i(a,b,c,d,f[e+9],4,3654602809),d=i(d,a,b,c,f[e+12],11,3873151461),c=i(c,d,a,b,f[e+15],16,530742520),b=i(b,c,d,a,f[e+2],23,3299628645),a=j(a,b,c,d,f[e+0],6,4096336452),d=j(d,a,b,c,f[e+7],10,1126891415),c=j(c,d,a,b,f[e+14],15,2878612391),b=j(b,c,d,a,f[e+5],21,4237533241),a=j(a,b,c,d,f[e+12],6,1700485571),d=j(d,a,b,c,f[e+3],10,2399980690),c=j(c,d,a,b,f[e+10],15,4293915773),b=j(b,c,d,a,f[e+1],21,2240044497),a=j(a,b,c,d,f[e+8],6,1873313359),d=j(d,a,b,c,f[e+15],10,4264355552),c=j(c,d,a,b,f[e+6],15,2734768916),b=j(b,c,d,a,f[e+13],21,1309151649),a=j(a,b,c,d,f[e+4],6,4149444226),d=j(d,a,b,c,f[e+11],10,3174756917),c=j(c,d,a,b,f[e+2],15,718787259),b=j(b,c,d,a,f[e+9],21,3951481745),a=k(a,m),b=k(b,n),c=k(c,o),d=k(d,p);return(l(a)+l(b)+l(c)+l(d)).toLowerCase()}
	
	var caches = [];

	$( window ).on( 'beforeunload', function()
	{
        localStorage.clear();
    });

	CACHE_SET = function( key, value )
	{
		// First use localStorage & then sessionStorage, if all full use var caches!
		try
		{
			localStorage.setItem( key, value );
		}
		catch( e )
		{
			try
			{
				sessionStorage.setItem( key, value );
			}
			catch( e )
			{
				caches[key] = value;
			}
		}
	}

	CACHE_GET = function( key )
	{
		// First use localStorage & then sessionStorage, if all full use var caches!
		try
		{
			return localStorage.getItem( key );
		}
		catch( e )
		{
			try
			{
				return sessionStorage.getItem( key );
			}
			catch( e )
			{
				return caches[key];
			}
		}

		return false;
	}

	GET_CONTENT = function( e )
	{
		$.get( e, function( data )
		{
			CACHE_SET( MD5( e ), data );
		});
	}

	setTimeout( function()
	{
		$( 'a' ).each( function( index, el )
		{
			if ( typeof $( this ).attr( 'href' ) == 'undefined' ) return;

			if ( $( this ).attr( 'href' ).indexOf( 'wp-login.php' ) > -1 ) return;
			
			if ( $( this ).attr( 'href' ).indexOf( 'wp-admin/' ) > -1 ) return;

			var href = $( this ).attr( 'href' );

			var load_cache = false;

			/* Act on the event */
			if ( PRE_EV.Allowed_Hosts == 'internal' )
			{
				if ( $( this ).attr( 'href' ).indexOf( window.location.origin ) > -1 )
				{
					load_cache = true;
				}
			}
			else if( PRE_EV.Allowed_Hosts == 'external' )
			{
				if ( ! $( this ).attr( 'href' ).indexOf( window.location.origin ) > -1 )
				{
					load_cache = true;
				}
			}
			else if( PRE_EV.Allowed_Hosts == 'internal_external' )
			{
				load_cache = true;
			}
			
			if ( load_cache )
			{
				GET_CONTENT( href );
			}
		});

	}, 2000 );

	$( 'a' ).click( function( event )
	{
		if ( typeof $( this ).attr( 'href' ) == 'undefined' ) return;
		
		var anchor = $( this ).attr( 'href' );

		var cache = CACHE_GET( MD5( anchor ) );

		var load_cache = false;

		/* Act on the event */
		if ( PRE_EV.Allowed_Hosts == 'internal' )
		{
			if ( $( this ).attr( 'href' ).indexOf( window.location.origin ) > -1 && cache )
			{
				load_cache = true;
			}
		}
		else if( PRE_EV.Allowed_Hosts == 'external' )
		{
			if ( ! $( this ).attr( 'href' ).indexOf( window.location.origin ) > -1 && cache )
			{
				load_cache = true;
			}
		}
		else if( PRE_EV.Allowed_Hosts == 'internal_external' && cache )
		{
			load_cache = true;
		}

		if ( load_cache )
		{
			event.preventDefault();

			document.open();
	        	
	        	document.write( cache );
	        
	        document.close();
		}
	});
});