import java.util.*;

/**
 * Write a description of class Game here.
 * 
 * @author Sahib Jabbal
 * @version 1.0
 */
public class Game
{

    private Random rand;
    private ArrayList<String> words;
    // A randomWord retrieved from the array list
    private String randomWord = null;
    //index to be read from the array list
    private int index = 0;
    // score of the player
    private int score;
    private String playerName;
    //number of lives the player has
    private int lives;
    // dashes of the random word generated
    public StringBuffer dashes;
    // the letter the player guesses
    private String guessLetter;
    private ArrayList<Character> wrongGuessLetter;
    String wrongLetter="No wrong letters" ;
    private String messages;
    /**
     * constructor of the Game class
     */
    public Game()
    {
        // initialise instance variables
        rand= new Random();
        words= new ArrayList<String>();
        wrongGuessLetter= new ArrayList<Character>();
        addWords();
        // setting the score to 0
        score=0;
        //setting the number of lives the player has to 7
        lives=7;
    }

    /**
     * adding the words to an arraylist
     */

    public void addWords(){
        words.add("arrangement");
        words.add("constantly");
        words.add("discussion");
        words.add("garage");
        words.add("exit");
        words.add("floating");
        words.add("neighborhood");
        words.add("remarkable");
        words.add("independent");
        words.add("rush");
        words.add("promised");
        words.add("contrast");
        words.add("essential");
        words.add("toy");
        words.add("solar");
        words.add("shallow");

    }

    /**
     * method used to generate a random word from the array list words
     */
    public void generateWord(){

        // Check the size of the array list
        if (words.size() > 0) {

            if (words.size() > 1) {
                // Get a random number
                index = rand.nextInt(words.size());
            } else {
                // If the array list has only one randomWord
                index = 0;
            }
            // Get the indexed randomWord
            randomWord = words.get(index);

        }
        //setting the value of randomWord

        randomWord=randomWord;

    }

    /**
     * method used to return a random word that has been generated
     * @return returning the value of the randomWord
     */
    public String getWord(){

        return randomWord;

    }

   
    
    /**
     * method to create the dashes of a word
     * @param word- the randomWord generated
     * @return dashes- the created dashes from the generated word 
     */
    private StringBuffer makeDashes(String word)
    {
        // setting the number of dashes required
        StringBuffer dashes = new StringBuffer(getWord().length());
        // creating the dahes of the word
        for (int count=0; count < word.length(); count++){
            dashes.append("-");
        }
        // returning the dashes
        return dashes;
    }

    /**
     * method used to set the dashes of the generated randomWord
     * @return dashes- the created dashes of the word
     */
    public StringBuffer setDashesOfRandomWord(){

        dashes=makeDashes(getWord());
        return dashes;
    }

    /**
     * used to get the dashes
     * @return dashes- dashes of the randomWord
     */
    public StringBuffer getDashes(){
        return dashes;
    }
    
    /**
     * method used to set the name of the player
     */
     public void playerName(String playerName){
       this.playerName= playerName;
      // System.out.println(playerName);
    }
    
    /**
     * method used to return the player name
     * @return playerName- the name of the player playing the game
     */
     public String getPlayer(){
        return this.playerName;
    }

    /**
     * method used to guess a letter of the word
     * @param letter- the letter the player guesses
     */
    public void guessLetter(char letter){

        if(randomWord.indexOf(letter)<0){
            //letter doesn't exist
            messages="letter doesnt exist!";
            // add the wrong letters of the randomWord 
            wrongLetter(letter);
            // reduce the number of lives by 1
            --lives;
            // reduce the score by 2 from the current score 
            if (score==0 || score==1){
                getScore();
            }else{
                score= score-2;
            }

        }
        else {
            //increase the score by 5 from the current score
            score= score + 5;
            //  add  dashes where it belongs
            matchLetter(getWord(), dashes, letter);  
            messages= letter + " is a good guess. Continue";
        }

        if (randomWord.equals(dashes.toString())){
            // player wins
            messages=" Congrats you win,your score is "+ score;

        }

        if(lives==0){
            //player loses
            messages="Sorry you lost all your lives, the word was "+ randomWord;

        }

    }

    /**
     * returning the messages to the player
     * @return messages- messages being returned to the player
     */
    public String getMessages(){
        return messages;
    }

   
    /**
     * method used to get the score
     * @return score- the current score of the player
     */
    public String getScore(){
        return Integer.toString(score);

    }

    /**
     * method used to get the number of lives
     * @return lives- the number of lives the player has remaining
     */
    public String getLives(){
        return Integer.toString(lives);

    }

    /**
     * method used to check if the letter exists in the randomWord
     * @param randomWord- the randomWord generated 
     * @param dashes- the dashes of the randomWord
     * @param letter- the letter to check if it exists in the randomWord
     * @return guessLetter- the guessed letter from the player
     */
    public  String matchLetter(String randomWord, StringBuffer dashes,char letter)
    {

        for (int index = 0; index < randomWord.length(); index++){
            if (randomWord.charAt(index) == letter){
                //setting the letter at the correct index of the word 
                dashes.setCharAt(index, letter); 
                guessLetter=dashes.toString();

            }
        }
        // returning the value of guessLetter
        return guessLetter;
    }

    /**
     * method used to show the wrong guessed letters to the player
     * @param letter- letter to check if it doesn't exist in the randomWord
     * 
     */
    public void wrongLetter(char letter){

        if (randomWord.charAt(0)!=letter){
            wrongGuessLetter.add(letter);
        }
        wrongLetter=wrongGuessLetter.toString();
    }

    /**
     * method used to return the wrong letter
     * @return wrongGuessLetter- the letter that doesn't exist in the random word is returned
     */
    public String getWrongLetter(){
        
        return wrongLetter;
    }
}

