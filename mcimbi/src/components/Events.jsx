import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form'

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true,
            durbanInfo: false,
            freeStateInfo: false,
            afropunkInfo: false,
            motherCityInfo: false,
            cherryInfo: false

        }
    }

    displayEvents = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })

    }
    displayDurbanInfo = () => {
        this.setState({
            durbanInfo: !this.state.durbanInfo
        })
    }
    displayFreeStateInfo = () => {
        this.setState({
            freeStateInfo: !this.state.freeStateInfo
        })
    }
    displayAfropunk = () => {
        this.setState({
            afropunkInfo: !this.state.afropunkInfo
        })
    }
    displayMotherCity = () => {
        this.setState({
            motherCityInfo: !this.state.motherCityInfo
        })
    }
    displayCherry = () => {
        this.setState({
            cherryInfo: !this.state.cherryInfo
        })
    }
    render() {
        const { isToggle, durbanInfo, cherryInfo, freeStateInfo, afropunkInfo, motherCityInfo } = this.state;
        return (
            <div>
                <h3 className="Events-h3" onClick={() => this.displayEvents()}>Events</h3>
                {isToggle ?
                    <div className="Events">
                        {durbanInfo === false ?
                            <div className="Durban-july" >
                                <h4>Durban July</h4>
                                <div className="Durban-Info" onClick={() => this.displayDurbanInfo()}>
                                    <img src="https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/111409240.JPG"
                                        alt="Durban-July" className="Image-1" />
                                    <img src="https://northcoastcourier.co.za/wp-content/uploads/sites/73/2020/05/Durban-July-6-Medium.jpg"
                                        alt="horse-racing" className="Image-3" />
                                    <br />
                                    <img src="https://regalevents.co.za/wp-content/uploads/2018/12/The-Glenlivet-Jazz-Town-correct-Durban-July-4-870x560.jpg.webp"
                                        alt="The Glenlivet jazztown" className="Image-2" />
                                    <p className="Durban-discription">6 July 2020 Click here for bookings</p>
                                </div>
                            </div> : <div className="Durban-form"><Form /></div>}

                        {freeStateInfo === false ?
                            <div className="Freestate-wine-show">
                                <h4>FreeState Wine Show</h4>
                                <div className="Freestate-info" onClick={() => this.displayFreeStateInfo()}>
                                    <img src="https://oscar.ofm.co.za/img/fr_201971914922.jpg" alt="wine-show"
                                        className className="Wine-1" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCXeqYKyODv_bRUuPuuaAKY7TVVmGgtZnogw&usqp=CAU"
                                        alt="wine-gallery" className="Wine-2" />
                                    <img src="https://www.bloemfonteincourant.co.za/wp-content/uploads/2019/07/pouring-2.jpg"
                                        alt="" className="wine-4" />
                                    <br />
                                    <img src="https://www.sa-wine-farms.co.za/info/articles/2503/images/top_pic.jpg"
                                        alt="gallery" className="wine-3" />
                                </div>
                            </div> : <div className="Freestate-form"><Form /></div>}
                        {afropunkInfo === false ?
                            <div className="Afropunk">
                                <h4>Afropunk</h4>
                                <div className="Afropunk-info" onClick={() => this.displayAfropunk()}>
                                    <img src="https://manrepeller-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/O02A4222.jpg"
                                        alt="afropunk" className="Afro-1" />
                                    <img src="https://imgix.bustle.com/uploads/image/2017/8/31/f9911ca0-fcb2-4159-a78f-aaeca95f2932-afro36.jpg?w=970&h=546&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70"
                                        alt="afro" className="Afro-2" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgNaM02tcvwI4t3fZLmpP99iZYsrvsvf7fGw&usqp=CAU"
                                        alt="afr" className="Afro-3" />
                                </div>
                            </div> : <div className="Afropunk-form"><Form /></div>}
                        {motherCityInfo === false ?
                            <div className="Mother-City-Queer-Project">
                                <h4>Mother City Queer Project</h4>
                                <div className="Mother-city-info" onClick={() => this.displayMotherCity()}>
                                    <img src="https://mollysmit.co.za/wp-content/uploads/2016/04/mcqp.jpg"
                                        alt="mcqp" className="mcqp-1" />
                                    <br />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWyFNxgNuC7i9t3BJ40-5cLKgQTAkZn0c9jg&usqp=CAU"
                                        alt="gay parade" className="mcqp-2" />
                                </div>
                            </div> : <div className="Mother-city-form"><Form /></div>}
                        {cherryInfo === false ?
                            <div className="Cherry-picking-festival">
                                <h4>Cherry Picking Festival</h4>
                                <div className="Cherry-onfo" onClick={() => this.displayCherry()}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxlJ4Pi8kHva3m5WFqx2OrrleRiPzozRMn7Q&usqp=CAU"
                                        alt="cherries" className="cherry-1" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyb0JLJR7cgnLSdo6q_ZkpNc3dwQj_hL0Rjg&usqp=CAU"
                                        alt="cherry pickers" className="cherry-2" />
                                    <br />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlrvFZmlBKYj_MnGmTZe1qVSzMafyyJ_xl1w&usqp=CAU"
                                        alt="logo" className="cherry-3" />
                                </div>
                            </div> : <div className="Cherry-form"><Form /></div>}
                    </div>
                    : null}
            </div>
        );
    }
}

Events.propTypes = {

};

export default Events;