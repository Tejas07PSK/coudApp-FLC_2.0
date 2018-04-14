/* 
        @Author : Palash Sarkar
        @CreatedON : 31 JAN, 2018, 5:45:55 PM
        @FILEName :  jqry.js
 */

  $(document).ready(function(){
       
       $.ajaxSetup({
            "beforeSend" : function (xhr)
                           {
                                xhr.overrideMimeType('application/json');
                           }
       });
       
       reset();
       
    $("button#delev_loc_set").click(function(){
        if ($("input#is_logged_in").val() !== "0")
        {
             $("div#page_cover").css("display","block");
             $("div#add_map").delay(100).css("display","block");
             $("div#loc_set").delay(500).css("display","block");
        }
        else
        {
             alert("Gotta login first remember!!");
        }
    });
    
    $("span#us_nw_add").children("input").click(function ()
    {
         var ele;
         if($(this).val()==="0")
         {
              console.log("true");
              $(this).val("1");
         }
         else
         {
              console.log("false");
              $(this).val("0");    
         }
         ele=$("span#svd_add").children("input:first-child");
         hd_othchk(ele);
         ele=$("span#def_add").children("input:first-child");
         hd_othchk(ele);
    });
    
    $("span#sv_nw_add").children("input").click(function ()
    {
         if($(this).val()==="0")
         {
              $(this).val("1");
         }
         else
         {
              $(this).val("0");    
         }
    });
    
    $("span#svd_add").children("input:first-child").click(function ()
    {
         console.log("hah");
         var ele;
         if($(this).val()==="0")
         {
              $(this).val("1");
         }
         else
         {
              $(this).val("0");    
         }
         ele=$("span#def_add").children("input:first-child");
         hd_othchk(ele);
         ele=$("span#us_nw_add").children("input");
         hd_othchk(ele);
         ele=$("span#sv_nw_add").children("input");
         hd_othchk(ele);
    });
    
    $("span#def_add").children("input:first-child").click(function ()
    {
         var ele;
         if($(this).val()==="0")
         {
              $(this).val("1");
         }
         else
         {
              $(this).val("0");    
         }
         ele=$("span#us_nw_add").children("input");
         hd_othchk(ele);
         ele=$("span#sv_nw_add").children("input");
         hd_othchk(ele);
         ele=$("span#svd_add").children("input:first-child");
         hd_othchk(ele);
    });
    
    $("button#ulb").click(function(){
         var v = $("div#mod_slide_box");
         v.animate({left : '-='+v.children("div#user_lin").css("width")}, 100, "linear");   
         v.animate({left : '-=2px'}, 0, "linear",function (){
                                                                  $("div#user_lin").css("display","none");
                                                                  $("div#mod_loader").css("display","block");
                                                                  $("div#lod").delay(200).css("display","inline-block"); 
                                                                  var lin_dets = {
                                                                                     "user_emlidoruid" : $("input#ent_uid_eml_inp").val(),
                                                                                     "user_passwd" : $("input#ent_pss_inp").val()
                                                                                };
                                                                  $.ajax({
                                                                             url : "UserDetailsServlet" ,
                                                                             async : true,
                                                                             cache : true,
                                                                             contentType : "application/x-www-form-urlencoded", 
                                                                             processData : true,
                                                                             scriptCharset : "UTF-8",
                                                                             type : 'POST',
                                                                             traditional : true,
                                                                             timeout : 20000,
                                                                             dataType : "json",
                                                                             data : lin_dets,
                                                                             beforeSend : function (xhr)
                                                                                          {
                                                                                              xhr.overrideMimeType('application/x-www-form-urlencoded');
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"START;"+"<br/>"+"Connecting...."+"<br/>"+"Sending HTTP/POST Request -> text/json"+"<br/>"+"<br/>"+"url : /UserDetailsServlet"+"<br/>"+"statusText : "+xhr.statusText+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"requestbdyData : "+JSON.stringify(lin_dets)+"<br/>");
                                                                                          },
                                                                              dataFilter : function (respdata,type)
                                                                                          {
                                                                                               var jso = JSON.parse(respdata);
                                                                                               if (jso.STATUS_CODE === "1")
                                                                                               {
                                                                                                    $("span#message").html("Login Successful<br/>Welcome "+jso.RESPONSE.USER_FIRSTNAME+"!!").css("color","green");
                                                                                                    $("div#result_img").css({"background-image":"url('images/success.png')", "-webkit-animation":"jump 0.2s linear 0s infinite alternate", "animation":"jump 0.2s linear 0s infinite alternate", "background-position":"left", "background-color":"white"});
                                                                                                    $("span#output").html($("span#output").html()+"<br/>"+"FILTERING;"+"<br/>"+"responseType : "+type+"<br/>"+"dbopStatCode : "+jso.STATUS_CODE+"<br/>"+"dbopStat : "+jso.STATUS+"<br/>"+"receivedData : "+respdata+"<br/>");
                                                                                                    alter_page(jso.RESPONSE);
                                                                                                    return (JSON.stringify(jso.RESPONSE));
                                                                                               }
                                                                                               else
                                                                                                  {
                                                                                                      $("span#message").html("Login Failed").css("color","red");
                                                                                                      $("div#result_img").css({"background-image":"url('images/failed.png')", "-webkit-animation":"vibrate 0.2s linear 0s infinite alternate", "animation":"vibrate 0.2s linear 0s infinite alternate", "background-position":"center", "background-color":"rgba(0,0,0,0.6)"});
                                                                                                      $("span#output").html($("span#output").html()+"<br/>"+"FILTERING;"+"<br/>"+"responseType : "+type+"<br/>"+"dbopStatCode : "+jso.STATUS_CODE+"<br/>"+"dbopStat : "+jso.STATUS+"<br/>"+"receivedData : "+respdata+"<br/>");
                                                                                                      var ob = {'resp':jso.RESPONSE};
                                                                                                      return (JSON.stringify(ob));
                                                                                                  }
                                                                                           },
                                                                               success : function (result,status,xhr)
                                                                                          {
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"SUCCESS;"+"<br/>"+"statusText : "+status+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"response : "+JSON.stringify(result)+"<br/>");
                                                                                              if (result.USER_SAVED_ADDRS === undefined)
                                                                                              {
                                                                                                   console.log("Error handled!!");
                                                                                              }
                                                                                              else
                                                                                              {
                                                                                                   if ((result.USER_SAVED_ADDRS).length === 0)
                                                                                                   {
                                                                                                        $("span#lst_lod")["0"].style.display = "block";
                                                                                                        $("span#lst_lod").children("span#lst_txt")["0"].style.display = "block";
                                                                                                   }
                                                                                                   else
                                                                                                   {
                                                                                                        for (i=0;i<(result.USER_SAVED_ADDRS).length;i++)
                                                                                                        {
                                                                                                              appndTrs(result.USER_SAVED_ADDRS[i].ADD_ID,result.USER_SAVED_ADDRS[i].SVD_LOCALITY,result.USER_SAVED_ADDRS[i].SVD_CITY,result.USER_SAVED_ADDRS[i].SVD_ZIPCODE,result.USER_SAVED_ADDRS[i].STATE,result.USER_SAVED_ADDRS[i].SVD_COUNTRY);
                                                                                                        }
                                                                                                   }
                                                                                              }
                                                                                           },
                                                                                 error : function (xhr,status,error)
                                                                                          {
                                                                                              $("span#message").html("Login Failed").css("color","red");
                                                                                              $("div#result_img").css({"background-image":"url('images/failed.png')", "-webkit-animation":"vibrate 0.2s linear 0s 15 alternate", "animation":"vibrate 0.2s linear 0s 15 alternate", "background-position":"center", "background-color":"rgba(0,0,0,0.6)"});
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"ERROR;"+"<br/>"+"statusText : "+status+"<br/>"+"statusCode : "+xhr.statusText+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"errorText : "+error+"<br/>");
                                                                                          },
                                                                              complete : function (xhr,status)
                                                                                          {
                                                                                               $("div#mod_loader").css("display","none");
                                                                                               $("span#message").delay(100).css("display","block");
                                                                                               $("span#output").html($("span#output").html()+"<br/>"+"FINISHED;"+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"statusText : "+status+"<br/><br/><br/>").parent().css("display","block");
                                                                                               $("button#cnt_shpp").delay(100).css("display","block");
                                                                                               $("div#result_img").delay(200).css("display","block");
                                                                                               $("div#lod").animate({ scrollTop: 0 }, "slow");
                                                                                          },
                                                                                headers : { 
                                                                                             'Accept': 'json',
                                                                                             'Content-Type': 'application/x-www-form-urlencoded',
                                                                                             "X-HTTP-Method-Override": "POST"
                                                                                          }
                                                                        });
                     });
    });
    
    function alter_page(obj)
    {
           $("span#log_sgin").html("Hello<br/><b>"+obj.USER_FIRSTNAME+"</b><span class='down_arr'></span>");
           $("button#delev_loc_set").html("<b>"+obj.USER_CITY+", "+obj.USER_ZIPCODE+"</b>");
           $("input#is_logged_in").val("1");
           $("input#usr_sl").val(obj.USER_SLNO);
           $("span#def_addr").html("<br/>"+obj.USER_LOCALITY+",<br/>"+obj.USER_CITY+",<br/>"+obj.USER_ZIPCODE+",<br/>"+obj.USER_STATE+",<br/>"+obj.USER_COUNTRY+"<br/>");
           $("input#use_usr_def_add").val("1");
           var td=JSON.stringify({"cty":obj.USER_CITY,"zip":obj.USER_ZIPCODE});
           console.log(document.getElementById("defu_aads"));
           $("input#defu_aads").val(td);
           console.log(td);
           $("span#def_add").children("input:first-child").trigger("click");
    }
    
    $("button#sta").click(function (){
            if ($("span#us_nw_add").children("input").val()==="1")
            {
                   console.log("first");
                   if ($("span#sv_nw_add").children("input").val()==="1")
                   {
                         console.log("second"); 
                         $("span#lst_lod").children("span#lst_txt").css("display","none");
                         $("span#lst_lod").children("span#loader_lst").css("display","block");
                         $("span#lst_lod").delay(200).css("display","block");
                           $.post("SavedAddressServlet",
                                 {
                                      "new_loc":$("input#new_add_loc_inp").val(),
                                      "new_cty":$("input#new_add_cty_inp").val(),
                                      "new_zip":$("input#new_add_zip_inp").val(),
                                      "new_ste":$("input#new_add_state_inp").val(),
                                      "new_cntry":$("input#new_add_cntry_inp").val(),
                                      "usr_slno":$("input#usr_sl").val()
                                 },
                                 function(data,status,xhr)
                                 {
                                       console.log("respo");
                                       $("span#lst_lod").children("span#loader_lst").css("display","none");
                                       $("span#lst_lod").delay(200).css("display","none");
                                       if (xhr.readyState === 4 && xhr.status === 200) 
                                       {
                                                     if (data.STATUS_CODE==="1")
                                                     {
                                                          $("button#delev_loc_set").html("<b>"+data.RESPONSE.CITY+","+data.RESPONSE.ZIPCODE+"</b>");
                                                          appndTrs(data.RESPONSE.ADDRESS_ID,data.RESPONSE.LOCALITY,data.RESPONSE.CITY,data.RESPONSE.ZIPCODE,data.RESPONSE.STATE,data.RESPONSE.COUNTRY);
                                                          var ele=$("span#sv_nw_add").children("input");
                                                          ele.val("0");
                                                          hd_othchk(ele);
                                                          ele=$("span#us_nw_add").children("input");
                                                          ele.val("0");
                                                          hd_othchk(ele);
                                                          var temp = ($("table#AddList").children("tr"));
                                                          console.log(temp.length);
                                                          ($("table#AddList").children("tr:nth-child("+(($("table#AddList").children("tr")).length)+")")).children("td.old_add").trigger("click");
                                                          //$("table#AddList tr:nth-child("+(($("table#AddList tr")).length-1)+")").children("td.old_add").trigger("click");
                                                          console.log("kaal2");
                                                          $("span#svd_add").children("input:first-child").trigger("click");
                                                          alert(data.STATUS+"<br/>Details :<br/>"+xhr.readyState+"<br/>"+status+"<br/>"+xhr.status+"<br/>"+xhr.responseText);
                                                     }
                                                     else
                                                     {
                                                          alert(data.STATUS+"<br/>Details :<br/>"+xhr.readyState+"<br/>"+status+"<br/>"+xhr.status+"<br/>"+xhr.responseText);
                                                     }
                                       }
                                       else
                                       {
                                            alert("Details :<br/>"+xhr.readyState+"<br/>"+status+"<br/>"+xhr.status+"<br/>"+xhr.responseText);
                                       }
                                 },"json");
                   }
                   else
                   {
                        $("button#delev_loc_set").html("<b>"+$("input#new_add_cty_inp").val()+","+$("input#new_add_zip_inp").val()+"</b>");
                        $("input#sv_def_loc").val($("input#new_add_loc_inp").val());
                        $("input#sv_def_cty").val($("input#new_add_cty_inp").val());
                        $("input#sv_def_zip").val($("input#new_add_zip_inp").val());
                        $("input#sv_def_ste").val($("input#new_add_state_inp").val());
                        $("input#sv_def_cntry").val($("input#new_add_cntry_inp").val());
                        $("input#usr_svd_adid").val("0");
                        $("input#nt_sv_fr_usr").val("1");
                        $("input#use_usr_def_add").val("0");
                        alert("Address Successfully Set!!");
                   }
            }
            if ($("span#svd_add").children("input:first-child").val()==="1")
            {
                 var temp=JSON.parse($("input#sltd_addid").val());
                 $("button#delev_loc_set").html("<b>"+temp.cty+","+temp.zip+"</b>");
                 $("input#sv_def_loc").val("0");
                 $("input#sv_def_cty").val("0");
                 $("input#sv_def_zip").val("0");
                 $("input#sv_def_ste").val("0");
                 $("input#sv_def_cntry").val("0");
                 $("input#usr_svd_adid").val(temp.aid);
                 $("input#nt_sv_fr_usr").val("0");
                 $("input#use_usr_def_add").val("0");
                 alert("Address Successfully Set!!");
            }
            if ($("span#def_add").children("input:first-child").val()==="1")
            {
                 var temp=JSON.parse($("input#defu_aads").val());
                 $("button#delev_loc_set").html("<b>"+temp.cty+","+temp.zip+"</b>");
                 $("input#sv_def_loc").val("0");
                 $("input#sv_def_cty").val("0");
                 $("input#sv_def_zip").val("0");
                 $("input#sv_def_ste").val("0");
                 $("input#sv_def_cntry").val("0");
                 $("input#usr_svd_adid").val("0");
                 $("input#nt_sv_fr_usr").val("0");
                 $("input#use_usr_def_add").val("1");
                 alert("Address Successfully Set!!");
            }
    });
    
    $("table#AddList").on("click","tr td.old_add",function (){
         remothbdrs();
         console.log("hola");
        $(this).css("border-color","red"); 
        console.log("ha ha");
       $("input#sltd_addid").val(($(this).children("input")).val());  
       console.log("fgh");
    });
    
    $("table#AddList").on("mouseover","tr td.old_add",function (){if(($(this)["0"].style.borderColor)!=="red"){$(this).css("border-color","darkred");}});
    $("table#AddList").on("mouseout","tr td.old_add",function (){if(($(this)["0"].style.borderColor)!=="red"){console.log($(this).css("border-color"));$(this).css("border-color","navy");}});
    
    function remothbdrs()
    {
         console.log("is working");
         for (i=1;i<=($("table#AddList").children("tr")).length;i++)
         {
              $("table#AddList").children("tr:nth-child("+i+")").children("td.old_add").css("border-color","navy");
         }
    }
    
    function appndTrs(aid,loc,cty,zip,ste,cntry)
    {
         var td = document.createElement("TD");
         td.className="old_add";
         td.innerHTML="<br/>"+loc+"<br/>"+cty+"<br/>"+zip+"<br/>"+ste+"<br/>"+cntry;
         var input = document.createElement ( "INPUT" );
         var temp = {"aid":aid,"cty":cty,"zip":zip};
         input.type = "hidden";
         input.value = JSON.stringify(temp);
         td.appendChild(input);
         var tr = document.createElement("TR");
         console.log(tr);
         tr.appendChild(td);
         $("table#AddList").append(tr);
    }
    
    $("button#urb").click(function(){
         var v = $("div#mod_slide_box");
         v.animate({left : '-='+(v.children("div#user_reg")).css("width")}, 100, "linear");
         v.animate({left : '-=2px'}, 0, "linear",function (){
                                                                  $("div#user_reg").css("display","none");
                                                                  $("div#mod_loader").css("display","block");
                                                                  $("div#lod").delay(200).css("display","inline-block");
                                                                  var reg_dets = {
                                                                                     "USER_INPUT_FIRSTNAME" : $("input#fst_nm_inp").val(),
                                                                                     "USER_INPUT_LASTNAME" : $("input#lst_nm_inp").val(),
                                                                                     "USER_INPUT_LOCALITY" : $("input#lc_dt_inp").val(),
                                                                                     "USER_INPUT_CITY" : $("input#cty_nm_inp").val(),
                                                                                     "USER_INPUT_ZIPCODE" : $("input#zip_nm_inp").val(),
                                                                                     "USER_INPUT_STATE" : $("input#st_nm_inp").val(),
                                                                                     "USER_INPUT_COUNTRY" : $("input#cntry_nm_inp").val(),
                                                                                     "USER_INPUT_EMAILID" : $("input#eml_dt_inp").val(),
                                                                                     "USER_INPUT_MOBNO" : $("input#mobno_dt_inp").val(),
                                                                                     "USER_INPUT_PASSWORD" : $("input#pss_dt_inp").val()
                                                                                };
                                                                  $.ajax({
                                                                             url : "UserDetailsServlet" ,
                                                                             async : true,
                                                                             cache : true,
                                                                             contentType : "text/json", 
                                                                             processData : true,
                                                                             scriptCharset : "UTF-8",
                                                                             type : 'PUT',
                                                                             traditional : true,
                                                                             timeout : 20000,
                                                                             dataType : "json",
                                                                             data : JSON.stringify(reg_dets),
                                                                             beforeSend : function (xhr)
                                                                                          {
                                                                                              xhr.overrideMimeType('text/json');
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"START;"+"<br/>"+"Connecting...."+"<br/>"+"Sending HTTP/PUT Request -> text/json"+"<br/>"+"<br/>"+"url : /UserDetailsServlet"+"<br/>"+"statusText : "+xhr.statusText+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"requestbdyData : "+JSON.stringify(reg_dets)+"<br/>");
                                                                                          },
                                                                              dataFilter : function (respdata,type)
                                                                                          {
                                                                                                var jso = JSON.parse(respdata);
                                                                                                if (jso.STATUS_CODE === "1")
                                                                                                   {
                                                                                                       $("span#message").html("Registration Successful").css("color","green");
                                                                                                       $("div#result_img").css({"background-image":"url('images/success.png')", "-webkit-animation":"jump 0.2s linear 0s infinite alternate", "animation":"jump 0.2s linear 0s infinite alternate", "background-position":"left", "background-color":"white"});
                                                                                                       $("span#output").html($("span#output").html()+"<br/>"+"FILTERING;"+"<br/>"+"responseType : "+type+"<br/>"+"dbopStatCode : "+jso.STATUS_CODE+"<br/>"+"dbopStat : "+jso.STATUS+"<br/>"+"receivedData : "+respdata+"<br/>");
                                                                                                       return (JSON.stringify(jso.RESPONSE));
                                                                                                   }
                                                                                                   else
                                                                                                      {
                                                                                                           $("span#message").html("Registration Failed").css("color","red");
                                                                                                           $("div#result_img").css({"background-image":"url('images/failed.png')", "-webkit-animation":"vibrate 0.2s linear 0s infinite alternate", "animation":"vibrate 0.2s linear 0s infinite alternate", "background-position":"center", "background-color":"rgba(0,0,0,0.6)"});
                                                                                                           $("span#output").html($("span#output").html()+"<br/>"+"FILTERING;"+"<br/>"+"responseType : "+type+"<br/>"+"dbopStatCode : "+jso.STATUS_CODE+"<br/>"+"dbopStat : "+jso.STATUS+"<br/>");
                                                                                                           var ob = {'resp':jso.RESPONSE};
                                                                                                           return (JSON.stringify(ob));
                                                                                                      }
                                                                                          },
                                                                               success : function (result,status,xhr)
                                                                                          {
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"SUCCESS;"+"<br/>"+"statusText : "+status+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"response : "+JSON.stringify(result)+"<br/>");
                                                                                          },
                                                                                 error : function (xhr,status,error)
                                                                                          {
                                                                                              $("span#message").text("Registration Failed").css("color","red");
                                                                                              $("div#result_img").css({"background-image":"url('images/failed.png')", "-webkit-animation":"vibrate 0.2s linear 0s 15 alternate", "animation":"vibrate 0.2s linear 0s 15 alternate", "background-position":"center", "background-color":"rgba(0,0,0,0.6)"});
                                                                                              $("span#output").html($("span#output").html()+"<br/>"+"ERROR;"+"<br/>"+"statusText : "+status+"<br/>"+"statusCode : "+xhr.statusText+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"errorText : "+error+"<br/>");
                                                                                          },
                                                                              complete : function (xhr,status)
                                                                                         {
                                                                                               $("div#mod_loader").css("display","none");
                                                                                               $("span#message").delay(100).css("display","block");
                                                                                               $("span#output").html($("span#output").html()+"<br/>"+"FINISHED;"+"<br/>"+"readyState : "+xhr.readyState+"<br/>"+"statusCode : "+xhr.status+"<br/>"+"statusText : "+status+"<br/>").parent().css("display","block");
                                                                                               $("button#gtln").delay(100).css("display","block");
                                                                                               $("div#result_img").delay(200).css("display","block");
                                                                                               $("div#lod").animate({ scrollTop: 0 }, "slow");
                                                                                         },
                                                                               headers : { 
                                                                                            'Accept': 'json',
                                                                                            'Content-Type': 'text/json',
                                                                                            "X-HTTP-Method-Override": "PUT"
                                                                                         }
                                                                           });
                                                            });
    });
    
    $("div#add_map").children("span.close").click(function (){
         console.log ("funny");
         $("div#lod").children().css("display","none");
         console.log("OK");
    });
    
    $("button#cnt_shpp").click(function(){
                                              console.log("IN");
                                              $("div#add_map").children("span.close").trigger("click");
    });
    
    $("button#gtln").click(function(){
         var v = $("div#mod_slide_box");
         v.animate({left : '+='+(v.children("div#lod")).css("width")}, 100, "linear");
         v.delay(100).animate({left : '+=2px'}, 0, "linear",function (){
                                                               $("div#lod").children().css("display","none");
                                                               $("div#lod").css("display","none");
                                                               $("div#user_lin").css("display","block");
                                                            });
     });
    
    $("a#lnk_reg").click(function(){
         $(this).parent().hide();
         cmmn();
         $("div#user_reg").delay(300).queue(function(){$(this).css("display","block");$(this).dequeue();});
    });
    
    $("button#lgn").click(function(){
         console.log("IN");
         $(this).parent().hide();
         cmmn();
         $("div#user_lin").css("display","block");
    });
    
    function cmmn()
    {
         var v = $("div#page_cover");
         console.log(v);
         v.css("display","block");
         $("div#add_map").css("display","block");
    }
    
    function reset()
    {
        var ele;
        $("input#sv_def_loc").val("0");
        $("input#sv_def_cty").val("0");
        $("input#sv_def_zip").val("0");
        $("input#sv_def_ste").val("0");
        $("input#sv_def_cntry").val("0");
        $("input#usr_svd_adid").val("0");
        $("input#nt_sv_fr_usr").val("0");
        $("input#is_logged_in").val("0");
        $("input#usr_sl").val("0");
        $("input#use_usr_def_add").val("0");
        ele=$("span#us_nw_add").children("input");
        hd_othchk(ele);
        ele=$("span#sv_nw_add").children("input");
        hd_othchk(ele);
        ele=$("span#svd_add").children("input");
        hd_othchk(ele);
        ele=$("span#def_add").children("input");
        hd_othchk(ele);
    }
    
    function hd_othchk(ele)
    {
         console.log("strt");
         ele["0"].checked=false;
         ele.val("0");
    }
    
    $("button#prcd_chkot").click(function (){
         document.getElementById("crt").style.display="none";
         if ($("input#is_logged_in").val() === "1")
         {
              if ( (($("span#item_container").children("span.crt_items")).length)>0 )
              {
                  if ( ((($("table#ods").children("tbody")).children("tr.in_between")).length)>0 )
                  {
                        (($("table#ods").children("tbody")).children("tr.in_between")).remove();
                  }
                  
                  var sum = 0;
                  
                  for (var i=1; i<=(($("span#item_container").children("span.crt_items")).length); i=i+1)
                  {
                       var oj = JSON.parse((($("span#item_container").children("span.crt_items:nth-child("+i+")")).children("input")).val());
                       console.log("Ho Ho "+oj.PROD_PRICE);
                        (($("table#ods").children("tbody")).children("tr:first-child")).after((makeChkOtRow(oj)));
                        sum = sum + Number(oj.PROD_PRICE);
                  }
                  console.log (sum);
                  $("div#od_chek").children("h4").text("Total Number of Items Selected = "+($("span#item_container").children("span.crt_items")).length);
                  (($("table#ods").children("tbody")).children("tr:last-child")).children("th#tot").text("RS. "+sum);
                  $("div#page_cover")["0"].style.display="block";
                  $("div#add_map")["0"].style.display="block";
                  $("div#od_chek")["0"].style.display="block";
              }
              else
              {
                   alert ("Your Cart Is Empty!!");
              }
         }
         else
         {
              alert("Please Login first to place orders!!");
         }
    });
    
    function makeChkOtRow (oj)
    {
         var tr = document.createElement ( "TR" );
         var td1 = document.createElement ( "TD" );
         var prd_img = document.createElement ( "SPAN" );
         console.log(oj.PROD_DIR);
         prd_img.style.backgroundImage = oj.PROD_DIR;
         prd_img.style.backgroundColor = "white";
         prd_img.style.height = "60px";
         prd_img.style.width = "60px";
         prd_img.style.backgroundSize = "contain";
         prd_img.style.backgroundRepeat = "no-repeat";
         prd_img.style.position = "relative";
         prd_img.style.top = "20px";
         prd_img.style.left = "50px";
         prd_img.style.border = "1px solid black";
         prd_img.style.display = "block";
         prd_img.style.overflow = "hidden";
         td1.appendChild(prd_img);
         td1.innerHTML=td1.innerHTML+" "+oj.PROD_NAME;
         var inp = document.createElement ( "INPUT" );
         inp.type = "hidden";
         inp.value = oj.PROD_ID;
         inp.style.display = "none";
         td1.appendChild(inp);
         var td2 = document.createElement ( "TD" );
         td2.innerHTML = "Rs. "+oj.PROD_PRICE;
         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.className = "in_between";
         return (tr);
    }
});

