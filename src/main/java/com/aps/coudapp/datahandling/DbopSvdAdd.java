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

import com.aps.coudapp.pojos.SavedAddress;
import com.aps.coudapp.pojos.Address;
import com.aps.coudapp.pojos.UserDetails;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.query.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Session;

public class DbopSvdAdd extends Logic implements Crud,Serializable 
{
     private static final long serialVersionUID = 1L;
     
        private static SessionFactory sf;
        
        private static ObjectBuilder obb;
        
        public DbopSvdAdd ()
        {
             super ();
             sf = Logic.getSf();
             obb = Logic.getOb();
        }
        
        @Override
        public synchronized String insert (String ... vals)
        {
                Object O = DbopSvdAdd.assignFields (vals);
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        if(vals[5]!=null)
                        {
                             ((SavedAddress)O).setUd((UserDetails)s.getNamedQuery("selecusrfromslno").setParameter("ent_slno",Long.parseLong(vals[5])).getSingleResult());
                        }
                        s.saveOrUpdate(O);
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
                  return ((chk<0?obb.createJsonResponse(null,chk,"SavedAddress","Insert"):obb.createJsonResponse(O,chk,"SavedAddress","Insert")));
        }
        
        @Override
        public synchronized String retrieve (String ... vals)
        {
             System.out.println ("Not yet implemented!!");
             return ("Nope");
        }
        
        private synchronized static Object assignFields (String ... vals)
        {
                   SavedAddress svda = (SavedAddress)obb.setNgetObject ("SavedAddress");
                   Address ad = (Address)obb.setNgetObject("Address");
                   ad.setLocality(vals[0]);
                   ad.setCity(vals[1]);
                   ad.setPincode(vals[2]);
                   ad.setState(vals[3]);
                   ad.setCountry(vals[4]);
                   svda.setAddr(ad);
                   return (svda);
        }
}
