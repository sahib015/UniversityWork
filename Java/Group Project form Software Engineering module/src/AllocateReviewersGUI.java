import datastructures.AllocateReviewers;

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

/**
 * Created by Group 29D on 25-Mar-17.
 */
public class AllocateReviewers  exten{
    private JFrame frame;
    private JPanel mainPanel;
    private JPanel buttonPanel;
    private JButton btnCreate;
    private GridBagConstraints constraints;
    private AuthenticationController authenticator;;
    private ReviewController reviewController;

    AllocateReviewers(AuthenticationController authenticator) {
        constraints = new GridBagConstraints();
        frame = new JFrame("Yuconz - Allocate Reviewers");
        mainPanel = new JPanel(new GridBagLayout());
        buttonPanel = new JPanel(new GridBagLayout());
        this.authenticator = authenticator;

        reviewController = new ReviewController();
    }
    private void setup() {
        Container contentArea = frame.getContentPane();
        contentArea.setLayout(new BorderLayout());

        //constraints that are common for all items
        constraints.fill = GridBagConstraints.HORIZONTAL;
        constraints.insets = new Insets(3, 3, 3, 3);

        makeMenu();
        populateMainPanel();
        populateButtonPanel();

        contentArea.add(mainPanel, BorderLayout.NORTH);


        contentArea.add(buttonPanel, BorderLayout.SOUTH);
        frame.pack();
        frame.setMinimumSize(new Dimension(550, 200));
        frame.setLocationRelativeTo(null);//setting frame to the center of the screen
        frame.setVisible(true);
    }

    private void populateMainPanel() {
        ArrayList<AllocateReviewers> values = ReviewController.getData();// need to create method to get the reviewers
        int employeeDetailsPositionCounter = 0; //these are used to move where labels and buttons are added during the foreach loop
        int amendButtonPositionCounter = 0; //these are used to move where labels and buttons are added during the foreach loop
        int readButtonPositionCounter = 1; //these are used to move where labels and buttons are added during the foreach loop
        if (values == null) {
            throw new NullPointerException();
        } else {
            if (values.isEmpty()) {
                setConstraints(0, 0, 2, 2);
                if (authenticator.getSession().getAccessLevel() == 3) {
                    mainPanel.add(new JLabel("No reviewers available to allocate."), constraints);
                } else {
                    mainPanel.add(new JLabel("Your personal details have not been found, please contact HR."), constraints);
                }
            }
            String employeeDetails;
            for (AllocateReviewers x : values) {
                int staffNo = Integer.parseInt(x.getStaffId());
                employeeDetails = "<html>Staff ID: " + x.getStaffID() + "<br>Name: " + x.getName() + " " + x.getSurname() + "</html>";

                setConstraints(0, employeeDetailsPositionCounter, 2, 2);
                mainPanel.add(new JLabel(employeeDetails), constraints);

                btnCreate = new JButton("Create Record");

                JButton btnAmend = new JButton("Amend");
                btnAmend.addActionListener(e -> {
                    frame.dispose();
                    new PersonalDetailsAmendGUI(btnAmend.getActionCommand(), authenticator);
                });
                btnAmend.setActionCommand(x.getStaffId());

                JButton btnRead = new JButton("Read");
                btnRead.addActionListener(e -> new PersonalDetailsReadGUI(btnRead.getActionCommand()));
                btnRead.setActionCommand(x.getStaffId());

                setConstraints(2, amendButtonPositionCounter, 1, 1);
                mainPanel.add(btnAmend, constraints);

                setConstraints(2, readButtonPositionCounter, 1, 1);
                mainPanel.add(btnRead, constraints);

                if (authenticator.getSession().getStaffID() == staffNo) {
                    btnRead.setEnabled(true);
                    btnAmend.setEnabled(true);
                } else if (authenticator.getSession().getAccessLevel() == 3) {
                    btnCreate.setEnabled(true);
                    btnAmend.setEnabled(true);
                    btnRead.setEnabled(true);
                } else if (authenticator.getSession().getAccessLevel() == 4) {
                    btnCreate.setEnabled(false);
                    btnAmend.setEnabled(true);
                    btnRead.setEnabled(true);
                } else {
                    btnCreate.setEnabled(false);
                    btnRead.setEnabled(false);
                    btnAmend.setEnabled(false);
                }

                employeeDetailsPositionCounter = employeeDetailsPositionCounter + 2;
                amendButtonPositionCounter = amendButtonPositionCounter + 2;
                readButtonPositionCounter = readButtonPositionCounter + 2;

            }
        }
    }
    private void setConstraints(int gridX, int gridY, int gridWidth, int gridHeight) {
        constraints.gridx = gridX;
        constraints.gridy = gridY;
        constraints.gridwidth = gridWidth;
        constraints.gridheight = gridHeight;
    }
}
