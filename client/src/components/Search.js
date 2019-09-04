import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Row,
    Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '76561198105694579',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ id: event.target.value });
    }

    static contextTypes = {
        router: PropTypes.object
    }

    notify = e => {
        e.preventDefault();

        if (this.state.id === '') {
            toast(
                "Fill in your ID !"
            );
            this.setState({
                redirect: false
            })

        } else {
            this.setState({
                redirect: true
            })

        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: `/profile/${this.state.id}`,
                id: this.state.id
            }} />
        }
    }

    render() {
        return (

            <div>
                <Form>
                    <FormGroup>
                        <Row style={textstyle}>
                            <Col sm="12" md={{ size: 6, offset: 3 }} style={{
                                marginTop: '5rem'
                            }} >
                                <h1>Track CS:GO Player Stats</h1>
                                <Label for='id' style={{ marginTop: '8rem' }}  >Steam ID</Label>
                                <Input
                                    type='text'
                                    id='id'
                                    name='id'

                                    placeholder='Steam ID on your profile, ex: 76561198105694579'
                                    //className='mb-3'
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                />
                                <ToastContainer
                                    position="top-center"
                                    autoClose={3000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnVisibilityChange
                                    draggable
                                    pauseOnHover
                                />
                                {this.renderRedirect()}
                                <Button onClick={this.notify} color='dark' style={{ marginTop: '3rem' }} block>Search</Button>

                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
                <NavLink href="/about" style={{ color: '#D9D9D9', marginTop: '10rem' }}>About</NavLink>

            </div>
        );
    }

}
const textstyle = {
    color: 'white',
    textShadow: '0px 0px 2px black'
}


export default Search
