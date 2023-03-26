import static java.lang.System.*; // for out.println()
import java.util.*;

class HW1_109403027 {

    public static String upperCaseConversion(String s) {
        var charArray = s.split("");

        var builder = new StringBuilder(charArray.length);
        for (int index = 0; index < charArray.length; index++){
            var ch = charArray[index];
            if (ch == "*"){
                charArray[index + 1] = charArray[index + 1].toUpperCase();
                // charArray[index + 1] = Character.toUpperCase(charArray[index + 1]);
                index += 1;
                continue;
            }
            builder.append(ch);
        } 

        return builder.toString();
    }

    // public static int[] StringToNumberArray(String s) {
        
    // }

    public static boolean isPrime(int number) {
        if (true) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        String input = "*i!t c$ou7l#d %ch(an)ge b8ut this+ feel<s li%^ke like t>h9e ca/lm be??fore th[e s=to=rm "
                    + "*not that |*i do''n't w3an/,.na t~!ry but *i've &b;ee3n here6 be@.fore";

        // define regex patterns
        var letterPattern = "[^a-zA-Z*\b]"; // target characters include alphabets, asterisks, and blanks; exclude others
        var numberPattern = "[^0-9\b]"; // target characters include Arabic numerals and blanks; exclude others

        var letterString = input.replaceAll(letterPattern, new String()); // replace unwanted characters with empty string: new String()
        // letterString = upperCaseConversion(letterString);
        out.println(letterString);


        var numberString = input.replaceAll(numberPattern, ""); // replace anything but numbers with empty string: ""
    
        numberString = numberString.replaceAll(" +", " ").trim(); // replace repeated blanks with one blank; remove all starting and ending spaces
        // out.println(numberString);

        var numberArray = numberString.split(" "); // convert the String Array into a Number Array
        // out.println(numberArray);
        for (var number: numberArray) {
            out.println(number);
        }

        // see temporary result
        // out.println(letterStringWithAsterisksAndBlanks);
        // out.println(numberStringWithBlanks);

         

    }
}
