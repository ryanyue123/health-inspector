import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="searchbar-container">
                <form className="search-form">
                    <input
                        type="search"
                        name="search"
                        value={this.state.search}
                        className="search-input"
                        placeholder="Search Restaurants"
                        onChange={this.handleSearchChange}
                    />
                    <button type="submit" className="search-button" onClick={this.handleSubmit}>
                        <i className="search-icon fa fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}
export default SearchBar
