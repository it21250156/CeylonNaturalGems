import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//components

const MyInstallments = () => {
    const [Installments , setInstallments] = useState(null)
    //const {userID} =  useParams()
    const user = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        const fetchInstallments = async () => {
            const response = await fetch(`/api/installments/userInstallments/${user._id}`)
            const json = await response.json()

            if(response.ok){
                setInstallments(json)
            }
        }

        fetchInstallments()
    },[])
    

    return (
        <div className="allInstallments">
            <h2>All Installments </h2>
            {<div className="instalments">
                <table border='1' >
                    <tr> 
                        <th>User</th>
                        <th>Gem</th>
                        <th>Monthly Payment</th>
                        <th>Payment Date</th>
                        <th></th>
                    </tr>
                
                    {Installments && Installments.map((installment) => (
                        <InstallmentTableRow key={installment._id} installment={installment} />
                    ))}
                
                </table>
            </div> }
        </div>
    )
}


//table row
const InstallmentTableRow = ({ installment }) => {
    return(
        <tr>
            <td> {installment.gemID} </td>
            <td> {installment.monthlyPayment} </td>
            <td> {installment.createdAt} </td>
            
            <td> <button> Details </button></td>
        </tr>
    )
}

export default MyInstallments