import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    /* Super is necessary in inheritance.*/
    super(sqft, floors);
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
export default SkyHighBuilding;
