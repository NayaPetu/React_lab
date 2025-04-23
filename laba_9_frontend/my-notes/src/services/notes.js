import axios from "axios";

export const fetchNotes = async (filter) => {
    try{
        var resposne = await axios.get("http://localhost:5062/Notes",{
            params: {
                search: filter ?. search,
                sortItem: filter ?. sortItem,
                sortOrder: filter ?. sortOrder,
            },
        });
        return resposne.data. notes;
    }   catch (e) {
        console.error(e);
    }
    
};

export const createNote = async (note) => {
    try{
        var resposne = await axios.post("http://localhost:5062/Notes", note, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        return resposne.status;
    } catch (e){
        console.error(e);
    }
};