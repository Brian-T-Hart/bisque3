import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import CalAPI from "../../utils/calAPI";
import PubSub from 'pubsub-js';
import DeleteBtn from "../../components/DeleteBtn";
import { TableContainerCust, TableRow} from "../Table";
import "../Table/Table.css";

class Calendar extends Component {
    state = {
        events: []
    };

    componentWillMount() {
        this.token = PubSub.subscribe('UPDATE_LIST',this.loadCalendars.bind(this));
    }
    componentDidMount() {
        this.loadCalendars();
        PubSub.publish('UPDATE_LIST', this.token)
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
      }

    loadCalendars = () => {
        
        API.getAccounts({
            repRepId: localStorage.getItem('rep_id')
        })
        .then(res => {
            console.log(res);
            this.setState({ calendars: res.data })
        }
        )
        .catch(err => console.log(err));
    };
   
    render() {
        return (
            <div>
            <Row>
                {/* <Col size="md-12 sm-12">
                    <div className='private text-center calendar-table'>
                        {this.state.calendars.length ? (
                       <TableContainerCust>
                        {this.state.calendars.map(calendar => (
                            <TableRow key={calendar.calendar_id}>
                                <td className="col-md-1">{calendar.calendar_id}</td>
                                <td className="col-md-1">{calendar.event_title}</td>
                                <td className="col-md-1">{calendar.start_time}</td>
                                <td className="col-md-2">{calendar.end_time}</td>
                                <td className="col-md-1">{calendar.note}</td>
                                </TableRow>
                                ))}
                                </TableContainerCust>
                                ) : (
                            <h3>No Results to Display</h3>
                            )}
                    </div>
                </Col> */}
            </Row>
            </div>

        );
    }
}

export default Calendar;