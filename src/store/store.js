//רק בסיעתא דשמיא!!!!!!!!!!!!!!!!!!!
import produce from 'immer'
import { createStore } from 'redux'



const initialState = {
    user: {
        firstName: "",
        lastName: "",
        tz: "",
        birthDate:null,
        gemder: 1,
        userHMO: 0,
        childrenOfUser: []

    }
}

const reducer = produce((state, action) => {

    switch (action.type) {
      
        case 'updateUser':
            state.user = action.payload

        case "updateFirstName":
            state.user.firstName = action.payload
            break;
        case "updateLastName":
            state.user.lastName = action.payload
            break;
        case "updateTz":
            state.user.tz = action.payload
            break;
        case "updateBirthDate":
            state.user.birthDate = action.payload
            break;
        case "updateGender":
            console.log(action.payload+"store")
            if (action.payload == "male")
                state.user.gemder = 1
            else
                state.user.gemder = 2
            break;
        case "updateHMO":
            state.user.userHMO = action.payload
            break;
        case "addChildren":
            state.user.childrenOfUser = []
            console.log("addStore");
            let f = []
            for (let i = 0; i < action.payload; i++) {
                f.push({ id: "j" })
                console.log(f[i].id)
                state.user.childrenOfUser.push({ name: "", tz: "", birthDate: null })
            }
    
            break;
        case "updateIdChild":
            console.log("iiii-"+action.payload.i)
            state.user.childrenOfUser[action.payload.i].tz = action.payload.e
            console.log("tz "+state.user.childrenOfUser[action.payload.i].tz)
            break;
        case "updateNameChild":

            state.user.childrenOfUser[action.payload.i].name = action.payload.e
            console.log(state.user.childrenOfUser[action.payload.i].name)
            break;

        case "updateNameBirthDateChild":
            state.user.childrenOfUser[action.payload.i].birthDate = action.payload.e
            break;

        case "init":
                state.user = {
                firstName: "",
                lastName: "",
                tz: "",
                birthDate: null,
                gemder: 0,
                userHMO: 0,
                childrenOfUser: []

            }
            break;
       
    }
}, initialState)

export const store = createStore(reducer);
