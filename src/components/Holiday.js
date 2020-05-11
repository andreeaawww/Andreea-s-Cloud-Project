import React, {Component} from 'react'
import Row from './Row'

class Holiday extends Component {
    constructor(props) {
        super(props)
        this.state = {
            holidays: []
        }
    }
    
    componentDidMount() {
        this.loadHolidays()
    }
    
    loadHolidays = () => {
        fetch('https://holidayapi.com/v1/holidays?pretty&key=5ea6c2ff-b244-4071-8fc4-ae5250c6d993&country=GB&year=2019')
            .then(response => response.json())
            .then(response => this.setState({
                holidays: [{name:'NAME', date:'DATE'}].concat(response.holidays)
            }))
            .catch(error => console.log(error))
    }
    
    render() {
        
        const rows = this.state.holidays.map((row, index) => {
          return (
            <Row
                style={{
                    color: "#383838",
                    backgroundColor: "#F0F0F0",
                }}
                data={[row.name, row.date]}
                isHeader={index === 0}
                key={index}
            />  
        )})
        
        return (
            <div>
                <div>Holidays</div>
                {rows}
            </div>
        )
    }
}

export default Holiday;