import { db } from '../firebase/firebaseConfig'

export const loadCardMovies = async () => {

    const cardStore = await db.collection(`Movies`).get()
    const cardsList = [];

    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return cardsList
}