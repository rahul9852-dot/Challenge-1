

export default function PersonalInfo(){

    return (
        <div class="personal-info">

            <div class="Outer-text">
                <p>Personal info</p>
                <p>Please provide your name, email, address and phone number</p>
            </div>

            <div class="form-control">
                <label>
                    <input type="text" name="name"/>
                </label>
                <label>
                    Email address
                    <input type="text" name="email"/>
                </label>
                <label>
                    Phone number
                    <input type="number" name="phoneNumber"/>
                </label>
            </div>
        </div>
    )
}