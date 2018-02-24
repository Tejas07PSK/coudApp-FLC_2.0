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

import com.aps.coudapp.pojos.UserDetails;
import com.aps.coudapp.pojos.Address;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.query.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Session;

public final class DbopUsrDet extends Logic implements Crud,Serializable 
{
        private static final long serialVersionUID = 1L;
     
        private static SessionFactory sf;
        
        private static ObjectBuilder obb;
        
        public DbopUsrDet ()
        {
             super ();
             sf = Logic.getSf();
             obb = Logic.getOb();
        }
        
        @Override
        public synchronized String insert (String ... vals)
        {
                Object O = DbopUsrDet.assignFields (vals);
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        if ((s.getNamedQuery("findIfEmailExists").setParameter("ent_eml",vals[7]).getResultList()).isEmpty()==true)
                        {    
                             System.out.println ("eml");
                             if ((s.getNamedQuery("findIfPasswordExists").setParameter("ent_pass", vals[9]).getResultList()).isEmpty()==true)
                             {      
                                  System.out.println ("pss");
                                   if ((s.getNamedQuery("findIfPhoneNoExists").setParameter("ent_mobno", vals[8]).getResultList()).isEmpty()==true) 
                                   {
                                        System.out.println("Done");
                                        s.saveOrUpdate(O);
                                   }
                                   else
                                   {
                                        System.out.println ("err1");
                                        chk=-4;
                                   }
                             }
                             else
                             {
                                 System.out.println ("err2");
                                  chk = -3;
                             }
                        }
                        else
                        {
                             System.out.println ("err3");
                             chk = -2;
                        }
                        s.getTransaction().commit();
                        System.out.println("YUP!!");
                     }catch (Exception e)
                            {
                                 chk=-1;
                                 System.out.println("HibernateException Occured!!"+e);
                                 e.printStackTrace();
                            }
                     finally
                           {
                                if(s!=null)
                                {
                                     s.clear();
                                     s.close();
                                }
                           }
                  return ((chk<0?obb.createJsonResponse(null,chk,"UserDetails","Insert"):obb.createJsonResponse(O,chk,"UserDetails","Insert")));
        }
        
        @Override
        public synchronized String retrieve (String ... vals)
        {
                List <Object []> lst = new ArrayList <Object []> (); 
                Object [] tmp_ojarr = new Object [1];
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        Query qry = s.createQuery("select ud.usr_slno,ud.firstname,ud.ad.locality,ud.ad.city,ud.ad.pincode,ud.ad.state,ud.ad.country from UserDetails ud where ud.email_id=:ent_eml and ud.pass=:ent_pass");
                        qry.setParameter("ent_eml", vals[0]);
                        qry.setParameter("ent_pass", vals[1]);
                        lst = qry.getResultList();
                        if (lst.isEmpty())
                        {
                             qry = s.createQuery("select ud.usr_slno,ud.firstname,ud.ad.locality,ud.ad.city,ud.ad.pincode,ud.ad.state,ud.ad.country from UserDetails ud where ud.usr_id=:ent_uid and ud.pass=:ent_pass");
                             qry.setParameter("ent_uid", vals[0]);
                             qry.setParameter("ent_pass", vals[1]);
                             lst = qry.getResultList();
                             if (lst.isEmpty())
                             {
                                  chk = -2;
                             }
                             else
                             {
                                  tmp_ojarr[0]=s.getNamedQuery("getUserSavedAddreses").setParameter("ent_usl", lst.get(0)[0]).getResultList();
                                  lst.add(tmp_ojarr);
                             }
                        }
                        else
                        {
                            tmp_ojarr[0]=s.getNamedQuery("getUserSavedAddreses").setParameter("ent_usl", lst.get(0)[0]).getResultList();
                            lst.add(tmp_ojarr);
                        }
                        s.getTransaction().commit();
                        System.out.println("YUP!!");
                     }catch (Exception e)
                            {
                                 chk=-1;
                                 System.out.println("HibernateException Occured!!"+e);
                                 e.printStackTrace();
                            }
                      finally
                           {
                                if(s!=null)
                                {
                                     s.clear();
                                     s.close();
                                }
                           }
                  return ((chk<0?obb.createJsonResponse(null,chk,"UserDetails","Retrieve"):obb.createJsonResponse(lst,chk,"UserDetails","Retrieve")));
        }
        
        
        private synchronized static Object assignFields (String ... vals)
        {
                   UserDetails ud = (UserDetails)obb.setNgetObject ("UserDetails");
                   Address ad = (Address)obb.setNgetObject("Address");
                   ud.setFirstname(vals[0]); 
                   ud.setLastname(vals[1]);
                   ad.setLocality(vals[2]);
                   ad.setCity(vals[3]);
                   ad.setPincode(vals[4]);
                   ad.setState(vals[5]);
                   ad.setCountry(vals[6]);
                   ud.setEmail_id(vals[7]);
                   ud.setMob_no(vals[8]);
                   ud.setPass(vals[9]);
                   ud.setAddress(ad);
                   return (ud);
        }
}
