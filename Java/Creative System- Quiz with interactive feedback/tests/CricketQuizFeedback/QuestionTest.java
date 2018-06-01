package CricketQuizFeedback;

import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.Assert.*;

public class QuestionTest {

    @Test
    public void getQuestion() throws IOException {
        Questions questions = new Questions();

        ArrayList<Question> testQuestions = new ArrayList<Question>(questions.getQuestions());
        if(testQuestions !=null){
            for(Question q :testQuestions){
                assertTrue(testQuestions.contains(q));
            }
        }
    }

    @Test
    public void getAlternatives() throws IOException {
        Questions questions = new Questions();
        ArrayList<Question> testQuestions = new ArrayList<Question>(questions.getQuestions());
        if(testQuestions !=null){
            for(Question q :testQuestions){
                assertTrue(testQuestions.contains(q));
            }
        }
    }

    @Test
    public void getAnswer() throws IOException {
        Questions questions = new Questions();
        ArrayList<Question> testQuestions = new ArrayList<Question>(questions.getQuestions());
        if(testQuestions !=null){
            for(Question q :testQuestions){
                assertTrue(testQuestions.contains(q));
            }
        }
    }

}