/* 
        @Author : Palash Sarkar
        @CreatedON : 31 Dec, 2017, 5:45:55 PM
        @FILEName : ajx.js
 */

//prod_cat_submit();

//prod_submit();

get_pds("0");

  function user_reg_submit() 
  {
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
                                                  if (this.readyState === 4 && this.status === 200) {
                                                      document.getElementById("user_reg").innerHTML=this.responseText;
                                                    }
                                             };
  xhttp.open("POST", "mainServlet", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var str="firstname="+document.getElementById("fstname").value+"&lastname="+document.getElementById("lstname").value+"&mobno="+document.getElementById("mobno").value+"&emailid="+document.getElementById("eml").value+"&pass="+document.getElementById("pass").value+"&locality="+document.getElementById("loc").value+"&city="+document.getElementById("cty").value+"&pincode="+document.getElementById("pin").value+"&state="+document.getElementById("state").value+"&country="+document.getElementById("cntry").value+"&case=1";
  xhttp.send(str);
}

  function prod_cat_submit() 
  {
         var obj = {CAT_ARR : [{CATEGORY:"Electronics"},{CATEGORY:"Watches"},{CATEGORY:"Home Appliances"}]};
         document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="block";
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
                                                  if (this.readyState === 4 && this.status === 200) {
                                                           document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="hidden";
                                                           document.getElementById("loading_div").innerHTML=this.responseText;
                                                    }
                                             };
  xhttp.open("PUT", "ProdCatServlet", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var str = JSON.stringify(obj);
  xhttp.send(str);
}

function prod_submit() 
  {
         var obj = {PROD_ARR : [ { PROD_CAT_ID:"1", PROD_NAME:"LenovoLaptop", PROD_PRICE:"28999", PROD_TYPE:"Laptop", PROD_DIR:"url('images/categories/electronics/laptops/lenovo.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Apple MacbookAir", PROD_PRICE:"62599", PROD_TYPE:"Laptop", PROD_DIR:"url('images/categories/electronics/laptops/macbook.jpeg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Micrsoft SurfacePro", PROD_PRICE:"75999", PROD_TYPE:"Laptop", PROD_DIR:"url('images/categories/electronics/laptops/microsoft.png')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"iphone 7", PROD_PRICE:"78599", PROD_TYPE:"Mobile", PROD_DIR:"url('images/categories/electronics/mobiles/iphone.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"LG G5", PROD_PRICE:"18699", PROD_TYPE:"Mobile", PROD_DIR:"url('images/categories/electronics/mobiles/lg.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Samsung S8", PROD_PRICE:"68999", PROD_TYPE:"Mobile", PROD_DIR:"url('images/categories/electronics/mobiles/samsung.png')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Redmi 4", PROD_PRICE:"8999", PROD_TYPE:"Mobile", PROD_DIR:"url('images/categories/electronics/mobiles/xiaomi.jpeg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Ipad Air2", PROD_PRICE:"58999", PROD_TYPE:"Tablet", PROD_DIR:"url('images/categories/electronics/tablets/ipad.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Lenovo YOGA", PROD_PRICE:"12999", PROD_TYPE:"Tablet", PROD_DIR:"url('images/categories/electronics/tablets/lenovo.png')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Samsung Tablet", PROD_PRICE:"7999", PROD_TYPE:"Tablet", PROD_DIR:"url('images/categories/electronics/tablets/samsung.png')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Sony Tablet", PROD_PRICE:"11999", PROD_TYPE:"Tv", PROD_DIR:"url('images/categories/electronics/tablets/sony.png')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"LG OLED 27'", PROD_PRICE:"118999", PROD_TYPE:"Tv", PROD_DIR:"url('images/categories/electronics/tvs/lg.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Samsung LED 34'", PROD_PRICE:"228999", PROD_TYPE:"Tv", PROD_DIR:"url('images/categories/electronics/tvs/samsung.jpg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Sharp ChironLed 36'", PROD_PRICE:"325999", PROD_TYPE:"Tv", PROD_DIR:"url('images/categories/electronics/tvs/sharp.jpeg')" },
                                 { PROD_CAT_ID:"1", PROD_NAME:"Sony LCD 22'", PROD_PRICE:"35999", PROD_TYPE:"Tv", PROD_DIR:"url('images/categories/electronics/tvs/sony.jpeg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Bajaj MX250", PROD_PRICE:"11999", PROD_TYPE:"Food Processor", PROD_DIR:"url('images/categories/home appliances/food processors/bajaj.jpeg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Cuisinart Mixer", PROD_PRICE:"6999", PROD_TYPE:"Food Processor", PROD_DIR:"url('images/categories/home appliances/food processors/cuisinart.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Philips FP231", PROD_PRICE:"14999", PROD_TYPE:"Food Processor", PROD_DIR:"url('images/categories/home appliances/food processors/philips.jpeg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Prestiege Silver", PROD_PRICE:"8999", PROD_TYPE:"Food Processor", PROD_DIR:"url('images/categories/home appliances/food processors/prestiege.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"BD", PROD_PRICE:"18999", PROD_TYPE:"Microwave Oven", PROD_DIR:"url('images/categories/home appliances/microwave ovens/bd.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"MagiChef", PROD_PRICE:"12999", PROD_TYPE:"Microwave Oven", PROD_DIR:"url('images/categories/home appliances/microwave ovens/magicchef.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Panasonic Invert", PROD_PRICE:"11999", PROD_TYPE:"Microwave Oven", PROD_DIR:"url('images/categories/home appliances/microwave ovens/panasonic.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Samsung Mrc", PROD_PRICE:"18999", PROD_TYPE:"Microwave Oven", PROD_DIR:"url('images/categories/home appliances/microwave ovens/samsung.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Breville Toaster", PROD_PRICE:"5999", PROD_TYPE:"Toaster", PROD_DIR:"url('images/categories/home appliances/toasters/breville.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Daewood Toaster", PROD_PRICE:"8999", PROD_TYPE:"Toaster", PROD_DIR:"url('images/categories/home appliances/toasters/daewood.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Kitchensmith Toaster", PROD_PRICE:"7999", PROD_TYPE:"Toaster", PROD_DIR:"url('images/categories/home appliances/toasters/kitchensmith.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Sunbeam Toaster", PROD_PRICE:"10999", PROD_TYPE:"Toaster", PROD_DIR:"url('images/categories/home appliances/toasters/sunbeam.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Carbon_Filter", PROD_PRICE:"8999", PROD_TYPE:"Water Filter", PROD_DIR:"url('images/categories/home appliances/water filters/carbon_filter.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Kent Gold", PROD_PRICE:"4999", PROD_TYPE:"Water Filter", PROD_DIR:"url('images/categories/home appliances/water filters/kent_gold.jpg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Kent Grand", PROD_PRICE:"11999", PROD_TYPE:"Water Filter", PROD_DIR:"url('images/categories/home appliances/water filters/kent_grand.jpeg')" },
                                 { PROD_CAT_ID:"3", PROD_NAME:"Steel Filter", PROD_PRICE:"699", PROD_TYPE:"Water Filter", PROD_DIR:"url('images/categories/home appliances/water filters/steel.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Casio", PROD_PRICE:"5999", PROD_TYPE:"Analog", PROD_DIR:"url('images/categories/watches/analog/casio.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Shshd", PROD_PRICE:"3999", PROD_TYPE:"Analog", PROD_DIR:"url('images/categories/watches/analog/shshd.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Slazenger", PROD_PRICE:"8999", PROD_TYPE:"Analog", PROD_DIR:"url('images/categories/watches/analog/slazenger.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Titan", PROD_PRICE:"6999", PROD_TYPE:"Analog", PROD_DIR:"url('images/categories/watches/analog/titan.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Angela BOS", PROD_PRICE:"38999", PROD_TYPE:"Designer", PROD_DIR:"url('images/categories/watches/designer/angela_bos.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Henry London", PROD_PRICE:"58099", PROD_TYPE:"Designer", PROD_DIR:"url('images/categories/watches/designer/henry_london.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Luxurman", PROD_PRICE:"1028999", PROD_TYPE:"Designer", PROD_DIR:"url('images/categories/watches/designer/luxurman.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Rolex", PROD_PRICE:"1225999", PROD_TYPE:"Designer", PROD_DIR:"url('images/categories/watches/designer/rolex.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Barun", PROD_PRICE:"12999", PROD_TYPE:"Digital", PROD_DIR:"url('images/categories/watches/digital/barun.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Gucci", PROD_PRICE:"38999", PROD_TYPE:"Digital", PROD_DIR:"url('images/categories/watches/digital/gucci.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Omega Pulsar", PROD_PRICE:"29999", PROD_TYPE:"Digital", PROD_DIR:"url('images/categories/watches/digital/omega_pulsar.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Seiko", PROD_PRICE:"18999", PROD_TYPE:"Digital", PROD_DIR:"url('images/categories/watches/digital/seiko.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Apple Watch", PROD_PRICE:"28999", PROD_TYPE:"Smart", PROD_DIR:"url('images/categories/watches/smart/apple_watch.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Bogamigo", PROD_PRICE:"8999", PROD_TYPE:"Smart", PROD_DIR:"url('images/categories/watches/smart/bogamigo.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Mi Retro", PROD_PRICE:"2999", PROD_TYPE:"Smart", PROD_DIR:"url('images/categories/watches/smart/mi_retro.jpg')" },
                                 { PROD_CAT_ID:"2", PROD_NAME:"Polar", PROD_PRICE:"7999", PROD_TYPE:"Smart", PROD_DIR:"url('images/categories/watches/smart/polar.jpg')" }
                  ]};
         document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="block";
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
                                                  if (this.readyState === 4 && this.status === 200) {
                                                           document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="hidden";
                                                           document.getElementById("loading_div").innerHTML=this.responseText;
                                                    }
                                             };
  xhttp.open("PUT", "ProductsServlet", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var str = JSON.stringify(obj);
  xhttp.send(str);
}

function get_pds(i) 
  {
         var xhttp = new XMLHttpRequest();
         var tab = document.getElementById ( "result" );
         tab.style.display="none";
         document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="block";
         xhttp.onreadystatechange = function() {
                                                  if (this.readyState === 4 && this.status === 200) {
                                                       var jsnresp = JSON.parse(this.responseText);
                                                       del ( tab );
                                                       var nop = 0;
                                                       while ( nop<jsnresp.RESPONSE.length )
                                                       {
                                                              var x;
                                                              var tr = document.createElement ( "TR" );
                                                              for (x = 0; x<3; x=x+1)
                                                              {
                                                                         if ( nop<jsnresp.RESPONSE.length )
                                                                         {
                                                                                tr = set ( tr,  jsnresp.RESPONSE[ nop ], "item" );
                                                                                nop=nop+1;
                                                                         }
                                                                         else
                                                                         break;
                                                              }
                                                              tab.appendChild ( tr );
                                                       }
                                                      document.getElementById("loading_div").getElementsByClassName("loader_container")[0].style.display="none";
                                                      tab.style.display="block";
                                                    }
                                             };
  xhttp.open("GET", "ProductsServlet?cat_code="+i, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}

function del ( tab )
{
     var rows = tab.getElementsByTagName ( "TR" );
     if (rows.length > 0)
     {     
           for (var x=rows.length-1; x>=0; x=x-1 )
           {
                rows [ x ].parentNode.removeChild ( rows [ x ] );
           }
     }
     return;
}

function set ( tr, obj, cls )
{
        var td = document.createElement ( "TD" );
        td.className = cls;
        var span_img = document.createElement ( "SPAN" );
        span_img.className = "prod_img";
        span_img.style.backgroundImage = obj.PROD_DIR;
        var span_imgtext = document.createElement ( "SPAN" );
        span_imgtext.className = "prod_text";
        var text_bold = document.createElement ( "B" );
        text_bold.innerHTML = obj.PROD_NAME+"<br/> Rs. "+obj.PROD_PRICE;
        span_imgtext.appendChild ( text_bold );
        var crt_btn = document.createElement( "BUTTON" );
        crt_btn.className = "adcrt";
        crt_btn.innerHTML = "Add To Cart";
        crt_btn.onclick = function () { insertIntoCart (JSON.parse(((this.parentNode).getElementsByClassName("pd_info")[0]).value)); };
        var odn_btn = document.createElement ( "BUTTON" );
        odn_btn.className = "ordnw";
        odn_btn.innerHTML = "Order Now";
        var info = document.createElement( "INPUT" );
        info.className = "pd_info";
        info.type = "hidden";
        info.value = JSON.stringify(obj);
        info.style.display = "none";
        td.appendChild ( span_img );
        td.appendChild ( span_imgtext );
        td.appendChild ( crt_btn );
        td.appendChild ( odn_btn );
        td.appendChild ( info );
        tr.appendChild ( td );
        return ( tr );
}

function insertIntoCart (v)
{
      var itc = document.getElementById("item_container");
      var crt_itm = document.createElement ( "SPAN" );
      crt_itm.className = "crt_items";
      var crt_itm_img = document.createElement ( "SPAN" );
      crt_itm_img.className = "crt_img";
      crt_itm_img.style.backgroundImage = v.PROD_DIR;
      var crt_itm_txt = document.createElement ( "SPAN" );
      crt_itm_txt.className = "crt_text";
      crt_itm_txt.innerHTML = v.PROD_NAME+"<br/> Rs. "+v.PROD_PRICE;
      var rembt = document.createElement ( "BUTTON" );
      rembt.className = "crt_remv";
      rembt.onclick = function () { removeFromCart (this.parentNode); };
      var inp = document.createElement ( "INPUT" );
      inp.type = "hidden";
      inp.value = JSON.stringify(v);
      inp.style.display = "none";
      crt_itm.appendChild(crt_itm_img);
      crt_itm.appendChild(crt_itm_txt);
      crt_itm.appendChild(rembt);
      crt_itm.appendChild(inp);
      itc.appendChild(crt_itm);
      itc.style.display="block";
      document.getElementById("no_item").style.display="none";
 }

function removeFromCart (r)
{
     var tmp = r.parentNode;
     tmp.removeChild (r);
     if ( ((tmp.getElementsByClassName("crt_items")).length) === 0 )
     {
          tmp.style.display="none";
          document.getElementById ( "no_item" ).style.display="block";
     }
}