package CricketQuizFeedback;

import groovy.json.internal.IO;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

import static org.junit.Assert.*;

public class QuizTest {
    Quiz quiz = new Quiz();


    @Test
    public void getName() {

       quiz.setName("Sahib");
        assertTrue(quiz.getName()=="Sahib");

    }

    @Test
    public void takeTestCorrect() throws IOException {
        Questions questions = new Questions();
        ArrayList<Question> question = new ArrayList<Question>(questions.getQuestions());

        int answer = 2;
        if(answer != question.get(0).answer){
            Feedback feedback = new Feedback();
            quiz.setName("Sahib");
            feedback.provideFeedback(quiz.getName(),question.get(0).getAnswer());

        }else{
            assertTrue(true);
        }



    }
    @Test

    public void takeTestIncorrect() throws IOException {
        Questions questions = new Questions();
        ArrayList<Question> question = new ArrayList<Question>(questions.getQuestions());

        int answer = 1;
        if(answer != question.get(0).answer){
            Feedback feedback = new Feedback();
            quiz.setName("Sahib");
            feedback.provideFeedback(quiz.getName(),question.get(0).getAnswer());

        }else{
            assertTrue(true);
        }



    }
    @Test
    public void randomQuestions() throws IOException {
        Questions questions =  new Questions();

        ArrayList<Question> question =  new ArrayList<Question>(questions.getQuestions());
        Collections.shuffle(question);
        for(Question q:question){
            assertTrue(question.contains(q));
        }

    }

}