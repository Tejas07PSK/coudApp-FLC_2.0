/*  -> Designed for testing and development purposes.
 *  -> Project to design a small places prototype app.
 *  -> Development Phase -- Premature.
 *  -> Project Type -- Educational.
 *  -> Institute -- University Institute Of Technology, Burdwan University.
 *  -> Owner/Code file Designer :
 *             @ Name - Palash Sarkar.
 *             @ Department - Computer Science And Engineering.
 *             @ Roll.Number - 2014_1038.
 *             @ Email - palashsarkar0007@gmail.com.
 *  -> Copyright Norms - Every piece of code given below 
 *                       has been written by 'Palash Sarkar (Tj07)'©,
 *                       and he holds the rights to the file. Not meant to be
 *                       copied or tampered without prior permission
 *                       from the author. 
 *  -> Guide - Asst.Proff. Dr. S.K. Gupta.            
 */

package com.aps.coudapp.datahandling;

import com.aps.coudapp.pojos.Address;
import com.aps.coudapp.pojos.ProdCat;
import com.aps.coudapp.pojos.Products;
import com.aps.coudapp.pojos.UserDetails;
import com.aps.coudapp.pojos.SavedAddress;
import java.util.List;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ObjectBuilder 
{
           private static ObjectBuilder obj = null;
           
           private Object oj = null;
           
           private final JSONObject jsobj;
           
           private ObjectBuilder ()
           {
                oj = new Object ();
                jsobj = new JSONObject ();
           }
           
           public static ObjectBuilder getObjectBuilder ()
           {
                   if (obj == null)
                   {
                        obj = new ObjectBuilder ();
                   }
                   return (obj);
           }
           
           public Object setNgetObject (String cls)
           {
                    switch (cls)
                    {
                            case  "ProdCat" : oj=new ProdCat (); 
                                              break;
                            case "Products" : oj=new Products ();
                                              break;
                         case "UserDetails" : oj=new UserDetails ();
                                              break;
                             case "Address" : oj=new Address ();
                                              break;
                        case "SavedAddress" : oj=new SavedAddress ();
                                              break;
                                    default : oj=null;
                                              break;
                    }
                    return (oj);
           }
           
           public String createJsonResponse (Object O,int cse,String ... arr)
           {
                    System.out.println (cse);
                    jsobj.clear();
                    switch (arr[0])
                    {
                          case "ProdCat" :  switch (arr[1])
                                            { 
                                                    case "Insert" : if (cse==0)
                                                                     {
                                                                             jsobj.put ("STATUS", "Insertion Successful!!");
                                                                             jsobj.put("STATUS_CODE", "1");
                                                                             JSONObject temp = new JSONObject ();
                                                                             temp.put ("CATEGORY_ID", ((ProdCat)O).getCat_id());
                                                                             temp.put ("CATEGORY", ((ProdCat)O).getCat());
                                                                             jsobj.put ("RESPONSE",temp);
                                                                     }
                                                                     else
                                                                     {
                                                                             jsobj.put ("STATUS", "Insertion Failed!!");
                                                                             jsobj.put("STATUS_CODE", "-1");
                                                                             jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                     }
                                                                     break;
                                                           default : jsobj.put ("STATUS", "ERROR!!");
                                                                     jsobj.put("STATUS_CODE", "-1");
                                                                     jsobj.put ("RESPONSE", "Unknown ERROR!!");
                                                                     break;
                                            }
                                            break;
                         case "Products" : switch (arr[1])
                                           {
                                                     case "Insert" : if (cse==0)
                                                                     {
                                                                             jsobj.put ("STATUS", "Insertion Successful!!");
                                                                             jsobj.put("STATUS_CODE", "1");
                                                                             JSONObject temp = new JSONObject ();
                                                                             temp.put ("CATEGORY_ID", (((Products)O).getProd_cat()).getCat_id());
                                                                             temp.put ("CATEGORY", (((Products)O).getProd_cat()).getCat());
                                                                             temp.put ("PRODUCT_ID", ((Products)O).getProd_id());
                                                                             temp.put ("PRODUCT_NAME", ((Products)O).getProd_name());
                                                                             temp.put ("PRODUCT_PRICE", ((Products)O).getProd_price());
                                                                             temp.put ("PRODUCT_TYPE", ((Products)O).getProd_type());
                                                                             temp.put ("PRODUCT_DIR", ((Products)O).getProd_dir());
                                                                             jsobj.put ("RESPONSE",temp);
                                                                     }
                                                                     else
                                                                     {
                                                                             jsobj.put ("STATUS", "Insertion Failed!!");
                                                                             jsobj.put("STATUS_CODE", "-1");
                                                                             jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                     }
                                                                     break;
                                                   case "Retrieve" : if (cse==0)
                                                                     {
                                                                             jsobj.put ("STATUS", "Retrieval Successful!!");
                                                                             jsobj.put("STATUS_CODE", "1");
                                                                             JSONArray jarr = new JSONArray ();
                                                                             for (Object [] ar:(List <Object []>)O)
                                                                             {
                                                                                  JSONObject temp = new JSONObject ();
                                                                                  temp.put ("PROD_ID", (String)ar[0]);
                                                                                  temp.put ("PROD_NAME", (String)ar[1]);
                                                                                  temp.put ("PROD_PRICE", Long.toString((Long)ar[2]));
                                                                                  temp.put ("PROD_DIR", ar[3]);
                                                                                  jarr.add(temp);
                                                                             }
                                                                             jsobj.put ("RESPONSE",jarr);
                                                                     }
                                                                     else
                                                                     {
                                                                             jsobj.put ("STATUS", "Retrieval Failed!!");
                                                                             jsobj.put("STATUS_CODE", "-1");
                                                                             jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                     }
                                                                     break;                      
                                                           default : jsobj.put ("STATUS", "ERROR!!");
                                                                     jsobj.put("STATUS_CODE", "-1");
                                                                     jsobj.put ("RESPONSE", "Unknown ERROR!!");
                                                                     break;
                                           }
                                           break;
                      case "UserDetails" : switch (arr[1])
                                           {
                                                  case "Insert" : if (cse==0)
                                                                  {
                                                                       jsobj.put ("STATUS", "Insertion Successful!!");
                                                                       jsobj.put ("STATUS_CODE", "1");
                                                                       JSONObject temp = new JSONObject ();
                                                                       temp.put ("USER_ID", ((UserDetails)O).getUsr_id());
                                                                       temp.put ("USER_FIRSTNAME", ((UserDetails)O).getFirstname());
                                                                       temp.put ("USER_LASTNAME", ((UserDetails)O).getLastname());
                                                                       temp.put ("USER_EMAIL", ((UserDetails)O).getEmail_id());
                                                                       temp.put ("USER_MOBNO", ((UserDetails)O).getMob_no());
                                                                       temp.put ("USER_PASSWORD", ((UserDetails)O).getPass());
                                                                       JSONObject temp2 = new JSONObject ();
                                                                       temp2.put ("LOCALITY", (((UserDetails)O).getAddress()).getLocality());
                                                                       temp2.put ("CITY", (((UserDetails)O).getAddress()).getCity());
                                                                       temp2.put ("ZIPCODE", (((UserDetails)O).getAddress()).getPincode());
                                                                       temp2.put ("STATE", (((UserDetails)O).getAddress()).getPincode());
                                                                       temp2.put ("COUNTRY", (((UserDetails)O).getAddress()).getCountry());
                                                                       temp.put ("USER_PRIMARY_ADDRESS", temp2);
                                                                       jsobj.put ("RESPONSE", temp);
                                                                  }
                                                                  if (cse==-2)
                                                                  {
                                                                       System.out.println ("working");
                                                                       jsobj.put ("STATUS", "Insertion Failed!!");
                                                                       jsobj.put ("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Email Already Registered!!");
                                                                  }
                                                                  if (cse==-3)
                                                                  {
                                                                       jsobj.put ("STATUS", "Insertion Failed!!");
                                                                       jsobj.put ("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Password Already Exists!!");
                                                                  }
                                                                  if (cse==-4)
                                                                  {
                                                                       jsobj.put ("STATUS", "Insertion Failed!!");
                                                                       jsobj.put ("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Phone Number Already Registered!!");
                                                                  }
                                                                  if (cse==-1)
                                                                  {
                                                                      System.out.println("NO");
                                                                       jsobj.put ("STATUS", "Insertion Failed!!");
                                                                       jsobj.put ("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                  }
                                                                  break;
                                                case "Retrieve" : if (cse==0)
                                                                  {
                                                                       jsobj.put ("STATUS", "Retrieval Successful!!");
                                                                       jsobj.put("STATUS_CODE", "1");
                                                                       JSONObject temp = new JSONObject ();
                                                                       temp.put ("USER_SLNO", ((((List<Object []>)O).get(0))[0]).toString());
                                                                       temp.put ("USER_FIRSTNAME", (String)(((List<Object []>)O).get(0))[1]);
                                                                       temp.put ("USER_LOCALITY", (String)(((List<Object []>)O).get(0))[2]);
                                                                       temp.put ("USER_CITY", (String)(((List<Object []>)O).get(0))[3]);
                                                                       temp.put ("USER_ZIPCODE", (String)(((List<Object []>)O).get(0))[4]);
                                                                       temp.put ("USER_STATE", (String)(((List<Object []>)O).get(0))[5]);
                                                                       temp.put ("USER_COUNTRY", (String)(((List<Object []>)O).get(0))[6]);
                                                                       List<Object []> lst_oj = (List<Object []>)((((List<Object []>)O).get(1))[0]);
                                                                       JSONArray jarr = new JSONArray ();
                                                                       if (lst_oj.isEmpty())
                                                                       {
                                                                            temp.put("USER_SAVED_ADDRS", jarr);
                                                                       }
                                                                       else
                                                                       {
                                                                             for (Object [] ar:lst_oj)
                                                                             {
                                                                                  JSONObject o = new JSONObject ();
                                                                                  o.put ("ADD_ID", (String)ar[0]);
                                                                                  o.put ("SVD_LOCALITY", (String)ar[1]);
                                                                                  o.put ("SVD_CITY", (String)ar[2]);
                                                                                  o.put ("SVD_ZIPCODE", (String)ar[3]);
                                                                                  o.put ("SVD_STATE", (String)ar[4]);
                                                                                  o.put ("SVD_COUNTRY", (String)ar[5]);
                                                                                  jarr.add(o);
                                                                             }
                                                                             temp.put("USER_SAVED_ADDRS", jarr);
                                                                       }
                                                                       jsobj.put ("RESPONSE",temp);
                                                                  }
                                                                  if (cse==-2)
                                                                  {
                                                                       jsobj.put ("STATUS", "Retrieval Failed!!");
                                                                       jsobj.put("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Incorrect UserId/Email Or Password!!");
                                                                  }
                                                                  if (cse==-1)
                                                                  {
                                                                       jsobj.put ("STATUS", "Retrieval Failed!!");
                                                                       jsobj.put("STATUS_CODE", "-1");
                                                                       jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                  }
                                                                  break;
                                                        default : jsobj.put ("STATUS", "ERROR!!");
                                                                  jsobj.put ("STATUS_CODE", "-1");
                                                                  jsobj.put ("RESPONSE", "Unknown ERROR!!");
                                                                  break;
                                           }
                                           break;
                     case "SavedAddress" : switch (arr[1])
                                            {
                                                  case "Insert" : if (cse==0)
                                                                   {
                                                                       jsobj.put ("STATUS", "Insertion Successful!!");
                                                                       jsobj.put ("STATUS_CODE", "1");
                                                                       JSONObject temp = new JSONObject ();
                                                                       temp.put ("ADDRESS_ID", ((SavedAddress)O).getadd_id());
                                                                       temp.put ("LOCALITY", (((SavedAddress)O).getAddr()).getLocality());
                                                                       temp.put ("CITY", (((SavedAddress)O).getAddr()).getCity());
                                                                       temp.put ("ZIPCODE", (((SavedAddress)O).getAddr()).getPincode());
                                                                       temp.put ("STATE", (((SavedAddress)O).getAddr()).getState());
                                                                       temp.put ("COUNTRY", (((SavedAddress)O).getAddr()).getCountry());
                                                                       jsobj.put ("RESPONSE",temp);
                                                                   }
                                                                   if (cse==-1)
                                                                   {
                                                                        System.out.println("NO");
                                                                        jsobj.put ("STATUS", "Insertion Failed!!");
                                                                        jsobj.put ("STATUS_CODE", "-1");
                                                                        jsobj.put ("RESPONSE", "Internal Hibernate Exception");
                                                                   }
                                                                   break;
                                                        default : jsobj.put ("STATUS", "ERROR!!");
                                                                  jsobj.put ("STATUS_CODE", "-1");
                                                                  jsobj.put ("RESPONSE", "Unknown ERROR!!");
                                                                  break;
                                            }
                                            break;
                                 default : jsobj.put("STATUS", "ERROR!!");
                                           jsobj.put("STATUS_CODE", "-1");
                                           jsobj.put("RESPONSE", "Unknown ERROR!!");
                                           break;
                    }
                    return (jsobj.toJSONString());
           }
           
           public static void flushObjectBuilder ()
           {
                obj=null;
           }
}
