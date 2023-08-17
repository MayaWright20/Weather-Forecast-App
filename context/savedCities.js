import { createContext, useState } from 'react';

export const SavedCitiesContext = createContext({
    ids: [],
    addCity: (id)=> {},
    removeCity: (id) => {}
});

function SavedCitiesContextProvider({children}){

    const [savedCitiesIds, setSavedCitiesIds] = useState([]);

    function addCity(id){
        setSavedCitiesIds((currentSavedCityIds)=> [...currentSavedCityIds, id])
    }
    
    function removeCity(id){
        setSavedCitiesIds((currentSavedCityIds)=> currentSavedCityIds.filter((cityId) => cityId !== id))
    }

    const value = {
        ids: savedCitiesIds,
        addCity: addCity,
        removeCity: removeCity
    }


    return <SavedCitiesContext.Provider value={value}>{children}</SavedCitiesContext.Provider>
}

export default SavedCitiesContextProvider;