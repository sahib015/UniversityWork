package CricketQuizFeedback;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

/**
 * This class creates the feedback text that is provided to the user for each incorrect answer.
 * The text provided to the user is generated using the markov process.
 *
 * @author Sahib Jabbal (ssj9)
 */
public class Feedback {


    String filename = "feedback.txt"; // the txt file from where the feedback provided to the user is from

    List<String> wordList = new ArrayList<String>();
    String[] words; // array to store the words
    int uniqueWords = 0;  // keep count of the number of unique words
    Map<String, Integer> index = new HashMap<>();
     Map<Integer, String> reverseIndex = new HashMap<>();
    double[][] probability;


    public Feedback() {

    }

    /**
     * This method provides the feedback back to the user
     * @param name - name of user
     * @param answer -  the value of the answer to the question
     * @throws IOException - throws an exception error when filename is not found
     */
    public void provideFeedback(String name,int answer) throws IOException{

        // get the text from the txt file and store the content in the words array
       String content= new String(Files.readAllBytes(Paths.get(filename)));
        words = content.replaceAll("[^a-zA-Z ]", "")
                .toLowerCase().split("\\s+");

        int wordCount = words.length; // get the length of the words array
        for (int i = 0; i <wordCount; i++) {

            String word = words[i];
            wordList.add(word); // add each word to an array list

        }
        // identifying the frequency of the words (N-grams)
        for(String key: wordList){
            Collections.frequency(wordList,key);
        }

        // iterating through the list of words and adding each word in a HashMap
        for (String w: wordList)
        {
            if (!index.containsKey(w))
            {
                index.put(w,uniqueWords);
                reverseIndex.put(uniqueWords,w);
                uniqueWords++;

            }
        }


       // initialising the count to 0
        int[][] count = new int[uniqueWords][uniqueWords];
        for (int i=0;i<uniqueWords;i++)
        {
            for (int j=0;j<uniqueWords;j++)
            {
                count[i][j] = 0;
            }
        }


        // adding words to the count which will  have a nested array such that the count array has the format
        // count[first word][second word]
        for (int i=0;i<words.length-1;i++)
        {
            String first = words[i];
            String second = words[i+1];
            count[index.get(first)][index.get(second)]++;
        }


        // calculating the number of lines
        int[] total = new int[uniqueWords];
        for (int i=0;i<uniqueWords;i++)
        {
            total[i] = 0;
            for (int j=0;j<uniqueWords;j++)
            {
                total[i] += count[i][j];
            }
        }

        // creating a probability table of all possible combinations that can be used to generate the feedback sentence
       probability = new double[uniqueWords][uniqueWords+1];
        double[] cumulativeProbability = new double[uniqueWords];
        for (int i=0;i<uniqueWords;i++)
        {
            probability[i][0] = 0.0;
            cumulativeProbability[i] = 0.0;
            for (int j=0;j<uniqueWords;j++)
            {
                probability[i][j+1] = cumulativeProbability[i]
                        +(double)count[i][j]/(double)total[i];
                cumulativeProbability[i] = probability[i][j+1];
            }
        }


        // printing out the feedback generated text back to the user
        System.out.println(name+" "+markov() + ", correct answer is " + answer + "\n");

    }


    /**
     * This method creates a random sentence that will be sent to the user for every incorrect answer
     * @return result- this returns the sentence a string
     */
         protected String markov(){

            Random random = new Random();
            int n1;
            n1 = wordList.size();
            int startingWord;
            startingWord = random.nextInt(n1);// a starting word index is randomly selected from the wordList ArrayList
            int length = 15;// the length of how many words in the sentence
            String[] newWords = new String[length]; // new words randomly selected will be stored in this array with the given length
            newWords[0] = wordList.get(startingWord); // gets the random word of the given index
            String result =""; // string to be returned back to the user

            // finds the probability of the next generated word
            for (int newWord=1;newWord<length;newWord++)
            {
                int row = index.get(newWords[newWord-1]);
                double rnd = Math.random();
                int wordIndex = -999;
                for (int j=1;j<=uniqueWords;j++)
                {
                    if ( (probability[row][j-1]<=rnd) && (probability[row][j]>rnd) )
                    {
                        wordIndex = j-1;
                        break;
                    }
                }
                newWords[newWord] = reverseIndex.get(wordIndex);
            }

           // generates the sentence
            for (int newWord=0;newWord<length;newWord++)
            {
                result+= newWords[newWord]+" ";
            }
           return  result;
        }


}