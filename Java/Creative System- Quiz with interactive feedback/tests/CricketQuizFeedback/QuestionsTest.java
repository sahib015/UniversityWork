package CricketQuizFeedback;

import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.*;

public class QuestionsTest {



    @Test
    public void getQuestions() throws IOException{
        Questions questions = new Questions();
        assertTrue(questions.getQuestions() != null);

    }
}