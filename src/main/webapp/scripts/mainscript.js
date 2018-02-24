/* 
        @Author : Palash Sarkar
        @CreatedON : 31 Dec, 2017, 5:45:55 PM
        @FILEName :  mainscript.js
 */

  var slide_img_index = 1;
  var slideIndex = 0;
  
  autoPlaySlides ();
  displayItems ( "allitems" );
  
  function plusSlides ( n ) 
  {
      showSlides ( slide_img_index += n , "L" );
  }
  
  function minusSlides ( n )
  {
      showSlides ( slide_img_index -= n , "R" );
  }

  function currentSlide ( n ) 
  {
        var i;
        var slides = document.getElementsByClassName ( "slide_img" );
        var dots = document.getElementsByClassName ( "dot" );
        slide_img_index = n;
        for ( i = 0; i < slides.length; i++ ) 
        {
            slides [ i ].style.display="none";
            slides [ i ].style.animationName="none";
            slides [ i ].style.zIndex="auto";
        }
        for ( i = 0; i < dots.length; i++ ) 
        {
            dots [ i ].className = "dot";
        }
        slides [ slide_img_index-1 ].style.animationName = "fade";
        slides [ slide_img_index-1 ].style.display = "block";  
        dots [ slide_img_index-1 ].className = "dot active";
  }

  function showSlides ( n , dir ) 
  {
        var i;
        var slides = document.getElementsByClassName ( "slide_img" );
        var dots = document.getElementsByClassName ( "dot" );
        if ( n > slides.length ) 
        {
             slide_img_index = 1;
        }    
        if ( n < 1 )
        {
             slide_img_index = slides.length;
        }
        for ( i = 0; i < slides.length; i++ ) 
        {
            slides [ i ].style.display="none";
            slides [ i ].style.animationName="none";
            slides [ i ].style.zIndex="auto";
        }
        for ( i = 0; i < dots.length; i++ ) 
        {
            dots [ i ].className = "dot";
        }
        if ( n > 4 || n === 0 ) 
        {
            if ( dir === "L" )
            {
                 slides [ 3 ].style.zIndex = "-55";
                 slides [ 0 ].style.zIndex = "-45";
                 slides [ 0 ].style.animationName="slideleft";
                 dots [ 0 ].className = "dot active";
                 slides [ 3 ].style.display = "block";
                 slides [ 0 ].style.display = "block";
            }
            if ( dir === "R" )
            {
                 slides [ 3 ].style.zIndex = "-45";
                 slides [ 0 ].style.zIndex = "-55";
                 slides [ 3 ].style.animationName="slideright";
                 dots [ 3 ].className = "dot active";
                 slides [ 3 ].style.display = "block";
                 slides [ 0 ].style.display = "block";
            }
        }
        else
        {
           if ( dir === "L" )
            {
                 slides [ slide_img_index-2 ].style.zIndex = "-55";
                 slides [ slide_img_index-1 ].style.zIndex = "-45";
                 slides [ slide_img_index-1 ].style.animationName="slideleft";
                 dots [ slide_img_index-1 ].className = "dot active";
                 slides [ slide_img_index-1 ].style.display = "block";
                 slides [ slide_img_index-2 ].style.display = "block";
            }
            if ( dir === "R" )
            {
                 slides [ slide_img_index-1 ].style.zIndex = "-45";
                 slides [ slide_img_index ].style.zIndex = "-55";
                 slides [ slide_img_index-1 ].style.animationName="slideright";
                 dots [ slide_img_index-1 ].className = "dot active";
                 slides [ slide_img_index-1 ].style.display = "block";
                 slides [ slide_img_index ].style.display = "block";
            }
       } 
  }
  
  function autoPlaySlides() 
  {
     
     var i;
     var slides = document.getElementsByClassName ( "slide_img" );
     var dots = document.getElementsByClassName ( "dot" );
     for ( i = 0; i < slides.length; i++ ) 
     {
            slides [ i ].style.display="none";
            slides [ i ].style.animationName="none";
            slides [ i ].style.zIndex="auto";
            
     }
     slideIndex += 1;
     if ( slideIndex > slides.length ) 
     { 
         slideIndex = 1;
     }    
    for ( i = 0; i < dots.length; i++ ) 
    {
        dots [ i ].className = "dot";
    }
    slides [ slideIndex-1 ].style.animationName = "fade";
    slides [ slideIndex-1 ].style.display = "block";  
    dots [ slideIndex-1 ].className = "dot active";
    setTimeout ( autoPlaySlides, 2000 ); 
}

function showDrop (type)
{
        var drop_list;
        switch (type)
        {
             case "Categories" : drop_list = document.getElementById ("cat_lst");
                                 break;
                 case "Orders" : drop_list = document.getElementById ("ord_lst");
                                 break;
               case "Tracking" : drop_list = document.getElementById ("track");
                                 break;
                  case "About" : drop_list = document.getElementById ("abt");
                                 break;
               case "UserPort" : drop_list = document.getElementById ("log");
                                 break;
        case "Default Address" : drop_list = document.getElementById ("def_addr");
                                 break;
                       default : break;
        }
        
        if ( drop_list !== null || drop_list !== undefined )
        {
             drop_list.style.display = "block";
             drop_list.onmouseover = function () { drop_list.style.display = "block"; };
             drop_list.onmouseout = function () { drop_list.style.display = "none"; };
        }
}

function hideDrop (type)
{
        var drop_list;
        switch (type)
        {
             case "Categories" : drop_list = document.getElementById ("cat_lst");
                                 break;
                 case "Orders" : drop_list = document.getElementById ("ord_lst");
                                 break;
               case "Tracking" : drop_list = document.getElementById ("track");
                                 break;
                  case "About" : drop_list = document.getElementById ("abt");
                                 break;
               case "UserPort" : drop_list = document.getElementById ("log");
                                 break;
        case "Default Address" : drop_list = document.getElementById ("def_addr");
                                 break;
                       default : break;
        }
        
        if ( drop_list !== null || drop_list !== undefined )
        {
             drop_list.style.display = "none";
        }
}

function displayItems ( category )
{
       var dirs = null;
       var prod_dets = null;
       var tab = null;
       
       switch ( category )
       {
            case "allitems" : dirs = assign ( dirs, "allitems" );
                              prod_dets = assignProdText ( prod_dets, "allitems" );
                              tab = document.getElementById ( "products" );
                              delExistingProdTabRows ( tab );
                              tab = appendNewRowsToProdTab ( dirs, prod_dets, tab );
                              break;
             case "watches" : dirs = assign ( dirs, "watches" );
                              prod_dets = assignProdText ( prod_dets, "watches" );
                              tab = document.getElementById ( "products" );
                              delExistingProdTabRows ( tab );
                              tab = appendNewRowsToProdTab ( dirs, prod_dets, tab );
                              break;
      case "homeappliances" : dirs = assign ( dirs, "homeappliances" );
                              prod_dets = assignProdText ( prod_dets, "homeappliances" );
                              tab = document.getElementById ( "products" );
                              delExistingProdTabRows ( tab );
                              tab = appendNewRowsToProdTab ( dirs, prod_dets, tab );
                              break;
         case "electronics" : dirs = assign ( dirs, "electronics" );
                              prod_dets = assignProdText ( prod_dets, "electronics" );
                              tab = document.getElementById ( "products" );
                              delExistingProdTabRows ( tab );
                              tab = appendNewRowsToProdTab ( dirs, prod_dets, tab );
                              break;
                    default : break;
       } 
       
       startLoad ( tab );
}

function startLoad ( tab )
{
      if ( document.getElementById ( "result" ) !== null )
      {
           document.getElementById ( "result" ).style.display = "none";
           document.getElementById ( "result" ).id = "loading_div";
           tab.style.display = "none";
           
      }
      document.getElementById ( "loading_div" ).style.display = "block";
      document.getElementById ( "loading_div" ).getElementsByClassName ( "loader_container" ) [ 0 ].style.display = "block";
      setTimeout( displayResultDiv, 5000, tab );
}

function displayResultDiv ( tab )
{
     document.getElementById ( "loading_div" ).style.display = "none";
     document.getElementById ( "loading_div" ).getElementsByClassName ( "loader_container" ) [ 0 ].style.display = "none";
     document.getElementById ( "loading_div" ).id = "result";
     document.getElementById( "result" ).style.display = "block";
     tab.style.display = "block";
}

function delExistingProdTabRows ( tab )
{
     var rows = tab.getElementsByTagName ( "TR" );
     for (var x=rows.length-1; x>=0; x=x-1 )
     {
                rows [ x ].parentNode.removeChild ( rows [ x ] );
     }
}

function appendNewRowsToProdTab ( dirs, prod_dets, tab )
{
     var nop = 0;
     while ( nop<dirs.length )
     {
            var x;
            var tr = document.createElement ( "TR" );
            for (x = 0; x<3; x=x+1)
            {
                 if ( nop<dirs.length )
                   {
                          tr = setTabRow ( tr, prod_dets [ nop ], dirs [ nop ], "allitems" );
                          nop=nop+1;
                   }
                   else
                   break;
            }
            tab.appendChild ( tr );
       }
       return ( tab );
}

function setTabRow ( tr, ptext, img_loc, cls )
{
        var td = document.createElement ( "TD" );
        td.className = cls;
        var span_img = document.createElement ( "SPAN" );
        span_img.className = "prod_img";
        span_img.style.backgroundImage = img_loc;
        var span_imgtext = document.createElement ( "SPAN" );
        span_imgtext.className = "prod_text";
        var text_bold = document.createElement ( "B" );
        text_bold.innerHTML = ptext [ 0 ] + "<br/>" + ptext [ 1 ];
        span_imgtext.appendChild ( text_bold );
        var crt_btn = document.createElement( "BUTTON" );
        crt_btn.className = "adcrt";
        crt_btn.innerHTML = "Add To Cart";
        var odn_btn = document.createElement ( "BUTTON" );
        odn_btn.className = "ordnw";
        odn_btn.innerHTML = "Order Now";
        td.appendChild ( span_img );
        td.appendChild ( span_imgtext );
        td.appendChild ( crt_btn );
        td.appendChild ( odn_btn );
        tr.appendChild ( td );
        return ( tr );
}

function assign ( dirs, cat )
{
       if ( cat === "allitems" )
       {
             dirs = [ "url('images/categories/electronics/laptops/lenovo.jpg')",
                      "url('images/categories/electronics/laptops/macbook.jpeg')",
                      "url('images/categories/electronics/laptops/microsoft.png')",
                      "url('images/categories/electronics/mobiles/iphone.jpg')",
                      "url('images/categories/electronics/mobiles/lg.jpg')",
                      "url('images/categories/electronics/mobiles/samsung.png')",
                      "url('images/categories/electronics/mobiles/xiaomi.jpeg')",
                      "url('images/categories/electronics/tablets/ipad.jpg')",
                      "url('images/categories/electronics/tablets/lenovo.png')",
                      "url('images/categories/electronics/tablets/samsung.png')",
                      "url('images/categories/electronics/tablets/sony.png')",
                      "url('images/categories/electronics/tvs/lg.jpg')",
                      "url('images/categories/electronics/tvs/samsung.jpg')",
                      "url('images/categories/electronics/tvs/sharp.jpeg')",
                      "url('images/categories/electronics/tvs/sony.jpeg')",
                      "url('images/categories/home appliances/food processors/bajaj.jpeg')",
                      "url('images/categories/home appliances/food processors/cuisinart.jpg')",
                      "url('images/categories/home appliances/food processors/philips.jpeg')",
                      "url('images/categories/home appliances/food processors/prestiege.jpg')",
                      "url('images/categories/home appliances/microwave ovens/bd.jpg')",
                      "url('images/categories/home appliances/microwave ovens/magicchef.jpg')",
                      "url('images/categories/home appliances/microwave ovens/panasonic.jpg')",
                      "url('images/categories/home appliances/microwave ovens/samsung.jpg')",
                      "url('images/categories/home appliances/toasters/breville.jpg')",
                      "url('images/categories/home appliances/toasters/daewood.jpg')",
                      "url('images/categories/home appliances/toasters/kitchensmith.jpg')",
                      "url('images/categories/home appliances/toasters/sunbeam.jpg')",
                      "url('images/categories/home appliances/water filters/carbon_filter.jpg')",
                      "url('images/categories/home appliances/water filters/kent_gold.jpg')",
                      "url('images/categories/home appliances/water filters/kent_grand.jpeg')",
                      "url('images/categories/home appliances/water filters/steel.jpg')",
                      "url('images/categories/watches/analog/casio.jpg')",
                      "url('images/categories/watches/analog/shshd.jpg')",
                      "url('images/categories/watches/analog/slazenger.jpg')",
                      "url('images/categories/watches/analog/titan.jpg')",
                      "url('images/categories/watches/designer/angela_bos.jpg')",
                      "url('images/categories/watches/designer/henry_london.jpg')",
                      "url('images/categories/watches/designer/luxurman.jpg')",
                      "url('images/categories/watches/designer/rolex.jpg')",
                      "url('images/categories/watches/digital/barun.jpg')",
                      "url('images/categories/watches/digital/gucci.jpg')",
                      "url('images/categories/watches/digital/omega_pulsar.jpg')",
                      "url('images/categories/watches/digital/seiko.jpg')",
                      "url('images/categories/watches/smart/apple_watch.jpg')",
                      "url('images/categories/watches/smart/bogamigo.jpg')",
                      "url('images/categories/watches/smart/mi_retro.jpg')",
                      "url('images/categories/watches/smart/polar.jpg')"
                  ];
       }
       if ( cat === "watches" )
       {
            dirs = [ "url('images/categories/watches/analog/casio.jpg')",
                     "url('images/categories/watches/analog/shshd.jpg')",
                     "url('images/categories/watches/analog/slazenger.jpg')",
                     "url('images/categories/watches/analog/titan.jpg')",
                     "url('images/categories/watches/designer/angela_bos.jpg')",
                     "url('images/categories/watches/designer/henry_london.jpg')",
                     "url('images/categories/watches/designer/luxurman.jpg')",
                     "url('images/categories/watches/designer/rolex.jpg')",
                     "url('images/categories/watches/digital/barun.jpg')",
                     "url('images/categories/watches/digital/gucci.jpg')",
                     "url('images/categories/watches/digital/omega_pulsar.jpg')",
                     "url('images/categories/watches/digital/seiko.jpg')",
                     "url('images/categories/watches/smart/apple_watch.jpg')",
                     "url('images/categories/watches/smart/bogamigo.jpg')",
                     "url('images/categories/watches/smart/mi_retro.jpg')",
                     "url('images/categories/watches/smart/polar.jpg')"
                  ];
       }
       if ( cat === "homeappliances" )
       {
            dirs = [  "url('images/categories/home appliances/food processors/bajaj.jpeg')",
                      "url('images/categories/home appliances/food processors/cuisinart.jpg')",
                      "url('images/categories/home appliances/food processors/philips.jpeg')",
                      "url('images/categories/home appliances/food processors/prestiege.jpg')",
                      "url('images/categories/home appliances/microwave ovens/bd.jpg')",
                      "url('images/categories/home appliances/microwave ovens/magicchef.jpg')",
                      "url('images/categories/home appliances/microwave ovens/panasonic.jpg')",
                      "url('images/categories/home appliances/microwave ovens/samsung.jpg')",
                      "url('images/categories/home appliances/toasters/breville.jpg')",
                      "url('images/categories/home appliances/toasters/daewood.jpg')",
                      "url('images/categories/home appliances/toasters/kitchensmith.jpg')",
                      "url('images/categories/home appliances/toasters/sunbeam.jpg')",
                      "url('images/categories/home appliances/water filters/carbon_filter.jpg')",
                      "url('images/categories/home appliances/water filters/kent_gold.jpg')",
                      "url('images/categories/home appliances/water filters/kent_grand.jpeg')",
                      "url('images/categories/home appliances/water filters/steel.jpg')"
                   ];
       }
       if ( cat === "electronics" )
       {
            dirs = [  "url('images/categories/electronics/laptops/lenovo.jpg')",
                      "url('images/categories/electronics/laptops/macbook.jpeg')",
                      "url('images/categories/electronics/laptops/microsoft.png')",
                      "url('images/categories/electronics/mobiles/iphone.jpg')",
                      "url('images/categories/electronics/mobiles/lg.jpg')",
                      "url('images/categories/electronics/mobiles/samsung.png')",
                      "url('images/categories/electronics/mobiles/xiaomi.jpeg')",
                      "url('images/categories/electronics/tablets/ipad.jpg')",
                      "url('images/categories/electronics/tablets/lenovo.png')",
                      "url('images/categories/electronics/tablets/samsung.png')",
                      "url('images/categories/electronics/tablets/sony.png')",
                      "url('images/categories/electronics/tvs/lg.jpg')",
                      "url('images/categories/electronics/tvs/samsung.jpg')",
                      "url('images/categories/electronics/tvs/sharp.jpeg')",
                      "url('images/categories/electronics/tvs/sony.jpeg')"
                   ];
       }
       return ( dirs );
}

function assignProdText ( prod_dets, cat )
{
       if ( cat === "allitems" )
       {
         prod_dets = [  [ "LenovoLaptop", "Rs. 28999" ],
                        [ "Apple MacbookAir", "Rs. 62599" ],
                        [ "Micrsoft SurfacePro", "Rs. 75999" ],
                        [ "iphone 7", "Rs. 78599" ],
                        [ "LG G5", "Rs. 18699" ],
                        [ "Samsung S8", "Rs. 68999" ],
                        [ "Redmi 4", "Rs. 8999" ],
                        [ "Ipad Air2", "Rs. 58999" ],
                        [ "Lenovo YOGA", "Rs. 12999" ],
                        [ "Samsung Tablet", "Rs. 7999" ],
                        [ "Sony Tablet", "Rs. 11999" ],
                        [ "Lg OLED 27'", "Rs. 118999" ],
                        [ "Samsung LED 34'", "Rs. 228999" ],
                        [ "Sharp ChironLED 36'", "Rs. 325999" ],
                        [ "Sony LCD 22'", "Rs. 35999" ],
                        [ "Bajaj MX250", "Rs. 11999" ],
                        [ "Cuisinart Mixer", "Rs. 6999" ],
                        [ "Philips FP231", "Rs. 14999" ],
                        [ "Prestiege Silver", "Rs. 8999" ],
                        [ "BD", "Rs. 18999" ],
                        [ "Magichef", "Rs. 12999" ],
                        [ "Panasonic Invert", "Rs. 11999" ],
                        [ "Samsung Mrc", "Rs. 18999" ],
                        [ "Breville Toaster", "Rs. 5999" ],
                        [ "Daewood Toaster", "Rs. 8999" ],
                        [ "Kitchensmith", "Rs. 7999" ],
                        [ "Sunbeam Toaster", "Rs. 10999" ],
                        [ "Carbon_Filter", "Rs. 8999" ],
                        [ "Kent Gold", "Rs. 4999" ],
                        [ "Kent Grand", "Rs. 11999" ],
                        [ "Steel Filter", "Rs. 699" ],
                        [ "Casio", "Rs. 5999" ],
                        [ "Shshd", "Rs. 3999" ],
                        [ "Slazenger", "Rs. 8999" ],
                        [ "Titan", "Rs. 6999" ],
                        [ "Angela BOS", "Rs. 38999" ],
                        [ "Henry London", "Rs. 58099" ],
                        [ "Luxurman", "Rs.1028999" ],
                        [ "Rolex", "Rs. 1225999" ],
                        [ "Barun", "Rs. 12999" ],
                        [ "Gucci", "Rs. 38999" ],
                        [ "Omega Pulsar", "Rs. 29999" ],
                        [ "Seiko", "Rs. 18999" ],
                        [ "Apple Watch", "Rs. 28999" ],
                        [ "Bogamigo", "Rs. 8999" ],
                        [ "Mi Retro", "Rs. 2999" ],
                        [ "Polar", "Rs. 7999" ]
                    ];
       }
       if ( cat === "watches" )
       {
            prod_dets = [ [ "Casio", "Rs. 5999" ],
                          [ "Shshd", "Rs. 3999" ],
                          [ "Slazenger", "Rs. 8999" ],
                          [ "Titan", "Rs. 6999" ],
                          [ "Angela BOS", "Rs. 38999" ],
                          [ "Henry London", "Rs. 58099" ],
                          [ "Luxurman", "Rs.1028999" ],
                          [ "Rolex", "Rs. 1225999" ],
                          [ "Barun", "Rs. 12999" ],
                          [ "Gucci", "Rs. 38999" ],
                          [ "Omega Pulsar", "Rs. 29999" ],
                          [ "Seiko", "Rs. 18999" ],
                          [ "Apple Watch", "Rs. 28999" ],
                          [ "Bogamigo", "Rs. 8999" ],
                          [ "Mi Retro", "Rs. 2999" ],
                          [ "Polar", "Rs. 7999" ]
                       ];
       }
       if ( cat === "homeappliances" )
       {
            prod_dets = [ [ "Bajaj MX250", "Rs. 11999" ],
                          [ "Cuisinart Mixer", "Rs. 6999" ],
                          [ "Philips FP231", "Rs. 14999" ],
                          [ "Prestiege Silver", "Rs. 8999" ],
                          [ "BD", "Rs. 18999" ],
                          [ "Magichef", "Rs. 12999" ],
                          [ "Panasonic Invert", "Rs. 11999" ],
                          [ "Samsung Mrc", "Rs. 18999" ],
                          [ "Breville Toaster", "Rs. 5999" ],
                          [ "Daewood Toaster", "Rs. 8999" ],
                          [ "Kitchensmith", "Rs. 7999" ],
                          [ "Sunbeam Toaster", "Rs. 10999" ],
                          [ "Carbon_Filter", "Rs. 8999" ],
                          [ "Kent Gold", "Rs. 4999" ],
                          [ "Kent Grand", "Rs. 11999" ],
                          [ "Steel Filter", "Rs. 699" ]
                       ];
       }
       if ( cat === "electronics" )
       {
             prod_dets = [ [ "LenovoLaptop", "Rs. 28999" ],
                           [ "Apple MacbookAir", "Rs. 62599" ],
                           [ "Micrsoft SurfacePro", "Rs. 75999" ],
                           [ "iphone 7", "Rs. 78599" ],
                           [ "LG G5", "Rs. 18699" ],
                           [ "Samsung S8", "Rs. 68999" ],
                           [ "Redmi 4", "Rs. 8999" ],
                           [ "Ipad Air2", "Rs. 58999" ],
                           [ "Lenovo YOGA", "Rs. 12999" ],
                           [ "Samsung Tablet", "Rs. 7999" ],
                           [ "Sony Tablet", "Rs. 11999" ],
                           [ "Lg OLED 27'", "Rs. 118999" ],
                           [ "Samsung LED 34'", "Rs. 228999" ],
                           [ "Sharp ChironLED 36'", "Rs. 325999" ],
                           [ "Sony LCD 22'", "Rs. 35999" ]
                        ];
       }
       return ( prod_dets );
}

function close_modalsncovers ( x )
{
       console.log("done");
       x.parentNode.style.display="none";
       x.parentNode.parentNode.style.display="none";
       document.getElementById("mod_slide_box").style.left="-4px";
       var tmp = document.getElementsByClassName("mod_slide_box_drw");
       for (var i=0;i<tmp.length;i++)
       {
            tmp[i].style.display="none";
       }
}

function show_modals ( y )
{
     parent.document.getElementById("page_cover").style.display="block";
     switch (y)
     {
            case "user_reg" : document.getElementById("user_reg").style.display="block";
                              break;
                 case "map" : document.getElementById("add_map").style.display="block";
                              break;
                    default : break;
     }
}

function show_cart()
{
       var crt = document.getElementById("crt");
       if ( crt.style.display === "none")
       {
             crt.style.display="block";
       }
       else
       {
            crt.style.display="none";
       }
}

function loadMap() 
{
      
       var map=new google.maps.Map(document.getElementById("map"),
                                    {
                                        center:new google.maps.LatLng(23.257306, 87.846894),
                                        zoom:15,
                                        mapTypeId: google.maps.MapTypeId.TERRAIN
                                    });
}

function passwordShowHide() 
                           {
                                   var pss = document.getElementById("ent_pss_inp");
                                   if (pss.type === "password")
                                   {
                                       pss.type = "text";
                                   } 
                                   else
                                   {
                                       pss.type = "password"; 
                                   }
                           }




