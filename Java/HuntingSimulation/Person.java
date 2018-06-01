import java.util.*;
/**
 * Abstract class Person - write a description of the class here
 * 
 * @author (your name here)
 * @version (version number or date here)
 */
public abstract class Person implements Actor
{
    // Characteristics shared by all actors (static fields).
    // A shared random number generator to control breeding.
    protected static final Random rand = Randomizer.getRandom();

    // The actor's age.
    private int age;
    // Whether the actor is active or not.
    private boolean active;
    // The actor's field.
    protected final Field field;
    // The actor's position in the field.
    private Location location;

    /**
     * Internal class invariants:
     * Age not negative.
     * Actors turn at most maximum age plus 1.
     * Active actors are at most of maximum age.
     * Field and location are not null.
     */
    public void sane()
    {
        assert age >= 0 : "The age is negative";
        assert age <= getMaxAge() + 1 : "Too old"; 
        assert field != null : "The field is null";
        assert location != null : "The location is null";
    }

    /**
     * Create a new actor at location in field.
     * 
     * @param field The field currently occupied, not null.
     * @param location The location within the field.
     */
    public Person(Field field, Location location)
    {
        assert field != null : "Field is null";
        assert field.inside(location) : "Location is not within the field";

        age = 0;
        active = true;
        this.field = field;
        setLocation(location);

        this.sane();
    }

    /**
     * Make this actor act - that is: make it do
     * whatever it wants/needs to do.
     * @param newActors A list to add newly born actors to.
     */
    abstract public void act(List<Actor> newActors);

    /**
     * Set the actor's age to the given value.
     * Age is not negative.
     * @param a New age.
     */
    public void setAge(int a) 
    {
        assert a >= 0 : "Setting age negative";

        sane();
        age = a;
        sane();
    }

    /**
     * Increase the age. This could result in the actor's death.
     */
    public void incrementAge()
    {
        sane();

        age++;
        if(age > getMaxAge()) {
            setLeave();
        }

        sane();
    }

    public void giveBirth(List<Actor> newActor){
        // New actors are born into adjacent locations.
        // Get a list of adjacent free locations
        Field field = getField();
        List <Location> free = field.getFreeAdjacentLocations(getLocation());
        int births = attendSchool();

        addActor(newActor,  field, free,  births);

    }

    abstract public void addActor(List<Actor> newActors, Field field, List<Location>free, int births);
    /**
     * An actor can learn if it has reached the learning age.
     * @return Whether the actor can breed.
     */
    public boolean canAttendSchool()
    {
        sane();
        return age >= getLearningAge();
    }  
    
      /**
     * An actor can teach if it has reached the teaching age.
     * @return Whether the actor can breed.
     */
    public boolean canTeach()
    {
        sane();
        return age >= getTeachingAge();
    }  

    /**
     * Generate a number representing the number of students attending school,
     * if it can breed.
     * @return The number of births (may be zero).
     */
    protected int attendSchool()
    {
        sane();

        int attend = 0;
        if(canAttendSchool() && rand.nextDouble() <= getLearningProbability()) {
            attend = rand.nextInt(getMaxEnrollmentSize()) + 1;
        }

        sane();
        return attend;
    }

    /**
     * Check whether the actor is alive or not.
     * @return true if the actor is still active.
     */
    public boolean isActive()
    {
        sane();

        return active;
    }

    /**
     * Indicate that the actor is no longer alive.
     * It is removed from the field.
     * Works whether the actor is already dead or not.
     */
    public void setLeave()
    {
        sane();

        if (active) {
            active = false;
            field.clear(location);
        }

        sane();
    }

    /**
     * Return the actor's location.
     * @return The actor's location.
     */
    public Location getLocation()
    {
        sane();

        return location;
    }

    /**
     * Return the actor's field.
     * @return The actor's field.
     */
    public Field getField()
    {
        sane();

        return field;
    }

    /**
     * Place the actor at the new location in the given field.
     * @param newLocation The actor's new location, within field.
     */
    public void setLocation(Location newLocation)
    {
        assert field.inside(newLocation) : "Location is not within the field";
        // sane();  no, because this method is also used in constructor

        if(location != null) {
            field.clear(location);
        }
        location = newLocation;
        field.place(this, newLocation);

        sane();
    }

    /**
     * Return the learning probability of this actor.
     * @return The breeding probability of this actor.
     */

    abstract public double getLearningProbability();

    /**
     * Return the teaching probability of this actor.
     * @return The breeding probability of this actor.
     */

    abstract public double getTeachingProbability();

    /**
     * Return the maximal enrollment size of this actor.
     * @return The maximal enrollment size of this actor.
     */

    abstract public int getMaxEnrollmentSize();

    /** 
     * Return the teaching age of this actor.
     * @return The teaching age of this actor.
     */
    abstract public int getTeachingAge();

    /** 
     * Return the learning age of this actor.
     * @return The breeding age of this actor.
     */
    abstract public int getLearningAge();
    
    /**
     * Return the maximal age of this actor.
     * @return The maximal age of this actor.
     */
    abstract public int getMaxAge();

}
