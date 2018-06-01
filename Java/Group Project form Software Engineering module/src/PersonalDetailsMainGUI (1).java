import datastructures.EmployeeList;

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

/**
 * Created by Group 29D on 04-Mar-17.
 */
public class PersonalDetailsMainGUI {
    private JFrame frame= new JFrame("Yuconz - Personal Details Records");
    private JPanel mainPanel=new JPanel();
    private JLabel lblStaffID= new JLabel();
    private JLabel lblName= new JLabel();
private  JButton btnAmend= new JButton("Amend");
    private  JButton btnRead= new JButton("Read");
    private  JButton btnCreate= new JButton("Create Record");

private PersonalDetailsController personalDetailsController = new PersonalDetailsController();
   public  PersonalDetailsMainGUI(){
    setup();
    }

    private   void  setup(){
        Container contentArea = frame.getContentPane();
        ArrayList<EmployeeList> values = personalDetailsController.getData();
        if(values==null){
            throw new NullPointerException();
        }else {
            String employeeDetails = "<html><tr><td>";
            String name = "<tr><td>";
            for (EmployeeList x : values) {
                employeeDetails += "Staff ID: </td><td>" + x.getStaffId() +
                       "</td></tr>";
                name+= "Name: </td><td>" + x.getName()  + x.getSurname() + "</td></tr>";

            }
            lblStaffID.setText(employeeDetails);

            lblName.setText(name);
            //lblSurname.setText(surname);
        }

        mainPanel.add(lblStaffID);
        for(int i=0;i<3;i++){

            mainPanel.add(btnAmend);
            mainPanel.add(btnRead);
        }

        contentArea.setLayout(new BorderLayout());
        contentArea.add(mainPanel,BorderLayout.CENTER);
        frame.pack();
        frame.setMinimumSize(new Dimension(550,200));
        frame.setLocationRelativeTo(null);//setting frame to the center of the screen
        frame.setVisible(true);
    }
}
