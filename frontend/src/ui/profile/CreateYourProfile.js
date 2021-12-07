import React, { useState, useEffect} from "react";
import './CreateYourProfile.css'
/*
import {fetchAllPodcasts} from "../../store/podcast";
*/
import {useDispatch, useSelector} from "react-redux";
import { View, Text, Alert} from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import { Picker } from '@react-native-community/picker'
import axios from 'axios';



export const PodcastSelect = () => {
    const cities = [
        {name:"Los Angeles", id: 1},
        {name:"Philadelphia", id: 2},
        {name:"Chicago", id: 3},
        {name:"Washington DC", id: 4},
        {name:"New York", id: 5},
        {name:"San Diego", id: 6},
        {name:"Fort Worth", id: 7},
        {name:"Houston", id: 8},
        {name:"Cleveland", id: 9},
        {name:"Pittsburg", id: 10},
        {name:"Detroit", id: 11},
        {name:"Jacksonville", id: 12},
        {name:"Denver", id: 13},
        {name:"Columbus", id: 14},
        {name:"El Paso", id: 15},
        {name:"New Orleans", id: 16},
        {name:"Cincinnati", id: 17},
        {name:"Nashville", id: 18},
        {name:"Miami", id: 19},
        {name:"Tampa", id: 20},
        {name:"Bakersfield", id: 22},
        {name:"Tuscon", id: 23},
        {name:"Baltimore", id: 25},
        {name:"St Louis", id: 26},
        {name:"Las Vegas", id: 27},
        {name:"Memphis", id: 28},
        {name:"Seattle", id: 29},
        {name:"San Fransisco", id: 30},
    ]
    const formik = useFormik({
        initialValues: { city_name: '' },
        onSubmit: values => {
            axios({
                method: 'post',
                url: <domain-name> + 'url',
                    data: {'city_name' 'values.city_name'},
                    headers: {'Content-Type', 'application/json'}
                    }).then(response => {
                    }).catch(err => {
                        Alert.alert('An error occurred!', err.message,
                            [{ text: 'Okay' }]);
                    })}
                    });
                    return(
                    <View>

                        <Picker
                            enabled={true}
                            mode="dropdown"
                            placeholder="Select City"
                            onValueChange={formik.handleChange('city_name')}
                            selectedValue={formik.values.city_name}
                        >
                            {cities.map((item) => {
                                return(
                                    <Picker
                                    label={item.name.toString()}
                                    value={item.name.toString()}
                                    key={item.id.toString()} />)
                            })}
                        </Picker>
                        <Button
                            mode="contained"
                            title='submit'
                            onPress={formik.handleSubmit}
                        >
                            Enter
                        </Button>
                    </View>
                    )};