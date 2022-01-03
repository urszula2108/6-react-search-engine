import React, { Component } from "react";
import './FilteredList.css';
import Filters from '../filters/Filters';
import List from '../list/List';
import uniqueId from 'lodash.uniqueid';



class FilteredList extends Component {

    constructor(props) {
        super(props)

        // console.log(uniqueId);
        // console.log(uniqueId('pl'));
        // console.log(uniqueId('com'));


        // this.id = uniqueId('prefix')
        // console.log(this.id)
        // this.id = newId();

        const list = [
            { name: `Urszula`, lastname: `Jeziorna`, id: uniqueId('prefix'), },
            { name: `Krystian`, lastname: `Dziopa`, id: uniqueId('prefix') },
            { name: `Łukasz`, lastname: `Badocha`, id: uniqueId('prefix') },
            { name: `Łukasz`, lastname: `Misiura`, id: uniqueId('prefix') },
            { name: `Ewa`, lastname: `Drozd`, id: uniqueId('prefix') },
            { name: `Marcin`, lastname: `Misiura`, id: uniqueId('prefix') },
            { name: `Monika`, lastname: `Misiura`, id: uniqueId('prefix') }
        ];


        list.forEach((employee) => {
            // console.log(employee);
            // console.log(employee.name);
            let employeeName = employee.name;

            if (employeeName.charAt(employeeName.length - 1) === `a`) {
                employee.sex = `female`;
            } else {
                employee.sex = `male`;
            }
        })


        // console.log(list);

        this.state = {
            inputValue: '',
            list: list,
            filteredList: list,
            checkSexWoman: true,
            checkSexMan: true
        }
    }

    handleCheckBoxWoman = (event) => {
        // console.log(event.target.checked);

        this.setState({
            checkSexWoman: event.target.checked
        }, () => {
            this.filterList()
        })
    }

    handleCheckBoxMan = (event) => {
        // console.log(event.target.checked);

        this.setState({
            checkSexMan: event.target.checked
        }, () => {
            this.filterList()
        })

    }

    handleChange = (e) => {
        // console.log(e);
        // console.log(listToFilter);

        this.setState({
            inputValue: e.target.value,
        }, () => {
            this.filterList()
        })
    }

    filterList = () => {

        let filteredEmployees = this.state.list.filter((employee) => {

            //    console.log(employee);
            //    console.log(employee.name);

            let str = this.state.inputValue;
            // console.log(str);

            if (((employee.name.toLowerCase() + ' ' + employee.lastname.toLowerCase()).includes(str.toLocaleLowerCase())) || ((employee.lastname.toLowerCase() + ' ' + employee.name.toLowerCase()).includes(str.toLocaleLowerCase()))) {

                if (employee.sex === 'female' && this.state.checkSexWoman) {
                    return true
                } else if (employee.sex === 'male' && this.state.checkSexMan) {
                    return true
                }
            }
        })
        // console.log(filteredEmployees);

        this.setState({
            filteredList: filteredEmployees
        })
    }


    render() {

        return (
            <div>
                <Filters usersString={this.state.inputValue}
                    enteredString={this.handleChange}
                    changeBoxWoman={this.handleCheckBoxWoman}
                    changeBoxMan={this.handleCheckBoxMan}
                    valueInputWoman={this.state.checkSexWoman} valueInputMan={this.state.checkSexMan} />
                <List listToDisplay={this.state.filteredList} />
            </div>
        )
    }
}


export default FilteredList;





