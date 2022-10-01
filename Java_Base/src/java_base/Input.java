package java_base;
// Java program to demonstrate BufferedReader
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;



public class Input {
    public static String read()
        throws IOException
    {
        // Enter data using BufferReader
        BufferedReader reader = new BufferedReader(
            new InputStreamReader(System.in));
 
        // Reading data using readLine
        String readline = reader.readLine();
 
        // Return the read line
        return readline;
        
    }
    public static String scan() {
    	Scanner in = new Scanner(System.in);
    	try {	
    		String readline = in.nextLine();
    		return readline;
    	}finally {
    		in.close();
    	}
    	
    }
}
