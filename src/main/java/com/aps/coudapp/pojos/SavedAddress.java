/*  -> Designed for testing and development purposes.
 *  -> Project to design a small eLogistics prototype app.
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
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@NamedQueries({  
        @NamedQuery
        (  
            name = "getUserSavedAddreses",  
            query = "select svd.add_id, svd.addr.locality, svd.addr.city, svd.addr.pincode, svd.addr.state, svd.addr.country from SavedAddress svd where svd.ud.usr_slno=:ent_usl"  
        )
    })

@Entity
@Table (name="SAVED_ADDRS")
public class SavedAddress implements Serializable
{
     private static final long serialVersionUID = 1L;
     
         @Id
         @Column (name="ADDRESS_ID",unique=true,nullable=false)
         private final String add_id;
         
         @Embedded
         @AttributeOverrides({
                                @AttributeOverride(name="locality",column=@Column(name="SVD_LOCALITY",length=1000,nullable=false)),
                                @AttributeOverride(name="city",column=@Column(name="SVD_CITY",length=100,nullable=false)),
                                @AttributeOverride(name="pincode",column=@Column(name="SVD_PINCODE",columnDefinition="char(10)",nullable=false)),
                                @AttributeOverride(name="state",column=@Column(name="SVD_STE",length=50,nullable=false)),
                                @AttributeOverride(name="country",column=@Column(name="SVD_COUNTRY",length=100,nullable=false))
                             })
          private Address addr;
         
         @OneToOne(fetch=FetchType.EAGER)
         @JoinColumn (name="USER_ID",nullable=true, referencedColumnName="USER_ID")
         private UserDetails ud;
         
         public SavedAddress ()
         {
               add_id=SavedAddress.generateADD_ID ();
               addr=new Address ();
               ud=null;
         }
         
         public String getadd_id ()
         {
              return (add_id);
         }

         public Address getAddr () 
         {
              return (addr);
         }

         public void setAddr (Address addr) 
         {
              this.addr=addr;
         }

         public UserDetails getUd () 
         {
              return ud;
         }

         public void setUd (UserDetails ud) 
         {
              this.ud=ud;
         }
         
         private static String generateADD_ID () 
         {
	  return ("ADD"+((new Random ()).nextInt(50000)));
         }
}
