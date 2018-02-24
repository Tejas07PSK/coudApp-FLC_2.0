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
import com.aps.coudapp.pojos.Products;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Session;

public final class DbopProducts extends Logic implements Crud,Serializable
{
        
        private static final long serialVersionUID = 1L;
     
        private static SessionFactory sf;
        
        private static ObjectBuilder obb;
        
        public DbopProducts ()
        {
             super ();
             sf = Logic.getSf();
             obb = Logic.getOb();
        }
        
        @Override
        public synchronized String insert (String ... vals)
        {
                Object O = DbopProducts.assignFields (vals);
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        ProdCat pc = (ProdCat)(s.createQuery("from ProdCat pc where pc.cat_id=:id").setParameter("id",Integer.parseInt(vals[0]))).getSingleResult();
                        ((Products)O).setProd_cat(pc);
                        pc.addToPdts((Products)O);
                        s.saveOrUpdate(pc);
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
                       
                       return ((chk<0?obb.createJsonResponse(null,chk,"Products","Insert"):obb.createJsonResponse(O,chk,"Products","Insert")));
                             
        }
        
        @Override
        public synchronized String retrieve (String ... vals)
        {
                List <Object []> lst = new ArrayList <Object []> ();
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        ProdCat pc = (ProdCat)(s.createQuery("from ProdCat pc where pc.cat=:id").setParameter("id",Integer.parseInt(vals[0]))).getSingleResult();
                        for (int i=0; i<pc.getPdtsLength(); i++)
                        {
                             Object [] ojarr = new Object [4];
                             ojarr[0]=(pc.getProdInPdts(i)).getProd_id();
                             ojarr[1]=(pc.getProdInPdts(i)).getProd_name();
                             ojarr[2]=(pc.getProdInPdts(i)).getProd_price();
                             ojarr[3]=(pc.getProdInPdts(i)).getProd_dir();
                             lst.add(ojarr);
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
                       
                       return ((chk<0?obb.createJsonResponse(null,chk,"Products","Retrieve"):obb.createJsonResponse(lst,chk,"Products","Retrieve")));
        }
        
        @SuppressWarnings("unchecked")
        public synchronized String retrieve ()
        {
                List <Object []> lst = new ArrayList <Object []> ();
                int chk =0;
                Session s=null;
                try {
                        s=sf.openSession();
                        s.beginTransaction();
                        lst = (List <Object []>)((s.createQuery("select pc.prod_id,pc.prod_name,pc.prod_price,pc.prod_dir from Products pc")).getResultList());
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
                       
                       return ((chk<0?obb.createJsonResponse(null,chk,"Products","Retrieve"):obb.createJsonResponse(lst,chk,"Products","Retrieve")));
                             
        }
        
        
        private synchronized static Object assignFields (String ... vals)
        {
                   Products p = (Products) obb.setNgetObject ("Products");
                   p.setProd_name(vals[1]);
                   p.setProd_price(Long.parseLong(vals[2]));
                   p.setProd_type(vals[3]);
                   p.setProd_dir(vals[4]);
                   return (p);
        }
        
        
        
        
        
              
              
        
}
