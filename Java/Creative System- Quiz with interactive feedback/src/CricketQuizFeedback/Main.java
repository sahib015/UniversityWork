package CricketQuizFeedback;

import java.io.IOException;

/**
 * This is the  main class that is used to run the program
 * @author Sahib Jabbal (ssj9)
 */

public class Main {


    public static void main(String[] args)  throws IOException{

        Quiz quiz = new Quiz();
        Questions questions =  new Questions();
       quiz.takeTest(questions.getQuestions());

    }




}
