import { useState } from "react"

export default function Test() {
    const [employee, setEmployee] = useState([{ firstname: "Rohan", lastname: "Mathew", email: "abc@gmail.com", password: "1234", repassword: "1234" }, { firstname: "Archana", lastname: "Cs", email: "archana@gmail.com", password: "123", repassword: "123" }])
    return <>
        <label>Employee List - </label>
        <br />
        {
            employee.map((item, index) => {
                return <>
                    {JSON.stringify(item)}
                </>

            })
        }
        <br />
        <br />
        {
            JSON.stringify(employee[0])//Outputs the first employee details
        }
        <br />
        <br />
        {
            employee[0].firstname//Outputs only the firstname of first employee
        }
        <br />
        <br />
        {
            employee.map((item, index) => {
                return <>
                    # {item.firstname} # {item.lastname}
                </>

            })
        }
    </>
}	
