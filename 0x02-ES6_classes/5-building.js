class Building{
    constructor(sqft){
        this._sqft = sqft
    }
    get sqft(){ return this._sqft }
    evacuationWarningMessage(){
        throw new Error("Warning: evacuate the building!")
    }
}
export default Building;