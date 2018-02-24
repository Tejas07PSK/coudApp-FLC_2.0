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
 *  -> Guide - Asst.Proff. Dr. Sumit Gupta.            
 */

package com.aps.coudapp.servlets;

import com.aps.coudapp.datahandling.DbopSvdAdd;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.util.Enumeration;

@WebServlet(description = "Core Servlet For Begining all Operations", urlPatterns = { "/SavedAddressServlet" })
public class SavedAddressServlet extends HttpServlet
{
     private static final long serialVersionUID = 1L;
         private static  InetAddress ip ;
         private static  String ipadd  ;
         
              @Override
	public void init()
	{
                    //Email.buildEmail((getServletContext().getRealPath("/WEB-INF"))+File.separator+"Credentials");
                    try{
	                System.setProperty("java.net.preferIPv4Stack", "true");
                              ip = InetAddress.getLocalHost();
	                ipadd = ip.getHostAddress();
	          }catch (UnknownHostException e)
		{
		       e.printStackTrace();
		}
	}
          
             /*@Override
             protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
             {
                  super.service(req, resp);
             }*/
          
            @Override
            protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException
            {
                     response.setContentType ("json");
	       response.setCharacterEncoding ("UTF-8");
	       response.setBufferSize (8192);
                     PrintWriter out = response.getWriter ();
                     DbopSvdAdd ins = new DbopSvdAdd ();
                     Enumeration<String> parameterNames = request.getParameterNames();
                     while (parameterNames.hasMoreElements()) {
                         String paramName = parameterNames.nextElement();
                         System.out.println(paramName);
                     }
                     
                     //System.out.println(request.getParameter("user_emlidoruid")+" "+request.getParameter("user_passwd"));
                
                     out.print (ins.insert (request.getParameter("new_loc"),
                                            request.getParameter("new_cty"),
                                            request.getParameter("new_zip"),
                                            request.getParameter("new_ste"),
                                            request.getParameter("new_cntry"),
                                            request.getParameter("usr_slno"))); 
                 
                     out.flush ();
                     out.close ();
            }
}
