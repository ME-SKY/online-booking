import * as React from "react";
import './booking-form.css'
import {Cascader, TimePicker} from "antd";
// import moment from 'moment';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import DatePicker from "antd/es/date-picker";

import * as moment from "moment";
const {RangePicker} = TimePicker;


//import

const defaultStaticOptions = [
    {
        value: 'Влидавустак',
        label: 'Владивластлак'
    },
    {
        value: 'Пливрумрасрак',
        label: 'Пливрумрасрак'
    },
    {
        value: 'Клиприврлфлдвагк',
        label: 'Клиприврлфлдвагк'
    }
];


export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="booking-form" onSubmit={this.handleSubmit}>
                <div className="city">
                    <div className="city-input">
                        <Cascader
                            defaultValue={[defaultStaticOptions[0].value]}
                            allowClear={false}
                            size={"large"}
                            options={defaultStaticOptions}
                            style={{background: '#e8e8e8', color: '#959595', width: '350px', textAlign: 'left'}}
                            placeholder="Выберете город..." />
                    </div>
                    <div className="city-booking-info">

                    </div>
                </div>

                <div className="date-and-time">
                    <div className="date">
                        <DatePicker locale={locale}
                                    size={"large"}
                                    defaultValue = {moment()}
                                    allowClear = {false}
                                    format={"dddd, D MMMM"}
                                    style={{background: '#e8e8e8', color: '#959595', width: '180px', textAlign: 'left'}}/>
                    </div>
                    <div className="time">
                        <RangePicker size={"large"} format={"HH:mm"} style={{background: '#e8e8e8', color: '#959595', width: '180px', textAlign: 'left'}} />
                    </div>
                </div>

                <div className="user-number">

                </div>

                <div className="user-name">

                </div>
            </form>
        );
    }
}

