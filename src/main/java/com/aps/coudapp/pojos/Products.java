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
import java.util.Random;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table (name="PRODUCTS")
public class Products implements Serializable
{
       private static final long serialVersionUID = 1L;
       
         @Id
         @Column (name="PRODUCT_ID",unique=true,nullable=false)
         private final String prod_id;
         
         @Column (name="PRODUCT_NAME",length=100,nullable=false)
         private String prod_name;
         
         @Column (name="PRODUCT_DIR",length=2000,nullable=false)
         private String prod_dir;
         
         @Column (name="PRODUCT_TYPE",length=100,nullable=false)
         private String prod_type;

         @Column (name="PRODUCT_PRICE",nullable=false, columnDefinition="bigint(20)")
         private long prod_price;
         
         @OneToOne(fetch=FetchType.EAGER)
         @JoinColumn (name="PRODUCT_CATEGORY",nullable=false, columnDefinition="int(2)")
         private ProdCat prod_cat;
         
         public Products()
         {
               prod_id=Products.generatePROD_ID ();
               prod_name="";
               prod_price=0L;
               prod_cat=new ProdCat ();
               prod_dir="";
               prod_type="";
         }

         public String getProd_name () 
         {
               return (prod_name);
         }

         public void setProd_name (String prod_name) 
         {
              this.prod_name = prod_name;
         }
         
         public String getProd_dir ()
         {
               return (prod_dir);
         }
         
         public void setProd_dir (String prod_dir)
         {
              this.prod_dir = prod_dir;
         }

         public String getProd_type () 
         {
              return prod_type;
         }

         public void setProd_type (String prod_type) 
         {
              this.prod_type = prod_type;
         }
         
         public long getProd_price () 
         {
              return (prod_price);
         }

         public void setProd_price (long prod_price) 
         {
              this.prod_price = prod_price;
         }

         public ProdCat getProd_cat() 
         {
              return (prod_cat);
         }

         public void setProd_cat (ProdCat prod_cat) 
         {
              this.prod_cat = prod_cat;
         }
         
         public String getProd_id ()
         {
                return (prod_id);    
         }
         
         private static String generatePROD_ID() 
         {
	  return ("PID"+((new Random ()).nextInt(50000)));
         }
 }

