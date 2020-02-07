import React, { Component } from 'react'
import Card from './Card'
import List from './List'

export class Dashbord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalList: [],
            propertyList: [],
            toggleGrid: true,
            minPrize: 0,
            maxPrize: 0,
            step: 0,
            minimuPrize: 0,
            maximumPrize:0
        }

    }

    toggleGridView = () => {
        const toggle = !this.state.toggleGrid
        this.setState({ toggleGrid: toggle })
    }
    sortByPrice = () => {
        const propertyListSort = this.state.propertyList.sort((property1, property2) => property1.rent - property2.rent);
        this.setState({ propertyList: propertyListSort })
    }
    rangeSelector = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value },this.updateFilter);
        // this.setState({
        //     propertyList: this.state.originalList.filter(a => a.rent > this.state.minPrize && a.rent < this.state.maxPrize)
        // })

    }
    updateFilter (){
        this.setState({
            propertyList: this.state.originalList.filter(a => a.rent > this.state.minPrize && a.rent < this.state.maxPrize)
        })
    }
    componentDidMount() {
        fetch(`https://demo8808386.mockable.io/fetchProperties`).then(res => res.json()).then(res => {

            const sortitem = res.data.sort((a, b) => a.rent - b.rent);
            const step = parseInt(sortitem[sortitem.length - 1].rent / sortitem[0].rent);
            console.log(parseInt(step));
            this.setState({
                propertyList: res.data,
                minPrize: sortitem[0].rent,
                maxPrize: sortitem[sortitem.length - 1].rent,
                maximumPrize: sortitem[sortitem.length - 1].rent,
                minimuPrize: sortitem[0].rent,
                originalList: res.data,

                step
            })

        })


    }

    render() {
        console.log(this.state)
        const grid = <div className='grid-dashboard container'> {this.state.propertyList.map(property => <Card key={property.id} item={property} />)} </div>
        const list = <div className='list-dahboard container'>  {this.state.propertyList.map(property => <List key={property.id} item={property} />)} </div>
        return (
            <div>
                {/* <input type="range" name="minprize" onChange={this.rangeSelector} value={this.state.maxPrize} step={this.state.step} min={this.state.maxPrize} max={this.state.maxPrize}></input> */}
                <input type="range" name="maxprize" onChange={this.rangeSelector} value={this.state.minPrize} step={this.state.step} min={this.state.minPrize} max={this.state.maxPrize}></input>
                <button className='btn-toggle' onClick={this.toggleGridView}>Toggle {this.state.toggleGrid ? 'List' : 'Grid'}</button>
                <button className='btn-sort' onClick={this.sortByPrice}>Sort by Price</button>
                {this.state.toggleGrid ? grid : list}
            </div>
        )
    }
}

export default Dashbord
