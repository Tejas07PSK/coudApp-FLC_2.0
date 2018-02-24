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
import javax.persistence.Table;
import javax.persistence.Embedded;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;


@NamedQueries({  
        @NamedQuery
        (  
            name = "findIfEmailExists",  
            query = "select ud.email_id from UserDetails ud where ud.email_id=:ent_eml"  
        ),
        @NamedQuery
        (  
            name = "findIfPasswordExists",  
            query = "select ud.pass from UserDetails ud where ud.pass=:ent_pass"  
        ),
        @NamedQuery
        (  
            name = "findIfPhoneNoExists",  
            query = "select ud.mob_no from UserDetails ud where ud.mob_no=:ent_mobno"  
        ),
        @NamedQuery
        (  
            name = "selecusrfromslno",  
            query = "from UserDetails ud where ud.usr_slno=:ent_slno"  
        )
    })  

@Entity 
@Table (name="USER_DETAILS")
public class UserDetails implements Serializable
{
	 private static final long serialVersionUID = 1L;
	 
               @Embedded
	 private Address ad;
	 
               @Id
               @GeneratedValue (strategy=GenerationType.SEQUENCE)
               @Column (name="USER_SLNO",unique=true,nullable=false,columnDefinition="bigint(20)")
               private long usr_slno;
               
               @Column (name="USER_ID",unique=true,nullable=false)
               private final String usr_id;
	 
               @Column (name="FIRST_NAME",length=100,nullable=false)
               private String firstname;
	 
               @Column (name="LAST_NAME",length=100,nullable=false)
               private String lastname;
        
               @Column (name="EMAIL_ID",length=100,unique=true,nullable=false)
               private String email_id;
	 
               @Column (name="MOB_NO",unique=true,nullable=false,columnDefinition="char(10)")
               private String mob_no;
               
               @Column (name="PASSWORD",length=12,unique=true,nullable=false)
               private String pass; 
               
               public UserDetails()
               {
                   usr_slno=0L; 
                   ad=new Address();
                   usr_id=UserDetails.generateUser_ID();
	     firstname="";
	     lastname="";
	     email_id="";
	     mob_no="";
                   pass="";
	 }
           
             public Address getAddress()
             {
                   return (ad);
             }
             
             public void setAddress(Address ad)
             {
                   this.ad=ad;
             }
             
             public Long getUsr_slno()
             {
                   return (usr_slno);
             }
             
             public void setUsr_slno (Long usr_slno)
             {
                  this.usr_slno = usr_slno;
             }

	public String getUsr_id() 
	{
		return (usr_id);
              }

	public String getFirstname() 
	{
		return (firstname);
	}

	public void setFirstname(String firstname) 
	{
		this.firstname = firstname;
	}

	public String getLastname() 
	{
		return (lastname);
	}

	public void setLastname(String lastname) 
	{
		this.lastname = lastname;
	}

	public String getEmail_id() 
	{
		return (email_id);
	}

	public void setEmail_id(String email_id) 
	{
		this.email_id = email_id;
	}

	public String getMob_no() 
	{
		return (mob_no);
	}

	public void setMob_no(String mob_no) 
	{
		this.mob_no = mob_no;
	}
          
             public void setPass(String password)
             {
                  this.pass = password;
             }
             
             public String getPass()
             {
                    return (pass);
             }
             
             private static String generateUser_ID() 
            {
	      return ("UID"+((new Random ()).nextInt(50000)));
            }
          
}
