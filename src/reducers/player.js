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
        }
    ],
    selectedPlayerIndex: -1
};

export default function Player(state=intialStae, action ) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [...state.players, {  
                name: action.name,
                score: 0,
                created: `${month}/${day}/${year}`
                
            }];
            return {
                ...state,
                players:addPlayerList
            };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1) 
            ];
            return {
               ...state,
               players: removePlayerList
            };
        } 

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
                if(index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${month}/${day}/${year}`
                    };
                }
                return player;    
            });
            return {
                ...state,
                players: updatePlayerList
            };
        }
           
        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
                
            };

        default:
            return state;    
    }   
} 