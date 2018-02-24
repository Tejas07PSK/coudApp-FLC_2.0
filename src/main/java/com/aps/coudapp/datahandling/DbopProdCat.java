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

import com.aps.coudapp.pojos.ProdCat;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Session;

public final class DbopProdCat extends Logic implements Crud,Serializable
{
        
        private static final long serialVersionUID = 1L;
     
        private static SessionFactory sf;
        
        private static ObjectBuilder obb;
        
        public DbopProdCat ()
        {
             super ();
             sf = Logic.getSf();
             obb = Logic.getOb();
        }
        
        @Override
        public synchronized String insert (String ... vals)
        {
                Object O = DbopProdCat.assignFields (vals);
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        System.out.println(((ProdCat)O).getCat_id()+" "+((ProdCat)O).getCat());
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
                
                      check();
                       
                       return ((chk<0?obb.createJsonResponse(null,chk,"ProdCat","Insert"):obb.createJsonResponse(O,chk,"ProdCat","Insert")));
                             
        }
        
        @Override
        public synchronized String retrieve (String ... vals)
        {
               System.out.println("Not Yet Implemented");
               return ("Wait!!");
        }
        
        private synchronized static void check()
        {
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        List <ProdCat> lst = s.createQuery("from ProdCat").getResultList();
                        for (int i=0;i<lst.size();i++)
                        {
                           System.out.println((lst.get(i)).getCat_id()+" "+(lst.get(i)).getCat());
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
        }
        private synchronized static Object assignFields (String ... vals)
        {
                   ProdCat pc = (ProdCat) obb.setNgetObject ("ProdCat");
                   pc.setCat(vals[0]);
                   return (pc);
        }
        
        
        
        
        
              
              
        
}
