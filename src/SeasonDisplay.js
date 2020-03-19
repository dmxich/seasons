import React from 'react';
import './SeasonDisplay.css';
//import ReactDOM from 'react-dom';


//advanced version without any repetition 
const seasonConfig = {
    Winter: {
        iconName: 'snowflake ',
        seasonText: 'Brrr, it\'\s chilly!'
    },
    Summer: {
        iconName: 'sun',
        seasonText: 'Let\'\s hit the beach!'
    }
};


const SeasonDisplay = (props) => {
    let month = new Date().getMonth();

    
    let season = getSeason(props.lat, props.longt, month);

    
    //my personal brut force way
    /*
    if(season  === "Winter"){
        icon = <i class="snowflake icon"/>;
    }else{
        icon = <i class="sun icon"/>
    }
    
    return (
        
        <div>
            <div>{icon}</div>
            <h1>
                {season === "Winter" ? 'Brrr, it\'\s chilly!': 'Let\'\s hit the beach!' }
            </h1>
            <div>{icon}</div>
        </div>          
            
        
    );
    */ 

    //more refuctored version
    /*
    let iconName = (season === 'Winter'? 'snowflake' : 'sun'); 
    let seasonText = (season === "Winter" ? 'Brrr, it\'\s chilly!': 'Let\'\s hit the beach!')
    


    return (
        <div>
            <div><i className={`${iconName} icon`} /></div>
            <h1>{seasonText}</h1>
            <div><i className={`${iconName} icon`} /></div>
        </div> 
    );
    */

    //final version ES 2015 deconstruct properties from object
    const {iconName, seasonText} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <div><i className={`massive ${iconName} icon icon-left icon-color`}  /></div>
            <h1>{seasonText}</h1>
            <div><i className={`massive ${iconName} icon icon-right icon-color`} /></div>
        </div>
    );

};

//getSeason function
const getSeason = (lat, longt, month) => {


    //determinig the season in Southern Hemisphere
    if ((month > 0 && month < 3) || (month > 8 && month < 12)) {
        if (lat > 0) return 'Winter';
        else {
            return 'Summer';
        }
    }

    //determinig the season in Northern Hemisphere
    if ((month > 0 && month < 3) || (month > 8 && month < 12)) {
        if (lat < 0) return 'Summer';
        else {
            return 'Winter';
        }
    }
};


export default SeasonDisplay;