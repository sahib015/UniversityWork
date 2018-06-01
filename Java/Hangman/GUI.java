import javax.swing.*;
import java.awt.*;
import java.awt.image.*;
import java.awt.event.*;
/**
 * Write a description of class GUI here.
 * 
 * @author Sahib Jabbal 
 * @version  1.0
 */
public class GUI implements ActionListener
{
    //components used to create the GUI
    public JFrame frame;
    public JFrame imageFrame;
    public JPanel panelMain;
    private JPanel panelButtons;
    private JPanel panelScore;
    private JPanel panelHome;
    private JPanel panelWrongLetters;

    private JPanel panelWord;
   
    private JLabel lbl_dashes;
    private JLabel lbl_playerName;
    private JLabel lbl_score;
    private JLabel lbl_lives;
    private JLabel lbl_wrongLetters;
    private JLabel lbl_Logo;

    private ImageIcon img;
    private Container contentPane;
    private Container imageContentPane;

    //components used for menu bar
    private JMenuBar menuBar;
    public JMenuItem newItem = new JMenuItem("New Game");
    public JMenuItem quitItem = new JMenuItem("Quit Game");
    public JMenuItem helpItem = new JMenuItem("Help");
    public JMenuItem aboutItem = new JMenuItem("About Hangman");
    public JMenuItem exitItem = new JMenuItem("Close Game");

    // buttons for home screen
    public JButton btn_newGame= new JButton("Play Game");
    public JButton btn_quitGame= new JButton("Quit Game");
    public JButton btn_help= new JButton("How to play");
    public JButton btn_about= new JButton("About");

    // buttons for the letters
    public JButton btn_a= new JButton("a");
    public JButton btn_b= new JButton("b");
    public JButton btn_c= new JButton("c");
    public JButton btn_d= new JButton("d");
    public JButton btn_e= new JButton("e");
    public JButton btn_f= new JButton("f");
    public JButton btn_g= new JButton("g");
    public JButton btn_h= new JButton("h");
    public JButton btn_i= new JButton("i");
    public JButton btn_j= new JButton("j");
    public JButton btn_k= new JButton("k");
    public JButton btn_l= new JButton("l");
    public JButton btn_m= new JButton("m");
    public JButton btn_n= new JButton("n");
    public JButton btn_o= new JButton("o");
    public JButton btn_p= new JButton("p");
    public JButton btn_q= new JButton("q");
    public JButton btn_r= new JButton("r");
    public JButton btn_s= new JButton("s");
    public JButton btn_t= new JButton("t");
    public JButton btn_u= new JButton("u");
    public JButton btn_v= new JButton("v");
    public JButton btn_w= new JButton("w");
    public JButton btn_x= new JButton("x");
    public JButton btn_y= new JButton("y");
    public JButton btn_z= new JButton("z");

    // creating an instance of the Game class
    Game game= new Game();

    /**
     * Constructor for objects of class GUI
     */
    public GUI()
    {

        makeFrame();

    }

    /**
     * create the GUI frame
     * 
     */
    public void makeFrame()
    {
        //initialising GUI components

        frame= new JFrame();
        imageFrame= new JFrame();
        panelMain= new JPanel();
        panelButtons= new JPanel();
        panelWrongLetters= new JPanel();
        panelScore= new JPanel();
        panelWord= new JPanel();
        panelHome= new JPanel();
        lbl_dashes=new JLabel();
        lbl_playerName= new JLabel();
        lbl_score=new JLabel();
        lbl_lives= new JLabel();
        lbl_wrongLetters= new JLabel();
        lbl_Logo= new JLabel();
        // adding components to the frame
        contentPane= frame.getContentPane();
        panelMain.setLayout(new BorderLayout());

        contentPane.add(panelMain);
        //adding components to the panel
        //giving the frame a size

        frame.setSize(400,400);
        // setting the frame a title
        frame.setTitle("Hangman");
        //setting the frame to the center of the user's screen
        frame.setLocationRelativeTo(null);
        //setting frame to visible
        frame.setVisible(true);

    }

    /**
     * creating a menu bar
     */
    public void makeMenu(){
        menuBar = new JMenuBar();
        frame.setJMenuBar(menuBar);

        // create the File menu
        JMenu fileMenu = new JMenu("File");
        menuBar.add(fileMenu);

        //adding menu items to filemenu
        //adding action listeners to the menu items
        newItem.addActionListener(this);
        fileMenu.add(newItem);
        helpItem.addActionListener(this);
        fileMenu.add(helpItem);
        aboutItem.addActionListener(this);
        fileMenu.add(aboutItem);
        fileMenu.add(quitItem);
        fileMenu.add(exitItem);
    }

    /**
     * creating the method to start the game
     */
    public void playGame(){
        // setting the layout of the panel 
        panelHome.setLayout(new FlowLayout());
        // adding action listeners to the buttons and adding the buttons to the home panel
        btn_quitGame.addActionListener(this);
        panelHome.add(btn_quitGame);
        btn_about.addActionListener(this);
        panelHome.add(btn_about);
        btn_help.addActionListener(this);
        panelHome.add(btn_help);
        btn_newGame.addActionListener(this);
        panelHome.add(btn_newGame);
        // adding the panelHome to the main 
        panelMain.add(panelHome, BorderLayout.SOUTH);
    }

    /**
     * generating a word from the game instance
     */
    public void word(){      
        game.generateWord();

    }

    /**
     * setting the word generated 
     */
    public void setWord(){
        //panelMain.add(txtField,BorderLayout.WEST);
        lbl_dashes.setFont(new Font("Serif",Font.PLAIN,20));
        panelWord.add(lbl_dashes,BorderLayout.CENTER);
        panelMain.add(panelWord,BorderLayout.CENTER);
    }

    /**
     * adding the score of the player and the number of lives the player has
     */
    public void setScore(){
        panelScore.setLayout(new BorderLayout());
        lbl_score.setText("Score: "+ game.getScore());
        lbl_lives.setText("Lives: "+ game.getLives());
        panelScore.add(lbl_score,BorderLayout.EAST);
        panelScore.add(lbl_lives,BorderLayout.WEST);

        panelMain.add(panelScore,BorderLayout.NORTH);
    }

    /**
     * displays any wrong guessed letters for the player to know which letters don't exist in the word
     */
    public void setWrongLetters(){

        panelWrongLetters.setLayout(new BorderLayout());
        lbl_wrongLetters.setText("Wrong Letters: " + game.getWrongLetter());
        panelWrongLetters.add(lbl_wrongLetters,BorderLayout.CENTER);

        panelMain.add(panelWrongLetters,BorderLayout.SOUTH);
    } 

    /**
     * setting the dashes of the word
     */
    public void setDashes(){

        lbl_dashes.setText(game.setDashesOfRandomWord().toString());

    }

    /**\
     * setting the alphabets as buttons to be used to guess the letters of the word
     */
    public void setButtons(){
        // setting the layout of the panel to a grid layout
        panelButtons.setLayout(new GridLayout(7,4));
        // adding action listeners and addiing the buttons to the panel
        btn_a.addActionListener(this);
        panelButtons.add(btn_a);
        btn_b.addActionListener(this);
        panelButtons.add(btn_b);
        btn_c.addActionListener(this);
        panelButtons.add(btn_c);
        btn_d.addActionListener(this);
        panelButtons.add(btn_d);
        btn_e.addActionListener(this);
        panelButtons.add(btn_e);
        btn_f.addActionListener(this);
        panelButtons.add(btn_f);
        btn_g.addActionListener(this);
        panelButtons.add(btn_g);
        btn_h.addActionListener(this);
        panelButtons.add(btn_h);
        btn_i.addActionListener(this);
        panelButtons.add(btn_i);
        btn_j.addActionListener(this);
        panelButtons.add(btn_j);
        btn_k.addActionListener(this);
        panelButtons.add(btn_k);
        btn_l.addActionListener(this);
        panelButtons.add(btn_l);
        btn_m.addActionListener(this);
        panelButtons.add(btn_m);
        btn_n.addActionListener(this);
        panelButtons.add(btn_n);
        btn_o.addActionListener(this);
        panelButtons.add(btn_o);
        btn_p.addActionListener(this);
        panelButtons.add(btn_p);
        btn_q.addActionListener(this);
        panelButtons.add(btn_q);
        btn_r.addActionListener(this);
        panelButtons.add(btn_r);
        btn_s.addActionListener(this);
        panelButtons.add(btn_s);
        btn_t.addActionListener(this);
        panelButtons.add(btn_t);
        btn_u.addActionListener(this);
        panelButtons.add(btn_u);
        btn_v.addActionListener(this);
        panelButtons.add(btn_v);
        btn_w.addActionListener(this);
        panelButtons.add(btn_w);
        btn_x.addActionListener(this);
        panelButtons.add(btn_x);
        btn_y.addActionListener(this);
        panelButtons.add(btn_y);
        btn_z.addActionListener(this);
        panelButtons.add(btn_z);
        //adding the button panel to the main panel
        panelMain.add(panelButtons,BorderLayout.WEST);

    }

    /**
     * method to close the game
     */
    private void close(){

        WindowEvent close= new WindowEvent(frame,WindowEvent.WINDOW_CLOSING);
        Toolkit.getDefaultToolkit().getSystemEventQueue().postEvent(close);

    
    }

    @Override
    /**
     * method to add the action listener to the buttons and menu items
     */
    public void actionPerformed(ActionEvent e){
        if(e.getSource()==newItem){
            // creating an new instance of the game where the player plays the game
            PlayGame play= new PlayGame();
            //setting the current frame invisible
            frame.setVisible(false);
            // player enters his/her name before the player can continue
            game.playerName(JOptionPane.showInputDialog(frame,"Enter your name"));
            // welcome message is displayed
            JOptionPane.showMessageDialog(frame, "Welcome "+game.getPlayer(),"Welcome",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==aboutItem){
            // message about the game
            JOptionPane.showMessageDialog(frame,"Version: 1.0 \n Copyright @ 2016 ", "About Hangman",JOptionPane.INFORMATION_MESSAGE);

        }
        else if(e.getSource()==helpItem){
            // message that is used to explain how the game is played
            JOptionPane.showMessageDialog(frame,"Guess the given word and fill the dashes before you loose all your lives to win.", "How to Play",JOptionPane.INFORMATION_MESSAGE);

        }
        else if(e.getSource()==btn_newGame){
            // creating an new instance of the game where the player plays the game
            PlayGame play= new PlayGame();
            //setting the current frame invisible
            frame.setVisible(false);
            // player enters his/her name before the player can continue
            game.playerName(JOptionPane.showInputDialog(frame,"Enter your name"));
            // welcome message is displayed
            JOptionPane.showMessageDialog(frame, "Welcome "+game.getPlayer(),"Welcome",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_quitGame){
            // quit the game
            close();
        }
        else if(e.getSource()==btn_help){
            // message that is used to explain how the game is played
            JOptionPane.showMessageDialog(frame,"Guess the given word and fill the dashes before you loose all your lives to win.", "How to Play",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_about){
            // message about the game
            JOptionPane.showMessageDialog(frame,"Version: 1.0 \n Copyright @ 2016 ", "About Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_a){
            // guessed letter of the word
            game.guessLetter('a');
            // setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'a'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();  

            //disabling the button. The button cant be used again
            btn_a.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_b){
            // guessed letter of the word
            game.guessLetter('b');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'b'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            //disabling the button. The button cant be used again
            btn_b.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }  
        else if(e.getSource()==btn_c){
            // guessed letter of the word
            game.guessLetter('c');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'c'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            //disabling the button. The button cant be used again
            btn_c.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_d){
            // guessed letter of the word
            game.guessLetter('d');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'd'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_d.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_e){
            // guessed letter of the word
            game.guessLetter('e');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'e'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_e.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_f){
            // guessed letter of the word
            game.guessLetter('f');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'f'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_f.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_g){
            // guessed letter of the word
            game.guessLetter('g');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'g'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_g.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_h){
            // guessed letter of the word
            game.guessLetter('h');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'h'));
            //displays the score of the player

            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_h.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_i){
            // guessed letter of the word
            game.guessLetter('i');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'i'));
            //displays the score of the player

            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_i.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_j){
            // guessed letter of the word
            game.guessLetter('j');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'j'));
            //displays the score of the player

            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_j.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_k){
            // guessed letter of the word
            game.guessLetter('k');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'k'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();

            // disabling the button. The button cant be used again
            btn_k.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_l){
            // guessed letter of the word
            game.guessLetter('l');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'l'));
            //displays the score of the player

            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_l.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_m){
            // guessed letter of the word
            game.guessLetter('m');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'm'));
            //displays the score of the player

            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_m.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_n){
            // guessed letter of the word
            game.guessLetter('n');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'n'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_n.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_o){
            game.guessLetter('o');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'o'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_o.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_p){
            // guessed letter of the word
            game.guessLetter('p');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'p'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_p.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_q){
            // guessed letter of the word
            game.guessLetter('q');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'q'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_q.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_r){
            // guessed letter of the word
            game.guessLetter('r');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'r'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_r.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_s){
            // guessed letter of the word
            game.guessLetter('s');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 's'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_s.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_t){
            // guessed letter of the word
            game.guessLetter('t');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 't'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_t.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }
        else if(e.getSource()==btn_u){
            // guessed letter of the word
            game.guessLetter('u');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'u'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_u.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_v){
            // guessed letter of the word
            game.guessLetter('v');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'v'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_v.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_w){
            // guessed letter of the word
            game.guessLetter('w');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'w'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_w.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_x){
            // guessed letter of the word
            game.guessLetter('x');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'x'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_x.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_y){
            // guessed letter of the word
            game.guessLetter('y');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'y'));
            //displays the score of the player
            setScore();
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again

            btn_y.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

        else if(e.getSource()==btn_z){
            // guessed letter of the word
            game.guessLetter('z');
            //setting the letter to the dashes when the letter matches the word
            lbl_dashes.setText(game.matchLetter(game.getWord(), game.getDashes(), 'z'));
            //displays the score of the player
            setScore();     
            //displays the worng guessed letters if any
            setWrongLetters();
            // disabling the button. The button cant be used again
            btn_z.setEnabled(false);
            // message displayed
            JOptionPane.showMessageDialog(frame, game.getMessages(), "Hangman",JOptionPane.INFORMATION_MESSAGE);
        }

    }
}
