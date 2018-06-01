package CricketQuizFeedback;
import java.io.*;
import java.util.*;

/**
 * This class provides the questions
 * @author Sahib Jabbal (ssj9)
 */
class Question {
    public String question;
    public String[] alternatives;
    public int answer;

    public Question(String question, String[] alternatives, int answer) {
        this.question = question;
        this.alternatives = alternatives;
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public String[] getAlternatives() {
        return alternatives;
    }

    public int getAnswer() {
        return answer;
    }

    @Override
    public String toString() {
        String print = question + "\n";
        for (String alternative : alternatives) {
            print += alternative + "\n" ;
        }
        //print += "Answer: " + answer + "\n";

        return print;

    }
}

/**
 * This class gets the questions from a text file in which the quiz is generated from
 * @author Sahib Jabbal (ssj9)
 */
public class Questions {


  public ArrayList<Question> questions = new ArrayList<>();




    public Questions() throws IOException{
        readQuestions();

    }
    private void readQuestions() throws IOException {
        // reads the text file
        try {
            FileReader file = new FileReader("questions.txt");
            BufferedReader reader = new BufferedReader(file);
            Scanner scanner = new Scanner(reader);

            String line;
            String question = "";
            String[] alternatives = null;

            int answer = 0;

            int numberOfAlternatives = 0;
            int counter = 0;

            while (scanner.hasNext()) {

                while (answer == 0) {
                    line = scanner.nextLine();

                    if (line.contains("?")) { //stores the question
                        question = line;
                    } else if(counter == 0 && line.length() == 1) { //stores the number of alternatives
                        numberOfAlternatives = Integer.valueOf(line);
                        alternatives = new String[numberOfAlternatives];
                    } else if (line.contains(")")) { //stores the alternatives
                        alternatives[counter++] = line;
                    } else if (Character.isDigit(line.indexOf(0)) || counter == numberOfAlternatives) { //Stores the answer
                        answer = Integer.valueOf(line);
                    }

                }

                questions.add(new Question(question, alternatives, answer));// adds the questions to the array list
                numberOfAlternatives = 0;
                counter = 0;
                answer = 0;

            }


            file.close();
            reader.close();
            scanner.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     * method to get the questions
     * @return questions  - the ArrayList containing the questions
     */
    public ArrayList<Question> getQuestions() {
        return questions;
    }


}


