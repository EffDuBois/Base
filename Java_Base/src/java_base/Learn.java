package java_base;

import java.io.IOException;

public class Learn {
	
	public static void main(String[] args) throws IOException {
		int a,b;
		a=Integer.parseInt(Input.read());;
		b=Integer.parseInt(Input.read());
		System.out.println(add(a,b));

	}
	public static int add(int a, int b) {
		int c;
		c=a+b;
		return c;
	}

}
