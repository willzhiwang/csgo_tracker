import React, { Component } from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import '../App.css';

export class Profile extends Component {

    async componentDidMount() {
        this.loading = true;

        await axios.get(`/api/v1/profile/steam/${this.props.match.params.id}`)
            .then(res => {
                this.loading = false;

                this.profileData = res.data.data;
                console.log(this.profileData);
                this.userName = this.profileData.platformInfo.platformUserHandle;
                this.imageurl = this.profileData.platformInfo.avatarUrl;

                this.stats = this.profileData.segments[0].stats;

                this.timePlayed = this.stats.timePlayed.displayValue;
                this.mvp = this.stats.mvp.displayValue;
                this.kills = this.stats.kills.displayValue;
                this.deaths = this.stats.deaths.displayValue;
                this.kd = this.stats.kd.displayValue;
                this.damage = this.stats.damage.displayValue;
                this.headshots = this.stats.headshots.displayValue;
                this.shotsAccuracy = this.stats.shotsAccuracy.displayValue;
                this.snipersKilled = this.stats.snipersKilled.displayValue;

                this.bombsPlanted = this.stats.bombsPlanted.displayValue;
                this.bombsDefused = this.stats.bombsDefused.displayValue;

                this.moneyEarned = this.stats.moneyEarned.displayValue;
                this.hostagesRescued = this.stats.hostagesRescued.displayValue;

                this.wins = this.stats.wins.displayValue;
                this.losses = this.stats.losses.displayValue;
                this.ties = this.stats.ties.displayValue;
                this.matchesPlayed = this.stats.matchesPlayed.displayValue;

                this.roundsPlayed = this.stats.roundsPlayed.displayValue;
                this.roundsWon = this.stats.roundsWon.displayValue;
                this.wlPercentage = this.stats.wlPercentage.displayValue;
                this.headshotPct = this.stats.headshotPct.displayValue;


            }).catch(err => {
                this.loading = false;
                this.error = err.response.data.message;
                console.log(this.error);
            }
            );
        this.setState({
        })

    }

    render() {
        let content;
        if (this.loading === true) {
            content = <span><h2 style={textstyle}> Loading... </h2></span>;
        }
        else if (this.error) {
            content = <span><h2 style={textstyle}> {this.error}</h2></span>;
        }
        else if (!this.error && this.loading === false) {

            content =
                <Container>
                    <div style={textstyle} >
                        <h5>Steam ID:  {this.props.match.params.id}</h5>
                        <Row>
                            <Col xs="6" sm="4">
                                <img src={this.imageurl} alt class="profile-photo" />
                                <h2>{this.userName}</h2>
                            </Col>
                            <Col>
                                <div class="grid">
                                    <ul>
                                        <li>
                                            <h5>K/D:</h5>
                                            <p>{this.kd}</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Kills:</h5>
                                            <p>{this.kills}</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>deaths:</h5>
                                            <p>{this.deaths}</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="grid">
                                    <ul>
                                        <li>
                                            <h5>Time Played:  {this.timePlayed}</h5>
                                            <h5>mvp:  {this.mvp}</h5>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>Wins: {this.wins}</h5>
                                            <h5>Losses: {this.losses}</h5>
                                            <h5>Win Lose Percentage: {this.wlPercentage}</h5>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h5>Matches Played: {this.matchesPlayed}</h5>
                                            <h5>Rounds played: {this.roundsPlayed}</h5>
                                            <h5>Rounds Won: {this.roundsWon}</h5>
                                        </li>
                                    </ul>

                                </div >
                            </Col>
                        </Row >

                        <Row>
                            <Col>
                                <div class="grid">

                                    <ul>
                                        <li>
                                            <h5>Damage: {this.damage}</h5>
                                            <h5>Headshots: {this.headshots}</h5>
                                            <h5>Headshots Percentage: {this.headshotPct}</h5>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>Shots Accuracy: {this.shotsAccuracy}</h5>
                                            <h5>Sniper Kills: {this.snipersKilled}</h5>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>Bombs Planted: {this.bombsPlanted}</h5>
                                            <h5>Bombs Defused: {this.bombsDefused}</h5>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>Money Earned: ${this.moneyEarned}</h5>
                                            <h5>Hostage Rescued: {this.hostagesRescued}</h5>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                        </Row>

                    </div >
                </Container>
        }
        return (
            <div>
                <Col sm="3" >
                    <Button href="/" color='dark' style={{ marginTop: '2rem', marginBottom: '3rem' }} >Go Back</Button>
                </Col>
                {content}
            </div>
        )
    }
}
const textstyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    textShadow: '0px 0px 2px black',
    maxWidth: '1000px',
    margin: '1rem auto',
    padding: '2rem 1.5rem',
    borderRadius: '20px',
    fontFamily: "Arial"
}

export default Profile