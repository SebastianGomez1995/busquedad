import React, { Component } from 'react'
import Fruit from './Fruit';
import SearchBox from './SearchBox';

export default class Main extends Component {

    state={
        data: [],
        filteredData: []
    }

    componentDidMount(){
        fetch('./fruits.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data
            })
        })
    }

    lookForAFruit = (text) => {
        this.setState({
            ...this.state,
            filteredData: text
        })
    }

    render() {
        return (
            <div>
                <SearchBox data={this.state.data} filter={this.lookForAFruit}/>
                <Fruit data={this.state.filteredData.length !== 0 ? this.state.filteredData : this.state.data} />
            </div>
        )
    }
}
