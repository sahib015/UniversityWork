import com.toedter.calendar.JDateChooser;
import org.jdatepicker.DateModel;
import org.jdatepicker.JDatePicker;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.util.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * gui for crating Personal Details
 * Created by Group 29D on 02-Mar-17.
 */
 class PersonalDetailsGUI extends JFrame{
    //TextFields
    private JTextField txtStaffNo= new JTextField();
    private JTextField txtSurname= new JTextField();
    private JTextField txtName= new JTextField();
    //private JTextField txtDob= new JTextField();//to change to date picker
    private JDateChooser txtDob=new JDateChooser();
    private JTextField txtAddress= new JTextField();
    private JTextField txtTown= new JTextField();
    private JTextField txtCounty= new JTextField();
    private JTextField txtPostcode= new JTextField();
    private JTextField txtTelNo= new JTextField();
    private JTextField txtMobileNo= new JTextField();
    private JTextField txtEmergencyContact= new JTextField();
    private JTextField txtEmergencyContactNo= new JTextField();
    //password field to assign the user to login
    private JPasswordField txtPassword = new JPasswordField();
    //combo box for access level
    private JComboBox<String> accessRightsBox;
    //buttons
    private GridBagConstraints constraints;
    private JPanel buttonPanel= new JPanel(new GridBagLayout());
    private JPanel mainPanel= new JPanel(new GridBagLayout());
    //controller
    private PersonalDetailsController personalDetailsController;
    /**
     * constructor
     */
     PersonalDetailsGUI(){
        personalDetailsController = new PersonalDetailsController();
        constraints = new GridBagConstraints();
        setup();
    }

    /**
     * Creates the gui window and it's content with use of other methods
     * once it is ready it makes the gui visible to the user.
     */
    private void setup(){
        JFrame frame = new JFrame("Yuconz - Personal Details");
        makeMenu(frame);
        Container contentArea = frame.getContentPane();

        constraints.fill = GridBagConstraints.HORIZONTAL;
        constraints.insets = new Insets(3,3,3,3);
        //staff no to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 0;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("StaffNo:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtStaffNo,constraints);
        contentArea.setLayout(new BorderLayout());

        //surname to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 1;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Surname:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtSurname,constraints);

        //name to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 2;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Name:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtName,constraints);

        //DOB to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 3;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Date of Birth:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtDob,constraints);

        //Address to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 4;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Address:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        txtAddress.setPreferredSize(new Dimension(450,90));
        txtAddress.setEditable(true);
        mainPanel.add(txtAddress,constraints);

        //town to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 5;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Town:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtTown,constraints);

        //county to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 6;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("County:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtCounty,constraints);
        //postcode to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 7;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Postcode:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtPostcode,constraints);

        //tel no to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 8;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Telephone Number:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtTelNo,constraints);

        //mobile no to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 9;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Mobile Number:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtMobileNo,constraints);

        //emergency contact to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 10;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Emergency Contact Name:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtEmergencyContact,constraints);

        //staff no to panel
        constraints.gridx = 0;
        constraints.weightx = 0;
        constraints.gridy = 11;
        constraints.gridwidth = 1;
        mainPanel.add(new JLabel("Emergency Contact Number:"),constraints);
        constraints.gridwidth = 1;
        constraints.weightx = 0.5;
        constraints.gridx = 1;
        mainPanel.add(txtEmergencyContactNo,constraints);

        // buttons to panel
        populateButtonPanel();

        contentArea.add(mainPanel,BorderLayout.CENTER);
        contentArea.add(buttonPanel,BorderLayout.SOUTH);
        frame.pack();
        frame.setMinimumSize(new Dimension(550,200));
        frame.setLocationRelativeTo(null);//setting frame to the center of the screen
        frame.setVisible(true);
    }

    private void populateButtonPanel(){
        JButton btnSave = new JButton("Save");
        constraints.gridx = 0;
        constraints.gridy = 0;
        constraints.gridwidth = 1;
        constraints.weightx = 0;
        buttonPanel.add(btnSave,constraints);
        JButton btnCancel = new JButton("Cancel");
        constraints.gridx = 1;
        constraints.gridy = 0;
        constraints.weightx = 0;
        constraints.gridwidth = 1;
        buttonPanel.add(btnCancel,constraints);
        buttonPanel.setBorder(new EmptyBorder(0,0,10,0));

        btnCancel.addActionListener(e ->
                System.exit(0));

        btnSave.addActionListener((ActionEvent e) -> {
            //gets the input values from the gui to be passed to the controller for checking to add to the database
            int staffId = Integer.parseInt(txtStaffNo.getText());
            String surname = txtSurname.getText();
            String name = txtName.getText();
            Date dob= txtDob.getDate();
            String address= txtAddress.getText();
            String town= txtTown.getText();
            String county= txtCounty.getText();
            String postCode= txtPostcode.getText();
            String telNo= txtTelNo.getText();
            String mobileNo=txtMobileNo.getText();
            String emergencyContact= txtEmergencyContact.getText();
            String emergencyContactNo= txtEmergencyContactNo.getText();

            personalDetailsController.createPersonalDetails(staffId,
                    surname,
                    name,
                    dob,
                    address,
                    town,
                    county,
                    postCode,
                    telNo,
                    mobileNo,
                    emergencyContact,
                    emergencyContactNo
            );

            JOptionPane.showMessageDialog(null,name+" "+surname+" successfully saved");

        });
    }

    /**
     * Creates the menuBar for the gui and allocates it to the gui frame.
     * @param frame the gui window to which the menu is to be added to.
     */
    private void makeMenu(JFrame frame)
    {
        //creates and populates a menuBar with a file and help which contain quit and about respectively
        JMenuBar menuBar = new JMenuBar();
        JMenu menu;
        JMenuItem item;

        frame.setJMenuBar(menuBar);
        menu = new JMenu("File");

        item = new JMenuItem("Quit");
        item.addActionListener(e ->
                System.exit(0));
        menu.add(item);
        menuBar.add(menu);

        menu = new JMenu("Help");

        item = new JMenuItem("About");
        item.addActionListener(e ->
                JOptionPane.showMessageDialog(frame, "users for demo all have the  password: password \n and the usernames are emp1, hre1, dir1, rev1 \n for employee, hremployee, director and reviewer respectivly" ,"About", JOptionPane.INFORMATION_MESSAGE));
        menu.add(item);

        menuBar.add(menu);
    }
    private void fillAccessRightValues() {
        AuthenticationController ac = new AuthenticationController();
        accessRightsBox.addItem("Select login level...");
        ArrayList<String> values = ac.getARBoxValues();
        if (values == null) {
            throw new NullPointerException();
        } else {
            for (String x : values) {
                accessRightsBox.addItem(x);
            }
        }
    }
}
