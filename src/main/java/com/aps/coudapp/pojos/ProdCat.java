/*  -> Designed for testing and development purposes.
 *  -> Project to design a small eLogistics prototype.
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
 *  -> Guide - Asst.Proff. Dr. Sumit Gupta.            
 */

package com.aps.coudapp.pojos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

@Entity
@Table (name="PRODUCT_CATEGORIES")
public class ProdCat implements Serializable
{
         private static final long serialVersionUID = 1L;
         
         @Id
         @GeneratedValue (strategy=GenerationType.AUTO)
         @Column (name="CAT_ID",unique=true,nullable=false,columnDefinition="int(2)")
         private int cat_id;
         
         @Column (name="CAT_TYPE",unique=true,length=50,nullable=false)
         private String cat;
         
         @OneToMany(fetch=FetchType.LAZY,orphanRemoval = true,cascade=CascadeType.ALL)
         @JoinTable(name="PRODUCT_CAT_NORMAL_MAP",joinColumns=@JoinColumn(name="CATID"),
                     inverseJoinColumns=@JoinColumn(name="PID")
                   )
         private final List <Products> pdts;
         
         
         public ProdCat ()
         {
              cat_id=0; 
              cat="";
              pdts= new ArrayList <Products> ();
         }

         public int getCat_id () 
         {
                return (cat_id);
         }

         public void setCat_id (int cat_id) 
         {
               this.cat_id = cat_id;
         }

         public String getCat () 
         {
               return (cat);
         }

         public void setCat (String cat) 
         {
              this.cat = cat;
         }

         public void addToPdts (Products e) 
         {
              pdts.add (e);
         }
         
         public void addToPdts (int index,Products e)
         {
               pdts.add (index, e);
         }
         
         public void replaceInPdts (int index,Products e)
         {
               pdts.set (index, e);
         }

         public void clearPdts ()
         {
              pdts.clear ();
         }
         
         public int getPdtsLength ()
         {
               return (pdts.size());
         }
         
         public Products getProdInPdts (int index)
         {
              return (pdts.get(index));
         }
         
         public Products removeFromPdts (int index)
         {
              return (pdts.remove(index));
         }
                 
         
}