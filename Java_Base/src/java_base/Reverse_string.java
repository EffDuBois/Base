package java_base;

import java.util.*;
import java.lang.*;
import java.io.*;

class Reverse_string {
	public static void main (String[] args)
	{
	    int i,n;
	    
        Scanner in = new Scanner(System.in);
	    
		try {
    		int t=in.nextInt();
    		ArrayList<Integer> alist = new ArrayList<Integer>();
    		for (i=0;i<t;i++){
    		    n=in.nextInt();
    		    for (i=0;i<n;i++)
    		        alist.add(in.nextInt());
    	        for (i=n-1;i>=0;i--){
    	            System.out.print(alist.get(i)+" ");
    	            alist.remove(i);
    	        }
    		}
		} finally{
		    in.close();
		}
	}
}
