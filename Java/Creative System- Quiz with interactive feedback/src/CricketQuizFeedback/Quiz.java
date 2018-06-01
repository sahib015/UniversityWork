package CricketQuizFeedback;

import java.io.IOException;
import java.util.*;

/**
 * This class creates the quiz
 * @author  Sahib Jabbal (ssj9)
 */

public class Quiz {
    public String name;
    public Quiz(){

    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void takeTest(ArrayList<Question> questions) throws IOException {
        Scanner keyboardInput =  new Scanner(System.in);
        Feedback feedback = new Feedback();
        System.out.println("Enter your name before you take the quiz");
        setName(keyboardInput.nextLine());
        System.out.println("Each question will have options from 1-4, choose one of the options to select your answer. \n" +name +
                ", good luck and all the best\n");
        int score = 0;
    ArrayList<Question> randomQuestions = new ArrayList<Question>(randomQuestions(questions));


        for (Question q: randomQuestions) {
            System.out.println(q);
            int answer = keyboardInput.nextInt();
            if(answer == q.getAnswer()){
                score++;
            }
            else{

                feedback.provideFeedback(getName(),q.getAnswer());
            }
        }

        System.out.println(name+ ", your score is "+score+"/"+questions.size());
    }



    public ArrayList<Question> randomQuestions(ArrayList<Question> question){

        Collections.shuffle(question);

        return question;

    }
}
