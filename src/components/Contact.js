import '../App.css';
export default function Contact() {
    return(
        <div className="ContactText">
            <h1>This is the contact page.</h1>
            <div className="FormText">
                <form>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" placeholder="Enter First Name" name="firstname"/>

                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" placeholder="Enter Last Name" name="lastname"/>
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter your Email" name="email"/>

                    <label htmlFor="contact">Contact:</label>
                    <input type="text" placeholder="Enter your Phone Number" name="contact"/>

                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender"/> Male
                    <input type="radio" name="gender"/> Female
                    <input type="radio" name="gender"/> Other
                </form>
                <button class="submitbutton" type="button">Submit</button>
            </div>
        </div>
        
    )
}