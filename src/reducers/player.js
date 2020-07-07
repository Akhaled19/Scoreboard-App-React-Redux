import * as PlayerActionTypes from  "../actionTypes/player";

const intialStae = {
    players:[
        {
            name: 'Jim Hoskins',
            score: 31,
            created: '7/6/2020',
            updated: '7/7/2020'
        },
        {
            name: 'Andrew Chalkley',
            score: 20,
            created: '7/6/2020',
            updated: '7/7/2020'
        },
        {
            name: 'Alena Holligan',
            score: 50,
            created: '7/6/2020',
            updated: '7/7/2020'
        },
    ],
    selectedPlayerIndex: -1
};

export default function Player(state=intialStae, action ) {
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];
        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1) 
            ]; 
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {
                if(index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player;
            });  
        default:
            return state;    
    }   
} 