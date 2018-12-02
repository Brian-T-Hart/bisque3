import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/calAPI";
import PubSub from 'pubsub-js';
import DeleteBtn from "../../components/DeleteBtn";
import { TableContainerCal, TableRow} from "../Table";
import "../../styles/Table.css";

class CalTable extends Component {
    state = {
        events: []
    };

    componentWillMount() {
        this.token = PubSub.subscribe('UPDATE_LIST',this.loadEvents.bind(this));
    }
    componentDidMount() {
        this.loadEvents();
        PubSub.publish('UPDATE_LIST', this.token)
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
      }

    loadEvents = () => {
        
        API.getEvents({
            repRepId: localStorage.getItem('rep_id')
        })
        .then(res => {
            console.log(res.data);
            this.setState({ events: res.data })
        }
        )
        .catch(err => console.log(err));
    }; 

    deleteEvent = id => {
        API.deleteEvent(id)
          .then(res => this.loadEvents())
          .catch(err => console.log(err));
      };
   
    render() {
        return (
            <div>
            <Row>
                <Col size="xs-12">
                    <div className='private text-center table-responsive event-table'>
                        {this.state.events.length ? (
                       <TableContainerCal>
                        {this.state.events.map(event => (
                            <TableRow key={event.calendar_id}>
                                <td className="col-md-3">{event.event_title}</td>
                                <td className="col-md-2">{event.date}</td>
                                <td className="col-md-1">{event.start_time}</td>
                                <td className="col-md-1">{event.end_time}</td>
                                <td className="col-md-5">{event.note}</td>
                                {/* <td className="col-md-1">{event.createdAt}</td> */}

                                </TableRow>
                                ))}
                                </TableContainerCal>
                                ) : (
                            <h3>No Records Available</h3>
                            )}
                    </div>
                </Col>
            </Row>
            </div>

        );
    }
}

export default CalTable;