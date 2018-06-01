import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
/**
 * Write a description of class Home here.
 * 
 * @author Sahib Jabbal 
 * @version (a version number or a date)
 */
public class Home extends GUI
{
    //components used in this class

    private JPanel imagePanel= new JPanel();
    private ImageIcon img;
    private JLabel lbl_Logo= new JLabel();

    /**
     * Constructor for the Home Class
     */
    public Home()
    {
        // getting the image
        img= new ImageIcon(getClass().getResource("hangman.jpg"));
        //setting the image
        lbl_Logo.setIcon(img);
        //setting the layout of the panel
        imagePanel.setLayout(new GridLayout(0,1));
       //adding the image to the panel
        imagePanel.add(lbl_Logo);
        //adding the image panel to the main panel
        panelMain.add(imagePanel);
        // setting this frame not resizeable
        frame.setResizable(false);
        // adding the buttons to the frame
        playGame();
        // disabling the menu item quitItem
        quitItem.setEnabled(false);

  

    }

}
