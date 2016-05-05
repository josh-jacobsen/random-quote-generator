

function getQuote() {
  $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $("#display-area").html(data.quote);
        $("#author").html(data.author);
      },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "ipUKzcbghrmsh1KZ4q8qfg3wH63Ep1Xte51jsn4x0FiSdr9Dm4"); // Enter here your Mashape key
      }
  });
}








// function getQuote() {
//   $.ajax({
//      url: 'http://quotes.rest/qod.json',
//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'json',
//      success: function(data) {
//         console.log(data);
//         console.log(data.contents.quotes[0].quote);
//         $("#display-area").html(data.contents.quotes[0].quote);
//      },
//      type: 'GET'
//   });
// }

// function getQuote() {
//    $.ajax({
//        url: 'http://api.forismatic.com/api/1.0/',
//        data: {
//         method: 'getQuote',
//         format: 'jsonp',
//         lang: 'en',
//         jsonp: 'parseQuote',
//     },
//     error: function() {
//           //$('#info').html('<p>An error has occurred</p>');
//           alert("error")
//       },
//       dataType: 'jsonp',
//       jsonpCallback: 'parseQuote',
//       success: function(data) {
//          console.log(data.quoteText);
//          $("#display-area").html(data.quoteText);
//      },
//      type: 'GET'
//    });
// }

// +++++++++++++++++++++ CHUCK NORRIS ++++++++++++++++++++++++++++

// +++++++++ VANILLA JS +++++++++++++++++++//
// function getQuote() {

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://api.icndb.com/jokes/random", false);
//   xhr.send();

//   console.log(xhr);
//   var data = xhr.responseText;
//   var jsonResponse = JSON.parse(data);
//   var txt = jsonResponse["value"]["joke"];
//   var display = document.getElementById("display-area");
//   display.innerHTML = txt;
// }

// +++++++++ JQUEIRY +++++++++++++++++++//

// function getQuote() {
//   $.ajax({
//      url: 'http://api.icndb.com/jokes/random',
//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'jsonp',
//      success: function(data) {
//         console.log(data);
//         $("#display-area").html(data.value.joke);
//      },
//      type: 'GET'
//   });
// }

// // +++++++++++++++++++++ QUTOES ON DESIGN ++++++++++++++++++++++++++++
// Needs server +++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function getQuote() {
//     $.ajax( {
//       url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//       success: function(data) {
//         console.log(data);
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#display-area').append(post.content);
//       },
//       cache: false
//     });
// }


// // +++++++++++++++++++++ THEY SAID SO ++++++++++++++++++++++++++++

// function getQuote() {
//   $.ajax({
//      url: 'http://quotes.rest/qod.json',
//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'json',
//      success: function(data) {
//         console.log(data);
//         console.log(data.contents.quotes[0].quote);
//         $("#display-area").html(data.contents.quotes[0].quote);
//      },
//      type: 'GET'
//   });
// }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // +++++++++++++++++++++ QUTOES ON DESIGN (Doesn't cycle)++++++++++++++++++++++++++++

// +++++++++ JSON Format (Doesn't work : No Header Error) +++++++++++++++++++//
// function getQuote() {

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://quotesondesign.com/api/3.0/api-3.0.json", false);
//   xhr.send();

//   var data = xhr.responseText;
//   var jsonResponse = JSON.parse(data);
//   var txt = jsonResponse["value"]["joke"];
//   var display = document.getElementById("display-area");
//   display.innerHTML = txt;
// }

// +++++++++ JQUEIRY +++++++++++++++++++//

// function getQuote() {
//   $.ajax({
//     headers: {
//       contentType: "application/x-www-form-urlencoded; charset=UTF-8"
//     },
//     url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//     crossDomain: true,
//     data: {
//        format: 'json'
//     },
//     xhrFields: {
//       withCredentials: true
//     },
//     error: function() {
//       $('#display-area').html('<p>An error has occurred</p>');
//     },
//     dataType: 'jsonp',
//     success: function(data) {
//       console.log(data);
//       $("#display-area").html(data);
//     },
//     type: 'GET'
//   });
// }

// function getQuote() {
//   $.get("http://www.example.org/ajax.php").done(function (data) {
//       console.log(data);
//   });
// }

// function getQuote() {
//   $.ajax({
//      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//      mimeType: "application/javascript",
//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'jsonp',
//      success: function(data) {
//         console.log(data);
//         $("#display-area").html(data.value.joke);
//      },
//      type: 'GET'
//   });
// }


// function getQuote() {
//   $.ajax( {
//     url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//     success: function(data) {
//       console.log(data);
//       var post = data.shift(); // The data is an array of posts. Grab the first one.
//       $('#display-area').text(post.title);
//       $('#display-area').html(post.content);

//       // If the Source is available, use it. Otherwise hide it.
//       if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//         $('#display-area').html('Source:' + post.custom_meta.Source);
//       } else {
//         $('#display-area').text('');
//       }
//     },
//     cache: false
//   });
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // +++++++++++++++++++++ THEY SAID SO . COM (Doesn't Cycle ++++++++++++++++++++++++++++

// +++++++++ xml Format  +++++++++++++++++++//
//  function getQuote() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://quotes.rest/qod.xml", false);
//   xhr.send();

//   xmlDocument = xhr.responseXML;
//   txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;

//   var display = document.getElementById("display-area");
//   display.innerHTML = txt;
// }




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // +++++++++++++++++++++ FORISMATIC.COM ++++++++++++++++++++++++++++

// +++++++++ xml Format  +++++++++++++++++++//
//  function getQuote() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://api.forismatic.com/api/1.0/", false);
//   xhr.send();

//   xmlDocument = xhr.responseXML;
//   txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;

//   var display = document.getElementById("display-area");
//   display.innerHTML = txt;
// }

// +++++++++ JQUEIRY +++++++++++++++++++//

// function getQuote() {
//   $.ajax({
//      url: 'http://api.forismatic.com/api/1.0/',
//      type: 'GET',

//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'jsonp',
//      success: function(data) {
//         console.log(data);
//         //$("#display-area").html(data.quote);
//      },
//   });
// }



// $('#get-another-quote-button').on('click', function(e) {
//     e.preventDefault();
//     $.ajax( {
//       url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//       success: function(data) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#quote-title').text(post.title);
//         $('#quote-content').html(post.content);

//         // If the Source is available, use it. Otherwise hide it.
//         if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//           $('#quote-source').html('Source:' + post.custom_meta.Source);
//         } else {
//           $('#quote-source').text('');
//         }
//       },
//       cache: false
//     });
//   });
// });






















// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// $.ajax({
//   url: 'https://www.selectabase.co.uk/api/v1/tps/' + selfValue + '/',
//   type: 'get',
//   dataType: 'jsonp',
//   data: {
//     format: format,
//     username: username,
//     api_key: api_key
//   },
//   success: function(data) {
//   console.log(data);
//   },
//   error: function() {

//   },
//   jsonp: 'jsonp'
// });



































// function getQuote() {
//     $.ajax( {
//       url: 'http://quotesondesign.com/wp-json/posts',
//       success: function(data) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#display-area').text(post.title);
//         $('#display-area').html(post.content);

//         // If the Source is available, use it. Otherwise hide it.
//         if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//           $('#display-area').html('Source:' + post.custom_meta.Source);
//         } else {
//           $('#display-area').text('');
//         }
//       },
//       cache: false
//     });
// }

// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
// });


// +++++++++ CORS that doesn't work +++++++++++++++++++//
// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function getQuote() {
//   // All HTML5 Rocks properties support CORS.
//   var url = 'http://api.icndb.com/jokes/random';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };

//   xhr.send();
// }


//+++++++++++++++ XML Format +++++++++++++++ //

//  function getQuote() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://quotes.rest/qod.xml", false);
// //  Results in a "No 'Access-Control-Allow-Origin' header" error
// //  xhr.open("GET", "http://quotes.rest/", false);
//   //xhr.setRequestHeader('Content-Type', 'text/xml');
//   xhr.send();
//   //alert("Getting quote");
//   console.log(xhr.status);
//   console.log(xhr.statusText);
//   //console.log(xhr);
//   xmlDocument = xhr.responseXML;
//   console.log(xmlDocument);//.childNodes['0'].textContent);
//   //console.log(xhr);
//   //var json = JSON.parse(xhr);
//   //console.log(json);

//   txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
//   console.log(txt);

//   var display = document.getElementById("display-area");
//   //display.style.backgroundColor = "blue";
//   display.innerHTML = txt;
//   console.log(typeof xhr);
// }



  //console.log(xhr);
 // xmlDocument = xhr.responseXML;
  //console.log(xmlDocument);//.childNodes['0'].textContent);
  //console.log(xhr);


  //txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
  //console.log(txt);

  //var display = document.getElementById("display-area");
  //display.style.backgroundColor = "blue";
  //display.innerHTML = txt;
//}

//var url = 'http://api.alice.com/cors';
//xhr.send();




// +++++++++++++ EXAMPLE JQUERY FUNCTION +++++++++++++ //
// $('#action-button').click(function() {
//    $.ajax({
//       url: 'http://api.joind.in/v2.1/talks/10889',
//       data: {
//          format: 'json'
//       },
//       error: function() {
//          $('#info').html('<p>An error has occurred</p>');
//       },
//       dataType: 'jsonp',
//       success: function(data) {
//          var $title = $('<h1>').text(data.talks[0].talk_title);
//          var $description = $('<p>').text(data.talks[0].talk_description);
//          $('#info')
//             .append($title)
//             .append($description);
//       },
//       type: 'GET'
//    });
// });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function e(id){return document.getElementById(id)}
// function s(id)
// {
//   if( document.getElementById(id) )
//   {
//     return document.getElementById(id).style;
//   }
// }


// function ajax(url, params, callback)
// {
//   AJAXCallback = callback;
//   AJAXRequest=initXMLHTTPRequest();
//   if (AJAXRequest)
//   {
//     AJAXRequest.onreadystatechange=onReadyState;
//     AJAXRequest.open("POST",url,true);
//     AJAXRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     AJAXRequest.send(params);
//   }
// }

// function initXMLHTTPRequest()
// {
//   var xRequest=null;
//   if (window.XMLHttpRequest)
//   {
//     xRequest=new XMLHttpRequest();
//   } else if (window.ActiveXObject)
//   {
//     xRequest=new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   return xRequest;
// }

// function onReadyState()
// {
//   var ready=AJAXRequest.readyState;

//   if (ready==4)
//   {
//     AJAXCallback(AJAXRequest.responseText);
//   }
//   else
//   {
//     return 0;
//   }
// }


// // Функция обработки события и получения цитат клиентская сторона
// function formSubmit()
// {
//   var t = e('t').value;
//   var now = new Date();
//   wait = now.getTime();
//   var key = wait - t;
//   request = 'method=getQuote&format=json&param=ms&lang='+lang.langV;
//   ajax('/api/1.0/', request, formSubmitResult);
//   count++;
//   s('mainLink').display = 'none';
//   s('aut').display = 'none';
//   s('share').display = 'none';
//   preloader(e('words'));
//   s('mLinks').display = 'none';
//   s('navAct').display = 'none';
//   s('navDisbl').display = 'block';
//   s('nav1Disbl').display = 'none';
//   init(1);
// }

// Для homepage
// function getQuote()
// {
//   var request = 'method=getQuote&format=json&lang=en';
//   var url = "http://api.forismatic.com/api/1.0/";
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.send(request);
// }


// function getQuote() {
//   $.ajax({
//      url: 'http://api.forismatic.com/api/1.0/',
//      data: {
//         format: 'json'
//      },


//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },

//      dataType: 'jsonp',

//      success: function(data) {
//         console.log(data);
//         $("#display-area").html(data.value.joke);
//      },
//      type: 'GET'
//   });
// }

// function getQuote() {
// $.ajax({
//     type: "POST",
//     dataType: 'text',
//     url: api,
//     username: 'user',
//     password: 'pass',
//     crossDomain : true,
//     xhrFields: {
//         withCredentials: true
//     }
// })
//     .done(function( data ) {
//         console.log("done");
//     })
//     .fail( function(xhr, textStatus, errorThrown) {
//         alert(xhr.responseText);
//         alert(textStatus);
//     });
// }

//   // origional - ajax('/api/1.0/', request, result);
//   ajax("http://api.forismatic.com/api/1.0/", request); //, result);
// }


// function ajax(url, params) //, callback)
// {
//   //AJAXCallback = callback;
//   var AJAXRequest = new XMLHttpRequest();
//   if (AJAXRequest)
//   {
//     AJAXRequest.onreadystatechange=onReadyState;
//     AJAXRequest.open("POST",url,true);
//     AJAXRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     AJAXRequest.send(params);
//   }
// }
// // function getQuote() {

// //   var xhr = new XMLHttpRequest();
// //   xhr.open("GET", "http://api.icndb.com/jokes/random", false);
// //   xhr.send();

// //   console.log(xhr);
// //   var data = xhr.responseText;
// //   var jsonResponse = JSON.parse(data);
// //   var txt = jsonResponse["value"]["joke"];
// //   var display = document.getElementById("display-area");
// //   display.innerHTML = txt;
// // }