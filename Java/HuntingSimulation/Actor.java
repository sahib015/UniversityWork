import java.util.*;
/**
 * Write a description of interface Actor here.
 * 
 * @author Sahib Jabbal
 * @version (a version number or a date)
 */

public interface Actor
{

    /**
     * Make this animal act - that is: make it do
     * whatever it wants/needs to do.
     * @param newAnimals A list to add newly born animals to.
     */
    void act(List<Actor> newAnimals);

    /**
     * Check whether the animal is active or not.
     * @return true if the animal is still active.
     */
    boolean isActive();
    
      /**
     * Return the animal's location.
     * @return The animal's location.
     */
    public Location getLocation();
    
    /**
     * Return the animal's field.
     * @return The animal's field.
     */
    public Field getField();
    
}
