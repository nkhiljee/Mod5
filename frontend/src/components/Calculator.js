import React, {Component} from 'react';
import * as jsPDF from 'jspdf'


export default class Calculator extends Component {

    printPDF = (data) => {
        console.log(data)
        var doc = new jsPDF()

        doc.setFont('helvetica')
        doc.setTextColor(18,98,108)
        doc.setFontType('bold')
        doc.setFontSize(24)
        doc.text(20, 30, 'Property Report')

        doc.setTextColor(17,169,165)
        doc.setFontSize(18)
        doc.text(20, 50, `Location: `)

        doc.setTextColor(0,0,0)
        doc.setFontType('normal')
        doc.setFontSize(15)
        doc.text(20, 60, `Address: ${data.address}`)
        doc.text(20, 70, `City: ${data.city}`)
        doc.text(20, 80, `State: ${data.state}`)
        doc.text(20, 90, `Zip: ${data.zip}`)

        doc.setTextColor(17,169,165)
        doc.setFontType('bold')
        doc.setFontSize(18)
        doc.text(20, 110, `Property Formula: `)
        
        doc.setTextColor(0,0,0)
        doc.setFontType('normal')
        doc.setFontSize(15)
        doc.text(20, 120, `Purchase Price = ARV * 70% - Rehab `)
        doc.text(20, 130, `$${data.purchase_price} = $${data.arv} * 70% - $${data.rehab}`)

        window.open(doc.output('dataurlnewwindow'));
    }

    calculatePrice = (rehab, arv) => {
        var purchasePrice = (arv * 0.7) - rehab
        return purchasePrice
    }

    calculateSubmit = (e) => {
        e.preventDefault()
        var purchasePrice = this.calculatePrice(e.target[4].value, e.target[5].value)

        fetch("http://localhost:3000/api/v1/calculators", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            },
            body: JSON.stringify({
                address: e.target[0].value,
                city: e.target[1].value,
                state: e.target[2].value,
                zip: e.target[3].value,
                arv: e.target[5].value,
                rehab: e.target[4].value,
                purchase_price: purchasePrice
            })
        })
        .then(res=>res.json())
        .then(data => {
            this.printPDF(data)
        })
    }

    render() {
        return(
            <div className="signin">
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{paddingBottom:"20px"}}>Understand Your Prospect</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <form onSubmit={this.calculateSubmit}>
                            <div className="form-group">
                                <label style={{size:"24px",fontWeight:"500",paddingBottom:"15px"}}>Enter Property Information</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Address and Unit #" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter City" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter State" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Zip" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Rehab Estimate" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter After Repair Value" required/>
                            </div>
                            <button type="submit" className="btn btn-success">Calculate</button>
                        </form>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        )
    }
}